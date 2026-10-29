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

// ---------- Mojang istemcisi ----------

const API: &str = "https://api.minecraftservices.com";
/// Hesap başına iki yükleme arası en az süre. Mojang 429 birikimini hesabı
/// geçici askıya almaya kadar götürebiliyor; bu yüzden yerelde frenliyoruz.
const SOGUMA_MS: i64 = 60_000;

#[derive(Debug, Clone, Serialize, Default)]
pub struct AktifSkin {
    pub dosya: String,
    pub slim: bool,
    pub kaynak: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Pelerin {
    pub id: String,
    pub ad: String,
    pub dosya: Option<String>,
    pub aktif: bool,
}

#[derive(Debug, Clone, Serialize, Default)]
pub struct Varsayilan {
    pub ad: String,
    pub dosya: String,
    pub slim: bool,
}

#[derive(Debug, Clone, Serialize, Default)]
pub struct SkinHub {
    pub premium: bool,
    pub cevrimdisi: bool,
    pub aktif: Option<AktifSkin>,
    pub kitaplik: Vec<SkinKayit>,
    pub pelerinler: Vec<Pelerin>,
    pub pelerin_aktif: Option<String>,
    pub yedek_var: bool,
    pub varsayilanlar: Vec<Varsayilan>,
    pub hata: Option<String>,
}

pub fn hesap_anahtari(acc: &crate::auth::Account) -> String {
    acc.uuid.replace('-', "").to_lowercase()
}

fn skins_kok() -> PathBuf {
    crate::core::app_dir().join("skins")
}

fn cache_kok() -> PathBuf {
    crate::core::app_dir().join("cache")
}

fn yedek_kok() -> PathBuf {
    skins_kok().join("yedek")
}

/// HTTP hata kodunu kullanıcıya anlaşılır mesaja çevirir.
pub fn hata_esle(status: u16, govde: &str, retry_after: Option<u64>) -> String {
    let kisa: String = govde.chars().take(160).collect();
    match status {
        401 => "Oturumun düşmüş — hesaplarına gidip tekrar giriş yapman gerekiyor.".to_string(),
        403 => {
            let alt = govde.to_lowercase();
            if alt.contains("suspend") {
                "Mojang bu hesabı geçici olarak askıya almış görünüyor. Bir süre sonra tekrar dene."
                    .to_string()
            } else {
                format!("Mojang bu işlemi reddetti (403). {kisa}")
            }
        }
        429 => match retry_after {
            Some(s) => format!(
                "Mojang çok sık değişiklik gördü — yaklaşık {s} saniye sonra tekrar dene."
            ),
            None => "Mojang çok sık değişiklik gördü — yaklaşık 1 dakika sonra tekrar dene."
                .to_string(),
        },
        400 => format!("Mojang skini kabul etmedi (400). {kisa}"),
        s if s >= 500 => format!("Mojang şu an yanıt vermiyor ({s}). Biraz sonra tekrar dene."),
        s => format!("Mojang isteği başarısız oldu ({s}). {kisa}"),
    }
}

/// Son yükleme zamanı haritasına bakarak soğuma penceresini denetler.
/// `Err(kalan_ms)` → henüz yükleme yapılamaz.
pub fn soguma_kontrol_an(
    son: &std::collections::HashMap<String, i64>,
    anahtar: &str,
    simdi: i64,
) -> Result<(), i64> {
    match son.get(anahtar) {
        Some(t) => {
            let gecen = simdi - t;
            if gecen < SOGUMA_MS {
                Err(SOGUMA_MS - gecen)
            } else {
                Ok(())
            }
        }
        None => Ok(()),
    }
}

fn son_giy() -> &'static std::sync::Mutex<std::collections::HashMap<String, i64>> {
    static SON: std::sync::OnceLock<std::sync::Mutex<std::collections::HashMap<String, i64>>> =
        std::sync::OnceLock::new();
    SON.get_or_init(|| std::sync::Mutex::new(std::collections::HashMap::new()))
}

