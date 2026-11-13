// EŞLENEMEYEN KALANLAR İÇİN YARN KÖPRÜSÜ
//
// named-map.mjs (ProGuard + tiny) birkaç üyeyi eşleyemiyor (obf adları sınıf
// içinde çok tekrar ettiğinde ya da üye ProGuard dosyasında yoksa). Yarn
// eşlemesi (intermediary -> yarn) aradaki boşluğu doldurur:
//   intermediary -> yarn (bu betik) -> 26.1 jar'ında AYNI basit adlı sınıf
//   (com.mojang.blaze3d.platform.InputConstants gibi) ara -> resmî tam ad.
//
// KULLANIM:
//   node tools/named-map-yarn.mjs 1.21.11 <yarn-mappings.tiny> <mc-26.1-official.jar>
//
// ÇIKTI: yikim-mod/araclar/named-yarn-<V>.json (named-src.mjs bunu da okur)

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const KOK = process.cwd();
const V = process.argv[2] || "1.21.11";
const yarnTiny = process.argv[3];
const mc26Jar = process.argv[4];
if (!yarnTiny || !mc26Jar) {
  console.error("kullanim: node tools/named-map-yarn.mjs <surum> <yarn.tiny> <mc-26.1-official.jar>");
  process.exit(1);
}

// ---- 1) yarn: intermediary (obf) -> yarn ----
const satirlar = readFileSync(yarnTiny, "utf8").split(/\r?\n/);
const baslik = satirlar[0].split("\t");
// "tiny 2 0 intermediary named" → namespace kolonları 1. sütundan sonra başlar
const nsAdlari = baslik.slice(3);
const obfNsn = nsAdlari.indexOf("intermediary") >= 0 ? nsAdlari.indexOf("intermediary") : 0;
const yarnNsn = nsAdlari.length - 1;
// satır: "c  <ns0>  <ns1>…" → kolon indeksleri namespace + 1
const obfIdx = obfNsn + 1;
const yarnIdx = yarnNsn + 1;

const yarnSiniflar = new Map(); // obf(intermediary) tam ad -> yarn tam ad
const yarnMetotlar = new Map(); // "obfTam|obfUye" -> yarn uye
const yarnAlanlar = new Map();

let cur = null;
for (const s of satirlar) {
  const t = s.startsWith("\t") ? s.slice(1) : s;
  if (!t || t.startsWith("#")) continue;
  const p = t.split("\t");
  if (p[0] === "c") {
    cur = p[yarnIdx];
    yarnSiniflar.set(p[obfIdx], p[yarnIdx]);
  } else if ((p[0] === "f" || p[0] === "m") && cur) {
    const kayit = p[0] === "m" ? yarnMetotlar : yarnAlanlar;
    kayit.set(`${cur}|${p[obfIdx + 1]}`, p[yarnIdx + 1]);
  }
}
console.log(`[yarn] ${yarnSiniflar.size} sinif, ${yarnMetotlar.size} metot, ${yarnAlanlar.size} alan`);

// ---- 2) 26.1 jar: basit ad -> tam resmî ad ----
const tumGirdiler = execFileSync("jar", ["tf", mc26Jar], { encoding: "utf8", maxBuffer: 512 * 1024 * 1024 })
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter((s) => (s.startsWith("net/minecraft/") || s.startsWith("com/mojang/")) && s.endsWith(".class"));

const basitdenTam = new Map(); // "InputConstants" -> "com.mojang.blaze3d.platform.InputConstants"
const tamBasit = new Map(); // "com/mojang/blaze3d/platform/InputConstants" -> "InputConstants"
for (const g of tumGirdiler) {
  const yol = g.slice(0, -".class".length).replace(/\//g, ".").replace(/\$/g, ".");
  // basit ad: iç sınıflarda "Outer.Inner" biçiminde aranır (Java sözdizimi)
  const basit = yol.slice(yol.lastIndexOf(".") + 1);
  const basit2 = yol.split(".").slice(-2).join(".");
  for (const b of new Set([basit, basit2])) {
    if (!basitdenTam.has(b)) basitdenTam.set(b, []);
    basitdenTam.get(b).push(yol);
  }
  tamBasit.set(yol, basit);
}
console.log(`[26.1 jar] ${tumGirdiler.length} ust sinif`);

// ---- 3) köprü: yarn adı -> 26.1 jar'ındaki resmî ad ----
const classes = {};
let coklu = 0;
for (const [obf, yarn] of yarnSiniflar) {
  if (!yarn || typeof yarn !== "string") continue;
  const yarnNoktali = yarn.replace(/\//g, ".");
  const basit = yarnNoktali.slice(yarnNoktali.lastIndexOf(".") + 1);
  const adaylar = basitdenTam.get(basit);
  if (!adaylar || adaylar.length === 0) continue;
  if (adaylar.length > 1) {
    coklu++;
    continue; // belirsiz: elle bakılacak
  }
  const interAd = obf.replace(/\//g, ".");
  classes[interAd] = adaylar[0];
}
console.log(`[kopru] ${Object.keys(classes).length} sinif coyruklu (${coklu} belirsiz atlandi)`);

// Üyeler: intermediary kimliği -> yarn adı (yarn adları Mojang official ile
// büyük ölçüde aynı; kalanlar derleme hatasıyla görünür ve elle düzeltilir).
const methods = {};
const fields = {};
for (const [anahtar, yarnAd] of yarnMetotlar) {
  const [obfSahip, uye] = anahtar.split("|");
  if (uye && yarnAd && yarnAd !== uye) methods[uye] = yarnAd;
}
for (const [anahtar, yarnAd] of yarnAlanlar) {
  const [obfSahip, uye] = anahtar.split("|");
  if (uye && yarnAd && yarnAd !== uye) fields[uye] = yarnAd;
}
console.log(`[kopru] ${Object.keys(methods).length} metot, ${Object.keys(fields).length} alan (yarn adiyla)`);

// metot/alan için yarn adını doğrudan kullan (Mojang official adları çoğunlukla
// yarn ile aynı: getSkin, resize…, kalan olanlar derleme hatasıyla görülür)
const eslemeDosya = join(KOK, "yikim-mod", "araclar", `named-${V}.json`);
const esleme = existsSync(eslemeDosya) ? JSON.parse(readFileSync(eslemeDosya, "utf8")) : { classes: {}, methods: {}, fields: {} };
const ekMetot = {};
const ekAlan = {};
for (const [anahtar, yarnAd] of yarnMetotlar) {
  const [obfSahip, obfUye] = anahtar.split("|");
  const resmiSahip = classes[obfSahip.replace(/\//g, ".")] || esleme.classes[obfSahip.replace(/\//g, ".")];
  if (!resmiSahip) continue;
  ekMetot[obfUye] = yarnAd; // intermediary kimliği obf adı değil; obfUye = obf üye adı
}
writeFileSync(join(KOK, "yikim-mod", "araclar", `named-yarn-${V}.json`), JSON.stringify({ version: V, classes, miyane: methods, alanlar: fields }, null, 2), "utf8");
console.log(`yazildi: yikim-mod/araclar/named-yarn-${V}.json`);