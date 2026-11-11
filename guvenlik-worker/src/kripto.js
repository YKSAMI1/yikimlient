// KRİPTO — cihaz imzası doğrulama, sunucu yanıt imzası, parola doğrulayıcı.
//
// NEDEN BU DOSYA VAR: API artık Cloudflare Workers'te çalışıyor (ücretsiz plan
// = istek başına 10 ms CPU). İstemci zaten parolayı PBKDF2-SHA256 (210.000 tur)
// ile özetliyor; sunucudaki scrypt ek adımı 10 ms sınırını aşıyor ve isteği
// öldürüyordu. Burada sunucu tarafı YALNIZ ucuz ama güvenli işler yapar:
//   * parola: HMAC-SHA256(tuz, pepper + "|" + istemci_ozeti) + AES-256-GCM zarf
//   * yanıt:  Ed25519 imza (launcher'daki gömülü genel anahtarla aynı)
//   * istek:  Ed25519 cihaz imzası doğrulaması
// Eski sürümde kaydedilmiş (scrypt) parolalar burada doğrulanamaz → kullanıcı
// Discord üzerinden bir kez parola sıfırlar (launcher bunu "eski parola" diye
// bildirir). Yeni kayıtlar v2 biçimindedir.

import crypto from "node:crypto";

const DER_BASI = Buffer.from("302a300506032b6570032100", "hex");
const PKCS8_BASI = Buffer.from("302e020100300506032b657004220420", "hex");
const B64 = "base64";

// ---------- cihaz imzası ----------

/** İstemci genel anahtarını base64'tan çöz (32 bayt). */
export function pubCoz(pub_b64) {
  try {
    const b = Buffer.from(String(pub_b64 || ""), B64);
    return b.length === 32 ? b : null;
  } catch {
    return null;
  }
}

/** İstemci imzasını doğrula. mesaj = `cihaz_id|ts|nonce|body`. */
export function istemciImzaDogrula(pub_b64, imza_b64, mesaj) {
  const pub = pubCoz(pub_b64);
  if (!pub) return false;
  try {
    const imza = Buffer.from(String(imza_b64 || ""), B64);
    if (imza.length !== 64) return false;
    const anahtar = crypto.createPublicKey({
      key: Buffer.concat([DER_BASI, pub]),
      format: "der",
      type: "spki",
    });
    return crypto.verify(null, Buffer.from(mesaj, "utf8"), anahtar, imza);
  } catch {
    return false;
  }
}

// ---------- sunucu yanıt imzası ----------

/** Gizli anahtar (64 hane hex ya da base64) → KeyObject; yoksa null. */
export function sunucuGizli(veri) {
  if (!veri) return null;
  try {
    const der = /^[0-9a-fA-F]{64}$/.test(veri) ? Buffer.from(veri, "hex") : Buffer.from(veri, B64);
    if (der.length === 32) {
      return crypto.createPrivateKey({
        key: Buffer.concat([PKCS8_BASI, der]),
        format: "der",
        type: "pkcs8",
      });
    }
    return crypto.createPrivateKey({
      key: der,
      format: der[0] === 0x30 ? "der" : "pem",
      type: "pkcs8",
    });
  } catch {
    return null;
  }
}

/**
 * JSON gövdesini sunucu imzasıyla birlikte döndür.
 * `govde_metin` = imzalanan HAM metin (launcher bunu doğrudan doğrular;
 * yeniden serileştirme anahtar sırasını değiştirip imzayı bozuyordu).
 */
export function imzaliYanit(gizliVeri, govde) {
  const govdeMetni = JSON.stringify(govde);
  const gizli = sunucuGizli(gizliVeri);
  if (!gizli) return { govde, govde_metin: govdeMetni, yanit_imza: null };
  const imza = crypto.sign(null, Buffer.from(govdeMetni, "utf8"), gizli);
  return { govde, govde_metin: govdeMetni, yanit_imza: imza.toString(B64) };
}

/** Launcher'da gösterilen genel anahtar (base64). */
export function sunucuPubB64(gizliVeri) {
  const gizli = sunucuGizli(gizliVeri);
  if (!gizli) return null;
  const pub = crypto.createPublicKey(gizli).export({ format: "der", type: "spki" });
  return pub.subarray(pub.length - 32).toString(B64);
}

// ---------- parola doğrulayıcı (v2) ----------

export const ESKI_ONEK = "v1:";
export const YENI_ONEK = "v2:";

/** 32 baytlık zarf anahtarı (base64 veya hex). */
export function zarfAnahtari(veri) {
  if (!veri) return null;
  if (/^[0-9a-fA-F]{64}$/.test(veri)) return Buffer.from(veri, "hex");
  try {
    const b = Buffer.from(veri, B64);
    return b.length === 32 ? b : null;
  } catch {
    return null;
  }
}

export function tuzUret() {
  return crypto.randomBytes(16).toString(B64);
}

function hmac(tuzB64, pepper, ozet) {
  return crypto
    .createHmac("sha256", Buffer.from(tuzB64, B64))
    .update(`${pepper}|${ozet}`, "utf8")
    .digest("base64");
}

function sifrele(anahtar, duz) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", anahtar, iv);
  const s1 = cipher.update(duz, "utf8");
  const s2 = cipher.final();
  const etiket = cipher.getAuthTag();
  return Buffer.concat([iv, etiket, s1, s2]).toString(B64);
}

function coz(anahtar, sifreli) {
  try {
    const t = Buffer.from(String(sifreli || ""), B64);
    if (t.length < 12 + 16 + 1) return null;
    const d = crypto.createDecipheriv("aes-256-gcm", anahtar, t.subarray(0, 12));
    d.setAuthTag(t.subarray(12, 28));
    return Buffer.concat([d.update(t.subarray(28)), d.final()]).toString("utf8");
  } catch {
    return null;
  }
}

/** Yeni parola kaydı: {tuz, argon_veri} (sütun adları DB ile aynı). */
export function sifreKaydiUret(gelenHash, pepper, anahtar) {
  if (!anahtar) throw new Error("YIKIM_ANAHTAR tanimli degil");
  const tuz = tuzUret();
  const dogrulayici = `${YENI_ONEK}${hmac(tuz, pepper, gelenHash)}`;
  return { tuz, argon_veri: sifrele(anahtar, dogrulayici) };
}

/** Parola doğru mu? Eski (scrypt) kayıtlarda false + eski=true döner. */
export function parolaKontrol(kayit, gelenHash, pepper, anahtar) {
  if (!kayit?.argon_veri || !kayit?.tuz) return { dogru: false, eski: false };
  const duz = coz(anahtar, kayit.argon_veri);
  if (!duz) return { dogru: false, eski: false };
  if (!duz.startsWith(YENI_ONEK)) {
    // Eski sürüm scrypt doğrulayıcısı: burada makul sürede hesaplanamaz.
    return { dogru: false, eski: true };
  }
  const beklenen = duz.slice(YENI_ONEK.length);
  const gelen = hmac(kayit.tuz, pepper, gelenHash);
  const a = Buffer.from(gelen, "utf8");
  const b = Buffer.from(beklenen, "utf8");
  if (a.length !== b.length) return { dogru: false, eski: false };
  return { dogru: crypto.timingSafeEqual(a, b), eski: false };
}

/** Sabit zamanlı metin karşılaştırması (testler ve basit karşılaştırmalar). */
export function esitMi(a, b) {
  const x = Buffer.from(String(a || ""), "utf8");
  const y = Buffer.from(String(b || ""), "utf8");
  return x.length === y.length && x.length > 0 && crypto.timingSafeEqual(x, y);
}
