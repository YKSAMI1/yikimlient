//! YIKIM SICAK GÜNCELLEME KANALI (v0.3.38+).
//!
//! Niçin var: küçük değişiklikler için 20 dakikalık tam derleme hattı
//! (Rust + NSIS + iki platform CI + imzalar + latest.json) gereksizdi. Bu
//! kanal sayesinde launcher, her açılışta GitHub'daki küçük bir manifest
//! dosyasını okur; gömülü olandan yeni bir yapı varsa onu
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
// TEMİZLİK — manifestte olmayan eski jar'lar diskte birikirti, silinir
// ---------------------------------------------------------------------------

/// Sıcak klasöründeki jar'lardan manifestte ADİ GEÇMEYENLERİ sil.
/// (Son N sürümü TUTMA: kurulum kararı "gömülüden daha yeni" zincirine
/// bağlı — hepsi aynı anda indirildiğinden tek aktif sürüm bile yeterlidir.
/// Senin cihazında `sicak` klasöründe birikmiş eski jar'lar bu yüzden
/// kullanıcının diskinde gereksiz yer tutuyordu.)
fn temizlenmis_eski_jarlar(m: &SicakManifest) {
    let kannst = match fs::read_dir(sicak_dir()) {
        Ok(rd) => rd,
        Err(_) => return,
    };
    let mut silinen = 0usize;
    let mut silinen_bayt = 0u64;
    for girdi in kannst.filter_map(|e| e.ok()) {
        let ad = girdi.file_name().to_string_lossy().to_string();
        if !ad.starts_with("yikimlient-") || !ad.ends_with(".jar") {
            continue; // manifest.json / durum.json / .yari dokunulmaz
        }
        let gecerli = m.mods.iter().any(|e| e.file == ad);
        if gecerli {
            continue;
        }
        let boyut = girdi.metadata().map(|md| md.len()).unwrap_or(0);
        match fs::remove_file(girdi.path()) {
            Ok(()) => {
                silinen += 1;
                silinen_bayt += boyut;
                core::yikim_log(format!("sicak: eski sürüm silindi — {ad}"));
            }
            Err(h) => core::yikim_log(format!("sicak: {ad} silinemedi — {h}")),
        }
    }
    if silinen > 0 {
        core::yikim_log(format!(
            "sicak: {} eski jar temizlendi ({:.1} MB boşaltıldı)",
            silinen,
            silinen_bayt as f64 / 1_048_576.0
        ));
    }
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

    // ESKİ SÜRÜMLERİ TEMİZLE: her sürüm kendi jar'ını indirdiği için klasör
    // yığın yığın büyüyordu (kullanıcının diskinde üst üste gereksiz dosya).
    // Manifestte ARTIK OLMAYAN jar'ları sil.
    temizlenmis_eski_jarlar(&m);

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

    // KAYNAKLAR — yenir sistemler buraya bağlanır (şu an 'ui' bilinir).
    // Yeni paket türü eklemek: bu match'e bir kol + özel uygula fonksiyonu.
    for k in &m.kaynaklar {
        let tur = k.get("tur").and_then(|t| t.as_str()).unwrap_or("");
        match tur {
            "ui" => {
                if let Err(h) = ui_paketi_uygula(k).await {
                    core::yikim_log(format!("sicak ui: {h}"));
                }
            }
            "emotepaketi" => {
                if let Err(h) = emote_paketi_uygula(k).await {
                    core::yikim_log(format!("sicak emote: {h}"));
                }
            }
            "" => {}
            t => core::yikim_log(format!("sicak: bilinmeyen kaynak turu '{t}' atlandı (eski launcher)")),
        }
    }

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

/// Sıcak kanal: YALNIZ açılışta bir kez sorulur.
///
/// Bant genişliği: açılışta çekilen `sicak.json` yalnızca birkaç KB'lık bir
/// metin. Jar (≈170 KB) SADECE yayınlanan sürümün sha256'sı yereldekiyle
/// farklıysa indirilir; arada açılıp kapanan launcher'larda tekrar indirme
/// olmaz. Sürekli yoklama (zamanlayıcı) bilinçli olarak YOK: kullanıcı
/// launcher'ı her açtığında güncel sürümü alır, arka planda trafik üretmez.
pub fn kanali_dagit(handle: tauri::AppHandle) {
    tauri::async_runtime::spawn(async move {
        if let Err(h) = yazi_senkonize(handle).await {
            core::yikim_log(format!("sicak: {h}"));
        }
    });
}

// ---------------------------------------------------------------------------
// 'ui' kaynak işleyicisi — launcher ara yüzü paketi (tema/sayfalar)
// ---------------------------------------------------------------------------

/// "Bu arayüz sürümü zaten kurulu mu?" — sürüm numarası TEK BAŞINA yetmez.
///
/// `aktif.json` yazıldıktan sonra klasör silinirse (kullanıcı temizliği,
/// bozuk kurulum, yarım paket) sadece sürüme bakan eski kontrol sonsuza dek
/// "güncel" der ve launcher bir daha indirmez → kullanıcı eski arayüzde
/// takılır. Bu yüzden klasörün gerçekten kullanılabilir olduğu (index.html
/// var) da doğrulanır.
fn guncel_mi(aktif: &serde_json::Value, ui_kok: &Path, yeni: &str) -> bool {
    let Some(eski) = aktif["surum"].as_str() else {
        return false;
    };
    let Some(klasor) = aktif["klasor"].as_str() else {
        return false;
    };
    if klasor.is_empty()
        || klasor.contains('/')
        || klasor.contains('\\')
        || klasor.contains("..")
    {
        return false;
    }
    if !ui_kok.join(klasor).join("index.html").is_file() {
        return false;
    }
    match (
        crate::yikim_mod::parse_version(eski),
        crate::yikim_mod::parse_version(yeni),
    ) {
        (Some(a), Some(b)) => a >= b,
        _ => false,
    }
}

/// UI paketi uygula: indir → sha doğrula → zip aç → aktif.json yaz →
/// eski sürümü temizle. Uygulama SONRAKİ AÇILIŞta etkinleşir (yikim_ui).
async fn ui_paketi_uygula(e: &serde_json::Value) -> Result<(), String> {
    let ver = e
        .get("surum")
        .and_then(|v| v.as_str())
        .ok_or("ui paketinde 'surum' yok")?
        .to_string();
    let gecerli_ad = !ver.is_empty()
        && ver
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || c == '.' || c == '_' || c == '-');
    if !gecerli_ad {
        return Err(format!("ui sürüm adı uygunsuz: {ver}"));
    }

    // Aktif sürüm aynı/büyükse atla (karşılaştırma: sayısal 0.3.x).
    // Klasör gerçekten duruyorsa; bozuk/silinmiş paket "güncel" sayılmaz.
    let ui_kok_once = core::app_dir().join("ui");
    if let Ok(bayt) = fs::read(ui_kok_once.join("aktif.json")) {
        if let Ok(js) = serde_json::from_slice::<serde_json::Value>(&bayt) {
            if guncel_mi(&js, &ui_kok_once, &ver) {
                return Ok(()); // zaten güncel ve sağlam
            }
        }
    }

    let url = e.get("url").and_then(|v| v.as_str()).unwrap_or("");
    if url.is_empty() {
        return Err("ui paketinde 'url' yok".into());
    }
    let sha = e.get("sha256").and_then(|v| v.as_str()).unwrap_or("");

    let hedef_zip = sicak_dir().join(format!("ui-{ver}"));
    indir(url, &hedef_zip, sha).await?;

    // zip aç: <app_dir>/ui/<ver>/
    let kok = core::app_dir().join("ui").join(&ver);
    let mut arşiv = zip::ZipArchive::new(
        fs::File::open(&hedef_zip).map_err(|z| format!("ui zip acılamadı: {z}"))?,
    )
    .map_err(|z| format!("ui zip arşivi bozuk: {z}"))?;
    for i in 0..arşiv.len() {
        let mut girdi = arşiv
            .by_index(i)
            .map_err(|z| format!("ui zip girdi {i} hatası: {z}"))?;
        let ad = girdi.name().replace('\\', "/");
        if ad.is_empty() || ad.contains("..") {
            return Err(format!("ui zip girdisi güvensiz: {ad}"));
        }
        if girdi.is_dir() || ad.ends_with('/') {
            continue;
        }
        let yol = kok.join(&ad);
        if let Some(ebeyne) = yol.parent() {
            fs::create_dir_all(ebeyne).map_err(|z| format!("ui klasör hatası: {z}"))?;
        }
        let mut cikis = fs::File::create(&yol).map_err(|z| format!("ui yazma hatası: {z}"))?;
        std::io::copy(&mut girdi, &mut cikis)
            .map_err(|z| format!("ui kopyalama hatası: {z}"))?;
    }

    // Paket gerçekten kullanılabilir mi? index.html yoksa yarım paket demektir:
    // aktif işaretlemeyiz (yoksa launcher bir sonraki açılışta boş sayfa açar).
    if !kok.join("index.html").is_file() {
        let _ = fs::remove_dir_all(&kok);
        return Err("ui paketinde index.html yok — yarım paket uygulanmadı".into());
    }

    // Sürüm damgası: HER ZAMAN manifest sürümüyle yazılır.
    // (Paket içindeki surum.txt boş/eksik gelebiliyor; o zaman sürüm
    // karşılaştırması yapılamıyor ve eski paket diskte kalıcı oluyordu.)
    let _ = fs::write(kok.join("surum.txt"), format!("{ver}\n"));

    // aktif.json atomik olarak yaz: ana pencere bundan sonra bu klasörü sunar
    let ui_kok = core::app_dir().join("ui");
    let aktifi = serde_json::json!({
        "surum": ver.clone(),
        "klasor": ver.clone(),
        "zaman": SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|s| s.as_secs())
            .unwrap_or(0),
    });
    let yari = ui_kok.join("aktif.json.yari");
    fs::write(&yari, aktifi.to_string()).map_err(|z| format!("aktif.json hatası: {z}"))?;
    fs::rename(&yari, ui_kok.join("aktif.json")).map_err(|z| format!("aktif.json rename: {z}"))?;

    // eski sürüm klasörlerini temizle (surum.txt okunup daha eski olanlar)
    if let Ok(rd) = fs::read_dir(&ui_kok) {
        for girdi in rd.filter_map(|s| s.ok()) {
            let yol = girdi.path();
            if !yol.is_dir() {
                continue;
            }
            let eski_ver = fs::read(yol.join("surum.txt"))
                .ok()
                .and_then(|b| String::from_utf8(b).ok())
                .map(|s| s.trim().to_string())
                .and_then(|s| crate::yikim_mod::parse_version(&s));
            if let Some(eski) = eski_ver {
                if let Some(yeni) = crate::yikim_mod::parse_version(&ver) {
                    if eski < yeni {
                        let _ = fs::remove_dir_all(&yol);
                    }
                }
            }
        }
    }
    let _ = fs::remove_file(&hedef_zip); // zip artık gerekmiyor

    core::yikim_log(format!(
        "sicak ui: {ver} indirildi ve aktif olarak işaretlendi — sonraki açılışta uygulanır"
    ));
    Ok(())
}


