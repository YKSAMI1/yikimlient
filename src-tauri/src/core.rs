use std::path::PathBuf;
use std::sync::atomic::{AtomicBool, AtomicU64};
use std::time::{SystemTime, UNIX_EPOCH};

/// Log açma/kapama (releasede tamamen söner).
pub static DEBUG_LOGS: AtomicBool = AtomicBool::new(true);
/// Toplam yazılan bayt sayacı (istatistik + indirme hız ölçümü).
pub static TOTAL_BYTES_WRITTEN: AtomicU64 = AtomicU64::new(0);

#[inline]
pub fn now_millis() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis() as i64)
        .unwrap_or(0)
}

/// Release derlemelerinde hiçbir maliyeti olmayan debug logu.
#[macro_export]
macro_rules! dlog {
    ($($arg:tt)*) => {
        if $crate::core::DEBUG_LOGS.load(std::sync::atomic::Ordering::Relaxed) {
            $crate::core::yikim_log(format!($($arg)*));
        }
    };
}

pub fn yikim_log(msg: String) {
    println!("[YIKIMLient] {msg}");
    // release'de konsol görünmez → dosyaya da yaz (app_dir/logs/yikimlient.log)
    let dir = app_dir().join("logs");
    if std::fs::create_dir_all(&dir).is_ok() {
        use std::io::Write;
        if let Ok(mut f) = std::fs::OpenOptions::new()
            .create(true)
            .append(true)
            .open(dir.join("yikimlient.log"))
        {
            let _ = writeln!(f, "[{msg}");
        }
    }
}

#[inline]
pub fn msleep(ms: u64) {
    std::thread::sleep(std::time::Duration::from_millis(ms));
}

pub fn os_name() -> &'static str {
    match std::env::consts::OS {
        "windows" => "windows",
        "macos" => "osx",
        _ => "linux",
    }
}

pub fn arch_name() -> &'static str {
    match std::env::consts::ARCH {
        "x86_64" | "amd64" => "x64",
        "aarch64" | "arm64" => "arm64",
        _ => "x64",
    }
}

/// Launcher veri kökü:
/// Windows: %APPDATA%/.yikimlient  |  macOS: ~/Library/Application Support/.yikimlient
/// Linux: ~/.local/share/.yikimlient
pub fn app_dir() -> PathBuf {
    let base = dirs::data_dir().unwrap_or_else(|| PathBuf::from("."));
    let p = base.join(".yikimlient");
    let _ = std::fs::create_dir_all(&p);
    p
}

pub fn ensure_subdir(parent: &std::path::Path, name: &str) -> PathBuf {
    let p = parent.join(name);
    let _ = std::fs::create_dir_all(&p);
    p
}

pub fn instances_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "instances")
}

pub fn assets_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "assets")
}

pub fn libraries_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "libraries")
}

pub fn versions_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "versions")
}

pub fn runtimes_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "runtimes")
}

pub fn news_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "news")
}

pub fn stats_dir() -> PathBuf {
    ensure_subdir(&app_dir(), "stats")
}

pub fn accounts_path() -> PathBuf {
    app_dir().join("accounts.json")
}

pub fn config_path() -> PathBuf {
    app_dir().join("config.json")
}

/// Tek seferlik paylaşılan HTTP client (pool'lu, hızlı).
pub fn http_client() -> reqwest::Client {
    static CLIENT: std::sync::OnceLock<reqwest::Client> = std::sync::OnceLock::new();
    CLIENT
        .get_or_init(|| {
            reqwest::Client::builder()
                .user_agent("YIKIMLient/0.2 (+https://github.com/YKSAMI1)")
                .pool_max_idle_per_host(12)
                .tcp_nodelay(true)
                // Bağlantı kurulumu 10 sn'yi geçmesin (api çağrıları sonsuz asılmasın).
                // Toplam timeout KOYMADIK — büyük dosya indirmeleri kesilmesin.
                .connect_timeout(std::time::Duration::from_secs(10))
                .build()
                .expect("http client")
        })
        .clone()
}
