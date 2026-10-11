use crate::core::{http_client, news_dir, stats_dir, now_millis};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

// ---------- Haberler ----------

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewsItem {
    pub title: String,
    pub category: String,
    pub date: String,
    pub text: String,
    pub url: String,
    pub image: String,
}

/// Mojang launcher news API. Disk cache: 1 saat.
pub async fn fetch_news() -> Result<Vec<NewsItem>, String> {
    let cache = news_dir().join("news.json");
    if let Ok(meta) = std::fs::metadata(&cache) {
        if let Ok(modified) = meta.modified() {
            if modified.elapsed().map(|e| e.as_secs()).unwrap_or(0) < 3600 {
                if let Some(items) = crate::util::read_json::<Vec<NewsItem>>(&cache) {
                    return Ok(items);
                }
            }
        }
    }
    let resp = http_client()
        .get("https://launchercontent.mojang.com/v2/javaPatchNotes.json")
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let js: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    let entries = js["entries"].as_array().ok_or("news bozuk")?;
    let items: Vec<NewsItem> = entries
        .iter()
        .take(20)
        .map(|e| NewsItem {
            title: e["title"].as_str().unwrap_or("").into(),
            category: e["type"].as_str().unwrap_or("news").into(),
            date: e["dateText"].as_str().unwrap_or("").into(),
            text: {
                // HTML'i ham bırakmayalım: ilk 240 karakteri düz metin al
                let raw = e["body"].as_str().unwrap_or("");
                strip_html(raw, 240)
            },
            url: format!("https://www.minecraft.net/en-us/article/{}",
                e["title"].as_str().unwrap_or("").to_lowercase().replace(' ', "-")),
            image: {
                let img = e["newsPageImage"].as_object()
                    .and_then(|o| o.get("url"))
                    .and_then(|v| v.as_str())
                    .unwrap_or("");
                if img.is_empty() { String::new() } else { format!("https://launchercontent.mojang.com{img}") }
            },
        })
        .collect();
    let _ = crate::util::write_json(&cache, &items);
    Ok(items)
}

fn strip_html(html: &str, max: usize) -> String {
    let mut out = String::with_capacity(max.min(html.len()));
    let mut in_tag = false;
    let mut last_space = false;
    for ch in html.chars() {
        match ch {
            '<' => in_tag = true,
            '>' => in_tag = false,
            c if !in_tag => {
                if c.is_whitespace() {
                    if !last_space {
                        out.push(' ');
                        last_space = true;
                    }
                } else {
                    out.push(c);
                    last_space = false;
                }
            }
            _ => {}
        }
        if out.len() >= max {
            break;
        }
    }
    out.trim().to_string()
}

// ---------- YIKIM özel duyurular (imzalı JSON) ----------

/// Yayınlama (sen): news.json dosyasını düzenle → `yikim-news-sign` aracıyla
/// ed25519 imzala → GitHub'a push et. Doğrulama için public key launcher'ın
/// içine gömülüdür; başkasının dosyası imzasız/bozuk imzayla gelir → gösterilmez.
/// İmza şeması: JSON dosyasın olduğu klasörde aynı isim + ".sig" uzantılı
/// 64-baytlık ham ed25519 imza (base64).

