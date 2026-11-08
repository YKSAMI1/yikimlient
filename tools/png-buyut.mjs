// Üretilen PNG'leri büyütüp önizle (göz kontrolü için).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function pngOku(p) {
  const b = fs.readFileSync(p);
  let i = 8;
  let gen = 0, yuk = 0, bit = 8, tip = 6;
  const idat = [];
  while (i < b.length) {
    const l = b.readUInt32BE(i);
    const t = b.toString("ascii", i + 4, i + 8);
    const d = b.subarray(i + 8, i + 8 + l);
    if (t === "IHDR") { gen = d.readUInt32BE(0); yuk = d.readUInt32BE(4); bit = d[8]; tip = d[9]; }
    if (t === "IDAT") idat.push(d);
    i += 12 + l;
  }
  const ham = zlib.inflateSync(Buffer.concat(idat));
  const px = Buffer.alloc(gen * yuk * 4);
  let k = 0;
  for (let y = 0; y < yuk; y++) {
    k++; // filtre baytı (0)
    for (let x = 0; x < gen; x++) {
      const j = (y * gen + x) * 4;
      px[j] = ham[k]; px[j + 1] = ham[k + 1]; px[j + 2] = ham[k + 2]; px[j + 3] = ham[k + 3];
      k += 4;
    }
  }
  return { gen, yuk, px };
}

const crc32 = (buf) => { let c, crc = 0xffffffff; for (let n = 0; n < buf.length; n++) { c = (crc ^ buf[n]) & 0xff; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crc = (crc ^ c) >>> 0; } return (crc ^ 0xffffffff) >>> 0; };
const parca = (tip, veri) => { const l = Buffer.alloc(4); l.writeUInt32BE(veri.length, 0); const td = Buffer.concat([Buffer.from(tip, "ascii"), veri]); const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td), 0); return Buffer.concat([l, td, crc]); };

function buyut(kaynak, hedefYol, olcek) {
  const { gen, yuk, px } = pngOku(kaynak);
  const g2 = gen * olcek, y2 = yuk * olcek;
  const p2 = Buffer.alloc(g2 * y2 * 4);
  for (let y = 0; y < y2; y++) {
    for (let x = 0; x < g2; x++) {
      const j = ((y / olcek | 0) * gen + (x / olcek | 0)) * 4;
      const i = (y * g2 + x) * 4;
      p2[i] = px[j]; p2[i + 1] = px[j + 1]; p2[i + 2] = px[j + 2]; p2[i + 3] = px[j + 3];
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(g2, 0); ihdr.writeUInt32BE(y2, 4); ihdr[8] = 8; ihdr[9] = 6;
  const sat = [];
  for (let y = 0; y < y2; y++) { sat.push(0); for (let x = 0; x < g2; x++) { const i = (y * g2 + x) * 4; sat.push(p2[i], p2[i+1], p2[i+2], p2[i+3]); } }
  const png = Buffer.concat([
    Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]),
    parca("IHDR", ihdr), parca("IDAT", zlib.deflateSync(Buffer.from(sat), { level: 9 })), parca("IEND", Buffer.alloc(0)),
  ]);
  fs.writeFileSync(hedefYol, png);
  return hedefYol;
}

console.log(buyut(path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/entity/pelerin.png"), path.join(kok, ".tmp-onizleme-pelerin.png"), 8));
console.log(buyut(path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/entity/elytra.png"), path.join(kok, ".tmp-onizleme-elytra.png"), 8));
