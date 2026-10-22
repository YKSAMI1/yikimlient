use crate::core::{instances_dir, yikim_log};
use serde::Deserialize;
use std::path::PathBuf;
use tauri::{AppHandle, Emitter, Manager};

/// Perde (curtain) yalnızca RESTART akışında açılır: oyun içi YIKIM modundan
/// mod aç/kapa sonrası oyun kapanınca, değişiklikler canlı uygulanırken.
/// Normal oyun açılışında perde YOKTUR — oyun direkt görünür.
///
/// Sözleşme (yikim-mod YikimBridge ile birebir):
///   .yikim/restart-request.json  → mod yazar: mod aç/kapat + katalog kurulum istekleri
///   .yikim/catalog-request.json  → mod yazar: "şunu ara"
///   .yikim/catalog-response.txt  → launcher yazar: arama sonucu
///   .yikim/ready                 → mod yazar: oyun ana menüsü hazır (bilgi amaçlı)

#[derive(Debug, Deserialize)]
pub struct RestartRequest {
    #[allow(dead_code)]
    pub at: Option<i64>,
    #[allow(dead_code)]
    pub reason: Option<String>,
    #[serde(default)]
    pub instance: String,
    #[serde(default)]
    pub mods: Vec<ModDecision>,
    #[serde(default)]
    pub installs: Vec<InstallRequest>,
}

#[derive(Debug, Deserialize)]
pub struct ModDecision {
    pub id: String,
    pub file: String,
    #[serde(rename = "on")]
    pub on: bool,
}

#[derive(Debug, Deserialize)]
pub struct InstallRequest {
    pub source: String,
    pub id: String,
    #[allow(dead_code)]
    pub name: Option<String>,
}

#[derive(Debug, Clone, serde::Serialize)]
pub struct CurtainPlan {
    pub instance_id: String,
    pub toggles: u32,
    pub installs: u32,
}

fn state_dir(inst: &crate::instances::Instance) -> PathBuf {
    inst.dir().join(".yikim")
}

pub fn restart_request_path(inst: &crate::instances::Instance) -> PathBuf {
    state_dir(inst).join("restart-request.json")
}

pub fn ready_path(inst: &crate::instances::Instance) -> PathBuf {
    state_dir(inst).join("ready")
}

pub fn catalog_request_path(inst: &crate::instances::Instance) -> PathBuf {
    state_dir(inst).join("catalog-request.json")
}

pub fn catalog_response_path(inst: &crate::instances::Instance) -> PathBuf {
    state_dir(inst).join("catalog-response.txt")
}

/// Aktif dünyanın köprü renkleri. Mod YikimJson.color ile ayrıştırır:
/// `"#rrggbb"` biçimi kabul, ARGB int'e çevrilir (tema motorundaki değerlerle birebir).
pub fn theme_colors(cfg: &crate::config::YikimConfig) -> (String, String, String) {
    match cfg.theme.as_str() {
        "sokum" => ("#ff5a24".into(), "#ff8a5c".into(), "#14100c".into()),
        "anons" => ("#ffc247".into(), "#ffd97a".into(), "#0d0c09".into()),
        "standart" | "dark" => ("#6e8bff".into(), "#93a8ff".into(), "#0e1016".into()),
        "custom" => (cfg.custom_accent.clone(), cfg.custom_accent.clone(), "#0b0b0d".into()),
        _ => ("#ff7a18".into(), "#ff9a4d".into(), "#0b0b0d".into()), // pano / varsayılan
    }
}

/// Launcher temasını modun canlı okuduğu `.yikim/theme.json`'a yaz.
/// YikimTheme.sync() dosya mtime'ını izler: oyun AÇIKKEN tema değişse bile
/// anında oyuna yansır (oyun içi "renk.ozel" seçilmediyse).
pub fn write_theme_json(inst: &crate::instances::Instance, cfg: &crate::config::YikimConfig) {
    let (accent, accent2, backdrop) = theme_colors(cfg);
    let dir = state_dir(inst);
    if std::fs::create_dir_all(&dir).is_err() {
        return;
    }
    let json = format!(
        "{{\"accent\": \"{accent}\", \"accent2\": \"{accent2}\", \"backdrop\": \"{backdrop}\"}}\n"
    );
    if let Err(e) = std::fs::write(dir.join("theme.json"), json) {
        yikim_log(format!("theme.json yazılamadı: {e}"));
    }
    write_presence_url(inst, cfg);
}

