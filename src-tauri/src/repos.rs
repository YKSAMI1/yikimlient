use crate::core::{http_client, yikim_log};
use serde::Serialize;

/// Modrinth v2 + CurseForge v1 (beta) API entegrasyonu.
/// CurseForge API anahtarı yoksa CF aramaları sessizce atlanır (yalnızca Modrinth çalışır).

// ---------- Ortak tipler ----------

#[derive(Debug, Clone, Serialize)]
pub struct RepoSearchResult {
    pub source: String, // "modrinth" | "curseforge"
    pub id: String,
    pub slug: String,
    pub title: String,
    pub description: String,
    pub author: String,
    pub icon_url: String,
    pub downloads: u64,
    pub kind: String, // "mod" | "modpack"
    pub categories: Vec<String>,
}

/// Bir sürümün bağımlılık gereksinimi.
/// Modrinth: `dependencies: [{project_id, version_id, dependency_type}]`
/// CurseForge: `dependencies: [{addonId, type}]` (3 = Kütüphane/zorunlu).
#[derive(Debug, Clone, Serialize)]
pub struct RepoBagimlilik {
    pub project_id: String,
    pub version_id: String,
    /// "required" | "optional" | "incompatible"
    pub tur: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct RepoVersion {
    pub id: String,
    pub name: String,
    pub version_number: String,
    pub date: String,
    pub game_versions: Vec<String>,
    pub loaders: Vec<String>,
    pub files: Vec<RepoFile>,
    pub source: String,
    pub project_id: String,
    pub dependencies: Vec<RepoBagimlilik>,
}

#[derive(Debug, Clone, Serialize)]
pub struct RepoFile {
    pub url: String,
    pub filename: String,
    pub primary: bool,
    pub size: u64,
}

/// Modrinth bağımlılık türü: 1 = required, 2 = optional, 3 = incompatible.
/// CurseForge türü: 3 = library (kurulmalı), diğerleri opsiyonel.
fn bagimlilik_turu(v: &serde_json::Value) -> String {
    match v["dependency_type"].as_str().map(|s| s.to_lowercase()).unwrap_or_default() {
        t if t.contains("required") || t.contains("library") => "required".into(),
        t if t.contains("incompatible") => "incompatible".into(),
        _ => "optional".into(),
    }
}

/// Modrinth sürümünden bağımlılıkları çöz.
fn modrinth_bağımlılıklar(v: &serde_json::Value) -> Vec<RepoBagimlilik> {
    v["dependencies"]
        .as_array()
        .unwrap_or(&Vec::new())
        .iter()
        .map(|d| RepoBagimlilik {
            project_id: d["project_id"].as_str().unwrap_or("").into(),
            version_id: d["version_id"].as_str().unwrap_or("").into(),
            tur: bagimlilik_turu(d),
        })
        .filter(|b| !b.project_id.is_empty())
        .collect()
}

// ---------- Paket kurulum adımları (canlı ilerleme) ----------

/// Paket kurulumunda bir adımın durumu.
/// UI (sağ alttaki kart) bu olayı dinler ve adım adım gösterir:
/// 1 paket indiriliyor → 2 paket açılıyor → 3 yapılandırma dosyaları →
/// 4 modlar → 5 yükleyici → 6 oyun dosyaları (sürüm kurulumu) → 7 YIKIM modu → 8 hazır.
#[derive(Debug, Clone, Serialize)]
pub struct PackStep {
    pub adim: u8,
    /// "aktif" | "bitti" | "hata" | "atlandi"
    pub durum: String,
    pub done: u32,
    pub total: u32,
    pub ayrinti: String,
    /// kümülatif yüzde (0..100)
    pub percent: u8,
    pub baslik: String,
    /// Hangi kurulumun adımı? (aynı anda birden fazla paket kurulabilsin diye)
    /// Boş ise arayüz adımı TÜM açık paket kartlarına yansıtır (eski akış).
    #[serde(default)]
    pub kimlik: String,
}

/// Kurulum adımını KİMLİKLE yayınla (aynı anda birden fazla paket).
pub fn pack_adim_k(
    handle: &tauri::AppHandle,
    kimlik: &str,
    adim: u8,
    durum: &str,
    done: u32,
    total: u32,
    ayrinti: &str,
) {
    use tauri::Emitter;
    let (bas, ucluk) = adim_araligi(adim);
    let percent = if total > 0 && done <= total {
        bas + ((done as f32 / total as f32) * ucluk as f32) as u8
    } else if durum == "bitti" {
        bas + ucluk
    } else {
        bas
    };
    let _ = handle.emit(
        "pack-step",
        &PackStep {
            adim,
            durum: durum.into(),
            done,
            total,
            ayrinti: ayrinti.into(),
            percent: percent.min(100),
            baslik: adim_adi(adim).into(),
            kimlik: kimlik.into(),
        },
    );
}

pub const ADIM_PAKET: u8 = 1;
pub const ADIM_ACMA: u8 = 2;
pub const ADIM_OVERRIDE: u8 = 3;
pub const ADIM_MODLAR: u8 = 4;
pub const ADIM_LOADER: u8 = 5;
pub const ADIM_SURUM: u8 = 6;
pub const ADIM_MOD: u8 = 7;
pub const ADIM_HAZIR: u8 = 8;

fn adim_adi(adim: u8) -> &'static str {
    match adim {
        ADIM_PAKET => "Paket indiriliyor",
        ADIM_ACMA => "Paket açılıyor",
        ADIM_OVERRIDE => "Yapılandırma dosyaları",
        ADIM_MODLAR => "Modlar indiriliyor",
        ADIM_LOADER => "Yükleyici kuruluyor",
        ADIM_SURUM => "Oyun dosyaları (sürüm kurulumu)",
        ADIM_MOD => "YIKIM modu",
        ADIM_HAZIR => "Hazır",
        _ => "Kurulum",
    }
}

/// Adımın kümülatif yüzde aralığı (başlangıç, uçluk).
fn adim_araligi(adim: u8) -> (u8, u8) {
    match adim {
        ADIM_PAKET => (0, 8),
        ADIM_ACMA => (8, 14),
        ADIM_OVERRIDE => (14, 34),
        ADIM_MODLAR => (34, 74),
        ADIM_LOADER => (74, 84),
        ADIM_SURUM => (84, 96),
        ADIM_MOD => (96, 98),
        ADIM_HAZIR => (98, 100),
        _ => (0, 100),
    }
}

/// Eski imza: kimlik boş. Yeni akış `pack_adim_k` kullanır.
pub fn pack_adim(
    handle: &tauri::AppHandle,
    adim: u8,
    durum: &str,
    done: u32,
    total: u32,
    ayrinti: &str,
) {
    use tauri::Emitter;
    let (bas, ucluk) = adim_araligi(adim);
    let percent = if total > 0 && done <= total {
        bas + ((done as f32 / total as f32) * ucluk as f32) as u8
    } else if durum == "bitti" {
        bas + ucluk
    } else {
        bas
    };
    pack_adim_k(handle, "", adim, durum, done, total, ayrinti);
    // eski dinleyiciler (launch-progress stage=modpack) canlı kalsın
    let _ = handle.emit(
        "launch-progress",
        &crate::launcher::LaunchProgress {
            stage: "modpack".into(),
            percent: percent.min(100),
            detail: if ayrinti.is_empty() { adim_adi(adim).into() } else { ayrinti.into() },
        },
    );
}

/// MB/s biçimi (insan okur).
fn hiz_metni(bytes_per_sec: u64) -> String {
    format!("{:.1} MB/s", bytes_per_sec as f64 / 1_048_576.0)
}

fn cf_api_key() -> Option<String> {
    if let Ok(k) = std::env::var("CURSEFORGE_API_KEY") {
        if !k.trim().is_empty() {
            return Some(k);
        }
    }
    let f = crate::core::app_dir().join("curseforge_key.txt");
    if let Ok(k) = std::fs::read_to_string(&f) {
        let k = k.trim().to_string();
        if !k.is_empty() {
            return Some(k);
        }
    }
    None
}

/// CurseForge taban URL: anahtar varsa resmî API, yoksa genel ayna.
/// Ayna (api.curse.tools) anahtarsız çalışır ve resmî API'yi yansıtır.
fn cf_base() -> &'static str {
    if cf_api_key().is_some() { "https://api.curseforge.com/v1" } else { "https://api.curse.tools/v1/cf" }
}

fn cf_get(client: &reqwest::Client, url: &str) -> reqwest::RequestBuilder {
    let req = client.get(url);
    match cf_api_key() {
        Some(k) => req.header("x-api-key", k),
        None => req,
    }
}

/// CurseForge kaynağı kullanılabilir mi?
///
/// Resmî API anahtarı yoksa anahtarsız genel ayna (api.curse.tools) kullanılır
/// ve ayna resmî API'yi yansıtır. Bu yüzden CurseForge, anahtar olmadan da
/// kullanılabilir; burada `false` dönmek aramayı/kataloğu tamamen kapatıyordu
/// ("CurseForge komple yok" görüntüsünün nedeni).
pub fn curseforge_available() -> bool {
    true
}

/// Arka plan önbellek ısıtma: sürüm manifesti ve haberleri önden indir,
/// kullanıcı ilk tıklamada hızlı olsun. Hataları yut (best-effort).
pub async fn warm_caches(handle: &tauri::AppHandle) -> Result<(), String> {
    let _ = crate::launcher::fetch_manifest().await;
    let _ = crate::stats::fetch_news().await;
    let _ = handle;
    Ok(())
}

// ---------- Mod logo çözümleme (Modlar sekmesi) ----------

