// Kırmızı X (✕) glifi üret — 8x8 piksel sanatı, tam şeffaf arka plan.
// Launcher'daki ✕ ile aynı anlamı taşır: "hesap doğrulanmadı".
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hedef = path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/font/carpi.png");

// RGBA piksel haritası: kırmızı X + ince beyaz dış hat (her zeminde okunsun)
const K = [255, 92, 92, 255];   // kırmızı
const B = [255, 255, 255, 255]; // beyaz hat
const T = [0, 0, 0, 0];         // şeffaf

// 8x8: köşegenler kalın, dış hat beyaz
const harita = [];
for (let y = 0; y < 8; y++) {
  const satir = [];
  for (let x = 0; x < 8; x++) {
    const d1 = x === y;                 // sol üst → sağ alt
    const d2 = x === 7 - y;             // sağ üst → sol alt
    const kenar = x === 0 || y === 0 || x === 7 || y === 7;
    if (d1 || d2) satir.push(K);
    else if (kenar && ((x <= y && y <= 7 - x) || (x >= y && y >= 7 - x))) satir.push(T);
    else if (y === 0 || y === 7 || x === 0 || x === 7) satir.push(d1 || d2 ? K : T);
    else satir.push(T);
  }
  harita.push(satir);
}

// basitçe: iki köşegen + çevresinde 1 piksel beyaz halka
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    const komsuKirmizi =
      (x + 1 < 8 && harita[y][x + 1] === K) ||
      (x - 1 >= 0 && harita[y][x - 1] === K) ||
      (y + 1 < 8 && harita[y + 1][x] === K) ||
      (y - 1 >= 0 && harita[y - 1][x] === K);
    if (harita[y][x] === T && komsuKirmizi) harita[y][x] = B;
  }
}

// RGBA baytları
const bayt = Buffer.alloc(8 * 8 * 4);
let i = 0;
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    const [r, g, b, a] = harita[y][x];
    bayt[i++] = r;
    bayt[i++] = g;
    bayt[i++] = b;
    bayt[i++] = a;
  }
}

// — PNG yaz (filtre tipi 0, renk tipi 6 RGBA, 8 bit)
const crc32 = (buf) => {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc ^ c) >>> 0;
  }
  return (crc ^ 0xffffffff) >>> 0;
};
const parca = (tip, veri) => {
  const l = Buffer.alloc(4);
  l.writeUInt32BE(veri.length, 0);
  const td = Buffer.concat([Buffer.from(tip, "ascii"), veri]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td), 0);
  return Buffer.concat([l, td, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(8, 0);  // genişlik
ihdr.writeUInt32BE(8, 4);  // yükseklik
ihdr[8] = 8;               // bit derinliği
ihdr[9] = 6;               // RGBA
ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

const satirlar = [];
for (let y = 0; y < 8; y++) {
  satirlar.push(0); // filtre: none
  for (let x = 0; x < 8; x++) satirlar.push(bayt[(y * 8 + x) * 4], bayt[(y * 8 + x) * 4 + 1], bayt[(y * 8 + x) * 4 + 2], bayt[(y * 8 + x) * 4 + 3]);
}
const idat = Buffer.from(satirlar);

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  parca("IHDR", ihdr),
  parca("IDAT", zlib.deflateSync(idat, { level: 9 })),
  parca("IEND", Buffer.alloc(0)),
]);

fs.mkdirSync(path.dirname(hedef), { recursive: true });
fs.writeFileSync(hedef, png);
console.log("yazildi:", hedef, png.length, "bayt");
