//! KOZMETİK — özel pelerin ve elitra (launcher tarafı).
//!
//! Modun okuduğu tek şey iki dosya: `.yikim/pelerin.png` ve `.yikim/elytra.png`
//! (64×32 doku). Launcher artık kullanıcıdan HAZIR ATLASI alır: editör vanilla
//! `ModelPart` UV düzenini birebir gösterir, kullanıcı bütün yüzleri kendisi
//! boyar. Burada yalnız renk listesi ↔ PNG dönüşümü yapılır; hiçbir yüz
//! otomatik doldurulmaz (eskiden yan/alt yüzler türetiliyordu ve oyunda kötü
//! görünüyordu).
//!
//!   PELERİN  texOffs(0,0) 10×16×1        ELİTRA  texOffs(22,0) 10×20×2
//!   ön    (1,1) 10×16                    dış yüz (24,2) 10×20
//!   arka  (12,1) 10×16                   iç yüz  (36,2) 10×20
//!   yanlar (0,1) / (11,1) 1×16           yanlar  (22,2) / (34,2) 2×20
//!   üst   (1,0) 10×1                     üst     (24,0) 10×2
//!   alt   (11,0) 10×1                    alt     (34,0) 10×2
//!
//! Dosyalar tüm kurulumlara yazılır (rozet ile aynı mekanizma) ve presence
//! sunucusuna `kc` / `ke` alanlarıyla yüklenir → aynı sunucudaki diğer
//! YIKIMLient oyuncuları da görür.

use base64::Engine as _;
use image::ImageEncoder as _;

/// Doku boyutu — vanilla pelerin/elitra atlası.
pub const DOKU_G: u32 = 64;
pub const DOKU_Y: u32 = 32;
/// Bir atlastaki piksel sayısı (64×32).
pub const ATLAS_PIKSEL: usize = (DOKU_G * DOKU_Y) as usize;

/// Sunucu ayarlı değilse kullanılan varsayılan uç (mod aynı adresi kullanır).
pub const VARSAYILAN_UCAK: &str = "https://yikim-presence.onrender.com/presence";

/// Presence uç noktası: config'te geçerli bir http(s) adresi varsa o.
pub fn ucak(cfg: &crate::config::YikimConfig) -> String {
    cfg.presence_url
        .as_deref()
        .map(str::trim)
        .filter(|u| u.starts_with("http://") || u.starts_with("https://"))
        .unwrap_or(VARSAYILAN_UCAK)
        .to_string()
}

/// "#rrggbb" ya da "" (saydam) → RGBA.
fn hex_oku(ham: &str) -> Option<[u8; 4]> {
    let metin = ham.trim().trim_start_matches('#');
    if metin.is_empty() {
        return None; // boş piksel → saydam
    }
    if metin.len() != 6 {
        return None;
    }
    let parca = |s: &str| u8::from_str_radix(s, 16).ok();
    Some([
        parca(&metin[0..2])?,
        parca(&metin[2..4])?,
        parca(&metin[4..6])?,
        255,
    ])
}

fn png_kodla(img: &image::RgbaImage) -> Result<Vec<u8>, String> {
    let mut cikti: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut cikti)
        .write_image(img.as_raw(), DOKU_G, DOKU_Y, image::ExtendedColorType::Rgba8)
        .map_err(|e| format!("png yazılamadı: {e}"))?;
    Ok(cikti)
}

/// 64×32 renk listesini (satır satır, sol→sağ) PNG'ye çevir.
///
/// Her girdi "#rrggbb" ya da "" (saydam). Yüzler arasında hiçbir dönüşüm
/// yapılmaz — liste oyunun gördüğü atlasın birebir kendisidir.
pub fn atlas_png(pikseller: &[String]) -> Result<Vec<u8>, String> {
    if pikseller.len() != ATLAS_PIKSEL {
        return Err(format!(
            "{ATLAS_PIKSEL} piksel bekleniyordu, {} geldi",
            pikseller.len()
        ));
    }
    let mut pafta = image::RgbaImage::new(DOKU_G, DOKU_Y);
    for (i, ham) in pikseller.iter().enumerate() {
        let Some(renk) = hex_oku(ham) else { continue };
        let x = (i as u32) % DOKU_G;
        let y = (i as u32) / DOKU_G;
        pafta.put_pixel(x, y, image::Rgba(renk));
    }
    png_kodla(&pafta)
}

