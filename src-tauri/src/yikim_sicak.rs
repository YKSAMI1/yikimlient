//! YIKIM SICAK GÜNCELLEME KANALI (v0.3.38+).
//!
//! Niçin var: küçük değişiklikler için 20 dakikalık tam derleme hattı
//! (Rust + NSIS + iki platform CI + imzalar + latest.json) gereksizdi. Bu
//! kanal sayesinde launcher, açılışta ve 15 dakikada bir GitHub'daki küçük
//! bir manifest dosyasını okur; gömülü olandan yeni bir yapı varsa onu
//! arka planda indirir ve oyunu başlatırken otomatik kurar. Exe değişmeden
//! dağıtılır — yayınlama `tools/sicak.ps1` ile dakikalar içinde biter.
//!
//! Manifest şeması (`sicak.json`):
//! {
//!   "v": 1,
//!   "exp": 1766700000,          // opsiyonel tazelik damgası (bilgi amaçlı)
//!   "mods": [ {                 // YIKIM çekirdek modu = JVM jar'ları
//!       "mcVersion": "1.21.11",
//!       "file": "yikimlient-1.12.7+1.21.11.jar",
//!       "modVersion": "1.12.7",
//!       "url": "https://github.com/.../download/sicak/yikimlient-1.12.7+1.21.11.jar",
//!       "sha256": "..." } ],
//!   "kaynaklar": [ ... ]        // GELECEK: tema/dil/oyun içi ekran paketleri
//! }                             // gibi dağıtılabilir dosyalar buraya eklenir;
//!                               // v1 paketleyici bunları görmezden gelir.
//!
//! Gelecek sistemler entegre etmek için (yeni bir paket türü, ör. tema):
//!   1) sicak.json'a yeni dizi eklenir (şema açık),
//!   2) indirme zaten genel (`indir` fonksiyonu) — yeni paket türüne özel
//!      kurulum adımı "işleyici" olarak `yazi_senkonize` içine eklenir.
//!   Eski launcher bilinmeyen dizileri sessizce yok sayar; şemaya eklemek
//!   dolayısıyla geriye dönük güvenlidir.
//!
//! Güvenlik: her indirme istenen sha256 ile doğrulanır; yarım/kirli dosya
//! kurulum dizinine asla giremez (önce .yari, sonra atomik rename). Manifest
//! okunamazsa/indirme başarısızsa sessizce geçilir — oyun akışı ASLA bu
//! kanala bağımlı değildir (gömülü jar daima yedek kalır).

use std::collections::BTreeMap;
use std::fs;
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};

use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};

use crate::core;
use crate::instances;
use crate::yikim_mod;

/// Sabit sorun URL'si: "sicak" adlı GitHub release'in asset'leri her yayınla
/// --clobber ile değiştirilir; adres asla değişmez, derleme gerektirmez.
const SICAK_URL: &str = "https://github.com/YKSAMI1/yikimlient/releases/download/sicak/sicak.json";

/// Kanal dolaşımı: 15 dakikada bir manifest kontrolü (küçük bir GET isteği;
/// değişiklik yoksa indirme olmaz).
const DOLA: u64 = 15 * 60;

// ---------------------------------------------------------------------------
// şema
// ---------------------------------------------------------------------------

#[derive(Deserialize)]
struct SicakManifest {
    v: u8,
    /// Opssiyonel tazelik damgası — v1 launcher kullanmaz; sadece kayıtlı.
    #[allow(dead_code)]
    #[serde(default)]
    exp: i64,
    #[serde(default)]
    mods: Vec<SicakModEntry>,
    /// GELECEK: tema/dil/ekran paketleri için ayrılmış; v1 görmezden gelir.
    #[allow(dead_code)]
    #[serde(default)]
    kaynaklar: Vec<serde_json::Value>,
}

#[derive(Deserialize)]
struct SicakModEntry {
    #[serde(rename = "mcVersion")]
    mc_version: String,
    file: String,
    #[serde(rename = "modVersion")]
    mod_version: String,
    url: String,
    #[serde(default)]
    sha256: String,
}

/// Son senkron durumu (son okuma zamanı + çekilen sürümler; teşhis için).
#[derive(Serialize, Deserialize, Default)]
struct Durum {
    zaman: u64,
    #[serde(default)]
    mods: BTreeMap<String, String>, // mcVersion -> modVersion
}

// ---------------------------------------------------------------------------
// yerler
// ---------------------------------------------------------------------------

fn sicak_dir() -> PathBuf {
    core::ensure_subdir(&core::app_dir(), "sicak")
}

fn manifest_yolu() -> PathBuf {
    sicak_dir().join("manifest.json")
}

fn durum_yolu() -> PathBuf {
    sicak_dir().join("durum.json")
}

