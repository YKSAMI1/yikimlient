// DB — node:sqlite (Node 22+) ile şema ve yardımcılar.
// Cloudflare Worker'a taşımada bu dosya Turso bağlayıcıyla değiştirilir;
// fonksiyon adları (arayüz) aynı kalır.

import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";

const VARSAYILAN_DB =
  process.platform === "win32"
    ? join(homedir(), "AppData", "Roaming", ".yikimlient", "guvenlik-api", "guvenlik.db")
    : join(homedir(), ".yikimlient", "guvenlik-api", "guvenlik.db");

const DB_YOL = process.env.YIKIM_DB || VARSAYILAN_DB;
mkdirSync(dirname(DB_YOL), { recursive: true });

export const db = new DatabaseSync(DB_YOL);

db.exec(`
CREATE TABLE IF NOT EXISTS hesap (
  anahtar TEXT PRIMARY KEY,
  ad TEXT NOT NULL,
  ad_kucuk TEXT NOT NULL,
  tur TEXT NOT NULL,
  uuid TEXT NOT NULL DEFAULT '',
  tuz TEXT,
  argon_veri TEXT,
  sifre_var INTEGER NOT NULL DEFAULT 0,
  olusturma INTEGER NOT NULL,
  son_giris INTEGER NOT NULL DEFAULT 0,
  crack_limiti INTEGER NOT NULL DEFAULT 3,
  sahip_istisna INTEGER NOT NULL DEFAULT 0,
  kosmetik_kilitli INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS hesap_adi ON hesap(ad_kucuk);

CREATE TABLE IF NOT EXISTS cihaz (
  cihaz_id TEXT PRIMARY KEY,
  pub_key TEXT NOT NULL,
  ilk_gorulen INTEGER NOT NULL,
  son_gorulen INTEGER NOT NULL,
  yetki_bitis INTEGER NOT NULL DEFAULT 0,
  iptal INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS baglama_kod (
  kod TEXT PRIMARY KEY,
  hesap_anahtar TEXT NOT NULL,
  hesap_ad TEXT NOT NULL,
  tur TEXT NOT NULL,
  cihaz_id TEXT NOT NULL,
  olusturma INTEGER NOT NULL,
  kullanildi INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS kod_anahtar ON baglama_kod(hesap_anahtar);

CREATE TABLE IF NOT EXISTS sifre_kod (
  kod TEXT PRIMARY KEY,
  hesap_anahtar TEXT NOT NULL,
  olusturma INTEGER NOT NULL,
  kullanildi INTEGER NOT NULL DEFAULT 0,
  deneme INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS baglanti (
  hesap_anahtar TEXT PRIMARY KEY,
  hesap_turu TEXT NOT NULL,
  discord_id TEXT NOT NULL,
  discord_ad TEXT,
  rol_yol INTEGER NOT NULL DEFAULT 0,
  durum TEXT NOT NULL DEFAULT 'aktif',
  tarih INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS baglanti_gecmisi (
  discord_id TEXT NOT NULL,
  hesap_anahtar TEXT NOT NULL,
  tarih INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS gecmis_dc ON baglanti_gecmisi(discord_id);

CREATE TABLE IF NOT EXISTS deneme (
  hesap_anahtar TEXT NOT NULL,
  cihaz_id TEXT NOT NULL,
  adet INTEGER NOT NULL DEFAULT 0,
  son INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (hesap_anahtar, cihaz_id)
);

CREATE TABLE IF NOT EXISTS kilit (
  hesap_anahtar TEXT NOT NULL,
  cihaz_id TEXT NOT NULL,
  bitis INTEGER NOT NULL,
  neden TEXT,
  PRIMARY KEY (hesap_anahtar, cihaz_id)
);

CREATE TABLE IF NOT EXISTS ip_kaydi (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cihaz_id TEXT NOT NULL,
  ip TEXT NOT NULL,
  silme_zamani INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS olay (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tur TEXT NOT NULL,
  hesap_anahtar TEXT,
  cihaz_id TEXT,
  detay TEXT,
  tarih INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS kozmetik (
  hesap_anahtar TEXT PRIMARY KEY,
  surum TEXT,
  pelerin_url TEXT,
  elytra_url TEXT,
  skin_url TEXT,
  saklanan TEXT,
  tarih INTEGER NOT NULL,
  iptal INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS haber (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  baslik TEXT,
  govde TEXT,
  imza TEXT,
  yayin INTEGER NOT NULL DEFAULT 0,
  tarih INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS bot_durum (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  son_ping INTEGER NOT NULL DEFAULT 0
);
INSERT OR IGNORE INTO bot_durum (id, son_ping) VALUES (1, 0);
`);

