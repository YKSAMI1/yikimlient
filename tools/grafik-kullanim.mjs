// GuiGraphicsExtractor alıcıları üzerinde çağrılan metotları sayar.
// Amaç: 1.21.11 resmî adı ile 26.1 resmî adı arasındaki farkı ÖLÇMEK.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const HEDEF = join(process.cwd(), "yikim-mod", "src", "official");
const TIP = /GuiGraphicsExtractor/;

function javaDosyalar(d) {
  const cikti = [];
  const yuru = (k) => {
    for (const e of readdirSync(k, { withFileTypes: true })) {
      const y = join(k, e.name);
      if (e.isDirectory()) yuru(y);
      else if (e.name.endsWith(".java")) cikti.push(y);
    }
  };
  statSync(d).isDirectory() && yuru(d);
  return cikti;
}

const sayac = new Map();
const dosyaSayac = new Map();
for (const dosya of javaDosyalar(HEDEF)) {
  const metin = readFileSync(dosya, "utf8");
  // GuiGraphicsExtractor tipindeki tanımlayıcılar (parametre, alan, yerel değişken)
  const adlar = new Set();
  for (const m of metin.matchAll(/(?:GuiGraphicsExtractor\s+)([a-zA-Z_$][\w$]*)\s*[,)=;]/g)) adlar.add(m[1]);
  // "var g = ..." gibi durumlar için: metot parametresi zaten yukarıda yakalanır.
  if (!adlar.size) continue;
  for (const ad of adlar) {
    const re = new RegExp(`\\b${ad.replace(/\$/g, "\\$")}\\s*\\.\\s*([a-zA-Z_$][\\w$]*)\\s*\\(`, "g");
    for (const m of metin.matchAll(re)) {
      const ad2 = m[1];
      sayac.set(ad2, (sayac.get(ad2) ?? 0) + 1);
      if (!dosyaSayac.has(ad2)) dosyaSayac.set(ad2, new Set());
      dosyaSayac.get(ad2).add(join(dosya).split("\\").pop());
    }
  }
}

for (const [ad, n] of [...sayac.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`${String(n).padStart(4)}  ${ad}   [${[...dosyaSayac.get(ad)].slice(0, 4).join(", ")}]`);
}
