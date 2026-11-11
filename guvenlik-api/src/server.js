// SUNUCU — HTTP rotaları (Express yok, node:http).
// Cloudflare Worker'a taşımada `handle(yol, istek)` doğrudan taşınır.

// DİKKAT: env.js İLK import olmalı — diğer modüller ortam değişkeni okuyor.
import "./env.js";

import http from "node:http";
import { randomInt } from "node:crypto";

import * as db from "./db.js";
import * as sifre from "./sifre.js";
import * as imza from "./imza.js";
import * as kapisi from "./kapisi.js";

const DINLE = (process.env.YIKIM_DINLE || "127.0.0.1:8788");
const [HOST, PORT] = DINLE.split(":");
const BOT_ANAHTARI = process.env.YIKIM_BOT_ANAHTARI || "";

// ---------- yanıt yardımcıları ----------

function json(yanit, durum, govde) {
  const veri = imza.imzaliYanit(govde);
  yanit.writeHead(durum, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  yanit.end(JSON.stringify(veri));
}

function hata(yanit, durum, mesaj) {
  json(yanit, durum, { hata: mesaj });
}

function ip(is) {
  return (is.headers["x-forwarded-for"] || is.socket.remoteAddress || "0.0.0.0")
    .toString()
    .split(",")[0]
    .trim();
}

/** Bot çağrısı anahtar kontrolü */
function botMu(is) {
  return BOT_ANAHTARI.length > 0 && is.headers["x-bot-anahtari"] === BOT_ANAHTARI;
}

// ---------- kodlar ----------

const KOD_HARFLERI = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function kodUret(uzunluk = 8) {
  let k = "";
  for (let i = 0; i < uzunluk; i++) k += KOD_HARFLERI[randomInt(0, KOD_HARFLERI.length - 1)];
  return k;
}

// ---------- istek doğrulama (cihaz imzası) ----------

/// Body: {"cihaz_id","ts","nonce","imza","govde"}
/// İmza metni: `cihaz_id|ts|nonce|JSON.stringify(govde)`
function istekDogrula(yanit, govde, govdeMetni) {
  const { cihaz_id, ts, nonce, imza: imza_b64 } = govde;
  const pub_key = govde.pub_key ?? govde.govde?.pub_key;
  if (!cihaz_id || !nonce || !imza_b64 || typeof ts !== "number") {
    hata(yanit, 400, "eksik imza alanlari");
    return null;
  }
  if (!kapisi.tsGecerli(ts)) {
    hata(yanit, 403, "zaman penceresi");
    return null;
  }
  if (!kapisi.nonceKabul(nonce)) {
    hata(yanit, 403, "nonce kullanilmis");
    return null;
  }
  const mesaj = kapisi.imzaMetni(cihaz_id, ts, nonce, govdeMetni);
  const kayitli = db.cihazBul(cihaz_id);
  if (kayitli) {
    if (kayitli.iptal) {
      hata(yanit, 401, "cihaz iptal edilmis");
      return null;
    }
    if (!imza.istemciImzaDogrula(kayitli.pub_key, imza_b64, mesaj)) {
      hata(yanit, 401, "imza gecersiz");
      return null;
    }
    db.cihazSonGorulen(cihaz_id);
    return kayitli;
  }
  // ilk kayit: gonderilen genel anahtar dogrulanir
  if (!pub_key) {
    hata(yanit, 401, "cihaz kayitli degil (pub_key gerekli)");
    return null;
  }
  if (!imza.istemciImzaDogrula(pub_key, imza_b64, mesaj)) {
    hata(yanit, 401, "imza gecersiz");
    return null;
  }
  return { cihaz_id, pub_key, yeni: true };
}

function govdeOku(is, yanit, islem) {
  let metin = "";
  is.on("data", (p) => {
    metin += p;
    // Gövde sınırı: bağlantıyı kesmek yerine yanıt ver (aksi hâlde istek
    // zaman aşımına kadar asılı kalır).
    if (metin.length > 64 * 1024) {
      is.destroy();
      if (!yanit.headersSent) hata(yanit, 413, "govde cok buyuk");
    }
  });
  is.on("end", () => {
    let govde = {};
    try {
      govde = metin ? JSON.parse(metin) : {};
    } catch {
      // DİKKAT: `is.res` YOKTUR (IncomingMessage'da response alanı yok) —
      // eskiden burada `hata(is.res, ...)` çağrılıyordu ve bozuk gövde gönderen
      // HER istek API sürecini çökertiyordu (502 + tüm oyuncuların bağlantısı).
      return hata(yanit, 400, "bozuk govde");
    }
    // `null`, sayı, dizi, metin: zarf nesne olmalı (aksi hâlde alan okumaları
    // yakalanmayan TypeError üretir — bu geri çağrı `try/catch` dışında çalışır).
    if (!govde || typeof govde !== "object" || Array.isArray(govde)) {
      return hata(yanit, 400, "govde nesne olmali");
    }
    try {
      islem(govde);
    } catch (e) {
      console.error("[guvenlik-api] govde isleme hatasi:", e?.message || e);
      if (!yanit.headersSent) hata(yanit, 500, "sunucu hatasi");
    }
  });
}

// ---------- yollar ----------

async function saglik(is, yanit) {
  db.ipTemizle();
  json(yanit, 200, { durum: "ok", bot_acik: !db.botKapaliMi(), sunucu_genel_anahtar: imza.sunucuPubB64(), zaman: db.simdi() });
}

async function ping(yanit) {
  db.botPingYaz();
  json(yanit, 200, { tamam: true, zaman: db.simdi() });
}

async function cihazKaydet(is, yanit, govde, cihaz) {
  // `cihaz` = istekDogrula'nın doğruladığı cihaz kaydı (imza bu anahtarla
  // doğrulandı). Zarfın kökündeki alanlar okunmaz.
  const { cihaz_id, pub_key } = cihaz ?? govde ?? {};
  if (!cihaz_id || !pub_key) return hata(yanit, 400, "cihaz_id/pub_key eksik");
  if (!imza.pubCoz(pub_key)) return hata(yanit, 400, "pub_key gecersiz");
  db.cihazKaydet(cihaz_id, pub_key);
  db.olayKaydet("cihaz_kayit", null, cihaz_id, "kayit");
  json(yanit, 200, { tamam: true });
}

async function baglamaKodIste(is, yanit, govde, cihaz) {
  const { hesap_anahtar, hesap_ad, tur, uuid } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar || !hesap_ad || !tur) return hata(yanit, 400, "hesap bilgisi eksik");
  const mevcut = db.baglamaKodlarBul(hesap_anahtar);
  if (mevcut && db.simdi() - mevcut.olusturma < db.ON_DAKIKA) {
    return json(yanit, 200, {
      kod: mevcut.kod,
      kalan_sn: 600 - Math.floor((db.simdi() - mevcut.olusturma) / 1000),
    });
  }
  const kod = kodUret();
  db.baglamaKodKaydet(kod, hesap_anahtar, hesap_ad, tur, cihaz.cihaz_id);
  db.olayKaydet("baglama_kod", hesap_anahtar, cihaz.cihaz_id, "/bagla kodu uretildi");
  json(yanit, 200, { kod, kalan_sn: 600 });
}