fn soğuma_kontrol(acc: &crate::auth::Account) -> Result<(), String> {
    let key = hesap_anahtari(acc);
    let simdi = crate::core::now_millis();
    let harita = son_giy().lock().map_err(|_| "kilit hatası".to_string())?;
    match soguma_kontrol_an(&harita, &key, simdi) {
        Ok(()) => Ok(()),
        Err(kalan) => Err(format!(
            "Çok sık değiştiriyorsun — {} saniye sonra tekrar dene.",
            (kalan + 999) / 1000
        )),
    }
}

fn soguma_isaretle(acc: &crate::auth::Account) {
    if let Ok(mut harita) = son_giy().lock() {
        harita.insert(hesap_anahtari(acc), crate::core::now_millis());
    }
}

fn hesap_kaydet(acc: &crate::auth::Account) {
    if let Some(mut liste) =
        crate::util::read_json::<Vec<crate::auth::Account>>(&crate::core::accounts_path())
    {
        if let Some(k) = liste.iter_mut().find(|a| a.id == acc.id) {
            *k = acc.clone();
            let _ = crate::commands::save_accounts(&liste);
        }
    }
}

/// Geçerli erişim jetonu; süresi dolmuşsa yeniler (gerekirse zorla).
async fn token_al(acc: &crate::auth::Account, zorla: bool) -> Result<String, String> {
    if acc.kind != "microsoft" {
        return Err("premium_gerekli".to_string());
    }
    let gecerli = acc.expires_at > crate::core::now_millis() + 60_000;
    if !zorla && !acc.access_token.is_empty() && gecerli {
        return Ok(acc.access_token.clone());
    }
    let yen = crate::auth::refresh_account(acc).await?;
    hesap_kaydet(&yen);
    if yen.access_token.is_empty() {
        return Err("Oturum yenilenemedi — tekrar giriş yapman gerekiyor.".to_string());
    }
    Ok(yen.access_token)
}

fn retry_after_baslik(r: &reqwest::Response) -> Option<u64> {
    r.headers()
        .get("retry-after")
        .and_then(|v| v.to_str().ok())
        .and_then(|s| s.trim().parse::<u64>().ok())
}

/// GET /minecraft/profile — 401'de jetonu bir kez zorla yeniler.
async fn profil_cek(acc: &crate::auth::Account) -> Result<serde_json::Value, String> {
    let mut token = token_al(acc, false).await?;
    for deneme in 0..2 {
        let r = crate::core::http_client()
            .get(format!("{API}/minecraft/profile"))
            .bearer_auth(&token)
            .send()
            .await
            .map_err(|e| format!("Mojang'a ulaşılamadı: {e}"))?;
        let status = r.status().as_u16();
        if status == 401 && deneme == 0 {
            token = token_al(acc, true).await?;
            continue;
        }
        if r.status().is_success() {
            return r
                .json()
                .await
                .map_err(|e| format!("Mojang yanıtı okunamadı: {e}"));
        }
        let retry = retry_after_baslik(&r);
        let govde = r.text().await.unwrap_or_default();
        return Err(hata_esle(status, &govde, retry));
    }
    Err("Oturum yenilenemedi — tekrar giriş yapman gerekiyor.".to_string())
}

fn aktif_isle(dosya: &Path, slim: bool, kaynak: &str) -> Option<AktifSkin> {
    Some(AktifSkin {
        dosya: dosya.to_string_lossy().to_string(),
        slim,
        kaynak: kaynak.to_string(),
    })
}

/// Profildeki ACTIVE skini indirip cache'e yazar.
async fn aktif_indir(profil: &serde_json::Value, key: &str) -> Option<AktifSkin> {
    let skin = profil["skins"]
        .as_array()?
        .iter()
        .find(|s| s["state"].as_str() == Some("ACTIVE"))?;
    let url = skin["url"].as_str()?;
    let slim = skin["variant"].as_str() == Some("SLIM");
    let bayt = crate::core::http_client()
        .get(url)
        .send()
        .await
        .ok()?
        .bytes()
        .await
        .ok()?;
    if bayt.len() < 64 {
        return None;
    }
    let cache = cache_kok();
    std::fs::create_dir_all(&cache).ok()?;
    let png = cache.join(format!("skin-{key}.png"));
    let meta = cache.join(format!("skin-{key}.json"));
    if atomik_yaz(&png, &bayt).is_err() {
        return None;
    }
    let _ = atomik_yaz(&meta, serde_json::json!({ "slim": slim }).to_string().as_bytes());
    aktif_isle(&png, slim, "mojang")
}

