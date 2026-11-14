// MC 26.x (Vulkan nesli) DERLEME ALTYAPISI HAZIRLAMA
//
// Minecraft 26.x obfuscation'ı kaldırdı: client jar doğrudan resmî (official)
// isimlerle geliyor, mapping dosyası YOK. Fabric de bu sürümlerde "official"
// mapping namespace'i kullanıyor. Bu yüzden 1.21.x'teki obf→intermediary
// remap adımı tamamen kalkıyor:
//
//   araclar/mc-<V>-official.jar   26.x client jar (zaten resmî adlı)
//   araclar/fabric-api-<V>/       o sürüm için Fabric API modülleri (Modrinth)
//   araclar/kutuphane-<V>/        LWJGL, joml, netty, authlib… (Mojang JSON)
//   araclar/fabric-loader-<V>.jar Fabric loader (Modrinth)
//
// KULLANIM:
//   node yikim-mod/araclar/surum-hazirla-26.mjs 26.1
//   node yikim-mod/araclar/surum-hazirla-26.mjs 26.2
//   node yikim-mod/araclar/surum-hazirla-26.mjs 26.3
//
// SONRA:
//   powershell -File yikim-mod/araclar/derle-26.ps1 -McVersion 26.1 -ModVersion 1.0.0-26.1

import { createWriteStream } from "node:fs";
import { mkdirSync, rmSync, existsSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const KOK = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const ARACLAR = join(KOK, "yikim-mod", "araclar");
const V = process.argv[2];
if (!V || !/^26\.\d+(\.\d+)?$/.test(V)) {
  console.error("kullanim: node yikim-mod/araclar/surum-hazirla-26.mjs 26.1");
  process.exit(1);
}

const adim = (s) => console.log("== " + s);
const tmp = join(KOK, "yayin-test", ".surum26");
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });

async function indir(url, hedef) {
  mkdirSync(dirname(hedef), { recursive: true });
  if (existsSync(hedef)) {
    console.log(`   mevcut: ${hedef}`);
    return;
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} -> HTTP ${r.status}`);
  await pipeline(r.body, createWriteStream(hedef));
}

// ---- 0) Mojang sürüm bilgisi ----
adim(`${V} surum bilgisi`);
const manifest = await (await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")).json();
const kayit = manifest.versions.find((x) => x.id === V);
if (!kayit) throw new Error(`${V} piston manifestte yok`);
const vjson = await (await fetch(kayit.url)).json();
if (!vjson.downloads.client) throw new Error(`${V} icin client indirmesi yok`);

// ---- 1) client jar (zaten resmî adlı) ----
const mcJar = join(ARACLAR, `mc-${V}-official.jar`);
await indir(vjson.downloads.client.url, mcJar);
console.log(`   $mcJar (${(readFileSync(mcJar).length / 1e6).toFixed(1)} MB)`);

// ---- 2) Mojang kütüphaneleri (javac için) ----
const libDizin = join(ARACLAR, "kutuphane", V);
mkdirSync(libDizin, { recursive: true });
let libSayisi = 0;
for (const lib of vjson.libraries || []) {
  // yalnız doğrudan bağımlılıklar (rules kritik değil: hepsi derleme sınıf yolunda)
  if (!lib.downloads?.artifact) continue;
  const ad = lib.downloads.artifact.path.split("/").pop();
  if (existsSync(join(libDizin, ad))) continue;
  await indir(lib.downloads.artifact.url, join(libDizin, ad));
  libSayisi++;
}
console.log(`   kutuphane: ${libSayisi} yeni jar`);

// ---- 3) Fabric loader ----
adim("Fabric loader");
const loaderMeta = await (await fetch("https://meta.fabricmc.net/v2/versions/loader/" + V)).json();
if (!loaderMeta?.length) throw new Error(`${V} icin Fabric loader yok`);
const loaderVer = loaderMeta[0].loader?.version || loaderMeta[0].version;
const loaderJar = join(ARACLAR, `fabric-loader-${loaderVer}.jar`);
if (!existsSync(loaderJar)) {
  // fabric loader maven'da "0.20.1+build.288" biçimindedir; meta "version" alanı
  // sürüm numarasını, "maven" alanı tam koordinatı verir.
  const mavenTam = loaderMeta[0].loader?.maven || `net/fabricmc/fabric-loader/${loaderVer}`;
  const tamYol = mavenTam.startsWith("net/fabricmc/fabric-loader/")
    ? `https://maven.fabricmc.net/${mavenTam}/fabric-loader-${loaderVer}.jar`
    : `https://maven.fabricmc.net/net/fabricmc/fabric-loader/${loaderVer}/fabric-loader-${loaderVer}.jar`;
  await indir(tamYol, loaderJar);
}
console.log(`   loader ${loaderVer}`);

