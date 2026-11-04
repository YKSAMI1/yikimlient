//! Discord Rich Presence — ÖZEL IPC İSTEMCİSİ (crate kullanılmaz).
//!
//! NİYE KENDİ İSTEMCİMİZ: `discord-rich-presence` crate'i SET_ACTIVITY
//! payload'ına KENDİ süreç PID'ini (launcher'ın) hardcode'lar. Discord Nitro
//! "Klip" ve oyun algılaması bu PID'e bakar → klip launcher'ı yakalıyordu.
//! Kendi istemcimizle oyun açıkken JAVAW'un PID'ini göndeririz: klip Minecraft'ı
//! yakalar, presence (logo + "YIKIMLient ile oynuyor") bizde kalır.
//!
//! İNTERNET İLKESİ: Discord IPC yalnızca YEREL named pipe/unix socket ile
//! konuşur — bu süreçten internete giden HİÇBİR istek yoktur. Presence
//! yalnızca durum değişince bir kez gönderilir; periyodik döngü YOKTUR.
//!
//! Protokol (discord-rpc resmî dokümanı):
//!   kare = [opcode:u32 LE][uzunluk:u32 LE][JSON]
//!   opcode 0 = HANDSHAKE {"v":1,"client_id":...}
//!   opcode 1 = FRAME     {"cmd":"SET_ACTIVITY","args":{"pid":N,"activity":...},"nonce":...}
//!   opcode 2 = CLOSE     {}

use crate::core::yikim_log;
use serde_json::{json, Value};
use std::io::{Read, Write};
use std::sync::Mutex;

/// Discord Application Client ID — YIKIMLient uygulaması.
pub const DISCORD_APP_ID: &str = "1560649366899920926";

/// Tek kalıcı IPC bağlantısı — launcher yaşamı boyunca aynı soket kullanılır.
static CLIENT: Mutex<Option<IpcClient>> = Mutex::new(None);

/// En son istenen presence (süpervizör bunu yeniden uygular).
static ISTEK: Mutex<Option<Istek>> = Mutex::new(None);

fn app_id() -> String {
    std::env::var("YIKIM_DISCORD_APP_ID")
        .ok()
        .filter(|s| !s.is_empty())
        .unwrap_or_else(|| DISCORD_APP_ID.to_string())
}

// ---------- soket katmanı ----------

#[cfg(windows)]
enum IpcSocket {
    Win(std::fs::File),
}

#[cfg(unix)]
enum IpcSocket {
    Unix(std::os::unix::net::UnixStream),
}

impl IpcSocket {
    #[cfg(windows)]
    fn connect() -> Option<Self> {
        use std::os::windows::fs::OpenOptionsExt;
        for i in 0..10 {
            let path = format!(r"\\?\pipe\discord-ipc-{i}");
            if let Ok(f) = std::fs::OpenOptions::new().access_mode(0x3).open(&path) {
                return Some(Self::Win(f));
            }
        }
        None
    }

    #[cfg(unix)]
    fn connect() -> Option<Self> {
        // Linux'ta Discord her zaman aynı yerde değil:
        //   native  → $XDG_RUNTIME_DIR/discord-ipc-N
        //   flatpak → $XDG_RUNTIME_DIR/app/com.discordapp.Discord/discord-ipc-N
        //   snap    → $XDG_RUNTIME_DIR/snap.discord/discord-ipc-N
        //   vesktop → $XDG_RUNTIME_DIR/app/dev.vencord.Vesktop/discord-ipc-N
        // Ayrıca XDG_RUNTIME_DIR boşsa /run/user/<uid> ve /tmp denenir.
        let mut kokler: Vec<String> = Vec::new();
        for anahtar in ["XDG_RUNTIME_DIR", "TMPDIR", "TMP", "TEMP"] {
            if let Ok(v) = std::env::var(anahtar) {
                if !v.is_empty() && !kokler.contains(&v) {
                    kokler.push(v);
                }
            }
        }
        // uid'yi güvenilir biçimde al: /proc/self (Linux) → libc yok, std ile.
        if let Ok(uid) = std::fs::read_to_string("/proc/self/loginuid") {
            let uid = uid.trim();
            if !uid.is_empty() && uid != "4294967295" {
                kokler.push(format!("/run/user/{uid}"));
            }
        }
        kokler.push("/tmp".into());
        kokler.push("/var/run".into());
        let alt = [
            "",
            "app/com.discordapp.Discord",
            "app/com.discordapp.DiscordCanary",
            "app/dev.vencord.Vesktop",
            "snap.discord",
            "snap.discord-canary",
            ".flatpak/com.discordapp.Discord",
            "flatpak/com.discordapp.Discord",
        ];
        for kok in &kokler {
            for d in alt.iter() {
                for i in 0..10 {
                    let path = if d.is_empty() {
                        format!("{kok}/discord-ipc-{i}")
                    } else {
                        format!("{kok}/{d}/discord-ipc-{i}")
                    };
                    if let Ok(s) = std::os::unix::net::UnixStream::connect(&path) {
                        return Some(Self::Unix(s));
                    }
                }
            }
        }
        None
    }

