use crate::core::{
    assets_dir, http_client, libraries_dir, os_name, runtimes_dir, versions_dir, yikim_log,
};
use crate::util::{download_many, verify_sha1, DlOpts};
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use tauri::Emitter;

/// Mojang sürüm manifest'i ve version json'u üzerinden oyun indirme + başlatma motoru.

#[derive(Debug, Clone, Serialize)]
pub struct LaunchProgress {
    pub stage: String,
    pub percent: u8,
    pub detail: String,
}

pub async fn emit_launch(handle: &tauri::AppHandle, p: LaunchProgress) {
    let _ = handle.emit("launch-progress", &p);
}

#[derive(Deserialize, Serialize)]
pub struct Manifest {
    versions: Vec<ManifestEntry>,
}

#[derive(Deserialize, Serialize)]
pub struct ManifestEntry {
    id: String,
    #[serde(rename = "type")]
    kind: String,
    url: String,
}

// ---------- Manifest ----------

pub async fn fetch_manifest() -> Result<Manifest, String> {
    let cache = crate::core::app_dir().join("version_manifest.json");
    if let Ok(meta) = std::fs::metadata(&cache) {
        if let Ok(modified) = meta.modified() {
            if modified.elapsed().map(|e| e.as_secs()).unwrap_or(0) < 3600 {
                if let Some(m) = crate::util::read_json::<Manifest>(&cache) {
                    return Ok(m);
                }
            }
        }
    }
    let resp = http_client()
        .get("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let manifest: Manifest = resp.json().await.map_err(|e| e.to_string())?;
    let _ = crate::util::write_json(&cache, &manifest);
    Ok(manifest)
}

pub async fn manifest_version_url(version: &str) -> Result<String, String> {
    let manifest = fetch_manifest().await?;
    manifest
        .versions
        .iter()
        .find(|v| v.id == version)
        .map(|v| v.url.clone())
        .ok_or_else(|| format!("sürüm bulunamadı: {version}"))
}

pub async fn manifest_latest_release() -> Result<String, String> {
    let manifest = fetch_manifest().await?;
    manifest
        .versions
        .iter()
        .find(|v| v.kind == "release")
        .map(|v| v.id.clone())
        .ok_or("sürüm yok".into())
}

/// Tüm yayınlanan release sürümleri (yeni → eski).
pub async fn list_release_versions() -> Result<Vec<String>, String> {
    let manifest = fetch_manifest().await?;
    Ok(manifest
        .versions
        .iter()
        .filter(|v| v.kind == "release")
        .take(300)
        .map(|v| v.id.clone())
        .collect())
}

// ---------- Fabric ----------

pub async fn fabric_latest_loader() -> Result<String, String> {
    let resp = http_client()
        .get("https://meta.fabricmc.net/v2/versions/loader")
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let js: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    // meta v2 artık düz dizi: { version, stable, maven, ... } — eski iç içe
    // { loader: { version, stable } } formatına da uyumlu çöz (iki formatı da destekle).
    let entries = js.as_array().ok_or("fabric meta bozuk")?;
    for entry in entries {
        let ver = entry["version"]
            .as_str()
            .or_else(|| entry["loader"]["version"].as_str());
        let stable = entry["stable"]
            .as_bool()
            .or_else(|| entry["loader"]["stable"].as_bool())
            .unwrap_or(false);
        if stable {
            if let Some(v) = ver {
                return Ok(v.to_string());
            }
        }
    }
    entries
        .first()
        .and_then(|e| {
            e["version"]
                .as_str()
                .or_else(|| e["loader"]["version"].as_str())
        })
        .map(|v| v.to_string())
        .ok_or_else(|| "fabric loader sürümü okunamadı".into())
}

/// Nokta-ayrıklı sürüm karşılaştırma: a < b ise true ("0.16.9" < "0.19.5").
pub fn loader_version_lt(a: &str, b: &str) -> bool {
    let parse = |s: &str| -> Vec<u64> {
        s.split('.')
            .map(|p| p.chars().take_while(|c| c.is_ascii_digit()).collect::<String>())
            .filter(|p| !p.is_empty())
            .map(|p| p.parse().unwrap_or(0))
            .collect()
    };
    let (va, vb) = (parse(a), parse(b));
    let n = va.len().max(vb.len());
    for i in 0..n {
        let (x, y) = (
            va.get(i).copied().unwrap_or(0),
            vb.get(i).copied().unwrap_or(0),
        );
        if x != y {
            return x < y;
        }
    }
    false
}

/// Fabric'in ürettiği "fabric-loader-<loader>-<mc>" profil json'unu indir.
pub async fn install_fabric_profile(mc: &str, loader: &str) -> Result<String, String> {
    let url = format!("https://meta.fabricmc.net/v2/versions/loader/{mc}/{loader}/profile/json");
    let resp = http_client()
        .get(&url)
        .send()
        .await
        .map_err(|e| e.to_string())?;
    if !resp.status().is_success() {
        return Err(format!("fabric meta hatası: {}", resp.status()));
    }
    let body: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    let id = body["id"].as_str().unwrap_or_default().to_string();
    if id.is_empty() {
        return Err("fabric profil id alınamadı".into());
    }
    let dest = versions_dir().join(&id).join(format!("{id}.json"));
    if let Some(parent) = dest.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let _ = crate::util::write_json(&dest, &body);
    yikim_log(format!("fabric profili hazır: {id}"));

    // Vanilla client jar'ı önden garantiye al: fabric profili kendi klasörüne
    // jar indirmez; launch'taki indirme planı (merged json üzerinden) jar'ı
    // vanilla sürüm klasörüne koyar ama orası boşsa launch "client jar eksik" der.
    // Burada önden tetiklemek, ilk başlatmada hatayı kökten kaldırır.
    let vanilla_json = load_version_json_merged(mc).await?;
    let vurl = vanilla_json["downloads"]["client"]["url"].as_str().unwrap_or("");
    let vsha = vanilla_json["downloads"]["client"]["sha1"].as_str().unwrap_or("");
    if !vurl.is_empty() {
        let vdest = versions_dir().join(mc).join(format!("{mc}.jar"));
        if !verify_sha1(&vdest, vsha) {
            yikim_log(format!("vanilla client jar önden indiriliyor: {mc}"));
            download_many(
                vec![(vurl.to_string(), vdest, if vsha.is_empty() { None } else { Some(vsha.to_string()) })],
                DlOpts { concurrency: 2, retries: 3 },
                |_| {},
            )
            .await?;
        }
    }
    Ok(id)
}

// ---------- Version json (inheritsFrom birleştirmeli) ----------

pub async fn load_version_json_merged(id: &str) -> Result<serde_json::Value, String> {
    let mut current = id.to_string();
    let mut chain: Vec<serde_json::Value> = Vec::new();
    for _ in 0..4 {
        let vj = load_version_json(&current).await?;
        chain.push(vj.clone());
        let parent = vj["inheritsFrom"].as_str().map(|s| s.to_string());
        match parent {
            Some(p) => current = p,
            None => break,
        }
    }
    // chain: [child, ..., root]. Kökten çocuğa birleştir.
    let mut merged = chain.pop().ok_or("version json yok")?;
    while let Some(child) = chain.pop() {
        merged = merge_version(merged, child);
    }
    Ok(merged)
}

fn merge_version(mut parent: serde_json::Value, child: serde_json::Value) -> serde_json::Value {
    // downloads: fabric loader JSON'unda yoktur; vanilla (kök) JSON'unkini koru.
    if child["downloads"].is_null() && !parent["downloads"].is_null() {
        parent["downloads"] = parent["downloads"].clone();
    }
    if let Some(mc) = child["mainClass"].as_str() {
        parent["mainClass"] = serde_json::Value::String(mc.into());
    }
    if let Some(t) = child["type"].as_str() {
        parent["type"] = serde_json::Value::String(t.into());
    }
    // libraries: parent + child
    let mut libs = Vec::new();
    if let Some(arr) = parent["libraries"].as_array() {
        libs.extend(arr.iter().cloned());
    }
    if let Some(arr) = child["libraries"].as_array() {
        libs.extend(arr.iter().cloned());
    }
    parent["libraries"] = serde_json::Value::Array(libs);

    // arguments: parent önce, child sonra
    for key in ["game", "jvm"] {
        let mut args = Vec::new();
        if let Some(arr) = parent["arguments"][key].as_array() {
            args.extend(arr.iter().cloned());
        }
        if let Some(arr) = child["arguments"][key].as_array() {
            args.extend(arr.iter().cloned());
        }
        if !args.is_empty() {
            parent["arguments"][key] = serde_json::Value::Array(args);
        }
    }
    // minecraftArguments (eski format)
    if let Some(ma) = child["minecraftArguments"].as_str() {
        parent["minecraftArguments"] = serde_json::Value::String(ma.into());
    }
    parent
}

async fn load_version_json(id: &str) -> Result<serde_json::Value, String> {
    let path = versions_dir().join(id).join(format!("{id}.json"));
    if path.exists() {
        return crate::util::read_json::<serde_json::Value>(&path)
            .ok_or_else(|| "version json bozuk".to_string());
    }
    let url = manifest_version_url(id).await?;
    let resp = http_client()
        .get(&url)
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let js: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    if let Some(parent) = path.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let _ = crate::util::write_json(&path, &js);
    Ok(js)
}

/// Tek bir library girdisinin ANA artifact'ini çöz: (url, libraries'e göreli yol, sha1).
/// Yeni format `downloads.artifact` taşır; fabric meta profilleri ise yalnız
/// `name` (maven koordinatı: group:artifact:version) + `url` (repo kökü) verir.
/// Fabric'in jar'ı indirilmezse oyun `KnotClient ClassNotFound` ile çöker.
fn lib_main_artifact(lib: &serde_json::Value) -> Option<(String, String, Option<String>)> {
    if let Some(path) = lib["downloads"]["artifact"]["path"].as_str() {
        let url = lib["downloads"]["artifact"]["url"].as_str().unwrap_or("");
        let sha = lib["downloads"]["artifact"]["sha1"].as_str().unwrap_or("");
        if !url.is_empty() {
            return Some((
                url.to_string(),
                path.to_string(),
                if sha.is_empty() { None } else { Some(sha.to_string()) },
            ));
        }
    }
    // maven koordinatı yedeği (fabric profili buraya düşer)
    let name = lib["name"].as_str()?;
    let mut it = name.split(':');
    let group = it.next()?;
    let art = it.next()?;
    let ver = it.next()?;
    if it.next().is_some() { return None; } // classifier'lı koordinat → atla
    if group.is_empty() || art.is_empty() || ver.is_empty() { return None; }
    let rel = format!("{}/{}/{}/{}-{}.jar", group.replace('.', "/"), art, ver, art, ver);
    let base = lib["url"]
        .as_str()
        .filter(|s| !s.is_empty())
        .unwrap_or("https://libraries.minecraft.net/");
    let base = if base.ends_with('/') { base.to_string() } else { format!("{base}/") };
    Some((format!("{base}{rel}"), rel, None))
}

// ---------- Kurallar ----------

/// Mojang rule değerlendirmesi. Features'lı kurallar eşleşmez (desteklemediğimiz
/// opsiyonel özellikler: demo, resolution, quickplay → bunlar eklenmez).
fn rules_allow(rules: &[serde_json::Value]) -> bool {
    if rules.is_empty() {
        return true;
    }
    let mut allow = false;
    let mut any_applied = false;
    let os = os_name();
    let arch = if cfg!(target_arch = "x86_64") { "x86" } else { "arm64" };
    for r in rules {
        if r.get("features").is_some() {
            continue;
        }
        let os_rule = &r["os"];
        let mut applies = true;
        if !os_rule.is_null() {
            if let Some(name) = os_rule["name"].as_str() {
                applies = applies && name == os;
            }
            if let Some(a) = os_rule["arch"].as_str() {
                applies = applies && a == arch;
            }
        }
        if applies {
            any_applied = true;
            allow = r["action"].as_str().unwrap_or("allow") == "allow";
        }
    }
    if !any_applied {
        return false; // kural var ama hiçbiri uymadı → dahil etme
    }
    allow
}

// ---------- İndirme planı ----------

pub async fn download_all_for_version(
    vj: &serde_json::Value,
    handle: &tauri::AppHandle,
    percent_base: u8,
    percent_span: u8,
) -> Result<(), String> {
    let vid = vj["id"].as_str().unwrap_or("unknown").to_string();
    let mut jobs: Vec<(String, PathBuf, Option<String>)> = Vec::new();

    // client jar
    let client_url = vj["downloads"]["client"]["url"].as_str().unwrap_or("");
    let client_sha = vj["downloads"]["client"]["sha1"].as_str().unwrap_or("");
    if !client_url.is_empty() {
        let dest = versions_dir().join(&vid).join(format!("{vid}.jar"));
        if !verify_sha1(&dest, client_sha) {
            jobs.push((client_url.into(), dest, Some(client_sha.into())));
        }
    }

    // libraries + natives
    let natives_key = natives_classifier();
    if let Some(libs) = vj["libraries"].as_array() {
        for lib in libs {
            let empty = Vec::new();
            let rules = lib["rules"].as_array().unwrap_or(&empty);
            if !rules_allow(rules) {
                continue;
            }
            if let Some((url, path, sha)) = lib_main_artifact(lib) {
                let dest = libraries_dir().join(&path);
                let skip = match &sha {
                    Some(s) => verify_sha1(&dest, s),
                    None => dest.is_file(), // sha'sız maven lib: varsa indirme
                };
                if !skip {
                    jobs.push((url, dest, sha));
                }
            }
            if let Some(path) = lib["downloads"]["classifiers"][natives_key]["path"].as_str() {
                let url = lib["downloads"]["classifiers"][natives_key]["url"].as_str().unwrap_or("");
                let sha = lib["downloads"]["classifiers"][natives_key]["sha1"].as_str().unwrap_or("");
                if !url.is_empty() {
                    let dest = libraries_dir().join(path);
                    if !verify_sha1(&dest, sha) {
                        jobs.push((url.into(), dest, if sha.is_empty() { None } else { Some(sha.into()) }));
                    }
                }
            }
        }
    }

    // assets
    let idx_url = vj["assetIndex"]["url"].as_str().unwrap_or("");
    let idx_id = vj["assetIndex"]["id"].as_str().unwrap_or("legacy").to_string();
    if !idx_url.is_empty() {
        let idx_dest = assets_dir().join("indexes").join(format!("{idx_id}.json"));
        if !idx_dest.exists() {
            let resp = http_client()
                .get(idx_url)
                .send()
                .await
                .map_err(|e| e.to_string())?;
            let bytes = resp.bytes().await.map_err(|e| e.to_string())?;
            std::fs::create_dir_all(idx_dest.parent().unwrap()).map_err(|e| e.to_string())?;
            std::fs::write(&idx_dest, &bytes).map_err(|e| e.to_string())?;
        }
        if let Some(idx) = crate::util::read_json::<serde_json::Value>(&idx_dest) {
            if let Some(objects) = idx["objects"].as_object() {
                for (_k, obj) in objects {
                    let hash = obj["hash"].as_str().unwrap_or("");
                    if hash.len() < 2 {
                        continue;
                    }
                    let subdir = &hash[0..2];
                    let dest = assets_dir().join("objects").join(subdir).join(hash);
                    if dest.exists() {
                        continue; // asset dosya adı = sha1 → varsa geç
                    }
                    let url = format!("https://resources.download.minecraft.net/{subdir}/{hash}");
                    jobs.push((url, dest, Some(hash.into())));
                }
            }
        }
    }

    yikim_log(format!("indirme planı: {} dosya", jobs.len()));

    let handle2 = handle.clone();
    download_many(
        jobs,
        DlOpts { concurrency: 32, retries: 3 },
        move |p| {
            let pct = percent_base
                + ((p.done_files as f32 / p.total_files.max(1) as f32) * percent_span as f32) as u8;
            let pct = pct.min(percent_base + percent_span);
            let detail = if p.bytes_per_sec > 0 {
                format!("{:.1} MB/s", p.bytes_per_sec as f64 / 1_048_576.0)
            } else {
                String::new()
            };
            let _ = handle2.emit(
                "launch-progress",
                &LaunchProgress { stage: "download".into(), percent: pct, detail },
            );
        },
    )
    .await
}

fn natives_classifier() -> &'static str {
    match os_name() {
        "windows" => {
            if cfg!(target_arch = "x86_64") { "natives-windows" } else { "natives-windows-arm64" }
        }
        "macos" => {
            if cfg!(target_arch = "aarch64") { "natives-macos-arm64" } else { "natives-macos" }
        }
        _ => {
            if cfg!(target_arch = "aarch64") { "natives-linux-arm64" } else { "natives-linux" }
        }
    }
}

