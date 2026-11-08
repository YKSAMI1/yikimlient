// İMZA — Ed25519 doğrulama + sunucu yanıt imzalama.
// Tüm anahtarlar ortam değişkeninden gelir (kodda sabit yok).

import crypto from "node:crypto";

const B64 = "base64";

/** İstemci genel anahtarını base64'tan çöz (32 bayt). */
export function pubCoz(pub_b64) {
  try {
    const b = Buffer.from(pub_b64, B64);
    return b.length === 32 ? b : null;
  } catch {
    return null;
  }
}

/** İstemci imzasını doğrula. imzaMessage = `cihaz_id|ts|nonce|body`. */
export function istemciImzaDogrula(pub_b64, imza_b64, imzaMessage) {
  const pub = pubCoz(pub_b64);
  if (!pub) return false;
  try {
    const imza = Buffer.from(imza_b64, B64);
    if (imza.length !== 64) return false;
    return crypto.verify(null, Buffer.from(imzaMessage, "utf8"), crypto.createPublicKey({ key: Buffer.concat([DER_BASI, pub]), format: "der", type: "spki" }), imza);
  } catch {
    return false;
  }
}

// Ed25519 SPKI gövdesi (ham 32 bayt → DER)
const DER_BASI = Buffer.from("302a300506032b6570032100", "hex");

/** Sunucu gizli anahtarı (hex/base64) → KeyObject; yoksa null. */
export function sunucuGizli() {
  const veri = process.env.YIKIM_IMZA_GIZLI || "";
  if (!veri) return null;
  try {
    const der = /^[0-9a-fA-F]{64}$/.test(veri) ? Buffer.from(veri, "hex") : Buffer.from(veri, B64);
    // ham 32 bayt → PKCS8 zarfı
    if (der.length === 32) {
      return crypto.createPrivateKey({ key: Buffer.concat([PKCS8_BASI, der]), format: "der", type: "pkcs8" });
    }
    return crypto.createPrivateKey({ key: der, format: Buffer.isBuffer(der) && der[0] === 0x30 ? "der" : "pem", type: "pkcs8" });
  } catch {
    return null;
  }
}

const PKCS8_BASI = Buffer.from("302e020100300506032b657004220420", "hex");

/** JSON gövdesini sunucu imzasıyla birlikte döndür. */
export function imzaliYanit(govde) {
  const govdeMetni = JSON.stringify(govde);
  const gizli = sunucuGizli();
  if (!gizli) return { govde, yanit_imza: null };
  const imza = crypto.sign(null, Buffer.from(govdeMetni, "utf8"), gizli);
  return { govde, yanit_imza: imza.toString(B64) };
}

/** Launcher'da gösterilecek genel anahtar (base64). */
export function sunucuPubB64() {
  const gizli = sunucuGizli();
  if (!gizli) return null;
  const pub = crypto.createPublicKey(gizli).export({ format: "der", type: "spki" });
  return pub.subarray(pub.length - 32).toString(B64);
}

/** Test için: rastgele anahtar (yerel geliştirmede). */
export function testAnahtarUret() {
  const gizli = crypto.generateKeyPairSync("ed25519").privateKey;
  const der = gizli.export({ format: "der", type: "pkcs8" });
  return der.subarray(der.length - 32).toString("hex");
}