/// Presence uç noktasını modun okuduğu `.yikim/presence-url.txt`'e yaz.
/// Config'te presence_url boşsa dosya SİLİNİR → mod varsayılana döner.
pub fn write_presence_url(inst: &crate::instances::Instance, cfg: &crate::config::YikimConfig) {
    let dir = state_dir(inst);
    if std::fs::create_dir_all(&dir).is_err() {
        return;
    }
    let yol = dir.join("presence-url.txt");
    let url = cfg
        .presence_url
        .as_deref()
        .map(str::trim)
        .filter(|u| u.starts_with("http://") || u.starts_with("https://"));
    match url {
        Some(u) => {
            if let Err(e) = std::fs::write(&yol, format!("{u}\n")) {
                yikim_log(format!("presence-url.txt yazılamadı: {e}"));
            }
        }
        None => {
            let _ = std::fs::remove_file(&yol);
        }
    }
}

/// restart-request.json'ı oku (yoksa None). Okunduktan SONRA çağıran silmelidir.
pub fn read_restart_request(inst: &crate::instances::Instance) -> Option<RestartRequest> {
    let path = restart_request_path(inst);
    let content = std::fs::read_to_string(&path).ok()?;
    // modun JSON'u elle yazılıyor; ama gerçek parser birkaç toleranssız alan hariç çalışır
    match serde_json::from_str::<RestartRequest>(&content) {
        Ok(req) => Some(req),
        Err(e) => {
            yikim_log(format!("restart-request okunamadı: {e}"));
            None
        }
    }
}

/// Tek bir mod kararını uygula: `.jar` ↔ `.jar.disabled` yeniden adlandırma.
/// DİKKAT: d.file oyun içi moddan gelir — ".jar" (açık) veya ".jar.disabled" (kapalı).
/// Önce suffix temizle, sonra doğru kaynak/hedef oluştur.
/// Ok(true) = uygulandı · Ok(false) = kaynak dosya yok · Err = I/O hatası.
pub fn toggle_one(inst: &crate::instances::Instance, d: &ModDecision) -> Result<bool, String> {
    let mods_dir = inst.mods_dir();
    // güvenlik: yalnız mods/ klasörü içindeki .jar dosyalarıyla çalış
    let full_name = std::path::Path::new(&d.file)
        .file_name()
        .map(|s| s.to_string_lossy().to_string())
        .unwrap_or_default();
    if full_name.is_empty() {
        return Ok(false);
    }
    // suffix temizle: "ad.jar.disabled" → "ad"  |  "ad.jar" → "ad"
    let base = full_name
        .strip_suffix(".jar.disabled")
        .or_else(|| full_name.strip_suffix(".jar"))
        .or_else(|| full_name.strip_suffix(".disabled"))
        .map(str::to_string)
        .unwrap_or_else(|| full_name.clone());
    if base.is_empty() {
        return Ok(false);
    }
    let active = mods_dir.join(format!("{base}.jar"));
    let disabled = mods_dir.join(format!("{base}.jar.disabled"));
    let (from, to) = if d.on {
        (disabled, active)
    } else {
        (active, disabled)
    };
    if !from.exists() {
        return Ok(false);
    }
    std::fs::rename(&from, &to)
        .map(|_| true)
        .map_err(|e| format!("{base}: {e}"))
}

// ---------- Perde planı (pencere bunu çizer; Rust state'te tutar) ----------

#[derive(Debug, Clone, serde::Serialize)]
pub struct CurtainToggleView {
    pub id: String,
    pub file: String,
    pub on: bool,
}

#[derive(Debug, Clone, serde::Serialize)]
pub struct CurtainInstallView {
    pub id: String,
    pub name: String,
}

#[derive(Debug, Clone, serde::Serialize)]
pub struct CurtainPlanView {
    pub instance_id: String,
    pub instance_name: String,
    pub label: String,
    pub toggles: Vec<CurtainToggleView>,
    pub installs: Vec<CurtainInstallView>,
}