// ---------- Java ----------

/// Mojang java-runtime'ı için platform anahtarı.
fn java_platform_key() -> &'static str {
    match (os_name(), crate::core::arch_name()) {
        ("windows", "x64") => "windows-x64",
        ("windows", "arm64") => "windows-arm64",
        ("osx", "x64") => "mac-os",
        ("osx", "arm64") => "mac-os-arm64",
        ("linux", "x64") => "linux",
        ("linux", "arm64") => "linux",
        _ => "linux",
    }
}

/// major sürüm → Mojang component adı (version json'da component yoksa).
fn component_for_major(major: u32) -> &'static str {
    match major {
        8 => "jre-legacy",
        16 => "java-runtime-alpha",
        17 => "java-runtime-gamma",
        21 => "java-runtime-delta",
        _ => "java-runtime-gamma",
    }
}

pub async fn resolve_java_dirs(
    component: &str,
    major: u32,
    java_dir_override: Option<String>,
) -> Result<PathBuf, String> {
    // 1. Kullanıcının seçtiği java
    if let Some(dir) = java_dir_override {
        let dir = PathBuf::from(dir);
        if java_exe(&dir).exists() {
            return Ok(dir);
        }
    }
    // 1.5 Microsoft OpenJDK 25 — Java 21+ gerektiren sürümlerde tercih edilir
    // (mod paketleri için optimize JVM; ayar kapatılırsa veya indirme başarısızsa düşülür)
    if major >= 21 {
        if let Some(dir) = ensure_microsoft_java25().await {
            return Ok(dir);
        }
    }
    // 2. Yönetilen runtime zaten var mı
    let rt_dir = runtimes_dir()
        .join(java_platform_key())
        .join(component);
    if java_exe(&rt_dir).exists() {
        return Ok(rt_dir);
    }
    // 3. Sistemde java dene (sürüm uygunsa)
    if let Ok(p) = which_java() {
        let bin_dir = p.parent().map(|x| x.to_path_buf()).unwrap_or(p);
        if java_major_ok(&bin_dir, major) {
            return Ok(bin_dir);
        }
    }
    // 4. Mojang runtime indir
    let all_url = "https://launchermeta.mojang.com/v1/products/java-runtime/2ec0cc96c44e5a76b9c8b7c39df7210883d12871/all.json";
    let resp = http_client().get(all_url).send().await.map_err(|e| e.to_string())?;
    let all: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    let platform_key = java_platform_key();
    let comp = if all[platform_key][component].is_null() {
        component_for_major(major)
    } else {
        component
    };
    let entry = &all[platform_key][comp][0];
    let manifest_url = entry["manifest"]["url"]
        .as_str()
        .ok_or("java runtime manifest bulunamadı")?;

    let resp = http_client()
        .get(manifest_url)
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let manifest: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    let mut jobs: Vec<(String, PathBuf, Option<String>)> = Vec::new();
    if let Some(files) = manifest["files"].as_object() {
        for (path, f) in files {
            if f["type"].as_str() != Some("file") {
                continue;
            }
            let url = f["downloads"]["raw"]["url"].as_str().unwrap_or("");
            let sha = f["downloads"]["raw"]["sha1"].as_str().unwrap_or("");
            if url.is_empty() {
                continue;
            }
            let dest = rt_dir.join(path);
            if verify_sha1(&dest, sha) {
                continue;
            }
            jobs.push((url.into(), dest, if sha.is_empty() { None } else { Some(sha.into()) }));
        }
    }
    if jobs.is_empty() && !java_exe(&rt_dir).exists() {
        return Err("java runtime boş görünüyor".into());
    }
    download_many(jobs, DlOpts { concurrency: 24, retries: 3 }, |_p| {})
        .await
        .map_err(|e| format!("java indirilemedi: {e}"))?;

    #[cfg(unix)]
    {
        use std::os::unix::fs::PermissionsExt;
        let bin = rt_dir.join("bin");
        if let Ok(entries) = std::fs::read_dir(&bin) {
            for e in entries.flatten() {
                let p = e.path();
                if p.is_file() {
                    let _ = std::fs::set_permissions(&p, std::fs::Permissions::from_mode(0o755));
                }
            }
        }
    }
    if !java_exe(&rt_dir).exists() {
        return Err("java kurulumu tamamlanamadı".into());
    }
    Ok(rt_dir)
}

