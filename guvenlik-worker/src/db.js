// DB — Cloudflare D1 (SQLite) bağlayıcısı.
//
// Yerel sürümdeki `guvenlik-api/src/db.js` ile AYNI fonksiyon adları/işlevler,
// tek fark: hepsi async ve `d1` bağlantısı istek başına geçirilir. Modül
// seviyesinde tekil bağlantı tutulmaz (Workers'ta istekler aynı isolate'te
// iç içe çalışabilir; paylaşılan durum karışırdı).

export const simdi = () => Date.now();
export const YEDI_GUN = 7 * 24 * 60 * 60 * 1000;
export const ON_DAKIKA = 10 * 60 * 1000;
export const NONCE_OMUR = 10 * 60 * 1000;

export function dbYap(d1) {
  const all = async (sql, ...p) => (await d1.prepare(sql).bind(...p).all()).results ?? [];
  const one = async (sql, ...p) => (await d1.prepare(sql).bind(...p).first()) ?? null;
  const run = async (sql, ...p) => {
    const r = await d1.prepare(sql).bind(...p).run();
    return Number(r?.meta?.changes ?? 0);
  };

  return {
    // ---------- hesap ----------
    hesapBul: (anahtar) => one("SELECT * FROM hesap WHERE anahtar = ?", anahtar),

    hesapAdBul: (ad) =>
      ad ? one("SELECT * FROM hesap WHERE ad_kucuk = ?", String(ad).toLowerCase().trim()) : null,

    async hesapOlustur({ anahtar, ad, tur, uuid = "", crack_limiti = 3 }) {
      await run(
        `INSERT INTO hesap (anahtar, ad, ad_kucuk, tur, uuid, sifre_var, olusturma, crack_limiti)
         VALUES (?, ?, ?, ?, ?, 0, ?, ?)
         ON CONFLICT(anahtar) DO UPDATE SET
           ad = excluded.ad, ad_kucuk = excluded.ad_kucuk,
           tur = excluded.tur, uuid = excluded.uuid`,
        anahtar,
        ad,
        String(ad).toLowerCase().trim(),
        tur,
        uuid,
        simdi(),
        crack_limiti
      );
      return one("SELECT * FROM hesap WHERE anahtar = ?", anahtar);
    },

    async hesapYoksaOlusturGetir(anahtar, ad, tur, uuid = "") {
      return (await one("SELECT * FROM hesap WHERE anahtar = ?", anahtar)) ??
        (await this.hesapOlustur({ anahtar, ad, tur, uuid }));
    },

    async hesapSifreKaydet(anahtar, tuz, sifreli_veri) {
      await run(
        "UPDATE hesap SET tuz = ?, argon_veri = ?, sifre_var = 1, son_giris = ? WHERE anahtar = ?",
        tuz,
        sifreli_veri,
        simdi(),
        anahtar
      );
    },

    sonGirisYaz: (anahtar) => run("UPDATE hesap SET son_giris = ? WHERE anahtar = ?", simdi(), anahtar),

    // ---------- cihaz ----------
    async cihazKaydet(cihaz_id, pub_key) {
      await run(
        `INSERT INTO cihaz (cihaz_id, pub_key, ilk_gorulen, son_gorulen)
         VALUES (?, ?, ?, ?)
         ON CONFLICT(cihaz_id) DO UPDATE SET son_gorulen = excluded.son_gorulen,
           pub_key = CASE WHEN iptal = 0 THEN excluded.pub_key ELSE pub_key END`,
        cihaz_id,
        pub_key,
        simdi(),
        simdi()
      );
    },

    cihazBul: (cihaz_id) => one("SELECT * FROM cihaz WHERE cihaz_id = ?", cihaz_id),
    cihazSonGorulen: (cihaz_id) => run("UPDATE cihaz SET son_gorulen = ? WHERE cihaz_id = ?", simdi(), cihaz_id),
    yetkiBitisYaz: (cihaz_id, bitis) =>
      run("UPDATE cihaz SET yetki_bitis = ? WHERE cihaz_id = ?", bitis, cihaz_id),

    // ---------- bağlama kodu ----------
    async baglamaKodKaydet(kod, hesap_anahtar, hesap_ad, tur, cihaz_id) {
      await run("DELETE FROM baglama_kod WHERE hesap_anahtar = ?", hesap_anahtar);
      await run(
        "INSERT INTO baglama_kod (kod, hesap_anahtar, hesap_ad, tur, cihaz_id, olusturma) VALUES (?, ?, ?, ?, ?, ?)",
        kod,
        hesap_anahtar,
        hesap_ad,
        tur,
        cihaz_id,
        simdi()
      );
    },

    baglamaKodBul: (kod) => one("SELECT * FROM baglama_kod WHERE kod = ?", kod),
    baglamaKodlarBul: (hesap_anahtar) =>
      one("SELECT * FROM baglama_kod WHERE hesap_anahtar = ? AND kullanildi = 0", hesap_anahtar),
    baglamaKodKullan: (kod) => run("UPDATE baglama_kod SET kullanildi = 1 WHERE kod = ?", kod),
    baglamaKodSil: (kod) => run("DELETE FROM baglama_kod WHERE kod = ?", kod),

    // ---------- şifre kodu ----------
    async sifreKodKaydet(kod, hesap_anahtar) {
      await run("DELETE FROM sifre_kod WHERE hesap_anahtar = ?", hesap_anahtar);
      await run("INSERT INTO sifre_kod (kod, hesap_anahtar, olusturma) VALUES (?, ?, ?)", kod, hesap_anahtar, simdi());
    },

    sifreKodBul: (kod) => one("SELECT * FROM sifre_kod WHERE kod = ?", kod),
    sifreKodKullan: (kod) => run("UPDATE sifre_kod SET kullanildi = 1 WHERE kod = ?", kod),
    sifreKodSil: (kod) => run("DELETE FROM sifre_kod WHERE kod = ?", kod),
    sifreKodSilAnahtar: (hesap_anahtar) => run("DELETE FROM sifre_kod WHERE hesap_anahtar = ?", hesap_anahtar),
    sifreKodDeneme: (kod, artis) => run("UPDATE sifre_kod SET deneme = deneme + ? WHERE kod = ?", artis, kod),

    // ---------- bağlantı ----------
    async baglantiKaydet(hesap_anahtar, hesap_turu, discord_id, discord_ad, rol_yol) {
      await run(
        `INSERT INTO baglanti (hesap_anahtar, hesap_turu, discord_id, discord_ad, rol_yol, durum, tarih)
         VALUES (?, ?, ?, ?, ?, 'aktif', ?)
         ON CONFLICT(hesap_anahtar) DO UPDATE SET
           hesap_turu = excluded.hesap_turu, discord_id = excluded.discord_id,
           discord_ad = excluded.discord_ad, rol_yol = excluded.rol_yol,
           durum = 'aktif', tarih = excluded.tarih`,
        hesap_anahtar,
        hesap_turu,
        discord_id,
        discord_ad ?? null,
        rol_yol ? 1 : 0,
        simdi()
      );
      await run(
        "INSERT INTO baglanti_gecmisi (discord_id, hesap_anahtar, tarih) VALUES (?, ?, ?)",
        discord_id,
        hesap_anahtar,
        simdi()
      );
    },

    baglantiBul: (hesap_anahtar) => one("SELECT * FROM baglanti WHERE hesap_anahtar = ?", hesap_anahtar),
    rolYazDiscord: (discord_id, rol_yol) =>
      run("UPDATE baglanti SET rol_yol = ? WHERE discord_id = ?", rol_yol ? 1 : 0, discord_id),

    async crackBaglantiSayisi(discord_id) {
      const r = await one(
        `SELECT COUNT(DISTINCT g.hesap_anahtar) AS n
         FROM baglanti_gecmisi g JOIN hesap h ON h.anahtar = g.hesap_anahtar
         WHERE g.discord_id = ? AND h.tur = 'cracked'`,
        discord_id
      );
      return Number(r?.n ?? 0);
    },

    // ---------- deneme + kilit ----------
    async denemeSay(hesap_anahtar, cihaz_id) {
      const r = await one("SELECT adet FROM deneme WHERE hesap_anahtar = ? AND cihaz_id = ?", hesap_anahtar, cihaz_id);
      return Number(r?.adet ?? 0);
    },

    async denemeArtir(hesap_anahtar, cihaz_id) {
      await run(
        `INSERT INTO deneme (hesap_anahtar, cihaz_id, adet, son) VALUES (?, ?, 1, ?)
         ON CONFLICT(hesap_anahtar, cihaz_id) DO UPDATE SET adet = adet + 1, son = excluded.son`,
        hesap_anahtar,
        cihaz_id,
        simdi()
      );
    },

    denemeSifirla: (hesap_anahtar, cihaz_id) =>
      run("DELETE FROM deneme WHERE hesap_anahtar = ? AND cihaz_id = ?", hesap_anahtar, cihaz_id),

    kilitVar: (hesap_anahtar, cihaz_id) =>
      one("SELECT * FROM kilit WHERE hesap_anahtar = ? AND cihaz_id = ? AND bitis > ?", hesap_anahtar, cihaz_id, simdi()),

    async kilitKoy(hesap_anahtar, cihaz_id, saat, neden) {
      await run(
        `INSERT INTO kilit (hesap_anahtar, cihaz_id, bitis, neden) VALUES (?, ?, ?, ?)
         ON CONFLICT(hesap_anahtar, cihaz_id) DO UPDATE SET bitis = excluded.bitis, neden = excluded.neden`,
        hesap_anahtar,
        cihaz_id,
        simdi() + saat * 3600 * 1000,
        neden
      );
    },

    // ---------- IP kaydı (7 gün + gerçek silme) ----------
    async ipKaydet(cihaz_id, ip) {
      await this.ipTemizle();
      const ayni = await one("SELECT * FROM ip_kaydi WHERE cihaz_id = ? AND ip = ? ORDER BY id DESC LIMIT 1", cihaz_id, ip);
      if (!ayni) {
        await run("INSERT INTO ip_kaydi (cihaz_id, ip, silme_zamani) VALUES (?, ?, ?)", cihaz_id, ip, simdi() + YEDI_GUN);
      }
      return this.ipTemizle();
    },

    ipTemizle: () => run("DELETE FROM ip_kaydi WHERE silme_zamani <= ?", simdi()),

    // ---------- olay ----------
    olayKaydet: (tur, hesap_anahtar, cihaz_id, detay) =>
      run(
        "INSERT INTO olay (tur, hesap_anahtar, cihaz_id, detay, tarih) VALUES (?, ?, ?, ?, ?)",
        tur,
        hesap_anahtar ?? null,
        cihaz_id ?? null,
        detay ?? null,
        simdi()
      ),

    // ---------- bot durumu ----------
    botPingYaz: () => run("UPDATE bot_durum SET son_ping = ? WHERE id = 1", simdi()),

    async botSonPing() {
      const r = await one("SELECT son_ping FROM bot_durum WHERE id = 1");
      return Number(r?.son_ping ?? 0);
    },

    async botKapaliMi() {
      return simdi() - (await this.botSonPing()) > 3 * 60 * 1000;
    },

    // ---------- kozmetik ----------
    async kozmetikYaz(hesap_anahtar, veri) {
      await run(
        `INSERT INTO kozmetik (hesap_anahtar, surum, pelerin_url, elytra_url, skin_url, saklanan, tarih, iptal)
         VALUES (?, ?, ?, ?, ?, ?, ?, 0)
         ON CONFLICT(hesap_anahtar) DO UPDATE SET
           surum = excluded.surum, pelerin_url = excluded.pelerin_url,
           elytra_url = excluded.elytra_url, skin_url = excluded.skin_url,
           saklanan = excluded.saklanan, tarih = excluded.tarih, iptal = 0`,
        hesap_anahtar,
        veri.surum ?? null,
        veri.pelerin_url ?? null,
        veri.elytra_url ?? null,
        veri.skin_url ?? null,
        veri.saklanan ?? null,
        simdi()
      );
    },

    kozmetikOku: (hesap_anahtar) =>
      one("SELECT * FROM kozmetik WHERE hesap_anahtar = ? AND iptal = 0", hesap_anahtar),

    // ---------- nonce (tekrar saldırısı) ----------
    /** true = ilk kez görüldü; false = tekrar (reddet). */
    async nonceKabul(nonce) {
      const degisen = await run("INSERT OR IGNORE INTO nonce (nonce, ts) VALUES (?, ?)", nonce, simdi());
      if (degisen === 1) {
        return true;
      }
      // Eski nonce tablosu büyümesin: fırsat buldukça temizle.
      if (Math.random() < 0.05) {
        await run("DELETE FROM nonce WHERE ts < ?", simdi() - NONCE_OMUR);
      }
      return false;
    },

    nonceTemizle: () => run("DELETE FROM nonce WHERE ts < ?", simdi() - NONCE_OMUR),
  };
}
