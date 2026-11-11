// YIKIM GÜVENLİK API'Sİ — Cloudflare Workers (fetch) sürümü.
//
// Yerel Node sürümüyle (`guvenlik-api/src/server.js`) AYNI yollar, aynı yanıt
// biçimi ve aynı imza kuralları. Farklar:
//   * DB: D1 (SQLite) — `db.js`
//   * Kripto: yalnız ucuz işlemler (Ed25519 + HMAC + AES-GCM) — `kripto.js`
//   * Her şey async; tek bir hatalı istek 500 döner, isolate çökmez.
//
// Neden scrypt yok: Workers ücretsiz planı istek başına 10 ms CPU veriyor;
// scrypt (~30-100 ms) isteği öldürürdü. İstemci parolayı zaten PBKDF2-SHA256
// 210.000 tur ile özetliyor; sunucu HMAC(tuz, pepper|özet) saklıyor.

import { dbYap, simdi, ON_DAKIKA } from "./db.js";
import * as kripto from "./kripto.js";

const KOD_HARFLERI = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const GOVDE_SINIRI = 64 * 1024;

// IP başına hız sınırı: isolate başına (Workers'ta global durum yok).
// Cloudflare zaten DDoS koruması yapıyor; bu yalnız kaba bir sınırdır.
const IP_SAYAC = new Map();
const PENCERE = 60 * 1000;
const IP_LIMITI = 120;

function hizSiniriAsildi(ip) {
  const t = Date.now();
  const k = IP_SAYAC.get(ip);
  if (!k || t - k[0] > PENCERE) {
    IP_SAYAC.set(ip, [t, 1]);
    return false;
  }
  k[1] += 1;
  return k[1] > IP_LIMITI;
}

export function kodUret(uzunluk = 8) {
  const dizi = new Uint32Array(uzunluk);
  crypto.getRandomValues(dizi);
  let k = "";
  for (let i = 0; i < uzunluk; i++) k += KOD_HARFLERI[dizi[i] % KOD_HARFLERI.length];
  return k;
}

function imzaMetni(cihaz_id, ts, nonce, govdeMetni) {
  return `${cihaz_id}|${ts}|${nonce}|${govdeMetni}`;
}

// ---------- yanıt ----------

function cevap(env, durum, govde) {
  return new Response(JSON.stringify(kripto.imzaliYanit(env.YIKIM_IMZA_GIZLI, govde)), {
    status: durum,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "content-type,x-bot-anahtari",
      "access-control-allow-methods": "POST,GET,OPTIONS",
    },
  });
}

const hata = (env, durum, mesaj) => cevap(env, durum, { hata: mesaj });

// ---------- istek doğrulama ----------

async function istekDogrula(env, d, zarf, govdeMetni, nonceGerekli = true) {
  const { cihaz_id, ts, nonce, imza: imza_b64 } = zarf;
  const pub_key = zarf.pub_key ?? zarf.govde?.pub_key;
  if (!cihaz_id || !nonce || !imza_b64 || typeof ts !== "number") {
    return { hata: "eksik imza alanlari" };
  }
  if (Math.abs(simdi() - ts) >= 5 * 60 * 1000) return { hata: "zaman penceresi" };
  // Yalnız yazan uçlarda nonce saklanır. Salt-okunur uçlar (durum/kozmetik
  // okuma) 5 sn'de bir çağrıldığı için her istekte D1'e yazmak ücretsiz
  // kotayı tüketirdi; tekrar oynatma bu uçlarda yeni bir yetki vermez.
  if (nonceGerekli && !(await d.nonceKabul(nonce))) return { hata: "nonce kullanilmis" };

  const mesaj = imzaMetni(cihaz_id, ts, nonce, govdeMetni);
  const kayitli = await d.cihazBul(cihaz_id);
  if (kayitli) {
    if (kayitli.iptal) return { hata: "cihaz iptal edilmis" };
    if (!kripto.istemciImzaDogrula(kayitli.pub_key, imza_b64, mesaj)) return { hata: "imza gecersiz" };
    await d.cihazSonGorulen(cihaz_id);
    return { cihaz: kayitli };
  }
  if (!pub_key) return { hata: "cihaz kayitli degil (pub_key gerekli)" };
  if (!kripto.istemciImzaDogrula(pub_key, imza_b64, mesaj)) return { hata: "imza gecersiz" };
  return { cihaz: { cihaz_id, pub_key, yeni: true } };
}

