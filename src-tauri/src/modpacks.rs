use serde::{Deserialize, Serialize};

/// Java argüman presetleri — her biri farklı bir hedefe optimize.
/// {ram_mb} yer tutucusu instance RAM değeriyle değiştirilir.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JavaPreset {
    pub id: String,
    pub name: String,
    pub description: String,
    pub recommended_ram_mb: u32,
    pub args: Vec<String>,
}

pub fn java_presets() -> Vec<JavaPreset> {
    vec![
        JavaPreset {
            id: "balanced".into(),
            name: "Dengeli".into(),
            description: "Günlük oyun için dengeli GC. FPS ve kararlılık arasında iyi denge; her donanımda güvenli seçim."
                .into(),
            recommended_ram_mb: 4096,
            args: vec![
                "-Xms{ram_mb}M".into(),
                "-Xmx{ram_mb}M".into(),
                "-XX:+UseG1GC".into(),
                "-XX:+ParallelRefProcEnabled".into(),
                "-XX:MaxGCPauseMillis=200".into(),
                "-XX:+UnlockExperimentalVMOptions".into(),
                "-XX:+DisableExplicitGC".into(),
                "-XX:G1NewSizePercent=30".into(),
                "-XX:G1MaxNewSizePercent=40".into(),
                "-XX:G1HeapRegionSize=8M".into(),
                "-XX:G1ReservePercent=20".into(),
                "-XX:InitiatingHeapOccupancyPercent=15".into(),
                "-XX:G1MixedGCCountTarget=4".into(),
                "-XX:+PerfDisableSharedMem".into(),
            ],
        },
        JavaPreset {
            id: "low_framerate".into(),
            name: "Yüksek FPS".into(),
            description: "Kısa GC duraklamaları ile kare süresini sabitler. Turnuva/PVP ve akıcı 1% low için ideal."
                .into(),
            recommended_ram_mb: 4096,
            args: vec![
                "-Xms{ram_mb}M".into(),
                "-Xmx{ram_mb}M".into(),
                "-XX:+UseG1GC".into(),
                "-XX:MaxGCPauseMillis=130".into(),
                "-XX:+ParallelRefProcEnabled".into(),
                "-XX:+UnlockExperimentalVMOptions".into(),
                "-XX:+DisableExplicitGC".into(),
                "-XX:G1NewSizePercent=40".into(),
                "-XX:G1MaxNewSizePercent=50".into(),
                "-XX:G1HeapRegionSize=16M".into(),
                "-XX:G1ReservePercent=15".into(),
                "-XX:InitiatingHeapOccupancyPercent=10".into(),
                "-XX:+PerfDisableSharedMem".into(),
                "-XX:+AlwaysPreTouch".into(),
            ],
        },
        JavaPreset {
            id: "ultra_fps".into(),
            name: "Ultra FPS (Eski PC)".into(),
            description: "Zayıf/eski makineler için: küçük heap, kısa GC duraklamaları, minimum arka plan yükü. Entegre grafikli ve 8 GB RAM'li sistemlerde en yüksek kare hızı.".into(),
            recommended_ram_mb: 2048,
            args: vec![
                "-Xms512M".into(),
                "-Xmx{ram_mb}M".into(),
                "-XX:+UseG1GC".into(),
                "-XX:MaxGCPauseMillis=40".into(),
                "-XX:+ParallelRefProcEnabled".into(),
                "-XX:+UnlockExperimentalVMOptions".into(),
                "-XX:+DisableExplicitGC".into(),
                "-XX:G1NewSizePercent=28".into(),
                "-XX:G1MaxNewSizePercent=36".into(),
                "-XX:G1HeapRegionSize=4M".into(),
                "-XX:G1ReservePercent=15".into(),
                "-XX:InitiatingHeapOccupancyPercent=20".into(),
                "-XX:+UseStringDeduplication".into(),
                "-XX:+PerfDisableSharedMem".into(),
            ],
        },
        JavaPreset {
            id: "low_ram".into(),
            name: "Düşük RAM (Zayıf PC)".into(),
            description: "2 GB civarı RAM ile akıcı oyun. Eski/zayıf bilgisayarlar ve entegre grafikler için optimize edildi."
                .into(),
            recommended_ram_mb: 2048,
            args: vec![
                "-Xms512M".into(),
                "-Xmx{ram_mb}M".into(),
                "-XX:+UseSerialGC".into(),
                "-XX:+DisableExplicitGC".into(),
                "-XX:MaxMetaspaceSize=256M".into(),
                "-XX:CompressedClassSpaceSize=64M".into(),
                "-XX:MaxDirectMemorySize=256M".into(),
                "-XX:+UseStringDeduplication".into(),
                "-Xss1M".into(),
            ],
        },
        JavaPreset {
            id: "low_latency".into(),
            name: "Düşük Gecikme".into(),
            description: "Cinematic/ZGC ile milisaniye altı duraklamalar. En düşük input lag; çok çekirdekli sistemler önerilir."
                .into(),
            recommended_ram_mb: 6144,
            args: vec![
                "-Xms{ram_mb}M".into(),
                "-Xmx{ram_mb}M".into(),
                "-XX:+UseZGC".into(),
                "-XX:+ZGenerational".into(),
                "-XX:+DisableExplicitGC".into(),
                "-XX:+AlwaysPreTouch".into(),
                "-XX:+PerfDisableSharedMem".into(),
            ],
        },
        JavaPreset {
            id: "aggressive".into(),
            name: "Agresif FPS".into(),
            description: "Deneysel JVM bayraklarıyla maksimum kare hızı. Bazı sistemlerde kararsız olabilir — test edin."
                .into(),
            recommended_ram_mb: 4096,
            args: vec![
                "-Xms{ram_mb}M".into(),
                "-Xmx{ram_mb}M".into(),
                "-XX:+UseG1GC".into(),
                "-XX:MaxGCPauseMillis=100".into(),
                "-XX:+ParallelRefProcEnabled".into(),
                "-XX:+UnlockExperimentalVMOptions".into(),
                "-XX:+DisableExplicitGC".into(),
                "-XX:G1NewSizePercent=50".into(),
                "-XX:G1MaxNewSizePercent=60".into(),
                "-XX:G1HeapRegionSize=32M".into(),
                "-XX:G1ReservePercent=10".into(),
                "-XX:InitiatingHeapOccupancyPercent=8".into(),
                // DÜZELTME: "G1MixedGCTargetCount" diye bir bayrak YOK — doğru adı
                // G1MixedGCCountTarget. Tanınmayan -XX bayrağı JVM'i başlatmayı reddediyordu.
                "-XX:G1MixedGCCountTarget=6".into(),
                "-XX:+PerfDisableSharedMem".into(),
                "-XX:+AlwaysPreTouch".into(),
            ],
        },
        JavaPreset {
            id: "ozel".into(),
            name: "Özel".into(),
            description: "Her şeyi kendin ayarla: RAM, chunk mesafesi ve JVM argümanlarını sen yazarsın — launcher değerlere karışmaz.".into(),
            recommended_ram_mb: 4096,
            args: vec![],
        },
    ]
}