/// Bir 64×32 PNG dosyasını renk listesine geri oku. Farklı boyut → None.
fn paftadan_atlas(yol: &std::path::Path) -> Option<Vec<String>> {
    let img = image::open(yol).ok()?.to_rgba8();
    if img.width() != DOKU_G || img.height() != DOKU_Y {
        return None;
    }
    let mut cikti = Vec::with_capacity(ATLAS_PIKSEL);
    for p in img.pixels() {
        cikti.push(if p[3] < 8 {
            String::new()
        } else {
            format!("#{:02x}{:02x}{:02x}", p[0], p[1], p[2])
        });
    }
    Some(cikti)
}

fn ana_yol(ad: &str) -> std::path::PathBuf {
    crate::core::app_dir().join(ad)
}

fn kurulum_yolu(inst: &crate::instances::Instance, ad: &str) -> std::path::PathBuf {
    inst.dir().join(".yikim").join(ad)
}

/// 64×32 atlası ana kopyadan, yoksa kurulumlardan oku.
pub fn dosyadan_atlas(ad: &str) -> Option<Vec<String>> {
    if let Some(p) = paftadan_atlas(&ana_yol(ad)) {
        return Some(p);
    }
    for inst in crate::instances::list() {
        if let Some(p) = paftadan_atlas(&kurulum_yolu(&inst, ad)) {
            return Some(p);
        }
    }
    None
}

/// Kayıtlı pelerin atlası (2048 renk).
pub fn yerel_pelerin() -> Option<Vec<String>> {
    dosyadan_atlas("pelerin.png")
}

/// Kayıtlı elitra atlası (2048 renk).
pub fn yerel_kanat() -> Option<Vec<String>> {
    dosyadan_atlas("elytra.png")
}

/// PNG'yi ana kopyaya + tüm kurulumların `.yikim/` klasörüne yaz.
pub fn tum_kurulumlara_yaz(ad: &str, png: &[u8]) -> usize {
    let mut sayi = 0usize;
    if std::fs::write(ana_yol(ad), png).is_ok() {
        sayi += 1;
    }
    // Pasife alınmış kozmetik: ana kopya güncellenir ama oyuna yazılmaz.
    if !aktif(ad) {
        kurulumlardan_sil(ad);
        return sayi;
    }
    sayi + kurulumlara_yaz(ad, png)
}

