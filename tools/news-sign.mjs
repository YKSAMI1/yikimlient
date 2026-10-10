// YIKIMLient duyuru imzalama aracı (sıfır bağımlılık — Node.js 18+ içi gelen crypto)
//
//   node tools/news-sign.mjs keygen          → özel anahtar üret (tools/news-private.key)
//   node tools/news-sign.mjs verify          → stats.rs'e gömülü pubkey ile dosya uyum testi
//   node tools/news-sign.mjs sign [dosya]    → feed.json'ı imzala (varsayılan: news/feed.json)
//
// Güvenlik modeli:
//   - Ed25519 imza. Özel anahtar SADECE senin bilgisayarında, asla repo'ya gitmez.
//   - Launcher, public key ile imzayı doğrular; anahtarı olmayan kimse geçerli
//     duyuru yayınlayamaz. GitHub repo'su public olsa bile özel anahtar olmadan
//     imza üretilemez.
import { generateKeyPairSync, sign, verify, createPrivateKey, createPublicKey } from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const keyFile = resolve(dirname(fileURLToPath(import.meta.url)), "news-private.key");

const cmd = process.argv[2];

if (cmd === "keygen") {
  if (existsSync(keyFile)) {
    console.error("!! Anahtar zaten var:", keyFile);
    console.error("   Silmek istersen manuel sil. (Yanlışlıkla üzerine yazmayı engeller.)");
    process.exit(1);
  }
  const { privateKey, publicKey } = generateKeyPairSync("ed25519");
  const pem = privateKey.export({ type: "pkcs8", format: "pem" });
  writeFileSync(keyFile, pem, { mode: 0o600 });
  // spki DER'in son 32 baytı ham public key
  const der = publicKey.export({ type: "spki", format: "der" });
  const pubHex = der.subarray(der.length - 32).toString("hex");
  console.log("✔ Özel anahtar oluşturuldu:", keyFile);
  console.log("\nBu satırı src-tauri/src/stats.rs içindeki NEWS_PUBKEY_HEX'e yaz:\n");
  console.log(`  pub const NEWS_PUBKEY_HEX: &str = "${pubHex}";`);
  console.log("\n!! news-private.key dosyasını KİMSEYLE paylaşma, repo'ya ekleme.");
  process.exit(0);
}

if (!existsSync(keyFile)) {
  console.error("Özel anahtar yok. Önce: node tools/news-sign.mjs keygen");
  process.exit(1);
}
const privateKey = createPrivateKey(readFileSync(keyFile, "utf8"));

if (cmd === "sign") {
  const target = resolve(process.argv[3] || resolve(dirname(fileURLToPath(import.meta.url)), "../news/feed.json"));
  if (!existsSync(target)) { console.error("Dosya yok:", target); process.exit(1); }
  const raw = readFileSync(target); // ham baytlar imzalanır (satır sonu dahil)
  // JSON geçerlilik kontrolü — bozuk feed'de imza işe yaramaz
  try { const f = JSON.parse(raw.toString("utf8"));
    if (!Array.isArray(f.announcements)) throw new Error("'announcements' dizisi yok");
  } catch (e) { console.error("feed.json geçersiz:", e.message); process.exit(1); }
  const sig = sign(null, raw, privateKey);
  const sigPath = target + ".sig";
  writeFileSync(sigPath, sig.toString("base64"));
  console.log("✔ İmzalandı:", sigPath);
  console.log("  Şimdi iki dosyayı da haber repo'na push'la: feed.json + feed.json.sig");
  process.exit(0);
}

if (cmd === "verify") {
  const target = resolve(process.argv[3] || resolve(dirname(fileURLToPath(import.meta.url)), "../news/feed.json"));
  const sigPath = target + ".sig";
  if (!existsSync(sigPath)) { console.error("İmza dosyası yok:", sigPath); process.exit(1); }
  const publicKey = createPublicKey(privateKey);
  const ok = verify(null, readFileSync(target), publicKey, Buffer.from(readFileSync(sigPath, "utf8").trim(), "base64"));
  console.log(ok ? "✔ İmza geçerli" : "✖ İmza GEÇERSİZ");
  process.exit(ok ? 0 : 1);
}

console.log("Kullanım: node tools/news-sign.mjs <keygen|sign|verify> [feed yolu]");
process.exit(1);