/// Jar dosya adından olası proje adını çıkarır (sürüm segmentinden keser):
/// Yaygın jar adı → gerçek Modrinth slug eşlemeleri. Tahmin motorunun
/// tutarlı yanlış ürettiği kalıplar burada düzeltilir.
const SLUG_ALIASES: &[(&str, &str)] = &[
    ("mousetweaks", "mouse-tweaks"),
    ("appleskin", "appleskin"), // mc1.x ekleri kırpılınca 404 atan kalıp
    ("c2me", "c2me-fabric"),
    ("ferritecore", "ferrite-core"),
    ("yetanotherconfiglib", "yacl"),
    ("yacl", "yacl"),
    ("fabriclanguagekotlin", "fabric-language-kotlin"),
    ("shulkerboxtooltip", "shulkerboxtooltip"),
];

/// "sodium-fabric-0.6.13+mc1.21.6.jar" -> "sodium"
/// "c2me-fabric-mc26.3-0.4.2-alpha.0.88.jar" -> "c2me"
/// "appleskin-fabric-mc26.3-3.0.10.jar" -> "appleskin"
fn guess_slug_from_filename(filename: &str) -> Option<String> {
    let stem = filename.strip_suffix(".jar").unwrap_or(filename);
    let segs: Vec<&str> = stem.split(['-', '_', ' ']).collect();
    // ilk sürüm-vari segmentte kes (sayıyla başlayan veya '+' ile başlayan)
    let mut cut = segs.len();
    for (i, s) in segs.iter().enumerate() {
        let s = s.trim();
        if s.is_empty() { continue; }
        let versiony = s.chars().next().map(|c| c.is_ascii_digit()).unwrap_or(false) || s.starts_with('+');
        if versiony { cut = i; break; }
    }
    let noise = ["fabric", "forge", "neoforge", "quilt", "mc", "minecraft", "client", "multiplayer"];
    let mut parts: Vec<String> = Vec::new();
    for s in segs.iter().take(cut) {
        let low = s.trim().to_ascii_lowercase();
        if low.is_empty() || noise.contains(&low.as_str()) { continue; }
        parts.push(low);
        if parts.len() >= 3 { break; }
    }
    if parts.is_empty() { return None; }
    let joined = parts.join("");
    for (pat, slug) in SLUG_ALIASES {
        if joined == *pat || joined.starts_with(pat) {
            return Some(slug.to_string());
        }
    }
    Some(parts.join("-"))
}

/// Modrinth'te slug ile proje arar; bulursa logo URL döner.
async fn modrinth_icon_for(slug: &str) -> Option<String> {
    let url = format!("https://api.modrinth.com/v2/project/{slug}");
    let resp = http_client().get(&url).send().await.ok()?;
    if !resp.status().is_success() { return None; }
    let js: serde_json::Value = resp.json().await.ok()?;
    js["icon_url"].as_str()
        .filter(|s| !s.is_empty())
        .map(|s| s.to_string())
}

/// Slug direkt tutmadıysa Modrinth aramasıyla proje bul (isim sorgusu), logosunu döner.
/// loader facet'i girilirse c2me gibi fork'lardan gerçek projeye iner.
async fn modrinth_icon_by_search(query: &str, loader: Option<&str>) -> Option<String> {
    let mut facets = vec!["project_type:mod".to_string()];
    if let Some(l) = loader {
        if !l.is_empty() { facets.push(format!("categories:{l}")); }
    }
    let url = format!(
        "https://api.modrinth.com/v2/search?query={}&facets={}&limit=6&index=downloads",
        urlencoding::encode(query),
        urlencoding::encode(&serde_json::to_string(&vec![facets]).unwrap_or_default()),
    );
    let resp = http_client().get(&url).send().await.ok()?;
    if !resp.status().is_success() { return None; }
    let js: serde_json::Value = resp.json().await.ok()?;
    // Adayları puanla: sorgu kelimelerinin slug token'larında TAM geçiş oranı
    // eksi fazla token cezası; eşitlikte indirme sayısı. "moremousetweaks" gibi
    // birleşik sahte eşleşmeleri ve "-fix" eklerini eler.
    let qt: Vec<String> = query
        .to_ascii_lowercase()
        .split_whitespace()
        .map(|s| s.to_string())
        .collect();
    let mut best: Option<(f64, u64, String)> = None;
    for h in js["hits"].as_array()? {
        let slug = h["slug"].as_str().unwrap_or("");
        if slug.is_empty() { continue; }
        let st: Vec<String> = slug
            .to_ascii_lowercase()
            .split(['-', '_', '+', '(', ')'])
            .filter(|s| !s.is_empty())
            .map(|s| s.to_string())
            .collect();
        let hit = qt.iter().filter(|q| st.iter().any(|t| t == *q)).count();
        let cov = if qt.is_empty() { 0.0 } else { hit as f64 / qt.len() as f64 };
        let extra = st.len().saturating_sub(hit);
        let mut score = cov - 0.25 * extra as f64;
        // slug'ın kendisi tek token ve sorguyla birebir — güçlü kanıt
        // ("appleskin" -> "appleskin", "yacl" -> "yacl" gibi)
        if st.len() == 1 && qt.iter().any(|q| *q == st[0]) {
            score += 1.0;
        }
        let dl = h["downloads"].as_u64().unwrap_or(0);
        let better = match &best {
            None => score > 0.0,
            Some((bs, bd, _)) => score > *bs || (score == *bs && dl > *bd),
        };
        if better {
            let icon = h["icon_url"].as_str().unwrap_or("").to_string();
            if !icon.is_empty() {
                best = Some((score, dl, icon));
            }
        }
    }
    best.map(|(_, _, icon)| icon)
}

/// Jar adından insan-okur arama sorgusu: sürüm/loader gürültüsü atılır.
/// "MouseTweaks-fabric-mc26.3-2.31.jar" -> "mousetweaks"
fn human_query_from_filename(filename: &str) -> Option<String> {
    let stem = filename.strip_suffix(".jar").unwrap_or(filename);
    let noise = ["fabric", "forge", "neoforge", "quilt", "mc", "minecraft", "client", "multiplayer"];
    let mut words: Vec<String> = Vec::new();
    for seg in stem.split(['-', '_', ' ']) {
        let low = seg.to_ascii_lowercase();
        if low.is_empty() { continue; }
        if low.chars().next().map(|c| c.is_ascii_digit()).unwrap_or(false) { break; }
        if low.starts_with('+') { break; }
        if noise.contains(&low.as_str()) { continue; }
        if low.starts_with("mc") && low[2..].chars().next().map(|c| c.is_ascii_digit()).unwrap_or(false) { continue; }
        words.push(low);
        if words.len() >= 4 { break; }
    }
    if words.is_empty() { None } else { Some(words.join(" ")) }
}

/// Verilen jar adları için Modrinth logo URL'leri çözer (paralel, hatayı yutar).
/// Strateji: slug direkt -> slug'lı arama (loader facet'li) -> boşluklu ad araması.
pub async fn resolve_mod_icon_urls(filenames: &[String]) -> std::collections::HashMap<String, String> {
    let mut tasks = Vec::new();
    for f in filenames {
        let f = f.clone();
        tasks.push(tokio::spawn(async move {
            // dosya adından loader tahmini (facet için)
            let low = f.to_ascii_lowercase();
            let loader = if low.contains("fabric") { Some("fabric") }
                else if low.contains("forge") { Some("forge") }
                else if low.contains("neoforge") { Some("neoforge") }
                else { None };
            let mut icon: Option<String> = None;
            if low.starts_with("yikimlient-") {
                // YIKIM çekirdeği — Modrinth'te yok; kendi işaretimiz (ağ çağrısı harcamayalım)
                icon = Some(crate::yikim_mod::YIKIM_ICON_DATA_URI.to_string());
            } else if let Some(slug) = guess_slug_from_filename(&f) {
                if let Some(u) = modrinth_icon_for(&slug).await { icon = Some(u); }
            }
            if icon.is_none() {
                if let Some(q) = human_query_from_filename(&f) {
                    if let Some(u) = modrinth_icon_by_search(&q, loader).await { icon = Some(u); }
                }
            }
            (f, icon)
        }));
    }
    let mut out = std::collections::HashMap::new();
    for t in tasks {
        if let Ok((name, Some(icon))) = t.await {
            out.insert(name, icon);
        }
    }
    out
}

// ---------- Modrinth ----------

/// API JSON çağrısı — 15 sn toplam timeout ile (spinner sonsuz dönmesin diye).
pub(crate) async fn api_json_req(req: reqwest::RequestBuilder) -> Result<serde_json::Value, String> {
    match tokio::time::timeout(std::time::Duration::from_secs(15), req.send()).await {
        Err(_) => Err("zaman aşımı (15 sn) — internet bağlantını kontrol et".into()),
        Ok(Err(e)) => Err(e.to_string()),
        Ok(Ok(resp)) => {
            let fut = resp.json::<serde_json::Value>();
            match tokio::time::timeout(std::time::Duration::from_secs(15), fut).await {
                Err(_) => Err("yanıt zaman aşımı (15 sn)".into()),
                Ok(Err(e)) => Err(e.to_string()),
                Ok(Ok(js)) => Ok(js),
            }
        }
    }
}

async fn api_json(url: &str) -> Result<serde_json::Value, String> {
    api_json_req(http_client().get(url)).await
}

async fn modrinth_search(
    query: &str,
    kind: &str,
    versions: &[String],
    loader: &str,
    offset: usize,
    limit: usize,
) -> Result<Vec<RepoSearchResult>, String> {
    modrinth_search_sirali(query, kind, versions, loader, offset, limit, "relevance").await
}

