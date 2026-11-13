// INTERMEDIARY -> OFFICIAL KAYNAK ÇEVİRİCİ (MC 26.x taşıması)
//
// Modun tek kaynak ağacı (yikim-mod/src/main/java) intermediary adlarla
// (class_XXXXX / method_XXXXX / field_XXXXX) yazılmıştır. Minecraft 26.x
// obfuscation'ı kaldırdı ve Fabric bu sürümlerde "official" mapping kullanıyor;
// o yüzden 26.1 / 26.2 / 26.3 derlemeleri için kaynağın resmî isimli bir kopyası
// gerekir.
//
// Bu betik o kopyayı ÜRETİR (elle kopyalamak yok — tek kaynak ağaç korunur):
//   girdi : yikim-mod/src/main/java  (+ src/version/<adapter>/java)
//   çıktı : yikim-mod/src/official/<nesil>/java
//   eşleme : yikim-mod/araclar/named-1.21.11.json (tools/named-map.mjs üretir)
//
// KULLANIM:
//   node tools/named-src.mjs                 # modern (1.21.9-1.21.11) kopyası
//   node tools/named-src.mjs --liste         # hangi dosyaların çevrileceği
//
// NEDEN 1.21.11 eşlemesi: aynı "intermediary imza" ailes (1.21.9-1.21.11) 26.x
// ile aynı isim uzayını paylaşmaz ancak resmî adlar (Identifier, PlayerInfo…)
// 26.x'te de geçerlidir — 26.x aynı resmî isimlerle derlenir.

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const KOK = process.cwd();
const MOD = join(KOK, "yikim-mod");
const ESLEME_YOL = join(MOD, "araclar", "named-1.21.11.json");
const CIKTI_KOK = join(MOD, "src", "official");

const esleme = JSON.parse(readFileSync(ESLEME_YOL, "utf8"));
// Yarn köprüsü (eşlenemeyen kalanlar için ikinci kaynak) — varsa birleştirilir.
let yarnKopru = { classes: {}, miyane: {}, alanlar: {} };
const yarnYol = join(MOD, "araclar", "named-yarn-1.21.11.json");
if (existsSync(yarnYol)) yarnKopru = JSON.parse(readFileSync(yarnYol, "utf8"));

// Sınıflar: ProGuard eşlemesi önce gelir (doğru paket), yarn köprüsü boşları doldurur.
const eslesmeSiniflar = { ...yarnKopru.classes, ...esleme.classes };
const eslesmeMetotlar = { ...(yarnKopru.miyane || {}), ...(esleme.methods || esleme.miyane || {}) };
const eslesmeAlanlar = { ...(yarnKopru.alanlar || {}), ...(esleme.fields || esleme.alanlar || {}) };
const siniflar = eslesmeSiniflar;
const metotlar = eslesmeMetotlar;
const alanlar = eslesmeAlanlar;

/** Kısa ad (class_2960) -> tam resmî ad (net.minecraft.resources.Identifier). */
const kisaSinif = {};
for (const [ara, hedef] of Object.entries(siniflar)) {
  const kisa = ara.split("/").pop();
  kisaSinif[kisa] = hedef.replace(/\//g, ".");
}
// Bazı intermediary sınıflar "net.minecraft" dışındadır (com.mojang…): onlar da
// kısa adlarıyla eşlenir, çünkü kaynak "com.mojang.blaze3d.platform.class_XXXX"
// biçiminde yazar.
for (const [ara, hedef] of Object.entries(siniflar)) {
  const paketler = ["com.mojang.blaze3d", "com.mojang.authlib", "com.mojang.realmsclient"];
  for (const p of paketler) {
    if (ara.startsWith(p + "/")) kisaSinif[ara.slice(p.length + 1)] = hedef.replace(/\//g, ".");
  }
}

// Çevrilecek kaynak kökleri: ortak ağaç + seçilen adaptör
const ADAPTER = process.argv.includes("--adapter") ? process.argv[process.argv.indexOf("--adapter") + 1] : "modern";
const kokler = [
  { ad: join(MOD, "src", "main", "java"), hedef: CIKTI_KOK },
];
const adapterKok = join(MOD, "src", "version", ADAPTER, "java");
if (existsSync(adapterKok)) kokler.push({ ad: adapterKok, hedef: CIKTI_KOK });

const bilinmeyen = { sinif: new Set(), metot: new Set(), alan: new Set() };
const yazilanlar = [];

function javaDosyalar(kok) {
  const cikti = [];
  const yuru = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const y = join(d, e.name);
      if (e.isDirectory()) yuru(y);
      else if (e.name.endsWith(".java")) cikti.push(y);
    }
  };
  if (existsSync(kok)) yuru(kok);
  return cikti;
}