async function baglamaDurum(is, yanit, govde, cihaz) {
  const { hesap_anahtar } = govde.govde ?? govde ?? {};
  const b = db.baglantiBul(hesap_anahtar);
  if (!b) return json(yanit, 200, { baglandi: false });
  json(yanit, 200, { baglandi: b.durum === "aktif", discord_id: b.discord_id, discord_ad: b.discord_ad, rol_yol: !!b.rol_yol });
}

async function baglamaDogrula(yanit, icerik) {
  const { kod, discord_id, discord_ad, rol_yol } = icerik;
  // girdi doğrulama: eksik/bozuk alan bir daha sunucuyu düşürmemeli
  if (!kod || typeof kod !== "string" || !discord_id || typeof discord_id !== "string") {
    return hata(yanit, 400, "kod/discord_id eksik");
  }
  const kayit = db.baglamaKodBul(kod);
  if (!kayit) return hata(yanit, 404, "kod bulunamadi");
  if (db.simdi() - kayit.olusturma > db.ON_DAKIKA) {
    db.baglamaKodSil(kod);
    return hata(yanit, 410, "kod suresi doldu");
  }
  if (kayit.kullanildi) return hata(yanit, 409, "kod daha once kullanilmis");

  const hesap = db.hesapYoksaOlusturGetir(kayit.hesap_anahtar, kayit.hesap_ad, kayit.tur, "");
  if (hesap.tur === "cracked" && !hesap.sahip_istisna) {
    const n = db.crackBaglantiSayisi(discord_id);
    if (n >= hesap.crack_limiti) return hata(yanit, 429, `crack siniri (${n}/${hesap.crack_limiti})`);
  }
  db.baglamaKodKullan(kod);
  db.baglantiKaydet(kayit.hesap_anahtar, kayit.tur, discord_id, discord_ad, !!rol_yol);
  db.olayKaydet("baglama", kayit.hesap_anahtar, kayit.cihaz_id, `discord ${discord_id}`);
  json(yanit, 200, { tamam: true, hesap_anahtar: kayit.hesap_anahtar });
}

