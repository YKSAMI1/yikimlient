// GÜVENLİK — cihaz kimliği, imza doğrulama, yerel güvenlik deposu.
//
// Neden var: launcher açık kaynak olacağı için istemcide PAYLAŞILAN bir sır
// tutmak güvenliği anlamsız kılar (herkes sırayı çıkarıp istek üretebilir).
// Bunun yerine her cihaz kendi Ed25519 anahtar çiftini üretir; özel anahtar
// yalnızca o cihazda kalır, sunucu yalnızca genel anahtarı bilir.
// Böylece: istemcide kırılabilecek bir sır yoktur; yetki sunucudadır.
//
// Yerleşim: %APPDATA%\.yikimlient\guvenlik\
//   cihaz.json    → {"cihaz_id","gizli_b64","pub_b64","olusturma"}
//   hesaplar.json → son bilinen hesap yetki durumları (fail-open play için)
//   izin.json     → çevrimdışı izin belgesi önbelleği

use std::path::{Path, PathBuf};

use base64::Engine;
use ed25519_dalek::{Signature, Signer, SigningKey, Verifier, VerifyingKey};
use serde::{Deserialize, Serialize};

// ---------- yerler ----------

/// Güvenlik deposu kökü.
pub fn guvenlik_dir() -> PathBuf {
    crate::core::ensure_subdir(&crate::core::app_dir(), "guvenlik")
}

pub fn cihaz_yolu() -> PathBuf {
    guvenlik_dir().join("cihaz.json")
}

// ---------- cihaz kimliği ----------

/// Cihazın kalıcı kimliği + imzalama anahtarı.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CihazKimlik {
    pub cihaz_id: String,
    /// gizli anahtar (base64, 32 bayt) — YALNIZCA bu cihazda
    pub gizli_b64: String,
    /// genel anahtar (base64, 32 bayt) — sunucuya gönderilir
    pub pub_b64: String,
    pub olusturma: i64,
}

impl CihazKimlik {
    /// Gizli anahtarı çöz.
    pub fn gizli(&self) -> Option<SigningKey> {
        let bayt = base64::engine::general_purpose::STANDARD
            .decode(&self.gizli_b64)
            .ok()?;
        let dizi: [u8; 32] = bayt.try_into().ok()?;
        Some(SigningKey::from_bytes(&dizi))
    }

    /// Gömülü genel anahtarı çöz.
    pub fn pub_anahtar(&self) -> Option<VerifyingKey> {
        let bayt = base64::engine::general_purpose::STANDARD
            .decode(&self.pub_b64)
            .ok()?;
        let dizi: [u8; 32] = bayt.try_into().ok()?;
        VerifyingKey::from_bytes(&dizi).ok()
    }
}

/// Cihaz kimliğini oku; yoksa (ve `olustur` doğruysa) üret ve diske yaz.
/// Dosya bozuksa SIFIRDAN üretilir (eski imzalar geçersiz sayılır — sunucu
/// kaydı da yeniden gerekir; bu kasıtlı: bozuk anahtarla istek atılmaz).
pub fn cihaz_kimligi_al(olustur: bool) -> Option<CihazKimlik> {
    let yol = cihaz_yolu();
    if let Ok(metin) = std::fs::read_to_string(&yol) {
        if let Ok(c) = serde_json::from_str::<CihazKimlik>(&metin) {
            // anahtarlar gerçekten çözülebiliyor mu? bozuk kayıt güvenliksizdir
            if c.gizli().is_some() && c.pub_anahtar().is_some() {
                return Some(c);
            }
        }
    }
    if !olustur {
        return None;
    }
    let c = yeni_cihaz();
    let _ = std::fs::create_dir_all(guvenlik_dir());
    // önce yaz, sonra izin: yarım dosya asla imza üretmesin
    if let Ok(json) = serde_json::to_string_pretty(&c) {
        let _ = std::fs::write(&yol, json);
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            let _ = std::fs::set_permissions(&yol, std::fs::Permissions::from_mode(0o600));
        }
    }
    Some(c)
}

/// Yeni cihaz üret.
pub fn yeni_cihaz() -> CihazKimlik {
    use rand::RngCore;
    let mut tohum = [0u8; 32];
    rand::thread_rng().fill_bytes(&mut tohum);
    let gizli = SigningKey::from_bytes(&tohum);
    let acik = gizli.verifying_key();
    CihazKimlik {
        cihaz_id: format!("cihaz-{}", crate::core::now_millis()),
        gizli_b64: base64::engine::general_purpose::STANDARD.encode(gizli.to_bytes()),
        pub_b64: base64::engine::general_purpose::STANDARD.encode(acik.to_bytes()),
        olusturma: crate::core::now_millis(),
    }
}

