//! BELLEK BOŞALTMA — Mem Reduct'ın yaptığını launcher kendisi yapar.
//!
//! NİYE: Launcher'ın RAM'i Rust sürecinde değil; WebView2 (Windows) / WebKit
//! (Linux) çocuk süreçlerinde. Bu süreçler bir kez sayfa açtıktan sonra
//! çalışma kümesini (working set) küçültmez — kullanıcı "Mem Reduct ile
//! boşaltınca 10 MB'a düşüyor, orada kalıyor" diyor. Aynı boşaltmayı
//! kullanıcı bir şey yapmadan, sürekli uygularız:
//!
//!   · Windows: `EmptyWorkingSet` — SADECE kendi sürecimiz + onun TÜM alt
//!     süreçleri (msedgewebview2 ağacı). Başka hiçbir uygulamaya dokunulmaz.
//!   · Linux: `malloc_trim` — kendi sürecimiz (glibc).
//!
//! NE ZAMAN: pencere odakta değilken (oyun önde, tepside, arkada) veya sistem
//! girdisi uzun süre boştayken. Odaktayken/kullanırken ASLA boşaltmayız —
//! böylece "hızından eksilme" olmaz; sayfalar gerektiğinde zaten diskten
//! geri gelir.
//!
//! SINIR: Linux'ta WebKit'in çocuk süreçlerini boşaltmak imkânsız
//! (`process_madvise` CAP_SYS_NICE ister); orada yalnız kendi sürecimiz.

use std::sync::atomic::{AtomicBool, Ordering};

/// Pencere odakta mı? (Tauri `WindowEvent::Focused` günceller.)
static ODAK: AtomicBool = AtomicBool::new(true);

/// Pencere odak durumunu bildir.
pub fn odak_ayarla(odakta: bool) {
    ODAK.store(odakta, Ordering::Relaxed);
}

// ---------------------------------------------------------------- Windows
#[cfg(windows)]
mod sys {
    use windows_sys::Win32::Foundation::CloseHandle;
    use windows_sys::Win32::System::Diagnostics::ToolHelp::{
        CreateToolhelp32Snapshot, Process32FirstW, Process32NextW, PROCESSENTRY32W,
        TH32CS_SNAPPROCESS,
    };
    use windows_sys::Win32::System::ProcessStatus::{
        EmptyWorkingSet, K32GetProcessMemoryInfo, PROCESS_MEMORY_COUNTERS,
    };
    use windows_sys::Win32::System::SystemInformation::GetTickCount;
    use windows_sys::Win32::System::Threading::{
        OpenProcess, PROCESS_QUERY_INFORMATION, PROCESS_SET_QUOTA,
    };
    use windows_sys::Win32::UI::Input::KeyboardAndMouse::{GetLastInputInfo, LASTINPUTINFO};

    /// Bu sürecin kendisi + tüm alt süreçleri (WebView2 ağacı).
    fn torunlar() -> Vec<u32> {
        let mut sonuc = vec![std::process::id()];
        let mut ciftler: Vec<(u32, u32)> = Vec::new();
        unsafe {
            let snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
            if snap.is_null() || snap as isize == -1 {
                return sonuc;
            }
            let mut giris: PROCESSENTRY32W = std::mem::zeroed();
            giris.dwSize = std::mem::size_of::<PROCESSENTRY32W>() as u32;
            if Process32FirstW(snap, &mut giris) != 0 {
                loop {
                    ciftler.push((giris.th32ProcessID, giris.th32ParentProcessID));
                    if Process32NextW(snap, &mut giris) == 0 {
                        break;
                    }
                }
            }
            CloseHandle(snap);
        }
        let mut i = 0;
        while i < sonuc.len() {
            let ebeveyn = sonuc[i];
            for (pid, ppid) in &ciftler {
                if *ppid == ebeveyn && !sonuc.contains(pid) {
                    sonuc.push(*pid);
                }
            }
            i += 1;
        }
        sonuc
    }

    fn mb(pid: u32) -> f64 {
        unsafe {
            let h = OpenProcess(PROCESS_QUERY_INFORMATION, 0, pid);
            if h.is_null() {
                return 0.0;
            }
            let mut sayac: PROCESS_MEMORY_COUNTERS = std::mem::zeroed();
            sayac.cb = std::mem::size_of::<PROCESS_MEMORY_COUNTERS>() as u32;
            let ok = K32GetProcessMemoryInfo(h, &mut sayac, sayac.cb);
            CloseHandle(h);
            if ok == 0 {
                0.0
            } else {
                sayac.WorkingSetSize as f64 / 1_048_576.0
            }
        }
    }

