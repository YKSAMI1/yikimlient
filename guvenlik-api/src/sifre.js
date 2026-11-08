// ŞİFRE + ŞİFRELEME — tüm anahtarlar ORTAM DEĞİŞKENİNDEN gelir, kodda sabit YOK.
//
// Katmanlar (tasarım §6-v2 / §21):
//   1) Parola asla düz metin tutulmaz: scrypt (bellek-sert KDF; ileride Argon2id
//      ile değiştirilebilir tek fonksiyon) ile tuz + pepper birlikte türetilir.
//   2) Türetilen doğrulayıcı bile DB'ye DÜZ yazılmaz: AES-256-GCM ile şifrelenir
//      (zarf şifreleme). DB sızsa bile doğrulayıcı okunamaz; çözüm yalnızca API
//      sürecinin bellekindedir.
//   3) Launcher ve bot DB'ye DOĞRUDAN bağlanmaz — tüm erişim API üzerinden.
//
// Ortam değişkenleri (bkz. .env.example):
//   YIKIM_PEPPER       — scrypt pepper (en az 16 karakter)
//   YIKIM_ANAHTAR      — zarf şifreleme anahtarı (32 bayt, base64 veya hex)

import crypto from "node:crypto";

const PEPPER = process.env.YIKIM_PEPPER || "";
const ANAHTAR = anahtarCoz();

function anahtarCoz() {
  const veri = process.env.YIKIM_ANAHTAR || "";
  if (!veri) return null;
  // base64 (44 karakter) ya da hex (64 karakter) kabul et
  if (/^[0-9a-fA-F]{64}$/.test(veri)) return Buffer.from(veri, "hex");
  try {
    const b = Buffer.from(veri, "base64");
    return b.length === 32 ? b : null;
  } catch {
    return null;
  }
}

/** Yapılandırma tamam mı? (süreç başlangıcında denetlenir) */
export function yapilandirma_tam() {
  return PEPPER.length >= 16 && ANAHTAR !== null;
}

/** Geliştirme amaçlı geçici anahtar (SADECE test için, açıkça loglanır). */
export function test_anahtari_uret() {
  return crypto.randomBytes(32);
}

// ---------- parola türetme (KDF) ----------

export function tuzUret() {
  return crypto.randomBytes(16).toString("base64");
}

/// Parolayı tuz + pepper ile türet → base64 doğrulayıcı.
/// scrypt N=2^15, r=8, p=1 (~32 MB, ~100 ms) — kaba kuvvet maliyetini yüksek tutar.
export function parolaTuret(parola, tuzB64) {
  const tuz = Buffer.from(tuzB64, "base64");
  const girdi = Buffer.concat([tuz, Buffer.from(PEPPER, "utf8"), Buffer.from(parola, "utf8")]);
  const anahtar = crypto.scryptSync(girdi, tuz, 32, { N: 16384, r: 8, p: 1, maxmem: 32 * 1024 * 1024 });
  return anahtar.toString("base64");
}

/// Launcher'ın gönderdiği hash ile beklenen hash karşılaştırması (sabit zamanlı).
export function dogrulayici_karsilastir(gelen, beklenen) {
  const a = Buffer.from(gelen || "", "utf8");
  const b = Buffer.from(beklenen || "", "utf8");
  if (a.length !== b.length || a.length === 0) return false;
  return crypto.timingSafeEqual(a, b);
}

// ---------- zarf şifreleme (doğrulayıcı + hassas alanlar) ----------

/// Düz metni AES-256-GCM ile şifrele → base64(iv|authTag|ciphertext)
export function sifrele(duz) {
  if (!ANAHTAR) throw new Error("YIKIM_ANAHTAR tanımlı değil");
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", ANAHTAR, iv);
  const s1 = cipher.update(duz, "utf8");
  const s2 = cipher.final();
  const etiket = cipher.getAuthTag();
  return Buffer.concat([iv, etiket, Buffer.concat([s1, s2])]).toString("base64");
}

/// Şifreli metni çöz (bozuk/elle oynanmışsa null — imzalı etiket korur).
export function coz(sifreli) {
  if (!ANAHTAR) throw new Error("YIKIM_ANAHTAR tanımlı değil");
  try {
    const tampon = Buffer.from(sifreli, "base64");
    if (tampon.length < 12 + 16 + 1) return null;
    const iv = tampon.subarray(0, 12);
    const etiket = tampon.subarray(12, 28);
    const veri = tampon.subarray(28);
    const deşifre = crypto.createDecipheriv("aes-256-gcm", ANAHTAR, iv);
    deşifre.setAuthTag(etiket);
    const s1 = deşifre.update(veri);
    const s2 = deşifre.final();
    return Buffer.concat([s1, s2]).toString("utf8");
  } catch {
    return null;
  }
}

/// Parola doğrulama: istemciden gelen hash'i, kayıtlı tuzla sunucu tarafında
/// yeniden türetip DB'deki ŞİFRELİ doğrulayıcıyla karşılaştırır.
/// `kayit` = hesap satırı (tuz, argon_veri şifreli).
export function parolaDogruMu(kayit, gelen_hash) {
  if (!kayit?.argon_veri || !kayit?.tuz) return false;
  const duz = coz(kayit.argon_veri);
  if (!duz) return false;
  return dogrulayici_karsilastir(parolaTuret(gelen_hash, kayit.tuz), duz);
}

/// Yeni parola kaydı: istemci hash'i → tuzla yeniden türet → şifreli sakla.
/// Dönen alan adları DB sütunlarıyla aynıdır.
export function sifreKaydiUret(gelen_hash) {
  const tuz = tuzUret();
  return { tuz, argon_veri: sifrele(parolaTuret(gelen_hash, tuz)) };
}