// ---------- imzalama / doğrulama ----------

/// Mesajı cihazın gizli anahtarıyla imzala → base64.
pub fn imzola(mesaj: &[u8]) -> Option<String> {
    let c = cihaz_kimligi_al(false)?;
    let gizli = c.gizli()?;
    let imza: Signature = gizli.sign(mesaj);
    Some(base64::engine::general_purpose::STANDARD.encode(imza.to_bytes()))
}

/// Base64 imzayı genel anahtarla doğrula.
pub fn imza_dogrula(pub_b64: &str, mesaj: &[u8], imza_b64: &str) -> bool {
    let Ok(pub_bayt) = base64::engine::general_purpose::STANDARD.decode(pub_b64) else {
        return false;
    };
    let Ok(pub_dizi) = <[u8; 32]>::try_from(pub_bayt.as_slice()) else {
        return false;
    };
    let Ok(acik) = VerifyingKey::from_bytes(&pub_dizi) else {
        return false;
    };
    let Ok(bayt) = base64::engine::general_purpose::STANDARD.decode(imza_b64) else {
        return false;
    };
    let Ok(dizi) = <[u8; 64]>::try_from(bayt.as_slice()) else {
        return false;
    };
    acik.verify(mesaj, &Signature::from_bytes(&dizi)).is_ok()
}

/// İstek gövdesi için imza metnini üret (sunucuyla birebir aynı formül).
/// `cihaz_id|ts|nonce|body_hex`
pub fn istek_imza_metni(cihaz_id: &str, ts: u64, nonce: &str, govde: &str) -> String {
    format!("{}|{}|{}|{}", cihaz_id, ts, nonce, govde)
}

// ---------- hesap bazlı yerel kayıtlar ----------

/// Bir hesabın son bilinen yetki durumu (API kapalıyken fail-open play).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HesapYetkiKayit {
    pub anahtar: String,
    pub ad: String,
    pub tur: String,
    pub dogrulandi: bool,
    pub rol_yol: bool,
    /// Kozmetik menüsü açık mı (doğrulandıysa)
    pub kozmetik_serbest: bool,
    /// Sahip tarafından kilitli mi (hesap bazlı)
    #[serde(default)]
    pub sahip_kilidi: bool,
    pub offline_izin_bitis: i64,
    pub guncellendi: i64,
}

pub fn hesaplar_yolu() -> PathBuf {
    guvenlik_dir().join("hesaplar.json")
}

/// Tüm hesap kayıtlarını oku (yoksa boş).
pub fn hesaplari_oku() -> Vec<HesapYetkiKayit> {
    match std::fs::read_to_string(hesaplar_yolu()) {
        Ok(t) => serde_json::from_str(&t).unwrap_or_default(),
        Err(_) => Vec::new(),
    }
}

/// Bir hesabın kaydını güncelle/ekle (atomik yazma).
pub fn hesap_kaydet(k: &HesapYetkiKayit) {
    let mut liste = hesaplari_oku();
    liste.retain(|x| x.anahtar != k.anahtar);
    liste.push(k.clone());
    if let Ok(json) = serde_json::to_string_pretty(&liste) {
        let _ = std::fs::create_dir_all(guvenlik_dir());
        let yol = hesaplar_yolu();
        let tmp = yol.with_extension("yari");
        if std::fs::write(&tmp, &json).is_ok() {
            let _ = std::fs::rename(&tmp, &yol);
        }
    }
}

/// Hesabın kozmetik deposu: `.yikim/kosmetik/<anahtar>/`
pub fn kozmetik_yerel_dir(inst_dir: &Path, anahtar: &str) -> PathBuf {
    inst_dir.join(".yikim").join("kosmetik").join(anahtar_dosya(anahtar))
}

/// Hesap anahtarını güvenli dosya adına çevir.
/// Windows dosya adlarında `:` yasaktır; `offline:<uuid>` → `offline_<uuid>`.
pub fn anahtar_dosya(anahtar: &str) -> String {
    anahtar
        .chars()
        .map(|c| {
            if c.is_ascii_alphanumeric() || c == '-' || c == '_' || c == '.' {
                c
            } else {
                '_'
            }
        })
        .collect()
}

/// Hesabın kendi kozmetik deposu (launcher tarafı, kurulumdan bağımsız).
pub fn hesap_kozmetik_dir(anahtar: &str) -> PathBuf {
    guvenlik_dir().join("kozmetik").join(anahtar_dosya(anahtar))
}