// ---------- temel yardımcılar ----------

export const DB_YOLU = DB_YOL;

export const simdi = () => Date.now();
export const YEDI_GUN = 7 * 24 * 60 * 60 * 1000;
export const ON_DAKIKA = 10 * 60 * 1000;

const q = (sql, params = []) => db.prepare(sql).all(...params);
const q1 = (sql, params = []) => db.prepare(sql).get(...params) ?? null;
const x = (sql, params = []) => db.prepare(sql).run(...params);

// ---------- hesap ----------

export function hesapBul(anahtar) {
  return q1("SELECT * FROM hesap WHERE anahtar = ?", [anahtar]);
}

export function hesapOlustur({ anahtar, ad, tur, uuid = "", tuz = null, argon_veri = null, crack_limiti = 3 }) {
  x(
    `INSERT INTO hesap (anahtar, ad, ad_kucuk, tur, uuid, tuz, argon_veri, sifre_var, olusturma, crack_limiti)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(anahtar) DO UPDATE SET ad = excluded.ad, ad_kucuk = excluded.ad_kucuk, tur = excluded.tur, uuid = excluded.uuid`,
    [anahtar, ad, ad.toLowerCase().trim(), tur, uuid, tuz, argon_veri, argon_veri ? 1 : 0, simdi(), crack_limiti]
  );
  return hesapBul(anahtar);
}

/// Hesabı bul, yoksa oluştur.
export function hesapYoksaOlusturGetir(anahtar, ad, tur, uuid = "") {
  return hesapBul(anahtar) ?? hesapOlustur({ anahtar, ad, tur, uuid });
}

export function hesapSifreKaydet(anahtar, tuz, sifreli_veri) {
  x("UPDATE hesap SET tuz = ?, argon_veri = ?, sifre_var = 1, son_giris = ? WHERE anahtar = ?", [
    tuz,
    sifreli_veri,
    simdi(),
    anahtar,
  ]);
}

export const sifreKaydetVar = hesapSifreKaydet;

export function sonGirisYaz(anahtar) {
  x("UPDATE hesap SET son_giris = ? WHERE anahtar = ?", [simdi(), anahtar]);
}

export function hesapSahipIstisna(anahtar, acik) {
  x("UPDATE hesap SET sahip_istisna = ? WHERE anahtar = ?", [acik ? 1 : 0, anahtar]);
}

export function hesapKilit(anahtar, acik) {
  x("UPDATE hesap SET kosmetik_kilitli = ? WHERE anahtar = ?", [acik ? 1 : 0, anahtar]);
}

// ---------- cihaz ----------

export function cihazKaydet(cihaz_id, pub_key) {
  x(
    `INSERT INTO cihaz (cihaz_id, pub_key, ilk_gorulen, son_gorulen)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(cihaz_id) DO UPDATE SET son_gorulen = excluded.son_gorulen,
       pub_key = CASE WHEN iptal = 0 THEN excluded.pub_key ELSE pub_key END`,
    [cihaz_id, pub_key, simdi(), simdi()]
  );
}

export const cihazBul = (cihaz_id) => q1("SELECT * FROM cihaz WHERE cihaz_id = ?", [cihaz_id]);

export function cihazIptal(cihaz_id) {
  x("UPDATE cihaz SET iptal = 1 WHERE cihaz_id = ?", [cihaz_id]);
}

export function yetkiBitisYaz(cihaz_id, bitis) {
  x("UPDATE cihaz SET yetki_bitis = ? WHERE cihaz_id = ?", [bitis, cihaz_id]);
}

// ---------- bağlama kodu ----------

export function baglamaKodKaydet(kod, hesap_anahtar, hesap_ad, tur, cihaz_id) {
  x("DELETE FROM baglama_kod WHERE hesap_anahtar = ?", [hesap_anahtar]);
  x("INSERT INTO baglama_kod (kod, hesap_anahtar, hesap_ad, tur, cihaz_id, olusturma) VALUES (?, ?, ?, ?, ?, ?)", [
    kod,
    hesap_anahtar,
    hesap_ad,
    tur,
    cihaz_id,
    simdi(),
  ]);
}

