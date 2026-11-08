// Kozmetik kataloğunu düzelt ve hesap bazlı kataloglara taşı.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const APP = process.env.YIKIM_APP_DIR || path.join(os.homedir(), "AppData/Roaming/.yikimlient");
const katalog = path.join(APP, "kozmetik");
const guvenli = (s) => s.replace(/[^A-Za-z0-9_-]/g, "_");
const ortakJson = path.join(katalog, "katalog.json");

// ---------- 1) kökte duran YIKIM PNG'lerini doğru alt klasöre taşı ----------
let n = 0;
for (const tur of ["pelerin", "kanat"]) {
  const onEk = `${tur}-${tur}-`;
  const koktekiler = fs.readdirSync(katalog).filter((f) => f.startsWith(onEk) && f.endsWith(".png"));
  for (const f of koktekiler) {
    const id = f.slice(onEk.length).replace(/\.png$/, "");
    const hedef = path.join(katalog, tur, `${id}.png`);
    fs.mkdirSync(path.dirname(hedef), { recursive: true });
    fs.renameSync(path.join(katalog, f), hedef);
    n++;
    console.log(`   tasindi: ${path.relative(katalog, hedef)}`);
  }
  // katalog.json'daki bu kaydın id + dosya alanını düzelt
  if (fs.existsSync(ortakJson)) {
    try {
      const j = JSON.parse(fs.readFileSync(ortakJson, "utf8"));
      let degisti = false;
      for (const k of j) {
        if (k.tur !== tur) continue;
        const klasor = path.join(katalog, tur, `${k.id}.png`);
        if (fs.existsSync(klasor)) { k.dosya = klasor; degisti = true; }
      }
      if (degisti) fs.writeFileSync(ortakJson, JSON.stringify(j, null, 2));
    } catch {}
  }
}
console.log(`1) ${n} kök dosya alt klasöre taşındı`);

// ---------- 2) hesap anahtarları ----------
let anahtarlar = [];
try {
  const j = JSON.parse(fs.readFileSync(path.join(APP, "guvenlik/hesaplar.json"), "utf8"));
  anahtarlar = (Array.isArray(j) ? j : j.hesaplar || []).map((h) => h.anahtar).filter(Boolean);
} catch {}
console.log(`2) ${anahtarlar.length} hesap`);

// ---------- 3) ortak katalog ----------
let ortakKayit = [];
if (fs.existsSync(ortakJson)) {
  try { ortakKayit = JSON.parse(fs.readFileSync(ortakJson, "utf8")); } catch {}
}
console.log(`3) ortak katalogda ${ortakKayit.length} kayit`);

// ---------- 4) her hesaba taşı ----------
let eklenen = 0;
for (const anahtar of anahtarlar) {
  const ad = guvenli(anahtar);
  const hedefJson = path.join(katalog, `katalog-${ad}.json`);
  let mevcut = [];
  if (fs.existsSync(hedefJson)) {
    try { mevcut = JSON.parse(fs.readFileSync(hedefJson, "utf8")); } catch {}
  }
  const varOlan = new Set(mevcut.map((k) => k.ad));
  for (const k of ortakKayit) {
    if (varOlan.has(k.ad)) continue;
    const orijinal = k.dosya ? path.normalize(k.dosya) : path.join(katalog, k.tur, `${k.id}.png`);
    if (!fs.existsSync(orijinal)) {
      console.log(`   ATLANDI (dosya yok): ${k.ad}`);
      continue;
    }
    const yeniId = `${k.tur}-${Date.now()}-${crypto.randomBytes(2).toString("hex")}`;
    const hedefPng = path.join(katalog, k.tur, `${yeniId}.png`);
    fs.mkdirSync(path.dirname(hedefPng), { recursive: true });
    fs.copyFileSync(orijinal, hedefPng);
    mevcut.push({ ...k, id: yeniId, tarih: Date.now(), dosya: hedefPng });
    varOlan.add(k.ad);
    eklenen++;
  }
  fs.writeFileSync(hedefJson, JSON.stringify(mevcut, null, 2));
  console.log(`   ${ad}: ${mevcut.length} kayit`);
}
console.log(`4) ${eklenen} kayit hesaplara tasindi`);
