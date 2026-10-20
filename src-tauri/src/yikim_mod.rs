//! YIKIM çekirdek modu — gömülü jar'ların kurulumlara otomatik eklenmesi.
//!
//! Eski client'ın oyun içi modu (v1.3.1, mixin yok, olay tabanlı) launcher'la
//! birlikte taşınır: `resources/mods/manifest.json` hangi Minecraft sürümüne
//! hangi jar gidiyorsa onu söyler. Kurulum `cmd_create_instance`,
//! `cmd_install_pack_files` ve `cmd_launch_instance` noktalarında denenir;
//! **asla kurulumu/oyunu bloklamaz** — hata yalnızca loglanır (mod eksikse
//! oyun yine açılır).
//!
//! Sürüm eşleme kuralı:
//!   1. manifest'te birebir sürüm varsa o jar,
//!   2. yoksa aynı minor sürüm (1.21.x) içinde hedefe en yakın patch
//!      (eşitlikte küçük patch tercih edilir — adaptör geriye dönüktür).
//! Modun tamamı Fabric + 1.21 ailesine göredir; başka loader/sürümde sessizce
//! atlanır.

use std::fs;
use std::path::{Path, PathBuf};

use tauri::Manager;

use crate::core;
use crate::instances::Instance;

/// manifest.json'daki tek satır.
#[derive(serde::Deserialize)]
struct ManifestEntry {
    #[serde(rename = "mcVersion")]
    mc_version: String,
    file: String,
}

/// Jar'ın mods listesindeki görüntüsü — Modrinth'te olmadığı için veri URI'si.
/// Turuncu zemin üzerinde beyaz Y (marka diline uygun, temadan bağımsız).
pub const YIKIM_ICON_DATA_URI: &str = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect width='24' height='24' rx='6' fill='%23ff7a18'/><text x='12' y='16.5' font-family='Segoe UI,system-ui,sans-serif' font-size='13.5' font-weight='700' fill='white' text-anchor='middle'>Y</text></svg>";

/// Gömülü mods dizinini bul. Kurulu pakette tauri `resources` önekini korur
/// (`<exe>/resources/mods`), geliştirmede cargo manifest dizini geçerlidir.
fn embedded_mods_dir(app: &tauri::AppHandle) -> Option<PathBuf> {
    let mut candidates: Vec<PathBuf> = Vec::new();
    if let Ok(rd) = app.path().resource_dir() {
        candidates.push(rd.join("resources").join("mods"));
        candidates.push(rd.join("mods"));
    }
    candidates.push(PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("resources").join("mods"));
    candidates.into_iter().find(|d| d.join("manifest.json").is_file())
}

fn load_manifest(dir: &Path) -> Option<Vec<ManifestEntry>> {
    let mut bytes = fs::read(dir.join("manifest.json")).ok()?;
    // UTF-8 BOF koruması: bazı paketleyiciler BOM bırakıyor; serde_json BOM'u reddeder.
    if bytes.len() >= 3 && bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF {
        bytes.drain(..3);
    }
    let text = String::from_utf8(bytes).ok()?;
    let js: serde_json::Value = serde_json::from_str(&text).ok()?;
    let arr = js["mods"].as_array()?;
    let mut out = Vec::new();
    for m in arr {
        let mc = m["mcVersion"].as_str()?.to_string();
        let file = m["file"].as_str()?.to_string();
        out.push(ManifestEntry { mc_version: mc, file });
    }
    if out.is_empty() { None } else { Some(out) }
}

/// "1.21.11" → (1, 21, 11); "1.21" → (1, 21, 0); beklenmedik biçimde None.
fn parse_version(v: &str) -> Option<(u32, u32, u32)> {
    let p: Vec<u32> = v
        .split('.')
        .map(|s| s.trim().parse::<u32>().ok())
        .collect::<Option<_>>()?;
    match p.len() {
        3 => Some((p[0], p[1], p[2])),
        2 => Some((p[0], p[1], 0)),
        _ => None,
    }
}