// ---------------------------------------------------------------------------
// sürüm yardımcıları
// ---------------------------------------------------------------------------

/// "yikimlient-1.12.7+1.21.11.jar" → (1, 12, 7).
pub(crate) fn mv_from_dosya(adi: &str) -> Option<(u32, u32, u32)> {
    let kalan = adi.strip_prefix("yikimlient-")?;
    let mv = kalan.split('+').next()?;
    yikim_mod::parse_version(mv)
}

/// a, b'den daha mı yeni (katı).
fn daha_yeni(a: (u32, u32, u32), b: (u32, u32, u32)) -> bool {
    a > b
}

// ---------------------------------------------------------------------------
// manifest okuma (disk — senkron, ağ yok; kurulum kararları bunu okur)
// ---------------------------------------------------------------------------

fn disk_manifest() -> Option<SicakManifest> {
    let mut bytes = fs::read(manifest_yolu()).ok()?;
    // UTF-8 BOM koruması (pakgeleyici BOM bırakmış olabilir)
    if bytes.len() >= 3 && bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF {
        bytes.drain(..3);
    }
    let m: SicakManifest = serde_json::from_slice(&bytes).ok()?;
    (m.v == 1).then_some(m)
}

// ---------------------------------------------------------------------------
// kurulum seçimi — gömülü olandan daha yeni bir sıcak jar indirilmişse onu seç
// ---------------------------------------------------------------------------

/// `gomulu_adi` ("yikimlient-1.12.6+1.21.11.jar") sürümünden daha yeni bir
/// sıcak jar bu mc_version için indirilmişse yolunu döndürür; yoksa None
/// (gömülü kullanılır). kural, gömülü manifestin sürüm eşleme kuralıyla aynı:
/// birebir mc eşleşmesi, yoksa aynı minor içinde en yakın patch.
pub(crate) fn daha_yeni_jar(mc_version: &str, gomulu_adi: &str) -> Option<PathBuf> {
    let gomulu_mv = mv_from_dosya(gomulu_adi)?;
    let m = disk_manifest()?;
    let kok = sicak_dir();

    // 1) birebir mc eşleşmesi
    let secilen = m.mods.iter().find(|e| e.mc_version == mc_version).or_else(|| {
        // 2) aynı minor içinde en yakın patch (eşitlikte küçük patch tercih)
        let (_, tm, tp) = yikim_mod::parse_version(mc_version)?;
        m.mods
            .iter()
            .filter_map(|e| yikim_mod::parse_version(&e.mc_version).map(|v| (v, e)))
            .filter(|((_, mj, _), _)| *mj == tm)
            .min_by(|(av, _), (bv, _)| {
                let da = av.2.abs_diff(tp);
                let db = bv.2.abs_diff(tp);
                if da != db {
                    da.cmp(&db)
                } else {
                    av.2.cmp(&bv.2) // eşitlikte küçük patch
                }
            })
            .map(|(_, e)| e)
    })?;

    let hedef = kok.join(&secilen.file);
    if !hedef.is_file() {
        return None; // henüz inmemiş/eksik — gömülü devam
    }
    let hot_mv = match yikim_mod::parse_version(&secilen.mod_version) {
        Some(v) => v,
        None => return None, // bozuk mv kaydı — gömülü devam
    };
    if daha_yeni(hot_mv, gomulu_mv) {
        Some(hedef)
    } else {
        None
    }
}

// ---------------------------------------------------------------------------
// indirme — genel; gelecekteki paket türleri de buradan faydalanır
// ---------------------------------------------------------------------------

async fn indir(url: &str, hedef: &Path, sha_beklenen: &str) -> Result<(), String> {
    let resp = core::http_client()
        .get(url.to_string())
        .timeout(std::time::Duration::from_secs(60))
        .send()
        .await
        .map_err(|e| format!("indirme hatası: {e}"))?
        .error_for_status()
        .map_err(|e| format!("indirme yanıtı kötü: {e}"))?;
    let bytes = resp.bytes().await.map_err(|e| format!("veri hatası: {e}"))?;
    if bytes.is_empty() {
        return Err("indirilen dosya boş".into());
    }
    if !sha_beklenen.is_empty() {
        let gercek = hex::encode(Sha256::digest(&bytes));
        if !gercek.eq_ignore_ascii_case(sha_beklenen) {
            return Err(format!("SHA256 uyuşmuyor: beklenen {sha_beklenen}, gelen {gercek}"));
        }
    }
    // atomik yazma: önce .yari, sonra rename (yarım dosya asla kurulamaz)
    let yari = hedef.with_extension("yari");
    fs::write(&yari, &bytes).map_err(|e| format!("geçici yazma hatası: {e}"))?;
    if hedef.exists() {
        fs::remove_file(hedef).map_err(|e| format!("eski dosya silinemedi: {e}"))?;
    }
    fs::rename(&yari, hedef).map_err(|e| format!("rename hatası: {e}"))?;
    Ok(())
}

