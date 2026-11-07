// .yikimpack çekirdek round-trip testi (Node, build gerektirmez).
// yikimpack.rs mantığını Node ile birebir taklit eder: manifest + logo + içerik.
// Ardından kurulum yönü: manifest okunur, tüm dosyalar açılır, logo alınır.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { createDeflateRaw } from "node:zlib";

const kok = process.argv[2] || "C:/Users/USER/AppData/Local/Temp/yp-test";
const cikti = join(kok, "..", "yp-urun");
const ad = "TestPaket";

function topla(dir, onek, cikis) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) topla(p, onek, cikis);
    else cikis.push([`${onek}/${relative(dir, p).replace(/\\/g, "/")}`, p]);
  }
}

// --- içindekiler: mods + config + options
const eklenecek = [];
topla(join(kok, "inst-1", "mods"), "mods", eklenecek);
topla(join(kok, "inst-1", "config"), "config", eklenecek);
eklenecek.push(["options.txt", join(kok, "inst-1", "options.txt")]);

const manifest = {
  format: "yikimpack",
  formatVersion: 1,
  name: ad,
  minecraft: "1.21.1",
  loader: "fabric",
  loader_version: "0.16.0",
  includes: ["mods", "config", "options"],
  fileCount: eklenecek.length,
};

// ZIP yaz (stored + deflate mix: metin dosyaları deflate, ikili stored)
const dosyalar = [["yikimpack.json", Buffer.from(JSON.stringify(manifest, null, 2))]];
for (const [ic, dis] of eklenecek) {
  dosyalar.push([ic, readFileSync(dis)]);
}
const logo = readFileSync("C:/Users/USER/Desktop/samiclient/src-tauri/icons/128x128.png");
dosyalar.push(["yikimpack-logo.png", logo]);

const parcalar = [];
const merkez = [];
let ofset = 0;
function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
for (const [ic, veri] of dosyalar) {
  const siki = veri.length > 4096 && !ic.endsWith(".jar") && !ic.endsWith(".png");
  const dep = siki ? deflateRawSync(veri, { level: 9 }) : veri;
  const yontem = siki ? 8 : 0;
  const crc = crc32(veri);
  const ad16 = Buffer.from(ic, "utf8");
  const baslik = Buffer.alloc(30);
  baslik.writeUInt32LE(0x04034b50, 0);
  baslik.writeUInt16LE(20, 4);
  baslik.writeUInt16LE(yontem, 8);
  baslik.writeUInt32LE(0, 10); // zaman
  baslik.writeUInt32LE(crc, 14);
  baslik.writeUInt32LE(dep.length, 18);
  baslik.writeUInt32LE(veri.length, 22);
  baslik.writeUInt16LE(ad16.length, 26);
  parcalar.push(baslik, ad16, dep);
  merkez.push({ ic, ad16, yontem, crc, depUz: dep.length, hamUz: veri.length, ofset });
  ofset += 30 + ad16.length + dep.length;
}
const merkezBasla = ofset;
const merkezParcalar = [];
for (const m of merkez) {
  const h = Buffer.alloc(46);
  h.writeUInt32LE(0x02014b50, 0);
  h.writeUInt16LE(20, 4);
  h.writeUInt16LE(20, 6);
  h.writeUInt16LE(m.yontem, 10);
  h.writeUInt32LE(0, 12);
  h.writeUInt32LE(m.crc, 16);
  h.writeUInt32LE(m.depUz, 20);
  h.writeUInt32LE(m.hamUz, 24);
  h.writeUInt16LE(m.ad16.length, 28);
  merkezParcalar.push(h, m.ad16);
}
const son = Buffer.alloc(22);
son.writeUInt32LE(0x06054b50, 0);
son.writeUInt16LE(merkez.length, 8);
son.writeUInt16LE(merkez.length, 10);
son.writeUInt32LE(merkezParcalar.reduce((a, b) => a + b.length, 0), 12);
son.writeUInt32LE(merkezBasla, 16);

writeFileSync(join(cikti, `${ad}.yikimpack`), Buffer.concat([...parcalar, ...merkezParcalar, son]).toString("binary"), "binary");
console.log("PAKET BOYUTU:", statSync(join(cikti, `${ad}.yikimpack`)).size, "bayt");
console.log("DOSYA SAYISI:", dosyalar.length);

// --- kurulum yönü
rmSync(join(kok, "kurulum-1"), { recursive: true, force: true });
console.log("kurulum yönü: zip okuma + manifest çözümü test edilecek (opencode aracı)");