// ---- 4) Fabric API (Modrinth) ----
adim("Fabric API");
const faDir = join(ARACLAR, "fabric-api", V);
mkdirSync(faDir, { recursive: true });
const faJson = await (await fetch(
  `https://api.modrinth.com/v2/project/fabric-api/version?game_versions=["${V}"]&loaders=["fabric"]`
)).json();
if (!faJson?.length) throw new Error(`${V} icin Fabric API yok (Modrinth)`);
const faKayit = faJson[0];
console.log(`   fabric-api ${faKayit.version_number} (${faKayit.files.length} modul)`);
for (const f of faKayit.files) {
  await indir(f.url, join(faDir, f.filename));
}
// Fabric API 26.x "jiarist": tüm API tek jar'da, modüller META-INF/jars altında
// iç içe jar olarak durur. Derleme sınıf yolunda doğrudan kullanılabilmeleri
// için bu iç jar'lar açılır.
const { execFileSync } = await import("node:child_process");
for (const f of faKayit.files) {
  const anaJar = join(faDir, f.filename);
  const icJarDir = join(faDir, "moduller");
  mkdirSync(icJarDir, { recursive: true });
  // jar tf ile iç jar listesi
  let liste = [];
  try {
    liste = execFileSync("jar", ["tf", anaJar], { encoding: "utf8" })
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s.startsWith("META-INF/jars/") && s.endsWith(".jar"))
      .map((s) => s.slice("META-INF/jars/".length));
  } catch {
    console.log("   (jar araci yok, ic jar'lar acilamadi)");
  }
  for (const ic of liste) {
    const hedef = join(icJarDir, ic);
    if (existsSync(hedef)) continue;
    execFileSync("jar", ["xf", anaJar, `META-INF/jars/${ic}`], { cwd: faDir });
    mkdirSync(icJarDir, { recursive: true });
    copyFileSync(join(faDir, "META-INF", "jars", ic), hedef);
    rmSync(join(faDir, "META-INF"), { recursive: true, force: true });
  }
  console.log(`   ${liste.length} modul acildi -> araclar/fabric-api/${V}/moduller`);
  // sınıf yolu moduller/ olsun (derle-26.ps1 zaten klasördeki tüm jar'ları alır)
  break;
}

// ---- 5) mixin + ASM (yerel kopyadan) + özet ----
for (const ad of ["mixin.jar", "asm-9.7.jar", "asm-tree-9.7.jar", "asm-commons-9.7.jar", "asm-util-9.7.jar"]) {
  const kaynak = join(ARACLAR, ad);
  if (existsSync(kaynak) && !existsSync(join(ARACLAR, "26-" + ad))) copyFileSync(kaynak, join(ARACLAR, "26-" + ad));
}

const ozet = {
  surum: V,
  mc: `mc-${V}-official.jar`,
  loader: `fabric-loader-${loaderVer}.jar`,
  fabricApi: `fabric-api/${V}`,
  kutuphane: `kutuphane/${V}`,
};
writeFileSync(join(ARACLAR, `hazir-${V}.json`), JSON.stringify(ozet, null, 2), "utf8");
console.log(`TAMAM: hazir-${V}.json yazildi`);