async function sifirlaKod(yanit, icerik) {
  const { hesap_anahtar, hesap_ad, discord_id } = icerik;
  if (!discord_id) return hata(yanit, 400, "discord_id eksik");

  // Hesabı anahtar ya da görünen ad ile bul
  let hesap = hesap_anahtar ? db.hesapBul(hesap_anahtar) : null;
  if (!hesap && hesap_ad) hesap = db.hesapAdBul(hesap_ad);
  if (!hesap) return hata(yanit, 404, "hesap bulunamadi");

  // Yalnızca hesabın bağlı olduğu Discord kullanıcısı kod isteyebilir
  const b = db.baglantiBul(hesap.anahtar);
  if (!b || b.durum !== "aktif") return hata(yanit, 409, "baglanti_yok");
  if (b.discord_id !== discord_id) return hata(yanit, 403, "hesap baska bir discord hesabina bagli");

  const kod = kodUret();
  db.sifreKodSilAnahtar(hesap.anahtar);
  db.sifreKodKaydet(kod, hesap.anahtar);
  db.olayKaydet("sifre_kod", hesap.anahtar, null, `discord ${discord_id} kod istedi`);
  json(yanit, 200, { kod, kalan_sn: 600, hesap_ad: hesap.ad });
}

async function sifirlaDogrula(is, yanit, govde, cihaz) {
  const { kod, parola_hash } = govde.govde ?? govde ?? {};
  if (!kod || !parola_hash) return hata(yanit, 400, "kod veya parola eksik");
  const kayit = db.sifreKodBul(kod);
  if (!kayit) return hata(yanit, 404, "kod gecersiz");
  if (db.kilitVar(kayit.hesap_anahtar, cihaz.cihaz_id)) return hata(yanit, 423, "cihaz 24 saat kilitli");
  if (kayit.kullanildi) return hata(yanit, 409, "kod kullanilmis");
  if (db.simdi() - kayit.olusturma > db.ON_DAKIKA) {
    db.sifreKodSil(kod);
    return hata(yanit, 410, "kod suresi doldu");
  }
  const hesap = db.hesapBul(kayit.hesap_anahtar);
  if (!hesap) return hata(yanit, 404, "hesap yok");
  const yeni = sifre.sifreKaydiUret(parola_hash);
  db.sifreKaydetVar(kayit.hesap_anahtar, yeni.tuz, yeni.argon_veri);
  db.sifreKodKullan(kod);
  db.denemeSifirla(kayit.hesap_anahtar, cihaz.cihaz_id);
  db.olayKaydet("sifre_sifirla", kayit.hesap_anahtar, cihaz.cihaz_id, "yeni parola");
  json(yanit, 200, { tamam: true });
}

