use crate::core::{instances_dir, yikim_log};
use crate::util::{read_json, write_json};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;

/// Bir oyun kurulumu (instance) = bağımsız bir "profil".
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default)]
pub struct Instance {
    pub id: String,
    pub name: String,
    pub icon: String,           // emoji veya kısa kod
    pub mc_version: String,     // "1.21.1" vs
    pub mod_loader: String,     // "vanilla" | "fabric" | "forge"
    pub loader_version: String, // fabric sürümü; forge şimdilik vanilla-fabric odak
    pub ram_mb: u32,
    pub java_preset_id: String, // hangi java arg preset'i
    pub standard_mods: bool,    // performans/pvp/görünüm otomatik modlar
    pub java_args_extra: Vec<String>,
    pub created_at: i64,
    pub last_played: i64,
    pub playtime_ms: i64,
    pub source_pack: Option<String>, // modrinth/curseforge pack'ten geldiyse
    pub cover: Option<String>,       // kurulum kapak fotoğrafı (dosya yolu, opsiyonel)
}

impl Default for Instance {
    fn default() -> Self {
        Self {
            id: String::new(),
            name: "Yeni Kurulum".into(),
            icon: "\u{1f525}".into(),
            mc_version: "1.21.1".into(),
            mod_loader: "fabric".into(),
            loader_version: String::new(), // latest alınır
            ram_mb: 4096,
            java_preset_id: "balanced".into(),
            standard_mods: true,
            java_args_extra: vec![],
            created_at: 0,
            last_played: 0,
            playtime_ms: 0,
            source_pack: None,
            cover: None,
        }
    }
}

impl Instance {
    pub fn dir(&self) -> PathBuf {
        instances_dir().join(&self.id)
    }
    pub fn mods_dir(&self) -> PathBuf {
        crate::core::ensure_subdir(&self.dir(), "mods")
    }
    pub fn meta_path(&self) -> PathBuf {
        self.dir().join("yikimlient.json")
    }
    pub fn save(&self) -> Result<(), String> {
        write_json(&self.meta_path(), self)
    }
    pub fn load(id: &str) -> Option<Instance> {
        read_json(&instances_dir().join(id).join("yikimlient.json"))
    }
}

/// Tüm instance'ları listele.
pub fn list() -> Vec<Instance> {
    let dir = instances_dir();
    let mut out = Vec::new();
    if let Ok(entries) = std::fs::read_dir(&dir) {
        for e in entries.flatten() {
            let p = e.path();
            if p.is_dir() {
                if let Some(inst) = Instance::load(e.file_name().to_string_lossy().as_ref()) {
                    out.push(inst);
                }
            }
        }
    }
    out.sort_by(|a, b| b.last_played.cmp(&a.last_played).then(a.name.cmp(&b.name)));
    out
}

/// Yeni instance oluştur; id üret ve diske yaz.
pub fn create(mut inst: Instance) -> Result<Instance, String> {
    if inst.id.is_empty() {
        inst.id = format!("inst-{}", crate::core::now_millis());
    }
    if inst.created_at == 0 {
        inst.created_at = crate::core::now_millis();
    }
    std::fs::create_dir_all(inst.dir()).map_err(|e| e.to_string())?;
    std::fs::create_dir_all(inst.mods_dir()).map_err(|e| e.to_string())?;
    inst.save()?;
    // Kurulum hazır ayarlı gelsin: dil/FPS/VSync/ölçek/erişilebilirlik profili
    crate::game_options::ensure_profile(&inst.dir());
    // Sunucu listesinde YIKIMDARA hazır dursun
    crate::server_list::ensure_default(&inst.dir());
    yikim_log(format!("instance oluşturuldu: {} ({})", inst.name, inst.id));
    Ok(inst)
}

pub fn delete(id: &str) -> Result<(), String> {
    let dir = instances_dir().join(id);
    if dir.exists() {
        std::fs::remove_dir_all(&dir).map_err(|e| e.to_string())?;
    }
    Ok(())
}

pub fn duplicate(id: &str) -> Result<Instance, String> {
    let src = Instance::load(id).ok_or("kaynak bulunamadı")?;
    let mut copy = src.clone();
    copy.id = format!("inst-{}", crate::core::now_millis());
    copy.name = format!("{} (kopya)", src.name);
    copy.last_played = 0;
    copy.playtime_ms = 0;
    copy.source_pack = None;
    copy.save()?;
    // modları da kopyala (dosya sistemi seviyesinde)
    copy_mods(&src.dir(), &copy.dir())?;
    Ok(copy)
}

fn copy_mods(src: &std::path::Path, dst: &std::path::Path) -> Result<(), String> {
    let s = src.join("mods");
    let d = dst.join("mods");
    let _ = std::fs::create_dir_all(&d);
    if let Ok(entries) = std::fs::read_dir(&s) {
        for e in entries.flatten() {
            let from = e.path();
            if from.is_file() {
                let to = d.join(e.file_name());
                std::fs::copy(&from, &to).map_err(|e| e.to_string())?;
            }
        }
    }
    Ok(())
}

pub fn update<F: FnOnce(&mut Instance)>(id: &str, f: F) -> Result<Instance, String> {
    let mut inst = Instance::load(id).ok_or("kurulum bulunamadı")?;
    f(&mut inst);
    inst.save()?;
    Ok(inst)
}
