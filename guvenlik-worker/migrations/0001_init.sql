-- YIKIM guvenlik API'si — D1 şeması.
-- Yerel sürümdeki (guvenlik-api/src/db.js) tabloların birebir karşılığı +
-- nonce tablosu (tekrar saldırısı koruması artık global: her isolate kendi
-- belleğinde tutamaz).

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

-- İmza tekrar saldırısı: nonce her yerde tek kez kabul edilir.
CREATE TABLE IF NOT EXISTS nonce (
  nonce TEXT PRIMARY KEY,
  ts INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS nonce_ts ON nonce(ts);
