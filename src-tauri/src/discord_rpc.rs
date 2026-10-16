//! Discord Rich Presence — oyun açıkken Discord profilinde
//! "YIKIMLient ile oynuyor" + sürüm + logo gösterir.
//!
//! İNTERNET İLKESİ (kullanıcı talebi): Discord RPC yalnızca YEREL IPC
//! (named pipe) ile Discord uygulamasına konuşur — bu süreçten internete
//! giden hiçbir periyodik istek YOKTUR. Presence yalnızca durum DEĞİŞİNCE
//! bir kez gönderilir (oyun açıldı / dünya-sunucu değişti / oyun kapandı);
//! eski sürümdeki 60 sn'lik yenileme döngüsü kaldırıldı.
//! Discord kapalıysa sessizce atlanır — oyun akışı ve ping asla etkilenmez.

use crate::core::yikim_log;
use std::sync::atomic::{AtomicBool, Ordering};

/// Discord Application Client ID — YIKIMLient uygulaması.
pub const DISCORD_APP_ID: &str = "1560649366899920926";

static RPC_ACTIVE: AtomicBool = AtomicBool::new(false);

/// Oyun açıldığında Discord Rich Presence başlat (tek seferlik set_activity).
/// Discord kapalıysa veya hata olursa sessizce atlanır.
pub fn start(instance_name: &str, mc_version: &str, server: &str) {
    if !crate::config::YikimConfig::load_or_default().discord_rpc {
        return;
    }
    if RPC_ACTIVE.swap(true, Ordering::Relaxed) {
        return; // zaten aktif
    }
    let name = instance_name.to_string();
    let version = mc_version.to_string();
    let srv = server.to_string();
    std::thread::spawn(move || {
        if let Err(e) = run_presence(&name, &version, &srv) {
            yikim_log(format!("Discord RPC: {e}"));
        }
        // bağlantı yalnızca oyun süreci boyunca yaşar; stop() temizler
    });
}

/// Oyun kapanınca presence'i temizle (Discord profili anında boşalır).
pub fn stop() {
    if !RPC_ACTIVE.swap(false, Ordering::Relaxed) {
        return;
    }
    std::thread::spawn(|| {
        if let Err(e) = clear_presence() {
            yikim_log(format!("Discord RPC temizleme: {e}"));
        } else {
            yikim_log("Discord RPC: presence temizlendi".into());
        }
    });
}

fn run_presence(instance: &str, version: &str, server: &str) -> Result<(), String> {
    use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};

    // placeholder ID → Discord böyle bir uygulamayı tanımaz; sessizce geç
    if DISCORD_APP_ID.chars().all(|c| c.is_ascii_digit()) && DISCORD_APP_ID.ends_with("000000") {
        yikim_log("Discord RPC: uygulama ID'si henüz ayarlanmamış".into());
        return Ok(());
    }
    let app_id = std::env::var("YIKIM_DISCORD_APP_ID")
        .ok()
        .filter(|s| !s.is_empty())
        .unwrap_or_else(|| DISCORD_APP_ID.to_string());

    let mut client = DiscordIpcClient::new(&app_id)
        .map_err(|e| format!("IPC client oluşturulamadı: {e}"))?;
    client
        .connect()
        .map_err(|_| "Discord'a bağlanılamadı (Discord açık mı?)".to_string())?;
    yikim_log("Discord RPC: bağlandı".into());

    // Kullanıcı talebi: "YIKIMLient ile oynuyor" + altında sürüm
    let state_text = format!("YIKIMLient {} ile oynuyor", crate::APP_VERSION);
    let details = if server.is_empty() {
        format!("Minecraft {} — {}", version, instance)
    } else {
        format!("Minecraft {} — {}", version, server)
    };
    let act = activity::Activity::new()
        .details(&details)
        .state(&state_text)
        .assets(
            activity::Assets::new()
                .large_image("yikimlient_logo")
                .large_text("YIKIMLient — Ultra-hızlı Minecraft launcher"),
        )
        .buttons(vec![activity::Button::new(
            "YIKIMLient İndir",
            "https://github.com/YKSAMI1/yikimlient",
        )]);
    client
        .set_activity(act)
        .map_err(|e| format!("presence ayarlanamadı: {e}"))?;
    yikim_log("Discord RPC: presence aktif (yenileme döngüsü YOK — internet trafiği 0)".into());

    // Oyun süresi boyunca BEKLEMEDE: hiçbir periyodik istek yok.
    // stop() RPC_ACTIVE'i düşürür; process kapanınca IPC de kapanır.
    while RPC_ACTIVE.load(Ordering::Relaxed) {
        std::thread::sleep(std::time::Duration::from_millis(500));
    }
    let _ = client.clear_activity();
    let _ = client.close();
    Ok(())
}

fn clear_presence() -> Result<(), String> {
    use discord_rich_presence::{DiscordIpc, DiscordIpcClient};
    let app_id = std::env::var("YIKIM_DISCORD_APP_ID")
        .ok()
        .filter(|s| !s.is_empty())
        .unwrap_or_else(|| DISCORD_APP_ID.to_string());
    let mut client = DiscordIpcClient::new(&app_id)
        .map_err(|e| format!("IPC client oluşturulamadı: {e}"))?;
    client
        .connect()
        .map_err(|_| "Discord'a bağlanılamadı".to_string())?;
    let _ = client.clear_activity();
    let _ = client.close();
    Ok(())
}
