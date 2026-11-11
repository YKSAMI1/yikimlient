// Yerel guvenlik.db → D1 (Cloudflare) taşıma SQL'i üretir.
//
// Ne taşınır: hesap (parolasız), cihaz (Ed25519 açık anahtarları), bağlantı,
// bağlantı geçmişi, kozmetik kayıtları, bot durumu.
//
// NEDEN PAROLALAR TAŞINMAZ: eski sürüm doğrulayıcıyı scrypt ile üretiyordu;
// Workers ücretsiz planı (10 ms CPU) bunu hesaplayamaz. Hesaplar `sifre_var=0`
// olarak taşınır → kullanıcı launcher'da bir kez yeni şifre oluşturur (Discord
// bağlantısı korunduğu için ekstra kod gerekmez).
//
// Kullanım:
//   node tools/d1-tasima.mjs [yerel-db-yolu] [cikti-dosyasi]
//   npx wrangler d1 execute yikim-guvenlik --remote --file=guvenlik-worker/migrate-veri.sql

import { DatabaseSync } from "node:sqlite";
import { writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const varsayilanDb =
  process.platform === "win32"
    ? join(homedir(), "AppData", "Roaming", ".yikimlient", "guvenlik-api", "guvenlik.db")
    : join(homedir(), ".yikimlient", "guvenlik-api", "guvenlik.db");

const dbYolu = process.argv[2] || varsayilanDb;
const cikti = process.argv[3] || "guvenlik-worker/migrate-veri.sql";

const db = new DatabaseSync(dbYolu, { readOnly: true });

const q = (sql, ...p) => db.prepare(sql).all(...p);
const q1 = (sql, ...p) => db.prepare(sql).get(...p);

/** SQLite değerini güvenli SQL metnine çevir. */
function deger(v) {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "NULL";
  return "'" + String(v).replace(/'/g, "''") + "'";
}

function satirlar(tablo, kolonlar, sql) {
  const list = q(sql);
  const parcalar = [];
  for (const r of list) {
    parcalar.push(`INSERT OR REPLACE INTO ${tablo} (${kolonlar.join(", ")}) VALUES (${kolonlar
      .map((k) => deger(r[k]))
      .join(", ")});`);
  }
  return { adet: list.length, sql: parcalar.join("\n") };
}

const hesap = satirlar(
  "hesap",
  ["anahtar", "ad", "ad_kucuk", "tur", "uuid", "tuz", "argon_veri", "sifre_var", "olusturma", "son_giris",
    "crack_limiti", "sahip_istisna", "kosmetik_kilitli"],
  `SELECT anahtar, ad, ad_kucuk, tur, uuid, NULL AS tuz, NULL AS argon_veri, 0 AS sifre_var,
          olusturma, son_giris, crack_limiti, sahip_istisna, kosmetik_kilitli FROM hesap`
);

const cihaz = satirlar(
  "cihaz",
  ["cihaz_id", "pub_key", "ilk_gorulen", "son_gorulen", "yetki_bitis", "iptal"],
  `SELECT cihaz_id, pub_key, ilk_gorulen, son_gorulen, yetki_bitis, iptal FROM cihaz`
);

const baglanti = satirlar(
  "baglanti",
  ["hesap_anahtar", "hesap_turu", "discord_id", "discord_ad", "rol_yol", "durum", "tarih"],
  `SELECT hesap_anahtar, hesap_turu, discord_id, discord_ad, rol_yol, durum, tarih FROM baglanti`
);

const gecmis = satirlar(
  "baglanti_gecmisi",
  ["discord_id", "hesap_anahtar", "tarih"],
  `SELECT discord_id, hesap_anahtar, tarih FROM baglanti_gecmisi`
);

const kozmetik = satirlar(
  "kozmetik",
  ["hesap_anahtar", "surum", "pelerin_url", "elytra_url", "skin_url", "saklanan", "tarih", "iptal"],
  `SELECT hesap_anahtar, surum, pelerin_url, elytra_url, skin_url, saklanan, tarih, iptal FROM kozmetik`
);

const bot = q1("SELECT son_ping FROM bot_durum WHERE id = 1");

const icerik = `-- YIKIM: yerel DB → D1 taşıma (${new Date().toISOString()})
-- Kaynak: ${dbYolu}
-- Parolalar taşınmadı: herkes launcher'da bir kez yeni şifre oluşturacak.
-- D1 "BEGIN TRANSACTION" kabul etmez (Durable Object depolaması kendi
-- atomik yazma birleştirmesini yapar); bu yüzden düz INSERT'ler kullanılır.
PRAGMA foreign_keys = OFF;
${hesap.sql}
${cihaz.sql}
${baglanti.sql}
${gecmis.sql}
${kozmetik.sql}
INSERT OR REPLACE INTO bot_durum (id, son_ping) VALUES (1, ${Number(bot?.son_ping ?? 0)});
`;

writeFileSync(cikti, icerik, "utf8");

console.log(`hesap: ${hesap.adet}`);
console.log(`cihaz: ${cihaz.adet}`);
console.log(`baglanti: ${baglanti.adet}`);
console.log(`baglanti_gecmisi: ${gecmis.adet}`);
console.log(`kozmetik: ${kozmetik.adet}`);
console.log(`yazildi: ${cikti}`);
