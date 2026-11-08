// Kullanıcının gerçek Discord akışını izle: /bagla onayı → bağlantı satırı.
// Bağlantı görülünce çıkar ve yazar (arkaplandığında beni haberdar eder).
import { DatabaseSync } from "node:sqlite";

const DB = "C:/Users/USER/AppData/Roaming/.yikimlient/guvenlik-api/guvenlik.db";
const db = new DatabaseSync(DB);
const BASLANGIC = Date.now();
const HEDEF_AD = process.env.YIKIM_IZLE_AD || "YKSAMI1";

console.log("izleniyor: kullanıcı /bagla yaptığında bağlantı satırı bekleniyor…");
console.log("başlangıç:", new Date(BASLANGIC).toLocaleTimeString());

// kullanıcının hesabı hangisi? (adı bilinmeyebilir — hesapları listele)
const hesaplar = () => {
  try {
    return db.prepare("SELECT anahtar, ad, tur, sifre_var FROM hesap ORDER BY rowid DESC LIMIT 10").all();
  } catch { return []; }
};
console.log("bilinen hesaplar:", JSON.stringify(hesaplar()));

const bul = () => {
  // yeni bağlantı satırı
  const b = db.prepare("SELECT * FROM baglanti WHERE tarih >= ? ORDER BY rowid DESC LIMIT 1").get(BASLANGIC);
  // yeni kod kullanımı
  const k = db.prepare("SELECT * FROM baglama_kod WHERE kullanildi = 1 AND olusturma >= ? ORDER BY rowid DESC LIMIT 1").get(BASLANGIC);
  // olaylar
  const o = db.prepare("SELECT tur, hesap_anahtar, detay, tarih FROM olay WHERE tarih >= ? ORDER BY id DESC LIMIT 6").all(BASLANGIC);
  return { b, k, o };
};

let sonDurum = "";
const iv = setInterval(() => {
  const s = bul();
  const izgi = JSON.stringify({ baglanti: !!s.b, kod: !!s.k, olay: s.o.length });
  if (izgi !== sonDurum) {
    sonDurum = izgi;
    console.log(new Date().toLocaleTimeString(), izgi);
    for (const x of s.o) console.log("   olay:", x.tur, x.hesap_anahtar || "-", x.detay || "");
  }
  if (s.b) {
    clearInterval(iv);
    console.log("\nBAĞLANDI ✓");
    console.log(JSON.stringify(s.b, null, 2));
    process.exit(0);
  }
  if (Date.now() - BASLANGIC > 4 * 60 * 1000) {
    clearInterval(iv);
    console.log("\n4 dakika doldu — kullanıcı adımı tamamlamadı (ya da farklı yolden denedi).");
    for (const x of s.o) console.log("   olay:", x.tur, x.hesap_anahtar || "-", x.detay || "");
    process.exit(1);
  }
}, 2000);
void HEDEF_AD;
