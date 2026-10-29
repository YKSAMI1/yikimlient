//! ROZET (isim başı logosu) — launcher tarafı.
//!
//! Modun okuduğu tek şey `.yikim/rozet.png` (8×8 ARGB) + presence sunucusu:
//!   1) Launcher'da çizilen logo TÜM kurulumların `.yikim/rozet.png` dosyasına
//!      yazılır → oyun açılınca mod onu kendi rozet glifine basar (yeniden
//!      başlatma bile gerekmez, heartbeat her 30 sn'de yeniden uygular).
//!   2) Aynı PNG presence sunucusuna yüklenir → aynı sunucudaki diğer
//!      YIKIMLient oyuncuları da o çizimi görür.
//!   3) Beyaz liste (izinli isimler) sunucuya yazılır; izni geri alınan
//!      oyuncunun çizimi sunucudan düşer.
//!
//! Tek doğruluk kaynağı launcher'dır: mod yalnızca okur, hiçbir isim
//! kendiliğinden listeye giremez.

use base64::Engine as _;
use image::ImageEncoder as _;

/// Sunucu ayarlı değilse kullanılan varsayılan uç (mod aynı adresi kullanır).
pub const VARSAYILAN_UCAK: &str = "https://yikim-presence.onrender.com/presence";

/// Rozet kanvası 8×8 — modun glif dokusuyla birebir aynı.
pub const BOY: u32 = 8;

/// Presence uç noktası: config'te geçerli bir http(s) adresi varsa o, yoksa varsayılan.
pub fn ucak(cfg: &crate::config::YikimConfig) -> String {
    cfg.presence_url
        .as_deref()
        .map(str::trim)
        .filter(|u| u.starts_with("http://") || u.starts_with("https://"))
        .unwrap_or(VARSAYILAN_UCAK)
        .to_string()
}

/// "#rrggbb" / "rrggbb" / "" (boş piksel) listesini 8×8 PNG'ye çevir.
pub fn pikselleri_png(pikseller: &[String]) -> Result<Vec<u8>, String> {
    if pikseller.len() != (BOY * BOY) as usize {
        return Err(format!("64 piksel bekleniyordu, {} geldi", pikseller.len()));
    }
    let mut resim = image::RgbaImage::new(BOY, BOY);
    for (i, ham) in pikseller.iter().enumerate() {
        let (x, y) = ((i as u32) % BOY, (i as u32) / BOY);
        let metin = ham.trim().trim_start_matches('#');
        if metin.is_empty() {
            resim.put_pixel(x, y, image::Rgba([0, 0, 0, 0]));
            continue;
        }
        if metin.len() != 6 {
            return Err(format!("geçersiz renk: {ham}"));
        }
        let oku = |s: &str| u8::from_str_radix(s, 16).map_err(|_| format!("geçersiz renk: {ham}"));
        let r = oku(&metin[0..2])?;
        let g = oku(&metin[2..4])?;
        let b = oku(&metin[4..6])?;
        resim.put_pixel(x, y, image::Rgba([r, g, b, 255]));
    }
    let mut cikti: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut cikti)
        .write_image(resim.as_raw(), BOY, BOY, image::ExtendedColorType::Rgba8)
        .map_err(|e| format!("png yazılamadı: {e}"))?;
    Ok(cikti)
}

/// PNG'yi tüm kurulumların `.yikim/rozet.png` dosyasına yaz.
/// Dönen sayı: yazılan kurulum adedi (hiç kurulum yoksa 0 — hata değil).
pub fn tum_kurulumlara_yaz(png: &[u8]) -> usize {
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_err() {
            continue;
        }
        if std::fs::write(dir.join("rozet.png"), png).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Tüm kurulumlardan rozet dosyasını sil (standart Y'ye dön).
pub fn tum_kurulumlardan_sil() -> usize {
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        let yol = inst.dir().join(".yikim").join("rozet.png");
        if std::fs::remove_file(&yol).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Kayıtlı rozeti oku (yol: ilk kurulumun .yikim/rozet.png). 64 renk döner.
pub fn yerel_rozet() -> Option<Vec<String>> {
    let inst = crate::instances::list().into_iter().next()?;
    let yol = inst.dir().join(".yikim").join("rozet.png");
    let img = image::open(&yol).ok()?.to_rgba8();
    if img.width() != BOY || img.height() != BOY {
        return None;
    }
    let mut out = Vec::with_capacity(64);
    for y in 0..BOY {
        for x in 0..BOY {
            let p = img.get_pixel(x, y);
            out.push(if p[3] < 8 {
                String::new()
            } else {
                format!("#{:02x}{:02x}{:02x}", p[0], p[1], p[2])
            });
        }
    }
    Some(out)
}

/// Çizimi presence sunucusuna yükle: {"u": uuid, "png": "<base64>"}.
/// Sunucu yoksa sessiz hata döner — yerel rozet yine geçerlidir.
pub async fn sunucuya_yukle(png: &[u8], uuid: &str, ucak: &str) -> Result<(), String> {
    if uuid.trim().is_empty() {
        return Err("hesap uuid yok".into());
    }
    let govde = serde_json::json!({
        "u": uuid.trim(),
        "png": base64::engine::general_purpose::STANDARD.encode(png),
    });
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

/// Rozeti sunucudan kaldır: {"u": uuid, "sil": true}.
pub async fn sunucudan_sil(uuid: &str, ucak: &str) -> Result<(), String> {
    let govde = serde_json::json!({ "u": uuid.trim(), "sil": true });
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

/// Beyaz listeyi sunucuya yaz: {"izinler": ["isim", ...]}.
/// Sunucu bu listeye göre çizim kabul eder ve listeden çıkanların çizimini siler.
pub async fn izin_listesi_yaz(isimler: &[String], ucak: &str) -> Result<(), String> {
    let temiz: Vec<String> = isimler
        .iter()
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty() && s.chars().count() <= 32)
        .collect();
    let govde = serde_json::json!({ "izinler": temiz });
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
