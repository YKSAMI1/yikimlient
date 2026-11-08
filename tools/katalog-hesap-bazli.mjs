// kozmetik_katalog.rs: katalogı HESAP BAZLI yap.
// "aynı bilgisayarda farklı hesapların kayıtlı şeyleri birbirine görünmesin"
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(kok, "src-tauri/src/kozmetik_katalog.rs");
let t = fs.readFileSync(p, "utf8");

// 1) KATALOG yolu hesap bazlı olsun
const eski = `fn katalog_yol() -> PathBuf {
    kok().join("katalog.json")
}`;
const yeni = `fn katalog_yol() -> PathBuf {
    // v0.7.25: KATALOG da hesap bazlı — aynı bilgisayarda iki hesabın
    // kayıtlı kozmetikleri birbirine KARIŞMASIN.
    // Hesap yoksa eski (paylaşılan) yol kullanılır.
    kok().join(format!("katalog-{}.json", katalog_anahtari()))
}

/// Katalogun hesap anahtarı (boşsa paylaşılan/ortaş katalog).
fn katalog_anahtari() -> String {
    let a = hesap_anahtari();
    if a.is_empty() {
        return "ortak".to_string();
    }
    // dosya adında kullanılabilecek güvenli kimlik
    a.chars()
        .map(|c| if c.is_ascii_alphanumeric() || c == '-' || c == '_' { c } else { '_' })
        .collect()
}`;
if (t.includes(eski)) {
  t = t.replace(eski, yeni);
  console.log("1) katalog hesap bazli yapildi");
} else {
  console.log("1) katalog_yol bulunamadi (veya zaten degismis)");
}

// 2) İlk geçiş: var olan tek katalogı her hesaba KOPYALAMA — her hesap kendi
//    yolundan başlar (kullanıcı isterse kaydını taşırız).
// 3) ayri meta: katalog yoksa boş liste (hata değil)

fs.writeFileSync(p, t, "utf8");
console.log("kaydedildi");