// ---------- yollar ----------

async function saglik(env, d) {
  await d.ipTemizle();
  await d.nonceTemizle();
  const bot = !(await d.botKapaliMi());
  return cevap(env, 200, {
    durum: "ok",
    bot_acik: bot,
    sunucu_genel_anahtar: kripto.sunucuPubB64(env.YIKIM_IMZA_GIZLI),
    zaman: simdi(),
  });
}

async function ping(env, d) {
  await d.botPingYaz();
  return cevap(env, 200, { tamam: true, zaman: simdi() });
}

async function cihazKaydet(env, d, govde, cihaz) {
  const { cihaz_id, pub_key } = cihaz ?? {};
  if (!cihaz_id || !pub_key) return hata(env, 400, "cihaz_id/pub_key eksik");
  if (!kripto.pubCoz(pub_key)) return hata(env, 400, "pub_key gecersiz");
  await d.cihazKaydet(cihaz_id, pub_key);
  await d.olayKaydet("cihaz_kayit", null, cihaz_id, "kayit");
  return cevap(env, 200, { tamam: true });
}

async function baglamaKodIste(env, d, govde, cihaz) {
  const ic = govde.govde ?? govde ?? {};
  const { hesap_anahtar, hesap_ad, tur } = ic;
  if (!hesap_anahtar || !hesap_ad || !tur) return hata(env, 400, "hesap bilgisi eksik");
  const mevcut = await d.baglamaKodlarBul(hesap_anahtar);
  if (mevcut && simdi() - mevcut.olusturma < ON_DAKIKA) {
    return cevap(env, 200, {
      kod: mevcut.kod,
      kalan_sn: 600 - Math.floor((simdi() - mevcut.olusturma) / 1000),
    });
  }
  const kod = kodUret();
  await d.baglamaKodKaydet(kod, hesap_anahtar, hesap_ad, tur, cihaz.cihaz_id);
  await d.olayKaydet("baglama_kod", hesap_anahtar, cihaz.cihaz_id, "/bagla kodu uretildi");
  return cevap(env, 200, { kod, kalan_sn: 600 });
}

async function baglamaDurum(env, d, govde) {
  const b = await d.baglantiBul((govde.govde ?? govde ?? {}).hesap_anahtar);
  if (!b) return cevap(env, 200, { baglandi: false });
  return cevap(env, 200, {
    baglandi: b.durum === "aktif",
    discord_id: b.discord_id,
    discord_ad: b.discord_ad,
    rol_yol: !!b.rol_yol,
  });
}

async function baglamaDogrula(env, d, icerik) {
  const { kod, discord_id, discord_ad, rol_yol } = icerik;
  if (!kod || typeof kod !== "string" || !discord_id || typeof discord_id !== "string") {
    return hata(env, 400, "kod/discord_id eksik");
  }
  const kayit = await d.baglamaKodBul(kod);
  if (!kayit) return hata(env, 404, "kod bulunamadi");
  if (simdi() - kayit.olusturma > ON_DAKIKA) {
    await d.baglamaKodSil(kod);
    return hata(env, 410, "kod suresi doldu");
  }
  if (kayit.kullanildi) return hata(env, 409, "kod daha once kullanilmis");

  const hesap = await d.hesapYoksaOlusturGetir(kayit.hesap_anahtar, kayit.hesap_ad, kayit.tur, "");
  if (hesap.tur === "cracked" && !hesap.sahip_istisna) {
    const n = await d.crackBaglantiSayisi(discord_id);
    if (n >= hesap.crack_limiti) return hata(env, 429, `crack siniri (${n}/${hesap.crack_limiti})`);
  }
  await d.baglamaKodKullan(kod);
  await d.baglantiKaydet(kayit.hesap_anahtar, kayit.tur, discord_id, discord_ad, !!rol_yol);
  await d.olayKaydet("baglama", kayit.hesap_anahtar, kayit.cihaz_id, `discord ${discord_id}`);
  return cevap(env, 200, { tamam: true, hesap_anahtar: kayit.hesap_anahtar });
}