pub fn java_exe(bin_dir: &Path) -> PathBuf {
    let exe = if cfg!(windows) { "java.exe" } else { "java" };
    bin_dir.join("bin").join(exe)
}

/// rt_dir içinde bin/java olan klasörü bul (bin/ doğrudan altta veya jdk-25.x alt klasöründe).
fn find_java25_dir(rt_dir: &Path) -> Option<PathBuf> {
    if java_exe(rt_dir).exists() {
        return Some(rt_dir.to_path_buf());
    }
    if let Ok(rd) = std::fs::read_dir(rt_dir) {
        for e in rd.flatten() {
            if java_exe(&e.path()).exists() {
                return Some(e.path());
            }
        }
    }
    None
}

/// Microsoft Build of OpenJDK 25 (LTS) — mod paketleri için optimize JVM.
/// Java 21+ isteyen Minecraft sürümlerinde Mojang runtime'ına tercih edilir
/// (config `use_java25` ile açılır/kapanır). Windows: zip, diğer: tar.gz.
/// Herhangi bir adım başarısız olursa None döner → Mojang java-runtime'a düşülür.
pub async fn ensure_microsoft_java25() -> Option<PathBuf> {
    let cfg = crate::config::YikimConfig::load_or_default();
    if !cfg.use_java25 {
        return None;
    }
    let rt_dir = runtimes_dir().join("microsoft-jdk-25");
    // zaten kurulu mu? (bin/ doğrudan altta YA DA jdk-25.x alt klasöründe)
    if let Some(dir) = find_java25_dir(&rt_dir) {
        return Some(dir);
    }
    let arch = crate::core::arch_name();
    let archive_url = if cfg!(windows) {
        if arch == "arm64" {
            "https://aka.ms/download-jdk/microsoft-jdk-25-windows-aarch64.zip"
        } else {
            "https://aka.ms/download-jdk/microsoft-jdk-25-windows-x64.zip"
        }
    } else if os_name() == "osx" {
        if arch == "arm64" {
            "https://aka.ms/download-jdk/microsoft-jdk-25-macOS-aarch64.tar.gz"
        } else {
            "https://aka.ms/download-jdk/microsoft-jdk-25-macOS-x64.tar.gz"
        }
    } else if arch == "arm64" {
        "https://aka.ms/download-jdk/microsoft-jdk-25-linux-aarch64.tar.gz"
    } else {
        "https://aka.ms/download-jdk/microsoft-jdk-25-linux-x64.tar.gz"
    };
    yikim_log(format!("Microsoft OpenJDK 25 indiriliyor: {archive_url}"));
    let tmp = runtimes_dir().join("microsoft-jdk-25.download");
    let _ = std::fs::remove_dir_all(&tmp);
    if std::fs::create_dir_all(&tmp).is_err() {
        return None;
    }
    let resp = match http_client().get(archive_url).send().await {
        Ok(r) if r.status().is_success() => r,
        Ok(r) => {
            yikim_log(format!("MS JDK 25 indirme başarısız: HTTP {}", r.status()));
            return None;
        }
        Err(e) => {
            yikim_log(format!("MS JDK 25 indirme hatası: {e}"));
            return None;
        }
    };
    let bytes = match resp.bytes().await {
        Ok(b) => b,
        Err(e) => {
            yikim_log(format!("MS JDK 25 gövde hatası: {e}"));
            return None;
        }
    };
    let xdir = tmp.join("x");
    if cfg!(windows) {
        // zip arşivini aç
        let Ok(mut f) = std::fs::File::create(tmp.join("jdk25.zip")) else { return None };
        use std::io::Write;
        if f.write_all(&bytes).is_err() {
            return None;
        }
        drop(f);
        let Ok(zipf) = std::fs::File::open(tmp.join("jdk25.zip")) else { return None };
        let Ok(mut z) = zip::ZipArchive::new(zipf) else { return None };
        for i in 0..z.len() {
            let Ok(mut zf) = z.by_index(i) else { continue };
            let Some(rel) = zf.enclosed_name().map(|p| p.to_path_buf()) else { continue };
            let out = xdir.join(&rel);
            if zf.is_dir() {
                let _ = std::fs::create_dir_all(&out);
                continue;
            }
            if let Some(p) = out.parent() {
                let _ = std::fs::create_dir_all(p);
            }
            let Ok(mut w) = std::fs::File::create(&out) else { continue };
            let _ = std::io::copy(&mut zf, &mut w);
        }
    } else {
        // tar.gz arşivini aç
        let Ok(mut f) = std::fs::File::create(tmp.join("jdk25.tar.gz")) else { return None };
        use std::io::Write;
        if f.write_all(&bytes).is_err() {
            return None;
        }
        drop(f);
        let Ok(tf) = std::fs::File::open(tmp.join("jdk25.tar.gz")) else { return None };
        let gz = flate2::read::GzDecoder::new(tf);
        let mut tar = tar::Archive::new(gz);
        if tar.unpack(&xdir).is_err() {
            return None;
        }
    }
    // jdk-25.x.y+7 gibi iç klasörü rt_dir'e taşı
    let mut inner = None;
    if let Ok(rd) = std::fs::read_dir(&xdir) {
        for e in rd.flatten() {
            if java_exe(&e.path()).exists() {
                inner = Some(e.path());
                break;
            }
        }
    }
    let inner = inner?;
    let _ = std::fs::remove_dir_all(&rt_dir);
    if std::fs::rename(&inner, &rt_dir).is_err() {
        // rename diskler arası başarısız olabilir → kopyala-yapıştır
        if copy_dir_recursive(&inner, &rt_dir).is_err() {
            return None;
        }
    }
    let _ = std::fs::remove_dir_all(&tmp);
    yikim_log("Microsoft OpenJDK 25 hazır".into());
    Some(rt_dir)
}

