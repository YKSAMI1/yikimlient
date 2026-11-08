// TEST PAKETİ üretimi — bot + güvenlik API + launcher bilgisi.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CIKIS = path.join(KOK, "yayin-test");
fs.rmSync(CIKIS, { recursive: true, force: true });
fs.mkdirSync(CIKIS, { recursive: true });

const adim = (s) => console.log("== " + s);

// ---------- 1) BOT ZIP (node_modules dahil) ----------
function ziple(kaynakKok, hedefZip, atla) {
  // Windows'un dahili tar'ı (bsdtar) kullanılır: uzun komut satırı sorunu yok.
  const atlaListe = atla.map((a) => `--exclude=${a}`).join(" ");
  const dizinAdi = path.basename(kaynakKok);
  execSync(
    `tar -a -c -f "${hedefZip}" ${atlaListe} -C "${path.dirname(kaynakKok)}" "${dizinAdi}"`,
    { stdio: "pipe" }
  );
  return fs.statSync(hedefZip).size;
}

const botZip = path.join(CIKIS, "bot-yikimpack-test.zip");
const botDizin = path.join(KOK, "bot");
adim("bot zip hazirlaniyor (node_modules DAHİL)");
ziple(botDizin, botZip, [".git", ".env", "*.log"]);
console.log(`   OK bot-yikimpack-test.zip (${(fs.statSync(botZip).size / 1048576).toFixed(1)} MB)`);

// ---------- 2) GÜVENLİK API ZIP (sırlar hariç, node_modules hariç) ----------
const apiZip = path.join(CIKIS, "guvenlik-api-test.zip");
const apiKok = path.join(KOK, "guvenlik-api");
adim("guvenlik-api zip hazirlaniyor (node_modules HARİÇ)");
ziple(apiKok, apiZip, [".git", "node_modules", ".env", "*.db", "*.log"]);
console.log(`   OK guvenlik-api-test.zip (${(fs.statSync(apiZip).size / 1024).toFixed(0)} KB)`);

// ---------- 3) OKU-BENİ ----------
const bilgi = `YIKIMLient TEST PAKETİ
=====================

Bu zip kendi bilgisayarında çalıştırmak içindir. Sırlar (.env) zip'e
konulmadı — kendi bilgisayarında bir kez oluşturman gerekir.

1) GÜVENLİK API'YI ÇALIŞTIR
   - guvenlik-api-test.zip klasörünü aç
   - içinde \`.env.example\` dosyası var; ona bak
   - İçindeki değerleri üret:

     node -e "console.log(require('crypto').randomBytes(24).toString('base64'))"   → YIKIM_PEPPER
     node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"   → YIKIM_ANAHTAR
     node -e "const d=require('crypto').generateKeyPairSync('ed25519').privateKey.export({format:'der',type:'pkcs8'});console.log(d.subarray(d.length-32).toString('hex'))"   → YIKIM_IMZA_GIZLI
     node -e "console.log(require('crypto').randomBytes(24).toString('base64'))"   → YIKIM_BOT_ANAHTARI

   - guvenlik-api klasörüne .env dosyası olarak yaz (YIKIM_DB için bir dosya
     yolu yaz, ör: C:/Users/KULLANICI/AppData/Roaming/.yikimlient/guvenlik.db)
   - npm install      (Node 22+ gerekir — node:sqlite kullanılıyor)
   - node src/server.js
     → "sunucu genel anahtari: ...." satırını kopyala

2) LAUNCHER'AANAHTARI VER
   - Kopyaladığın genel anahtarı şuraya yaz:
     %APPDATA%\\.yikimlient\\guvenlik\\api-pub.txt   (Windows)
   - VEYA YIKIM_API_PUB ortam değişkeni olarak ver

3) BOTU ÇALIŞTIR
   - bot-yikimpack-test.zip içinden bot klasörü çıkar (node_modules DAHİL)
   - bot/.env dosyası oluştur:
       TOKEN=                     (veya TOKEN_ENCRYPTED + TOKEN_KEY)
       GUILD_ID=...
       CHANNEL_ID=...
       ROLE_ID=...
       YIKIM_API=http://127.0.0.1:8788
       YIKIM_BOT_ANAHTARI=         (API ile AYNI değer!)
   - node index.js

4) LAUNCHER
   - YIKIM_API=http://127.0.0.1:8788 ortam değişkeni ile aç
   - Ayarlar → Hesap Doğrulama → Kod al
   - Discord'da bota DM: /bagla KOD
   - Şifreni oluştur

NOT: Bot/API kapalıyken de oyun ve mevcut kozmetikler çalışmaya devam eder.
`;
fs.writeFileSync(path.join(CIKIS, "OKU-BENI.txt"), bilgi);
adim("OKU-BENI.txt yazildi");

adim("BİTTİ — " + CIKIS);
for (const f of fs.readdirSync(CIKIS)) {
  const s = fs.statSync(path.join(CIKIS, f)).size;
  console.log(`   ${f}  (${(s / 1024).toFixed(0)} KB)`);
}