async function sifirlaKod(env, d, icerik) {
  const { hesap_anahtar, hesap_ad, discord_id } = icerik;
  if (!discord_id) return hata(env, 400, "discord_id eksik");

  let hesap = hesap_anahtar ? await d.hesapBul(hesap_anahtar) : null;
  if (!hesap && hesap_ad) hesap = await d.hesapAdBul(hesap_ad);
  if (!hesap) return hata(env, 404, "hesap bulunamadi");

  const b = await d.baglantiBul(hesap.anahtar);
  if (!b || b.durum !== "aktif") return hata(env, 409, "baglanti_yok");
  if (b.discord_id !== discord_id) return hata(env, 403, "hesap baska bir discord hesabina bagli");

  const kod = kodUret();
  await d.sifreKodSilAnahtar(hesap.anahtar);
  await d.sifreKodKaydet(kod, hesap.anahtar);
  await d.olayKaydet("sifre_kod", hesap.anahtar, null, `discord ${discord_id} kod istedi`);
  return cevap(env, 200, { kod, kalan_sn: 600, hesap_ad: hesap.ad });
}

async function sifirlaDogrula(env, d, govde, cihaz) {
  const { kod, parola_hash } = govde.govde ?? govde ?? {};
  if (!kod || !parola_hash) return hata(env, 400, "kod veya parola eksik");
  const kayit = await d.sifreKodBul(kod);
  if (!kayit) return hata(env, 404, "kod gecersiz");
  if (await d.kilitVar(kayit.hesap_anahtar, cihaz.cihaz_id)) return hata(env, 423, "cihaz 24 saat kilitli");
  if (kayit.kullanildi) return hata(env, 409, "kod kullanilmis");
  if (simdi() - kayit.olusturma > ON_DAKIKA) {
    await d.sifreKodSil(kod);
    return hata(env, 410, "kod suresi doldu");
  }
  const hesap = await d.hesapBul(kayit.hesap_anahtar);
  if (!hesap) return hata(env, 404, "hesap yok");
  const yeni = kripto.sifreKaydiUret(parola_hash, env.YIKIM_PEPPER, kripto.zarfAnahtari(env.YIKIM_ANAHTAR));
  await d.hesapSifreKaydet(kayit.hesap_anahtar, yeni.tuz, yeni.argon_veri);
  await d.sifreKodKullan(kod);
  await d.denemeSifirla(kayit.hesap_anahtar, cihaz.cihaz_id);
  await d.olayKaydet("sifre_sifirla", kayit.hesap_anahtar, cihaz.cihaz_id, "yeni parola");
  return cevap(env, 200, { tamam: true });
}

async function parolaKur(env, d, govde, cihaz) {
  const { hesap_anahtar, parola_hash } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar || !parola_hash) return hata(env, 400, "hesap/parola eksik");
  const hesap = await d.hesapBul(hesap_anahtar);
  if (!hesap) return hata(env, 404, "hesap yok");
  const b = await d.baglantiBul(hesap_anahtar);
  if (!b || b.durum !== "aktif") return hata(env, 409, "baglanti_yok");
  if (hesap.sifre_var) return hata(env, 409, "parola_var");
  const yeni = kripto.sifreKaydiUret(parola_hash, env.YIKIM_PEPPER, kripto.zarfAnahtari(env.YIKIM_ANAHTAR));
  await d.hesapSifreKaydet(hesap_anahtar, yeni.tuz, yeni.argon_veri);
  await d.denemeSifirla(hesap_anahtar, cihaz.cihaz_id);
  await d.olayKaydet("parola_kur", hesap_anahtar, cihaz.cihaz_id, "ilk parola");
  return cevap(env, 200, { tamam: true });
}