    fn write_frame(&mut self, opcode: u32, payload: &Value) -> std::io::Result<()> {
        let data = payload.to_string();
        let mut buf = Vec::with_capacity(8 + data.len());
        buf.extend_from_slice(&opcode.to_le_bytes());
        buf.extend_from_slice(&(data.len() as u32).to_le_bytes());
        buf.extend_from_slice(data.as_bytes());
        match self {
            #[cfg(windows)]
            Self::Win(f) => f.write_all(&buf),
            #[cfg(unix)]
            Self::Unix(s) => s.write_all(&buf),
        }
    }

    fn read_frame(&mut self) -> std::io::Result<(u32, Value)> {
        let mut header = [0u8; 8];
        match self {
            #[cfg(windows)]
            Self::Win(f) => f.read_exact(&mut header)?,
            #[cfg(unix)]
            Self::Unix(s) => s.read_exact(&mut header)?,
        }
        let op = u32::from_le_bytes(header[0..4].try_into().unwrap());
        let len = u32::from_le_bytes(header[4..8].try_into().unwrap()) as usize;
        let mut data = vec![0u8; len];
        match self {
            #[cfg(windows)]
            Self::Win(f) => f.read_exact(&mut data)?,
            #[cfg(unix)]
            Self::Unix(s) => s.read_exact(&mut data)?,
        }
        let v = serde_json::from_slice(&data).unwrap_or(Value::Null);
        Ok((op, v))
    }
}

struct IpcClient {
    socket: IpcSocket,
    /// Son SET_ACTIVITY pid'i — clear bunu kullanır.
    pid: u32,
    /// Presence sayacının başlangıcı — yeniden gönderimde SIFIRLANMAZ.
    started_at: i64,
    /// Son başarılı gönderim — sağlık kontrolü için.
    son_gonderim: std::time::Instant,
}

/// İstenen presence — Discord sonradan açılırsa bunu yeniden uygularız.
#[derive(Clone)]
struct Istek {
    details: String,
    state: String,
    pid: u32,
}

fn ipc_connect(app: &str) -> Option<IpcSocket> {
    let mut sock = IpcSocket::connect()?;
    let handshake = json!({ "v": 1, "client_id": app });
    sock.write_frame(0, &handshake).ok()?;
    // READY yanıtını oku (boru dolmasın diye her kareden sonra okuyoruz)
    sock.read_frame().ok()?;
    Some(sock)
}

/// SET_ACTIVITY gönderir. Hata/ERROR yanıtında false döner (assets fallback için).
fn ipc_set_activity(sock: &mut IpcSocket, pid: u32, activity: Option<&Value>) -> bool {
    let nonce = uuid::Uuid::new_v4().to_string();
    let data = json!({
        "cmd": "SET_ACTIVITY",
        "args": { "pid": pid, "activity": activity },
        "nonce": nonce,
    });
    if sock.write_frame(1, &data).is_err() {
        return false;
    }
    match sock.read_frame() {
        Ok((_, v)) => v.get("evt").and_then(Value::as_str) != Some("ERROR"),
        Err(_) => false,
    }
}

// ---------- presence katmanı ----------

fn activity_json(details: &str, state: &str, _with_assets: bool, started_at: i64) -> Value {
    // KULLANICI TERCİHİ: assets (large_image) ASLA gönderilmez — Discord
    // uygulamanın (botun) profil fotosunu gösterir; "?" placeholder da
    // kökten imkansız olur.
    json!({
        "type": 0, // Playing — "OYNUYOR" başlığı
        "state": state,
        "details": details,
        "timestamps": { "start": started_at },
        "buttons": [{ "label": "YIKIMLient İndir", "url": "https://github.com/YKSAMI1/yikimlient" }],
    })
}

/// Presence'i günceller (arka planda). `pid` = etkinliğin ait olduğu SÜREÇ.
/// Oyun açıkken javaw'un PID'i verilir → Discord klip/algılama Minecraft'ı
/// yakalar; launcher açıkken launcher'ın kendi PID'i.
/// İstenen presence'i saklar ve hemen uygulamayı dener (arka planda).
pub fn set_presence(details: &str, state: &str, pid: u32) {
    if !crate::config::YikimConfig::load_or_default().discord_rpc {
        return;
    }
    let istek = Istek {
        details: details.to_string(),
        state: state.to_string(),
        pid,
    };
    if let Ok(mut i) = ISTEK.lock() {
        *i = Some(istek.clone());
    }
    basla();
    std::thread::spawn(move || {
        let mut guard = match CLIENT.lock() {
            Ok(g) => g,
            Err(_) => return,
        };
        uygula(&mut guard, &istek);
    });
}