fn dosya_guvenli(s: &str) -> String {
    s.chars()
        .filter(|c| c.is_ascii_alphanumeric() || *c == '-')
        .take(64)
        .collect()
}

/// Profildeki tüm pelerinleri indirir; liste `cache/capes-<key>.json`a yazılır
/// (internetsiz açılışta son hâli gösterilebilsin).
async fn pelerinleri_indir(profil: &serde_json::Value, key: &str) -> Vec<Pelerin> {
    let cache = cache_kok();
    let _ = std::fs::create_dir_all(&cache);
    let mut liste = Vec::new();
    let aktif_id = profil["capes"]
        .as_array()
        .map(|_| ())
        .and_then(|_| {
            profil["capes"]
                .as_array()
                .unwrap()
                .iter()
                .find(|c| c["state"].as_str() == Some("ACTIVE"))
                .and_then(|c| c["id"].as_str())
                .map(|s| s.to_string())
        });

    if let Some(capes) = profil["capes"].as_array() {
        for cape in capes {
            let Some(id) = cape["id"].as_str() else { continue };
            let ad = cape["alias"].as_str().unwrap_or("Pelerin").to_string();
            let aktif = cape["state"].as_str() == Some("ACTIVE");
            let dosya = cache.join(format!("cape-{}.png", dosya_guvenli(id)));
            let var = std::fs::metadata(&dosya).map(|m| m.len() > 0).unwrap_or(false);
            if !var {
                if let Some(url) = cape["url"].as_str() {
                    if let Ok(r) = crate::core::http_client().get(url).send().await {
                        if let Ok(b) = r.bytes().await {
                            let _ = atomik_yaz(&dosya, &b);
                        }
                    }
                }
            }
            let dosya = std::fs::metadata(&dosya)
                .map(|m| m.len() > 0)
                .unwrap_or(false)
                .then(|| dosya.to_string_lossy().to_string());
            // Aktif pelerini sahne için ayrı adla da sakla.
            if aktif {
                if let Some(d) = &dosya {
                    let _ = std::fs::copy(d, cache.join(format!("cape-aktif-{key}.png")));
                }
            }
            liste.push(Pelerin {
                id: id.to_string(),
                ad,
                dosya,
                aktif,
            });
        }
    }
    if let Ok(govde) = serde_json::to_vec(&liste) {
        let _ = atomik_yaz(&cache.join(format!("capes-{key}.json")), &govde);
    }
    if aktif_id.is_none() {
        let _ = std::fs::remove_file(cache.join(format!("cape-aktif-{key}.png")));
    }
    liste
}

fn pelerin_cache_oku(key: &str) -> Vec<Pelerin> {
    std::fs::read(cache_kok().join(format!("capes-{key}.json")))
        .ok()
        .and_then(|v| serde_json::from_slice::<Vec<Pelerin>>(&v).ok())
        .unwrap_or_default()
}

fn aktif_cache(key: &str) -> Option<AktifSkin> {
    let png = cache_kok().join(format!("skin-{key}.png"));
    if !std::fs::metadata(&png).map(|m| m.len() > 0).unwrap_or(false) {
        return None;
    }
    let slim = std::fs::read_to_string(cache_kok().join(format!("skin-{key}.json")))
        .ok()
        .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
        .and_then(|j| j["slim"].as_bool())
        .unwrap_or(false);
    aktif_isle(&png, slim, "cache")
}

/// Varsayılan Steve/Alex kartları — gömülü resmî paftalar cache'e yazılır
/// (asset protokolü yalnız app_dir kapsamını açar).
fn varsayilan_kartlari() -> Vec<Varsayilan> {
    let cache = cache_kok();
    let _ = std::fs::create_dir_all(&cache);
    let mut liste = Vec::new();
    for (ad, slim, bayt) in [
        ("Steve", false, crate::commands::VARSAYILAN_STEVE),
        ("Alex", true, crate::commands::VARSAYILAN_ALEX),
    ] {
        let yol = cache.join(format!(
            "varsayilan-{}.png",
            if slim { "alex" } else { "steve" }
        ));
        let gecerli = std::fs::metadata(&yol).map(|m| m.len() > 0).unwrap_or(false);
        if !gecerli && atomik_yaz(&yol, bayt).is_err() {
            continue;
        }
        liste.push(Varsayilan {
            ad: ad.to_string(),
            dosya: yol.to_string_lossy().to_string(),
            slim,
        });
    }
    liste
}

