// YIKIMLient kendi kozmetik tasarımını katalogdaki AYRI bir kayıt olarak ekle.
// Kullanıcının kendi pelerin/elytra dosyaları DOKUNULMAZ — yeni tasarım
// yanlarına bir kayıt düşer, kullanıcı isterse seçer.
//
// Neden betik: launcher içinde bir "varsayılan katalog" tohumlama işlevi
// yok; bu tasarımı bir kez katalogdaki boş yuvaya yazmak yeterli.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const kaynakKok = path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/entity");

let appDir = process.env.YIKIM_APP_DIR;
if (!appDir) appDir = path.join(os.homedir(), "AppData/Roaming/.yikimlient");
const katalog = path.join(appDir, "kozmetik");

const kisi = () => (process.env.YIKIM_KOZ_HESAP || "paylasilan");

const yolu = (tur, id) => path.join(katalog, `${tur}-${id}.png`);
const katalogJson = () => path.join(katalog, "katalog.json");

const oku = () => {
  try { return JSON.parse(fs.readFileSync(katalogJson(), "utf8")); } catch { return []; }
};

const TASARIMLAR = [
  { tur: "pelerin", ad: "YIKIM Pelerin", dosya: "pelerin.png" },
  { tur: "kanat", ad: "YIKIM Elitra", dosya: "elytra.png" },
];

for (const t of TASARIMLAR) {
  const liste = oku();
  // aynı isimde kayıt varsa atla (ikinci koşumda tekrar etmesin)
  if (liste.some((k) => k.tur === t.tur && k.ad === t.ad)) {
    console.log("zaten var:", t.ad);
    continue;
  }
  const kaynak = path.join(kaynakKok, t.dosya);
  if (!fs.existsSync(kaynak)) { console.log("kaynak yok:", t.dosya); continue; }
  const png = fs.readFileSync(kaynak);
  const id = `${t.tur}-${Date.now()}-${crypto.randomBytes(2).toString("hex")}`;
  fs.mkdirSync(katalog, { recursive: true });
  fs.writeFileSync(yolu(t.tur, id), png);
  const yeni = {
    id,
    ad: t.ad,
    tur: t.tur,
    hd: false,
    genislik: 64,
    yukseklik: 32,
    tarih: Date.now(),
  };
  fs.writeFileSync(katalogJson(), JSON.stringify([...liste, yeni], null, 2));
  console.log("katalog kaydi eklendi:", t.ad, "→", id);
}
void kisi;