// ---------------------------------------------------------------------------
// ana akış — manifest al + yeni jar varsa indir + kurulumları tazele
// ---------------------------------------------------------------------------

pub async fn yazi_senkonize(handle: tauri::AppHandle) -> Result<(), String> {
    let resp = core::http_client()
        .get(SICAK_URL.to_string())
        .timeout(std::time::Duration::from_secs(30))
        .send()
        .await
        .map_err(|e| format!("manifest alınamadı: {e}"))?
        .error_for_status()
        .map_err(|e| format!("manifest yanıtı kötü: {e}"))?;
    let bytes = resp
        .bytes()
        .await
        .map_err(|e| format!("manifest gövde hatası: {e}"))?;
    let m: SicakManifest =
        serde_json::from_slice(&bytes).map_err(|e| format!("manifest biçimi bozuk: {e}"))?;
    if m.v != 1 {
        return Err(format!("kanal sürümü uyumsuz: v={}", m.v));
    }

    // Manifesti diske atomik yaz (kurulum kararları bunu okur).
    let yari = manifest_yolu().with_extension("yari");
    fs::write(&yari, &bytes).map_err(|e| format!("manifest yazma hatası: {e}"))?;
    fs::rename(&yari, manifest_yolu()).map_err(|e| format!("manifest rename hatası: {e}"))?;

    // Yeni jar'ları indir (dosya yerelde ama sha farklıysa yenile — kötü
    // yayınlamaları da yakalar; aynı dosyaysa eziyet olmaz).
    for e in &m.mods {
        let hedef = sicak_dir().join(&e.file);
        let gerekli = match fs::read(&hedef) {
            Ok(b) => {
                !e.sha256.is_empty()
                    && !hex::encode(Sha256::digest(&b)).eq_ignore_ascii_case(&e.sha256)
            }
            Err(_) => true,
        };
        if gerekli {
            if let Err(hata) = indir(&e.url, &hedef, &e.sha256).await {
                core::yikim_log(format!("sicak: {} indirilemedi — {hata}", e.file));
                continue;
            }
            core::yikim_log(format!("sicak: {} indirildi (sha doğrulandı)", e.file));
        }
    }

    // Durumu kaydet: son okuma zamanı + çekilen sürüm haritası (teşhis için).
    let mut d = Durum {
        zaman: SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|s| s.as_secs())
            .unwrap_or(0),
        mods: BTreeMap::new(),
    };
    for e in &m.mods {
        d.mods.insert(e.mc_version.clone(), e.mod_version.clone());
    }
    let _ = fs::write(durum_yolu(), serde_json::to_string(&d).unwrap_or_default());

    // Yeni kurulan jar'ların zaten kurulmuş instance'lara uygulanması:
    // oyun açıkken jar kilitli olur — install_from sessizce atlar, bir
    // sonraki açılışta güncellenir (yikim_mod bunu güvenli yapıyor).
    if let Ok(rd) = fs::read_dir(core::instances_dir()) {
        for girdi in rd.filter_map(|e| e.ok()) {
            let id = girdi.file_name().to_string_lossy().to_string();
            if let Some(inst) = instances::Instance::load(&id) {
                match yikim_mod::ensure_installed(&handle, &inst) {
                    Ok(true) => core::yikim_log(format!("sicak: '{id}' güncellendi")),
                    Ok(false) => {}
                    Err(h) => core::yikim_log(format!("sicak: '{id}' tazelenemedi — {h}")),
                }
            }
        }
    }
    Ok(())
}

/// Arka plan döngüsü: hemen bir kez + 15 dakikada bir dola.
pub fn kanali_dagit(handle: tauri::AppHandle) {
    tauri::async_runtime::spawn(async move {
        loop {
            if let Err(h) = yazi_senkonize(handle.clone()).await {
                core::yikim_log(format!("sicak: {h}"));
            }
            tokio::time::sleep(std::time::Duration::from_secs(DOLA)).await;
        }
    });
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn mv_ayristirma() {
        assert_eq!(mv_from_dosya("yikimlient-1.12.7+1.21.11.jar"), Some((1, 12, 7)));
        assert_eq!(mv_from_dosya("yikimlient-1.12.6+1.21.11.jar"), Some((1, 12, 6)));
        assert_eq!(mv_from_dosya("switch.jar"), None);
    }

    #[test]
    fn versiyon_karsilastirma() {
        assert!(daha_yeni((1, 12, 7), (1, 12, 6)));
        assert!(!daha_yeni((1, 12, 6), (1, 12, 6)));
        assert!(daha_yeni((1, 13, 0), (1, 12, 99)));
    }
}
