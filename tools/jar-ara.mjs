// Bir jar icindeki TUM .class dosyalarinda sabit havuzda gecen metni arar.
//
// KULLANIM: node tools/jar-ara.mjs <jar> <desen> [--sinif]
//   --sinif : yalnizca eslesen sinif ADLARINI yazdirir (varsayilan da budur)
//
// NOT: arama, sabit havuzdaki UTF8 girdileri uzerinde yapilir (sinif adlari,
// alan/metot adlari, imzalar). Bu yuzden "hideGui" gibi bir alanin hangi
// sinifta tanimli oldugunu hizli bulur.
import { readFileSync, readdirSync, rmSync, mkdtempSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";

const JAR = "C:\\Program Files\\Java\\jdk-25.0.3\\bin\\jar.exe";
const jar = process.argv[2];
const desenMetni = process.argv[3];
const sadeceAd = !process.argv.includes("--tam");
if (!jar || !desenMetni) {
  console.error("kullanim: node tools/jar-ara.mjs <jar> <desen> [--tam]");
  process.exit(1);
}
const desen = new RegExp(desenMetni);

const d = mkdtempSync(join(tmpdir(), "jarara-"));
try {
  execFileSync(JAR, ["xf", resolve(jar)], { cwd: d, stdio: "ignore", maxBuffer: 64 * 1024 * 1024 });
  const dosyalar = [];
  const yuru = (k) => {
    for (const e of readdirSync(k, { withFileTypes: true })) {
      const y = join(k, e.name);
      if (e.isDirectory()) yuru(y);
      else if (e.name.endsWith(".class")) dosyalar.push(y);
    }
  };
  yuru(d);

  let sayi = 0;
  for (const dosya of dosyalar) {
    const metin = readFileSync(dosya).toString("latin1");
    if (!desen.test(metin)) continue;
    sayi++;
    console.log(relative(d, dosya).replace(/\\/g, "/"));
    if (!sadeceAd) {
      // eslesen satirlari kabaca cikar (UTF8 girdileri arasinda)
      const parcalar = metin.split(/\u0000|\u0001/).filter((p) => desen.test(p) && p.length < 200);
      for (const p of parcalar.slice(0, 6)) console.log("    " + p.replace(/[^\x20-\x7e]/g, " ").trim());
    }
  }
  console.error(`eslesen sinif: ${sayi} / ${dosyalar.length}`);
} finally {
  rmSync(d, { recursive: true, force: true });
}
