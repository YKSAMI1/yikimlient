// YIKIM varsayılan pelerin/elitrasını HER HESABIN kataloğuna ekle (doğru yol ile).
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const APP = process.env.YIKIM_APP_DIR || path.join(os.homedir(), "AppData/Roaming/.yikimlient");
const katalog = path.join(APP, "kozmetik");
const guvenli = (s) => s.replace(/[^A-Za-z0-9_-]/g, "_");

let anahtarlar = [];
try {
  const j = JSON.parse(fs.readFileSync(path.join(APP, "guvenlik/hesaplar.json"), "utf8"));
  anahtarlar = (Array.isArray(j) ? j : j.hesaplar || []).map((h) => h.anahtar).filter(Boolean);
} catch {}

// varsayılan PNG'leri bul (alt klasörde, son eklenen)
const bul = (tur) => {
  const d = path.join(katalog, tur);
  if (!fs.existsSync(d)) return null;
  const png = fs.readdirSync(d).filter((f) => f.endsWith(".png")).sort();
  return png.length ? path.join(d, png[png.length - 1]) : null;
};

const V = [
  { tur: "pelerin", ad: "YIKIM Pelerin" },
  { tur: "kanat", ad: "YIKIM Elitra" },
];

let eklenen = 0;
for (const anahtar of anahtarlar) {
  const ad = guvenli(anahtar);
  const jsonYol = path.join(katalog, `katalog-${ad}.json`);
  let mevcut = [];
  if (fs.existsSync(jsonYol)) {
    try { mevcut = JSON.parse(fs.readFileSync(jsonYol, "utf8")); } catch {}
  }
  const varOlan = new Set(mevcut.map((k) => k.ad));
  for (const v of V) {
    if (varOlan.has(v.ad)) continue;
    const png = bul(v.tur);
    if (!png) { console.log(`   ${v.ad}: PNG yok`); continue; }
    const id = `${v.tur}-${Date.now()}-${crypto.randomBytes(2).toString("hex")}`;
    const hedef = path.join(katalog, v.tur, `${id}.png`);
    fs.mkdirSync(path.dirname(hedef), { recursive: true });
    fs.copyFileSync(png, hedef);
    mevcut.push({
      id, ad: v.ad, tur: v.tur, hd: false,
      genislik: 64, yukseklik: 32, tarih: Date.now(), dosya: hedef,
    });
    varOlan.add(v.ad);
    eklenen++;
  }
  fs.writeFileSync(jsonYol, JSON.stringify(mevcut, null, 2));
}
console.log(`${eklenen} YIKIM varsayılanı hesaplara eklendi`);
for (const anahtar of anahtarlar) {
  const jsonYol = path.join(katalog, `katalog-${guvenli(anahtar)}.json`);
  const j = JSON.parse(fs.readFileSync(jsonYol, "utf8"));
  console.log(`   ${guvenli(anahtar)}: ${j.map((k) => k.ad).join(", ")}`);
}
