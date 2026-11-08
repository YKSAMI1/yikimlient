import { test, before, beforeEach, after } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";

// --- test ortamÄ± (gizli anahtarlar ASLA kodda sabit deÄŸil; test iÃ§in Ã¼retilir) ---
process.env.YIKIM_PEPPER = "test-pepper-en-az-16-karakter-uzunlugunda";
process.env.YIKIM_ANAHTAR = crypto.randomBytes(32).toString("base64");
process.env.YIKIM_IMZA_GIZLI = crypto.generateKeyPairSync("ed25519").privateKey
  .export({ format: "der", type: "pkcs8" })
  .subarray(-32)
  .toString("hex");
process.env.YIKIM_DB = "./test/test.db";
process.env.YIKIM_DINLE = "127.0.0.1:8788";
process.env.YIKIM_BOT_ANAHTARI = "bot-test-anahtari";

const { baslat, kodUret, handle } = await import("../src/server.js");
const sifre = await import("../src/sifre.js");
const db = await import("../src/db.js");
const imza = await import("../src/imza.js");
const kapisi = await import("../src/kapisi.js");

let sunucu;
const ADRES = "http://127.0.0.1:8788";

before(async () => {
  for (const f of ["test.db", "test.db-shm", "test.db-wal"]) {
    try { fs.rmSync(`./test/${f}`, { force: true }); } catch {}
  }
  sunucu = baslat();
  await new Promise((r) => sunucu.once("listening", r));
});

after(() => {
  sunucu?.close();
  db.db.close();
  for (const f of ["test.db", "test.db-shm", "test.db-wal"]) {
    try {
      fs.rmSync(`./test/${f}`, { force: true });
    } catch {}
  }
});

// --- yardÄ±mcÄ±: imzalÄ± istek ---

const cihaz = (() => {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519");
  const pub_b64 = publicKey.export({ format: "der", type: "spki" }).subarray(-32).toString("base64");
  return { cihaz_id: "cihaz-test-1", gizli: privateKey, pub_b64 };
})();

