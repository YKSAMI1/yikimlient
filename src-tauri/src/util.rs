use crate::core::TOTAL_BYTES_WRITTEN;
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::sync::atomic::Ordering;
use std::time::Instant;

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct DlProgress {
    pub done_files: u32,
    pub total_files: u32,
    pub total_bytes: u64,
    pub bytes_per_sec: u64,
    pub current_file: String,
}

pub struct DlOpts {
    pub concurrency: usize,
    pub retries: usize,
}

impl Default for DlOpts {
    fn default() -> Self {
        Self { concurrency: 24, retries: 3 }
    }
}

// ---------- iptal desteği ----------

static CANCEL_FLAG: std::sync::atomic::AtomicBool = std::sync::atomic::AtomicBool::new(false);

pub fn cancel_all_downloads() {
    CANCEL_FLAG.store(true, Ordering::Relaxed);
}

fn is_canceled() -> bool {
    CANCEL_FLAG.load(Ordering::Relaxed)
}

/// JSON'u diskten oku (yoksa default).
pub fn read_json<T: for<'de> Deserialize<'de>>(path: &Path) -> Option<T> {
    let bytes = std::fs::read(path).ok()?;
    serde_json::from_slice(&bytes).ok()
}

/// JSON'u atomik olarak diske yaz (tmp → rename, bozulmaya dayanıklı).
pub fn write_json<T: Serialize>(path: &Path, value: &T) -> Result<(), String> {
    if let Some(parent) = path.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let tmp = path.with_extension("tmp");
    let data = serde_json::to_vec_pretty(value).map_err(|e| e.to_string())?;
    std::fs::write(&tmp, data).map_err(|e| e.to_string())?;
    std::fs::rename(&tmp, path).map_err(|e| e.to_string())
}

/// Paralel dosya indirme motoru.
/// - Yol + SHA1 verilmişse mevcut dosyayı doğrular, doğruysa atlar (disk I/O minimum).
/// - HTTP/2 keep-alive havuzlu client kullanır.
/// - Progress event'leri callback ile iletilir (UI'ye throttle edilmiş).
pub async fn download_many<F>(
    files: Vec<(String, PathBuf, Option<String>)>, // (url, dest, sha1)
    opts: DlOpts,
    mut on_progress: F,
) -> Result<(), String>
where
    F: FnMut(DlProgress) + Send,
{
    use futures_util::stream::{self, StreamExt};

    let total_files = files.len() as u32;
    let started = Instant::now();
    CANCEL_FLAG.store(false, Ordering::Relaxed);
    let counter = std::sync::Arc::new(AtomicU64Counter::default());
    let done = std::sync::Arc::new(std::sync::atomic::AtomicU32::new(0));
    let failures: std::sync::Arc<std::sync::Mutex<Vec<String>>> =
        std::sync::Arc::new(std::sync::Mutex::new(Vec::new()));
    let client = crate::core::http_client();

    // İlk progress: toplam dosya sayısı
    on_progress(DlProgress {
        done_files: 0,
        total_files,
        total_bytes: 0,
        bytes_per_sec: 0,
        current_file: String::new(),
    });

    let mut report_ticker = tokio::time::interval(std::time::Duration::from_millis(150));
    report_ticker.set_missed_tick_behavior(tokio::time::MissedTickBehavior::Skip);

    let jobs = stream::iter(files.into_iter().map(|(url, dest, sha)| {
        let client = client.clone();
        let counter = counter.clone();
        let done = done.clone();
        let failures = failures.clone();
        async move {
            if is_canceled() {
                done.fetch_add(1, Ordering::Relaxed);
                return;
            }
            // Sha1 doğruysa atla
            if let Some(expected) = &sha {
                if verify_sha1(&dest, expected) {
                    done.fetch_add(1, Ordering::Relaxed);
                    return;
                }
            }
            let mut attempt = 0;
            loop {
                match download_one(&client, &url, &dest, &counter).await {
                    Ok(()) => break,
                    Err(e) => {
                        attempt += 1;
                        if attempt > 3 {
                            failures.lock().unwrap().push(format!("{url}: {e}"));
                            break;
                        }
                        crate::core::msleep(300 * attempt as u64);
                    }
                }
            }
            done.fetch_add(1, Ordering::Relaxed);
        }
    }))
    .buffer_unordered(opts.concurrency);

    // Progress throttle: her 150ms'de bir güncelle
    let mut jobs = std::pin::pin!(jobs);

    loop {
        let mut j = jobs.as_mut();
        tokio::select! {
            item = j.next() => {
                match item {
                    Some(_) => {
                        if done.load(Ordering::Relaxed) >= total_files {
                            break;
                        }
                    }
                    None => break,
                }
            }
            _ = report_ticker.tick() => {
                let bytes = counter.0.load(Ordering::Relaxed);
                let secs = started.elapsed().as_secs_f64().max(0.05);
                on_progress(DlProgress {
                    done_files: done.load(Ordering::Relaxed),
                    total_files,
                    total_bytes: bytes,
                    bytes_per_sec: (bytes as f64 / secs) as u64,
                    current_file: String::new(),
                });
            }
        }
    }

    let failures = failures.lock().unwrap();
    if is_canceled() {
        return Err("indirme iptal edildi".into());
    }
    if !failures.is_empty() {
        return Err(format!(
            "{} dosya indirilemedi. İlk hata: {}",
            failures.len(),
            failures[0]
        ));
    }

    let bytes = counter.0.load(Ordering::Relaxed);
    on_progress(DlProgress {
        done_files: total_files,
        total_files,
        total_bytes: bytes,
        bytes_per_sec: (bytes as f64 / started.elapsed().as_secs_f64().max(0.05)) as u64,
        current_file: String::new(),
    });
    Ok(())
}

#[derive(Default)]
struct AtomicU64Counter(std::sync::atomic::AtomicU64);

async fn download_one(
    client: &reqwest::Client,
    url: &str,
    dest: &Path,
    counter: &AtomicU64Counter,
) -> Result<(), String> {
    if let Some(parent) = dest.parent() {
        std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    let resp = client
        .get(url)
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?;

    let mut stream = resp.bytes_stream();
    let mut file = tokio::fs::File::create(dest).await.map_err(|e| e.to_string())?;
    use tokio::io::AsyncWriteExt;
    while let Some(chunk) = stream.next().await {
        let chunk = chunk.map_err(|e| e.to_string())?;
        file.write_all(&chunk).await.map_err(|e| e.to_string())?;
        counter.0.fetch_add(chunk.len() as u64, Ordering::Relaxed);
        TOTAL_BYTES_WRITTEN.fetch_add(chunk.len() as u64, Ordering::Relaxed);
    }
    file.flush().await.map_err(|e| e.to_string())?;
    Ok(())
}

/// Dosyanın SHA1'i eşleşiyor mu? (yok/hata → false)
pub fn verify_sha1(path: &Path, expected: &str) -> bool {
    let Ok(bytes) = std::fs::read(path) else { return false };
    if bytes.len() > 256 * 1024 * 1024 {
        return false; // 256MB üstü dosyayı RAM'e almadan reddet
    }
    use sha1::Digest as _;
    let mut h = sha1::Sha1::new();
    h.update(&bytes);
    let digest = h.finalize();
    let computed: String = digest.iter().map(|b| format!("{b:02x}")).collect();
    computed.eq_ignore_ascii_case(expected)
}

pub use futures_util::stream::StreamExt as _;