/// Klasörü özyinelemeli kopyala (rename diskler arası başarısız olursa yedek yol).
pub fn copy_dir_recursive(src: &Path, dst: &Path) -> Result<(), String> {
    std::fs::create_dir_all(dst).map_err(|e| e.to_string())?;
    for e in std::fs::read_dir(src).map_err(|e| e.to_string())?.flatten() {
        let from = e.path();
        let to = dst.join(e.file_name());
        if from.is_dir() {
            copy_dir_recursive(&from, &to)?;
        } else {
            std::fs::copy(&from, &to).map_err(|e| e.to_string())?;
        }
    }
    Ok(())
}

fn which_java() -> Result<PathBuf, String> {
    let (program, arg) = if cfg!(windows) { ("where", "java") } else { ("which", "java") };
    let out = std::process::Command::new(program)
        .arg(arg)
        .output()
        .map_err(|_| "java yok".to_string())?;
    let s = String::from_utf8_lossy(&out.stdout);
    s.lines()
        .next()
        .map(|l| PathBuf::from(l.trim()))
        .filter(|p| !p.as_os_str().is_empty())
        .ok_or_else(|| "java yok".into())
}

/// `java -version` çıktısından major sürümü al; gerekenden küçükse false.
fn java_major_ok(java_bin_dir: &Path, required: u32) -> bool {
    let exe = java_exe(java_bin_dir);
    let mut cmd = std::process::Command::new(&exe);
    cmd.arg("-version");
    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        cmd.creation_flags(0x08000000); // CREATE_NO_WINDOW — CMD penceresi açılmasın
    }
    let Ok(out) = cmd.output() else {
        return false;
    };
    let text = format!(
        "{}{}",
        String::from_utf8_lossy(&out.stdout),
        String::from_utf8_lossy(&out.stderr)
    );
    // örn: openjdk version "21.0.2" ...
    let major = text
        .split('"')
        .nth(1)
        .and_then(|v| v.split('.').next())
        .and_then(|v| v.parse::<u32>().ok())
        .unwrap_or(0);
    major >= required
}

