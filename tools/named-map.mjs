// İNTERMEDIARY -> RESMÎ (Mojang) EŞLEYİCİ — MC 26.x taşıması
//
// Minecraft 26.x obfuscation'ı kaldırdı; client jar doğrudan resmî adlarla
// geliyor ve Fabric "official" mapping namespace'ini kullanıyor. Modumuzun
// kaynağı ise intermediary (`class_XXXXX` / `method_XXXXX` / `field_XXXXX`)
// yazılmış durumda. Bu betik kesin (descriptor tabanlı) eşlemeyi üretir:
//
//   1) tiny (1.21.11)  : obf ad + descriptor  <->  intermediary
//   2) client.txt      : obf ad + imza        <->  resmî (Mojang) ad
//
// ZİNCİR: intermediary -> obf -> resmî.  İki adım da (sahip sınıf, obf üye adı)
// ile eşleşir; aynı obf adı birden çok üyede geçiyorsa (overload) descriptor /
// parametre sayısı ile ayrıştırılır. SIRA TAHMİNİ YOK — eski sürümde alanlar
// metot adlarıyla doluyordu (`player` -> `getFps`), bu yüzden yeniden yazıldı.
//
// KULLANIM: node tools/named-map.mjs 1.21.11 <client.txt>
// ÇIKTI    : yikim-mod/araclar/named-<V>.json

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const KOK = process.cwd();
const V = process.argv[2] || "1.21.11";
const pgYol = process.argv[3];
if (!pgYol) throw new Error("kullanim: node tools/named-map.mjs <surum> <client.txt>");

const tinyPath = join(KOK, "yikim-mod", "araclar", `mappings-${V}.tiny`);
if (!existsSync(tinyPath)) throw new Error(`tiny yok: ${tinyPath}`);

// ---------------------------------------------------------------------------
// 1) tiny: obf <-> intermediary (descriptor dahil)
// ---------------------------------------------------------------------------
const interToObf = new Map(); // "net/minecraft/class_310" -> "a"
const uyeler = []; // { obfSahip, tip, obfAd, interAd, desc }
let curObf = null;
let curInter = null;
for (const satir of readFileSync(tinyPath, "utf8").split(/\r?\n/)) {
  const t = satir.startsWith("\t") ? satir.slice(1) : satir;
  if (!t || t.startsWith("#")) continue;
  const p = t.split("\t");
  if (p[0] === "c") {
    // c <obf> <intermediary> <named>
    curObf = p[1];
    curInter = p[2];
    interToObf.set(curInter, curObf);
  } else if ((p[0] === "f" || p[0] === "m") && curObf) {
    // f|m <desc> <obfAd> <interAd> <named>
    uyeler.push({ obfSahip: curObf, tip: p[0], desc: p[1], obfAd: p[2], interAd: p[3] });
  }
}
console.log(`[tiny] ${interToObf.size} sinif, ${uyeler.length} uye`);

// ---------------------------------------------------------------------------
// 2) client.txt: obf <-> resmî (Mojang), metot imzalariyla
// ---------------------------------------------------------------------------
const obfToOff = new Map(); // obf sinif -> resmî sinif (noktali)
const pg = new Map(); // "obfSahip|obfAd" -> [{tip, offAd, args}]
let sahip = null;

// --- imza normalleştirme -----------------------------------------------------
// Amaç: JVM descriptor (intermediary) ile client.txt imzası (resmî adlar)
// aynı "kanonik" biçime gelsin. Örnek:
//   desc  (Lnet/minecraft/class_310;I)V  ->  (net.minecraft.client.Minecraft,int)void
//   pg    void (net.minecraft.client.Minecraft, int)  ->  (net.minecraft.client.Minecraft,int)void

const ILKEL = { V: "void", Z: "boolean", B: "byte", C: "char", S: "short", I: "int", J: "long", F: "float", D: "double" };

let sinifResmi = (x) => x; // aşağıda atanır (intermediary -> resmî, noktalı)

function descTipleri(desc) {
  let i = 0;
  function birTip() {
    let dizi = 0;
    while (desc[i] === "[") { dizi++; i++; }
    const c = desc[i];
    let ad;
    if (c === "L") {
      const bitis = desc.indexOf(";", i);
      const ic = desc.slice(i + 1, bitis).replace(/\$/g, ".");
      ad = sinifResmi(ic);
      i = bitis + 1;
    } else {
      ad = ILKEL[c] ?? c;
      i++;
    }
    return ad + "[]".repeat(dizi);
  }
  const args = [];
  let donus = "void";
  if (desc[i] === "(") {
    i++;
    while (desc[i] !== ")") args.push(birTip());
    i++;
    donus = birTip();
  } else {
    // alan descriptor'u: "La;" / "I" / "[La;"
    i = 0;
    const t = birTip();
    return { args: [], donus: t };
  }
  return { args, donus };
}

