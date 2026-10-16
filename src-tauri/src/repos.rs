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
}

#[derive(Debug, Clone, Serialize)]
pub struct RepoFile {
    pub url: String,
    pub filename: String,
    pub primary: bool,
    pub size: u64,
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

pub fn curseforge_available() -> bool {
    cf_api_key().is_some()
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
async fn api_json_req(req: reqwest::RequestBuilder) -> Result<serde_json::Value, String> {
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
    let mut facets: Vec<Vec<String>> = vec![vec![format!("project_type:{kind}")]];
    if !loader.is_empty() {
        facets.push(vec![format!("categories:{loader}")]);
    }
    if !versions.is_empty() {
        facets.push(versions.iter().map(|v| format!("versions:{v}")).collect());
    }
    // Modrinth search yalnızca GET destekler (POST 404 döner)
    let url = format!(
        "https://api.modrinth.com/v2/search?query={}&facets={}&index=relevance&offset={}&limit={}",
        urlencoding::encode(query),
        urlencoding::encode(&serde_json::to_string(&facets).unwrap_or_default()),
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

/// CF modLoaderType: 4 = Fabric, 5 = Forge, 0 = Any
fn cf_loader_id(loader: &str) -> u32 {
    match loader {
        "fabric" => 4,
        "forge" => 5,
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
    let _ = loader;
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
    let mut out = mr?;
    out.extend(cf?);
    // indirilme sayısına göre sırala
    out.sort_by(|a, b| b.downloads.cmp(&a.downloads));
    Ok((out, curseforge_available()))
}

/// Keşfet açılışı: en çok indirilenler (Modrinth'in ana sayfasındaki popüler listesi gibi).
/// CurseForge popular uçları mirror'da güvenilir olmadığından yalnız Modrinth kullanılır.
pub async fn popular(kind: &str, loader: &str, limit: usize) -> Result<Vec<RepoSearchResult>, String> {
    // index=relevance boş sorguda da indirme sırasına yakın döner; sonuçları biz yine sıralarız
    let mut out = modrinth_search("", kind, &[], loader, 0, limit.min(24)).await?;
    out.sort_by(|a, b| b.downloads.cmp(&a.downloads));
    out.truncate(limit.min(12));
    Ok(out)
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
    let result = download_file(&file.url, &target_dir.join(&file.filename), &file.filename).await;
    match result {
        Ok(()) => {
            emit(handle, &file.filename, "done");
            yikim_log(format!("mod kuruldu: {}", file.filename));
            Ok(file.filename.clone())
        }
        Err(e) => {
            emit(handle, &file.filename, "error");
            Err(e)
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
    source: &str,
    project_id: &str,
    version_id: &str,
    inst: &mut crate::instances::Instance,
) -> Result<(), String> {
    use tauri::Emitter;
    let versions = versions_for(source, project_id, "modpack", "", &inst.mc_version).await?;
    let version = if version_id.is_empty() {
        versions.first().ok_or("paket sürümü yok")?
    } else {
        versions.iter().find(|v| v.id == version_id).ok_or("paket sürümü yok")?
    };
    let file = version.files.first().ok_or("paket dosyası yok")?;
    let tmp = crate::core::app_dir().join("tmp-pack-download");
    let _ = std::fs::remove_dir_all(&tmp);
    let _ = std::fs::create_dir_all(&tmp);
    let pack_file = tmp.join(&file.filename);

    let _ = handle.emit("launch-progress", &crate::launcher::LaunchProgress {
        stage: "modpack".into(),
        percent: 5,
        detail: "Paket indiriliyor".into(),
    });
    download_file(&file.url, &pack_file, "modpack").await?;

    let _ = handle.emit("launch-progress", &crate::launcher::LaunchProgress {
        stage: "modpack".into(),
        percent: 30,
        detail: "Paket açılıyor".into(),
    });

    match source {
        "modrinth" => install_mrpack(handle, &pack_file, inst).await,
        "curseforge" => install_cfpack(handle, &pack_file, inst).await,
        _ => Err("bilinmeyen paket kaynağı".into()),
    }
}

/// Modrinth .mrpack: index.json → files[].downloads + overrides
pub async fn install_mrpack(
    handle: &tauri::AppHandle,
    pack_file: &std::path::Path,
    inst: &mut crate::instances::Instance,
) -> Result<(), String> {
    use tauri::Emitter;
    let zipf = std::fs::File::open(pack_file).map_err(|e| e.to_string())?;
    let mut archive = zip::ZipArchive::new(zipf).map_err(|e| e.to_string())?;
    // önce index.json çıkar
    let index: serde_json::Value = {
        let mut idx = archive.by_name("modrinth.index.json").map_err(|e| format!("mrpack index yok: {e}"))?;
        let mut s = String::new();
        use std::io::Read;
        idx.read_to_string(&mut s).map_err(|e| e.to_string())?;
        serde_json::from_str(&s).map_err(|e| e.to_string())?
    };
    let d = index["dependencies"].as_object().cloned().unwrap_or_default();
    inst.mc_version = d.get("minecraft").and_then(|v| v.as_str()).unwrap_or("1.21.1").into();
    let loader = d.get("fabric-loader").and_then(|v| v.as_str());
    let forge = d.get("forge").and_then(|v| v.as_str());
    if let Some(lv) = loader {
        inst.mod_loader = "fabric".into();
        inst.loader_version = lv.into();
    } else if let Some(lv) = forge {
        inst.mod_loader = "forge".into();
        inst.loader_version = lv.into();
    }

    // overrides
    let inst_dir = inst.dir();
    let mut count = 0u32;
    for i in 0..archive.len() {
        let mut zf = archive.by_index(i).map_err(|e| e.to_string())?;
        let name = zf.name().to_string();
        if let Some(rel) = name.strip_prefix("overrides/") {
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
            if count % 40 == 0 {
                let _ = handle.emit("launch-progress", &crate::launcher::LaunchProgress {
                    stage: "modpack".into(),
                    percent: 35,
                    detail: format!("overrides: {count}"),
                });
            }
        }
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
    let _ = handle.emit("launch-progress", &crate::launcher::LaunchProgress {
        stage: "modpack".into(),
        percent: 45,
        detail: format!("{} dosya indiriliyor", jobs.len()),
    });
    crate::util::download_many(
        jobs,
        crate::util::DlOpts { concurrency: 24, retries: 3 },
        |_p| {},
    )
    .await
    .map_err(|e| format!("paket dosyaları: {e}"))?;

    let _ = handle.emit("launch-progress", &crate::launcher::LaunchProgress {
        stage: "modpack".into(),
        percent: 95,
        detail: "Tamamlandı".into(),
    });
    Ok(())
}

/// CurseForge pack zip: manifest.json → files[] {projectID,fileID} + overrides/
pub async fn install_cfpack(
    handle: &tauri::AppHandle,
    pack_file: &std::path::Path,
    inst: &mut crate::instances::Instance,
) -> Result<(), String> {
    use tauri::Emitter;
    let zipf = std::fs::File::open(pack_file).map_err(|e| e.to_string())?;
    let mut archive = zip::ZipArchive::new(zipf).map_err(|e| e.to_string())?;
    let manifest: serde_json::Value = {
        let mut m = archive.by_name("manifest.json").map_err(|e| format!("manifest yok: {e}"))?;
        let mut s = String::new();
        use std::io::Read;
        m.read_to_string(&mut s).map_err(|e| e.to_string())?;
        serde_json::from_str(&s).map_err(|e| e.to_string())?
    };
    inst.mc_version = manifest["minecraft"]["version"].as_str().unwrap_or("1.21.1").into();
    let loader = manifest["minecraft"]["modLoaders"].as_array().and_then(|a| a.first());
    if let Some(l) = loader {
        let id = l["id"].as_str().unwrap_or("");
        if id.starts_with("fabric-") {
            inst.mod_loader = "fabric".into();
            inst.loader_version = id.trim_start_matches("fabric-").into();
        } else if id.starts_with("forge-") {
            inst.mod_loader = "forge".into();
            inst.loader_version = id.trim_start_matches("forge-").into();
        }
    }

    // overrides
    let inst_dir = inst.dir();
    for i in 0..archive.len() {
        let mut zf = archive.by_index(i).map_err(|e| e.to_string())?;
        let name = zf.name().to_string();
        if let Some(rel) = name.strip_prefix("overrides/") {
            if rel.is_empty() || name.ends_with('/') {
                continue;
            }
            let out = inst_dir.join(rel);
            if let Some(p) = out.parent() {
                let _ = std::fs::create_dir_all(p);
            }
            let mut of = std::fs::File::create(&out).map_err(|e| e.to_string())?;
            std::io::copy(&mut zf, &mut of).map_err(|e| e.to_string())?;
        }
    }

    // dosyaları çöz
    let files = manifest["files"].as_array().cloned().unwrap_or_default();
    let client = http_client();
    let mut jobs: Vec<(String, std::path::PathBuf, Option<String>)> = Vec::new();
    for (i, f) in files.iter().enumerate() {
        let pid = f["projectID"].as_u64().unwrap_or(0);
        let fid = f["fileID"].as_u64().unwrap_or(0);
        let resp = cf_get(&client, &format!("{}/mods/{pid}/files/{fid}", cf_base()))
            .send()
            .await
            .map_err(|e| e.to_string())?;
        let js: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
        let url = js["data"]["downloadUrl"].as_str().unwrap_or("").to_string();
        let fname = js["data"]["fileName"].as_str().unwrap_or("").to_string();
        if url.is_empty() {
            continue;
        }
        let _ = handle.emit("launch-progress", &crate::launcher::LaunchProgress {
            stage: "modpack".into(),
            percent: 50 + ((i as f32 / files.len().max(1) as f32) * 10.0) as u8,
            detail: format!("çözümleniyor: {fname}"),
        });
        jobs.push((url, inst_dir.join("mods").join(fname), None));
    }
    crate::util::download_many(
        jobs,
        crate::util::DlOpts { concurrency: 16, retries: 3 },
        |_p| {},
    )
    .await
    .map_err(|e| format!("paket dosyaları: {e}"))?;
    Ok(())
}