// ---------- Natives ----------

fn extract_natives(vj: &serde_json::Value, natives_dir: &Path) -> Result<(), String> {
    let natives_key = natives_classifier();
    let _ = std::fs::create_dir_all(natives_dir);
    if let Some(libs) = vj["libraries"].as_array() {
        for lib in libs {
            let empty = Vec::new();
            let rules = lib["rules"].as_array().unwrap_or(&empty);
            if !rules_allow(rules) {
                continue;
            }
            let Some(path) = lib["downloads"]["classifiers"][natives_key]["path"].as_str() else {
                continue;
            };
            let jar_path = libraries_dir().join(path);
            if !jar_path.exists() {
                continue;
            }
            let file = std::fs::File::open(&jar_path).map_err(|e| e.to_string())?;
            let mut archive = zip::ZipArchive::new(file).map_err(|e| e.to_string())?;
            for i in 0..archive.len() {
                let mut f = archive.by_index(i).map_err(|e| e.to_string())?;
                let name = f.name().to_string();
                if name.ends_with('/') {
                    continue;
                }
                if !(name.ends_with(".dll") || name.ends_with(".so") || name.ends_with(".jnilib")) {
                    continue;
                }
                let base = name.rsplit('/').next().unwrap_or(&name).to_string();
                // MACOSX meta klasörlerini atla
                if base.starts_with("._") || base.contains("META-INF") {
                    continue;
                }
                let out_path = natives_dir.join(base);
                let mut out = std::fs::File::create(&out_path).map_err(|e| e.to_string())?;
                std::io::copy(&mut f, &mut out).map_err(|e| e.to_string())?;
                #[cfg(unix)]
                {
                    use std::os::unix::fs::PermissionsExt;
                    let _ = std::fs::set_permissions(
                        &out_path,
                        std::fs::Permissions::from_mode(0o755),
                    );
                }
            }
        }
    }
    Ok(())
}

