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
use std::sync::OnceLock;

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

/// Paketleyici ürün adı — Linux'ta kaynaklar `/usr/lib/<ürün>/` altına düşer.
const URUN_ADI: &str = "YIKIMLient";
const UYGULAMA_ID: &str = "com.yikimlient.app";

/// Tauri'nin KENDİ çözdüğü kaynak kökü (setup'ta bir kez yazılır).
/// Platform platform doğru yer: Windows NSIS → kurulum dizini,
/// Linux deb/AppImage → `/usr/lib/YIKIMLient` (AppImage'da mount içinde).
static KAYNAK_KOK: OnceLock<Option<PathBuf>> = OnceLock::new();
/// Gömülü UI klasörü çalışma boyunca sabittir → ilk aramada memoize edilir.
/// (Her dosya isteğinde onlarca stat çağrısı yapılmaz.)
static GOMULU: OnceLock<Option<PathBuf>> = OnceLock::new();

/// Bir kaynak kökünün ALTINDA arayüzün bulunabileceği konumlar.
/// Paketleyiciye göre `ui` ya da `resources/ui` — ikisi de denenir.
const KONUMLAR: [&str; 4] = ["ui", "resources/ui", "ui/resources/ui", "resources/resources/ui"];

/// Setup'tan çağrılır: Tauri'nin resource_dir'ini kaydeder.
pub fn kaynak_kok_kur(app: &tauri::AppHandle) {
    use tauri::Manager;
    let kok = app.path().resource_dir().ok();
    let _ = KAYNAK_KOK.set(kok);
}

/// Aranacak kaynak kökleri — ilk bulunan kazanır, sıra önemlidir.
fn kaynak_kokler() -> Vec<PathBuf> {
    let mut kokler: Vec<PathBuf> = Vec::new();
    // 1) Tauri'nin çözdüğü gerçek yer (en güvenilir)
    if let Some(Some(kok)) = KAYNAK_KOK.get() {
        kokler.push(kok.clone());
    }
    if let Ok(exe) = std::env::current_exe() {
        if let Some(ebeveyn) = exe.parent() {
            // Windows NSIS: <kurulum>/ , <kurulum>/resources
            kokler.push(ebeveyn.to_path_buf());
            kokler.push(ebeveyn.join("resources"));
            // Linux deb/AppImage: /usr/bin/../lib/<ürün> (Tauri resource_dir
            // bir sebeple boş dönerse ikinci emniyet kemeri)
            kokler.push(ebeveyn.join("../lib").join(URUN_ADI));
            kokler.push(ebeveyn.join("../lib").join(URUN_ADI.to_lowercase()));
            kokler.push(ebeveyn.join("../lib").join(UYGULAMA_ID));
            kokler.push(ebeveyn.join("../share").join(URUN_ADI));
            // macOS .app: <App>.app/Contents/Resources
            kokler.push(ebeveyn.join("../Resources"));
        }
    }
    // 2) AppImage: $APPDIR/usr/lib/<ürün>
    if let Ok(appdir) = std::env::var("APPDIR") {
        if !appdir.is_empty() {
            let k = PathBuf::from(&appdir);
            kokler.push(k.join("usr/lib").join(URUN_ADI));
            kokler.push(k.join("usr/lib"));
            kokler.push(k.join("usr/share").join(URUN_ADI));
            kokler.push(k.join("usr/lib").join(UYGULAMA_ID));
        }
    }
    // 3) Linux sistem kurulumları (paket yolunu bilmesek de bulunur)
    for sabit in [
        "/usr/lib/YIKIMLient",
        "/usr/lib/yikimlient",
        "/usr/lib/com.yikimlient.app",
        "/opt/YIKIMLient",
        "/usr/share/YIKIMLient",
    ] {
        kokler.push(PathBuf::from(sabit));
    }
    // 4) Geliştirme (cargo dev) ve taşınabilir çalıştırma
    kokler.push(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("resources"));
    if let Ok(gecici) = std::env::current_dir() {
        kokler.push(gecici.join("resources"));
        kokler.push(gecici);
    }
    kokler
}

/// Build anındaki gömülü kopya.
///
/// KRİTİK (v0.4.4): tauri.conf'taki `resources/ui/**/*` girdisi kurulumda
/// `<kaynak kökü>/resources/ui` altına düşer — `<kaynak kökü>/ui` DEĞİL.
///
/// KRİTİK (v0.4.10): Linux deb/AppImage'da kaynak kökü exe'nin YANI DEĞİL:
/// program `/usr/bin/yikimlient`, arayüz `/usr/lib/YIKIMLient/resources/ui`.
/// Eski kod yalnız `<exe>/resources` ve `<exe>/../Resources`'a bakıyordu →
/// her Linux kurulumunda arayüz bulunamıyor, uygulama BEYAZ EKRANDA kalıyordu
/// ("okuldaki cihazda çalışmıyor, arkadaşlarımda da oluyor"). Artık Tauri'nin
/// resource_dir'i + platform düzenleri birlikte denenir.
pub fn gomulu_ui_dir() -> Option<PathBuf> {
    GOMULU
        .get_or_init(|| koklerde_bul(&kaynak_kokler()))
        .clone()
}