pub const NEWS_FEED_URL: &str = "https://raw.githubusercontent.com/YKSAMI1/news/main/feed.json";
/// Ed25519 public key (launcher'a gömülü; özel anahtar BASE ASLA burada değil).
/// Yayın yaparken kendi anahtarınla imzala; pubkey'i değiştirmek = yeni launcher sürümü.
pub const NEWS_PUBKEY_HEX: &str = "52f3bf1ab519be85d2a629c848b92e6f38dfa47698500e12afa7b70996ce9ba4";

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct YikimAnnouncement {
    pub id: String,
    pub title: String,
    pub text: String,      // kısa özet (liste önizlemesi)
    pub body: String,      // HTML değil düz metin, satırlar \n\n paragrafı
    pub image: String,     // opsiyonel görsel URL (https ve yalnız izin verilen host olmalı)
    pub link: String,      // opsiyonel tıklanabilir link (https zorunlu)
    pub link_label: String,
    pub date: String,      // YYYY-MM-DD
    pub pinned: bool,   // üstte sabit duyuru
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct YikimNewsFeed {
    pub version: u32,
    pub updated_at: i64,
    pub announcements: Vec<YikimAnnouncement>,
}

/// İmza kontrolü: ed25519-dalek. Feed doğrulanamazsa duyurular UI'ya girmmez.
fn verify_feed_signature(raw: &[u8], sig_b64: &str) -> bool {
    use ed25519_dalek::{Signature, Verifier, VerifyingKey};
    use base64::Engine;
    let pub_bytes = match hex::decode(NEWS_PUBKEY_HEX) {
        Ok(b) if b.len() == 32 => b,
        _ => return false, // henüz pubkey gömülmedi → duyuru sistemi kapalı
    };
    let Ok(vk_array) = <[u8; 32]>::try_from(pub_bytes.as_slice()) else { return false };
    let Ok(vk) = VerifyingKey::from_bytes(&vk_array) else { return false };
    let Ok(sig_bytes) = base64::engine::general_purpose::STANDARD.decode(sig_b64) else { return false };
    let Ok(sig_array) = <[u8; 64]>::try_from(sig_bytes.as_slice()) else { return false };
    let sig = Signature::from_bytes(&sig_array);
    vk.verify(raw, &sig).is_ok()
}

/// YIKIM duyurularını çeker (imza doğrulamalı). Disk cache 30 dk.
pub async fn fetch_yikim_news() -> Result<Vec<YikimAnnouncement>, String> {
    // pubkey gömülmediyse duyuru sistemi tamamen kapalı (boş liste, hata değil)
    if NEWS_PUBKEY_HEX.starts_with("q_") {
        return Ok(vec![]);
    }
    let cache = news_dir().join("yikim-feed.json");
    let cache_sig = news_dir().join("yikim-feed.sig");
    if let (Ok(meta), _) = (std::fs::metadata(&cache), std::fs::metadata(&cache_sig)) {
        if let Ok(modified) = meta.modified() {
            if modified.elapsed().map(|e| e.as_secs()).unwrap_or(0) < 1800 {
                if let Some((feed, _sig)) = read_cached_feed(&cache, &cache_sig) {
                    return Ok(feed.announcements);
                }
            }
        }
    }
    let resp = http_client()
        .get(NEWS_FEED_URL)
        .send()
        .await
        .map_err(|e| format!("duyuruya erişilemedi: {e}"))?
        .error_for_status()
        .map_err(|e| format!("duyuru feed'i: {e}"))?;
    let raw = resp.bytes().await.map_err(|e| e.to_string())?;
    // imza ayrı bir dosyada (feed.json.sig) — aynı URL'den çekilir
    let sig_url = format!("{NEWS_FEED_URL}.sig");
    let sig_resp = http_client()
        .get(&sig_url)
        .send()
        .await
        .map_err(|e| format!("imza dosyasına erişilemedi: {e}"))?
        .error_for_status()
        .map_err(|e| format!("imza dosyası: {e}"))?;
    let sig_b64 = String::from_utf8_lossy(sig_resp.bytes().await.map_err(|e| e.to_string())?.as_ref()).to_string();
    if !verify_feed_signature(&raw, sig_b64.trim()) {
        return Err("duyuru imzası geçersiz — feed güvenilir değil".into());
    }
    let feed: YikimNewsFeed = serde_json::from_slice(&raw).map_err(|e| format!("duyuru JSON bozuk: {e}"))?;
    let _ = std::fs::write(&cache_sig, sig_b64.trim());
    let _ = crate::util::write_json(&cache, &feed);
    Ok(feed.announcements)
}

fn read_cached_feed(cache: &std::path::Path, _sig: &std::path::Path) -> Option<(YikimNewsFeed, String)> {
    // cache'ten okurken imzayı yeniden doğrulamıyoruz; yazıldığında doğrulanmıştı
    crate::util::read_json::<YikimNewsFeed>(cache).map(|f| (f, String::new()))
}

// ---------- İstatistikler ----------

/// Oyun OYUN KAPANDIĞINDA (event-driven) kaydedilir — oyuncu sırasında dosya I/O yok,
/// oyun içinde sıfır CPU maliyeti.
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct SessionRecord {
    pub instance_id: String,
    pub version: String,
    pub started_at: i64,
    pub duration_ms: i64,
    pub server: String,
    pub exit_code: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct ServerStats {
    pub host: String,
    pub total_ms: i64,
    pub visits: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct StatsSnapshot {
    pub total_playtime_ms: i64,
    pub sessions: u32,
    pub first_ever_play: i64,
    pub last_played: i64,
    /// gün (YYYY-MM-DD) → ms
    pub daily_ms: HashMap<String, i64>,
    pub servers: Vec<ServerStats>,
    pub per_instance_ms: HashMap<String, i64>,
}

/// Bir oturumu diske ekle (append-only jsonl; ucuz ve bozulmaya dayanıklı).
pub fn record_session(rec: &SessionRecord) -> Result<(), String> {
    if rec.duration_ms <= 0 {
        return Ok(());
    }
    let dir = stats_dir();
    let path = dir.join("sessions.jsonl");
    let line = serde_json::to_string(rec).map_err(|e| e.to_string())?;
    use std::io::Write;
    let mut f = std::fs::OpenOptions::new()
        .create(true)
        .append(true)
        .open(&path)
        .map_err(|e| e.to_string())?;
    f.write_all(format!("{line}\n").as_bytes()).map_err(|e| e.to_string())
}

fn day_key(ms: i64) -> String {
    // yerel tarih yerine UTC basit hesap (yeterli)
    let secs = ms / 1000;
    let days = secs / 86400;
    // epoch 1970-01-01
    let mut year = 1970i64;
    let mut day_in_year = days;
    loop {
        let leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
        let yd = if leap { 366 } else { 365 };
        if day_in_year < yd {
            break;
        }
        day_in_year -= yd;
        year += 1;
    }
    let leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    let mlen = [31, if leap { 29 } else { 28 }, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let mut month = 0usize;
    let mut d = day_in_year;
    while d >= mlen[month] {
        d -= mlen[month];
        month += 1;
    }
    // YYYY-MM-DD — frontend 'günlük dağılım' grafiği bu anahtarla bakıyor
    format!("{year:04}-{:02}-{:02}", month + 1, d + 1)
}

/// Tüm oturumları okuyup anlık görüntü üret (launcher açıkken bir kez; oyun içinde hiç).
pub fn snapshot() -> StatsSnapshot {
    let mut snap = StatsSnapshot::default();
    let path = stats_dir().join("sessions.jsonl");
    let Ok(content) = std::fs::read_to_string(&path) else {
        return snap;
    };
    for line in content.lines() {
        let Ok(rec) = serde_json::from_str::<SessionRecord>(line) else {
            continue;
        };
        snap.total_playtime_ms += rec.duration_ms;
        snap.sessions += 1;
        if snap.first_ever_play == 0 || rec.started_at < snap.first_ever_play {
            snap.first_ever_play = rec.started_at;
        }
        if rec.started_at + rec.duration_ms > snap.last_played {
            snap.last_played = rec.started_at + rec.duration_ms;
        }
        let key = day_key(rec.started_at);
        *snap.daily_ms.entry(key).or_default() += rec.duration_ms;
        if !rec.server.is_empty() {
            let entry = snap.servers.iter_mut().find(|s| s.host == rec.server);
            match entry {
                Some(s) => {
                    s.total_ms += rec.duration_ms;
                    s.visits += 1;
                }
                None => snap.servers.push(ServerStats {
                    host: rec.server.clone(),
                    total_ms: rec.duration_ms,
                    visits: 1,
                }),
            }
        }
        *snap.per_instance_ms.entry(rec.instance_id.clone()).or_default() += rec.duration_ms;
    }
    snap.servers.sort_by(|a, b| b.total_ms.cmp(&a.total_ms));
    snap
}

/// Şu an çalışan oturum için başlangıç damgası (memory-only).
pub struct LiveSession {
    pub instance_id: String,
    pub version: String,
    pub started_at: i64,
    pub server: std::sync::Arc<std::sync::Mutex<String>>,
}

impl LiveSession {
    pub fn new(instance_id: &str, version: &str) -> Self {
        Self {
            instance_id: instance_id.into(),
            version: version.into(),
            started_at: now_millis(),
            server: std::sync::Arc::new(std::sync::Mutex::new(String::new())),
        }
    }
    pub fn finish(&self, exit_code: i32) -> SessionRecord {
        SessionRecord {
            instance_id: self.instance_id.clone(),
            version: self.version.clone(),
            started_at: self.started_at,
            duration_ms: now_millis() - self.started_at,
            server: self.server.lock().unwrap().clone(),
            exit_code: exit_code,
        }
    }
}