async function girisDogrula(env, d, govde, cihaz, istekIp) {
  const { hesap_anahtar, hesap_ad, tur, parola_hash, ip: istemciIp } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar || !hesap_ad || !tur) return hata(env, 400, "hesap bilgisi eksik");
  const hesap = await d.hesapYoksaOlusturGetir(hesap_anahtar, hesap_ad, tur, "");
  if (await d.kilitVar(hesap_anahtar, cihaz.cihaz_id)) {
    return hata(env, 423, "24 saat kilitli (cok fazla hatali deneme)");
  }
  // IP kaydı: bağlantı IP'si (Cloudflare) önceliklidir; yerel/özel IP'ler yok sayılır.
  const kayitIp =
    istekIp && istekIp !== "127.0.0.1" && istekIp !== "::1" ? istekIp : String(istemciIp || "").trim().slice(0, 60);
  if (kayitIp) await d.ipKaydet(cihaz.cihaz_id, kayitIp);

  if (!hesap.sifre_var) {
    if (tur !== "microsoft") return hata(env, 409, "parola_yok");
    const b = await d.baglantiBul(hesap_anahtar);
    return cevap(env, 200, {
      dogrulandi: false,
      neden: b?.durum === "aktif" ? "parola_yok" : "baglanti_yok",
      yetki_bitis: 0,
    });
  }

  const anahtar = kripto.zarfAnahtari(env.YIKIM_ANAHTAR);
  const sonuc = kripto.parolaKontrol(hesap, parola_hash, env.YIKIM_PEPPER, anahtar);
  if (sonuc.eski) {
    // scrypt doğrulayıcısı Workers ücretsiz planında hesaplanamaz.
    return hata(env, 409, "eski_parola_sifirla");
  }
  if (!sonuc.dogru) {
    const deneme = (await d.denemeSay(hesap_anahtar, cihaz.cihaz_id)) + 1;
    await d.denemeArtir(hesap_anahtar, cihaz.cihaz_id);
    if (deneme >= 5) await d.kilitKoy(hesap_anahtar, cihaz.cihaz_id, 24, "5 hatali parola");
    await d.olayKaydet("giris_basarisiz", hesap_anahtar, cihaz.cihaz_id, `deneme ${deneme}`);
    return hata(env, 401, `parola hatali (${5 - deneme} hakki)`);
  }
  await d.denemeSifirla(hesap_anahtar, cihaz.cihaz_id);
  const b = await d.baglantiBul(hesap_anahtar);
  if (!b || b.durum !== "aktif") return hata(env, 409, "baglanti_yok");
  const bitis = simdi() + 7 * 24 * 60 * 60 * 1000;
  await d.yetkiBitisYaz(cihaz.cihaz_id, bitis);
  await d.sonGirisYaz(hesap_anahtar);
  await d.olayKaydet("giris", hesap_anahtar, cihaz.cihaz_id, "basarili");
  return cevap(env, 200, {
    dogrulandi: true,
    rol_yol: !!b.rol_yol,
    yetki_bitis: bitis,
    kozmetik: await d.kozmetikOku(hesap_anahtar),
  });
}

async function rolGuncelle(env, d, icerik) {
  const { discord_id, rol_yol } = icerik;
  if (!discord_id || typeof discord_id !== "string") return hata(env, 400, "discord_id eksik");
  await d.rolYazDiscord(discord_id, !!rol_yol);
  await d.olayKaydet(
    rol_yol ? "rol_verildi" : "rol_alindi",
    null,
    null,
    `discord ${discord_id} rol_yol=${!!rol_yol}`
  );
  return cevap(env, 200, { tamam: true, discord_id, rol_yol: !!rol_yol });
}

async function olayKaydetYolu(env, d, govde, cihaz) {
  const { ip: ipv4 } = govde.govde ?? govde ?? {};
  if (!ipv4) return hata(env, 400, "ip eksik");
  const silinen = await d.ipKaydet(cihaz.cihaz_id, String(ipv4).slice(0, 60));
  return cevap(env, 200, { tamam: true, temizlenen_ip: silinen });
}

async function kozmetikYazYolu(env, d, govde, cihaz) {
  const { hesap_anahtar, surum, pelerin_url, elytra_url, skin_url, saklanan } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar) return hata(env, 400, "hesap_anahtar eksik");
  await d.kozmetikYaz(hesap_anahtar, { surum, pelerin_url, elytra_url, skin_url, saklanan });
  await d.olayKaydet("kozmetik_yaz", hesap_anahtar, cihaz.cihaz_id, "kayit");
  return cevap(env, 200, { tamam: true });
}

async function kozmetikOkuYolu(env, d, govde) {
  const { hesap_anahtar } = govde.govde ?? govde ?? {};
  return cevap(env, 200, { kozmetik: await d.kozmetikOku(hesap_anahtar) });
}