pub fn java_preset_by_id(id: &str) -> Option<JavaPreset> {
    java_presets().into_iter().find(|p| p.id == id)
}

/// Standart modlar (otomatik kurulum setleri) — Fabric için.
/// id = Modrinth SLUG (sürüm çözümü repos katmanında slug→project→version yapılır).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StandardMod {
    pub id: String,
    pub slug: String,
    pub name: String,
    pub description: String,
    pub category: String,  // "performans" | "pvp" | "gorunum"
    pub enabled_by_default: bool,
}

pub fn standard_mods() -> Vec<StandardMod> {
    vec![
        // ==================== PERFORMANS (12) ====================
        StandardMod {
            id: "fabric-api".into(), slug: "fabric-api".into(),
            name: "Fabric API".into(),
            description: "Hemen hemen tüm Fabric modlarının ihtiyaç duyduğu çekirdek kütüphane.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "sodium".into(), slug: "sodium".into(),
            name: "Sodium".into(),
            description: "Render motorunu baştan yazar; FPS'i 2-5 katına çıkarır. Setin temeli.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "lithium".into(), slug: "lithium".into(),
            name: "Lithium".into(),
            description: "Oyun mantığını (fizik, mob AI, blok tick) optimize eder; sunucu TPS'ine de yansır.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "ferrite-core".into(), slug: "ferrite-core".into(),
            name: "FerriteCore".into(),
            description: "RAM kullanımını ciddi düşürür (chunk cache, model verisi azaltma).".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "krypton".into(), slug: "krypton".into(),
            name: "Krypton".into(),
            description: "Ağ yığınını optimize eder; düşük ping ve daha az ağ kaynaklı takılma.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "modernfix".into(), slug: "modernfix".into(),
            name: "ModernFix".into(),
            description: "Açılış süresini kısaltır, bellek kullanımını düşürür, genel iyileştirmeler.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "entityculling".into(), slug: "entityculling".into(),
            name: "EntityCulling".into(),
            description: "Görüş dışındaki varlıkların render'ını atlar; kalabalık yerlerde büyük FPS kazancı.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "immediatelyfast".into(), slug: "immediatelyfast".into(),
            name: "ImmediatelyFast".into(),
            description: "Anlık render yolu optimizasyonu; HUD, GUI ve varlık çizimini hızlandırır.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "noisium".into(), slug: "noisium".into(),
            name: "Noisium".into(),
            description: "Dünya üretim (noise) performansını artırır; yeni chunk üretimi hızlanır.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "particle-core".into(), slug: "particle-core".into(),
            name: "Particle Core".into(),
            description: "Parçacık render'ını optimize eder; efekt yoğun anlarda FPS korur.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "dynamic-fps".into(), slug: "dynamic-fps".into(),
            name: "Dynamic FPS".into(),
            description: "Pencere odakta değilken FPS'i düşürür; arka planda CPU/GPU boşa yakmaz.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        // ==================== PVP ====================
        StandardMod {
            id: "complete-shield-fixes".into(), slug: "complete-shield-fixes".into(),
            name: "Shield Fixes".into(),
            description: "Kalkan gecikmesi/hasar hatalarını düzeltir; PVP'de adil bloklama.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "walksylib".into(), slug: "walksylib".into(),
            name: "WalksyLib".into(),
            description: "Shield Fixes'in bağımlı olduğu kütüphane (otomatik kurulur).".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "bactromod".into(), slug: "bactromod".into(),
            name: "BactroMod".into(),
            description: "PVP kullanışlıları: hit takibi, combo sayacı ve ekrana oturan HUD.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "betterf3".into(), slug: "betterf3".into(),
            name: "BetterF3".into(),
            description: "Debug ekranını düzenler; koordinat, yön ve ping okunurluğu artar.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "held-item-info".into(), slug: "held-item-info".into(),
            name: "Held Item Info".into(),
            description: "Elindeki eşyanın adını hotbar üstünde gösterir; hızlı eşya kontrolü.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "mouse-tweaks".into(), slug: "mouse-tweaks".into(),
            name: "Mouse Tweaks".into(),
            description: "Envanterde sürükle-bırak hızlandırma; çanta/ekipman yönetimini akıcı yapar.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "shulkerboxtooltip".into(), slug: "shulkerboxtooltip".into(),
            name: "Shulker Box Tooltip".into(),
            description: "Shulker kutularının içini tooltip'te gösterir; kit kontrolü kolaylaşır.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "damage-tilt".into(), slug: "damage-tilt".into(),
            name: "Damage Tilt".into(),
            description: "Hasar alınca kamera sarsıntısını yön bilgisiyle geri getirir (1.9+ kaldırılmıştı).".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "xaeros-minimap".into(), slug: "xaeros-minimap".into(),
            name: "Xaero's Minimap".into(),
            description: "Hafif minimap; FPS'e neredeyse sıfır maliyet. Uzak sunucularda yön bulma.".into(),
            category: "pvp".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "xaeros-world-map".into(), slug: "xaeros-world-map".into(),
            name: "Xaero's World Map".into(),
            description: "Dünya haritası; Xaero minimap ile birebir uyumlu waypoint sistemi.".into(),
            category: "pvp".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "item-scroller".into(), slug: "item-scroller".into(),
            name: "Item Scroller".into(),
            description: "Envanterde toplu taşıma kısayolları; kit doldurmayı saniyelere indirir.".into(),
            category: "pvp".into(), enabled_by_default: false,
        },
        // ==================== GÖRÜNÜM (7) ====================
        StandardMod {
            id: "sodium-extra".into(), slug: "sodium-extra".into(),
            name: "Sodium Extra".into(),
            description: "Sodium'a OptiFine benzeri ek grafik ayarları ekler (animasyon, parçacık kontrolü).".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "reeses-sodium-options".into(), slug: "reeses-sodium-options".into(),
            name: "Reese's Sodium Options".into(),
            description: "Sodium'un video ayarları ekranını düzenler; arama ve açıklama ekler.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "lambdynamiclights".into(), slug: "lambdynamiclights".into(),
            name: "LambDynamicLights".into(),
            description: "Elindeki meşale ışık verir — dinamik ışıklandırma. (FPS maliyeti var, istersen kapat)".into(),
            category: "gorunum".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "iris".into(), slug: "iris".into(),
            name: "Iris Shaders".into(),
            description: "Shader desteği (OptiFine shader'larıyla uyumlu). Güçlü GPU ister — açıp kapatabilirsin.".into(),
            category: "gorunum".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "appleskin".into(), slug: "appleskin".into(),
            name: "AppleSkin".into(),
            description: "Yemeklerin doygunluk değerlerini gösterir; kaç protein/şeker — hayatta kalma netleşir.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "fastanim".into(), slug: "fastanim".into(),
            name: "FastAnim".into(),
            description: "Su/lav cam yüzey animasyonlarını hızlandırır; görsel akıcılık artar.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "modmenu".into(), slug: "modmenu".into(),
            name: "Mod Menu".into(),
            description: "Oyun içinde mod listesi + ayar butonu; kurulu modları oyun içinden yönet.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "capes".into(), slug: "capes".into(),
            name: "Capes".into(),
            description: "OptiFine/LabyMod vb. pelerinleri gösterir.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "fabric-language-kotlin".into(), slug: "fabric-language-kotlin".into(),
            name: "Fabric Language Kotlin".into(),
            description: "Kotlin tabanlı modların bağımlılığı (Zoomify, Capes, Particle Core ister).".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "yacl".into(), slug: "yacl".into(),
            name: "YetAnotherConfigLib (YACL)".into(),
            description: "Konfigürasyon kütüphanesi; Zoomify gibi modlar bağımlıdır.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "fzzy-config".into(), slug: "fzzy-config".into(),
            name: "Fzzy Config".into(),
            description: "Konfigürasyon kütüphanesi; Particle Core gibi modlar bağımlıdır.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        // ==================== İSTEK LİSTESİ + KÜTÜPHANELER ====================
        // (kullanıcı listesindeki eksik modlar; (Kapalı) işaretliler varsayılan kapalı)
        StandardMod {
            id: "auth-me".into(), slug: "auth-me".into(),
            name: "Auth Me".into(),
            description: "Cracked/sunucu girişlerini otomatik kaydeder; şifre istemini otomatik doldurur.".into(),
            category: "yardarci".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "fastquit".into(), slug: "fastquit".into(),
            name: "FastQuit".into(),
            description: "Oyun kapanışını hızlandırır; dünya kaydını arka planda bekletmez.".into(),
            category: "performans".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "litematica".into(), slug: "litematica".into(),
            name: "Litematica".into(),
            description: "Işınlayıcı blue print sistemi; kopya kalıpları planla/uygula.".into(),
            category: "yardarci".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "gamma-utils".into(), slug: "gamma-utils".into(),
            name: "Gamma Utils (Fullbright)".into(),
            description: "Gece görüşü/tam parlaklık; karanlık mağaralarda görüş netleşir.".into(),
            category: "gorunum".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "simple-voice-chat".into(), slug: "simple-voice-chat".into(),
            name: "Simple Voice Chat".into(),
            description: "Yakın konuma dayalı sesli sohbet; sunucu tarafında da kurulu olmalıdır.".into(),
            category: "yardarci".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "morechathistory".into(), slug: "morechathistory".into(),
            name: "More Chat History".into(),
            description: "Sohbet geçmişini uzatır; önceki mesajları kaydırmayı kolaylaştırır.".into(),
            category: "yardarci".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "no-chat-reports".into(), slug: "no-chat-reports".into(),
            name: "No Chat Reports".into(),
            description: "Sohbet imzasını kaldırır (sunucu destekliyorsa); gizlilik odaklı.".into(),
            category: "yardarci".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "no-chat-restrictions".into(), slug: "no-chat-restrictions".into(),
            name: "No Chat Restrictions".into(),
            description: "Sohbet karakter/mesaj sınırlarını kaldırır; uzun mesaj yazmayı kolaylaştırır.".into(),
            category: "yardarci".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "gnetum".into(), slug: "gnetum".into(),
            name: "Gnetum".into(),
            description: "HUD güncellemelerini karelere dağıtarak yükü azaltır; scoreboard/actionbar düzeni.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "crash-assistant".into(), slug: "crash-assistant".into(),
            name: "Crash Assistant".into(),
            description: "Çökme sonrası tanı paneli; neyin bozduğunu daha hızlı bulur.".into(),
            category: "yardarci".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "cubes-without-borders".into(), slug: "cubes-without-borders".into(),
            name: "Cubes Without Borders".into(),
            description: "Tam ekran/bordersız pencere düzeltmeleri; çoklu monitör için daha iyi.".into(),
            category: "yardarci".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "esf".into(), slug: "esf".into(),
            name: "Entity Sound Features (ESF)".into(),
            description: "Varlık seslerini (mob sesleri) daha gerçekçi yönetir.".into(),
            category: "gorunum".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "entitytexturefeatures".into(), slug: "entitytexturefeatures".into(),
            name: "Entity Texture Features (ETF)".into(),
            description: "Mob varyasyon dokuları (göz rengi, rastgele desenler); EMF ile birlikte çalışır.".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "entity-model-features".into(), slug: "entity-model-features".into(),
            name: "Entity Model Features (EMF)".into(),
            description: "Community optimizasyon modlarıyla uyumlu mob model değişimleri (Optifine uyumluluk).".into(),
            category: "gorunum".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "effecttimerplus".into(), slug: "effecttimerplus".into(),
            name: "Effect Timer Plus".into(),
            description: "Aktif etki simgelerinin üstüne kalan süre sayacı ekler.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "ukus-armor-hud".into(), slug: "ukus-armor-hud".into(),
            name: "uku's Armor HUD".into(),
            description: "Kalkan/kılıç dayanıklılığını HUD'da gösterir; PVP kit takibi kolaylaşır.".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "ukulib".into(), slug: "ukulib".into(),
            name: "ukulib".into(),
            description: "uku's Armor HUD'nin bağımlılığı olan çekirdek kütüphane (otomatik kurulur).".into(),
            category: "pvp".into(), enabled_by_default: true,
        },
        StandardMod {
            id: "player-kits".into(), slug: "player-kits".into(),
            name: "Player Kits".into(),
            description: "Kit şablonları (sunucu/modülü); deneyimli PVP sunucuları ister.".into(),
            category: "pvp".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "modify-player-data".into(), slug: "modify-player-data".into(),
            name: "Modify Player Data (kapalı)".into(),
            description: "Tek oyunculu oyunda oyuncu verisi inceleme/düzenleme aracı.".into(),
            category: "yardarci".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "carpet".into(), slug: "carpet".into(),
            name: "Carpet Mod (kapalı)".into(),
            description: "Tek oyunculu debug/kontrol modu; sadece geliştiriciler kullanır.".into(),
            category: "yardarci".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "auto-lectern".into(), slug: "auto-lectern".into(),
            name: "Auto Lectern (kapalı)".into(),
            description: "Lectern sayfalama otomasyonu; yerel oyunlarda kolaylık.".into(),
            category: "yardarci".into(), enabled_by_default: false,
        },
        StandardMod {
            id: "minecraftcapes".into(), slug: "minecraftcapes".into(),
            name: "MinecraftCapes (kapalı)".into(),
            description: "MinecraftCapes servisi pelerinleri gösterir; Capes modu ile ikileşebilir (varsayılan kapalı).".into(),
            category: "gorunum".into(), enabled_by_default: false,
        },
    ]
}

/// Emekliye ayrılan standart modlar (dosya adı önekleri). Nedenleri:
/// - zoomify: bizim modun YERLEŞİK zoom'u ile C tuşu çakışması (işlevsel kopya)
/// - zfastnoise: Noisium ile aynı işi yapıyor (dünya üretimi) → çakışma + sıfır fayda
/// - ixeris: 1.21.9+ yeni giriş sistemi (KeyInput/MouseInput) riski; panel girişlerimize zarar verebilir
/// - c2me-fabric: kalite/kararlılık gözetimi ile çıkarıldı
/// Kurulumda rastlanırsa `retired_mods/` klasörüne TAŞINIR (silinmez — geri dönüş her zaman açık).
pub fn retired_mod_prefixes() -> Vec<&'static str> {
    vec!["zoomify", "zfastnoise", "ixeris", "c2me-fabric"]
}

/// Launcher içinde sunduğumuz başlangıç sürümleri (quick pick).
pub fn featured_versions() -> Vec<String> {
    vec![
        "1.21.11".into(),
        "1.21.10".into(),
        "1.21.9".into(),
        "1.21.8".into(),
        "1.21.6".into(),
        "1.21.5".into(),
        "1.21.4".into(),
        "1.21.1".into(),
        "1.20.1".into(),
        "1.8.9".into(),
    ]
}