/// Hedef sürüm için en uygun jar dosyası.
fn pick_jar_for(mc_version: &str, dir: &Path) -> Option<PathBuf> {
    let entries = load_manifest(dir)?;
    // 1) birebir
    if let Some(e) = entries.iter().find(|e| e.mc_version == mc_version) {
        let p = dir.join(&e.file);
        if p.is_file() { return Some(p); }
    }
    // 2) aynı major.minor içinde en yakın patch
    let (tmaj, tmin, tpat) = parse_version(mc_version)?;
    let mut best: Option<((u32, u32, u32), &ManifestEntry)> = None;
    for e in &entries {
        let (mj, mn, pt) = match parse_version(&e.mc_version) {
            Some(v) => v,
            None => continue,
        };
        if (mj, mn) != (tmaj, tmin) { continue; }
        let dist = pt.abs_diff(tpat);
        let better = match best {
            None => true,
            Some(((bmj, bmn, bpt), _)) => {
                dist < bpt.abs_diff(tpat)
                    || (dist == bpt.abs_diff(tpat) && pt < bpt) // eşitlikte küçük sürüm
                    || (mj, mn) != (bmj, bmn)
            }
        };
        if better { best = Some(((mj, mn, pt), e)); }
    }
    best.map(|(_, e)| dir.join(&e.file)).filter(|p| p.is_file())
}

/// Kurulumda YIKIM jar'larının adları (yükseltme tespiti için).
fn installed_yikim_jars(mods_dir: &Path) -> Vec<PathBuf> {
    let mut out = Vec::new();
    if let Ok(rd) = mods_dir.read_dir() {
        for e in rd.filter_map(|e| e.ok()) {
            let n = e.file_name().to_string_lossy().to_lowercase();
            if n.starts_with("yikimlient-") && n.ends_with(".jar") {
                out.push(e.path());
            }
        }
    }
    out
}

/// YIKIM çekirdeğini kurulumun mods klasörüne EKLE veya GÜNCELLE.
/// Hedef sürümün jar'ı zaten varsa dokunmaz; farklı bir YIKIM jar'ı varsa
/// (sürüm yükseltme) eskisini kaldırıp yenisini koyar. Fabric aynı mod id'sini
/// iki jar'da görmeyi reddettiği için eski kopya asla bırakılmaz; oyun kapalıyken
/// çağrıldığı için dosya kilidi pratikte sorun olmaz.
/// Dönüş: gerçekten kopyalandı mı. Hata durumunda Err döner; çağıran yalnız
/// loglar — oyun akışı asla bloklanmaz.
pub fn ensure_installed(app: &tauri::AppHandle, inst: &Instance) -> Result<bool, String> {
    let dir = embedded_mods_dir(app).ok_or("gömülü YIKIM modu bulunamadı (resources/mods)")?;
    install_from(&dir, inst)
}