/// PNG'yi yalnız kurulumların `.yikim/` klasörüne yaz (ana kopya dokunulmaz).
fn kurulumlara_yaz(ad: &str, png: &[u8]) -> usize {
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_err() {
            continue;
        }
        if std::fs::write(kurulum_yolu(&inst, ad), png).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Yalnız kurulum kopyalarını sil — ana kopya (düzenlenebilir tasarım) kalır.
pub fn kurulumlardan_sil(ad: &str) -> usize {
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        if std::fs::remove_file(kurulum_yolu(&inst, ad)).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// "Kapalı" işareti: ana kopya dursa da oyunda vanilla görünüm kullanılır.
fn kapali_yol(ad: &str) -> std::path::PathBuf {
    ana_yol(&format!("{ad}.kapali"))
}

/// Kozmetik oyunda etkin mi? (işaret dosyası yoksa etkin)
pub fn aktif(ad: &str) -> bool {
    !kapali_yol(ad).exists()
}

/// Etkin/pasif ayarını yazıp kurulum dosyalarını buna göre güncelle.
pub fn aktif_ayarla(ad: &str, acik: bool) -> Result<(), String> {
    if acik {
        let _ = std::fs::remove_file(kapali_yol(ad));
        if let Ok(png) = std::fs::read(ana_yol(ad)) {
            kurulumlara_yaz(ad, &png);
        }
    } else {
        std::fs::write(kapali_yol(ad), b"").map_err(|e| format!("işaret yazılamadı: {e}"))?;
        kurulumlardan_sil(ad);
    }
    Ok(())
}

/// Ana kopyanın base64 hâli (etkinleştirince sunucuya geri yüklemek için).
pub fn ana_b64(ad: &str) -> Option<String> {
    std::fs::read(ana_yol(ad)).ok().map(|png| b64(&png))
}

/// Ana kopyayı ve tüm kurulumlardaki dosyayı sil.
pub fn tum_kurulumlardan_sil(ad: &str) -> usize {
    let mut sayi = 0usize;
    // Kozmetik tamamen kaldırılırken "kapalı" işareti de silinir.
    let _ = std::fs::remove_file(kapali_yol(ad));
    if std::fs::remove_file(ana_yol(ad)).is_ok() {
        sayi += 1;
    }
    for inst in crate::instances::list() {
        if std::fs::remove_file(kurulum_yolu(&inst, ad)).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Kozmetikleri presence sunucusuna yaz.
///
/// `pelerin` / `kanat`: base64 PNG, `Some("")` → sunucudan kaldır, `None` →
/// dokunma. Sunucu yoksa sessiz hata — yerel dosya yine geçerlidir.
pub async fn sunucuya_yukle(
    uuid: &str,
    isim: &str,
    pelerin: Option<String>,
    kanat: Option<String>,
    ucak: &str,
) -> Result<(), String> {
    if uuid.trim().is_empty() {
        return Err("hesap uuid yok".into());
    }
    let mut govde = serde_json::json!({ "u": uuid.trim(), "n": isim.trim() });
    if let Some(p) = pelerin {
        govde["kc"] = serde_json::Value::String(p);
    }
    if let Some(k) = kanat {
        govde["ke"] = serde_json::Value::String(k);
    }
    let yanit = crate::core::http_client()
        .post(ucak)
        .json(&govde)
        .timeout(std::time::Duration::from_secs(8))
        .send()
        .await
        .map_err(|e| format!("sunucuya ulaşılamadı: {e}"))?;
    if !yanit.status().is_success() {
        return Err(format!("sunucu {} döndü", yanit.status()));
    }
    Ok(())
}

/// PNG'yi base64'e çevir (sunucu alanı için).
pub fn b64(png: &[u8]) -> String {
    base64::engine::general_purpose::STANDARD.encode(png)
}

/// Gidiş-dönüş testleri: atlasın bozulmadan yazılıp okunduğunu doğrular.
#[cfg(test)]
mod testler {
    use super::*;

    fn boya(liste: &mut [String], x: u32, y: u32, renk: &str) {
        liste[(y * DOKU_G + x) as usize] = renk.to_string();
    }

    fn piksel(png: &[u8], x: u32, y: u32) -> [u8; 4] {
        let img = image::load_from_memory(png).expect("png").to_rgba8();
        img.get_pixel(x, y).0
    }

    #[test]
    fn atlas_png_birebir() {
        let mut liste = vec![String::new(); ATLAS_PIKSEL];
        boya(&mut liste, 0, 0, "#ff8a3d");
        boya(&mut liste, 1, 1, "#22c55e");
        boya(&mut liste, 45, 21, "#3d5afe");
        let png = atlas_png(&liste).expect("atlas");
        assert_eq!(piksel(&png, 0, 0), [0xff, 0x8a, 0x3d, 0xff]);
        assert_eq!(piksel(&png, 1, 1), [0x22, 0xc5, 0x5e, 0xff]);
        assert_eq!(piksel(&png, 45, 21), [0x3d, 0x5a, 0xfe, 0xff]);
        // dokunulmayan piksel saydam kalmalı
        assert_eq!(piksel(&png, 63, 31)[3], 0);
    }

    #[test]
    fn atlas_boyut_hatasi() {
        let liste = vec![String::new(); 10];
        assert!(atlas_png(&liste).is_err());
    }

    #[test]
    fn gidis_donus_ayni() {
        let mut liste = vec![String::new(); ATLAS_PIKSEL];
        boya(&mut liste, 24, 2, "#46515d");
        boya(&mut liste, 36, 20, "#77889a");
        let png = atlas_png(&liste).expect("atlas");
        let tmp = std::env::temp_dir().join("yikim-kozmetik-atlas-test.png");
        std::fs::write(&tmp, &png).expect("yaz");
        let geri = paftadan_atlas(&tmp).expect("okunamadı");
        let _ = std::fs::remove_file(&tmp);
        assert_eq!(geri.len(), ATLAS_PIKSEL);
        assert_eq!(geri[(2 * DOKU_G + 24) as usize], "#46515d");
        assert_eq!(geri[(20 * DOKU_G + 36) as usize], "#77889a");
        assert_eq!(geri[(0 * DOKU_G + 0) as usize], "");
    }
}
