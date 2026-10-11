//! Oyun ayar profili — her başlatmada options.txt'ye yazılır.
//!
//! Performans sözü: sınırsız FPS (260 = UNLIMITED_FRAMERATE_CUTOFF), VSync kapalı,
//! Türkçe arayüz ve PVP odaklı erişilebilirlik (tüm sarsıntı efektleri kapalı).
//! Yalnızca bu anahtarlar zorlanır; kullanıcının diğer ayarları (tuşlar, ses,
//! render mesafesi, sunucu listesi…) olduğu gibi korunur.

use crate::core::yikim_log;
use std::path::Path;

/// Her açılışta zorlanan ayarlar (options.txt anahtarı, değer).
pub const FORCED_OPTIONS: &[(&str, &str)] = &[
    ("lang", "tr_tr"),             // oyun dili: Türkçe (1.20.5+ küçük harf kod)
    ("maxFps", "260"),             // 260 = sınırsız (oyun içinde "Sınırsız" görünür)
    ("enableVsync", "false"),      // dikey senkronizasyon kapalı
    ("inactivityFpsLimit", "\"minimized\""), // 1.21.2+ AFK sınırlayıcı: oyuncu hareketsizken 200 FPS'e düşürür!
                                           // şartname §3.2.3: sınır YALNIZCA pencere küçültülünce → "minimized"
    ("guiScale", "2"),             // arayüz ölçeği: 2
    ("fovEffectScale", "0.0"),    // erişilebilirlik: FOV efektleri kapalı
    ("screenEffectScale", "0.0"), // erişilebilirlik: sarsıntı/bulanıklık efektleri kapalı
    ("damageTiltStrength", "0.0"), // erişilebilirlik: hasar sarsıntısı kapalı
];

/// Oyun klasörünün options.txt'sine profil anahtarlarını yaz (idempotent).
/// Dosya yoksa oluşturulur; varsa yalnızca listedeki anahtarlar güncellenir.
/// Hata oyunu ASLA engellemez — yalnızca loglanır.
pub fn ensure_profile(game_dir: &Path) {
    let path = game_dir.join("options.txt");
    let mut lines: Vec<String> = std::fs::read_to_string(&path)
        .map(|t| t.lines().map(str::to_string).collect())
        .unwrap_or_default();
    let mut changed = 0usize;
    for (key, value) in FORCED_OPTIONS {
        let wanted = format!("{key}:{value}");
        let mut found = false;
        for line in lines.iter_mut() {
            if line.split(':').next().map(str::trim) == Some(*key) {
                found = true;
                if *line != wanted {
                    *line = wanted.clone();
                    changed += 1;
                }
                break;
            }
        }
        if !found {
            lines.push(wanted);
            changed += 1;
        }
    }
    if changed == 0 {
        return; // profil zaten geçerli
    }
    let mut out = lines.join("\n");
    out.push('\n');
    match std::fs::write(&path, out) {
        Ok(()) => yikim_log(format!("oyun ayar profili yazıldı: {changed} anahtar (options.txt)")),
        Err(e) => yikim_log(format!("oyun ayar profili yazılamadı: {e}")),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn profil_yazar_ve_kullanici_satirlarini_korur() {
        let dir = std::env::temp_dir().join(format!("yikim-opt-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        std::fs::create_dir_all(&dir).unwrap();
        // mevcut kullanıcı dosyası: tuşlar ve render mesafesi korunmalı
        std::fs::write(
            dir.join("options.txt"),
            "version:4440\nrenderDistance:12\nkey_key.attack:key.mouse.left\nmaxFps:120\n",
        )
        .unwrap();
        ensure_profile(&dir);
        let out = std::fs::read_to_string(dir.join("options.txt")).unwrap();
        assert!(out.contains("version:4440"));
        assert!(out.contains("renderDistance:12"));
        assert!(out.contains("key_key.attack:key.mouse.left"));
        assert!(out.contains("lang:tr_tr"));
        assert!(out.contains("maxFps:260"));
        assert!(out.contains("enableVsync:false"));
        assert!(out.contains("inactivityFpsLimit:\"minimized\""));
        assert!(out.contains("guiScale:2"));
        assert!(out.contains("fovEffectScale:0.0"));
        assert!(out.contains("screenEffectScale:0.0"));
        assert!(out.contains("damageTiltStrength:0.0"));
        assert!(!out.contains("maxFps:120"));
        // ikinci çalıştırma değişiklik yapmamalı (aynı içerik)
        let again = std::fs::read_to_string(dir.join("options.txt")).unwrap();
        ensure_profile(&dir);
        assert_eq!(again, std::fs::read_to_string(dir.join("options.txt")).unwrap());
        let _ = std::fs::remove_dir_all(&dir);
    }

    #[test]
    fn dosya_yoksa_sifirdan_olusturur() {
        let dir = std::env::temp_dir().join(format!("yikim-opt2-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        std::fs::create_dir_all(&dir).unwrap();
        ensure_profile(&dir);
        let out = std::fs::read_to_string(dir.join("options.txt")).unwrap();
        assert!(out.contains("lang:tr_tr"));
        assert!(out.lines().count() == FORCED_OPTIONS.len());
        let _ = std::fs::remove_dir_all(&dir);
    }
}