/// restart-request.json var mı BAK (silmeksizin). Dönüş: (instance_id, istek).
/// Perde açılıp açılmayacağına bu karar verir; uygulama cmd_process_restart_request'te.
pub fn peek_restart_request() -> Option<(String, RestartRequest)> {
    let dir = instances_dir();
    if let Ok(entries) = std::fs::read_dir(&dir) {
        for entry in entries.flatten() {
            let inst_dir = entry.path();
            let req = inst_dir.join(".yikim").join("restart-request.json");
            if !req.is_file() {
                continue;
            }
            let content = std::fs::read_to_string(&req).ok()?;
            let Ok(parsed) = serde_json::from_str::<RestartRequest>(&content) else {
                continue;
            };
            let instance_id = if parsed.instance.is_empty() {
                entry.file_name().to_string_lossy().to_string()
            } else {
                parsed.instance.clone()
            };
            return Some((instance_id, parsed));
        }
    }
    None
}

// ---------- Restart akışı (tamamen Rust çekirdeğinde; pencereye bağımlı DEĞİL) ----------

/// Perdeyi kapat + planı temizle (hem komut hem akış sonu çağırır).
pub async fn close_curtain(app: &AppHandle) {
    if let Some(win) = app.get_webview_window("curtain") {
        let _ = win.close();
    }
    if let Some(state) = app.try_state::<crate::AppState>() {
        state.curtain_plan.write().await.take();
    }
    let _ = app.emit("curtain-status", &serde_json::json!({ "phase": "closed" }));
}

/// Launcher ana penceresini öne getir (oyun sırasında küçültülmüş/gizlenmişse).
fn show_main(app: &AppHandle) {
    if let Some(win) = app.get_webview_window("main") {
        let _ = win.show();
        let _ = win.unminimize();
    }
}

/// Restart isteği varsa: planı state'e koy + perde penceresini AÇ.
/// İstek yoksa/boşsa hiçbir pencere açılmaz → None.
pub async fn open_restart_curtain(app: &AppHandle) -> Option<CurtainPlanView> {
    use serde_json::json;
    use tauri::{WebviewUrl, WebviewWindowBuilder};
    let Some((instance_id, request)) = peek_restart_request() else {
        return None;
    };
    // perde listesi: çekirdek korumalı modlar ve boş dosyalar listede görünmez
    let toggles: Vec<CurtainToggleView> = request
        .mods
        .iter()
        .filter(|d| d.id != "yikimlient" && d.id != "fabric-api" && !d.file.is_empty())
        .map(|d| CurtainToggleView {
            id: if d.id.is_empty() {
                d.file.trim_end_matches(".jar").to_string()
            } else {
                d.id.clone()
            },
            file: d.file.clone(),
            on: d.on,
        })
        .collect();
    let installs: Vec<CurtainInstallView> = request
        .installs
        .iter()
        .map(|i| CurtainInstallView {
            id: i.id.clone(),
            name: i.name.clone().unwrap_or_else(|| i.id.clone()),
        })
        .collect();
    // uygulanacak iş yoksa perde açma; istek dosyası da temizlenir (tekrar tetiklenmesin)
    if toggles.is_empty() && installs.is_empty() {
        if let Some(inst) = crate::instances::Instance::load(&instance_id) {
            let _ = std::fs::remove_file(restart_request_path(&inst));
        }
        return None;
    }
    let instance_name = crate::instances::Instance::load(&instance_id)
        .map(|i| i.name)
        .unwrap_or_else(|| instance_id.clone());
    let view = CurtainPlanView {
        instance_id: instance_id.clone(),
        instance_name,
        label: "Değişiklikler uygulanıyor".into(),
        toggles,
        installs,
    };
    if let Some(state) = app.try_state::<crate::AppState>() {
        *state.curtain_plan.write().await = Some(view.clone());
    }
    if app.get_webview_window("curtain").is_none() {
        // pencere açılamazsa akış yine sürsün: değişiklikler uygulanır + oyun döner;
        // sadece perde görünmez. Abort yok.
        if let Err(e) = WebviewWindowBuilder::new(
            app,
            "curtain",
            WebviewUrl::App("curtain.html?restart=1".into()),
        )
        .title("YIKIMLient")
        .fullscreen(true)
        .decorations(false)
        .resizable(false)
        .focused(true)
        .always_on_top(true)
        .build()
        {
            yikim_log(format!("perde penceresi açılamadı (akış sürüyor): {e}"));
        }
    }
    let _ = app.emit("curtain-status", &json!({ "phase": "started" }));
    yikim_log(format!(
        "restart perdesi açıldı: {} değişiklik, {} kurulum ({instance_id})",
        view.toggles.len(),
        view.installs.len()
    ));
    Some(view)
}