fn hub_cache(acc: &crate::auth::Account) -> SkinHub {
    let key = hesap_anahtari(acc);
    let mut hub = SkinHub {
        premium: acc.kind == "microsoft",
        cevrimdisi: false,
        aktif: aktif_cache(&key),
        kitaplik: kitaplik_oku(&skins_kok()),
        pelerinler: pelerin_cache_oku(&key),
        pelerin_aktif: None,
        yedek_var: yedek_var(acc),
        varsayilanlar: varsayilan_kartlari(),
        hata: None,
    };
    hub.pelerin_aktif = hub
        .pelerinler
        .iter()
        .find(|p| p.aktif)
        .map(|p| p.id.clone());
    hub
}

/// Premium değilse ağa hiç çıkmadan `{premium:false}` döner.
/// Ağ hatasında son cache ile `cevrimdisi:true`.
pub async fn hub_getir(acc: &crate::auth::Account) -> SkinHub {
    let mut hub = hub_cache(acc);
    if !hub.premium {
        hub.hata = Some("premium_gerekli".to_string());
        return hub;
    }
    let key = hesap_anahtari(acc);
    match profil_cek(acc).await {
        Ok(profil) => {
            if let Some(a) = aktif_indir(&profil, &key).await {
                hub.aktif = Some(a);
            }
            hub.pelerinler = pelerinleri_indir(&profil, &key).await;
            hub.pelerin_aktif = hub
                .pelerinler
                .iter()
                .find(|p| p.aktif)
                .map(|p| p.id.clone());
            hub.cevrimdisi = false;
        }
        Err(e) => {
            hub.cevrimdisi = true;
            hub.hata = Some(e);
        }
    }
    hub
}

fn yedek_yolu(acc: &crate::auth::Account, uzanti: &str) -> PathBuf {
    yedek_kok().join(format!("{}.{uzanti}", hesap_anahtari(acc)))
}

/// Giymeden önce mevcut aktif skini yedekler (varsa).
async fn yedekle(acc: &crate::auth::Account, profil: Option<&serde_json::Value>) {
    let key = hesap_anahtari(acc);
    let mevcut_png = cache_kok().join(format!("skin-{key}.png"));
    let mevcut_meta = cache_kok().join(format!("skin-{key}.json"));
    let mut kaynak: Option<(Vec<u8>, bool)> = None;
    if let Some(p) = profil {
        if let Some(url) = p["skins"]
            .as_array()
            .and_then(|a| a.iter().find(|s| s["state"].as_str() == Some("ACTIVE")))
            .and_then(|s| s["url"].as_str())
        {
            if let Ok(r) = crate::core::http_client().get(url).send().await {
                if let Ok(b) = r.bytes().await {
                    let slim = p["skins"]
                        .as_array()
                        .and_then(|a| a.iter().find(|s| s["state"].as_str() == Some("ACTIVE")))
                        .and_then(|s| s["variant"].as_str())
                        == Some("SLIM");
                    if b.len() > 64 {
                        kaynak = Some((b.to_vec(), slim));
                    }
                }
            }
        }
    }
    let (bayt, slim) = match kaynak {
        Some(v) => v,
        None => {
            let Ok(bayt) = std::fs::read(&mevcut_png) else { return };
            let slim = std::fs::read_to_string(&mevcut_meta)
                .ok()
                .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
                .and_then(|j| j["slim"].as_bool())
                .unwrap_or(false);
            (bayt, slim)
        }
    };
    if std::fs::create_dir_all(yedek_kok()).is_err() {
        return;
    }
    let _ = atomik_yaz(&yedek_yolu(acc, "png"), &bayt);
    let _ = atomik_yaz(
        &yedek_yolu(acc, "json"),
        serde_json::json!({ "slim": slim }).to_string().as_bytes(),
    );
}

