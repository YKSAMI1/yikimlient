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
    /// Discord Rich Presence — "YIKIMLient ile oynuyor" (yalnız yerel IPC,
    /// internet trafiği yoktur). Kullanıcı isteğiyle geri geldi.
    pub discord_rpc: bool,
    /// Discord RPC v1 geciş isareti: eski config'lerde discord_rpc:false yaziliydi
    /// (hicbir zaman calismadigi icin kullanici secimi degil). Ilk yuklemede duzeltilir.
    pub discord_rpc_v1: bool,
    pub last_selected_account: String,
    pub window_maximized: bool,
    pub stats_enabled: bool,
    /// İlk açılış rehberi (tur) tamamlandı mı? — bir kez gösterilir, sonra sorulmaz.
    pub guided_tour_done: bool,
    /// İlk kurulum sihirbazı (hesap + ilk paket) tamamlandı mı? — yalnız boş
    /// gelen (hesabı ve kurulumu olmayan) kullanıcılara gösterilir.
    pub onboarding_done: bool,
    /// Ambiens parçacık yoğunluğu: "none" | "low" | "mid" | "high"
    pub fx_particles: String,
    /// Özel fare imleci: "standart" | "yikim" | "hedef" | "nokta"
    pub cursor_style: String,
    pub java_dir: Option<String>,      // özel java bin klasörü (boşsa otomatik)
    pub download_concurrency: usize,   // paralel indirme sayısı
    /// Microsoft Build of OpenJDK 25 (mod paketleri için optimize JVM —
    /// Java 21+ isteyen sürümlerde Mojang runtime'ı yerine bu kullanılır).
    /// İndirme başarısızsa otomatik Mojang java-runtime'a düşer.
    pub use_java25: bool,
    /// Çapraz rozet presence uç noktası (boşsa mod varsayılanını kullanır).
    /// VDS sahipleri kendi sunucusunu buraya yazar: http://VDS_IP:8787/presence
    pub presence_url: Option<String>,
    /// Piksel Atölyesi YÖNETİCİLERİ (yalnızca Microsoft hesap).
    /// Varsayılan: ["YKSAMI1"] — admin her şeyi yapar.
    pub atolye_admin: Vec<String>,
    /// Atölyeyi kullanmasına izin verilen oyuncular (her hesap türü olabilir).
    pub atolye_izinli: Vec<String>,
    /// Dünya başına görsel özelleştirme: {"sahne": {"accent":"#ffd83d","radius":"yumusak"}}
    /// Boş alan = dünyanın kendi rengi/köşesi kullanılır.
    pub tema_ozel: std::collections::HashMap<String, TemaOzel>,
    /// Sahne dünyasında karakterin arkasındaki piksel manzara
    /// (kiraz | nether | end | bastion | mantar | buz | col | okyanus)
    pub sahne_arka: String,
    /// Ana menü karakter animasyonları (emote) oynasın mı?
    pub menu_animasyon: bool,
    /// Animasyon oynatma sıklığı: "sakin" | "normal" | "canli"
    pub menu_animasyon_hiz: String,
}

/// Tek bir dünyanın kullanıcı özelleştirmesi. Hepsi opsiyonel: boş alan
/// dünyanın kendi değerini korur.
#[derive(Debug, Clone, Default, Serialize, Deserialize)]
#[serde(default)]
pub struct TemaOzel {
    /// Vurgu rengi (hex, "#rrggbb")
    pub accent: String,
    /// Köşe yumuşaklığı: "" (dünya varsayılanı) | "keskin" | "yumusak" | "hap"
    pub radius: String,
}

impl Default for YikimConfig {
    fn default() -> Self {
        Self {
            theme: "sahne".into(),
            custom_accent: "#ff7a1a".into(),
            language: "tr".into(),
            default_ram_mb: 4096,
            default_java_preset: "balanced".into(),
            keep_launcher_open: false,
            hide_on_launch: false,
            full_screen_game: false,
            show_news: true,
            discord_rpc: true,
            discord_rpc_v1: false,
            last_selected_account: String::new(),
            window_maximized: false,
            stats_enabled: true,
            guided_tour_done: false,
            onboarding_done: false,
            fx_particles: "mid".into(),
            cursor_style: "standart".into(),
            java_dir: None,
            download_concurrency: 8,
            use_java25: true,
            presence_url: None,
            atolye_admin: vec!["YKSAMI1".into()],
            atolye_izinli: vec![],
            tema_ozel: std::collections::HashMap::new(),
            sahne_arka: "kiraz".into(),
            menu_animasyon: true,
            menu_animasyon_hiz: "normal".into(),
        }
    }
}

impl YikimConfig {
    pub fn load_or_default() -> Self {
        let mut cfg: Self = crate::util::read_json(&config_path()).unwrap_or_default();
        // TEK SEFERLIK MIGRASYON: eski config'lerde discord_rpc:false yaziliydi ama
        // RPC hicbir zaman calismiyordu (start() hic baglanmamisti) — bu bir kullanici
        // secimi degil. Bir kez true'ya cekilip isaretlenir; sonrasinda kullanici
        // ayarlardan kapatabilir, o secim saygi gorur.
        if !cfg.discord_rpc_v1 {
            cfg.discord_rpc = true;
            cfg.discord_rpc_v1 = true;
            let _ = cfg.save();
        }
        cfg
    }

    pub fn save(&self) -> Result<(), String> {
        crate::util::write_json(&config_path(), self)
    }
}