// ---------- Başlatma ----------

fn subst_vars(s: &str, vars: &[(String, String)]) -> String {
    let mut out = s.to_string();
    for (k, v) in vars {
        out = out.replace(&format!("${{{k}}}"), v);
    }
    out
}

/// Tüm java argümanlarını oluştur (preset + instance + version jvm).
fn build_jvm_args(
    vj: &serde_json::Value,
    inst: &crate::instances::Instance,
    natives_dir: &Path,
    classpath_str: &str,
    vars: &[(String, String)],
) -> Vec<String> {
    let mut out: Vec<String> = Vec::new();

    // preset + instance özel argümanları (önce; sonra version arg'ları override edebilir)
    let preset = crate::modpacks::java_preset_by_id(&inst.java_preset_id)
        .unwrap_or_else(|| crate::modpacks::java_preset_by_id("balanced").unwrap());
    for a in preset.args.iter().chain(inst.java_args_extra.iter()) {
        let a = a.replace("{ram_mb}", &inst.ram_mb.to_string());
        if !a.trim().is_empty() {
            out.push(a);
        }
    }

    // YIKIM köprüsü: mod (YikimBridge) kurulum kimliğini buradan okur; restart
    // isteklerine ve ready işaretine yazar — launcher böylece hangi kurulumun
    // istek attığını dosya adından değil bu kimlikten bilir.
    out.push(format!("-Dyikimlient.instance={}", inst.id));

    // version json jvm args
    let natives_str = natives_dir.to_string_lossy().replace('\\', "/");
    let mut version_vars: Vec<(String, String)> = vars.to_vec();
    version_vars.push(("natives_directory".into(), natives_str.clone()));
    version_vars.push(("launcher_name".into(), "YIKIMLient".into()));
    version_vars.push(("launcher_version".into(), "0.1.0".into()));
    version_vars.push(("classpath".into(), classpath_str.into()));
    version_vars.push(("classpath_separator".into(), if cfg!(windows) { ";".into() } else { ":".into() }));
    version_vars.push(("library_directory".into(), libraries_dir().to_string_lossy().replace('\\', "/")));

    let push_arg_value = |v: &serde_json::Value, out: &mut Vec<String>| {
        if let Some(s) = v.as_str() {
            out.push(subst_vars(s, &version_vars));
        } else if let Some(arr) = v.as_array() {
            for x in arr {
                if let Some(s) = x.as_str() {
                    out.push(subst_vars(s, &version_vars));
                }
            }
        }
    };

    if let Some(args) = vj["arguments"]["jvm"].as_array() {
        for a in args {
            if let Some(s) = a.as_str() {
                out.push(subst_vars(s, &version_vars));
            } else {
                let empty = Vec::new();
                let rules = a["rules"].as_array().unwrap_or(&empty);
                if rules_allow(rules) {
                    push_arg_value(&a["value"], &mut out);
                }
            }
        }
    } else if let Some(ma) = vj["minecraftArguments"].as_str() {
        // eski format: -Djava.library.path + cp + args
        out.push(format!("-Djava.library.path={}", natives_str));
        out.push("-cp".into());
        out.push(classpath_str.to_string());
        out.push(ma.to_string());
    }
    out
}

