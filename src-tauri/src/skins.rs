// SKIN MERKEZİ — Mojang skin/pelerin API'si + yerel skin kitaplığı.
//
// Yerleşim:
//   %APPDATA%\.yikimlient\skins\index.json   → kayıt listesi
//   %APPDATA%\.yikimlient\skins\<id>.png     → skin dosyaları
//   %APPDATA%\.yikimlient\skins\yedek\       → giymeden önceki skin
//
// Tüm dosya işlemleri bu kök altında; `..`, `/`, `\` reddedilir.

use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};

/// Kitaba kaydedilmiş tek skin.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct SkinKayit {
    pub id: String,
    pub ad: String,
    pub dosya: String,
    pub slim: bool,
    pub kaynak: String,
    pub tarih: i64,
}

/// PNG doğrular; 64×64 veya 64×32 kabul eder, PNG baytları döner.
/// 64 KB üstü dosyalar kayıpsız yeniden kodlanır (gövde şişmesin).
pub fn dogrula_png(veri: &[u8]) -> Result<Vec<u8>, String> {
    let img = image::load_from_memory_with_format(veri, image::ImageFormat::Png)
        .map_err(|_| "Bu dosya geçerli bir PNG değil.".to_string())?;
    let (w, h) = (img.width(), img.height());
    if w != 64 || (h != 64 && h != 32) {
        return Err(format!(
            "Skin 64×64 veya 64×32 olmalı (bu dosya {w}×{h})."
        ));
    }
    if veri.len() <= 64 * 1024 {
        return Ok(veri.to_vec());
    }
    let mut out = std::io::Cursor::new(Vec::new());
    img.write_to(&mut out, image::ImageFormat::Png)
        .map_err(|e| format!("Skin yeniden kodlanamadı: {e}"))?;
    Ok(out.into_inner())
}

/// Kayıt kimliği yalnız 32/36 karakterlik hex UUID olabilir.
pub fn guvenli_id(id: &str) -> bool {
    let s = id.trim();
    if s.len() == 36 {
        let baytlar: Vec<char> = s.chars().collect();
        let tireler = [8usize, 13, 18, 23];
        for (i, c) in baytlar.iter().enumerate() {
            if tireler.contains(&i) {
                if *c != '-' {
                    return false;
                }
            } else if !c.is_ascii_hexdigit() {
                return false;
            }
        }
        true
    } else if s.len() == 32 {
        s.chars().all(|c| c.is_ascii_hexdigit())
    } else {
        false
    }
}

fn indeks_yolu(kok: &Path) -> PathBuf {
    kok.join("index.json")
}

/// Kitaplığı okur; dosya yok veya bozuksa boş liste döner.
pub fn kitaplik_oku(kok: &Path) -> Vec<SkinKayit> {
    let yol = indeks_yolu(kok);
    let ham = match std::fs::read(&yol) {
        Ok(v) => v,
        Err(_) => return Vec::new(),
    };
    let mut liste: Vec<SkinKayit> = match serde_json::from_slice(&ham) {
        Ok(v) => v,
        Err(_) => return Vec::new(),
    };
    // Var olmayan dosyalara işaret eden kayıtları gizle (kullanıcı elle silmiş olabilir).
    liste.retain(|k| Path::new(&k.dosya).exists());
    liste
}

/// Kitaplığı atomik yazar (`.yari` → rename).
pub fn kitaplik_yaz(kok: &Path, liste: &[SkinKayit]) -> Result<(), String> {
    std::fs::create_dir_all(kok).map_err(|e| format!("Skin klasörü açılamadı: {e}"))?;
    let govde = serde_json::to_vec_pretty(liste).map_err(|e| format!("İndeks yazılamadı: {e}"))?;
    atomik_yaz(&indeks_yolu(kok), &govde)
}

fn atomik_yaz(yol: &Path, veri: &[u8]) -> Result<(), String> {
    let gecici = yol.with_extension("yari");
    std::fs::write(&gecici, veri).map_err(|e| format!("Dosya yazılamadı: {e}"))?;
    if yol.exists() {
        let _ = std::fs::remove_file(yol);
    }
    std::fs::rename(&gecici, yol).map_err(|e| format!("Dosya taşınamadı: {e}"))
}

/// Yeni skin kaydı ekler: doğrular, dosyayı yazar, indeksi günceller.
pub fn kayit_ekle(
    kok: &Path,
    ad: &str,
    veri: &[u8],
    slim: bool,
    kaynak: &str,
) -> Result<SkinKayit, String> {
    let png = dogrula_png(veri)?;
    std::fs::create_dir_all(kok).map_err(|e| format!("Skin klasörü açılamadı: {e}"))?;
    let id = uuid::Uuid::new_v4().to_string();
    let dosya = kok.join(format!("{id}.png"));
    atomik_yaz(&dosya, &png)?;

    let temiz_ad = ad.trim();
    let kayit = SkinKayit {
        id,
        ad: if temiz_ad.is_empty() {
            "Skin".to_string()
        } else {
            temiz_ad.chars().take(48).collect()
        },
        dosya: dosya.to_string_lossy().to_string(),
        slim,
        kaynak: if kaynak.trim().is_empty() {
            "editor".to_string()
        } else {
            kaynak.trim().to_string()
        },
        tarih: crate::core::now_millis(),
    };

    let mut liste = kitaplik_oku(kok);
    liste.insert(0, kayit.clone());
    kitaplik_yaz(kok, &liste)?;
    Ok(kayit)
}

