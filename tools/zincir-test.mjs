// Uçtan uca zincir testi: launcher → API → bot → API → launcher.
// Sırları .env'den okur, hiçbirini yazdırmaz. Test verisi canlı DB'ye
// yazılır (offline:zincir-test anahtarını kullanır).
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
fs.readFileSync(path.join(kok, "guvenlik-api/.env"), "utf8").split(/\r?\n/).forEach((s) => {
  const i = s.indexOf("=");
  if (i > 0 && !s.trimStart().startsWith("#")) {
    const k = s.slice(0, i).trim();
    if (!process.env[k]) process.env[k] = s.slice(i + 1).trim();
  }
});

const API = (process.env.YIKIM_API || "http://127.0.0.1:8788").replace(/\/+$/, "");
const BOT = process.env.YIKIM_BOT_ANAHTARI;
const HESAP = "offline:zincir-test";

function parolaHash(p) {
  return crypto.pbkdf2Sync(p, "yikimlient-parola-v1", 210000, 32, "sha256").toString("hex");
}

async function cagir(yol, govde, botMu = false) {
  const r = await fetch(API + yol, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(botMu ? { "x-bot-anahtari": BOT } : {}),
    },
    body: JSON.stringify(govde),
  });
  return { durum: r.status, govde: (await r.json()).govde };
}

const adim = (s) => console.log("\n== " + s);
const ok = (t, d) => console.log(`   OK  ${t}${d ? " → " + JSON.stringify(d) : ""}`);
const hata = (t, d) => {
  console.log(`   HATA ${t}${d ? " → " + JSON.stringify(d) : ""}`);
  process.exitCode = 1;
};

// 1) launcher bağlama kodu ister
adim("1. launcher: baglama kodu");
const k1 = await cagir("/api/baglama/kod", { hesap_anahtar: HESAP, hesap_ad: "Zincir", tur: "cracked" });
const kod = k1.govde?.kod;
if (kod) ok("kod uretildi", { kod, kalan_sn: k1.govde.kalan_sn });
else hata("kod uretilemedi", k1);

// 2) bot kodu dogrular (Discord'da /bagla KOD yazilmis gibi)
adim("2. bot: /bagla ile dogrulama");
const d1 = await cagir("/api/baglama/dogrula", { kod, discord_id: "123456789", discord_ad: "denemec", rol_yol: true }, true);
if (d1.durum === 200) ok("discord baglandi");
else hata("baglama dogrulanamadi", d1);

// 3) launcher durum: baglandi olmali
adim("3. launcher: baglanti durumu");
const bd = await cagir("/api/baglama/durum", { hesap_anahtar: HESAP, hesap_ad: "Zincir", tur: "cracked" });
ok("durum", bd);
if (!bd.govde?.baglandi) hata("baglanti gorunmuyor");

// 4) launcher ilk parolayi kurar
adim("4. launcher: ilk parolayi kur");
const hash = parolaHash("IlkParola42");
const pk = await cagir("/api/parola/kur", { hesap_anahtar: HESAP, parola_hash: hash });
if (pk.durum === 200) ok("parola kuruldu");
else hata("parola kurulamadi", pk);

const pk2 = await cagir("/api/parola/kur", { hesap_anahtar: HESAP, parola_hash: hash });
if (pk2.durum === 409 && /parola_var/.test(pk2.govde?.hata || "")) ok("ikinci kez ezmedi (parola_var)");
else hata("mevcut parola korunamiyor", pk2);

// 5) launcher giris yapar
adim("5. launcher: giris dogrulama");
const g1 = await cagir("/api/giris/dogrula", { hesap_anahtar: HESAP, hesap_ad: "Zincir", tur: "cracked", parola_hash: hash, ip: "31.223.64.252" });
if (g1.govde?.dogrulandi) {
  ok("giris onaylandi");
  const bitis = g1.govde.yetki_bitis;
  const gun = Math.round((bitis - Date.now()) / 86400000);
  console.log(`   yetki bitis: ${new Date(bitis).toISOString()} (~${gun} gun)`);
  if (gun < 6 || gun > 7) hata("yetki suresi 7 gun degil");
} else hata("giris reddedildi", g1);

// 6) yanlis parola + 5 denemede kilit
adim("6. yanlis parola → kilit");
for (let i = 0; i < 5; i++) {
  await cagir("/api/giris/dogrula", { hesap_anahtar: HESAP, hesap_ad: "Zincir", tur: "cracked", parola_hash: "f".repeat(64) });
}
const kilit = await cagir("/api/giris/dogrula", { hesap_anahtar: HESAP, hesap_ad: "Zincir", tur: "cracked", parola_hash: hash });
if (kilit.durum === 423) ok("5 hatali denemede 24 saat kilit", kilit.govde.hata);
else hata("kilit devreye girmedi", kilit);

// 7) sifremi unuttum: dogru/yanlis kullanici
adim("7. sifirla kodu: yetkisiz kullaniciya verilmez");
const y1 = await cagir("/api/sifirla/iste", { hesap_anahtar: HESAP, hesap_ad: "Zincir", discord_id: "baskasi" }, true);
if (y1.durum === 403) ok("baska hesabin kodunu alamadi");
else hata("yetkisiz koda izin verdi", y1);

const y2 = await cagir("/api/sifirla/iste", { hesap_anahtar: HESAP, hesap_ad: "Zincir", discord_id: "123456789" }, true);
if (y2.durum === 200) ok("sahip kodu aldi", { kod: y2.govde?.kod, kalan_sn: y2.govde?.kalan_sn });
else hata("sahip kodu alamadi", y2);

// 8) sifirla dogrulama
adim("8. sifirla kodu ile yeni parola");
const s1 = await cagir("/api/sifirla/dogrula", { kod: y2.govde?.kod, parola_hash: parolaHash("YeniParola99") });
if (s1.durum === 200) ok("sifre degistirildi");
else hata("sifre degistirilemedi", s1);
const g2 = await cagir("/api/giris/dogrula", { hesap_anahtar: HESAP, hesap_ad: "Zincir", tur: "cracked", parola_hash: parolaHash("YeniParola99") });
if (g2.govde?.dogrulandi) ok("yeni parolayla giris");
else hata("yeni parolayla giris yapilamadi", g2);

console.log("\nbitti.");
