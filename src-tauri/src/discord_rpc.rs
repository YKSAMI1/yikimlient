//! Discord Rich Presence — oyun açıkken Discord profilinde
//! "YIKIMLient oynuyor" + logo + "İndir" butonu gösterir.
//!
//! Kullanıcı HİÇBİR ŞEY yapmaz: oyun açılınca otomatik bağlanır,
//! oyun kapanınca otomatik kesilir. Discord kapalıysa sessizce atlar.
//!
//! Discord Application ID: Discord Developer Portal'dan alınır.
//! (discord.com/developers/applications → "YIKIMLient" oluştur → Client ID)

use crate::core::yikim_log;
use std::sync::atomic::{AtomicBool, Ordering};

/// Discord Application Client ID — Discord Developer Portal'dan alınır.
/// TODO: Discord uygulaması oluşturulunca gerçek ID ile değiştir.
pub const DISCORD_APP_ID: &str = "1394387000000000000"; // placeholder — gerçek ID ile değiştir

static RPC_ACTIVE: AtomicBool = AtomicBool::new(false);

/// Oyun açıldığında Discord Rich Presence başlat.
/// Discord kapalıysa veya hata olursa sessizce atlanır — oyun akışı asla etkilenmez.
pub fn start(instance_name: &str, mc_version: &str, server: &str) {
    if RPC_ACTIVE.load(Ordering::Relaxed) {
        return; // zaten aktif
    }
    let name = instance_name.to_string();
    let version = mc_version.to_string();
    let srv = server.to_string();
    RPC_ACTIVE.store(true, Ordering::Relaxed);
    std::thread::spawn(move || {
        let result = run_presence(&name, &version, &srv);
        if let Err(e) = result {
            yikim_log(format!("Discord RPC: {e}"));
        }
        RPC_ACTIVE.store(false, Ordering::Relaxed);
    });
}

/// Oyun kapanınca Discord RPC'yi kes.
pub fn stop() {
    // RPC thread'i kendi kendine kapanır (process exit ile).
    // Burada sadece log bırak — Discord IPC bağlantısı thread'in sonunda kapanır.
    yikim_log("Discord RPC: oyun kapandı, presence kapanıyor".into());
}

fn run_presence(instance: &str, version: &str, server: &str) -> Result<(), String> {
    use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};

    let mut client = DiscordIpcClient::new(DISCORD_APP_ID)
        .map_err(|e| format!("Discord IPC client oluşturulamadı: {e}"))?;

    client
        .connect()
        .map_err(|e| format!("Discord'a bağlanılamadı (Discord açık mı?): {e}"))?;

    yikim_log("Discord RPC: bağlandı".into());

    // Aktivite detayları
    let details = if server.is_empty() {
        format!("Minecraft {}", version)
    } else {
        format!("Minecraft {} — {}", version, server)
    };

    let state_text = format!("YIKIMLient — {}", instance);

    let payload = activity::Activity::new()
        .details(&details)
        .state(&state_text)
        .timestamps(activity::Timestamps::new().start(chrono::Utc::now().timestamp_millis()))
        .assets(
            activity::Assets::new()
                .large_image("yikimlient_logo")
                .large_text("YIKIMLient — Ultra-hızlı Minecraft launcher")
        )
        .buttons(vec![
            activity::Button::new("⬇ YIKIMLient İndir", "https://github.com/YKSAMI1/yikimlient"),
            activity::Button::new("🌐 YIKIMDARA'ya Katıl", "https://yikimdara.com.tr"),
        ]);

    client
        .set_activity(payload)
        .map_err(|e| format!("Discord presence ayarlanamadı: {e}"))?;

    yikim_log("Discord RPC: presence aktif".into());

    // Thread burada bekler — oyun süresi boyunca Discord'a bağlı kalır.
    // Oyun kapanınca `stop()` çağrılır → process sonlanır → IPC kapanır.
    // Gerçekte: Discord IPC bağlantısı process sonlanınca otomatik kapanır.
    // Bu thread'i canlı tutmak için sonsuz bekleme yaparız.
    loop {
        std::thread::sleep(std::time::Duration::from_secs(60));
        // Her dakika presence'i yenile (Discord otomatik timeout yapmasın)
        let refresh = activity::Activity::new()
            .details(&details)
            .state(&state_text)
            .assets(
                activity::Assets::new()
                    .large_image("yikimlient_logo")
                    .large_text("YIKIMLient — Ultra-hızlı Minecraft launcher")
            )
            .buttons(vec![
                activity::Button::new("⬇ YIKIMLient İndir", "https://github.com/YKSAMI1/yikimlient"),
                activity::Button::new("🌐 YIKIMDARA'ya Katıl", "https://yikimdara.com.tr"),
            ]);
        let _ = client.set_activity(refresh);
    }
}