async function parolaKur(is, yanit, govde, cihaz) {
  const { hesap_anahtar, parola_hash } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar || !parola_hash) return hata(yanit, 400, "hesap/parola eksik");
  const hesap = db.hesapBul(hesap_anahtar);
  if (!hesap) return hata(yanit, 404, "hesap yok");
  // İlk parola yalnız Discord bağı doğrulandıktan sonra kurulabilir.
  const b = db.baglantiBul(hesap_anahtar);
  if (!b || b.durum !== "aktif") return hata(yanit, 409, "baglanti_yok");
  // Mevcut parolanın üzerine yazılmaz: giriş ya da şifre sıfırlama gerekir.
  if (hesap.sifre_var) return hata(yanit, 409, "parola_var");
  const yeni = sifre.sifreKaydiUret(parola_hash);
  db.sifreKaydetVar(hesap_anahtar, yeni.tuz, yeni.argon_veri);
  db.denemeSifirla(hesap_anahtar, cihaz.cihaz_id);
  db.olayKaydet("parola_kur", hesap_anahtar, cihaz.cihaz_id, "ilk parola");
  json(yanit, 200, { tamam: true });
}

async function girisDogrula(is, yanit, govde, cihaz) {
  const { hesap_anahtar, hesap_ad, tur, parola_hash, ip: istemciIp } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar || !hesap_ad || !tur) return hata(yanit, 400, "hesap bilgisi eksik");
  const hesap = db.hesapYoksaOlusturGetir(hesap_anahtar, hesap_ad, tur, "");
  if (db.kilitVar(hesap_anahtar, cihaz.cihaz_id)) {
    return hata(yanit, 423, "24 saat kilitli (cok fazla hatali deneme)");
  }
  // IP kaydı: istemci gerçek IP'yi bildirir (yerel testte 127.0.0.1 işe
  // yaramaz); yayında bağlantı IP'si (Cloudflare) önceliklidir.
  const baglantiIp = ip(is);
  const kayitIp = baglantiIp && baglantiIp !== "127.0.0.1" && baglantiIp !== "::1" ? baglantiIp : String(istemciIp || "").trim();
  if (kayitIp) db.ipKaydet(cihaz.cihaz_id, kayitIp);

  if (!hesap.sifre_var) {
    if (tur !== "microsoft") return hata(yanit, 409, "parola_yok");
    const b = db.baglantiBul(hesap_anahtar);
    return json(yanit, 200, {
      dogrulandi: false,
      neden: b?.durum === "aktif" ? "parola_yok" : "baglanti_yok",
      yetki_bitis: 0,
    });
  }

  const duz = sifre.coz(hesap.argon_veri);
  if (!duz) return hata(yanit, 500, "dogrulayici cozulemedi (anahtar hatasi)");
  if (!sifre.parolaDogruMu(hesap, parola_hash)) {
    const deneme = db.denemeSay(hesap_anahtar, cihaz.cihaz_id) + 1;
    db.denemeArtir(hesap_anahtar, cihaz.cihaz_id);
    if (deneme >= 5) db.kilitKoy(hesap_anahtar, cihaz.cihaz_id, 24, "5 hatali parola");
    db.olayKaydet("giris_basarisiz", hesap_anahtar, cihaz.cihaz_id, `deneme ${deneme}`);
    return hata(yanit, 401, `parola hatali (${5 - deneme} hakki)`);
  }
  db.denemeSifirla(hesap_anahtar, cihaz.cihaz_id);
  const b = db.baglantiBul(hesap_anahtar);
  if (!b || b.durum !== "aktif") return hata(yanit, 409, "baglanti_yok");
  const bitis = db.simdi() + 7 * 24 * 60 * 60 * 1000;
  db.yetkiBitisYaz(cihaz.cihaz_id, bitis);
  db.sonGirisYaz(hesap_anahtar);
  db.olayKaydet("giris", hesap_anahtar, cihaz.cihaz_id, "basarili");
  json(yanit, 200, {
    dogrulandi: true,
    rol_yol: !!b.rol_yol,
    yetki_bitis: bitis,
    kozmetik: db.kozmetikOku(hesap_anahtar),
  });
}