/// `index`: relevance | downloads | follows | newest | updated
async fn modrinth_search_sirali(
    query: &str,
    kind: &str,
    versions: &[String],
    loader: &str,
    offset: usize,
    limit: usize,
    index: &str,
) -> Result<Vec<RepoSearchResult>, String> {
    let mut facets: Vec<Vec<String>> = vec![vec![format!("project_type:{kind}")]];
    if !loader.is_empty() {
        facets.push(vec![format!("categories:{loader}")]);
    }
    if !versions.is_empty() {
        facets.push(versions.iter().map(|v| format!("versions:{v}")).collect());
    }
    // Modrinth search yalnızca GET destekler (POST 404 döner)
    let url = format!(
        "https://api.modrinth.com/v2/search?query={}&facets={}&index={}&offset={}&limit={}",
        urlencoding::encode(query),
        urlencoding::encode(&serde_json::to_string(&facets).unwrap_or_default()),
        index,
        offset,
        limit.min(50),
    );
    let js: serde_json::Value = api_json(&url).await?;
    let mut out = Vec::new();
    if let Some(hits) = js["hits"].as_array() {
        for h in hits {
            let cats: Vec<String> = h["display_categories"]
                .as_array()
                .unwrap_or(&Vec::new())
                .iter()
                .filter_map(|c| c.as_str().map(|s| s.to_string()))
                .collect();
            out.push(RepoSearchResult {
                source: "modrinth".into(),
                id: h["project_id"].as_str().unwrap_or("").into(),
                slug: h["slug"].as_str().unwrap_or("").into(),
                title: h["title"].as_str().unwrap_or("").into(),
                description: h["description"].as_str().unwrap_or("").into(),
                author: h["author"].as_str().unwrap_or("").into(),
                icon_url: h["icon_url"].as_str().unwrap_or("").into(),
                downloads: h["downloads"].as_u64().unwrap_or(0),
                kind: kind.into(),
                categories: cats,
            });
        }
    }
    Ok(out)
}

async fn modrinth_versions(
    project_id: &str,
    kind: &str,
    loader: &str,
    game_version: &str,
) -> Result<Vec<RepoVersion>, String> {
    let mut url = format!("https://api.modrinth.com/v2/project/{project_id}/version");
    if !loader.is_empty() || !game_version.is_empty() {
        url.push('?');
        let mut params = Vec::new();
        if !loader.is_empty() {
            params.push(format!(
                "loaders=[\"{loader}\"]"
            ));
        }
        if !game_version.is_empty() {
            params.push(format!("game_versions=[\"{game_version}\"]"));
        }
        url.push_str(&params.join("&"));
    }
    let arr: serde_json::Value = api_json(&url).await?;
    let mut out = Vec::new();
    if let Some(list) = arr.as_array() {
        for v in list {
            let files: Vec<RepoFile> = v["files"]
                .as_array()
                .unwrap_or(&Vec::new())
                .iter()
                .map(|f| RepoFile {
                    url: f["url"].as_str().unwrap_or("").into(),
                    filename: f["filename"].as_str().unwrap_or("").into(),
                    primary: f["primary"].as_bool().unwrap_or(false),
                    size: f["size"].as_u64().unwrap_or(0),
                })
                .collect();
            out.push(RepoVersion {
                id: v["id"].as_str().unwrap_or("").into(),
                name: v["name"].as_str().unwrap_or("").into(),
                version_number: v["version_number"].as_str().unwrap_or("").into(),
                date: v["date_published"].as_str().unwrap_or("").into(),
                game_versions: str_list(&v["game_versions"]),
                loaders: str_list(&v["loaders"]),
                files,
                dependencies: modrinth_bağımlılıklar(&v),
                source: "modrinth".into(),
                project_id: project_id.into(),
            });
        }
    }
    Ok(out)
    .map(|v: Vec<RepoVersion>| { let _ = kind; v })
}

fn str_list(v: &serde_json::Value) -> Vec<String> {
    v.as_array()
        .unwrap_or(&Vec::new())
        .iter()
        .filter_map(|x| x.as_str().map(|s| s.to_string()))
        .collect()
}

// ---------- CurseForge ----------

/// CF classId: 4471 = Modpacks, 4476 = Mods
fn cf_class_id(kind: &str) -> u32 {
    if kind == "modpack" { 4471 } else { 4476 }
}

/// CF modLoaderType: 1 = Forge, 4 = Fabric, 5 = Quilt, 6 = NeoForge, 0 = Any.
/// (Resmî CurseForge enum'u: Forge=1, Cauldron=2, LiteLoader=3, Fabric=4,
/// Quilt=5, NeoForge=6. Eski kod forge'u 5 sanıyordu → Quilt sonuçları ya da
/// boş liste dönüyordu.)
fn cf_loader_id(loader: &str) -> u32 {
    match loader.to_lowercase().as_str() {
        "forge" => 1,
        "fabric" => 4,
        "quilt" => 5,
        "neoforge" => 6,
        _ => 0,
    }
}

async fn curseforge_search(
    query: &str,
    kind: &str,
    versions: &[String],
    loader: &str,
    offset: usize,
    limit: usize,
) -> Result<Vec<RepoSearchResult>, String> {
    let game_versions: Vec<&str> = versions.iter().map(|s| s.as_str()).collect();
    let base = cf_base();
    let mut url = format!(
        "{base}/mods/search?gameId=432&classId={}&searchFilter={}&sortField=2&sortOrder=desc&pageSize={}&index={}",
        cf_class_id(kind),
        urlencoding::encode(query),
        limit.min(50),
        (offset / limit.max(1)).max(0) * limit.min(50),
    );
    if game_versions.len() == 1 {
        url.push_str(&format!("&gameVersion={}", urlencoding::encode(game_versions[0])));
    }
    // Yükleyici süzgeci gerçekten uygulanır (önceden yok sayılıyordu).
    let lid = cf_loader_id(loader);
    if lid != 0 {
        url.push_str(&format!("&modLoaderType={lid}"));
    }
    let js: serde_json::Value = api_json_req(cf_get(&http_client(), &url)).await?;
    let mut out = Vec::new();
    if let Some(data) = js["data"].as_array() {
        for m in data {
            let authors = m["authors"].as_array().unwrap_or(&Vec::new()).iter()
                .filter_map(|a| a["name"].as_str().map(|s| s.to_string()))
                .collect::<Vec<_>>().join(", ");
            out.push(RepoSearchResult {
                source: "curseforge".into(),
                id: m["id"].as_u64().unwrap_or(0).to_string(),
                slug: m["slug"].as_str().unwrap_or("").into(),
                title: m["name"].as_str().unwrap_or("").into(),
                description: m["summary"].as_str().unwrap_or("").into(),
                author: authors,
                icon_url: m["logo"]["thumbnailUrl"].as_str().unwrap_or("").into(),
                downloads: m["downloadCount"].as_u64().unwrap_or(0),
                kind: kind.into(),
                categories: Vec::new(),
            });
        }
    }
    Ok(out)
}

async fn curseforge_files(
    mod_id: &str,
    game_version: &str,
    loader: &str,
) -> Result<Vec<RepoVersion>, String> {
    let mut url = format!("{}/mods/{mod_id}/files", cf_base());
    let mut params: Vec<String> = Vec::new();
    if !game_version.is_empty() {
        params.push(format!("gameVersion={game_version}"));
    }
    let lid = cf_loader_id(loader);
    if lid != 0 {
        params.push(format!("modLoaderType={lid}"));
    }
    if !params.is_empty() {
        url.push('?');
        url.push_str(&params.join("&"));
    }
    let js: serde_json::Value = api_json_req(cf_get(&http_client(), &url)).await?;
    let mut out = Vec::new();
    if let Some(data) = js["data"].as_array() {
        for f in data {
            out.push(RepoVersion {
                id: f["id"].as_u64().unwrap_or(0).to_string(),
                name: f["displayName"].as_str().unwrap_or("").into(),
                version_number: f["displayName"].as_str().unwrap_or("").into(),
                date: f["fileDate"].as_str().unwrap_or("").into(),
                game_versions: str_list(&f["gameVersions"]),
                loaders: Vec::new(),
                files: vec![RepoFile {
                    url: f["downloadUrl"].as_str().unwrap_or("").into(),
                    filename: f["fileName"].as_str().unwrap_or("").into(),
                    primary: true,
                    size: f["fileLength"].as_u64().unwrap_or(0),
                }],
                dependencies: Vec::new(),
                source: "curseforge".into(),
                project_id: mod_id.into(),
            });
        }
    }
    Ok(out)
}

// ---------- Birleşik arama ----------

pub async fn search_all(
    query: &str,
    kind: &str,
    versions: &[String],
    loader: &str,
    offset: usize,
    limit: usize,
) -> Result<(Vec<RepoSearchResult>, bool), String> {
    // İçerik türleri (doku paketi/shader/dünya/datapack) → Yalnız Modrinth:
    // CurseForge'un classId haritası bu türlerde güvenilir değil, boş sonuç yerine
    // sağlam kaynağı sunmak daha iyi.
    if matches!(kind, "resourcepack" | "shader" | "world" | "datapack") {
        let mr = modrinth_search(query, kind, versions, loader, offset, limit).await?;
        return Ok((mr, curseforge_available()));
    }
    let (mr, cf) = tokio::join!(
        modrinth_search(query, kind, versions, loader, offset, limit),
        curseforge_search(query, kind, versions, loader, offset, limit)
    );
    // Bir kaynağın hatası TÜM aramayı düşürmesin: diğeriyle devam et.
    let mut out: Vec<RepoSearchResult> = Vec::new();
    match mr {
        Ok(v) => out.extend(v),
        Err(e) => {
            crate::core::yikim_log(format!("Modrinth araması başarısız: {e}"));
            if cf.is_err() {
                return Err(e);
            }
        }
    }
    match cf {
        Ok(v) => out.extend(v),
        Err(e) => crate::core::yikim_log(format!("CurseForge araması başarısız: {e}")),
    }
    // indirilme sayısına göre sırala
    out.sort_by(|a, b| b.downloads.cmp(&a.downloads));
    Ok((out, curseforge_available()))
}

