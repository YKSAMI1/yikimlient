//! Discord Rich Presence — oyun açıkken Discord profilinde
//! "YIKIMLient ile oynuyor" + sürüm gösterir; launcher açıkken de
//! "YIKIMLient açık" gösterir (XMCL'in yaklaşımı: tek kalıcı bağlantı,
//! aktivite güncellenerek değiştirilir).
//!
//! İNTERNET İLKESİ: Discord IPC yalnızca YEREL named pipe ile konuşur —
//! bu süreçten internete giden HİÇBİR istek yoktur. Presence yalnızca
//! durum değişince bir kez gönderilir; periyodik döngü YOKTUR.
//! Discord kapalıysa sessizce atlanır — oyun ve ping asla etkilenmez.

use crate::core::yikim_log;
use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};
use std::sync::Mutex;

/// Discord Application Client ID — YIKIMLient uygulaması.
pub const DISCORD_APP_ID: &str = "1560649366899920926";

/// Tek kalıcı IPC bağlantısı — launcher yaşamı boyunca aynı soket kullanılır,
/// aktivite set_activity ile güncellenir (soket kapanmaz, thread dönmez).
static CLIENT: Mutex<Option<DiscordIpcClient>> = Mutex::new(None);

fn app_id() -> String {
    std::env::var("YIKIM_DISCORD_APP_ID")
        .ok()
        .filter(|s| !s.is_empty())
        .unwrap_or_else(|| DISCORD_APP_ID.to_string())
}

fn activity_build<'a>(details: &'a str, state: &'a str, with_assets: bool) -> activity::Activity<'a> {
    let mut act = activity::Activity::new().details(details).state(state);
    if with_assets {
        act = act.assets(
            activity::Assets::new()
                .large_image("yikimlient_logo")
                .large_text("YIKIMLient — Ultra-hızlı Minecraft launcher"),
        );
    }
    act = act.buttons(vec![activity::Button::new(
        "YIKIMLient İndir",
        "https://github.com/YKSAMI1/yikimlient",
    )]);
    act
}

/// Presence'i günceller (arka planda). Discord kapalıysa sessizce atlanır.
/// Aynı soket kullanılır: bağlantı yoksa kurulur, varsa yeniden kullanılır.
pub fn set_presence(details: &str, state: &str) {
    if !crate::config::YikimConfig::load_or_default().discord_rpc {
        return;
    }
    let details = details.to_string();
    let state = state.to_string();
    std::thread::spawn(move || {
        let mut guard = match CLIENT.lock() {
            Ok(g) => g,
            Err(_) => return,
        };
        // bağlantı yoksa kur
        if guard.is_none() {
            let app = app_id();
            let mut c = match DiscordIpcClient::new(&app) {
                Ok(c) => c,
                Err(e) => {
                    yikim_log(format!("Discord RPC: client olusturulamadi: {e}"));
                    return;
                }
            };
            match c.connect() {
                Ok(()) => {
                    yikim_log("Discord RPC: bağlandı".into());
                    *guard = Some(c);
                }
                Err(_) => {
                    yikim_log("Discord RPC: Discord'a bağlanılamadı (masaüstü uygulaması açık mı?)".into());
                    return;
                }
            }
        }
        let Some(client) = guard.as_mut() else { return };
        // önce logo ile dene; uygulama assets'i yüklü değilse logosuz gönder
        let act = activity_build(&details, &state, true);
        let result = client.set_activity(act).or_else(|_| {
            let plain = activity_build(&details, &state, false);
            client.set_activity(plain)
        });
        match result {
            Ok(_) => yikim_log("Discord RPC: presence güncellendi".into()),
            Err(e) => yikim_log(format!("Discord RPC: presence gönderilemedi: {e}")),
        }
    });
}

/// Launcher açıkken gösterilecek presence (oyun kapalıyken de bu kalır).
pub fn launcher_presence() {
    set_presence(
        "YIKIMLient Launcher",
        &format!("YIKIMLient {} açık", crate::APP_VERSION),
    );
}

/// Oyun açıkken gösterilecek presence: "YIKIMLient ile oynuyor" + sürüm.
pub fn game_presence(instance_name: &str, mc_version: &str, server: &str) {
    let details = if server.is_empty() {
        format!("Minecraft {} — {}", mc_version, instance_name)
    } else {
        format!("Minecraft {} — {}", mc_version, server)
    };
    set_presence(&details, &format!("YIKIMLient {} ile oynuyor", crate::APP_VERSION));
}

/// Presence'i temizle (soket açık kalır — sonraki set_presence yeniden kullanır).
#[allow(dead_code)]
pub fn clear_presence() {
    std::thread::spawn(|| {
        let mut guard = match CLIENT.lock() {
            Ok(g) => g,
            Err(_) => return,
        };
        if let Some(client) = guard.as_mut() {
            let _ = client.clear_activity();
        }
    });
}