/// Bağlantıyı (gerekirse) kurar ve verilen presence'i gönderir.
fn uygula(guard: &mut Option<IpcClient>, istek: &Istek) -> bool {
    if guard.is_none() {
        match ipc_connect(&app_id()) {
            Some(socket) => {
                yikim_log("Discord RPC: bağlandı (özel IPC)".into());
                *guard = Some(IpcClient {
                    socket,
                    pid: istek.pid,
                    started_at: chrono::Utc::now().timestamp_millis(),
                    son_gonderim: std::time::Instant::now(),
                });
            }
            None => return false,
        }
    }
    let Some(client) = guard.as_mut() else {
        return false;
    };
    client.pid = istek.pid;
    let act = activity_json(&istek.details, &istek.state, true, client.started_at);
    if ipc_set_activity(&mut client.socket, istek.pid, Some(&act)) {
        client.son_gonderim = std::time::Instant::now();
        return true;
    }
    let plain = activity_json(&istek.details, &istek.state, false, client.started_at);
    if ipc_set_activity(&mut client.socket, istek.pid, Some(&plain)) {
        client.son_gonderim = std::time::Instant::now();
        yikim_log("Discord RPC: presence güncellendi (logosuz)".into());
        return true;
    }
    // iki deneme de başarısız → soketi at, sonraki denemede yeniden bağlanır
    *guard = None;
    yikim_log("Discord RPC: presence reddedildi — bağlantı sıfırlandı".into());
    false
}

static SURUCU: std::sync::atomic::AtomicBool = std::sync::atomic::AtomicBool::new(false);

/// Presence süpervizörü — TEK KEZ başlar.
///
/// NİYE: önceden bağlantı yalnızca durum değişince (oyun aç/kapa) deneniyordu.
/// Discord launcher'dan SONRA açılırsa (özellikle Linux'ta yaygın) presence
/// hiç görünmüyordu ve tekrar denenmiyordu. Süpervizör 15 sn'de bir:
///   · istek yoksa hiçbir şey yapmaz,
///   · bağlantı yoksa yeniden bağlanır,
///   · bağlantı varsa 45 sn'de bir "canlı mı" diye aynı presence'i tazeler,
///   · ayar kapatıldıysa presence'i temizler.
/// Böylece "launcher açıksa her işletim sisteminde gözükür" garanti edilir.
pub fn basla() {
    if SURUCU.swap(true, std::sync::atomic::Ordering::SeqCst) {
        return;
    }
    std::thread::spawn(|| loop {
        std::thread::sleep(std::time::Duration::from_secs(15));
        let istek = match ISTEK.lock() {
            Ok(i) => i.clone(),
            Err(_) => continue,
        };
        let acik = crate::config::YikimConfig::load_or_default().discord_rpc;
        let mut guard = match CLIENT.lock() {
            Ok(g) => g,
            Err(_) => continue,
        };
        if !acik {
            if let Some(client) = guard.as_mut() {
                let pid = client.pid;
                ipc_set_activity(&mut client.socket, pid, None);
            }
            *guard = None;
            continue;
        }
        // Ayar açık ama hiç presence istenmemiş (RPC kapalıyken başlatıldı,
        // sonra açıldı) → launcher presence'ini kendimiz kur.
        let istek = match istek {
            Some(i) => i,
            None => {
                drop(guard);
                launcher_presence();
                continue;
            }
        };
        match guard.as_ref() {
            None => {
                uygula(&mut guard, &istek);
            }
            Some(c) if c.son_gonderim.elapsed().as_secs() >= 45 => {
                uygula(&mut guard, &istek);
            }
            Some(_) => {}
        }
    });
}

/// Launcher açıkken gösterilecek presence (oyun kapalıyken de bu kalır).
pub fn launcher_presence() {
    set_presence(
        "YIKIMLient Launcher",
        &format!("YIKIMLient {} açık", crate::APP_VERSION),
        std::process::id(),
    );
}

/// Oyun açıkken gösterilecek presence: "YIKIMLient ile oynuyor" + sürüm.
/// `game_pid` = javaw süreç PID'i → Discord klip/algılama MINECRAFT'ı yakalar.
pub fn game_presence(instance_name: &str, mc_version: &str, server: &str, game_pid: u32) {
    let details = if server.is_empty() {
        format!("Minecraft {} — {}", mc_version, instance_name)
    } else {
        format!("Minecraft {} — {}", mc_version, server)
    };
    set_presence(&details, &format!("YIKIMLient {} ile oynuyor", crate::APP_VERSION), game_pid);
}

/// Presence'i temizle (soket açık kalır — sonraki set_presence yeniden kullanır).
#[allow(dead_code)]
pub fn clear_presence() {
    std::thread::spawn(|| {
        let mut guard = match CLIENT.lock() {
            Ok(g) => g,
            Err(_) => return,
        };
        let Some(client) = guard.as_mut() else { return };
        let pid = client.pid;
        ipc_set_activity(&mut client.socket, pid, None);
    });
}