/// Oyunu başlat; stdout/stderr'i canlı loga aktar, çıkışta istatistik kaydet.
/// İstatistik tamamen event-driven: oyun içinde sıfır dosya I/O.
pub async fn launch_game(
    handle: tauri::AppHandle,
    inst: crate::instances::Instance,
    version_id: &str,
    account: crate::auth::Account,
    java_dir: &Path,
    session: std::sync::Arc<crate::stats::LiveSession>,
) -> Result<u32, String> {
    let vj = load_version_json_merged(version_id).await?;
    let main_class = vj["mainClass"]
        .as_str()
        .unwrap_or_default()
        .to_string();
    if main_class.is_empty() {
        return Err("mainClass yok".into());
    }

    // natives çıkar
    let natives_dir = versions_dir().join(version_id).join("natives");
    extract_natives(&vj, &natives_dir)?;

    // classpath
    let mut classpath: Vec<PathBuf> = Vec::new();
    if let Some(libs) = vj["libraries"].as_array() {
        for lib in libs {
            let empty = Vec::new();
            let rules = lib["rules"].as_array().unwrap_or(&empty);
            if !rules_allow(rules) {
                continue;
            }
            if let Some((url, path, sha)) = lib_main_artifact(lib) {
                let p = libraries_dir().join(&path);
                if p.exists() {
                    classpath.push(p);
                } else {
                    // launch sırasında eksik lib: anında indir (yoksa java CNFE ile -1 çöker)
                    yikim_log(format!("eksik kütüphane launch'ta indiriliyor: {path}"));
                    let locked = std::sync::Arc::new(tokio::sync::Mutex::new(()));
                    let _guard = locked.lock().await;
                    let res = crate::util::download_many(
                        vec![(
                            url,
                            libraries_dir().join(&path),
                            sha,
                        )],
                        crate::util::DlOpts { concurrency: 2, retries: 3 },
                        |_| {},
                    )
                    .await;
                    if let Err(e) = res {
                        return Err(format!("kütüphane indirilemedi ({path}): {e}"));
                    }
                    if libraries_dir().join(&path).exists() {
                        classpath.push(libraries_dir().join(path));
                    }
                }
            }
        }
    }
    let client_jar = versions_dir().join(version_id).join(format!("{version_id}.jar"));
    // fabric gibi inheritsFrom'lu profillerde client jar vanilla sürüm klasöründe
    // durur (downloads vanilla JSON'dan gelir); orada yoksa zincirin köküne bak.
    let client_jar = if client_jar.exists() {
        client_jar
    } else {
        let root_id = version_id
            .split_once("-")
            .and_then(|(_, rest)| {
                // "fabric-loader-x.y.z-1.21.11" → son segment vanilla sürümüdür
                rest.rsplit('-').next().map(|s| s.to_string())
            })
            .unwrap_or_else(|| version_id.to_string());
        let root_jar = versions_dir().join(&root_id).join(format!("{root_id}.jar"));
        if root_jar.exists() { root_jar } else { client_jar }
    };
    if !client_jar.exists() {
        return Err("client jar eksik".into());
    }
    classpath.push(client_jar);
    // Windows'ta JDK classpath ayırıcı `;` — MAIN_SEPARATOR (`\`) ilgisiz, her zaman `:` üretiyordu.
    let cp_sep = if cfg!(windows) { ";" } else { ":" };
    let classpath_str = classpath
        .iter()
        .map(|p| p.to_string_lossy().replace('\\', "/"))
        .collect::<Vec<_>>()
        .join(cp_sep);

    // değişkenler
    let asset_id = vj["assetIndex"]["id"].as_str().unwrap_or("legacy").to_string();
    let game_dir = inst.dir();
    let vars: Vec<(String, String)> = vec![
        ("auth_player_name".into(), account.name.clone()),
        ("version_name".into(), version_id.to_string()),
        ("game_directory".into(), game_dir.to_string_lossy().replace('\\', "/")),
        ("assets_root".into(), assets_dir().to_string_lossy().replace('\\', "/")),
        ("game_assets".into(), assets_dir().join("virtual").join(&asset_id).to_string_lossy().replace('\\', "/")),
        ("assets_index_name".into(), asset_id.clone()),
        ("auth_uuid".into(), account.uuid.clone()),
        ("auth_access_token".into(), account.access_token.clone()),
        ("auth_xuid".into(), String::new()),
        ("clientid".into(), "yikimlient".into()),
        ("auth_session".into(), String::new()),
        ("user_type".into(), "msa".into()),
        ("version_type".into(), vj["type"].as_str().unwrap_or("release").into()),
        ("user_properties".into(), "{}".into()),
        ("resolution_width".into(), String::new()),
        ("resolution_height".into(), String::new()),
        ("quickPlayPath".into(), String::new()),
        ("quickPlaySingleplayer".into(), String::new()),
        ("quickPlayMultiplayer".into(), String::new()),
        ("quickPlayRealms".into(), String::new()),
    ];

    // game args
    let mut game_args: Vec<String> = Vec::new();
    if let Some(args) = vj["arguments"]["game"].as_array() {
        for a in args {
            if let Some(s) = a.as_str() {
                let s = subst_vars(s, &vars);
                // tamamen boşalan placeholder'ları atla
                if s.trim().is_empty() && s != *a {
                    continue;
                }
                if !s.trim().is_empty() {
                    game_args.push(s);
                }
            } else {
                let empty = Vec::new();
                let rules = a["rules"].as_array().unwrap_or(&empty);
                if rules_allow(rules) {
                    if let Some(v) = a["value"].as_str() {
                        let s = subst_vars(v, &vars);
                        if !s.trim().is_empty() {
                            game_args.push(s);
                        }
                    } else if let Some(vals) = a["value"].as_array() {
                        for v in vals {
                            if let Some(s) = v.as_str() {
                                let s = subst_vars(s, &vars);
                                if !s.trim().is_empty() {
                                    game_args.push(s);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    let jvm_args = build_jvm_args(&vj, &inst, &natives_dir, &classpath_str, &vars);

    let _ = std::fs::create_dir_all(&game_dir);
    let java_path = java_exe(java_dir);
    if !java_path.exists() {
        return Err(format!("java bulunamadı: {}", java_path.display()));
    }

    yikim_log(format!("oyun başlatılıyor: {version_id} — pid bekleniyor"));
    // Teşhis: java'ya verilen TÜM komut satırını diske dök (crash analizi)
    {
        let dir = crate::core::app_dir().join("logs");
        let _ = std::fs::create_dir_all(&dir);
        let mut dump = String::new();
        dump.push_str(&java_path.to_string_lossy());
        dump.push('\n');
        for a in &jvm_args {
            dump.push_str(a);
            dump.push('\n');
        }
        dump.push_str(&main_class);
        dump.push('\n');
        for a in &game_args {
            dump.push_str(a);
            dump.push('\n');
        }
        dump.push_str(&format!("--- classpath değil, arg listesi sonu. game_dir: {}\n", game_dir.display()));
        let _ = std::fs::write(dir.join("launch-cmd.txt"), &dump);
    }
    let mut cmd = std::process::Command::new(&java_path);
    cmd.current_dir(&game_dir);
    for a in &jvm_args {
        cmd.arg(a);
    }
    cmd.arg(&main_class);
    for a in &game_args {
        cmd.arg(a);
    }
    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        cmd.creation_flags(0x08000000); // CREATE_NO_WINDOW
    }
    let mut child = cmd
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::piped())
        .spawn()
        .map_err(|e| format!("oyun başlatılamadı: {e}"))?;
    let pid = child.id();
    yikim_log(format!("oyun PID: {pid}"));

    // Discord Rich Presence: oyun açıldı → "YIKIMLient ile oynuyor" (tek seferlik set, internet trafiği yok)
    crate::discord_rpc::start(
        &inst.name,
        &inst.mc_version,
        &session.server.lock().unwrap().clone(),
    );

    // canlı log: stdout + stderr → log dosyası + event; sunucu tespiti
    let stdout = child.stdout.take();
    let stderr = child.stderr.take();
    let log_path = game_dir.join("yikimlient-latest.log");
    let h2 = handle.clone();
    std::thread::spawn(move || {
        use std::io::{BufRead, BufReader, Write};
        let log = std::sync::Arc::new(std::sync::Mutex::new(
            std::fs::File::create(&log_path).ok(),
        ));
        let server_host = session.server.clone();
        let mut readers: Vec<Box<dyn BufRead + Send>> = Vec::new();
        if let Some(s) = stdout {
            readers.push(Box::new(BufReader::new(s)));
        }
        if let Some(s) = stderr {
            readers.push(Box::new(BufReader::new(s)));
        }
        for r in readers {
            let sh = server_host.clone();
            let lg = log.clone();
            let eh = h2.clone();
            std::thread::spawn(move || {
                let lines = r.lines();
                for line in lines.map_while(Result::ok) {
                    // canlı log: her satırı frontend'e aktar (Log sekmesi + başlatma modalı)
                    let _ = eh.emit("game-log", &line);
                    // sunucu bağlantısı tespiti: "Connecting to host:port"
                    if let Some(idx) = line.find("Connecting to ") {
                        let host = line[idx + 14..]
                            .split(|c: char| c.is_whitespace() || c == ',')
                            .next()
                            .unwrap_or("")
                            .to_string();
                        if !host.is_empty() {
                            *sh.lock().unwrap() = host;
                        }
                    }
                    if let Some(f) = lg.lock().unwrap().as_mut() {
                        let _ = f.write_all(format!("{line}\n").as_bytes());
                    }
                }
            });
        }
        // çıkışı bekle → oturumu kaydet (event-driven istatistik)
        let code = child
            .wait()
            .ok()
            .and_then(|s| s.code())
            .unwrap_or(-1);
        let rec = session.finish(code);
        if let Err(e) = crate::stats::record_session(&rec) {
            yikim_log(format!("istatistik kaydedilemedi: {e}"));
        }
        // instance'ın toplam oynanış süresini ve son oynanışını güncelle
        let _ = crate::instances::update(&rec.instance_id, |i| {
            i.playtime_ms += rec.duration_ms;
            i.last_played = rec.started_at + rec.duration_ms;
        });
        let _ = h2.emit("game-exit", &rec);
        // Restart/perde akışı TAMAMEN Rust çekirdeğinde yürür (curtain::handle_game_exit):
        // perde açılır → değişiklikler uygulanır → oyun sessizce geri açılır.
        // Ana pencere gizli/küçültülmüş olsa bile zincir kesintisiz sürer.
        // Not: launch_game future'u Send olmadığından akış, kendi tek-iş-parçacıklı
        // runtime'ında çalışan bağımsız bir thread'de yürür (komut satırı kapatılmış olsa bile).
        {
            let h3 = h2.clone();
            let exited_id = rec.instance_id.clone();
            std::thread::spawn(move || {
                let rt = match tokio::runtime::Builder::new_current_thread().enable_all().build() {
                    Ok(rt) => rt,
                    Err(e) => {
                        yikim_log(format!("restart runtime kurulamadı: {e}"));
                        return;
                    }
                };
                rt.block_on(async move {
                    crate::curtain::handle_game_exit(&h3, &exited_id).await;
                });
            });
        }
    });

    // (Discord RPC KALDIRILDI — internet bağlantısını etkileyebiliyordu)

    Ok(pid)
}
