// YIKIMLient varsayılan kozmetiklerini katalog dışına (app_dir) yazar:
// launcher ilk açılışta bunları katalogdaki ilk kayıt olarak içeri alır.
// Amaç: herkese açık, ücretsiz, hazır YIKIM pelerin + elitra.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const kaynakKok = path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/entity");

// app_dir: YIKIM_APP_DIR geçersiz kılabilir (Rust core::app_dir ile aynı)
let hedefKok = process.env.YIKIM_APP_DIR;
if (!hedefKok) {
  hedefKok = path.join(os.homedir(), "AppData/Roaming/.yikimlient");
}
fs.mkdirSync(hedefKok, { recursive: true });

// HENÜZ dosya yoksa yaz (kullanıcı kendi tasarımını kaydettiyse dokunma)
const kopyala = (ad) => {
  const kaynak = path.join(kaynakKok, ad);
  const hedef = path.join(hedefKok, ad);
  if (!fs.existsSync(kaynak)) {
    console.log("kaynak yok:", ad);
    return;
  }
  if (fs.existsSync(hedef)) {
    console.log("zaten var (korunuyor):", ad);
    return;
  }
  fs.copyFileSync(kaynak, hedef);
  console.log("yazildi:", hedef);
};

for (const ad of ["pelerin.png", "elytra.png"]) kopyala(ad);