    /// Kendi süreç ağacımızın toplam çalışma kümesi (MB).
    pub fn toplam_mb() -> f64 {
        torunlar().iter().map(|p| mb(*p)).sum()
    }

    /// Sistemdeki son girdiden bu yana geçen süre (ms).
    pub fn bos_ms() -> u64 {
        unsafe {
            let mut lii = LASTINPUTINFO {
                cbSize: std::mem::size_of::<LASTINPUTINFO>() as u32,
                dwTime: 0,
            };
            if GetLastInputInfo(&mut lii) == 0 {
                return u64::MAX;
            }
            (GetTickCount().wrapping_sub(lii.dwTime)) as u64
        }
    }

    /// Çalışma kümelerini boşalt: (boşaltılan süreç, önce MB, sonra MB)
    pub fn bosalt() -> (usize, f64, f64) {
        let liste = torunlar();
        let once: f64 = liste.iter().map(|p| mb(*p)).sum();
        let mut adet = 0usize;
        for pid in &liste {
            unsafe {
                let h = OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_SET_QUOTA, 0, *pid);
                if !h.is_null() {
                    if EmptyWorkingSet(h) != 0 {
                        adet += 1;
                    }
                    CloseHandle(h);
                }
            }
        }
        let sonra: f64 = liste.iter().map(|p| mb(*p)).sum();
        (adet, once, sonra)
    }
}

// ---------------------------------------------------------------- Linux
#[cfg(unix)]
mod sys {
    use std::io::Read;

    #[cfg(target_env = "gnu")]
    extern "C" {
        fn malloc_trim(padding: usize) -> i32;
    }

    /// Kendi sürecimizin RSS'i (MB) — /proc/self/status.
    pub fn toplam_mb() -> f64 {
        let mut s = String::new();
        if let Ok(mut f) = std::fs::File::open("/proc/self/status") {
            let _ = f.read_to_string(&mut s);
        }
        for satir in s.lines() {
            if let Some(v) = satir.strip_prefix("VmRSS:") {
                let kb: f64 = v
                    .trim()
                    .trim_end_matches("kB")
                    .trim()
                    .parse()
                    .unwrap_or(0.0);
                return kb / 1024.0;
            }
        }
        0.0
    }

    /// Linux'ta sistem girdisi boşta ölçümü yok → pencere odağına güveniriz.
    pub fn bos_ms() -> u64 {
        0
    }

    pub fn bosalt() -> (usize, f64, f64) {
        let once = toplam_mb();
        #[cfg(target_env = "gnu")]
        unsafe {
            malloc_trim(0);
        }
        (1, once, toplam_mb())
    }
}

/// Ölçüm/kayıt için: bu süreç ağacının toplam çalışma kümesi (MB).
pub fn toplam_mb() -> f64 {
    sys::toplam_mb()
}

/// Boşaltmayı denetleyen arka plan işi — TEK KEZ başlar.
///
/// Kural: pencere odakta değilse (10 sn'den uzun) veya sistem girdisi 25 sn
/// boyunca boşsa çalışma kümelerini boşalt. Odaktayken dokunulmaz.
pub fn basla() {
    std::thread::spawn(|| {
        let mut odaksiz_tick = 0u32;
        let mut son_kayit = std::time::Instant::now();
        loop {
            std::thread::sleep(std::time::Duration::from_secs(10));
            if ODAK.load(Ordering::Relaxed) {
                odaksiz_tick = 0;
            } else {
                odaksiz_tick += 1;
            }
            let sistem_bos = sys::bos_ms() >= 25_000;
            if odaksiz_tick < 1 && !sistem_bos {
                continue;
            }
            let (adet, once, sonra) = sys::bosalt();
            // Kayıt spam'i olmasın: yalnız 2 MB'dan fazla kazanç varsa yaz.
            if once - sonra >= 2.0 && son_kayit.elapsed().as_secs() >= 60 {
                son_kayit = std::time::Instant::now();
                crate::core::yikim_log(format!(
                    "bellek: {adet} süreç boşaltıldı, {:.0} MB → {:.0} MB",
                    once, sonra
                ));
            }
        }
    });
}

#[cfg(test)]
mod testler {
    /// Gerçek FFI doğrulaması: bu süreç ağacı boşaltılabiliyor mu?
    #[test]
    fn bosaltma_calisiyor() {
        let once = super::toplam_mb();
        let (adet, _, sonra) = super::sys::bosalt();
        println!("bellek testi: {adet} süreç, {once:.1} MB → {sonra:.1} MB");
        assert!(adet >= 1, "hiçbir süreç boşaltılamadı");
        assert!(sonra <= once + 1.0, "boşaltma sonrası bellek arttı: {sonra} > {once}");
    }
}