/// Kaydı ve dosyasını siler. Güvenli olmayan kimlikte `false`.
pub fn kayit_sil(kok: &Path, id: &str) -> bool {
    if !guvenli_id(id) {
        return false;
    }
    let mut liste = kitaplik_oku(kok);
    let once = liste.len();
    let dosya = kok.join(format!("{id}.png"));
    liste.retain(|k| k.id != id);
    let _ = std::fs::remove_file(&dosya);
    if liste.len() == once {
        return false;
    }
    kitaplik_yaz(kok, &liste).is_ok()
}

/// Kaydın dosya yolu; kimlik güvenli değilse hata.
pub fn kayit_dosya(kok: &Path, id: &str) -> Result<PathBuf, String> {
    if !guvenli_id(id) {
        return Err("Geçersiz skin kimliği.".to_string());
    }
    Ok(kok.join(format!("{id}.png")))
}

#[cfg(test)]
mod testler {
    use super::*;
    use std::path::PathBuf;

    fn gecici_dizin(ad: &str) -> PathBuf {
        let d = std::env::temp_dir().join(format!(
            "yikim-skins-{}-{}-{}",
            ad,
            std::process::id(),
            crate::core::now_millis()
        ));
        let _ = std::fs::remove_dir_all(&d);
        std::fs::create_dir_all(&d).unwrap();
        d
    }

    fn png_uret(w: u32, h: u32) -> Vec<u8> {
        let mut img = image::RgbaImage::new(w, h);
        for (x, y, p) in img.enumerate_pixels_mut() {
            *p = image::Rgba([(x % 256) as u8, (y % 256) as u8, 128, 255]);
        }
        let mut out = std::io::Cursor::new(Vec::new());
        image::DynamicImage::ImageRgba8(img)
            .write_to(&mut out, image::ImageFormat::Png)
            .unwrap();
        out.into_inner()
    }

    fn boyut(veri: &[u8]) -> (u32, u32) {
        let img = image::load_from_memory(veri).unwrap();
        (img.width(), img.height())
    }

    #[test]
    fn dogrula_png_64x64_kabul() {
        let cikti = dogrula_png(&png_uret(64, 64)).expect("64x64 kabul edilmeli");
        assert_eq!(boyut(&cikti), (64, 64));
    }

    #[test]
    fn dogrula_png_64x32_kabul() {
        let cikti = dogrula_png(&png_uret(64, 32)).expect("eski 64x32 kabul edilmeli");
        assert_eq!(boyut(&cikti), (64, 32));
    }

    #[test]
    fn dogrula_png_yanlis_boyut_red() {
        assert!(dogrula_png(&png_uret(32, 32)).is_err());
        assert!(dogrula_png(&png_uret(128, 128)).is_err());
        assert!(dogrula_png(&png_uret(64, 16)).is_err());
    }

    #[test]
    fn dogrula_png_bozuk_bayt_red() {
        assert!(dogrula_png(b"bu bir png degil").is_err());
        assert!(dogrula_png(&[]).is_err());
    }

    #[test]
    fn guvenli_id_dogru_karar_verir() {
        assert!(guvenli_id("069a79f4-44e9-4726-a5be-fca90e38aaf5"));
        assert!(guvenli_id("069a79f444e94726a5befca90e38aaf5"));
        assert!(!guvenli_id(".."));
        assert!(!guvenli_id("a/b"));
        assert!(!guvenli_id("a\\b"));
        assert!(!guvenli_id("abc"));
        assert!(!guvenli_id(""));
        assert!(!guvenli_id("069a79f4-44e9-4726-a5be-fca90e38aaf"));
        assert!(!guvenli_id("zzzzzzzz-44e9-4726-a5be-fca90e38aaf5"));
    }

    #[test]
    fn kayit_ekle_ve_oku() {
        let kok = gecici_dizin("ekle");
        let kayit = kayit_ekle(&kok, "Test Skin", &png_uret(64, 64), true, "editor").unwrap();
        assert_eq!(kayit.ad, "Test Skin");
        assert!(kayit.slim);
        assert!(PathBuf::from(&kayit.dosya).exists());
        assert_eq!(kayit.kaynak, "editor");

        let liste = kitaplik_oku(&kok);
        assert_eq!(liste.len(), 1);
        assert_eq!(liste[0].id, kayit.id);
        assert_eq!(liste[0].ad, "Test Skin");
    }

    #[test]
    fn kayit_ekle_ad_bos_ise_varsayilan() {
        let kok = gecici_dizin("bosad");
        let kayit = kayit_ekle(&kok, "   ", &png_uret(64, 64), false, "editor").unwrap();
        assert!(!kayit.ad.is_empty());
    }

    #[test]
    fn kayit_sil_dosya_ve_indeks_temizler() {
        let kok = gecici_dizin("sil");
        let a = kayit_ekle(&kok, "A", &png_uret(64, 64), false, "editor").unwrap();
        let b = kayit_ekle(&kok, "B", &png_uret(64, 32), false, "editor").unwrap();
        assert!(kayit_sil(&kok, &a.id));
        assert!(!PathBuf::from(&a.dosya).exists());
        let liste = kitaplik_oku(&kok);
        assert_eq!(liste.len(), 1);
        assert_eq!(liste[0].id, b.id);
        assert!(!kayit_sil(&kok, ".."));
    }

    #[test]
    fn bozuk_indeks_bos_liste_doner() {
        let kok = gecici_dizin("bozuk");
        std::fs::write(kok.join("index.json"), b"{ bu json degil").unwrap();
        assert!(kitaplik_oku(&kok).is_empty());
    }

    #[test]
    fn kayit_dosya_guvenlik_kontrolu() {
        let kok = gecici_dizin("dosya");
        assert!(kayit_dosya(&kok, "..").is_err());
        assert!(kayit_dosya(&kok, "069a79f4-44e9-4726-a5be-fca90e38aaf5").is_ok());
    }
}