/** Bir .java metnini resmî adlara çevir. */
function cevir(metin, dosya) {
  let out = metin;

  // 1) sınıflar — önce NİTELİKLİ kullanımlar (paket + … + class_NNN)
  //    Resmî ad aynı paketteyse yalnız sınıf adı, başka paketteyse tam ad
  //    yazılır. İç sınıflar ($) Java sözdizimine (Outer.Inner) çevrilir.
  out = out.replace(
    /\b((?:net\.minecraft|com\.mojang\.blaze3d|com\.mojang\.authlib|com\.mojang\.realmsclient)(?:\.[A-Za-z_][\w]*)*)\.(class_\d+)\b/g,
    (tum, onek, kisa) => {
      const hedef = kisaSinif[kisa];
      if (!hedef) {
        bilinmeyen.sinif.add(kisa);
        return tum;
      }
      const sonP = onek.lastIndexOf(".");
      const onekPaket = sonP < 0 ? "" : onek.slice(0, sonP);
      const sonAd = hedef.slice(hedef.lastIndexOf(".") + 1).replace(/\$/g, ".");
      if (hedef.slice(0, hedef.lastIndexOf(".")) === onekPaket) return sonAd;
      // farklı paket: tam ad (iç sınıflar noktalı)
      return hedef.replace(/\$/g, ".");
    }
  );
  // 2) kısa kullanımlar (import + aynı paket)
  out = out.replace(/\b(class_\d+)\b/g, (tum, kisa) => {
    const hedef = kisaSinif[kisa];
    if (!hedef) {
      bilinmeyen.sinif.add(kisa);
      return kisa;
    }
    return hedef.replace(/\$/g, ".");
  });

  // 3) metotlar ve alanlar — dizgi sabitleri DAHİL (mixin hedefleri)
  out = out.replace(/\b(method_\d+)\b/g, (tum, ad) => {
    const hedef = metotlar[ad];
    if (!hedef) {
      bilinmeyen.metot.add(ad);
      return ad;
    }
    return hedef;
  });
  out = out.replace(/\b(field_\d+)\b/g, (tum, ad) => {
    const hedef = alanlar[ad];
    if (!hedef) {
      bilinmeyen.alan.add(ad);
      return ad;
    }
    return hedef;
  });

  return out;
}

rmSync(CIKTI_KOK, { recursive: true, force: true });

for (const { ad, hedef } of kokler) {
  for (const dosya of javaDosyalar(ad)) {
    const metin = readFileSync(dosya, "utf8");
    const yeni = cevir(metin, dosya);
    const hedefYol = join(hedef, relative(ad, dosya));
    mkdirSync(dirname(hedefYol), { recursive: true });
    writeFileSync(hedefYol, yeni, "utf8");
    yazilanlar.push(relative(MOD, hedefYol));
  }
}

// kaynaklar (resources) de aynen kopyalanır — 26.x'te de aynı
const resKaynak = join(MOD, "src", "main", "resources");
const resHedef = join(CIKTI_KOK, "..", "resources");
if (existsSync(resKaynak)) {
  mkdirSync(resHedef, { recursive: true });
  const yuru = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const y = join(d, e.name);
      const h = join(resHedef, relative(resKaynak, y));
      if (e.isDirectory()) {
        mkdirSync(h, { recursive: true });
        yuru(y);
      } else {
        mkdirSync(dirname(h), { recursive: true });
        writeFileSync(h, readFileSync(y));
      }
    }
  };
  yuru(resKaynak);
}

console.log(`çevrilen dosya: ${yazilanlar.length}`);
console.log(`  -> ${relative(process.cwd(), CIKTI_KOK)}`);
const bilinmeyenToplam =
  bilinmeyen.sinif.size + bilinmeyen.metot.size + bilinmeyen.alan.size;
console.log(`eşlenemeyen: ${bilinmeyenToplam}`);
if (bilinmeyenToplam > 0) {
  const liste = [
    ...[...bilinmeyen.sinif].map((s) => `  sinif ${s}`),
    ...[...bilinmeyen.metot].map((s) => `  metot ${s}`),
    ...[...bilinmeyen.alan].map((s) => `  alan ${s}`),
  ];
  console.log(liste.slice(0, 40).join("\n"));
  if (liste.length > 40) console.log(`  … ve ${liste.length - 40} tane daha`);
}