pub fn yedek_var(acc: &crate::auth::Account) -> bool {
    std::fs::metadata(yedek_yolu(acc, "png"))
        .map(|m| m.len() > 64)
        .unwrap_or(false)
}

fn yedek_slim(acc: &crate::auth::Account) -> bool {
    std::fs::read_to_string(yedek_yolu(acc, "json"))
        .ok()
        .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
        .and_then(|j| j["slim"].as_bool())
        .unwrap_or(false)
}

/// Skini Mojang hesabına yükler; başarıda cache'i tazeler.
pub async fn skin_uygula(
    acc: &crate::auth::Account,
    veri: &[u8],
    slim: bool,
) -> Result<SkinHub, String> {
    if acc.kind != "microsoft" {
        return Err("premium_gerekli".to_string());
    }
    let png = dogrula_png(veri)?;
    soğuma_kontrol(acc)?;

    let key = hesap_anahtari(acc);
    // Yedek: önce profilden, olmazsa cache'ten.
    let profil = profil_cek(acc).await.ok();
    yedekle(acc, profil.as_ref()).await;

    let mut token = token_al(acc, false).await?;
    for deneme in 0..2 {
        let form = reqwest::multipart::Form::new()
            .text("variant", if slim { "slim" } else { "classic" })
            .part(
                "file",
                reqwest::multipart::Part::bytes(png.clone())
                    .file_name("skin.png")
                    .mime_str("image/png")
                    .map_err(|e| e.to_string())?,
            );
        let r = crate::core::http_client()
            .post(format!("{API}/minecraft/profile/skins"))
            .bearer_auth(&token)
            .multipart(form)
            .send()
            .await
            .map_err(|e| format!("Mojang'a ulaşılamadı: {e}"))?;
        let status = r.status().as_u16();
        if status == 401 && deneme == 0 {
            token = token_al(acc, true).await?;
            continue;
        }
        if r.status().is_success() {
            // Cache'i yeni skinle tazele (eski skin görünmeye devam etmesin).
            std::fs::create_dir_all(cache_kok()).ok();
            let png_yol = cache_kok().join(format!("skin-{key}.png"));
            atomik_yaz(&png_yol, &png)?;
            let _ = atomik_yaz(
                &cache_kok().join(format!("skin-{key}.json")),
                serde_json::json!({ "slim": slim }).to_string().as_bytes(),
            );
            soguma_isaretle(acc);
            return Ok(hub_cache(acc));
        }
        let retry = retry_after_baslik(&r);
        let govde = r.text().await.unwrap_or_default();
        if status == 429 {
            soguma_isaretle(acc);
        }
        return Err(hata_esle(status, &govde, retry));
    }
    Err("Oturum yenilenemedi — tekrar giriş yapman gerekiyor.".to_string())
}

/// Pelerini takar (`Some`) veya çıkarır (`None`).
pub async fn pelerin_uygula(
    acc: &crate::auth::Account,
    cape_id: Option<&str>,
) -> Result<SkinHub, String> {
    if acc.kind != "microsoft" {
        return Err("premium_gerekli".to_string());
    }
    if let Some(id) = cape_id {
        if !guvenli_id(id) {
            return Err("Geçersiz pelerin kimliği.".to_string());
        }
    }
    let key = hesap_anahtari(acc);
    let mut token = token_al(acc, false).await?;
    for deneme in 0..2 {
        let istek = match cape_id {
            Some(id) => crate::core::http_client()
                .put(format!("{API}/minecraft/profile/capes/active"))
                .bearer_auth(&token)
                .json(&serde_json::json!({ "capeId": id })),
            None => crate::core::http_client()
                .delete(format!("{API}/minecraft/profile/capes/active"))
                .bearer_auth(&token),
        };
        let r = istek
            .send()
            .await
            .map_err(|e| format!("Mojang'a ulaşılamadı: {e}"))?;
        let status = r.status().as_u16();
        if status == 401 && deneme == 0 {
            token = token_al(acc, true).await?;
            continue;
        }
        if r.status().is_success() {
            // Cache'teki pelerin listesini güncelle (sonraki açılış ağsız doğru görünsün).
            let mut liste = pelerin_cache_oku(&key);
            for p in liste.iter_mut() {
                p.aktif = Some(p.id.as_str()) == cape_id;
            }
            if let Ok(govde) = serde_json::to_vec(&liste) {
                let _ = atomik_yaz(&cache_kok().join(format!("capes-{key}.json")), &govde);
            }
            let aktif_dosya = cache_kok().join(format!("cape-aktif-{key}.png"));
            match cape_id.and_then(|id| {
                liste
                    .iter()
                    .find(|p| p.id == id)
                    .and_then(|p| p.dosya.clone())
            }) {
                Some(d) => {
                    let _ = std::fs::copy(d, &aktif_dosya);
                }
                None => {
                    let _ = std::fs::remove_file(&aktif_dosya);
                }
            }
            return Ok(hub_cache(acc));
        }
        let retry = retry_after_baslik(&r);
        let govde = r.text().await.unwrap_or_default();
        return Err(hata_esle(status, &govde, retry));
    }
    Err("Oturum yenilenemedi — tekrar giriş yapman gerekiyor.".to_string())
}

