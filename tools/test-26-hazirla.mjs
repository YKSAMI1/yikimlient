// Yardirici: 26.1 / 26.2 icin launcher'daki kurulumu hazirlar
//   ~/.yikimlient/versions/<V>/<V>.json           (vanilla)
//   ~/.yikimlient/versions/fabric-loader-0.20.1-<V>/...json
//   ~/.yikimlient/assets/indexes/<id>.json         (eksik assetler indirilir)
// KULLANIM: node tools/test-26-hazirla.mjs [26.1 26.2 ...]
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const APP = join(homedir(), "AppData", "Roaming", ".yikimlient");

const get = (u) =>
  new Promise((ok, no) => {
    https.get(u, (r) => {
      const d = [];
      r.on("data", (c) => d.push(c));
      r.on("end", () => ok({ status: r.statusCode, body: Buffer.concat(d) }));
    }).on("error", no);
  });

import https from "node:https";

const surumler = process.argv.slice(2);
if (!surumler.length) { console.error("kullanim: node test-26-hazirla.mjs 26.1 26.2"); process.exit(1); }

for (const ver of surumler) {
  const man = await get("https://launchermeta.mojang.com/mc/game/version_manifest_v2.json");
  const list = JSON.parse(man.body.toString());
  const v = list.versions.find((x) => x.id === ver);
  if (!v) { console.log(`${ver}: manifestte yok`); continue; }
  const dv = await get(v.url);
  const vj = JSON.parse(dv.body.toString());
  mkdirSync(join(APP, "versions", ver), { recursive: true });
  writeFileSync(join(APP, "versions", ver, `${ver}.json`), dv.body);
  const fm = await get(`https://meta.fabricmc.net/v2/versions/loader/${ver}/0.20.1/profile/json`);
  const fd = join(APP, "versions", `fabric-loader-0.20.1-${ver}`);
  mkdirSync(fd, { recursive: true });
  writeFileSync(join(fd, `fabric-loader-0.20.1-${ver}.json`), fm.body);
  // eksik Windows kutuphanelerini launcher'in libraries klasorune indir
  let eksikLib = 0;
  const libDir = join(APP, "libraries");
  mkdirSync(libDir, { recursive: true });
  for (const l of vj.libraries) {
    let izin = true;
    if (l.rules) {
      izin = false;
      for (const r of l.rules) {
        if (r.action === "allow" && (!r.os || r.os.name === "windows")) izin = true;
        if (r.action === "disallow") izin = false;
      }
    }
    if (!izin) continue;
    for (const art of [l.downloads?.artifact, ...Object.values(l.downloads?.classifiers || {})]) {
      if (!art?.path) continue;
      const hedef = join(libDir, art.path);
      if (existsSync(hedef)) continue;
      eksikLib++;
      const b = await get(art.url);
      mkdirSync(join(hedef, ".."), { recursive: true });
      writeFileSync(hedef, b.body);
    }
  }
  console.log(`   eksik kutuphane indirildi: ${eksikLib}`);
  console.log(`${ver}: version jsons yazildi (assetIndex ${vj.assetIndex.id}, lib ${vj.libraries.length})`);

  const ai = await get(vj.assetIndex.url);
  const aj = JSON.parse(ai.body.toString());
  const idxDir = join(APP, "assets", "indexes");
  mkdirSync(idxDir, { recursive: true });
  writeFileSync(join(idxDir, `${vj.assetIndex.id}.json`), ai.body);
  let eksik = 0;
  let indi = 0;
  for (const k of Object.keys(aj.objects)) {
    const o = aj.objects[k];
    const f = join(APP, "assets", "objects", o.hash.slice(0, 2), o.hash);
    if (existsSync(f)) continue;
    eksik++;
    if (eksik > 800) continue;
    const b = await get(`https://resources.download.minecraft.net/${o.hash.slice(0, 2)}/${o.hash}`);
    mkdirSync(join(APP, "assets", "objects", o.hash.slice(0, 2)), { recursive: true });
    writeFileSync(f, b.body);
    indi++;
  }
  console.log(`   eksik asset: ${eksik}, indirilen: ${indi}`);
}