export const baglamaKodBul = (kod) => q1("SELECT * FROM baglama_kod WHERE kod = ?", [kod]);
export const baglamaKodlarBul = (hesap_anahtar) =>
  q1("SELECT * FROM baglama_kod WHERE hesap_anahtar = ? AND kullanildi = 0", [hesap_anahtar]);

export function baglamaKodKullan(kod) {
  x("UPDATE baglama_kod SET kullanildi = 1 WHERE kod = ?", [kod]);
}

export function baglamaKodSil(kod) {
  x("DELETE FROM baglama_kod WHERE kod = ?", [kod]);
}

// ---------- şifre kodu ----------

export function sifreKodKaydet(kod, hesap_anahtar) {
  x("DELETE FROM sifre_kod WHERE hesap_anahtar = ?", [hesap_anahtar]);
  x("INSERT INTO sifre_kod (kod, hesap_anahtar, olusturma) VALUES (?, ?, ?)", [kod, hesap_anahtar, simdi()]);
}

export const sifreKodBul = (kod) => q1("SELECT * FROM sifre_kod WHERE kod = ?", [kod]);
export const sifreKodBulAnahtar = (hesap_anahtar) => q1("SELECT * FROM sifre_kod WHERE hesap_anahtar = ?", [hesap_anahtar]);

export function sifreKodKullan(kod) {
  x("UPDATE sifre_kod SET kullanildi = 1 WHERE kod = ?", [kod]);
}

export function sifreKodSil(kod) {
  x("DELETE FROM sifre_kod WHERE kod = ?", [kod]);
}

export function sifreKodSilAnahtar(hesap_anahtar) {
  x("DELETE FROM sifre_kod WHERE hesap_anahtar = ?", [hesap_anahtar]);
}

export function sifreKodDeneme(kod, artis) {
  x("UPDATE sifre_kod SET deneme = deneme + ? WHERE kod = ?", [artis, kod]);
}

// ---------- bağlantı ----------

export function baglantiKaydet(hesap_anahtar, hesap_turu, discord_id, discord_ad, rol_yol) {
  x(
    `INSERT INTO baglanti (hesap_anahtar, hesap_turu, discord_id, discord_ad, rol_yol, durum, tarih)
     VALUES (?, ?, ?, ?, ?, 'aktif', ?)
     ON CONFLICT(hesap_anahtar) DO UPDATE SET
       hesap_turu = excluded.hesap_turu, discord_id = excluded.discord_id,
       discord_ad = excluded.discord_ad, rol_yol = excluded.rol_yol,
       durum = 'aktif', tarih = excluded.tarih`,
    [hesap_anahtar, hesap_turu, discord_id, discord_ad ?? null, rol_yol ? 1 : 0, simdi()]
  );
  x("INSERT INTO baglanti_gecmisi (discord_id, hesap_anahtar, tarih) VALUES (?, ?, ?)", [
    discord_id,
    hesap_anahtar,
    simdi(),
  ]);
}

export const baglantiBul = (hesap_anahtar) => q1("SELECT * FROM baglanti WHERE hesap_anahtar = ?", [hesap_anahtar]);

export function baglantiIptal(hesap_anahtar) {
  x("UPDATE baglanti SET durum = 'ayrildi' WHERE hesap_anahtar = ?", [hesap_anahtar]);
}

export function rolYaz(hesap_anahtar, rol_yol) {
  x("UPDATE baglanti SET rol_yol = ? WHERE hesap_anahtar = ?", [rol_yol ? 1 : 0, hesap_anahtar]);
}

export function crackBaglantiSayisi(discord_id) {
  const r = q1(
    `SELECT COUNT(DISTINCT g.hesap_anahtar) AS n
     FROM baglanti_gecmisi g JOIN hesap h ON h.anahtar = g.hesap_anahtar
     WHERE g.discord_id = ? AND h.tur = 'cracked'`,
    [discord_id]
  );
  return Number(r?.n ?? 0);
}

// ---------- deneme + kilit ----------

export function denemeSay(hesap_anahtar, cihaz_id) {
  const r = q1("SELECT adet FROM deneme WHERE hesap_anahtar = ? AND cihaz_id = ?", [hesap_anahtar, cihaz_id]);
  return Number(r?.adet ?? 0);
}

export function denemeArtir(hesap_anahtar, cihaz_id) {
  x(
    `INSERT INTO deneme (hesap_anahtar, cihaz_id, adet, son) VALUES (?, ?, 1, ?)
     ON CONFLICT(hesap_anahtar, cihaz_id) DO UPDATE SET adet = adet + 1, son = excluded.son`,
    [hesap_anahtar, cihaz_id, simdi()]
  );
}