/// Son giymeden önceki skini geri yükler.
pub async fn yedek_geri_yukle(acc: &crate::auth::Account) -> Result<SkinHub, String> {
    let yol = yedek_yolu(acc, "png");
    let bayt = std::fs::read(&yol).map_err(|_| "Geri yüklenecek yedek yok.".to_string())?;
    let slim = yedek_slim(acc);
    skin_uygula(acc, &bayt, slim).await
}

// ---------- Tauri komutları ----------

/// Yerel skin kitaplığının kökü (UI/Dışa aktarma için).
pub fn kitaplik_kok() -> PathBuf {
    skins_kok()
}

fn hesap_bul(id: &str) -> Result<crate::auth::Account, String> {
    crate::commands::load_accounts()
        .into_iter()
        .find(|a| a.id == id)
        .ok_or_else(|| "Hesap bulunamadı.".to_string())
}

#[tauri::command]
pub async fn cmd_skin_hub(id: String) -> Result<SkinHub, String> {
    let acc = hesap_bul(&id)?;
    Ok(hub_getir(&acc).await)
}

/// Skini doğrular, (ad verilmişse) kitaplığa yazar ve Mojang'a yükler.
#[tauri::command]
pub async fn cmd_skin_giy(
    id: String,
    veri: Vec<u8>,
    slim: bool,
    ad: Option<String>,
) -> Result<SkinHub, String> {
    let acc = hesap_bul(&id)?;
    let png = dogrula_png(&veri)?;
    if let Some(ad) = ad.as_deref() {
        kayit_ekle(&kitaplik_kok(), ad, &png, slim, "editor")?;
    }
    skin_uygula(&acc, &png, slim).await
}

/// Kitaplıktaki bir kaydı giyer.
#[tauri::command]
pub async fn cmd_skin_giy_kitaplik(id: String, kayit_id: String) -> Result<SkinHub, String> {
    let acc = hesap_bul(&id)?;
    let liste = kitaplik_oku(&kitaplik_kok());
    let kayit = liste
        .iter()
        .find(|k| k.id == kayit_id)
        .ok_or_else(|| "Skin bulunamadı.".to_string())?;
    let veri = std::fs::read(&kayit.dosya).map_err(|_| "Skin dosyası okunamadı.".to_string())?;
    skin_uygula(&acc, &veri, kayit.slim).await
}

#[tauri::command]
pub async fn cmd_skin_pelerin(
    id: String,
    cape_id: Option<String>,
) -> Result<SkinHub, String> {
    let acc = hesap_bul(&id)?;
    pelerin_uygula(&acc, cape_id.as_deref()).await
}

#[tauri::command]
pub fn cmd_skin_kaydet(
    ad: String,
    veri: Vec<u8>,
    slim: bool,
) -> Result<SkinKayit, String> {
    kayit_ekle(&kitaplik_kok(), &ad, &veri, slim, "editor")
}

#[tauri::command]
pub fn cmd_skin_sil(kayit_id: String) -> bool {
    kayit_sil(&kitaplik_kok(), &kayit_id)
}

