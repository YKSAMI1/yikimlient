// bot/.env içindeki şifreli token değerlerini, projedeki .env ile BIRLEŞTIR.
// Not: değerler hiçbir zaman ekrana yazdırılmaz — yalnız kopyalanır.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const kaynak = process.argv[2];
if (!kaynak) {
  console.error("kullanım: node tools/bot-env-birlestir.mjs <kaynak-.env-yolu>");
  process.exit(1);
}

const oku = (p) =>
  fs.readFileSync(p, "utf8").split(/\r?\n/).reduce((m, s) => {
    const t = s.trim();
    if (!t || t.startsWith("#")) return m;
    const i = t.indexOf("=");
    if (i < 0) return m;
    const k = t.slice(0, i).trim();
    if (process.env[m ? "x" : "x"]) return m;
    m[k] = t.slice(i + 1).trim();
    return m;
  }, {});

const eski = oku(kaynak);
const hedefYol = path.join(kok, "bot/.env");
const yeni = oku(hedefYol);

let ta = 0;
for (const [k, v] of Object.entries(eski)) {
  if (!v) continue;
  if (yeni[k] && yeni[k] !== v) continue; // mevcut değer korunur
  yeni[k] = v;
  ta++;
}

const satirlar = [
  "# YIKIMLient bot — yerel sırlar (gitignore)",
  "# Token düz metin DEĞİL: TOKEN_ENCRYPTED + TOKEN_KEY ile ATA-KAPALI.",
  ...Object.entries(yeni).map(([k, v]) => `${k}=${v}`),
  "",
];
fs.writeFileSync(hedefYol, satirlar.join("\r\n"), "utf8");
console.log(`birlestirildi: ${ta} alan (degerler gizli) → ${hedefYol}`);
