// .env yükleme — server.js'in İLK import'u olmalı.
// ESM importları sırayla değerlendirilir; bu modül bitmeden db.js/sifre.js
// gibi ortam değişkeni okuyan modüller çalışmaz.
// Sırlar depoya yazılmaz: yalnız makinedeki .env dosyasından okunur.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const yol = path.join(kok, ".env");

if (fs.existsSync(yol)) {
  try {
    // Node 20.12+ / 22+ / 24
    process.loadEnvFile(yol);
  } catch (e) {
    console.warn(`[env] .env okunamadı: ${e.message}`);
  }
}
