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
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};

/// Discord Application Client ID — YIKIMLient uygulaması.
pub const DISCORD_APP_ID: &str = "1560649366899920926";

static RPC_ACTIVE: AtomicBool = AtomicBool::new(false);
/// Oturum nesli: eski thread'in temizligi yeni presence'i asla silemesin.
static RPC_EPOCH: AtomicU64 = AtomicU64::new(0);

/// Oyun açıldığında Discord Rich Presence başlat (tek seferlik set_activity).
/// Discord kapalıysa veya hata olursa sessizce atlanır.
pub fn start(instance_name: &str, mc_version: &str, server: &str) {
    if !crate::config::YikimConfig::load_or_default().discord_rpc {
        return;
    }
    if RPC_ACTIVE.swap(true, Ordering::Relaxed) {
        return; // zaten aktif
    }
    let my_epoch = RPC_EPOCH.fetch_add(1, Ordering::Relaxed) + 1;
    let name = instance_name.to_string();
    let version = mc_version.to_string();
    let srv = server.to_string();
    std::thread::spawn(move || {
        if let Err(e) = run_presence(&name, &version, &srv, my_epoch) {
            yikim_log(format!("Discord RPC: {e}"));
        }
        // KRİTİK: hata olursa kilidi bırak — yoksa bir sonraki açılışta RPC
        // bir daha ASLA denenmez ("RPC çalışmıyor" bug'ı). Sadece KENDİ nesline
        // dokunur; eski thread'in temizliği yeni oturumu asla bozmaz.
        if RPC_EPOCH.load(Ordering::Relaxed) == my_epoch {
            RPC_ACTIVE.store(false, Ordering::Relaxed);
        }
    });
}

/// Oyun kapanınca presence'i temizle.
/// Ayrı bir bağlantı AÇMAZ — run_presence içindeki bekleme döngüsü 500 ms içinde
/// görüp clear_activity + close yapar. Süreç kapanırsa IPC de ölür, Discord temizler.
pub fn stop() {
    RPC_ACTIVE.store(false, Ordering::Relaxed);
}

fn run_presence(instance: &str, version: &str, server: &str, my_epoch: u64) -> Result<(), String> {
    use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};

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
    // Önce logo ile dene; uygulama assets'i yüklü değilse Discordsuz logoyla tekrar dene —
    // metin presence'i her koşulda görünsün.
    if client.set_activity(act).is_err() {
        let act_plain = activity::Activity::new()
            .details(&details)
            .state(&state_text)
            .buttons(vec![activity::Button::new(
                "YIKIMLient İndir",
                "https://github.com/YKSAMI1/yikimlient",
            )]);
        client
            .set_activity(act_plain)
            .map_err(|e| format!("presence ayarlanamadı: {e}"))?;
    }
    yikim_log("Discord RPC: presence aktif (yenileme döngüsü YOK — internet trafiği 0)".into());

    // Oyun süresi boyunca BEKLEMEDE: hiçbir periyodik istek yok.
    // stop() RPC_ACTIVE'i düşürür; process kapanınca IPC de kapanır.
    while RPC_ACTIVE.load(Ordering::Relaxed) && RPC_EPOCH.load(Ordering::Relaxed) == my_epoch {
        std::thread::sleep(std::time::Duration::from_millis(500));
    }
    let _ = client.clear_activity();
    let _ = client.close();
    Ok(())
}
