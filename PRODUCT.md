# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vanilla TypeScript + Vite, framework yok. Tauri 2 (Rust backend) webview'inde `withGlobalTauri` global bundle ile çalışır. GSAP bağımlılığı eklenecek (kullanıcı onayladı). UI'da Tauri API'si `window.__TAURI__` üzerinden çağrılır.

## Users

Türkiye'deki Minecraft oyuncuları (12-25 yaş ağırlıklı). Tek oturumda işleri: launcher'ı aç, (gerekirse) hesap gir, mod paketi seç/kur, OYNA'ya bas, oyunu kapat. Çoğu bilgisayar bilgisi düşük; launcher'ı "öğrenmeden" kullanabilmeli. Launcher'ı kısa süreli, yüksek frekanslı kullanırlar (günde 1-3 kez, oyun açılana kadar).

## Product Purpose

YIKIMLient: ultra-hafif Minecraft launcher (Electron'suz, Tauri 2 + Rust). Ne yapar: Microsoft + offline giriş, mod paketi kurulumu, modpack keşfi (Modrinth/CurseForge), sürüm yönetimi, Java'yı kullanıcıya göstermeden halletme. Başarı = kullanıcı 30 saniyeden kısa sürede "OYNA"ya basabilsin ve oyun hiç çökmesin.

## Positioning

Ana mekanizma: ~3MB kurulum (rakiplerin launcher'ları yüzlerce MB) + gömülü "YIKIM çekirdeği" performans modu (kendi ana menüsü ve Right-Shift paneli olan in-game mod, v1.3.1) standart modlarla birlikte otomatik kurulur. Rakip kopyalayamaz taraf: Rust tabanlı minimalite + gömülü performans çekirdeğinin tek tıkla gelmesi.

## Operating Context

- Windows 10/11 masaüstü, çoğunlukla tek monitör, oyun açılmadan önce kullanım.
- Veri dizini `%APPDATA%/.yikimlient/` (instances, versions, accounts.json, config.json).
- Özel pencere çerçevesi (decorations:false) — kendi titlebar'ı var; WinUI pencere düğmeleri (min/max/close) birebir Windows ölçüsünde.
- Tema ayarı config'den gelir: orange (varsayılan), dark, neon, light, custom accent.
- Türkiyede internet hızları değişken; indirme durumları (MB/s, %) canlı gösterilir.

## Capabilities and Constraints

- Onaylı yetenekler: sol ray navigasyonu (Ana Sayfa, Paketler, Keşfet, Haberler, Ayarlar), instance sihirbazı, mod paketi dosya kurulumu, keşif arama, haber listesi, ayarlar, canlı başlatma ilerlemesi (aşama + % + log), hesap pill'i, RAM pill'i.
- Kısıt: framework yok (vanilla TS), string-template ile DOM üretimi; sayfalar `pages/` dizininde kayıtlı.
- Karar verilmemiş: tek pencere mi kalır, promo/haber bölümlerinin içerik kaynağı. (UI redesign bunları değiştirebilir ama sayfa seti ve veri akışı korunur.)

## Brand Commitments

- İsim: YIKIMLient ("YIKIM" = yıkım; güç/yıkım çağrışımı, "Lient" ek suffix).
- Renk bağlayıcı: **turuncu + siyah** (kullanıcı kararı: yeni dünya kurulacak ama turuncu/siyah marka renkleri dokunulmaz).
- Karakter bağlayıcı (kullanıcı kararı): profesyonel araç tonu — Arc/Linear gibi sakin, karanlık, yoğun ve malzeme kalitesi yüksek; "yapay zeka dashboard'u" hissi yasak.
- Logo: `/logo.png` (turuncu Y), titlebar + rail'de kullanılır.

## Evidence on Hand

- Mevcut UI kodu (ui/src): 5 sayfa, rail navigasyonu, pill'ler, modal'lar — çalışıyor.
- Gömülü mod jar'ları ve manifest (src-tauri/resources/mods/).
- Kullanıcının eski client'ı (Desktop/YIKIMLient/) — arşiv jar'lar.

## Product Principles

1. **Hız hissi**: her etkileşim anında cevap verir; beklemeler canlı ve dürüst gösterilir.
2. **Karışıklık yok**: ekranda tek birincil eylem (OYNA); gerisin gerisi ikincil.
3. **Windows'a ait**: WinUI ölçüleri, karanlık ortam, oyun estetiğine yabancılaşmayan ama oyuncak gibi durmayan malzeme.
4. **Dürüst durumlar**: hata/indirme/kurulum asla gizlenmez, aynı zamanda asla panik yaratmaz.

## Accessibility & Inclusion

Karanlık ortamda uzun kullanım: düşük kontrast parlaması yerine tam kontrast metin; klavye ile erişilebilir kontroller; `prefers-reduced-motion` desteklenir.
