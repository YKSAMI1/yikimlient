pub mod auth;
pub mod commands;
pub mod config;
pub mod core;
pub mod curtain;
pub mod discord_rpc;
pub mod emote_binary;
pub mod game_options;
pub mod instances;
pub mod launcher;
pub mod modpacks;
pub mod repos;
pub mod server_list;
pub mod skins;
pub mod stats;
pub mod util;
pub mod yikim_mod;
pub mod yikim_sicak;
pub mod yikim_ui;

/// Launcher sürümü (Cargo.toml) — Discord presence ve loglar için.
pub const APP_VERSION: &str = env!("CARGO_PKG_VERSION");

use std::sync::atomic::{AtomicBool, AtomicUsize};
use tokio::sync::RwLock;

/// Uygulama durum kökü.
pub struct AppState {
    pub config: RwLock<config::YikimConfig>,
    pub active_downloads: AtomicUsize,
    pub cancel_all: AtomicBool,
    pub game_pid: RwLock<Option<u32>>,
    /// Açık perdenin planı (restart akışı). Perde penceresi cmd_get_curtain_plan ile çeker;
    /// cmd_curtain_ready kapatınca temizlenir.
    pub curtain_plan: RwLock<Option<curtain::CurtainPlanView>>,
}

impl AppState {
    pub fn new(cfg: config::YikimConfig) -> Self {
        Self {
            config: RwLock::new(cfg),
            active_downloads: AtomicUsize::new(0),
            cancel_all: AtomicBool::new(false),
            game_pid: RwLock::new(None),
            curtain_plan: RwLock::new(None),
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let cfg = config::YikimConfig::load_or_default();

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        // YIKIM ARA YÜZ SUNUCUSU: ana pencere sıcak-kanal UI'ı yükler.
        // Windows: http://yikim.localhost, Linux: yikim://localhost (tauri.linux.conf.json).
        .register_uri_scheme_protocol("yikim", |_ctx, istek| yikim_ui::sunuc(istek))
        .manage(AppState::new(cfg))
        .invoke_handler(tauri::generate_handler![
            commands::cmd_get_state,
            commands::cmd_save_settings,
            commands::cmd_list_accounts,
            commands::cmd_get_account_skin,
            commands::cmd_list_emotes,
            commands::cmd_add_emote,
            commands::cmd_emote_bayt_coz,
            commands::cmd_import_emote_dosyasi,
            commands::cmd_delete_emote,
            commands::cmd_add_offline_account,
            commands::cmd_ms_login_begin,
            commands::cmd_ms_login_cancel,
            commands::cmd_select_account,
            commands::cmd_remove_account,
            commands::cmd_create_instance,
            commands::cmd_delete_instance,
            commands::cmd_rename_instance,
            commands::cmd_duplicate_instance,
            commands::cmd_get_instance,
            commands::cmd_set_instance_icon,
            commands::cmd_pick_instance_icon,
            commands::cmd_pick_instance_cover,
            commands::cmd_set_instance_cover,
            commands::cmd_resolve_mod_icons,
            commands::cmd_list_java_arg_presets,
            commands::cmd_list_standard_mods,
            commands::cmd_list_versions,
            commands::cmd_list_mods,
            commands::cmd_toggle_mod,
            commands::cmd_delete_mod,
            commands::cmd_open_mods_folder,
            commands::cmd_open_instance_folder,
            commands::cmd_repos_search,
            commands::cmd_repos_popular,
            commands::cmd_repos_get_versions,
            commands::cmd_repos_install,
            commands::cmd_install_pack_files,
            commands::cmd_set_instance_java_preset,
            commands::cmd_set_instance_ram,
            commands::cmd_set_instance_custom,
            commands::cmd_get_app_dir,
            commands::cmd_list_news,
            commands::cmd_list_yikim_news,
            commands::cmd_get_stats,
            commands::cmd_list_logs,
            commands::cmd_read_log,
            commands::cmd_process_restart_request,
            commands::cmd_restart_curtain_open,
            commands::cmd_get_curtain_plan,
            commands::cmd_curtain_ready,
            commands::cmd_get_system_info,
            commands::cmd_resolve_java,
            commands::cmd_pick_java,
            commands::cmd_launch_instance,
            commands::cmd_kill_game,
            commands::cmd_cancel_downloads,
            commands::cmd_check_updates,
            commands::cmd_upd_teshis,
            commands::cmd_get_community_stats,
            commands::cmd_pick_pack_file,
            commands::cmd_import_pack_file,
            commands::cmd_repos_install_content,
            commands::cmd_list_content_files,
            commands::cmd_add_content_file,
            commands::cmd_add_content_path,
            commands::cmd_route_dropped,
            commands::cmd_delete_content_file,
            commands::cmd_open_content_folder,
            skins::cmd_skin_hub,
            skins::cmd_skin_giy,
            skins::cmd_skin_giy_kitaplik,
            skins::cmd_skin_pelerin,
            skins::cmd_skin_kaydet,
            skins::cmd_skin_sil,
            skins::cmd_skin_yeniden_adlandir,
            skins::cmd_skin_yedek,
            skins::cmd_skin_yedek_geri_yukle,
            skins::cmd_skin_disa_aktar,
        ])
        .setup(|app| {
            let handle = app.handle().clone();
            // Teşhis probe'u: `--__yikim_probe <inst_id>` ile başlatılırsa
            // 5 sn sonra başlatma tetikler, launch-cmd.txt diskе yazılır, sonra çıkar.
            let mut args = std::env::args().skip(1);
            if let Some(inst_id) = args
                .next()
                .zip(args.next())
                .filter(|(a, _)| a == "--__yikim_probe")
                .map(|(_, id)| id)
            {
                let h = handle.clone();
                tauri::async_runtime::spawn(async move {
                    tokio::time::sleep(std::time::Duration::from_secs(5)).await;
                    match commands::cmd_launch_instance(h.clone(), inst_id.clone()).await {
                        Ok(r) => core::yikim_log(format!("probe: launch pid={} id={inst_id}", r.pid)),
                        Err(e) => core::yikim_log(format!("probe: launch hatası: {e}")),
                    }
                    tokio::time::sleep(std::time::Duration::from_secs(10)).await;
                    std::process::exit(0);
                });
            }
            // Asset scope'a gerçek veri klasörünü (core::app_dir) runtime'da ekle.
            // conf'taki $APPDATA, identifier klasörüne (com.yikimlient.app) çözüldüğü için
            // .yikimlient dizini statik scope'la kapsanamıyor — bu şart.
            use tauri::Manager;
            if let Err(e) = app.asset_protocol_scope().allow_directory(core::app_dir(), true) {
                core::yikim_log(format!("asset scope eklenemedi: {e}"));
            }
            // SICAK kanal: derlemesiz güncellemeler (mod vb.) — hemen + 15 dk'da bir.
            yikim_sicak::kanali_dagit(handle.clone());
            tauri::async_runtime::spawn(async move {
                // Arka plan ısıtma: sürüm manifesti + haberler (best-effort, UI'yi engellemez).
                if let Err(e) = repos::warm_caches(&handle).await {
                    core::yikim_log(format!("cache warm: {e}"));
                }
            });
            // Oyun içi katalog isteklerini yanıtlayan arka plan izleyicisi
            commands::spawn_catalog_watcher(app.handle().clone());
            // Discord presence: launcher açık → "YIKIMLient açık" (yerel IPC, internet yok)
            discord_rpc::launcher_presence();
            if let Some(win) = app.get_webview_window("main") {
                #[cfg(target_os = "windows")]
                {
                    // Windows 11 Mica efekti — desteklenmiyorsa sessizce geç
                    let _ = window_vibrancy::apply_mica(&win, None);
                }
                let _ = win.show();
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("YIKIMLient çalıştırılamadı");
}