/// Verilen köklerde arayüz klasörünü arar (test edilebilir çekirdek).
fn koklerde_bul(kokler: &[PathBuf]) -> Option<PathBuf> {
    for kok in kokler {
        for konum in KONUMLAR {
            let aday = kok.join(konum);
            if aday.join("index.html").is_file() {
                return Some(aday);
            }
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
    // Etkin taban + diğer taban (yarım kalmış sıcak paket için yedek).
    // Eski davranış: seçilen klasörde dosya yoksa 404 dönüyordu; sıcak paket
    // yarım indiğinde sayfa hiç açılmıyor ("UI kaynakları yüklenemedi").
    let secili = etkin_dir();
    let ana = match &secili {
        Some(t) => t.clone(),
        None => {
            // Ne gömülü arayüz ne sıcak paket var: ham metin yerine, ne
            // olduğunu söyleyen ve kendini onarmaya çalışan bir sayfa ver.
            // (Kurulum bozuksa kullanıcı beyaz ekranla değil, açıklamayla
            // karşılaşsın; sıcak paket sonradan inerse sayfa kendini yeniler.)
            return teshis_sayfasi("Arayüz paketi bulunamadı");
        }
    };
    let yedek = [gomulu_ui_dir(), aktif_dir()]
        .into_iter()
        .flatten()
        .find(|p| *p != ana);

    for taban in std::iter::once(&ana).chain(yedek.as_ref()) {
        if let Ok(bayt) = std::fs::read(taban.join(&yol)) {
            return HttpYanit::builder()
                .status(200)
                .header("Content-Type", mime(&yol))
                .header("Cache-Control", "no-store")
                .body(bayt)
                .unwrap();
        }
    }
    HttpYanit::builder()
        .status(404)
        .header("Content-Type", "text/plain; charset=utf-8")
        .body(format!("yok: {yol}").into_bytes())
        .unwrap()
}

/// Arayüz hiç bulunamadığında gösterilen kendi kendini onaran sayfa.
fn teshis_sayfasi(baslik: &str) -> HttpYanit<Vec<u8>> {
    let mut aranan = String::new();
    for kok in kaynak_kokler() {
        for konum in KONUMLAR {
            let p = kok.join(konum);
            aranan.push_str(&format!(
                "<li><code>{}</code> {}</li>",
                html_kacis(&p.display().to_string()),
                if p.join("index.html").is_file() { "✔" } else { "—" }
            ));
        }
    }
    let loglar = crate::core::app_dir().join("logs").display().to_string();
    let html = format!(
        "<!doctype html><html lang=\"tr\"><head><meta charset=\"utf-8\">\
<meta http-equiv=\"refresh\" content=\"4\">\
<title>YIKIMLient</title><style>\
html,body{{margin:0;height:100%;background:#0e0f13;color:#e8e6e3;\
font:14px/1.55 system-ui,-apple-system,Segoe UI,sans-serif}}\
.m{{max-width:760px;margin:0 auto;padding:48px 24px}}\
h1{{font-size:20px;margin:0 0 6px}}p,li{{color:#a9a6a0}}code{{color:#ffb020}}\
ul{{padding-left:18px}}.k{{border:1px solid #2a2c33;border-radius:10px;\
padding:14px 16px;margin:18px 0;background:#14161b}}\
.b{{display:inline-block;margin-top:10px;padding:9px 16px;border-radius:8px;\
background:#ffb020;color:#111;text-decoration:none;font-weight:600;cursor:pointer}}\
</style></head><body><div class=\"m\"><h1>{baslik}</h1>\
<p>Launcher arayüz dosyaları diskte bulunamadı. Bu genelde eksik/bozuk bir\
 kurulumdan olur; sayfa 4 saniyede bir kendini yeniden dener.</p>\
<div class=\"k\"><b>Aranan yerler</b><ul>{aranan}</ul></div>\
<p>Log klasörü: <code>{loglar}</code></p>\
<p>Launcher'ı kapatıp yeniden açmak da dener. Sorun sürerse kurulumu\
 kaldırıp <code>.exe</code> / <code>.deb</code> / <code>.AppImage</code>\
 paketini yeniden kur.</p>\
<a class=\"b\" href=\"index.html\">Yeniden dene</a></div></body></html>"
    );
    HttpYanit::builder()
        .status(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .header("Cache-Control", "no-store")
        .body(html.into_bytes())
        .unwrap()
}

/// HTML kaçışı — yol adları kullanıcı klasöründen gelebilir.
fn html_kacis(metin: &str) -> String {
    metin
        .replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
        .replace('"', "&quot;")
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

    /// Linux deb/AppImage düzeni: kaynak kökü `/usr/lib/YIKIMLient`, arayüz
    /// `resources/ui` altında. v0.4.10 öncesi bu düzen HİÇ bulunamıyordu.
    #[test]
    fn linux_deb_duzeni_bulunur() {
        let kok = std::env::temp_dir().join(format!("yikim-ui-deb-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&kok);
        let ui = kok.join("usr/lib/YIKIMLient/resources/ui");
        std::fs::create_dir_all(&ui).unwrap();
        std::fs::write(ui.join("index.html"), "<!doctype html>").unwrap();
        let bulunan = koklerde_bul(&[kok.join("usr/lib/YIKIMLient")]).unwrap();
        assert_eq!(bulunan, ui);
        let _ = std::fs::remove_dir_all(&kok);
    }

    /// Windows NSIS düzeni: kaynak kökü kurulum dizini, arayüz `resources/ui`.
    #[test]
    fn windows_duzeni_bulunur() {
        let kok = std::env::temp_dir().join(format!("yikim-ui-nsis-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&kok);
        let ui = kok.join("resources/ui");
        std::fs::create_dir_all(&ui).unwrap();
        std::fs::write(ui.join("index.html"), "<!doctype html>").unwrap();
        let bulunan = koklerde_bul(&[kok.clone()]).unwrap();
        assert_eq!(bulunan, ui);
        let _ = std::fs::remove_dir_all(&kok);
    }

    #[test]
    fn surum_dize_okunur() {
        assert_eq!(surum_from("0.3.40"), Some((0, 3, 40)));
        assert_eq!(surum_from("bozuk"), None);
    }
}