#[tauri::command]
pub fn cmd_skin_yeniden_adlandir(kayit_id: String, ad: String) -> Result<SkinKayit, String> {
    if !guvenli_id(&kayit_id) {
        return Err("Geçersiz skin kimliği.".to_string());
    }
    let kok = kitaplik_kok();
    let mut liste = kitaplik_oku(&kok);
    let kayit = liste
        .iter_mut()
        .find(|k| k.id == kayit_id)
        .ok_or_else(|| "Skin bulunamadı.".to_string())?;
    let temiz = ad.trim();
    if !temiz.is_empty() {
        kayit.ad = temiz.chars().take(48).collect();
    }
    let kopya = kayit.clone();
    kitaplik_yaz(&kok, &liste)?;
    Ok(kopya)
}

#[tauri::command]
pub fn cmd_skin_yedek(id: String) -> Option<Vec<u8>> {
    let acc = hesap_bul(&id).ok()?;
    std::fs::read(yedek_yolu(&acc, "png")).ok()
}

#[tauri::command]
pub async fn cmd_skin_yedek_geri_yukle(id: String) -> Result<SkinHub, String> {
    let acc = hesap_bul(&id)?;
    yedek_geri_yukle(&acc).await
}

/// PNG'yi `skins/disa/<ad>.png` olarak yazar; tam yolu döner.
#[tauri::command]
pub fn cmd_skin_disa_aktar(ad: String, veri: Vec<u8>) -> Result<String, String> {
    let png = dogrula_png(&veri)?;
    let temiz: String = ad
        .trim()
        .chars()
        .map(|c| {
            if c.is_ascii_alphanumeric() || c == '-' || c == '_' || c == ' ' {
                c
            } else {
                '_'
            }
        })
        .take(48)
        .collect();
    let temiz = if temiz.trim().is_empty() {
        "skin".to_string()
    } else {
        temiz.trim().to_string()
    };
    let dir = kitaplik_kok().join("disa");
    std::fs::create_dir_all(&dir).map_err(|e| format!("Klasör açılamadı: {e}"))?;
    let yol = dir.join(format!("{temiz}.png"));
    atomik_yaz(&yol, &png)?;
    Ok(yol.to_string_lossy().to_string())
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

    fn hesap() -> crate::auth::Account {
        crate::auth::Account {
            id: "ms:abc".into(),
            name: "Oyuncu".into(),
            kind: "microsoft".into(),
            uuid: "069A79F4-44E9-4726-A5BE-FCA90E38AAF5".into(),
            access_token: "tok".into(),
            refresh_token: "ref".into(),
            expires_at: 0,
        }
    }

    #[test]
    fn hesap_anahtari_tireleri_atar() {
        assert_eq!(hesap_anahtari(&hesap()), "069a79f444e94726a5befca90e38aaf5");
    }

    #[test]
    fn hata_esle_429_retry_after_kullanir() {
        let m = hata_esle(429, "", Some(30));
        assert!(m.contains("30"), "Retry-After mesajda yok: {m}");
        assert!(hata_esle(429, "", None).to_lowercase().contains("dakika"));
    }

    #[test]
    fn hata_esle_401_giris_ister() {
        let m = hata_esle(401, "", None);
        assert!(m.to_lowercase().contains("giriş"), "{m}");
    }

    #[test]
    fn hata_esle_403_askiya_alindi() {
        let m = hata_esle(403, "{\"error\":\"ACCOUNT_SUSPENDED\"}", None);
        assert!(m.to_lowercase().contains("askıya"), "{m}");
        let m2 = hata_esle(403, "Forbidden", None);
        assert!(m2.contains("403"), "{m2}");
    }

    #[test]
    fn soguma_penceresi() {
        use std::collections::HashMap;
        let simdi = 1_000_000i64;
        let bos: HashMap<String, i64> = HashMap::new();
        assert!(soguma_kontrol_an(&bos, "k", simdi).is_ok());

        let mut son = HashMap::new();
        son.insert("k".to_string(), simdi - 30_000);
        let kalan = soguma_kontrol_an(&son, "k", simdi).unwrap_err();
        assert!((29_000..=30_000).contains(&kalan), "kalan={kalan}");

        son.insert("k".to_string(), simdi - 61_000);
        assert!(soguma_kontrol_an(&son, "k", simdi).is_ok());
    }
}
