//! KOZMETİK KATALOĞU — birden çok pelerin/elitra kaydı.
//!
//! NİYE: eskiden tek dosya vardı (`pelerin.png` / `elytra.png`); yeni bir
//! fotoğraf yükleyince öncekinin üzerine yazılıyordu. Artık her kayıt
//! `kozmetik/<tür>/<id>.png` olarak SAKLANIR ve seçilen kayıt "ana kopya"ya
//! yazılıp tüm kurulumlara dağıtılır (mevcut `kozmetik::tum_kurulumlara_yaz`
//! akışı aynen kullanılır). Böylece Skin Merkezi'nde liste hâlinde görünür.
//!
//! `aktif.json` hangi kaydın giyili olduğunu tutar: `{"pelerin":"...","kanat":"..."}`.
//! `null`/yok → o tür için YIKIM kozmetiği kapalı (oyunda vanilla görünüm).

use serde::{Deserialize, Serialize};
use std::path::PathBuf;

/// Tür adları — UI ve dosya eşlemesi bunlara göre yapılır.
pub const PELERIN: &str = "pelerin";
pub const KANAT: &str = "kanat";

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct KozKayit {
    pub id: String,
    pub ad: String,
    /// "pelerin" | "kanat"
    pub tur: String,
    /// HD (64×32'den büyük) mi?
    pub hd: bool,
    pub genislik: u32,
    pub yukseklik: u32,
    pub tarih: i64,
    /// UI'nin küçük resim için kullanacağı tam dosya yolu (okurken doldurulur).
    #[serde(default)]
    pub dosya: String,
}

fn kok() -> PathBuf {
    crate::core::app_dir().join("kozmetik")
}

fn katalog_yol() -> PathBuf {
    kok().join("katalog.json")
}

fn aktif_yol() -> PathBuf {
    kok().join("aktif.json")
}

fn tur_dosya_yolu(tur: &str, id: &str) -> PathBuf {
    kok().join(tur).join(format!("{id}.png"))
}

pub fn gecerli_tur(tur: &str) -> bool {
    tur == PELERIN || tur == KANAT
}

/// Kimlik yalnız rakam/harf/-/_ içerir (yol kaçışı olmasın).
fn gecerli_id(id: &str) -> bool {
    !id.is_empty()
        && id.len() <= 40
        && id
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_')
}

/// Katalogdaki tüm kayıtlar (en yeniden eskiye).
pub fn liste() -> Vec<KozKayit> {
    let mut liste: Vec<KozKayit> = std::fs::read_to_string(katalog_yol())
        .ok()
        .and_then(|s| serde_json::from_str(&s).ok())
        .unwrap_or_default();
    liste.retain(|k| gecerli_tur(&k.tur) && gecerli_id(&k.id));
    for k in liste.iter_mut() {
        k.dosya = tur_dosya_yolu(&k.tur, &k.id)
            .to_string_lossy()
            .to_string();
    }
    liste.sort_by(|a, b| b.tarih.cmp(&a.tarih));
    liste
}

fn yaz(liste: &[KozKayit]) {
    let _ = std::fs::create_dir_all(kok());
    let temiz: Vec<&KozKayit> = liste.iter().collect();
    if let Ok(govde) = serde_json::to_vec_pretty(&temiz) {
        let _ = std::fs::write(katalog_yol(), govde);
    }
}

/// Aktif kayıt kimlikleri: `{"pelerin": Option<String>, "kanat": Option<String>}`
pub fn aktifler() -> serde_json::Value {
    let js: serde_json::Value = std::fs::read_to_string(aktif_yol())
        .ok()
        .and_then(|s| serde_json::from_str(&s).ok())
        .unwrap_or_else(|| serde_json::json!({}));
    let al = |t: &str| -> serde_json::Value {
        match js.get(t).and_then(|v| v.as_str()) {
            Some(id) if gecerli_id(id) => serde_json::Value::String(id.to_string()),
            _ => serde_json::Value::Null,
        }
    };
    serde_json::json!({ PELERIN: al(PELERIN), KANAT: al(KANAT) })
}

pub fn aktif_id(tur: &str) -> Option<String> {
    aktifler()
        .get(tur)
        .and_then(|v| v.as_str())
        .map(str::to_string)
}

pub fn aktif_yaz(tur: &str, id: Option<&str>) {
    let mut js = aktifler();
    if let Some(obj) = js.as_object_mut() {
        obj.insert(
            tur.to_string(),
            match id {
                Some(v) if gecerli_id(v) => serde_json::Value::String(v.to_string()),
                _ => serde_json::Value::Null,
            },
        );
    }
    let _ = std::fs::create_dir_all(kok());
    if let Ok(govde) = serde_json::to_vec_pretty(&js) {
        let _ = std::fs::write(aktif_yol(), govde);
    }
}

/// Yeni kayıt ekler ve AKTİF yapar. `png` doğrulanmış PNG baytlarıdır.
pub fn ekle(tur: &str, ad: &str, png: &[u8]) -> Result<KozKayit, String> {
    if !gecerli_tur(tur) {
        return Err("bilinmeyen kozmetik türü".into());
    }
    let (g, y) = crate::kozmetik::png_boyut(png).ok_or("görsel okunamadı")?;
    if g < crate::kozmetik::DOKU_G || y < crate::kozmetik::DOKU_Y {
        return Err("görsel en az 64×32 olmalı".into());
    }
    let tarih = crate::core::now_millis();
    let id = format!("{tur}-{tarih}");
    let yol = tur_dosya_yolu(tur, &id);
    std::fs::create_dir_all(yol.parent().unwrap_or(&kok()))
        .map_err(|e| format!("klasör oluşturulamadı: {e}"))?;
    std::fs::write(&yol, png).map_err(|e| format!("kayıt yazılamadı: {e}"))?;

    let mut liste = liste();
    let kayit = KozKayit {
        id: id.clone(),
        ad: if ad.trim().is_empty() {
            varsayilan_ad(tur, &liste)
        } else {
            ad.trim().to_string()
        },
        tur: tur.to_string(),
        hd: g > crate::kozmetik::DOKU_G || y > crate::kozmetik::DOKU_Y,
        genislik: g,
        yukseklik: y,
        tarih,
        dosya: yol.to_string_lossy().to_string(),
    };
    liste.push(kayit.clone());
    yaz(&liste);
    aktif_yaz(tur, Some(&id));
    Ok(kayit)
}