/** client.txt tip listesini kanonik biçime çevirir. */
function pgTipleri(paramStr, donusStr) {
  const temiz = (s) => {
    let x = s.trim();
    // iç içe generic'leri tekrar tekrar sil
    let onceki;
    do {
      onceki = x;
      x = x.replace(/<[^<>]*>/g, "");
    } while (x !== onceki);
    return x.replace(/\$/g, ".").replace(/\s+/g, "");
  };
  const args = paramStr.trim()
    ? paramStr.split(",").map(temiz).filter(Boolean)
    : [];
  return { args, donus: temiz(donusStr || "void") };
}

for (const satir of readFileSync(pgYol, "utf8").split(/\r?\n/)) {
  if (!satir || satir.startsWith("#")) continue;

  // sinif satiri: "net.minecraft.client.Minecraft -> gfj:"
  const sinif = satir.match(/^(\S+)\s+->\s+(\S+):$/);
  if (sinif) {
    sahip = sinif[2];
    obfToOff.set(sahip, sinif[1]);
    continue;
  }
  if (!sahip) continue;

  // metot satiri: "1:1:void a(java.lang.String) -> b"
  const metot = satir.match(/^\s*\d+:\d+:(.+?)\s+([A-Za-z_$<][\w$.$<>\[\]]*)\s*\(([^)]*)\)\s+->\s+(\S+)\s*$/);
  if (metot) {
    const anahtar = `${sahip}|${metot[4]}`;
    if (!pg.has(anahtar)) pg.set(anahtar, []);
    pg.get(anahtar).push({ tip: "m", offAd: metot[2], imza: pgTipleri(metot[3], metot[1]) });
    continue;
  }

  // alan satiri: "int a -> b"   (satir numarasi YOK)
  const alan = satir.match(/^\s*([\w$.$<>\[\]]+)\s+([A-Za-z_$][\w$]*)\s+->\s+(\S+)\s*$/);
  if (alan) {
    const lig = alan[1].replace(/<[^<>]*>/g, "").replace(/\$/g, ".");
    // ProGuard kacisli ic sinif adlari: a.b.C$D -> a.b.C.D
    const anahtar = `${sahip}|${alan[3]}`;
    if (!pg.has(anahtar)) pg.set(anahtar, []);
    const offAd = alan[2];
    pg.get(anahtar).push({ tip: "f", offAd, imza: { args: [], donus: lig } });
  }
}
const pgUyeSayisi = [...pg.values()].reduce((t, l) => t + l.length, 0);
console.log(`[client.txt] ${obfToOff.size} sinif, ${pgUyeSayisi} uye`);

// ---------------------------------------------------------------------------
// 3) birleştir: her intermediary üye için TEK doğru resmî ad
// ---------------------------------------------------------------------------
const classes = {};
for (const [inter, obf] of interToObf) {
  const off = obfToOff.get(obf);
  if (off) classes[inter] = off.replace(/\./g, "/");
}

// descriptor çözümü için: intermediary sınıf adı -> resmî (noktalı) ad
sinifResmi = (x) => (classes[x] ? classes[x].replace(/\//g, ".") : x.replace(/\//g, "."));

const methods = {};
const fields = {};
const belirsiz = { m: 0, f: 0 };
const eslesmeyen = { m: 0, f: 0 };
const anahtarImza = (i) => `${i.args.join(",")}->${i.donus}`;

for (const u of uyeler) {
  const adaylar = pg.get(`${u.obfSahip}|${u.obfAd}`);
  if (!adaylar) { eslesmeyen[u.tip]++; continue; }
  const ayniTip = adaylar.filter((a) => a.tip === u.tip);
  if (!ayniTip.length) { eslesmeyen[u.tip]++; continue; }

  // TAM İMZA eşleşmesi (descriptor -> resmî adlar; client.txt -> resmî adlar)
  const bizim = descTipleri(u.desc);
  const hedef = anahtarImza(bizim);
  let secili = ayniTip.find((a) => anahtarImza(a.imza) === hedef) ?? null;

  if (!secili) {
    // imza tutmadıysa: aynı parametre sayısı + dönüş tipi
    const yedek = ayniTip.filter(
      (a) => a.imza.args.length === bizim.args.length && a.imza.donus === bizim.donus
    );
    if (yedek.length === 1) secili = yedek[0];
    else if (yedek.length > 1) { belirsiz[u.tip]++; secili = yedek[0]; }
    else {
      const sadeceSayi = ayniTip.filter((a) => a.imza.args.length === bizim.args.length);
      if (sadeceSayi.length === 1) secili = sadeceSayi[0];
      else { belirsiz[u.tip]++; continue; }
    }
  }

  if (u.tip === "m") methods[u.interAd] = secili.offAd;
  else fields[u.interAd] = secili.offAd;
}

console.log(
  `[eslesme] metot ${Object.keys(methods).length}, alan ${Object.keys(fields).length}` +
  ` | belirsiz m/f ${belirsiz.m}/${belirsiz.f}` +
  ` | eslesmeyen m/f ${eslesmeyen.m}/${eslesmeyen.f}`
);

const cikti = { version: V, classes, miyane: methods, alanlar: fields };
writeFileSync(join(KOK, "yikim-mod", "araclar", `named-${V}.json`), JSON.stringify(cikti), "utf8");
console.log(`yazildi: yikim-mod/araclar/named-${V}.json`);
