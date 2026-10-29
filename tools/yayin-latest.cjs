// latest.json üretici: CI'in Linux imzalarına Windows imzasını ekler.
// Kullanım: node tools/yayin-latest.cjs <yayin/klasor> <surum> <notlar>
const fs = require("fs");
const path = require("path");

const [dir, version, notes] = process.argv.slice(2);
const urlBase = "https://github.com/YKSAMI1/yikimlient/releases/download/v" + version;

const latest = JSON.parse(fs.readFileSync(path.join(dir, "latest.json"), "utf8"));
latest.version = version;
latest.notes = notes;
latest.pub_date = new Date().toISOString().replace(/\.\d+Z$/, "Z");

const sig = fs.readFileSync(path.join(dir, `YIKIMLient_${version}_x64-setup.exe.sig`), "utf8").trim();
latest.platforms["windows-x86_64"] = {
  signature: sig,
  url: `${urlBase}/YIKIMLient_${version}_x64-setup.exe`,
};

fs.writeFileSync(path.join(dir, "latest.json"), JSON.stringify(latest, null, 2));
console.log("platformlar:", Object.keys(latest.platforms).join(", "));