/// Keşfet açılışı: en çok indirilenler (Modrinth'in ana sayfasındaki popüler listesi gibi).
/// CurseForge popular uçları mirror'da güvenilir olmadığından yalnız Modrinth kullanılır.
pub async fn popular(
    kind: &str,
    loader: &str,
    offset: usize,
    limit: usize,
) -> Result<Vec<RepoSearchResult>, String> {
    // index=downloads → sunucu tarafında indirme sırası; offset ile sayfa sayfa akar
    modrinth_search_sirali("", kind, &[], loader, offset, limit.clamp(1, 50), "downloads").await
}

pub async fn versions_for(
    source: &str,
    project_id: &str,
    kind: &str,
    loader: &str,
    game_version: &str,
) -> Result<Vec<RepoVersion>, String> {
    match source {
        "modrinth" => modrinth_versions(project_id, kind, loader, game_version).await,
        "curseforge" => curseforge_files(project_id, game_version, loader).await,
        _ => Err("bilinmeyen kaynak".into()),
    }
}

/// Tek sürüm kimliğinden sürüm bilgisi — 50'lik liste sınırına takılmadan.
/// (Kullanıcı listede görünmeyen eski bir paket sürümünü seçtiğinde gerekir.)
pub async fn version_by_id(
    source: &str,
    project_id: &str,
    version_id: &str,
) -> Option<RepoVersion> {
    match source {
        "modrinth" => {
            let url = format!("https://api.modrinth.com/v2/version/{version_id}");
            let v: serde_json::Value = api_json(&url).await.ok()?;
            let files: Vec<RepoFile> = v["files"]
                .as_array()
                .unwrap_or(&Vec::new())
                .iter()
                .map(|f| RepoFile {
                    url: f["url"].as_str().unwrap_or("").into(),
                    filename: f["filename"].as_str().unwrap_or("").into(),
                    primary: f["primary"].as_bool().unwrap_or(false),
                    size: f["size"].as_u64().unwrap_or(0),
                })
                .collect();
            Some(RepoVersion {
                id: v["id"].as_str().unwrap_or(version_id).into(),
                name: v["name"].as_str().unwrap_or("").into(),
                version_number: v["version_number"].as_str().unwrap_or("").into(),
                date: v["date_published"].as_str().unwrap_or("").into(),
                game_versions: str_list(&v["game_versions"]),
                loaders: str_list(&v["loaders"]),
                files,
                dependencies: modrinth_bağımlılıklar(&v),
                source: "modrinth".into(),
                project_id: project_id.into(),
            })
        }
        "curseforge" => {
            let pid: u64 = project_id.parse().ok()?;
            let fid: u64 = version_id.parse().ok()?;
            let (url, fname) = cf_resolve_file(pid, fid).await?;
            Some(RepoVersion {
                id: version_id.into(),
                name: fname.clone(),
                version_number: fname.clone(),
                date: String::new(),
                game_versions: Vec::new(),
                loaders: Vec::new(),
                files: vec![RepoFile {
                    url,
                    filename: fname,
                    primary: true,
                    size: 0,
                }],
                dependencies: Vec::new(),
                source: "curseforge".into(),
                project_id: project_id.into(),
            })
        }
        _ => None,
    }
}

// ---------- Proje sayfası (v0.7.15) ----------