/// Piksel editöründen kaydederken: AKTİF kayıt varsa onun dosyasını tazeler
/// (her "Kaydet" yeni kayıt üretmesin), yoksa yeni kayıt açar.
pub fn ekle_veya_guncelle(tur: &str, png: &[u8]) -> Result<KozKayit, String> {
    if let Some(id) = aktif_id(tur) {
        let mut liste = liste();
        if let Some(k) = liste.iter_mut().find(|k| k.tur == tur && k.id == id) {
            let (g, y) = crate::kozmetik::png_boyut(png).ok_or("görsel okunamadı")?;
            std::fs::create_dir_all(kok().join(tur)).ok();
            std::fs::write(tur_dosya_yolu(tur, &k.id), png)
                .map_err(|e| format!("kayıt yazılamadı: {e}"))?;
            k.genislik = g;
            k.yukseklik = y;
            k.hd = g > crate::kozmetik::DOKU_G || y > crate::kozmetik::DOKU_Y;
            k.tarih = crate::core::now_millis();
            let kopya = k.clone();
            // `liste()` dosya alanını doldurur; yazarken zararsız.
            yaz(&liste);
            return Ok(kopya);
        }
    }
    ekle(tur, "", png)
}

fn varsayilan_ad(tur: &str, liste: &[KozKayit]) -> String {
    let n = liste.iter().filter(|k| k.tur == tur).count() + 1;
    let ad = if tur == PELERIN { "Pelerin" } else { "Elitra" };
    format!("{ad} {n}")
}

/// Kaydın PNG içeriği.
pub fn icerik(tur: &str, id: &str) -> Option<Vec<u8>> {
    if !gecerli_tur(tur) || !gecerli_id(id) {
        return None;
    }
    std::fs::read(tur_dosya_yolu(tur, id)).ok()
}

/// Kaydı siler; aktif olan silindiyse aktiflik de kalkar.
pub fn sil(tur: &str, id: &str) -> Result<(), String> {
    if !gecerli_tur(tur) || !gecerli_id(id) {
        return Err("geçersiz kayıt".into());
    }
    let mut liste = liste();
    let once = liste.len();
    liste.retain(|k| !(k.tur == tur && k.id == id));
    if liste.len() == once {
        return Err("kayıt bulunamadı".into());
    }
    let _ = std::fs::remove_file(tur_dosya_yolu(tur, id));
    yaz(&liste);
    if aktif_id(tur).as_deref() == Some(id) {
        aktif_yaz(tur, None);
    }
    Ok(())
}

/// Kaydı yeniden adlandırır.
pub fn ad_ver(tur: &str, id: &str, ad: &str) -> Result<(), String> {
    let ad = ad.trim();
    if ad.is_empty() {
        return Err("ad boş olamaz".into());
    }
    let mut liste = liste();
    let mut bulundu = false;
    for k in liste.iter_mut() {
        if k.tur == tur && k.id == id {
            k.ad = ad.to_string();
            bulundu = true;
        }
    }
    if !bulundu {
        return Err("kayıt bulunamadı".into());
    }
    yaz(&liste);
    Ok(())
}

/// ESKİ TEK KOPYA: `pelerin.png` / `elytra.png` varsa ve katalog boşsa
/// onu ilk kayıt olarak içeri al. (Kullanıcı yeni yüklemese de eski tasarım
/// Skin Merkezi'nde görünsün.)
pub fn ilk_aktar() {
    for tur in [PELERIN, KANAT] {
        if liste().iter().any(|k| k.tur == tur) {
            continue;
        }
        let dosya = if tur == PELERIN { "pelerin.png" } else { "elytra.png" };
        let yol = crate::core::app_dir().join(dosya);
        let Ok(png) = std::fs::read(&yol) else { continue };
        if crate::kozmetik::png_boyut(&png).is_none() {
            continue;
        }
        if let Ok(k) = ekle(tur, "", &png) {
            // Oyunda kapalıysa katalogda da giyili görünmesin.
            if !crate::kozmetik::aktif(dosya) {
                aktif_yaz(tur, None);
            }
            let _ = k;
        }
    }
}

/// Aktif kayıt yokken (ör. Kozmetik sayfasından yeniden açıldı) en son
/// kaydı takar; hiç kayıt yoksa eski tek kopyayı içeri alır.
pub fn aktif_yoksa_son(tur: &str) {
    if aktif_id(tur).is_some() {
        return;
    }
    if let Some(son) = liste().into_iter().find(|k| k.tur == tur) {
        aktif_yaz(tur, Some(&son.id));
    } else {
        ilk_aktar();
    }
}

#[cfg(test)]
mod testler {
    #[test]
    fn id_dogrulama() {
        assert!(super::gecerli_id("pelerin-123"));
        assert!(!super::gecerli_id("../x"));
        assert!(!super::gecerli_id(""));
        assert!(!super::gecerli_tur("baska"));
    }
}
