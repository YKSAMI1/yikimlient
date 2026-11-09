// Basit statik sunucu — siteyi yerelde önizlemek için.
// Kullanım: node tools/site-sunucu.mjs  [port]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "site");
const port = Number(process.argv[2] || 8899);

const TUR = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

const sunucu = http.createServer((istek, yanit) => {
  const url = decodeURIComponent((istek.url || "/").split("?")[0]);
  let dosya = path.join(kok, url === "/" ? "index.html" : url);
  // dizin dışına çıkma
  if (!dosya.startsWith(kok)) {
    yanit.writeHead(403).end("yasak");
    return;
  }
  if (fs.existsSync(dosya) && fs.statSync(dosya).isDirectory()) dosya = path.join(dosya, "index.html");

  fs.readFile(dosya, (hata, veri) => {
    if (hata) {
      // temiz URL: /ozellikler -> index.html
      fs.readFile(path.join(kok, "index.html"), (h2, v2) => {
        if (h2) {
          yanit.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("bulunamadi");
          return;
        }
        yanit.writeHead(200, { "content-type": TUR[".html"] }).end(v2);
      });
      return;
    }
    yanit.writeHead(200, {
      "content-type": TUR[path.extname(dosya).toLowerCase()] || "application/octet-stream",
      "cache-control": "no-store",
    }).end(veri);
  });
});

sunucu.listen(port, "127.0.0.1", () => {
  console.log(`site: http://127.0.0.1:${port}`);
});