export function denemeSifirla(hesap_anahtar, cihaz_id) {
  x("DELETE FROM deneme WHERE hesap_anahtar = ? AND cihaz_id = ?", [hesap_anahtar, cihaz_id]);
}

export const kilitVar = (hesap_anahtar, cihaz_id) =>
  q1("SELECT * FROM kilit WHERE hesap_anahtar = ? AND cihaz_id = ? AND bitis > ?", [hesap_anahtar, cihaz_id, simdi()]);

export function kilitKoy(hesap_anahtar, cihaz_id, saat, neden) {
  x(
    `INSERT INTO kilit (hesap_anahtar, cihaz_id, bitis, neden) VALUES (?, ?, ?, ?)
     ON CONFLICT(hesap_anahtar, cihaz_id) DO UPDATE SET bitis = excluded.bitis, neden = excluded.neden`,
    [hesap_anahtar, cihaz_id, simdi() + saat * 3600 * 1000, neden]
  );
}

export function cihazSonGorulen(cihaz_id) {
  x("UPDATE cihaz SET son_gorulen = ? WHERE cihaz_id = ?", [simdi(), cihaz_id]);
}
// ---------- IP kaydı (7 gün + GERÇEK silme) ----------

export function ipKaydet(cihaz_id, ip) {
  ipTemizle();
  const ayni = q1("SELECT * FROM ip_kaydi WHERE cihaz_id = ? AND ip = ? ORDER BY id DESC LIMIT 1", [cihaz_id, ip]);
  if (!ayni) {
    x("INSERT INTO ip_kaydi (cihaz_id, ip, silme_zamani) VALUES (?, ?, ?)", [cihaz_id, ip, simdi() + YEDI_GUN]);
  }
  return ipTemizle();
}

export function ipTemizle() {
  const sonuc = db.prepare("DELETE FROM ip_kaydi WHERE silme_zamani <= ?").run(simdi());
  return Number(sonuc.changes ?? 0);
}

export const ipTemizleBekleyen = ipTemizle;
export const butunIpler = (cihaz_id) => q("SELECT ip, silme_zamani FROM ip_kaydi WHERE cihaz_id = ? ORDER BY id DESC", [cihaz_id]);

// ---------- olay ----------

export function olayKaydet(tur, hesap_anahtar, cihaz_id, detay) {
  x("INSERT INTO olay (tur, hesap_anahtar, cihaz_id, detay, tarih) VALUES (?, ?, ?, ?, ?)", [
    tur,
    hesap_anahtar ?? null,
    cihaz_id ?? null,
    detay ?? null,
    simdi(),
  ]);
}

export const sonOlaylar = (limit = 100) => q("SELECT * FROM olay ORDER BY id DESC LIMIT ?", [limit]);

// ---------- bot durumu ----------

export function botPingYaz() {
  x("UPDATE bot_durum SET son_ping = ? WHERE id = 1", [simdi()]);
}

export function botSonPing() {
  return q1("SELECT son_ping FROM bot_durum WHERE id = 1")?.son_ping ?? 0;
}

export function botKapaliMi() {
  return simdi() - botSonPing() > 3 * 60 * 1000;
}

// ---------- kozmetik ----------

export function kozmetikYaz(hesap_anahtar, veri) {
  x(
    `INSERT INTO kozmetik (hesap_anahtar, surum, pelerin_url, elytra_url, skin_url, saklanan, tarih, iptal)
     VALUES (?, ?, ?, ?, ?, ?, ?, 0)
     ON CONFLICT(hesap_anahtar) DO UPDATE SET
       surum = excluded.surum, pelerin_url = excluded.pelerin_url,
       elytra_url = excluded.elytra_url, skin_url = excluded.skin_url,
       saklanan = excluded.saklanan, tarih = excluded.tarih, iptal = 0`,
    [
      hesap_anahtar,
      veri.surum ?? null,
      veri.pelerin_url ?? null,
      veri.elytra_url ?? null,
      veri.skin_url ?? null,
      veri.saklanan ?? null,
      simdi(),
    ]
  );
}

export const kozmetikOku = (hesap_anahtar) =>
  q1("SELECT * FROM kozmetik WHERE hesap_anahtar = ? AND iptal = 0", [hesap_anahtar]);

export function kozmetikIptal(hesap_anahtar) {
  x("UPDATE kozmetik SET iptal = 1 WHERE hesap_anahtar = ?", [hesap_anahtar]);
}
