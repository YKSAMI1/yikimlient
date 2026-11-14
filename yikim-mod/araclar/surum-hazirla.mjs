// MOD DERLEME ALTYAPISI — bir Minecraft sürümü için derleme dosyalarını hazırlar.
//
//   node yikim-mod/araclar/surum-hazirla.mjs 1.21.10
//
// NEDEN: modun kaynağı tek bir ağaçtır ama HER 1.21.x sürümü FARKLI intermediary
// imzalarıyla derlenmeli (class_2960 gibi isimler sürüme göre değişir). Eskiden
// yalnızca 1.21.11 hazırdı; bu betik hedef sürüm için şunları indirir/üretir:
//
//   araclar/mc-<V>-intermediary.jar   → Mojang obf jar'ı, intermediary'e remap edilmiş
//   araclar/intermediary-<V>-v2.jar    → Fabric intermediary mappings.tiny kaynağı
//   araclar/fabric-api-<V>/            → o sürüme uyan fabric-api modülleri
//   araclar/mc-kutuphane-<V>/          → Mojang version JSON'daki kütüphaneler (javac için)
//
// SONRA: powershell -File yikim-mod/araclar/derle.ps1 -McVersion <V> -ModVersion <S>

import { createWriteStream } from "node:fs";
import { mkdirSync, rmSync, existsSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { pipeline } from "node:stream/promises";

const KOK = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const ARACLAR = join(KOK, "yikim-mod", "araclar");
const MC_HEdef = process.argv[2];
if (!MC_HEdef || !/^1\.21\.\d+$/.test(MC_HEdef)) {
  console.error("kullanim: node yikim-mod/araclar/surum-hazirla.mjs 1.21.10");
  process.exit(1);
}
const V = MC_HEdef;

const adim = (s) => console.log("== " + s);
const tmp = join(KOK, "yayin-test", ".surum-indirme");
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });

async function indir(url, hedef) {
  mkdirSync(dirname(hedef), { recursive: true });
  if (existsSync(hedef)) {
    console.log(`   mevcut: ${hedef}`);
    return;
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} → HTTP ${r.status}`);
  await pipeline(r.body, createWriteStream(hedef));
  console.log(`   indirildi: ${hedef.replace(KOK + "\\", "")}`);
}

// ---------- 1) Mojang sürüm bilgisi + obf client jar ----------
adim(`Mojang surum bilgisi: ${V}`);
const manifest = await (await fetch("https://launchermeta.mojang.com/mc/game/version_manifest.json")).json();
const surum = manifest.versions.find((x) => x.id === V);
if (!surum) {
  console.error(`${V} Mojang manifestinde yok`);
  process.exit(1);
}
const vjson = await (await fetch(surum.url)).json();
writeFileSync(join(ARACLAR, `mc-${V}.json`), JSON.stringify(vjson, null, 2));

const obfJar = join(ARACLAR, `mc-${V}-obf.jar`);
await indir(vjson.downloads.client.url, obfJar);

// ---------- 2) Intermediary mappings ----------
adim(`intermediary mappings: ${V}`);
const intJar = join(ARACLAR, `intermediary-${V}-v2.jar`);
await indir(`https://maven.fabricmc.net/net/fabricmc/intermediary/${V}/intermediary-${V}.jar`, intJar);
// mappings.tiny'i çıkar (tiny-remapper girdisi)
const intDizin = join(tmp, `int-${V}`);
mkdirSync(intDizin, { recursive: true });
execFileSync("tar", ["-xf", intJar, "-C", intDizin], { stdio: "ignore" });
const tiny = join(intDizin, "mappings", "mappings.tiny");
if (!existsSync(tiny)) throw new Error("mappings.tiny bulunamadi");
copyFileSync(tiny, join(ARACLAR, `mappings-${V}.tiny`));
console.log(`   mappings-${V}.tiny hazir`);

// ---------- 3) obf → intermediary remap ----------
adim(`remap: obf → intermediary (${V})`);
const remapJar = join(ARACLAR, `mc-${V}-intermediary.jar`);
if (!existsSync(remapJar)) {
  const fat = join(ARACLAR, "tiny-remapper-0.14.1-fat.jar");
  if (!existsSync(fat)) {
    throw new Error("tiny-remapper fat jar yok: yikim-mod/araclar/tiny-remapper-0.14.1-fat.jar");
  }
  const kutuphane = join(ARACLAR, `mc-kutuphane-${V}`);
  // Kendi kendine remap: "intermediary" ad alanı zaten hedef (official→obf→intermediary
  // için Mojang official mappings gerekir; burada obf→intermediary doğrudan).
  execFileSync(
    "java",
    [
      "-cp", fat,
      "net.fabricmc.tinyremapper.Main",
      obfJar, remapJar,
      join(ARACLAR, `mappings-${V}.tiny`),
      "official", "intermediary",
    ],
    { stdio: "inherit" },
  );
}
console.log(`   mc-${V}-intermediary.jar hazir`);

// ---------- 4) Mojang kütüphaneleri (javac classpath) ----------
adim(`kutuphaneler: ${V}`);
const libKok = join(ARACLAR, `mc-kutuphane-${V}`);
mkdirSync(libKok, { recursive: true });
let kutuphaneSayisi = 0;
async function getLib(lib) {
  const p = join(libKok, dirname(lib.downloads.artifact.path), lib.downloads.artifact.path.split("/").pop());
  if (existsSync(p)) return;
  await indir(lib.downloads.artifact.url, p);
  kutuphaneSayisi++;
}
for (const lib of vjson.libraries) if (lib.downloads?.artifact) await getLib(lib);
console.log(`   ${kutuphaneSayisi} kutuphane hazir (${vjson.libraries.length} tanimli)`);

// ---------- 5) fabric-api modülleri ----------
adim(`fabric-api: ${V}`);
const faDizin = join(ARACLAR, `fabric-api-${V}`);
mkdirSync(faDizin, { recursive: true });
// modun import ettiği modüller (YikimClient/YikimKeys/YikimNet/YikimServer)
const gerekli = [
  "fabric-api-base",
  "fabric-lifecycle-events-v1",
  "fabric-key-binding-api-v1",
  "fabric-rendering-v1",
  "fabric-networking-api-v1",
  "fabric-message-api-v1",
  "fabric-screen-api-v1",
  "fabric-resource-loader-v0",
];
// meta: sürüme uyan fabric-api bileşen sürümleri
const meta = await (await fetch(`https://meta.fabricmc.net/v2/versions/loader/${V}`)).json();
const apiBul = (maven) => meta.find((x) => maven.some((n) => (x.maven || "").startsWith(n)));
const surumBilgi = meta.find((x) => x.loader && x.intermediary === V) || meta[0];
console.log(`   loader onerisi: ${surumBilgi?.loader?.version ?? "?"}`);
// fabric-api "build" bilgisini doğrudan çöz: her modülün kendi maven koordinatı
// "fabric-<ad>-<surum>" biçiminde; versiyonu meta'dan değil, fabric-api release'inden al.
const rel = await (await fetch("https://api.modrinth.com/v2/project/fabric-api/version")).json();
const uygun = rel.find((r) => r.game_versions.includes(V) && r.loaders.includes("fabric"));
if (!uygun) throw new Error(`${V} icin fabric-api surumu bulunamadi`);
for (const f of uygun.files) {
  // modül jar'ları: ana jar + ayrı "nested/…" değil, tek büyük jar; ama biz
  // compile için sadece API sınıflarına ihtiyacımız var → bütün modülleri aynı
  // jar'dan çözebiliriz. Yine de modülleri tek tek indirmek daha hafif:
  console.log(`   fabric-api: ${uygun.version_number} → ${f.filename}`);
  await indir(f.url, join(faDizin, f.filename));
}

// ---------- özet ----------
adim("HAZIR");
console.log(`  mc jar:      ${remapJar.replace(KOK + "\\", "")}`);
console.log(`  mappings:    mappings-${V}.tiny`);
console.log(`  kutuphaneler: ${libKok.replace(KOK + "\\", "")} (${kutuphaneSayisi} adet)`);
console.log(`  fabric-api:  ${faDizin.replace(KOK + "\\", "")}`);
console.log(`  sonraki adim: powershell -File yikim-mod/araclar/derle.ps1 -McVersion ${V} -ModVersion <surum>`);
