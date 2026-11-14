// Mojang resmî client mappings (client.txt) indirici — eşleyici için.
// KULLANIM: node tools/client-txt-indir.mjs 1.21.11
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const V = process.argv[2] || "1.21.11";
const hedef = join(process.cwd(), "yikim-mod", "araclar", `client-${V}.txt`);

const manifest = await (await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")).json();
const surum = manifest.versions.find((v) => v.id === V);
if (!surum) throw new Error(`surum bulunamadi: ${V}`);
const meta = await (await fetch(surum.url)).json();
const url = meta.downloads?.client_mappings?.url;
if (!url) throw new Error(`${V} icin client_mappings yok`);
const metin = await (await fetch(url)).text();
writeFileSync(hedef, metin, "utf8");
console.log(`indirildi: ${hedef} (${Math.round(metin.length / 1024 / 1024)} MB)`);
