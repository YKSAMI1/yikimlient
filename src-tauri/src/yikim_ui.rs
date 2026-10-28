//! YIKIM ARA YÜZ DOSYA SUNUCUSU ("yikim" protokolü) — v0.3.39+.
//!
//! Amaç: launcher arayüzü (tema/sayfalar vb.) 20 dakikalık exe derlemesi
//! olmadan sıcak kanalla güncellenebilir olsun. Ana pencere artık gömülü
//! asset'leri değil, bu dosya sunucusundan yüklenir:
//!
//!   1) "<app_dir>/ui/aktif"     — sıcak kanaldan gelmiş UI paketi (yeniysen öncelikli)
//!   2) "<resources>/ui"         — build anındaki gömülü kopya (yedek)
//!
//! Rust kodu değişmedikçe (cmd_* API'leri dengede kaldıkça) UI değişiklikleri
//! dakikalar içinde dağıtılır: tools/sicak-ui.ps1 → sicak.json "kaynaklar"
//! → launcher indirir/doğrular → sonraki açılışta yeni yüz uygulanır.
//!
//! Güvenlik: yol temizliği (".." yasak; klasör dışına çıkılmaz), uzantı
//! tabanlı sıkı MIME tablosu, sıcak paket sha256 doğrulamalı gelir
//! (yikim_sicak içinde). UI değişimi pencere açıkken uygulanmaz; her zaman
//! sonraki açılışta — kararsızlık yok, yarı yüz yok.

use std::path::{Path, PathBuf};

use tauri::http::{Request as HttpIstem, Response as HttpYanit};

/// Ana pencerenin URL'si (tauri.conf'taki ile eşleşmeli; Windows WebView2
/// kuralı: http://<scheme>.localhost).
// Windows'ta WebView2 custom scheme'i http://<scheme>.localhost'a map'ler;
// Linux'ta (WebKitGTK) sadece scheme'i kendisi çalışır — URL pencereden
// platforma göre farklı gelir (tauri.linux.conf.json Linux'ta override eder).
#[cfg(target_os = "linux")]
pub const ORIGIN_URL: &str = "yikim://localhost/index.html";
#[cfg(not(target_os = "linux"))]
pub const ORIGIN_URL: &str = "http://yikim.localhost/index.html";

// ---------------------------------------------------------------------------
// tabanlar
// ---------------------------------------------------------------------------

/// Sıcak kanaldan gelmiş UI paketinin klasörü (aktif.json → klasor adı).
pub fn aktif_dir() -> Option<PathBuf> {
    let kok = crate::core::app_dir().join("ui");
    let bayt = std::fs::read(kok.join("aktif.json")).ok()?;
    let js: serde_json::Value = serde_json::from_slice(&bayt).ok()?;
    let klasor = js["klasor"].as_str()?.to_string();
    if klasor.is_empty() || klasor.contains("..") || klasor.contains('/') {
        return None; // bozuk kayıt — gömülüye düş
    }
    let yol = kok.join(&klasor);
    if yol.join("index.html").is_file() {
        Some(yol)
    } else {
        None
    }
}

/// Build anındaki gömülü kopya: `resources/ui` (yerleşim mods klasörü gibi
/// platformdan platforma değişir — sınırlı derinlikte arama).
pub fn gomulu_ui_dir() -> Option<PathBuf> {
    let mut kokler: Vec<PathBuf> = Vec::new();
    if let Ok(exe) = std::env::current_exe() {
        if let Some(ebeveyn) = exe.parent() {
            kokler.push(ebeveyn.to_path_buf());
        }
    }
    // geliştirme (cargo dev) yedeği — derleme anı yolu
    kokler.push(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("resources"));
    for kok in &kokler {
        let aday = kok.join("ui");
        if aday.join("index.html").is_file() {
            return Some(aday);
        }
    }
    None
}

/// "0.3.40" biçimli sürümü sayısala çevirir (karşılaştırma için).
pub fn surum_from(adi: &str) -> Option<(u32, u32, u32)> {
    crate::yikim_mod::parse_version(adi)
}

/// Bir UI klasörünün sürümü: içindeki `surum.txt` okunur.
fn surum_of(dir: &Path) -> Option<(u32, u32, u32)> {
    let bayt = std::fs::read(dir.join("surum.txt")).ok()?;
    let metin = String::from_utf8(bayt).ok()?;
    crate::yikim_mod::parse_version(metin.trim())
}

/// Şu an ETKİN UI klasörü: sıcak aktif, gömülü olandan yeni/eşitse disk;
/// eskiyse gömülü. (UI güncellemeleri sonraki açılışta uygulanır.)
pub fn etkin_dir() -> Option<PathBuf> {
    match (aktif_dir(), gomulu_ui_dir()) {
        (Some(disk), Some(kaynak)) => {
            let d = surum_of(&disk);
            let k = surum_of(&kaynak);
            match (d, k) {
                (Some(dv), Some(kv)) => Some(if dv >= kv { disk } else { kaynak }),
                (Some(_), None) => Some(disk),
                (None, _) => Some(kaynak),
            }
        }
        (Some(disk), None) => Some(disk),
        (None, Some(kaynak)) => Some(kaynak),
        (None, None) => None,
    }
}

