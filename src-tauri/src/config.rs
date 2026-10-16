use crate::core::config_path;
use serde::{Deserialize, Serialize};

/// Global launcher ayarları. Tema, varsayılan java arg preset'i, ram vb.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default)]
pub struct YikimConfig {
    pub theme: String,           // "orange" | "dark" | "light" | "neon" | custom id
    pub custom_accent: String,   // hex renk (tema = custom ise)
    pub language: String,        // "tr"
    pub default_ram_mb: u32,     // java -Xmx
    pub default_java_preset: String,
    pub keep_launcher_open: bool,
    /// Oyun açılınca launcher penceresi gizlenir (RAM tasarrufu — isteğe bağlı,
    /// varsayılan KAPALI: launcher hep görünür kalır).
    /// Oyun kapanınca Rust çekirdeği geri gösterir.
    pub hide_on_launch: bool,
    pub full_screen_game: bool,
    pub show_news: bool,
    pub discord_rpc: bool,
    pub last_selected_account: String,
    pub window_maximized: bool,
    pub stats_enabled: bool,
    pub java_dir: Option<String>,      // özel java bin klasörü (boşsa otomatik)
    pub download_concurrency: usize,   // paralel indirme sayısı
    /// Microsoft Build of OpenJDK 25 (mod paketleri için optimize JVM —
    /// Java 21+ isteyen sürümlerde Mojang runtime'ı yerine bu kullanılır).
    /// İndirme başarısızsa otomatik Mojang java-runtime'a düşer.
    pub use_java25: bool,
}

impl Default for YikimConfig {
    fn default() -> Self {
        Self {
            theme: "orange".into(),
            custom_accent: "#ff7a1a".into(),
            language: "tr".into(),
            default_ram_mb: 4096,
            default_java_preset: "balanced".into(),
            keep_launcher_open: false,
            hide_on_launch: false,
            full_screen_game: false,
            show_news: true,
            discord_rpc: false,
            last_selected_account: String::new(),
            window_maximized: false,
            stats_enabled: true,
            java_dir: None,
            download_concurrency: 8,
            use_java25: true,
        }
    }
}

impl YikimConfig {
    pub fn load_or_default() -> Self {
        crate::util::read_json(&config_path()).unwrap_or_default()
    }

    pub fn save(&self) -> Result<(), String> {
        crate::util::write_json(&config_path(), self)
    }
}