async function cagir(yol, icerik, imzala = true) {
  const govde = imzala ? icerik : {};
  const govdeMetni = JSON.stringify(govde);
  const ts = Date.now();
  const nonce = crypto.randomBytes(8).toString("hex");
  let imza_b64 = null;
  if (imzala) {
    imza_b64 = crypto
      .sign(null, Buffer.from(kapisi.imzaMetni(cihaz.cihaz_id, ts, nonce, govdeMetni), "utf8"), cihaz.gizli)
      .toString("base64");
  }
  const r = await fetch(`${ADRES}${yol}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ cihaz_id: cihaz.cihaz_id, ts, nonce, imza: imza_b64, govde }),
  });
  let govdeYanit = {};
  try {
    govdeYanit = await r.json();
  } catch {}
  return { durum: r.status, ...govdeYanit };
}

// ---------- testler ----------

test("yapilandirma: pepper ve anahtar zorunlu", () => {
  assert.equal(sifre.yapilandirma_tam(), true);
});

test("saglik: bot kapali + sunucu genel anahtari doner", async () => {
  const r = await fetch(`${ADRES}/api/saglik`).then((x) => x.json());
  assert.equal(r.govde.durum, "ok");
  assert.equal(r.govde.bot_acik, false); // ping atÄ±lmadÄ±
  assert.ok(r.govde.sunucu_genel_anahtar.length >= 40);
  assert.ok(r.yanit_imza, "yanit imzali olmali");
});

test("cihaz kayit: imzasiz istek reddedilir", async () => {
  const r = await cagir("/api/cihaz/kaydet", { cihaz_id: "x", pub_key: "x" }, false);
  assert.equal(r.durum, 400);
});

test("cihaz kayit: imzali istek kabul edilir", async () => {
  const r = await cagir("/api/cihaz/kaydet", { cihaz_id: cihaz.cihaz_id, pub_key: cihaz.pub_b64 });
  assert.equal(r.govde?.tamam, true);
  const k = db.cihazBul(cihaz.cihaz_id);
  assert.ok(k, "cihaz DB'ye yazilmali");
});

test("giris: parola kurulmamis hesapta cracked reddedilir", async () => {
  const r = await cagir("/api/giris/dogrula", {
    hesap_anahtar: "offline:npc1",
    hesap_ad: "Npc",
    tur: "cracked",
    parola_hash: "x",
    ip: "10.0.0.1",
  });
  assert.equal(r.durum, 409);
  assert.equal(r.govde.hata, "parola_yok");
});

test("sifirmuz: crack sinirsiz degil, 3 (sahip istisnasi gelmedi)", () => {
  const hesap = db.hesapYoksaOlusturGetir("offline:npc1", "Npc", "cracked", "");
  assert.equal(hesap.crack_limiti, 3);
});

test("bot ping + bot durumu", async () => {
  await fetch(`${ADRES}/api/ping`, {
    method: "POST",
    headers: { "x-bot-anahtari": "bot-test-anahtari" },
  });
  const r = await fetch(`${ADRES}/api/saglik`).then((x) => x.json());
  assert.equal(r.govde.bot_acik, true);
});

test("baglama kodu uretimi + durum", async () => {
  const r = await cagir("/api/baglama/kod", {
    hesap_anahtar: "offline:npc1",
    hesap_ad: "Npc",
    tur: "cracked",
  });
  assert.equal(r.govde.kod.length, 8);
  const d = await cagir("/api/baglama/durum", { hesap_anahtar: "offline:npc1" });
  assert.equal(d.govde.baglandi, false);
});

test("baglama dogrulama (bot): koddan baglanti acilir", async () => {
  const kod = (await cagir("/api/baglama/kod", { hesap_anahtar: "offline:npc1", hesap_ad: "Npc", tur: "cracked" })).govde.kod;
  const r = await fetch(`${ADRES}/api/baglama/dogrula`, {
    method: "POST",
    headers: { "x-bot-anahtari": "bot-test-anahtari", "content-type": "application/json" },
    body: JSON.stringify({ kod, discord_id: "discord-1", discord_ad: "TestKullanici" }),
  }).then((x) => x.json());
  assert.equal(r.govde.tamam, true);
  const d = await cagir("/api/baglama/durum", { hesap_anahtar: "offline:npc1" });
  assert.equal(d.govde.baglandi, true);
});

test("crack siniri: ayni discord 3. hesabi reddeder", async () => {
  for (const n of [2, 3]) {
    const kod = (await cagir("/api/baglama/kod", { hesap_anahtar: `offline:npc${n}`, hesap_ad: `Npc${n}`, tur: "cracked" })).govde.kod;
    const r = await fetch(`${ADRES}/api/baglama/dogrula`, {
      method: "POST",
      headers: { "x-bot-anahtari": "bot-test-anahtari", "content-type": "application/json" },
      body: JSON.stringify({ kod, discord_id: "discord-1" }),
    }).then((x) => x.json());
    if (n === 2) assert.equal(r.govde.tamam, true);
  }
  // 4. hesap: limit dolu (gecmis kayitlar da sayilir)
  const kod4 = (await cagir("/api/baglama/kod", { hesap_anahtar: "offline:npc4", hesap_ad: "Npc4", tur: "cracked" })).govde.kod;
  const r4 = await fetch(`${ADRES}/api/baglama/dogrula`, {
    method: "POST",
    headers: { "x-bot-anahtari": "bot-test-anahtari", "content-type": "application/json" },
    body: JSON.stringify({ kod: kod4, discord_id: "discord-1" }),
  }).then(async (x) => ({ durum: x.status, ...(await x.json()) }));
  assert.equal(r4.durum, 429);
});

test("parola: uret + dogrula + sifrele/coz", () => {
  const parola = "GizliParola123!";
  const tuz = sifre.tuzUret();
  const h1 = sifre.parolaTuret(parola, tuz);
  const h2 = sifre.parolaTuret(parola, tuz);
  assert.equal(h1, h2, "ayni tuz + parola â†’ ayni hash");
  assert.notEqual(h1, sifre.parolaTuret("baska", tuz));
  const sifreli = sifre.sifrele(h1);
  assert.notEqual(sifreli, h1, "DB'de duz hash tutulmaz");
  assert.equal(sifre.coz(sifreli), h1, "sifreli veri dogru cozulur");
  assert.equal(sifre.coz("bozuk!!!base64"), null, "bozuk veri cozulemez");
});

test("parola dogrulama: dogrulayici karsilastirmasi sabit zamanli", () => {
  const tuz = sifre.tuzUret();
  const hash = sifre.parolaTuret("Parola-1", tuz);
  const kayit = sifre.sifreKaydiUret(hash);
  assert.equal(sifre.parolaDogruMu(kayit, hash), true);
  assert.equal(sifre.parolaDogruMu(kayit, sifre.parolaTuret("yanlis", tuz)), false);
  assert.equal(sifre.parolaDogruMu({}, "x"), false);
});

test("giris: dogru parola â†’ yetki belgesi 7 gun", async () => {
  const anahtar = "offline:giris1";
  const parola = "GercekParola1!";
  const tuz = sifre.tuzUret();
  const hash = sifre.parolaTuret(parola, tuz);
  const kayit = sifre.sifreKaydiUret(hash);
  const hesap = db.hesapOlustur({ anahtar, ad: "Giris1", tur: "cracked", uuid: "" });
  db.sifreKaydetVar(anahtar, kayit.tuz, kayit.argon_veri);
  db.baglantiKaydet(anahtar, "cracked", "discord-1", null, true);

  const yanlis = await cagir("/api/giris/dogrula", { hesap_anahtar: anahtar, hesap_ad: "Giris1", tur: "cracked", parola_hash: sifre.parolaTuret("yanlis", tuz), ip: "10.0.0.9" });
  assert.equal(yanlis.durum, 401);

  const dogru = await cagir("/api/giris/dogrula", { hesap_anahtar: anahtar, hesap_ad: "Giris1", tur: "cracked", parola_hash: hash, ip: "10.0.0.9" });
  assert.equal(dogru.govde.dogrulandi, true);
  assert.equal(dogru.govde.rol_yol, true);
  assert.ok(dogru.govde.yetki_bitis > Date.now());
});

test("giris: 5 hatali parola â†’ 24 saat kilit", async () => {
  const anahtar = "offline:kilit1";
  const tuz = sifre.tuzUret();
  const hash = sifre.parolaTuret("ParolaKilit", tuz);
  const kayit = sifre.sifreKaydiUret(hash);
  db.hesapOlustur({ anahtar, ad: "Kilit1", tur: "cracked", uuid: "" });
  db.sifreKaydetVar(anahtar, kayit.tuz, kayit.argon_veri);
  db.baglantiKaydet(anahtar, "cracked", "discord-1", null, false);
  for (let i = 0; i < 5; i++) {
    await cagir("/api/giris/dogrula", { hesap_anahtar: anahtar, hesap_ad: "Kilit1", tur: "cracked", parola_hash: sifre.parolaTuret(`yanlis${i}`, tuz), ip: "10.0.0.5" });
  }
  const r = await cagir("/api/giris/dogrula", { hesap_anahtar: anahtar, hesap_ad: "Kilit1", tur: "cracked", parola_hash: hash, ip: "10.0.0.5" });
  assert.equal(r.durum, 423);
});

test("IP kaydi: 7 gun sonra GERCEKTEN silinir", async () => {
  const t0 = Date.now();
  db.db.prepare("INSERT INTO ip_kaydi (cihaz_id, ip, silme_zamani) VALUES (?, ?, ?)").run("cihaz-ip", "10.9.9.9", t0 + 6 * 24 * 3600 * 1000);
  db.db.prepare("INSERT INTO ip_kaydi (cihaz_id, ip, silme_zamani) VALUES (?, ?, ?)").run("cihaz-ip", "10.9.9.8", t0 - 1000);
  const silinen = db.ipTemizle();
  assert.ok(silinen >= 1, "suresi gecen satir silindi");
  const kalan = db.butunIpler("cihaz-ip").map((r) => r.ip);
  assert.ok(kalan.includes("10.9.9.9"), "6 gunluk kayit kalmali");
  assert.ok(!kalan.includes("10.9.9.8"), "suresi gecen kayit silinmeli");
});

test("istemci imzasi: bozuk imza reddedilir", async () => {
  const r = await fetch(`${ADRES}/api/baglama/durum`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      cihaz_id: cihaz.cihaz_id,
      ts: Date.now(),
      nonce: "imzasiz-nonce",
      imza: "AAAA",
      govde: { hesap_anahtar: "offline:npc1" },
    }),
  }).then((x) => x.status);
  assert.equal(r, 401);
});

test("kapisi: eski zaman penceresi + tekrar kullanilan nonce", () => {
  assert.equal(kapisi.tsGecerli(Date.now() - 6 * 60 * 1000), false);
  assert.equal(kapisi.tsGecerli(Date.now()), true);
  assert.equal(kapisi.nonceKabul("nonce-test-1"), true);
  assert.equal(kapisi.nonceKabul("nonce-test-1"), false, "ayni nonce ikinci kez reddedilir");
});

test("kozmetik yaz/oku + iptal", () => {
  const anahtar = "offline:koz1";
  db.kozmetikYaz(anahtar, { surum: "1", pelerin_url: "https://x/p.png", saklanan: "{}" });
  const o = db.kozmetikOku(anahtar);
  assert.equal(o.pelerin_url, "https://x/p.png");
  db.kozmetikIptal(anahtar);
  assert.equal(db.kozmetikOku(anahtar), null, "iptal sonrasi okunmaz");
});

// ---------- ÅŸifre sÄ±fÄ±rlama (bot DM kodu) ----------

test("parola/kur: baglanti yoksa ilk parola kurulamaz", async () => {
  db.hesapOlustur({ anahtar: "offline:kur1", ad: "Kur1", tur: "cracked", uuid: "" });
  const r = await cagir("/api/parola/kur", {
    hesap_anahtar: "offline:kur1",
    parola_hash: sifre.parolaTuret("Parola1234", sifre.tuzUret()),
  });
  assert.equal(r.durum, 409);
});

test("parola/kur: bagli hesapta ilk parola kurulur, ikinci kez ezilmez", async () => {
  db.hesapOlustur({ anahtar: "offline:kur2", ad: "Kur2", tur: "cracked", uuid: "" });
  db.baglantiKaydet("offline:kur2", "cracked", "discord-kur", "Kur", false);
  const hash = sifre.parolaTuret("IlkParola42", sifre.tuzUret());
  const r = await cagir("/api/parola/kur", { hesap_anahtar: "offline:kur2", parola_hash: hash });
  assert.equal(r.govde.tamam, true);

  const tekrar = await cagir("/api/parola/kur", { hesap_anahtar: "offline:kur2", parola_hash: hash });
  assert.equal(tekrar.durum, 409, "mevcut parola ezilmemeli");

  const giris = await cagir("/api/giris/dogrula", {
    hesap_anahtar: "offline:kur2",
    hesap_ad: "Kur2",
    tur: "cracked",
    parola_hash: hash,
  });
  assert.equal(giris.govde.dogrulandi, true, JSON.stringify(giris));
});

test("sifirla/iste: baska discord kullaniciya kod verilmez", async () => {
  const anahtar = "offline:sif1";
  db.hesapOlustur({ anahtar, ad: "Sif1", tur: "cracked", uuid: "" });
  db.baglantiKaydet(anahtar, "cracked", "discord-sahip", "Sahip", false);

  const yanlis = await fetch(`${ADRES}/api/sifirla/iste`, {
    method: "POST",
    headers: { "x-bot-anahtari": "bot-test-anahtari", "content-type": "application/json" },
    body: JSON.stringify({ hesap_ad: "Sif1", discord_id: "baskasi" }),
  }).then(async (x) => ({ durum: x.status, ...(await x.json()) }));
  assert.equal(yanlis.durum, 403);
});

test("sifirla/iste: dogru discord kullaniciya kod verilir", async () => {
  const r = await fetch(`${ADRES}/api/sifirla/iste`, {
    method: "POST",
    headers: { "x-bot-anahtari": "bot-test-anahtari", "content-type": "application/json" },
    body: JSON.stringify({ hesap_ad: "Sif1", discord_id: "discord-sahip" }),
  }).then(async (x) => ({ durum: x.status, ...(await x.json()) }));
  assert.equal(r.durum, 200);
  assert.equal(r.govde.kod.length, 8);
});

test("sifirla/dogrula: kod ile yeni parola kurulur ve giris calisir", async () => {
  const kod = db.sifreKodBulAnahtar("offline:sif1").kod;
  const parola = "YeniParola42";
  const tuz = sifre.tuzUret();
  const hash = sifre.parolaTuret(parola, tuz);
  const r = await cagir("/api/sifirla/dogrula", { kod, parola_hash: hash });
  assert.equal(r.govde.tamam, true);

  const giris = await cagir("/api/giris/dogrula", {
    hesap_anahtar: "offline:sif1",
    hesap_ad: "Sif1",
    tur: "cracked",
    parola_hash: hash,
  });
  assert.equal(giris.govde?.dogrulandi, true, JSON.stringify(giris));
});

test("baglama: rol_yol bilgisi kaydedilir", async () => {
  const anahtar = "offline:rol1";
  const kod = (await cagir("/api/baglama/kod", { hesap_anahtar: anahtar, hesap_ad: "Rol1", tur: "microsoft" })).govde.kod;
  await fetch(`${ADRES}/api/baglama/dogrula`, {
    method: "POST",
    headers: { "x-bot-anahtari": "bot-test-anahtari", "content-type": "application/json" },
    body: JSON.stringify({ kod, discord_id: "discord-rol", discord_ad: "Rolcu", rol_yol: true }),
  });
  const b = db.baglantiBul(anahtar);
  assert.equal(b.rol_yol, 1);
});