// ---------------------------------------------------------------------------
// 'emotepaketi' kaynak işleyicisi — karakter vitrininin emote paketleri
// ---------------------------------------------------------------------------

/// Emote paketini uygula: indir → sha doğrula → .json dosyalarını
/// <app_dir>/emotes/ klasörüne dök. Sürüm damgası (.surum) aynıysa atla.
async fn emote_paketi_uygula(e: &serde_json::Value) -> Result<(), String> {
    let ver = e
        .get("surum")
        .and_then(|v| v.as_str())
        .ok_or("emotepaketi 'surum' yok")?
        .replace(['\\', '/', ':', '*'], "_");
    if ver.is_empty() {
        return Err("emotepaketi 'surum' boş".into());
    }

    let klasor = core::app_dir().join("emotes");
    let damga = klasor.join(".surum");
    if let Ok(eski) = fs::read_to_string(&damga) {
        if eski.trim() == ver {
            return Ok(()); // aynı paket zaten uygulanmış
        }
    }

    let url = e.get("url").and_then(|v| v.as_str()).unwrap_or("");
    if url.is_empty() {
        return Err("emotepaketi 'url' yok".into());
    }
    let sha = e.get("sha256").and_then(|v| v.as_str()).unwrap_or("");
    let hedef_zip = sicak_dir().join(format!("emote-{ver}"));
    indir(url, &hedef_zip, sha).await?;

    fs::create_dir_all(&klasor).map_err(|z| format!("emotes klasör hatası: {z}"))?;
    let mut arşiv = zip::ZipArchive::new(
        fs::File::open(&hedef_zip).map_err(|z| format!("emote zip açılamadı: {z}"))?,
    )
    .map_err(|z| format!("emote zip arşivi bozuk: {z}"))?;
    let n = arşiv.len();
    for i in 0..n {
        let mut girdi = arşiv
            .by_index(i)
            .map_err(|z| format!("emote zip girdi {i} hatası: {z}"))?;
        let ad = girdi.name().replace('\\', "/");
        if ad.is_empty() || ad.contains("..") || ad.ends_with('/') {
            continue;
        }
        // yalnız .json emote dosyaları; klasör yapısı düz
        let Some(dosya_adi) = ad.rsplit('/').next() else { continue };
        if !dosya_adi.to_ascii_lowercase().ends_with(".json") || dosya_adi.starts_with('.') {
            continue;
        }
        let mut cikis = fs::File::create(klasor.join(dosya_adi))
            .map_err(|z| format!("emote yazma hatası: {z}"))?;
        std::io::copy(&mut girdi, &mut cikis)
            .map_err(|z| format!("emote kopyalama hatası: {z}"))?;
    }
    let _ = fs::remove_file(&hedef_zip);
    let _ = fs::write(&damga, &ver);
    core::yikim_log(format!("sicak emote: {ver} paketi uygulandı ({n} girdi)"));
    Ok(())
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

    /// Eski hata: aktif.json "0.5.13" diyor ama klasör silinmiş → launcher
    /// bir daha indirmiyordu ("kardeşimin PC'sinde eski menü" vakası).
    #[test]
    fn aktif_json_tek_basina_yetmez() {
        let kok = std::env::temp_dir().join(format!("yikim-ui-guncel-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&kok);
        std::fs::create_dir_all(kok.join("0.5.13")).unwrap();
        std::fs::write(kok.join("0.5.13").join("index.html"), "<!doctype html>").unwrap();

        let js = serde_json::json!({ "surum": "0.5.13", "klasor": "0.5.13" });
        assert!(guncel_mi(&js, &kok, "0.5.13"));
        assert!(guncel_mi(&js, &kok, "0.5.12"));
        assert!(!guncel_mi(&js, &kok, "0.5.14"));

        // Klasör gitti: aynı sürüm bile yeniden indirilmeli.
        std::fs::remove_dir_all(kok.join("0.5.13")).unwrap();
        assert!(!guncel_mi(&js, &kok, "0.5.13"));

        // Güvensiz klasör adı kabul edilmez.
        let kotu = serde_json::json!({ "surum": "0.5.13", "klasor": "../x" });
        assert!(!guncel_mi(&kotu, &kok, "0.5.13"));

        // Eksik alanlar.
        assert!(!guncel_mi(&serde_json::json!({}), &kok, "0.5.13"));
        let _ = std::fs::remove_dir_all(&kok);
    }
}