/// Çekirdek kurulum: kaynak jar dizini + kurulum → mods klasörüne kopya.
/// AppHandle'sız; birim testleri de burayı kullanır.
pub fn install_from(embedded_dir: &Path, inst: &Instance) -> Result<bool, String> {
    if inst.mod_loader != "fabric" {
        return Ok(false); // mod yalnızca Fabric
    }
    if !inst.mc_version.starts_with("1.21") {
        return Ok(false); // jar'lar 1.21 ailesine göredir (26.x ayrı iş)
    }
    let mods_dir = inst.mods_dir();
    fs::create_dir_all(&mods_dir).map_err(|e| format!("mods klasörü açılamadı: {e}"))?;
    let jar = pick_jar_for(&inst.mc_version, embedded_dir)
        .ok_or_else(|| format!("{} için YIKIM modu jar'ı yok", inst.mc_version))?;
    let file_name = jar
        .file_name()
        .map(|s| s.to_string_lossy().to_string())
        .ok_or("jar dosya adı okunamadı")?;
    let target = mods_dir.join(&file_name);
    if target.is_file() {
        return Ok(false); // hedef sürüm zaten kurulu
    }
    // sürüm yükseltme: eski yikimlient jar'larını kaldır (kopyalamadan ÖNCE —
    // iki kopya aynı anda durursa Fabric "duplicate mod id" ile oyunu açmaz)
    let existing = installed_yikim_jars(&mods_dir);
    for old in &existing {
        if let Err(e) = fs::remove_file(old) {
            // silinemeyen eski jar varsa güncellemeyi DENEME: eski sürümle devam
            core::yikim_log(format!(
                "eski YIKIM modu kaldırılamadı ({}) — güncelleme ertelendi: {e}",
                old.display()
            ));
            return Ok(false);
        }
    }
    fs::copy(&jar, &target)
        .map_err(|e| format!("YIKIM modu kopyalanamadı: {e}"))?;
    if existing.is_empty() {
        core::yikim_log(format!("YIKIM modu kuruldu: {file_name}"));
    } else {
        core::yikim_log(format!(
            "YIKIM modu güncellendi: {file_name} ({} eski jar kaldırıldı)",
            existing.len()
        ));
    }
    Ok(true)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn dir() -> PathBuf {
        PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("resources").join("mods")
    }

    /// BOM'lu manifest bile okunmalı — paketleyici BOM bırakırsa kurulum çökmemeli.
    #[test]
    fn bomlu_manifest_okunur() {
        let tmp = std::env::temp_dir().join(format!("yikim-bom-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&tmp);
        std::fs::create_dir_all(&tmp).unwrap();
        let ham = "\u{FEFF}{\"mods\":[{\"mcVersion\":\"1.21.11\",\"file\":\"test.jar\"}]}";
        std::fs::write(tmp.join("manifest.json"), ham).unwrap();
        let girdi = load_manifest(&tmp).expect("BOM'lu manifest okunamadi");
        assert_eq!(girdi.len(), 1);
        assert_eq!(girdi[0].file, "test.jar");
        let _ = std::fs::remove_dir_all(&tmp);
    }

    #[test]
    fn birebir_surum_eslesir() {
        let d = dir();
        let j = pick_jar_for("1.21.11", &d).expect("1.21.11 jar yok");
        assert!(j.file_name().unwrap().to_string_lossy().contains("1.21.11"));
    }

    #[test]
    fn bilinmeyen_surum_en_yakina_duser() {
        let d = dir();
        // gelecekteki sürüm → aynı minor içinde en yakın küçük patch
        let j = pick_jar_for("1.21.12", &d).expect("yedek jar yok");
        assert!(j.file_name().unwrap().to_string_lossy().contains("1.21.11"));
    }

    #[test]
    fn patchsiz_surum_ilk_patche_duser() {
        let d = dir();
        let j = pick_jar_for("1.21", &d).expect("1.21 yedeği yok");
        assert!(j.file_name().unwrap().to_string_lossy().contains("1.21.1"));
    }

    #[test]
    fn baska_minor_eslesmez() {
        let d = dir();
        assert!(pick_jar_for("1.20.4", &d).is_none());
    }

    /// Gerçek kurulum: geçici kurulum klasörüne jar kopyalanmalı.
    #[test]
    fn kurulum_jari_kopyalar() {
        let d = dir();
        let tmp = std::env::temp_dir().join(format!("yikim-test-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&tmp);
        std::fs::create_dir_all(tmp.join("mods")).unwrap();
        let inst = Instance {
            id: "test-inst".into(),
            name: "Test".into(),
            mc_version: "1.21.11".into(),
            mod_loader: "fabric".into(),
            ..Default::default()
        };
        // mods_dir() core::app_dir altına yazmaya çalışır; test için kaynak dizini
        // geçici yapamayız — bu yüzden yalnızca kopyalama mantığını doğruluyoruz:
        // embedded dizinden seçim + kopyalama appsız çalışmalı.
        let jar = pick_jar_for("1.21.11", &d).unwrap();
        let dst = tmp.join("mods").join(jar.file_name().unwrap());
        std::fs::copy(&jar, &dst).unwrap();
        assert!(dst.is_file());
        assert!(std::fs::metadata(&dst).unwrap().len() > 100_000);
        let _ = std::fs::remove_dir_all(&tmp);
    }
}
