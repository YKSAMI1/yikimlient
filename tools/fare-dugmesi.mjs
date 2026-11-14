// Fare düğmesi numaralandırması farkını tek yerden çözer (v1.33.15 / 1.0.5)
//
// 1.21.x (GLFW): sol=0, sağ=1, orta=2
// 26.x   (SDL):  sol=1, orta=2, sağ=3     <-- pencere sistemi değişti!
//
// Elle "== 0" kontrolü 26.x'te SOL TIKI kaçırıyordu (menüde hiçbir şey
// tıklanmıyordu). Bu betik tüm "== 0" / "!= 0" kontrollerini
// YikimAdapter.solTik(...) yardımcısına çevirir — her iki sürümde de doğru.
//
// KULLANIM: node tools/fare-dugmesi.mjs
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const KOK = join(process.cwd(), "yikim-mod", "src", "main", "java", "com", "yikimlient", "client");

function dosyalar(d) {
  const c = [];
  const yuru = (k) => {
    for (const e of readdirSync(k, { withFileTypes: true })) {
      const y = join(k, e.name);
      if (e.isDirectory()) yuru(y);
      else if (e.name.endsWith(".java")) c.push(y);
    }
  };
  yuru(d);
  return c;
}

let degisen = 0;
const rapor = [];

for (const f of dosyalar(KOK)) {
  let t = readFileSync(f, "utf8");
  const once = t;

  // 1) "tik.comp_4800().comp_4801() != 0"  →  "!YikimAdapter.solTik(...)"
  t = t.replace(
    /(\w+)\.comp_4800\(\)\.comp_4801\(\) != 0/g,
    (_t, degisken) => `!YikimAdapter.solTik(${degisken}.comp_4800().comp_4801())`
  );
  // 2) "tik.comp_4800().comp_4801() == 0"  →  "YikimAdapter.solTik(...)"
  t = t.replace(
    /(\w+)\.comp_4800\(\)\.comp_4801\(\) == 0/g,
    (_t, degisken) => `YikimAdapter.solTik(${degisken}.comp_4800().comp_4801())`
  );
  // 3) mouseClicked gövdesindeki "int tus = tik.comp_4800().comp_4801();" kalır
  //    ama "tus == 0" / "tus != 0" kontrolleri de düzeltilir:
  t = t.replace(/(?<![.\w])(tus|button|dugme) == 0\b/g, "YikimAdapter.solTikInt($1)");
  t = t.replace(/(?<![.\w])(tus|button|dugme) != 0\b/g, "!YikimAdapter.solTikInt($1)");

  if (t !== once) {
    writeFileSync(f, t, "utf8");
    degisen++;
    rapor.push(f.split("client").pop());
  }
}
console.log(`degisen dosya: ${degisen}`);
for (const r of rapor) console.log("  ", r);