const CIHAZ_YOLLARI = {
  "/api/cihaz/kaydet": cihazKaydet,
  "/api/baglama/kod": baglamaKodIste,
  "/api/baglama/durum": baglamaDurum,
  "/api/parola/kur": parolaKur,
  "/api/giris/dogrula": girisDogrula,
  "/api/sifirla/dogrula": sifirlaDogrula,
  "/api/olay/kaydet": olayKaydetYolu,
  "/api/kozmetik/yaz": kozmetikYazYolu,
  "/api/kozmetik/oku": kozmetikOkuYolu,
};

// Tekrar koruması (nonce) gerektirmeyen salt-okunur uçlar: launcher bunları
// 5 saniyede bir çağırıyor, her çağrıda D1'e nonce yazmak kotayı tüketirdi.
const SALT_OKUNUR = new Set(["/api/baglama/durum", "/api/kozmetik/oku"]);

// Bot uçları: gövde imzasız, `x-bot-anahtari` başlığıyla korunur.
const BOT_YOLLARI = {
  "/api/baglama/dogrula": baglamaDogrula,
  "/api/sifirla/iste": sifirlaKod,
  "/api/rol/guncelle": rolGuncelle,
};

async function govdeOku(request) {
  const metin = await request.text();
  if (metin.length > GOVDE_SINIRI) return { hata: "govde cok buyuk", durum: 413 };
  let govde;
  try {
    govde = metin ? JSON.parse(metin) : {};
  } catch {
    return { hata: "bozuk govde", durum: 400 };
  }
  if (!govde || typeof govde !== "object" || Array.isArray(govde)) {
    return { hata: "govde nesne olmali", durum: 400 };
  }
  return { govde };
}

async function yonlendir(request, env) {
  const url = new URL(request.url);
  const yol = url.pathname.replace(/\/+$/, "") || "/";
  const d = dbYap(env.DB);

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "access-control-allow-origin": "*",
        "access-control-allow-headers": "content-type,x-bot-anahtari",
        "access-control-allow-methods": "POST,GET,OPTIONS",
      },
    });
  }

  if (yol === "/api/saglik" || yol === "/") return saglik(env, d);
  if (request.method !== "POST") return hata(env, 405, "POST gerekli");

  // İstemci IP'si: Vercel proxy'sinden geldiğinde gerçek IP `x-forwarded-for`'dadır
  // (Cloudflare'in gördüğü `cf-connecting-ip` o durumda Vercel'in sunucusudur).
  const xff = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  const ip = xff || (request.headers.get("cf-connecting-ip") || "0.0.0.0").split(",")[0].trim();

  // --- bot uçları ---
  const botHedef = BOT_YOLLARI[yol];
  if (yol === "/api/ping") {
    const anahtar = env.YIKIM_BOT_ANAHTARI || "";
    if (!anahtar || request.headers.get("x-bot-anahtari") !== anahtar) {
      return hata(env, 401, "bot anahtari gecersiz");
    }
    return ping(env, d);
  }
  if (botHedef) {
    const anahtar = env.YIKIM_BOT_ANAHTARI || "";
    if (!anahtar || request.headers.get("x-bot-anahtari") !== anahtar) {
      return hata(env, 401, "bot anahtari gecersiz");
    }
    const g = await govdeOku(request);
    if (g.hata) return hata(env, g.durum, g.hata);
    return botHedef(env, d, g.govde);
  }

  // --- cihaz uçları (Ed25519 imzalı) ---
  const hedef = CIHAZ_YOLLARI[yol];
  if (!hedef) return hata(env, 404, "yol yok");
  if (hizSiniriAsildi(ip)) return hata(env, 429, "hiz siniri");

  const g = await govdeOku(request);
  if (g.hata) return hata(env, g.durum, g.hata);

  const zarf = g.govde;
  const govdeMetni = JSON.stringify(zarf.govde ?? zarf ?? {});
  const dogrula = await istekDogrula(env, d, zarf, govdeMetni, !SALT_OKUNUR.has(yol));
  if (dogrula.hata) {
    const durum = dogrula.hata === "eksik imza alanlari" ? 400 : 401;
    return hata(env, durum, dogrula.hata);
  }
  return hedef(env, d, zarf, dogrula.cihaz, ip);
}

export default {
  async fetch(request, env) {
    try {
      return await yonlendir(request, env);
    } catch (e) {
      console.error("[guvenlik-api] istek hatasi:", e?.stack || e?.message || e);
      return hata(env, 500, "sunucu hatasi");
    }
  },
};