/// Keşfet'te bir modun "sayfası" (Modrinth'teki proje sayfasının karşılığı).
#[derive(Debug, Clone, Serialize)]
pub struct RepoProject {
    pub source: String,
    pub id: String,
    pub slug: String,
    pub title: String,
    pub description: String,
    /// Modrinth: markdown gövde. CurseForge: HTML'den arındırılmış düz metin.
    pub body: String,
    pub author: String,
    pub icon_url: String,
    pub downloads: u64,
    pub followers: u64,
    pub categories: Vec<String>,
    pub game_versions: Vec<String>,
    pub loaders: Vec<String>,
    pub gallery: Vec<RepoImage>,
    pub links: Vec<RepoLink>,
    pub license: String,
    pub updated: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct RepoImage {
    pub url: String,
    pub title: String,
    pub featured: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct RepoLink {
    pub label: String,
    pub url: String,
}

pub async fn project_detail(source: &str, project_id: &str, kind: &str) -> Result<RepoProject, String> {
    match source {
        "curseforge" => cf_project(project_id, kind).await,
        _ => modrinth_project(project_id).await,
    }
}

async fn modrinth_project(id: &str) -> Result<RepoProject, String> {
    let js = api_json(&format!("https://api.modrinth.com/v2/project/{id}")).await?;
    let mut author = String::new();
    let team = js["team"].as_str().unwrap_or("");
    if !team.is_empty() {
        if let Ok(m) = api_json(&format!("https://api.modrinth.com/v2/team/{team}/members")).await {
            let arr = m.as_array().cloned().unwrap_or_default();
            let sec = arr
                .iter()
                .find(|x| x["role"].as_str() == Some("Owner"))
                .or_else(|| arr.first());
            if let Some(o) = sec {
                author = o["user"]["username"].as_str().unwrap_or("").to_string();
            }
        }
    }
    let mut categories = str_list(&js["categories"]);
    categories.extend(str_list(&js["additional_categories"]));
    let gallery: Vec<RepoImage> = js["gallery"]
        .as_array()
        .unwrap_or(&Vec::new())
        .iter()
        .map(|g| RepoImage {
            url: g["url"].as_str().unwrap_or("").into(),
            title: g["title"].as_str().unwrap_or("").into(),
            featured: g["featured"].as_bool().unwrap_or(false),
        })
        .filter(|g| !g.url.is_empty())
        .collect();
    let mut links = Vec::new();
    for (label, key) in [
        ("Kaynak kodu", "source_url"),
        ("Sorunlar", "issues_url"),
        ("Wiki", "wiki_url"),
        ("Discord", "discord_url"),
    ] {
        if let Some(u) = js[key].as_str() {
            if !u.trim().is_empty() {
                links.push(RepoLink { label: label.into(), url: u.into() });
            }
        }
    }
    links.push(RepoLink {
        label: "Modrinth'te aç".into(),
        url: format!(
            "https://modrinth.com/{}/{}",
            js["project_type"].as_str().unwrap_or("mod"),
            js["slug"].as_str().unwrap_or(id)
        ),
    });
    Ok(RepoProject {
        source: "modrinth".into(),
        id: js["id"].as_str().unwrap_or(id).into(),
        slug: js["slug"].as_str().unwrap_or("").into(),
        title: js["title"].as_str().unwrap_or("").into(),
        description: js["description"].as_str().unwrap_or("").into(),
        body: js["body"].as_str().unwrap_or("").into(),
        author,
        icon_url: js["icon_url"].as_str().unwrap_or("").into(),
        downloads: js["downloads"].as_u64().unwrap_or(0),
        followers: js["followers"].as_u64().unwrap_or(0),
        categories,
        game_versions: str_list(&js["game_versions"]),
        loaders: str_list(&js["loaders"]),
        gallery,
        links,
        license: js["license"]["id"].as_str().unwrap_or("").into(),
        updated: js["updated"].as_str().unwrap_or("").into(),
    })
}

/// CF açıklaması HTML gelir; webview'e ham HTML basmıyoruz (uzak içerik).
/// Etiketleri satır sonuna çevirip varlıkları çözüyoruz → güvenli düz metin.
fn html_to_text(html: &str) -> String {
    let mut s = html.to_string();
    for (from, to) in [
        ("<br>", "\n"),
        ("<br/>", "\n"),
        ("<br />", "\n"),
        ("</p>", "\n\n"),
        ("</li>", "\n"),
        ("<li>", "- "),
        ("</h1>", "\n\n"),
        ("</h2>", "\n\n"),
        ("</h3>", "\n\n"),
        ("</h4>", "\n\n"),
        ("<h1>", "\n\n# "),
        ("<h2>", "\n\n## "),
        ("<h3>", "\n\n### "),
        ("<h4>", "\n\n#### "),
        ("</div>", "\n"),
        ("<hr>", "\n---\n"),
        ("<hr/>", "\n---\n"),
    ] {
        s = s.replace(from, to);
    }
    // <img src="..."> → markdown görseli
    let mut out = String::with_capacity(s.len());
    let mut rest: &str = &s;
    while let Some(i) = rest.find("<img") {
        out.push_str(&rest[..i]);
        let tail = &rest[i..];
        let Some(end) = tail.find('>') else { break };
        let tag = &tail[..=end];
        if let Some(pos) = tag.find("src=\"") {
            let after = &tag[pos + 5..];
            if let Some(q) = after.find('"') {
                let url = &after[..q];
                if url.starts_with("http") {
                    out.push_str(&format!("\n\n![resim]({url})\n\n"));
                }
            }
        }
        rest = &tail[end + 1..];
    }
    out.push_str(rest);
    let mut s = out;
    // kalan etiketleri at
    let mut temiz = String::with_capacity(s.len());
    let mut ic = false;
    for c in s.chars() {
        match c {
            '<' => ic = true,
            '>' => ic = false,
            _ if !ic => temiz.push(c),
            _ => {}
        }
    }
    s = temiz
        .replace("&nbsp;", " ")
        .replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", "\"")
        .replace("&#39;", "'")
        .replace("\r", "");
    // üst üste boş satırları sadeleştir
    let mut sonuc = String::new();
    let mut bos = 0;
    for line in s.lines() {
        if line.trim().is_empty() {
            bos += 1;
            if bos > 2 {
                continue;
            }
        } else {
            bos = 0;
        }
        sonuc.push_str(line.trim_end());
        sonuc.push('\n');
    }
    sonuc
}

async fn cf_project(id: &str, kind: &str) -> Result<RepoProject, String> {
    let client = http_client();
    let js = api_json_req(cf_get(&client, &format!("{}/mods/{id}", cf_base()))).await?;
    let d = &js["data"];
    let mut body = String::new();
    if let Ok(g) = api_json_req(cf_get(&client, &format!("{}/mods/{id}/description", cf_base()))).await {
        if let Some(h) = g["data"].as_str() {
            body = html_to_text(h);
        }
    }
    let gallery: Vec<RepoImage> = d["screenshots"]
        .as_array()
        .unwrap_or(&Vec::new())
        .iter()
        .map(|s| RepoImage {
            url: s["url"].as_str().or_else(|| s["thumbnailUrl"].as_str()).unwrap_or("").into(),
            title: s["title"].as_str().unwrap_or("").into(),
            featured: false,
        })
        .filter(|g| !g.url.is_empty())
        .collect();
    let mut links = Vec::new();
    for (label, key) in [
        ("Kaynak kodu", "sourceUrl"),
        ("Sorunlar", "issuesUrl"),
        ("Wiki", "wikiUrl"),
    ] {
        if let Some(u) = d["links"][key].as_str() {
            if !u.trim().is_empty() {
                links.push(RepoLink { label: label.into(), url: u.into() });
            }
        }
    }
    links.push(RepoLink {
        label: "CurseForge'da aç".into(),
        url: d["links"]["websiteUrl"].as_str().map(|s| s.to_string()).unwrap_or_else(|| {
            let yol = if kind == "modpack" { "minecraft/modpacks" } else { "minecraft/mc-mods" };
            format!("https://www.curseforge.com/{yol}/{id}")
        }),
    });
    let authors = d["authors"].as_array().unwrap_or(&Vec::new()).iter()
        .filter_map(|a| a["name"].as_str().map(|s| s.to_string()))
        .collect::<Vec<_>>()
        .join(", ");
    let categories = d["categories"].as_array().unwrap_or(&Vec::new()).iter()
        .filter_map(|c| c["name"].as_str().map(|s| s.to_string()))
        .collect();
    let mut game_versions: Vec<String> = d["latestFilesIndexes"].as_array().unwrap_or(&Vec::new()).iter()
        .filter_map(|f| f["gameVersion"].as_str().map(|s| s.to_string()))
        .collect();
    game_versions.sort_by(|a, b| b.cmp(a));
    game_versions.dedup();
    Ok(RepoProject {
        source: "curseforge".into(),
        id: d["id"].as_u64().map(|v| v.to_string()).unwrap_or_else(|| id.to_string()),
        slug: d["slug"].as_str().unwrap_or("").into(),
        title: d["name"].as_str().unwrap_or("").into(),
        description: d["summary"].as_str().unwrap_or("").into(),
        body,
        author: authors,
        icon_url: d["logo"]["thumbnailUrl"].as_str().unwrap_or("").into(),
        downloads: d["downloadCount"].as_f64().unwrap_or(0.0) as u64,
        followers: d["thumbsUpCount"].as_f64().unwrap_or(0.0) as u64,
        categories,
        game_versions,
        loaders: Vec::new(),
        gallery,
        links,
        license: String::new(),
        updated: d["dateModified"].as_str().unwrap_or("").into(),
    })
}

// ---------- Mod güncellemeleri (v0.4.11) ----------

/// Bir mod dosyasının güncellemesi: eski dosya → sunucudaki en yeni sürüm.
#[derive(Debug, Clone, Serialize)]
pub struct ModGuncelleme {
    pub filename: String,
    pub yeni_ad: String,
    pub url: String,
    pub surum: String,
}

/// Kurulumdaki her mod jar'ının sha1'ini Modrinth'e sorar; hash farklıysa
/// (yani yayınlanmış daha yeni bir sürüm varsa) güncelleme döner.
/// Hash tabanlı eşleştirme dosya adına bağlı değil — yeniden adlandırılmış
/// ya da "-1.2.3+1.21.1" gibi ekler almış jar'lar da doğru eşleşir.
pub async fn mod_guncellemeleri(inst: &crate::instances::Instance) -> Vec<ModGuncelleme> {
    use sha1::{Digest, Sha1};

    let mods = inst.mods_dir();
    // (sha1, dosya adı, kapalı mı)
    let mut kayitlar: Vec<(String, String, bool)> = Vec::new();
    if let Ok(entries) = std::fs::read_dir(&mods) {
        for e in entries.flatten() {
            let ad = e.file_name().to_string_lossy().to_string();
            let kapali = ad.ends_with(".jar.disabled");
            if !ad.ends_with(".jar") && !kapali {
                continue;
            }
            // YIKIM çekirdeği launcher tarafından yönetilir — dokunma.
            if ad.to_ascii_lowercase().starts_with("yikimlient-") {
                continue;
            }
            let Ok(bayt) = std::fs::read(e.path()) else { continue };
            if bayt.len() < 1024 {
                continue; // boş/bozuk jar
            }
            let mut h = Sha1::new();
            h.update(&bayt);
            kayitlar.push((hex::encode(h.finalize()), ad, kapali));
        }
    }
    if kayitlar.is_empty() {
        return Vec::new();
    }
    let hashler: Vec<String> = kayitlar.iter().map(|(h, _, _)| h.clone()).collect();
    let loader = match inst.mod_loader.as_str() {
        "forge" => "forge",
        "neoforge" => "neoforge",
        "quilt" => "quilt",
        _ => "fabric",
    };
    let govde = serde_json::json!({
        "hashes": hashler,
        "algorithm": "sha1",
        "loaders": [loader],
        "game_versions": [inst.mc_version],
    });
    let yanit = match api_json_req(http_client().post("https://api.modrinth.com/v2/version_files/update").json(&govde)).await {
        Ok(v) => v,
        Err(_) => return Vec::new(),
    };
    let Some(harita) = yanit.as_object() else {
        return Vec::new();
    };
    let mut out = Vec::new();
    for (sha, ad, _kapali) in &kayitlar {
        let Some(surum) = harita.get(sha) else { continue };
        let dosyalar = surum.get("files").and_then(|f| f.as_array());
        let Some(dosya) = dosyalar.and_then(|d| d.iter().find(|f| f.get("primary").and_then(|p| p.as_bool()).unwrap_or(false)).or_else(|| d.first())) else {
            continue;
        };
        let yeni_hash = dosya
            .get("hashes")
            .and_then(|h| h.get("sha1"))
            .and_then(|h| h.as_str())
            .unwrap_or("");
        if yeni_hash == sha {
            continue; // zaten en yeni sürüm
        }
        let Some(url) = dosya.get("url").and_then(|u| u.as_str()) else { continue };
        let yeni_ad = dosya
            .get("filename")
            .and_then(|u| u.as_str())
            .unwrap_or(ad.as_str())
            .to_string();
        out.push(ModGuncelleme {
            filename: ad.clone(),
            yeni_ad,
            url: url.to_string(),
            surum: surum
                .get("version_number")
                .and_then(|v| v.as_str())
                .unwrap_or("yeni")
                .to_string(),
        });
    }
    out
}

/// Modu güncelle: yeni jar'ı indir, eskisini sil, yerine koy.
/// Eski dosya kapalıysa (.jar.disabled) yenisi de kapalı kalır.
pub async fn mod_guncelle(
    inst: &crate::instances::Instance,
    eski_ad: &str,
    url: &str,
    yeni_ad: &str,
) -> Result<String, String> {
    let mods = inst.mods_dir();
    let eski = mods.join(eski_ad);
    let kapali = eski_ad.ends_with(".jar.disabled");
    let temiz_ad = if yeni_ad.ends_with(".jar") { yeni_ad.to_string() } else { format!("{yeni_ad}.jar") };
    let gecici = mods.join(format!("{temiz_ad}.indiriliyor"));
    download_file(url, &gecici, &temiz_ad).await?;
    let boyut = std::fs::metadata(&gecici).map(|m| m.len()).unwrap_or(0);
    if boyut < 1024 {
        let _ = std::fs::remove_file(&gecici);
        return Err("indirilen dosya bozuk (çok küçük)".into());
    }
    let hedef_ad = if kapali { format!("{temiz_ad}.disabled") } else { temiz_ad.clone() };
    let hedef = mods.join(&hedef_ad);
    if eski != hedef {
        let _ = std::fs::remove_file(&eski);
        // eski sürümün kapalı kopyası da kalmasın
        let _ = std::fs::remove_file(mods.join(format!("{}.disabled", eski_ad.trim_end_matches(".disabled"))));
    }
    std::fs::rename(&gecici, &hedef).map_err(|e| format!("yerine konulamadı: {e}"))?;
    crate::core::yikim_log(format!("mod güncellendi: {eski_ad} → {hedef_ad}"));
    Ok(hedef_ad)
}

// ---------- İndirme ----------

/// Tek dosya indir, progress event'leriyle (içerik indirmeleri de kullanır).
pub(crate) async fn download_file(url: &str, dest: &std::path::Path, label: &str) -> Result<(), String> {
    if let Some(parent) = dest.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let resp = http_client()
        .get(url)
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?;
    let total = resp.content_length().unwrap_or(0);
    let mut stream = resp.bytes_stream();
    use futures_util::StreamExt;
    use tokio::io::AsyncWriteExt;
    let mut file = tokio::fs::File::create(dest).await.map_err(|e| e.to_string())?;
    let mut read: u64 = 0;
    let mut last_emit = std::time::Instant::now();
    while let Some(chunk) = stream.next().await {
        let chunk = chunk.map_err(|e| e.to_string())?;
        file.write_all(&chunk).await.map_err(|e| e.to_string())?;
        read += chunk.len() as u64;
        if last_emit.elapsed().as_millis() > 120 {
            last_emit = std::time::Instant::now();
            // event app handle gerektirir; komut katmanı emit eder
            let _ = (label, total, read);
        }
    }
    file.flush().await.map_err(|e| e.to_string())?;
    Ok(())
}

/// Bir modun en uygun dosyasını verilen klasöre indir (progress event'li).
/// Vanilla instance'larda fabric loader modları kullanılır.
pub async fn install_mod_into(
    handle: &tauri::AppHandle,
    source: &str,
    project_id: &str,
    version_id: Option<&str>,
    inst: &crate::instances::Instance,
    target_dir: &std::path::Path,
) -> Result<String, String> {
    use tauri::Emitter;

    #[derive(Serialize, Clone)]
    struct ModInstallProgress {
        instance_id: String,
        filename: String,
        phase: String, // "start" | "done" | "error"
    }
    let emit = |handle: &tauri::AppHandle, filename: &str, phase: &str| {
        let _ = handle.emit(
            "mod-install-progress",
            &ModInstallProgress {
                instance_id: inst.id.clone(),
                filename: filename.into(),
                phase: phase.into(),
            },
        );
    };

    let loader = if inst.mod_loader == "vanilla" { "" } else { inst.mod_loader.as_str() };
    let mut versions = versions_for(source, project_id, "mod", loader, &inst.mc_version).await?;
    // Otomatik kurulumda yalnız RELEASE sürümler: beta/alpha jar'lar (sodium beta
    // gibi) bağımlılıklarla çakışıyor ve oyunu açılmaz hale getiriyor.
    // İstemci sürüm seçerken (version_id verildi) tüm sürümler listelenir.
    if version_id.is_none() || version_id == Some("") {
        let is_stable = |v: &RepoVersion| -> bool {
            let s = v.version_number.to_ascii_lowercase();
            !(s.contains("beta") || s.contains("alpha") || s.contains("-pre") || s.contains("rc"))
        };
        if versions.iter().any(is_stable) {
            versions.retain(is_stable);
        }
    }
    let version = match version_id {
        Some(v) if !v.is_empty() => versions
            .iter()
            .find(|x| x.id == v)
            .ok_or("istenen sürüm bulunamadı")?,
        _ => versions.first().ok_or("bu sürüm+loader için dosya yok")?,
    };
    let file = version
        .files
        .iter()
        .find(|f| f.primary)
        .or_else(|| version.files.first())
        .ok_or("dosya yok")?;
    emit(handle, &file.filename, "start");
    download_file(&file.url, &target_dir.join(&file.filename), &file.filename).await?;
    emit(handle, &file.filename, "done");
    yikim_log(format!("mod kuruldu: {}", file.filename));

    // ---- BAĞIMLILIKLAR (otomatik) ----
    // Modrinth sürümü "dependencies" alanı taşır: zorunlu bağımlılık modu
    // (fabric-api, kotlin kütüphanesi gibi) kurulmazsa oyun açılışta kilitlenir.
    // Burada başlı kendisi kurulduktan sonra ZORUNLU bağımlılıklar da kurulur;
    // çağrı zincirinde ki dosya adını doğrudan dönmeyeceğiz (önceki dosya zaten yazıldı).
    if source == "modrinth" && !version.dependencies.is_empty() {
        bagimliliklari_kur(handle, source, inst, target_dir, &version).await;
    }
    Ok(file.filename.clone())
}

/// Sürümün ZORUNLU bağımlılıklarını (varsa) kurar — derinlik sınırı YOK, çünkü
/// zincir genelde 1-2 seviyedir (mod → fabric-api). Aynı hedefte kurulu
/// bağımlılığı atlamak için install_mod_into zaten jarsı tekrar indirir
/// (idempotent değildir) — bu yüzden "kuruldu mu" kontrolü dosya adına bakar.
async fn bagimliliklari_kur(
    handle: &tauri::AppHandle,
    source: &str,
    inst: &crate::instances::Instance,
    target_dir: &std::path::Path,
    version: &RepoVersion,
) {
    use tauri::Emitter;
    let mut kuyruk: Vec<RepoBagimlilik> = version
        .dependencies
        .iter()
        .filter(|b| b.tur == "required" && !b.project_id.is_empty())
        .cloned()
        .collect();
    let mut derinlik = 0u8;
    while !kuyruk.is_empty() && derinlik < 3 {
        let sira: Vec<RepoBagimlilik> = std::mem::take(&mut kuyruk);
        derinlik += 1;
        for b in sira {
            // kurulu mu? fabric id'si bilinmiyor — dosya adı önekiyle tahmin
            // riskli; bu yüzden her zorunlu bağımlılık EN FAZLA bir kez
            // indirilir ve aynı sürümde yinelenirse karşılanır.
            match versions_for(source, &b.project_id, "mod", if inst.mod_loader == "vanilla" { "" } else { &inst.mod_loader }, &inst.mc_version).await {
                Ok(vs) => match vs.into_iter().next() {
                    Some(v) => {
                    // varsa seçilen sürümü, yoksa ilk sürümü kullan
                    let dosya = v.files.iter().find(|f| f.primary).or_else(|| v.files.first());
                    let Some(f) = dosya else { continue };
                    let hedef_dosya = target_dir.join(&f.filename);
                    if hedef_dosya.exists() {
                        continue; // zaten kurulu
                    }
                    let _ = handle.emit(
                        "mod-install-progress",
                        &serde_json::json!({
                            "instance_id": inst.id,
                            "filename": f.filename,
                            "phase": "done",
                        }),
                    );
                    if let Err(e) = download_file(&f.url, &hedef_dosya, &f.filename).await {
                        yikim_log(format!("bağımlılık kurulamadı ({}): {e}", b.project_id));
                    } else {
                        yikim_log(format!("bağımlılık kuruldu: {}", f.filename));
                    }
                    // derin zincir: bu bağımlılığın kendi bağımlılıkları
                    for alt in v.dependencies.iter().filter(|a| a.tur == "required") {
                        if !alt.project_id.is_empty() && alt.project_id != b.project_id {
                            kuyruk.push(alt.clone());
                        }
                    }
                    }
                    None => yikim_log(format!("bağımlılık sürümü yok: {}", b.project_id)),
                },
                Err(e) => yikim_log(format!("bağımlılık sürümleri alınamadı ({}): {e}", b.project_id)),
            }
        }
    }
}

/// GitHub en son release tag'i (güncelleme kontrolü için best-effort).
pub async fn latest_release_tag(owner: &str, repo: &str) -> String {
    let url = format!("https://api.github.com/repos/{owner}/{repo}/releases/latest");
    let resp = http_client()
        .get(url)
        .header("User-Agent", "YIKIMLient")
        .send()
        .await;
    match resp {
        Ok(r) => r
            .json::<serde_json::Value>()
            .await
            .ok()
            .and_then(|j| j["tag_name"].as_str().map(|s| s.to_string()))
            .unwrap_or_default(),
        Err(_) => String::new(),
    }
}

/// Mod paketi kur: yeni instance üret, dosyaları indir, overrides'ı aç.
/// Modrinth (.mrpack) ve CurseForge (zip) destekler.
pub async fn install_modpack(
    handle: &tauri::AppHandle,
    kimlik: &str,
    source: &str,
    project_id: &str,
    version_id: &str,
    inst: &mut crate::instances::Instance,
) -> Result<(), String> {
    // Sürüm kimliği verildiyse MC sürümüne göre süzme YAPMA: paket kendi
    // Minecraft sürümünü/yükleyicisini getirir ve yeni kurulumun varsayılanı
    // (1.21.1) çoğu paketle uyuşmaz. Önceden `inst.mc_version` ile süzülüyordu
    // → 1.21.1 dışı her pakette "paket sürümü yok" hatası.
    let versions = versions_for(source, project_id, "modpack", "", "").await?;
    let version: RepoVersion = if version_id.is_empty() {
        versions.into_iter().next().ok_or("paket sürümü yok")?
    } else if let Some(v) = versions.into_iter().find(|v| v.id == version_id) {
        v
    } else {
        // Liste sınırı (50) dışında kalan eski sürüm: doğrudan kimlikten çek.
        version_by_id(source, project_id, version_id)
            .await
            .ok_or("paket sürümü yok")?
    };
    let file = version.files.first().ok_or("paket dosyası yok")?;
    let tmp = crate::core::app_dir().join("tmp-pack-download");
    let _ = std::fs::remove_dir_all(&tmp);
    let _ = std::fs::create_dir_all(&tmp);
    let pack_file = tmp.join(&file.filename);

    pack_adim_k(handle, kimlik,
        ADIM_PAKET,
        "aktif",
        0,
        0,
        &format!("{} ({:.1} MB)", file.filename, file.size as f64 / 1_048_576.0),
    );
    download_file(&file.url, &pack_file, "modpack").await?;
    pack_adim_k(handle, kimlik,
        ADIM_PAKET,
        "bitti",
        1,
        1,
        &format!("{} indirildi", file.filename),
    );

    match source {
        "modrinth" => install_mrpack(handle, kimlik, &pack_file, inst).await,
        "curseforge" => install_cfpack(handle, kimlik, &pack_file, inst).await,
        _ => Err("bilinmeyen paket kaynağı".into()),
    }
}

/// Zip içinde bir dosyayı kökte ya da tek bir alt klasörde bulur
/// (kullanıcılar paketi klasörleyip yeniden sıkıştırabiliyor).
fn zip_find(archive: &zip::ZipArchive<std::fs::File>, hedef: &str) -> Option<String> {
    archive
        .file_names()
        .find(|n| {
            let n = n.replace('\\', "/");
            n == hedef || n.ends_with(&format!("/{hedef}"))
        })
        .map(|n| n.replace('\\', "/"))
}

/// Modrinth .mrpack: index.json → files[].downloads + overrides
pub async fn install_mrpack(
    handle: &tauri::AppHandle,
    kimlik: &str,
    pack_file: &std::path::Path,
    inst: &mut crate::instances::Instance,
) -> Result<(), String> {
    let zipf = std::fs::File::open(pack_file).map_err(|e| e.to_string())?;
    let mut archive = zip::ZipArchive::new(zipf).map_err(|e| e.to_string())?;
    // önce index.json çıkar (iç içe klasörde de olabilir)
    let index_name = zip_find(&archive, "modrinth.index.json")
        .ok_or("mrpack index yok (modrinth.index.json bulunamadı)")?;
    // overrides klasörünün öneki: index ile aynı klasörde
    let kok = index_name.trim_end_matches("modrinth.index.json").to_string();
    let index: serde_json::Value = {
        let mut idx = archive.by_name(&index_name).map_err(|e| format!("mrpack index yok: {e}"))?;
        let mut s = String::new();
        use std::io::Read;
        idx.read_to_string(&mut s).map_err(|e| e.to_string())?;
        serde_json::from_str(&s).map_err(|e| e.to_string())?
    };
    let d = index["dependencies"].as_object().cloned().unwrap_or_default();
    inst.mc_version = d.get("minecraft").and_then(|v| v.as_str()).unwrap_or("1.21.1").into();
    pack_adim_k(handle, kimlik,
        ADIM_ACMA,
        "bitti",
        1,
        1,
        &format!("{} · MC {}", index["name"].as_str().unwrap_or("paket"), inst.mc_version),
    );
    let fabric = d.get("fabric-loader").and_then(|v| v.as_str());
    let neoforge = d.get("neoforge").and_then(|v| v.as_str());
    let forge = d.get("forge").and_then(|v| v.as_str());
    if let Some(lv) = fabric {
        inst.mod_loader = "fabric".into();
        inst.loader_version = lv.into();
    } else if let Some(lv) = neoforge {
        // Modrinth bazı paketlerde NeoForge'u "neoforge" anahtarıyla verir.
        inst.mod_loader = "neoforge".into();
        inst.loader_version = lv.into();
    } else if let Some(lv) = forge {
        inst.mod_loader = "forge".into();
        inst.loader_version = lv.into();
    }

    // overrides
    let inst_dir = inst.dir();
    let overrides = format!("{kok}overrides/");
    let mut count = 0u32;
    // kaç overrides dosyası yazılacağını önceden bil (bar gerçek sayısal)
    let over_toplam = archive
        .file_names()
        .filter(|n| {
            let n = n.replace('\\', "/");
            n.starts_with(&overrides) && !n.ends_with('/')
        })
        .count() as u32;
    for i in 0..archive.len() {
        let mut zf = archive.by_index(i).map_err(|e| e.to_string())?;
        let name = zf.name().replace('\\', "/");
        if let Some(rel) = name.strip_prefix(&overrides) {
            if rel.is_empty() || name.ends_with('/') {
                continue;
            }
            let out = inst_dir.join(rel);
            if let Some(p) = out.parent() {
                let _ = std::fs::create_dir_all(p);
            }
            let mut of = std::fs::File::create(&out).map_err(|e| e.to_string())?;
            std::io::copy(&mut zf, &mut of).map_err(|e| e.to_string())?;
            count += 1;
            // canlı adım: yazılan her dosya durağan değil, akıyor
            pack_adim_k(handle, kimlik,
                ADIM_OVERRIDE,
                if count >= over_toplam { "bitti" } else { "aktif" },
                count,
                over_toplam,
                &format!("{count} / {over_toplam} dosya açılıyor"),
            );
        }
    }
    if over_toplam == 0 {
        pack_adim_k(handle, kimlik, ADIM_OVERRIDE, "bitti", 0, 0, "yapılandırma dosyası yok");
    }

    // indirilecek dosyalar
    let mut jobs: Vec<(String, std::path::PathBuf, Option<String>)> = Vec::new();
    if let Some(files) = index["files"].as_array() {
        for f in files {
            let path = f["path"].as_str().unwrap_or("");
            let Some(url) = f["downloads"].as_array().and_then(|a| a[0].as_str()) else {
                continue;
            };
            let env_ok = f["env"]
                .as_object()
                .and_then(|e| e.get("client"))
                .and_then(|v| v.as_str())
                .map(|s| s != "unsupported")
                .unwrap_or(true);
            if !env_ok {
                continue;
            }
            let sha = f["hashes"]["sha1"].as_str().unwrap_or("");
            jobs.push((
                url.into(),
                inst_dir.join(path),
                if sha.is_empty() { None } else { Some(sha.into()) },
            ));
        }
    }
    let toplam = jobs.len();
    let kuyruk_not = if toplam == 0 {
        "paket indirilebilir dosya içermiyor".to_string()
    } else {
        format!("{toplam} dosya kuyruğa alındı")
    };
    pack_adim_k(handle, kimlik,
        ADIM_MODLAR,
        if toplam == 0 { "bitti" } else { "aktif" },
        0,
        toplam as u32,
        &kuyruk_not,
    );
    if toplam > 0 {
        // Tek dosyanın hatası tüm paketi düşürmesin: indirme motoru diğerlerini
        // yine indirir; yalnız hiçbir dosya inmediyse hata ver.
        let h = handle.clone();
        if let Err(e) = crate::util::download_many(
            jobs,
            crate::util::DlOpts { concurrency: 24, retries: 3 },
            move |p| {
                let hiz = hiz_metni(p.bytes_per_sec);
                pack_adim_k(
                    &h,
                    kimlik,
                    ADIM_MODLAR,
                    if p.done_files >= p.total_files { "bitti" } else { "aktif" },
                    p.done_files,
                    p.total_files,
                    &format!("{} / {} mod · {}", p.done_files, p.total_files, hiz),
                );
            },
        )
        .await
        {
            crate::core::yikim_log(format!(
                "mrpack: bazı dosyalar indirilemedi (paket yine de kuruldu): {e}"
            ));
            let inen = std::fs::read_dir(inst_dir.join("mods"))
                .map(|d| d.count())
                .unwrap_or(0);
            pack_adim_k(handle, kimlik, ADIM_MODLAR, "hata", toplam as u32, toplam as u32, &e);
            if inen == 0 {
                return Err(format!("paket dosyaları indirilemedi: {e}"));
            }
        } else {
            pack_adim_k(handle, kimlik,
                ADIM_MODLAR,
                "bitti",
                toplam as u32,
                toplam as u32,
                &format!("{toplam} mod indirildi"),
            );
        }
    }

    // NOT: "Hazır" (ADIM_HAZIR) burada DEĞİL — kurulum komutunda
    // yükleyici/oyun dosyalı/YIKIM modu adımları bittikten sonra yayınlanır.
    Ok(())
}

/// CurseForge dosya bilgisini çöz (indirme URL'si + dosya adı).
///
/// Ayna bazen `downloadUrl` boş döndürür; bu durumda CDN kalıbından üretilir
/// (`/files/{id/1000}/{id%1000}/{dosyaAdı}`). 429/5xx'te kısa beklemeyle
/// yeniden denenir; tek dosyanın hatası tüm paketi düşürmez.
async fn cf_resolve_file(pid: u64, fid: u64) -> Option<(String, String)> {
    if pid == 0 || fid == 0 {
        return None;
    }
    let url = format!("{}/mods/{pid}/files/{fid}", cf_base());
    let client = http_client();
    for deneme in 0..3u32 {
        let istek = cf_get(&client, &url).timeout(std::time::Duration::from_secs(25));
        match istek.send().await {
            Ok(resp) => {
                let kod = resp.status().as_u16();
                if kod == 429 || resp.status().is_server_error() {
                    crate::core::msleep(700 * (deneme as u64 + 1));
                    continue;
                }
                if !resp.status().is_success() {
                    return None;
                }
                let js: serde_json::Value = match resp.json().await {
                    Ok(v) => v,
                    Err(_) => continue,
                };
                let d = &js["data"];
                let mut dl = d["downloadUrl"].as_str().unwrap_or("").to_string();
                let fname = d["fileName"].as_str().unwrap_or("").to_string();
                if fname.is_empty() {
                    return None;
                }
                if dl.is_empty() {
                    dl = format!(
                        "https://edge.forgecdn.net/files/{}/{}/{}",
                        fid / 1000,
                        fid % 1000,
                        urlencoding::encode(&fname)
                    );
                }
                return Some((dl, fname));
            }
            Err(e) => {
                crate::core::yikim_log(format!("CF dosya çözümü ({fid}) deneme {}: {e}", deneme + 1));
                crate::core::msleep(500 * (deneme as u64 + 1));
            }
        }
    }
    None
}

/// Dosyaları eşzamanlı indir; tek dosya hatası tüm paketi düşürmez.
/// Adım olayları (adim) her tamamlanan dosyada yayınlanır.
/// Dönüş: (başarılı, hatalar).
async fn indir_esnek(
    handle: &tauri::AppHandle,
    kimlik: &str,
    adim: u8,
    jobs: Vec<(String, std::path::PathBuf)>,
    eszamanli: usize,
) -> (usize, Vec<String>) {
    use futures_util::stream::{self, StreamExt};
    use std::sync::atomic::{AtomicU64, AtomicUsize, Ordering};
    let toplam = jobs.len();
    let biten = std::sync::Arc::new(AtomicUsize::new(0));
    let bayt = std::sync::Arc::new(AtomicU64::new(0));
    let hiz = std::sync::Arc::new(HizOlcer::default());
    let h = handle.clone();
    let kimlik = std::sync::Arc::new(kimlik.to_string());
    let akis = stream::iter(jobs.into_iter().map(|(url, dest)| {
        let biten = biten.clone();
        let bayt = bayt.clone();
        let hiz = hiz.clone();
        let h = h.clone();
        let kimlik = kimlik.clone();
        async move {
            let ad = dest
                .file_name()
                .map(|s| s.to_string_lossy().to_string())
                .unwrap_or_default();
            let mut son = String::new();
            for deneme in 0..3u32 {
                match download_file(&url, &dest, &ad).await {
                    Ok(()) => {
                        let n = biten.fetch_add(1, Ordering::Relaxed) + 1;
                        let toplam_bayt = bayt.fetch_add(
                            dest.metadata().map(|m| m.len()).unwrap_or(0),
                            Ordering::Relaxed,
                        ) + dest.metadata().map(|m| m.len()).unwrap_or(0);
                        pack_adim_k(
                            &h,
                            &kimlik,
                            adim,
                            if n >= toplam { "bitti" } else { "aktif" },
                            n as u32,
                            toplam as u32,
                            &format!("{n} / {toplam} · {}", hiz_metni(hiz.olc(toplam_bayt))),
                        );
                        return (true, ad);
                    }
                    Err(e) => {
                        // 404/403 kalıcı: yeniden denemek anlamsız
                        let kalici = e.contains("404") || e.contains("403");
                        son = format!("{ad}: {e}");
                        if kalici {
                            break;
                        }
                        crate::core::msleep(400 * (deneme as u64 + 1));
                    }
                }
            }
            (false, son)
        }
    }))
    .buffer_unordered(eszamanli.max(1));

    let mut ok = 0usize;
    let mut hatalar = Vec::new();
    let mut akis = std::pin::pin!(akis);
    while let Some((basarili, bilgi)) = akis.next().await {
        if basarili {
            ok += 1;
        } else {
            hatalar.push(bilgi);
        }
    }
    (ok, hatalar)
}

/// Basit anlık hız ölçer: her sorguda son ölçümden bu yana değişen baytı
/// geçen süreye böler (dosya başına bir örnek).
#[derive(Default)]
struct HizOlcer {
    ic: std::sync::Mutex<Option<(u64, std::time::Instant)>>,
}

impl HizOlcer {
    fn olc(&self, toplam: u64) -> u64 {
        let mut ic = self.ic.lock().unwrap();
        let simdi = std::time::Instant::now();
        match *ic {
            Some((onceki, t0)) => {
                let gecen = t0.elapsed().as_secs_f64().max(0.05);
                *ic = Some((toplam, simdi));
                ((toplam.saturating_sub(onceki)) as f64 / gecen) as u64
            }
            None => {
                *ic = Some((toplam, simdi));
                0
            }
        }
    }
}

/// CurseForge pack zip: manifest.json → files[] {projectID,fileID} + overrides/
pub async fn install_cfpack(
    handle: &tauri::AppHandle,
    kimlik: &str,
    pack_file: &std::path::Path,
    inst: &mut crate::instances::Instance,
) -> Result<(), String> {
    use tauri::Emitter;
    let zipf = std::fs::File::open(pack_file).map_err(|e| e.to_string())?;
    let mut archive = zip::ZipArchive::new(zipf).map_err(|e| e.to_string())?;
    // manifest.json iç içe klasörde de olabilir (elle yeniden sıkıştırılmış zip)
    let manifest_name =
        zip_find(&archive, "manifest.json").ok_or("manifest yok (geçerli bir CurseForge paketi değil)")?;
    let kok = manifest_name.trim_end_matches("manifest.json").to_string();
    let manifest: serde_json::Value = {
        let mut m = archive
            .by_name(&manifest_name)
            .map_err(|e| format!("manifest yok: {e}"))?;
        let mut s = String::new();
        use std::io::Read;
        m.read_to_string(&mut s).map_err(|e| e.to_string())?;
        serde_json::from_str(&s).map_err(|e| e.to_string())?
    };
    inst.mc_version = manifest["minecraft"]["version"]
        .as_str()
        .unwrap_or("1.21.1")
        .into();
    pack_adim_k(handle, kimlik,
        ADIM_ACMA,
        "bitti",
        1,
        1,
        &format!("{} · MC {}", inst.mc_version, if inst.mod_loader.is_empty() { "vanilla".to_string() } else { inst.mod_loader.clone() }),
    );
    // modLoaders: birincil (primary) girdiyi seç; yoksa ilkini al.
    let loader = manifest["minecraft"]["modLoaders"]
        .as_array()
        .and_then(|a| {
            a.iter()
                .find(|l| l["primary"].as_bool().unwrap_or(false))
                .or_else(|| a.first())
        });
    if let Some(l) = loader {
        let id = l["id"].as_str().unwrap_or("");
        let (tur, ver) = id.split_once('-').unwrap_or(("", id));
        match tur {
            "fabric" => {
                inst.mod_loader = "fabric".into();
                inst.loader_version = ver.into();
            }
            // NeoForge paketleri: "neoforge-21.1.80"
            "neoforge" => {
                inst.mod_loader = "neoforge".into();
                inst.loader_version = ver.into();
            }
            "forge" => {
                inst.mod_loader = "forge".into();
                inst.loader_version = ver.into();
            }
            _ => {}
        }
    }

    // overrides
    let inst_dir = inst.dir();
    let overrides = format!("{kok}overrides/");
    let over_toplam = archive
        .file_names()
        .filter(|n| {
            let n = n.replace('\\', "/");
            n.starts_with(&overrides) && !n.ends_with('/')
        })
        .count() as u32;
    let mut over_sayac = 0u32;
    for i in 0..archive.len() {
        let mut zf = archive.by_index(i).map_err(|e| e.to_string())?;
        let name = zf.name().replace('\\', "/");
        if let Some(rel) = name.strip_prefix(&overrides) {
            if rel.is_empty() || name.ends_with('/') {
                continue;
            }
            let out = inst_dir.join(rel);
            if let Some(p) = out.parent() {
                let _ = std::fs::create_dir_all(p);
            }
            let mut of = std::fs::File::create(&out).map_err(|e| e.to_string())?;
            std::io::copy(&mut zf, &mut of).map_err(|e| e.to_string())?;
            over_sayac += 1;
            pack_adim_k(handle, kimlik,
                ADIM_OVERRIDE,
                if over_sayac >= over_toplam { "bitti" } else { "aktif" },
                over_sayac,
                over_toplam,
                &format!("{over_sayac} / {over_toplam} dosya açılıyor"),
            );
        }
    }
    if over_toplam == 0 {
        pack_adim_k(handle, kimlik, ADIM_OVERRIDE, "bitti", 0, 0, "yapılandırma dosyası yok");
    }

    // dosyaları EŞZAMANLI çöz (sıralı çözüm 300+ modlu paketlerde dakikalar
    // sürüyordu ve tek hata tüm kurulumu düşürüyordu).
    let files = manifest["files"].as_array().cloned().unwrap_or_default();
    let total = files.len();
    let mut jobs: Vec<(String, std::path::PathBuf)> = Vec::new();
    let mut cozulemeyen = 0usize;
    if total > 0 {
        use futures_util::stream::{self, StreamExt};
        let isler = files.iter().cloned().map(|f| async move {
            let pid = f["projectID"].as_u64().unwrap_or(0);
            let fid = f["fileID"].as_u64().unwrap_or(0);
            cf_resolve_file(pid, fid).await
        });
        let mut akis = stream::iter(isler).buffer_unordered(16);
        let mut islenen = 0usize;
        while let Some(sonuc) = akis.next().await {
            islenen += 1;
            match sonuc {
                Some((url, fname)) => jobs.push((url, inst_dir.join("mods").join(fname))),
                None => cozulemeyen += 1,
            }
            if islenen % 20 == 0 || islenen == total {
                let _ = handle.emit(
                    "launch-progress",
                    &crate::launcher::LaunchProgress {
                        stage: "modpack".into(),
                        percent: (40.0 + (islenen as f32 / total as f32) * 25.0) as u8,
                        detail: format!("dosyalar çözümleniyor: {islenen}/{total}"),
                    },
                );
            }
        }
    }
    if cozulemeyen > 0 {
        crate::core::yikim_log(format!(
            "CurseForge paketi: {cozulemeyen}/{total} dosya çözümlenemedi (atlandı)"
        ));
    }
    if total > 0 && jobs.is_empty() {
        return Err(format!(
            "paket dosyaları çözümlenemedi ({total} dosya) — CurseForge erişimi engellenmiş olabilir"
        ));
    }

    pack_adim_k(handle, kimlik,
        ADIM_MODLAR,
        if jobs.is_empty() { "bitti" } else { "aktif" },
        0,
        jobs.len() as u32,
        &format!("{} dosya kuyruğa alındı", jobs.len()),
    );
    let mut package_err: Option<String> = None;
    if !jobs.is_empty() {
        let (ok, hatalar) = indir_esnek(handle, kimlik, ADIM_MODLAR, jobs, 16).await;
        if !hatalar.is_empty() {
            crate::core::yikim_log(format!(
                "CurseForge paketi: {} dosya indirilemedi (paket yine de kuruldu). İlk hata: {}",
                hatalar.len(),
                hatalar.first().cloned().unwrap_or_default()
            ));
        }
        if ok == 0 {
            let hata = "paket dosyaları indirilemedi — internet/CurseForge erişimini kontrol et".to_string();
            pack_adim_k(handle, kimlik, ADIM_MODLAR, "hata", 0, total as u32, &hata);
            return Err(hata);
        }
        if !hatalar.is_empty() {
            package_err = Some(format!(
                "{} / {} dosya indirilemedi (paket yine de kuruldu)",
                hatalar.len(),
                total
            ));
        }
        pack_adim_k(handle, kimlik,
            ADIM_MODLAR,
            "bitti",
            ok as u32,
            ok as u32,
            &format!("{ok} mod indirildi"),
        );
    }
    if let Some(not) = package_err {
        pack_adim_k(handle, kimlik, ADIM_MODLAR, "bitti", 1, 1, &not);
    }
    // NOT: "Hazır" (ADIM_HAZIR) burada DEĞİL — kurulum komutunda
    // yükleyici/oyun dosyalı/YIKIM modu adımları bittikten sonra yayınlanır.
    Ok(())
}
