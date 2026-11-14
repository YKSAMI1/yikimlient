// Sürüm tırmanışı: package.json / tauri.conf.json / site/main.js içindeki
// sürüm dizelerini tek seferde günceller (kodlama ve satır sonu korunur).
// KULLANIM: node tools/surum-tirmanis.mjs 0.9.3
import { readFileSync, writeFileSync } from "node:fs";

const hedef = process.argv[2];
if (!/^\d+\.\d+\.\d+$/.test(hedef)) {
  console.error("kullanim: node tools/surum-tirmanis.mjs <1.2.3>");
  process.exit(1);
}
const mevcut = process.argv[3];
if (!mevcut) {
  console.error("kullanim: node tools/surum-tirmanis.mjs <yeni> <eski>");
  process.exit(1);
}

const dosyalar = [
  ["package.json", `"version": "${mevcut}"`, `"version": "${hedef}"`],
  ["src-tauri/tauri.conf.json", `"version": "${mevcut}"`, `"version": "${hedef}"`],
  ["site/main.js", `YEDEK_SURUM = "${mevcut}"`, `YEDEK_SURUM = "${hedef}"`],
];

for (const [p, from, to] of dosyalar) {
  const t = readFileSync(p, "utf8");
  if (!t.includes(from)) {
    console.error(`bulunamadi: ${from} (${p})`);
    process.exit(1);
  }
  writeFileSync(p, t.split(from).join(to), "utf8");
  console.log(`${p}: ${from} -> ${to}`);
}
console.log(`tamam: ${hedef}`);