/// restart-request.json'ı uygula (tek kullanımlık): mod aç/kapat + katalog kurulumları.
/// Her adımı perdeye canlı event olarak basar. Dönen değer: uygulanan özet.
pub async fn process_restart(app: &AppHandle) -> Result<Option<CurtainPlan>, String> {
    use serde_json::json;
    // perde penceresi webview'i yüklenene kadar bir an tanı (ilk event'leri kaçırmasın)
    tokio::time::sleep(std::time::Duration::from_millis(700)).await;

    let mut raw_requests: Vec<(crate::instances::Instance, RestartRequest)> = Vec::new();
    let dir = instances_dir();
    if let Ok(entries) = std::fs::read_dir(&dir) {
        for entry in entries.flatten() {
            let inst_dir = entry.path();
            let req = inst_dir.join(".yikim").join("restart-request.json");
            if !req.is_file() {
                continue;
            }
            let Ok(content) = std::fs::read_to_string(&req) else { continue };
            let Ok(parsed) = serde_json::from_str::<RestartRequest>(&content) else {
                let _ = std::fs::remove_file(&req);
                continue;
            };
            let instance_id = if parsed.instance.is_empty() {
                entry.file_name().to_string_lossy().to_string()
            } else {
                parsed.instance.clone()
            };
            if let Some(inst) = crate::instances::Instance::load(&instance_id) {
                raw_requests.push((inst, parsed));
            }
            let _ = std::fs::remove_file(&req); // tek kullanımlık
        }
    }

    let Some((inst, request)) = raw_requests.first() else {
        return Ok(None);
    };
    let inst = inst.clone();

    // 1) mod aç/kapat — tek tek, perde ekranında canlı
    let mut toggles = 0u32;
    for d in &request.mods {
        if d.id == "yikimlient" || d.id == "fabric-api" || d.file.is_empty() {
            continue; // çekirdek modlar asla kapatılmaz
        }
        let _ = app.emit(
            "curtain-status",
            &json!({ "phase": "toggle", "state": "start", "id": d.id, "file": d.file, "on": d.on }),
        );
        match toggle_one(&inst, d) {
            Ok(true) => {
                toggles += 1;
                let _ = app.emit(
                    "curtain-status",
                    &json!({ "phase": "toggle", "state": "done", "id": d.id, "file": d.file, "on": d.on, "ok": true }),
                );
            }
            Ok(false) => {
                let _ = app.emit(
                    "curtain-status",
                    &json!({ "phase": "toggle", "state": "done", "id": d.id, "file": d.file, "on": d.on,
                             "ok": false, "note": "bulunamadı" }),
                );
            }
            Err(e) => {
                yikim_log(format!("mod toggle başarısız ({e})"));
                let _ = app.emit(
                    "curtain-status",
                    &json!({ "phase": "toggle", "state": "done", "id": d.id, "file": d.file, "on": d.on,
                             "ok": false, "note": "hata" }),
                );
            }
        }
    }

    // 2) katalog kurulumları (oyun içi "kur" istekleri) — her biri canlı event
    let mut installed = 0u32;
    for install in &request.installs {
        let _ = app.emit(
            "curtain-status",
            &json!({ "phase": "install", "state": "start", "id": install.id,
                     "name": install.name.clone().unwrap_or_else(|| install.id.clone()) }),
        );
        match crate::repos::install_mod_into(app, &install.source, &install.id, None, &inst, &inst.mods_dir()).await {
            Ok(_) => {
                installed += 1;
                let _ = app.emit(
                    "curtain-status",
                    &json!({ "phase": "install", "state": "done", "id": install.id, "ok": true }),
                );
            }
            Err(e) => {
                yikim_log(format!("oyun içi kurulum başarısız ({}): {e}", install.id));
                let _ = app.emit(
                    "curtain-status",
                    &json!({ "phase": "install", "state": "done", "id": install.id, "ok": false, "note": "hata" }),
                );
            }
        }
    }

    let plan = CurtainPlan {
        instance_id: inst.id.clone(),
        toggles,
        installs: installed,
    };
    let _ = app.emit(
        "curtain-status",
        &json!({
            "phase": "applied",
            "instance_id": inst.id,
            "toggles": toggles,
            "installs": installed
        }),
    );
    yikim_log(format!(
        "oyun içi değişiklikler uygulandı: {} toggle, {} kurulum ({})",
        toggles, installed, inst.name
    ));
    Ok(Some(plan))
}