async function rolGuncelle(yanit, icerik) {
  const { discord_id, rol_yol } = icerik;
  if (!discord_id || typeof discord_id !== "string") {
    return hata(yanit, 400, "discord_id eksik");
  }
  db.rolYazDiscord(discord_id, !!rol_yol);
  db.olayKaydet(!!rol_yol ? "rol_verildi" : "rol_alindi", null, null, `discord ${discord_id} rol_yol=${!!rol_yol}`);
  json(yanit, 200, { tamam: true, discord_id, rol_yol: !!rol_yol });
}

async function olayKaydet(is, yanit, govde, cihaz) {
  const { ip: ipv4 } = govde.govde ?? govde ?? {};
  if (!ipv4) return hata(yanit, 400, "ip eksik");
  const silinen = db.ipKaydet(cihaz.cihaz_id, ipv4);
  json(yanit, 200, { tamam: true, temizlenen_ip: silinen });
}

async function kozmetikYaz(is, yanit, govde, cihaz) {
  const { hesap_anahtar, surum, pelerin_url, elytra_url, skin_url, saklanan } = govde.govde ?? govde ?? {};
  if (!hesap_anahtar) return hata(yanit, 400, "hesap_anahtar eksik");
  db.kozmetikYaz(hesap_anahtar, { surum, pelerin_url, elytra_url, skin_url, saklanan });
  db.olayKaydet("kozmetik_yaz", hesap_anahtar, cihaz.cihaz_id, "kayit");
  json(yanit, 200, { tamam: true });
}

async function kozmetikOku(is, yanit, govde, cihaz) {
  const { hesap_anahtar } = govde.govde ?? govde ?? {};
  json(yanit, 200, { kozmetik: db.kozmetikOku(hesap_anahtar) });
}

// ---------- yönlendirici ----------

const CIHAZ_YOLLARI = {
  "/api/cihaz/kaydet": cihazKaydet,
  "/api/baglama/kod": baglamaKodIste,
  "/api/baglama/durum": baglamaDurum,
  "/api/parola/kur": parolaKur,
  "/api/giris/dogrula": girisDogrula,
  "/api/sifirla/dogrula": sifirlaDogrula,
  "/api/olay/kaydet": olayKaydet,
  "/api/kozmetik/yaz": kozmetikYaz,
  "/api/kozmetik/oku": kozmetikOku,
};

export function handle(is, yanit) {
  // TEK İSTEK TÜM SUNUCUYU DÜŞÜRMESİN: bozuk JSON / null gövde / beklenmeyen
  // alan eskiden yakalanmayan TypeError üretip süreci çökertiyordu (tüm
  // oyuncular 502 alıyordu). Burada her şey yakalanır.
  try {
    return handleIc(is, yanit);
  } catch (e) {
    console.error("[guvenlik-api] istek hatasi (handle):", e?.message || e);
    try {
      if (!yanit.headersSent) hata(yanit, 500, "sunucu hatasi");
    } catch {
      /* yanıt kapanmış */
    }
  }
}

