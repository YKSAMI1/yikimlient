// mods/manifest.json içindeki jar dosya adlarını yeni sürüme taşır.
// KULLANIM: node tools/manifest-jar-guncelle.mjs <eskiMod> <yeniMod> <eskiMc> <yeniMc>
//   node tools/manifest-jar-guncelle.mjs 1.33.12 1.33.14 1.0.2 1.0.4
import { readFileSync, writeFileSync } from "node:fs";

const [eskiMod, yeniMod, eskiMc, yeniMc] = process.argv.slice(2);
if (!eskiMod || !yeniMod || !eskiMc || !yeniMc) {
  console.error("kullanim: node manifest-jar-guncelle.mjs <eskiMod> <yeniMod> <eskiMc> <yeniMc>");
  process.exit(1);
}
const yol = "src-tauri/resources/mods/manifest.json";
let t = readFileSync(yol, "utf8");
t = t.split(`yikimlient-${eskiMod}+`).join(`yikimlient-${yeniMod}+`);
t = t.split(`yikimlient-${eskiMc}-`).join(`yikimlient-${yeniMc}-`);
t = t.replace(
  /"modVersion": "[^"]*"/,
  `"modVersion": "${yeniMod} (1.21.9-1.21.11) / ${yeniMc.replace(/^(\d+\.\d+\.\d+)$/, "$1")} (26.1-26.3) / 1.3.1 (1.21.1-1.21.8)"`
);
writeFileSync(yol, t, "utf8");
console.log("tamam:", yol);