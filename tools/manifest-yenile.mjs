// GOMULU MOD MANIFESTINI YENILE - jar dosyalarindan okur.
//
// KULLANIM: node tools/manifest-yenile.mjs [modsDizini]
//   (varsayilan: src-tauri/resources/mods)
//
// NE YAPAR: manifest.json'daki her mcVersion icin o surume uyan EN YENI jar'i
// bulur ve `file` alanini ona cevirir. Elle "1.0.5 -> 1.0.6" yazma derdi biter:
// jar'lari klasore at, bu script manifest'i kendisi dogru hale getirir.
//
// Iki ad bicimi desteklenir:
//   1.21.x : yikimlient-1.33.16+1.21.11.jar   -> mod surumu: 1.33.16
//   26.x   : yikimlient-1.0.6-26.3+26.3.jar   -> mod surumu: 1.0.6
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2] ?? "src-tauri/resources/mods";
const manifestYolu = join(dir, "manifest.json");
if (!existsSync(manifestYolu)) {
  console.error("manifest yok:", manifestYolu);
  process.exit(1);
}

const jarlar = readdirSync(dir).filter((f) => f.startsWith("yikimlient-") && f.endsWith(".jar"));

/** "yikimlient-1.0.6-26.3+26.3.jar" -> { mod: "1.0.6", mc: "26.3" } */
function ayir(ad) {
  const govde = ad.slice("yikimlient-".length).replace(/\.jar$/, "");
  const [sol, mc] = govde.split("+");
  if (!sol || !mc) return null;
  // 26.x: "1.0.6-26.3" -> mod surumu tireden once
  const mod = sol.split("-")[0];
  if (!/^\d+(\.\d+){1,2}$/.test(mod)) return null;
  return { mod, mc };
}

/** "1.0.6" -> [1,0,6] (karsilastirma icin) */
function puan(mod) {
  const p = mod.split(".").map((x) => Number(x));
  while (p.length < 3) p.push(0);
  return p;
}

function dahaYeni(a, b) {
  const pa = puan(a);
  const pb = puan(b);
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] > pb[i];
  }
  return false;
}

/** mcVersion icin en yeni jar (birebir eslesme sart) */
function bul(mc) {
  let enIyi = null;
  for (const ad of jarlar) {
    const p = ayir(ad);
    if (!p || p.mc !== mc) continue;
    if (!enIyi || dahaYeni(p.mod, enIyi.mod)) enIyi = { ad, mod: p.mod };
  }
  return enIyi;
}

const m = JSON.parse(readFileSync(manifestYolu, "utf8").replace(/^\uFEFF/, ""));
let degisen = 0;
const eksik = [];

for (const e of m.mods) {
  const bulunan = bul(e.mcVersion);
  if (!bulunan) {
    eksik.push(e.mcVersion);
    continue;
  }
  if (e.file !== bulunan.ad) {
    console.log(`  ${e.mcVersion}: ${e.file} -> ${bulunan.ad}`);
    e.file = bulunan.ad;
    degisen++;
  }
}

// Ozet satiri: aile basina en yeni mod surumu
const aileler = [
  { ad: "1.21.9-1.21.11", test: (mc) => ["1.21.9", "1.21.10", "1.21.11"].includes(mc) },
  { ad: "26.1-26.3", test: (mc) => mc.startsWith("26.") },
  { ad: "1.21.1-1.21.8", test: (mc) => /^1\.21\.[1-8]$/.test(mc) },
];
const ozet = aileler
  .map(({ ad, test }) => {
    let enIyi = null;
    for (const e of m.mods) {
      if (!test(e.mcVersion)) continue;
      const p = ayir(e.file);
      if (p && (!enIyi || dahaYeni(p.mod, enIyi))) enIyi = p.mod;
    }
    return enIyi ? `${enIyi} (${ad})` : null;
  })
  .filter(Boolean)
  .join(" / ");

m.generatedAt = new Date().toISOString().replace(/\.\d+Z$/, "Z");
if (ozet) m.modVersion = ozet;

writeFileSync(manifestYolu, JSON.stringify(m, null, 2) + "\n", "utf8");
console.log(`tamam: ${manifestYolu} (${degisen} girdi guncellendi)`);
if (ozet) console.log("  ozet:", ozet);
if (eksik.length) {
  console.warn("  UYARI - jar bulunamadi:", eksik.join(", "));
  process.exitCode = 2;
}
