// YIKIM bot dagitim zippi — calismaya hazir, GIZLI veri haric.
//
//   node tools/bot-zip.mjs                → Masaustu\YIKIM-bot-<surum>.zip
//   node tools/bot-zip.mjs <cikti.zip>
//
// NEDEN: bot/.env icinde TOKEN ve API anahtari vardir — bu zip ASLA repoya
// veya yayin dosyasina girmemeli. Ayni sekilde croxydb/ (botun yerel verisi)
// ve logs haric tutulur: karsi makinede kendi kaydi olusur.
//
// node_modules DAHIL: bot npm install gerektirmeden calissin.

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const kok = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const surum = JSON.parse(readFileSync(join(kok, "package.json"), "utf8")).version;
const cikti = resolve(process.argv[2] || join(homedir(), "Desktop", `YIKIM-bot-${surum}.zip`));
const bot = join(kok, "bot");
const gecici = join(kok, "yayin-test", ".bot-zip");

if (!existsSync(join(bot, "index.js"))) {
  console.error("bot/index.js yok — bot klasoru bulunamadi");
  process.exit(1);
}

rmSync(gecici, { recursive: true, force: true });
mkdirSync(join(gecici, "bot"), { recursive: true });
cpSync(bot, join(gecici, "bot"), { recursive: true });

// GIZLI / KISIYE OEM: silinecekler
for (const sil of [".env", "croxydb", "logs"]) {
  rmSync(join(gecici, "bot", sil), { recursive: true, force: true });
}

const okubeni = `=====================================================
 YIKIM BOT — v${surum}
=====================================================

Bu zip botun TAMAMI (node_modules dahil) — calismaya hazir.
GIZLILIK: bot\\.env (token + API anahtari) zip'e EKLENEMEZ; onu kendin olustur.

--- ILK KURULUM (1 kez) ---

1) Bu zip'i bir klasore cikar.
2) bot klasorunde ".env.example" dosyasini ".env" olarak kopyala.
3) .env icine kendi bilgilerini yaz:
     TOKEN=...                          Discord bot tokenin
     TOKEN_ENCRYPTED=... TOKEN_KEY=...  (opsiyonel: token sifreli saklama)
     GUILD_ID=1436397283057995938       YIKIMDARA sunucusu
     CHANNEL_ID=1465760963843063078     hosgeldin / veda kanali
     ROLE_ID=1465760854526918703        "Yol Silindiri" rolu
     YIKIM_API=http://127.0.0.1:8788    guvenlik API adresi
     YIKIM_ADMIN_ID=1137682456783376467 senin Discord ID'n
     YIKIM_BOT_ANAHTARI=<ayni anahtar>  guvenlik-api/.env ile AYNI olmali

4) Baslat:  npm start   (veya: node index.js)

--- ROL KURALI ---
"Yol Silindiri" rolu olanlar kendi pelerin/elitrasini cizebilir.
Bot rol verildiginde ya da ALINDIGINDA bunu guvenlik API'sine yazar;
launcher bu bilgiye bakar. Etiketi birakan oyuncunun cizim izni kapanir.

Detayli kurulum: bot/KURULUM.txt
=====================================================
`;
writeFileSync(join(gecici, "bot", "OKU-BENI.txt"), okubeni, "utf8");

rmSync(cikti, { force: true });
mkdirSync(dirname(cikti), { recursive: true });
const { execSync } = await import("node:child_process");
// tar: Windows'ta kabuk tar'i (bsdtar) calisir; alternatif Compress-Archive
execSync(`tar -a -c -f "${cikti}" -C "${join(gecici, "bot")}" .`, { stdio: "pipe" });
rmSync(gecici, { recursive: true, force: true });

const mb = (statSync(cikti).size / 1048576).toFixed(1);
console.log(`OK ${cikti} (${mb} MB)`);
console.log("   icinde: bot kodu + node_modules + OKU-BENI.txt");
console.log("   hariç: .env (token), croxydb (yerel veri), logs");