/// Hesabın kozmetik dosyasını sakla (`pelerin.png` / `elytra.png`).
pub fn hesap_kozmetik_yaz(anahtar: &str, ad: &str, png: &[u8]) -> bool {
    let dir = hesap_kozmetik_dir(anahtar);
    if std::fs::create_dir_all(&dir).is_err() {
        return false;
    }
    // Yol bileşeni olarak kullanılan `ad` güvenli olmalı
    let ad = ad.replace(['/', '\\'], "_");
    std::fs::write(dir.join(ad), png).is_ok()
}

/// Hesabın kozmetik dosyasını oku.
pub fn hesap_kozmetik_oku(anahtar: &str, ad: &str) -> Option<Vec<u8>> {
    let ad = ad.replace(['/', '\\'], "_");
    std::fs::read(hesap_kozmetik_dir(anahtar).join(ad)).ok()
}

/// Hesabın kozmetik dosyasını sil.
pub fn hesap_kozmetik_sil(anahtar: &str, ad: &str) {
    let ad = ad.replace(['/', '\\'], "_");
    let _ = std::fs::remove_file(hesap_kozmetik_dir(anahtar).join(ad));
}

/// Aktif hesabı kurulumlara yaz: `<kurulum>/.yikim/aktif-hesap`.
/// Mod bu dosyadan hangi hesabın açık olduğunu öğrenir (hesap bazlı kozmetik).
pub fn aktif_hesap_yaz(anahtar: &str) -> usize {
    let mut n = 0;
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_ok()
            && std::fs::write(dir.join("aktif-hesap"), anahtar.as_bytes()).is_ok()
        {
            n += 1;
        }
    }
    n
}

#[cfg(test)]
mod tests {
    use super::*;

    fn gecici_dir() -> PathBuf {
        std::env::temp_dir().join(format!("yikim-guvenlik-{}", std::process::id()))
    }

    #[test]
    fn cihaz_uretimi_ve_kaliciligi() {
        let dir = gecici_dir();
        let _ = std::fs::remove_dir_all(&dir);
        std::fs::create_dir_all(&dir).unwrap();
        std::env::set_var("YIKIM_APP_DIR", &dir);

        let c = cihaz_kimligi_al(true).expect("cihaz üretilemedi");
        assert_eq!(c.pub_b64.len(), 44, "genel anahtar base64 44 karakter olmalı");
        assert!(c.gizli().is_some());
        assert!(c.pub_anahtar().is_some());

        // ikinci çağrı aynı kaydı döndürmeli
        let c2 = cihaz_kimligi_al(false).expect("kayıt okunamadı");
        assert_eq!(c.cihaz_id, c2.cihaz_id);
        assert_eq!(c.gizli_b64, c2.gizli_b64);

        let _ = std::fs::remove_dir_all(&dir);
    }

    #[test]
    fn imza_dogrulama_gecerli_ve_sahte_reddedilir() {
        let tohum = [7u8; 32];
        let gizli = SigningKey::from_bytes(&tohum);
        let pub_b64 = base64::engine::general_purpose::STANDARD.encode(gizli.verifying_key().to_bytes());
        let mesaj = b"cihaz-1|1794000000|nonce123|{}";
        let imza = base64::engine::general_purpose::STANDARD.encode(gizli.sign(mesaj).to_bytes());

        assert!(imza_dogrula(&pub_b64, mesaj, &imza), "geçerli imza kabul edilmeli");
        assert!(!imza_dogrula(&pub_b64, b"baska mesaj", &imza), "mesaj değişmişse reddedilmeli");

        // sahte imza: başka anahtarla imzala
        let sahte = SigningKey::from_bytes(&[9u8; 32]);
        let s_imza = base64::engine::general_purpose::STANDARD.encode(sahte.sign(mesaj).to_bytes());
        assert!(!imza_dogrula(&pub_b64, mesaj, &s_imza), "başka anahtar reddedilmeli");

        // bozuk base64
        assert!(!imza_dogrula(&pub_b64, mesaj, "!!!bozuk!!!"));
    }

    #[test]
    fn istek_imza_metni_bicimi() {
        let m = istek_imza_metni("cihaz-9", 1794000000, "abc123", "{}");
        assert_eq!(m, "cihaz-9|1794000000|abc123|{}");
    }

    #[test]
    fn kozmetik_yerel_yolu() {
        let d = PathBuf::from("C:/kur/inst-1");
        let p = kozmetik_yerel_dir(&d, "offline:abc");
        assert!(p.to_string_lossy().contains(".yikim"));
        assert!(p.to_string_lossy().contains("offline_abc"), "windows'ta ':' dosya adinda olamaz");
    }

    #[test]
    fn hesap_kozmetik_deposu_ayri() {
        let a = anahtar_dosya("offline:abc");
        let b = anahtar_dosya("ms:def");
        assert_eq!(a, "offline_abc");
        assert_eq!(b, "ms_def");
        assert_ne!(a, b);
    }
}