function handleIc(is, yanit) {
  const url = (is.url || "/").split("?")[0];
  yanit.setHeader("access-control-allow-origin", "*");
  yanit.setHeader("access-control-allow-headers", "content-type");
  yanit.setHeader("access-control-allow-methods", "POST,GET,OPTIONS");
  if (is.method === "OPTIONS") {
    yanit.writeHead(204);
    return yanit.end();
  }
  if (url === "/api/saglik") return saglik(is, yanit);

  if (is.method !== "POST") return hata(yanit, 405, "POST gerekli");

  if (url === "/api/ping") {
    if (!botMu(is)) return hata(yanit, 401, "bot anahtari gecersiz");
    return ping(yanit);
  }
  if (url === "/api/baglama/dogrula") {
    if (!botMu(is)) return hata(yanit, 401, "bot anahtari gecersiz");
    return govdeOku(is, yanit, (icerik) => yurut(yanit, () => baglamaDogrula(yanit, icerik)));
  }
  if (url === "/api/sifirla/iste") {
    if (!botMu(is)) return hata(yanit, 401, "bot anahtari gecersiz");
    return govdeOku(is, yanit, (icerik) => yurut(yanit, () => sifirlaKod(yanit, icerik)));
  }
  if (url === "/api/rol/guncelle") {
    if (!botMu(is)) return hata(yanit, 401, "bot anahtari gecersiz");
    return govdeOku(is, yanit, (icerik) => yurut(yanit, () => rolGuncelle(yanit, icerik)));
  }

  const hedef = CIHAZ_YOLLARI[url];
  if (!hedef) return hata(yanit, 404, "yol yok");
  if (kapisi.hizSiniriAsildi(ip(is))) return hata(yanit, 429, "hiz siniri");
  govdeOku(is, yanit, (govde) => {
    const govdeMetni = JSON.stringify(govde.govde ?? govde ?? {});
    const cihaz = istekDogrula(yanit, govde, govdeMetni);
    if (!cihaz) return;
    yurut(yanit, () => hedef(is, yanit, govde, cihaz));
  });
}

/** İstek işleyicisini güvenli çalıştır — tek bir hatalı istek sunucuyu düşürmez. */
function yurut(yanit, is) {
  try {
    const sonuc = is();
    if (sonuc && typeof sonuc.then === "function") {
      sonuc.catch((e) => {
        console.error("[guvenlik-api] istek hatasi:", e?.message || e);
        hata(yanit, 500, "sunucu hatasi");
      });
    }
  } catch (e) {
    console.error("[guvenlik-api] istek hatasi:", e?.message || e);
    hata(yanit, 500, "sunucu hatasi");
  }
}

export function baslat() {
  if (!sifre.yapilandirma_tam()) {
    console.error("[guvenlik-api] YIKIM_PEPPER ve YIKIM_ANAHTAR gerekli — bkz. .env.example");
    process.exit(1);
  }
  // Beklenmeyen bir async hata süreci öldürmesin: logla, sunucu ayakta kalsın.
  // (Tek bir bozuk istek yüzünden tüm oyuncuların bağlantısı kopuyordu.)
  process.on("uncaughtException", (e) => {
    console.error("[guvenlik-api] yakalanmamis hata:", e?.stack || e?.message || e);
  });
  const sunucu = http.createServer(handle);
  sunucu.listen(Number(PORT), HOST, () => {
    console.log(`[guvenlik-api] dinleniyor: http://${HOST}:${PORT}`);
    console.log(`[guvenlik-api] db: ${db.DB_YOLU}`);
    if (imza.sunucuPubB64()) console.log(`[guvenlik-api] sunucu genel anahtari: ${imza.sunucuPubB64()}`);
    const silinen = db.ipTemizle();
    if (silinen) console.log(`[guvenlik-api] ${silinen} eski IP kaydi temizlendi`);
  });
  return sunucu;
}

if (process.argv[1] && process.argv[1].endsWith("server.js")) baslat();
