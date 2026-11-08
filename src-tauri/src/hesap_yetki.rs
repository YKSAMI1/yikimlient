// HESAP YETKİ MODELİ — kozmetik kilidi ve "✕" işareti kuralları.
//
// Kural (tasarım §9, §19):
//   * Doğrulanmamış (şifresiz girilmiş) hesapta kozmetik/sunucu kozmetiği KAPALI.
//     Hesap kullanılabilir; kullanıcının kendi client-side skin seçimi serbest.
//   * Doğrulandı + "Yol Silindiri" rolü → kendi pelerin/elitrasını çizebilir ve
//     sunucuya yükleyebilir.
//   * Doğrulanmadı → adın başında Y logosundan önce "✕" işareti gösterilir.

use serde::{Deserialize, Serialize};

use crate::guvenlik::{hesaplari_oku, CihazKimlik};

/// Bir hesabın yetki durumu.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HesapYetki {
    /// Kararlı kimlik: `ms:<uuid>` veya `offline:<uuid>`
    pub anahtar: String,
    pub ad: String,
    /// "cracked" | "microsoft"
    pub tur: String,
    /// Doğrulandı = (Discord bağlantısı veya Microsoft kimliği) VE şifre kurulu
    pub dogrulandi: bool,
    /// Discord sunucusundaki "Yol Silindiri" rolü
    pub rol_yol: bool,
    /// Kozmetik menüsü açık mı?
    pub kozmetik_serbest: bool,
    /// Çevrimdışı izin bitiş damgası (ms)
    pub offline_izin_bitis: i64,
    /// Sahip tarafından kozmetik kilidi (hesap bazlı)
    pub sahip_kilidi: bool,
}

impl Default for HesapYetki {
    fn default() -> Self {
        Self {
            anahtar: String::new(),
            ad: String::new(),
            tur: "cracked".into(),
            dogrulandi: false,
            rol_yol: false,
            kozmetik_serbest: false,
            offline_izin_bitis: 0,
            sahip_kilidi: false,
        }
    }
}

/// Hesap → kararlı anahtar (tasarım: ad DEĞİL, kimlik; Microsoft ad değişebilir,
/// çatlak hesap lisanslı adla çakışabilir).
pub fn hesap_anahtari(ad: &str, tur: &str, uuid: &str) -> String {
    if !uuid.is_empty() {
        if tur == "microsoft" {
            format!("ms:{uuid}")
        } else {
            format!("offline:{uuid}")
        }
    } else {
        // uuid yoksa adı normalize et (nadir yedek yol)
        format!("{}:{}", tur, ad.trim().to_ascii_lowercase())
    }
}

/// Yerel kayıttan son bilinen durumu oku (yoksa varsayılan: kilitli).
pub fn yerel_yetki(anahtar: &str) -> HesapYetki {
    hesaplari_oku()
        .into_iter()
        .find(|h| h.anahtar == anahtar)
        .map(|k| HesapYetki {
            anahtar: k.anahtar,
            ad: k.ad,
            tur: k.tur,
            dogrulandi: k.dogrulandi,
            rol_yol: k.rol_yol,
            kozmetik_serbest: k.kozmetik_serbest,
            offline_izin_bitis: k.offline_izin_bitis,
            sahip_kilidi: k.sahip_kilidi,
        })
        .unwrap_or_else(|| HesapYetki {
            anahtar: anahtar.to_string(),
            kozmetik_serbest: false,
            ..Default::default()
        })
}

/// Kozmetik menüsü ve kozmetik kaydetme açık mı?
pub fn kozmetik_izinli(y: &HesapYetki) -> bool {
    y.dogrulandi && y.kozmetik_serbest && !y.sahip_kilidi
}

/// Kendi pelerin/elitrasını çizebilir mi? (yalnız "Yol Silindiri" rolü)
pub fn cizim_izinli(y: &HesapYetki) -> bool {
    kozmetik_izinli(y) && y.rol_yol
}

/// Adın yanında ✕ işareti gösterilsin mi? (doğrulanmamış)
pub fn carpi_goster(y: &HesapYetki) -> bool {
    !y.dogrulandi
}

/// API'ye ulaşılamıyor mu? (bot/API kapalı — oyun ve yerel kozmetik devam eder)
pub fn api_kapali_durum(hata: &str) -> bool {
    hata.starts_with("api_kapali") || hata.contains("api_kapali")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn anahtar_kararli_kimlikten_turetilir() {
        assert_eq!(hesap_anahtari("Ali", "microsoft", "u1"), "ms:u1");
        assert_eq!(hesap_anahtari("Ali", "cracked", "u1"), "offline:u1");
        assert_eq!(hesap_anahtari("Ali", "cracked", ""), "cracked:ali");
    }

    #[test]
    fn kozmetik_kilidi_kurallari() {
        let mut y = HesapYetki::default();
        assert!(!kozmetik_izinli(&y), "varsayılan: kilitli");
        assert!(carpi_goster(&y), "doğrulanmamışsa ✕ görünür");
        y.dogrulandi = true;
        assert!(!kozmetik_izinli(&y), "doğrulandı ama izin yok");
        y.kozmetik_serbest = true;
        assert!(kozmetik_izinli(&y), "doğrulandı + izin → açık");
        assert!(!cizim_izinli(&y), "rol olmadan çizilemez");
        y.rol_yol = true;
        assert!(cizim_izinli(&y), "rol varsa çizilebilir");
    }

    #[test]
    fn sahip_kilidi_her_sey_kapatir() {
        let mut y = HesapYetki {
            dogrulandi: true,
            kozmetik_serbest: true,
            rol_yol: true,
            ..Default::default()
        };
        assert!(kozmetik_izinli(&y));
        y.sahip_kilidi = true;
        assert!(!kozmetik_izinli(&y), "sahip kilidi her durumda kapatır");
        assert!(!cizim_izinli(&y));
    }

    #[test]
    fn api_kapali_algilama() {
        assert!(api_kapali_durum("api_kapali: bağlantı yok"));
        assert!(!api_kapali_durum("api_hata 500: sunucu"));
    }
}

// Tauri Account tipi (mevcut) ile köprü — "hesap" enum/struct düzeni korunur.
impl HesapYetki {
    /// Launcher'daki seçili hesaptan yetki kaydı üret.
    pub fn hesaptan(ad: &str, tur: &str, uuid: &str) -> HesapYetki {
        yerel_yetki(&hesap_anahtari(ad, tur, uuid))
    }
}

/// Cihaz kimliği yoksa ilk açılışta üretmek için küçük yardımcı.
pub fn cihaz_hazir() -> Option<CihazKimlik> {
    crate::guvenlik::cihaz_kimligi_al(true)
}
