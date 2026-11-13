// INTERMEDIARY -> OFFICIAL (Mojang) eşleyici — MC 26.x taşıması için.
//
// NEDEN: Minecraft 26.x obfuscation'ı kaldırdı; client jar doğrudan resmî
// (official) isimlerle geliyor ve Fabric bu sürümlerde "official" mapping
// namespace'i kullanıyor. Modumuzun kaynağı 1.21.x için yazılmış ve
// `class_XXXXX` / `method_XXXXX` (intermediary) adlarını kullanıyor.
// Bu betik iki eşlemeyi birleştirir:
//   1) yikim-mod/araclar/mappings-<V>.tiny : obf <-> intermediary
//   2) Mojang client.txt (ProGuard)        : obf -> official
//
// Üye eşlemesinde İKİ yol birlikte kullanılır:
//   a) ad eşlemesi: aynı sınıfta obf adı + resmi imza bir kez görülüyorsa
//   b) SIRA eşlemesi: aynı sınıfın üyeleri hem tiny'de hem ProGuard'da
//      kaynak sırasındadır → indekse göre eşleşme (belirsizliği çözer)
//
// KULLANIM: node tools/named-map.mjs 1.21.11 <proguard-txt>
// ÇIKTI    : yikim-mod/araclar/named-<V>.json

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const KOK = process.cwd();
const V = process.argv[2] || "1.21.11";
const pgYol = process.argv[3];
if (!pgYol) throw new Error("kullanim: node tools/named-map.mjs <surum> <proguard-txt>");

const tinyPath = join(KOK, "yikim-mod", "araclar", `mappings-${V}.tiny`);
if (!existsSync(tinyPath)) throw new Error(`tiny yok: ${tinyPath}`);

// ---------- 1) tiny: obf <-> intermediary ----------
const tiny = readFileSync(tinyPath, "utf8").split(/\r?\n/);
const interToObfClass = new Map();
const uyeler = []; // {ownerInter, tip, obfAd, interAd}
let curInter = null;
for (const satir of tiny) {
  const t = satir.startsWith("\t") ? satir.slice(1) : satir;
  if (!t || t.startsWith("#")) continue;
  const p = t.split("\t");
  if (p[0] === "c") {
    curInter = p[2];
    interToObfClass.set(p[2], p[1]);
  } else if ((p[0] === "f" || p[0] === "m") && curInter) {
    // f <desc> <obfAd> <interAd> | m <desc> <obfAd> <interAd>
    uyeler.push({ ownerInter: curInter, tip: p[0], obfAd: p[2], interAd: p[3] });
  }
}
console.log(`[tiny] ${interToObfClass.size} sinif, ${uyeler.length} uye`);

// ---------- 2) ProGuard: obf -> official ----------
const pgSatirlar = readFileSync(pgYol, "utf8").split(/\r?\n/);
const obfToOfficialClass = new Map();
const pgUyeler = new Map(); // obfSahip -> [{tip, obfAd, officialAd}]
let pgSahip = null;
for (const satir of pgSatirlar) {
  if (!satir || satir.startsWith("#")) continue;
  const m = satir.match(/^(\S+) -> (\S+):$/);
  if (m) {
    pgSahip = m[2].replace(/\./g, "/");
    obfToOfficialClass.set(pgSahip, m[1].replace(/\./g, "/"));
    if (!pgUyeler.has(pgSahip)) pgUyeler.set(pgSahip, []);
    continue;
  }
  if (pgSahip === null) continue;
  const u = satir.match(/^\s*\d+:\d+:\s*(.+?)\s+->\s+(\S+)$/);
  if (!u) continue;
  const parcali = u[1].trim();
  const metotMu = parcali.includes("(");
  const ad = metotMu
    ? (parcali.match(/([A-Za-z_$][\w$]*)\s*\(/) || [])[1]
    : (parcali.split(/\s+/).pop() || "").replace(/;$/, "");
  if (!ad) continue;
  pgUyeler.get(pgSahip).push({ tip: metotMu ? "m" : "f", obfAd: u[2], officialAd: ad });
}
const pgUyeSayisi = [...pgUyeler.values()].reduce((t, l) => t + l.length, 0);
console.log(`[proguard] ${obfToOfficialClass.size} sinif, ${pgUyeSayisi} uye`);

// ---------- 3) birlestir ----------
const classes = {};
for (const [inter, obf] of interToObfClass) {
  const off = obfToOfficialClass.get(obf);
  if (off) classes[inter] = off;
}
const methods = {};
const fields = {};

// a) ad eşlemesi (sınıf içinde obf adı tekilse)
const adSayisi = new Map(); // obfSahip|obfAd -> kac kez gecti
for (const pg of pgUyeler.values())
  for (const u of pg) {
    const k = `${pg === null ? "" : ""}`; // yok
  }
const obfAdim = new Map(); // obfSahip|obfAd -> official (ilk gorulen)
for (const [sahip, liste] of pgUyeler) {
  const gorulen = new Map();
  for (const u of liste) gorulen.set(u.obfAd, (gorulen.get(u.obfAd) || 0) + 1);
  for (const u of liste) if (gorulen.get(u.obfAd) === 1) obfAdim.set(`${sahip}|${u.obfAd}`, u.officialAd);
}
// tiny'deki her uyenin sahip obf sinifini bul -> ad eşlemesi dene
for (const u of uyeler) {
  const obfSahip = interToObfClass.get(u.ownerInter);
  if (!obfSahip) continue;
  const off = obfAdim.get(`${obfSahip}|${u.obfAd}`);
  if (!off || off === u.interAd) continue;
  if (u.tip === "m") methods[u.interAd] = off; else fields[u.interAd] = off;
}
const adleBasarili = Object.keys(methods).length + Object.keys(fields).length;
console.log(`[ad] ${adleBasarili} uye tek adla eslendi`);

// b) SIRA eşlemesi — tiny'deki sırayı koru, aynı obf adlarını doğrula
const tinySirali = new Map(); // obfSahip -> [{tip, obfAd, interAd}]
for (const u of uyeler) {
  const obfSahip = interToObfClass.get(u.ownerInter);
  if (!obfSahip) continue;
  if (!tinySirali.has(obfSahip)) tinySirali.set(obfSahip, []);
  tinySirali.get(obfSahip).push(u);
}
let siraBasarili = 0;
for (const [sahip, tliste] of tinySirali) {
  const pliste = pgUyeler.get(sahip);
  if (!pliste) continue;
  const adet = Math.min(tliste.length, pliste.length);
  for (let i = 0; i < adet; i++) {
    const t = tliste[i];
    const p = pliste[i];
    if (t.tip !== p.tip || t.obfAd !== p.obfAd) break; // sıra bozuldu
    if (p.officialAd === t.interAd) continue; // zaten aynı
    if (p.tip === "m") methods[t.interAd] = p.officialAd; else fields[t.interAd] = p.officialAd;
    siraBasarili++;
  }
}
console.log(`[sira] ${siraBasarili} uye sirayla eslendi`);

const cikti = { version: V, classes, miyane: methods, alanlar: fields };
writeFileSync(join(KOK, "yikim-mod", "araclar", `named-${V}.json`), JSON.stringify(cikti), "utf8");
console.log(
  `yazildi: yikim-mod/araclar/named-${V}.json (sinif: ${Object.keys(classes).length}, ` +
  `metot: ${Object.keys(methods).length}, alan: ${Object.keys(fields).length})`
);