/// Oyun kapandı: restart isteği varsa perdeyi aç, uygula ve oyunu sessizce geri
/// başlat. İstek yoksa sadece launcher penceresini geri göster.
/// Bu akış TAMAMEN Rust çekirdeğinde yürür — ana pencere gizli olsa bile
/// perde açılır ve zincir kesintisiz sürer.
pub async fn handle_game_exit(app: &AppHandle, instance_id: &str) {
    // Discord RPC: oyun kapandı → launcher presence'ine dön ("YIKIMLient açık")
    crate::discord_rpc::launcher_presence();
    if peek_restart_request().is_none() {
        show_main(app);
        yikim_log(format!("oyun kapandı (restart isteği yok): {instance_id}"));
        return;
    }
    let Some(view) = open_restart_curtain(app).await else {
        show_main(app);
        return;
    };
    show_main(app); // perde altında launcher hazır dursun (oyun dönünce yine gizlenir)
    match process_restart(app).await {
        Ok(_) => {
            let _ = app.emit(
                "curtain-status",
                &serde_json::json!({ "phase": "relaunching", "instance": view.instance_name }),
            );
            let _ = app.emit("game-started", &view.instance_id);
            match crate::commands::cmd_launch_instance(app.clone(), view.instance_id.clone()).await {
                Ok(_) => {
                    // PERDE: oyunun ana menüsü gelene kadar açık kal.
                    // Mod ana menü hazır olunca .yikim/ready dosyası yazar.
                    // 500ms'de bir kontrol, 60 sn timeout (mod yoksa veya crash olursa kapanmasın).
                    yikim_log("restart: oyun süreci doğdu, ana menü bekleniyor...".into());
                    let inst = crate::instances::Instance::load(&view.instance_id);
                    let ready_path = inst.map(|i| crate::curtain::ready_path(&i));
                    let start = std::time::Instant::now();
                    loop {
                        // ready dosyası var mı? (mod ana menüyü çizince yazar)
                        if let Some(ref rp) = ready_path {
                            if rp.is_file() {
                                yikim_log("restart: ana menü hazır, perde kapanıyor".into());
                                break;
                            }
                        }
                        // timeout: 60 sn sonra zorla kapat
                        if start.elapsed().as_secs() >= 60 {
                            yikim_log("restart: 60 sn timeout, perde kapanıyor".into());
                            break;
                        }
                        tokio::time::sleep(std::time::Duration::from_millis(500)).await;
                    }
                    close_curtain(app).await;
                    yikim_log("restart tamamlandı: perde kapandı".into());
                }
                Err(e) => {
                    yikim_log(format!("oyun yeniden açılamadı: {e}"));
                    let _ = app.emit(
                        "curtain-status",
                        &serde_json::json!({ "phase": "relaunch-failed", "error": e }),
                    );
                    tokio::time::sleep(std::time::Duration::from_secs(5)).await;
                    close_curtain(app).await;
                    show_main(app);
                }
            }
        }
        Err(e) => {
            yikim_log(format!("restart isteği uygulanamadı: {e}"));
            let _ = app.emit(
                "curtain-status",
                &serde_json::json!({ "phase": "relaunch-failed", "error": e }),
            );
            tokio::time::sleep(std::time::Duration::from_secs(5)).await;
            close_curtain(app).await;
            show_main(app);
        }
    }
}