// ---------------------------------------------------------------------------
// MIME tablosu
// ---------------------------------------------------------------------------

fn mime(dosya: &str) -> &'static str {
    let kucuk = dosya.to_lowercase();
    if kucuk.ends_with(".html") {
        return "text/html; charset=utf-8";
    }
    if kucuk.ends_with(".js") || kucuk.ends_with(".mjs") {
        return "text/javascript; charset=utf-8";
    }
    if kucuk.ends_with(".css") {
        return "text/css; charset=utf-8";
    }
    if kucuk.ends_with(".svg") {
        return "image/svg+xml";
    }
    if kucuk.ends_with(".png") {
        return "image/png";
    }
    if kucuk.ends_with(".jpg") || kucuk.ends_with(".jpeg") {
        return "image/jpeg";
    }
    if kucuk.ends_with(".webp") {
        return "image/webp";
    }
    if kucuk.ends_with(".gif") {
        return "image/gif";
    }
    if kucuk.ends_with(".ico") {
        return "image/x-icon";
    }
    if kucuk.ends_with(".woff2") {
        return "font/woff2";
    }
    if kucuk.ends_with(".woff") {
        return "font/woff";
    }
    if kucuk.ends_with(".ttf") {
        return "font/ttf";
    }
    if kucuk.ends_with(".json") {
        return "application/json";
    }
    if kucuk.ends_with(".txt") {
        return "text/plain; charset=utf-8";
    }
    "application/octet-stream"
}

// ---------------------------------------------------------------------------
// istek işleme
// ---------------------------------------------------------------------------

/// Protokol handler'ı — ana penceredeki her dosya isteği buraya düşer.
pub fn sunuc(istek: HttpIstem<Vec<u8>>) -> HttpYanit<Vec<u8>> {
    let yol_ham = istek.uri().path().to_string();
    let mut yol = decode_yol(&yol_ham);
    while yol.starts_with('/') {
        yol.remove(0);
    }
    if yol.is_empty() {
        yol.push_str("index.html");
    }
    // Güvenlik: yol taşma denemeleri kapıdan geçmez
    if yol.contains("..") || yol.contains('\\') {
        return HttpYanit::builder()
            .status(404)
            .header("Content-Type", "text/plain; charset=utf-8")
            .body(b"gecersiz yol".to_vec())
            .unwrap();
    }
    let hedef = match etkin_dir() {
        Some(taban) => taban.join(&yol),
        None => {
            return HttpYanit::builder()
                .status(500)
                .header("Content-Type", "text/plain; charset=utf-8")
                .body(b"ui kaynaklari bulunamadi".to_vec())
                .unwrap()
        }
    };
    match std::fs::read(&hedef) {
        Ok(bayt) => HttpYanit::builder()
            .status(200)
            .header("Content-Type", mime(&yol))
            .header("Cache-Control", "no-store")
            .body(bayt)
            .unwrap(),
        Err(_) => HttpYanit::builder()
            .status(404)
            .header("Content-Type", "text/plain; charset=utf-8")
            .body(format!("yok: {yol}").into_bytes())
            .unwrap(),
    }
}

/// Basit yüzde çözümü (%XX) — dist dosya adları ASCII; güvenli, atla-yoksa
/// orijinali basar.
pub fn decode_yol(yol: &str) -> String {
    let bayt = yol.as_bytes();
    let mut out: Vec<u8> = Vec::with_capacity(bayt.len());
    let mut i = 0;
    while i < bayt.len() {
        if bayt[i] == b'%' && i + 2 < bayt.len() {
            if let (Some(h1), Some(h2)) = (hex_digit_value(bayt[i + 1]), hex_digit_value(bayt[i + 2]))
            {
                out.push(h1 * 16 + h2);
                i += 3;
                continue;
            }
        }
        out.push(bayt[i]);
        i += 1;
    }
    String::from_utf8_lossy(&out).into_owned()
}

fn hex_digit_value(c: u8) -> Option<u8> {
    match c {
        b'0'..=b'9' => Some(c - b'0'),
        b'a'..=b'f' => Some(c - b'a' + 10),
        b'A'..=b'F' => Some(c - b'A' + 10),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn mime_tablosu() {
        assert_eq!(mime("a.html"), "text/html; charset=utf-8");
        assert_eq!(mime("b.JS"), "text/javascript; charset=utf-8");
        assert_eq!(mime("c.css"), "text/css; charset=utf-8");
        assert_eq!(mime("d.png"), "image/png");
        assert_eq!(mime("e.woff2"), "font/woff2");
        assert_eq!(mime("bilinmeyen.xyz"), "application/octet-stream");
    }

    #[test]
    fn naive_decode() {
        assert_eq!(decode_yol("/a%20b.js"), "/a b.js");
        assert_eq!(decode_yol("/c/def.html"), "/c/def.html");
        assert_eq!(decode_yol("/k%C5%9F.html"), "/kş.html");
    }

    #[test]
    fn surum_dize_okunur() {
        assert_eq!(surum_from("0.3.40"), Some((0, 3, 40)));
        assert_eq!(surum_from("bozuk"), None);
    }
}
