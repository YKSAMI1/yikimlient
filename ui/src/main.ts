import "./theme.css";
import "./app.css";
import "./pages.css";
import "./system-ui.css";
import "./world-afis.css";
import "./world-layouts.css";
import "./world-extra.css";
import "@fontsource/silkscreen/400.css";
import "@fontsource/silkscreen/700.css";
import "@fontsource/silkscreen/latin-ext-400.css";
import "@fontsource/silkscreen/latin-ext-700.css";
import { registerPages } from "./pages";
import { startDropWatcher } from "./drop";
import { maybeStartTour } from "./tour";
import { maybeStartOnboarding } from "./onboarding";
import { applyFx } from "./fx";
import { applyCursor } from "./cursor";
import { WINDOW_CONTROLS, icon, ICONS } from "./icons";
import { cascadeText, enterRows, enterStage, exitStage, switchPress } from "./motion";
export { icon };
export { switchPress, enterStage };

// ---------- Tauri API (global window.__TAURI__ üzerinden, withGlobalTauri) ----------
declare global {
  interface Window {
    __TAURI__: any;
    __TAURI_INTERNALS__: any;
  }
}

const T = window.__TAURI__;
const core = T.core;
const ev = T.event;

export const invoke = (cmd: string, args: Record<string, unknown> = {}) =>
  core.invoke(cmd, args);
/// Yerel dosyayı webview'de gösterilecek URL'ye çevir (asset protocol)
export const fileSrc = (path: string): string =>
  (window.__TAURI_INTERNALS__ as any).convertFileSrc(path);
export const listen = (event: string, handler: (e: any) => void) =>
  ev.listen(event, handler);

/// Kırık görsel fallback'i: img yerine aynı boyutlu SVG ikon koy.
/// Kullanım: <img onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')">
(window as any).__iconFallback = (img: HTMLImageElement, cls: string, name: string) => {
  const span = document.createElement("span");
  span.className = cls;
  span.innerHTML = ICONS[name] || ICONS.info;
  img.replaceWith(span);
};

// Plugin JS'leri global bundle'da gelmez → doğrudan komut çağırıyoruz.
export const openExternal = (url: string): Promise<void> =>
  invoke("plugin:opener|open_url", { url });
export const openPath = (path: string): Promise<void> =>
  invoke("plugin:opener|open_path", { path });

// ---------- Durum ----------
export interface YikimState {
  config: any;
  accounts: { id: string; name: string; kind: string; uuid: string }[];
  instances: any[];
  featured_versions: string[];
  curseforge: boolean;
  sys: any;
}

export const state: YikimState = {
  config: null,
  accounts: [],
  instances: [],
  featured_versions: [],
  curseforge: false,
  sys: null,
};

export async function refreshState(rerender = false): Promise<void> {
  const s = await invoke("cmd_get_state");
  state.config = s.config;
  state.accounts = s.accounts;
  state.instances = s.instances;
  state.featured_versions = s.featured_versions;
  state.curseforge = s.curseforge;
  state.sys = s.sys;
  applyWorld();
  renderAccountPill();
  if (rerender) navigate(currentPage); // açık sayfayı anında tazele (ikon/kapak vb.)
}

// Eski isim uyumluluğu (sayfalar çağırıyorsa)
const renderUserCard = renderAccountPill;

/* ------------------------------------------------------------
   DÜNYA MOTORU
   config.theme artık bir DÜNYA adı: pano | sokum | anons | standart | custom
   Eski değerler eşlenir: dark→standart, neon→anons, light→pano.
   custom: pano zemini + kullanıcının vurgu rengi.
   ------------------------------------------------------------ */
export function applyWorld(): void {
  if (!state.config) return;
  const t = state.config.theme as string;
  const root = document.documentElement;
  const legacy: Record<string, string> = { dark: "standart", neon: "pano", light: "pano", orange: "sahne", anons: "pano" };
  // "custom" eski bir değer: pano dünyasında yaşar; bilinmeyen/ayboş → sahne (varsayılan)
  const world = t === "custom" ? "pano" : (legacy[t] ?? t) || "sahne";

  // Özel vurgu rengi: boş değilse HANGİ dünyada olursa olsun vurguları boyar
  const accent = (state.config.custom_accent || "").trim();
  root.setAttribute("data-world", world);
  if (accent && /^#[0-9a-fA-F]{3,8}$/.test(accent)) {
    root.setAttribute("data-world-custom", "1");
    root.style.setProperty("--custom-accent", accent);
  } else {
    root.removeAttribute("data-world-custom");
    root.style.removeProperty("--custom-accent");
  }
  // Ambiens parçacıklar + özel imleç — dünyaya ve ayarlara bağlı
  applyFx();
  applyCursor();
}

// Geriye dönük uyumluluk: settings.ts eski adı çağırıyorsa
export const applyTheme = applyWorld;

// ---------- Hesap & oyuncu kafası ----------

export function currentAccount() {
  return state.accounts.find((a) => a.id === state.config?.last_selected_account)
    || state.accounts[0] || null;
}

/// Minecraft skin yüzü — isim ile gerçek skin servisleri, en son crafatar UUID fallback:
/// Tümü: mc-heads (isim) → visage (isim) → [MS: crafatar (uuid) | offline: steve]
export function headUrl(acc: { kind: string; uuid: string; name: string }): string {
  const n = encodeURIComponent(acc.name);
  return `https://mc-heads.net/avatar/${n}/64`;
}

export function headFallbackUrl(acc: { kind: string; uuid: string; name: string }): string {
  const n = encodeURIComponent(acc.name);
  return acc.kind === "microsoft"
    ? `https://visage.surgeplay.com/head/64/${n}`
    : `https://crafatar.com/avatars/${acc.uuid}?overlay&size=64`;
}

/// onerror zinciri için hazır HTML attr (3 kaynak: url → fallback → gizle)
export function headAttrs(acc: { kind: string; uuid: string; name: string }): string {
  const fb1 = headFallbackUrl(acc);
  const fb2 = acc.kind === "microsoft"
    ? `https://crafatar.com/avatars/${acc.uuid}?overlay&size=64`
    : "";
  return `onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${fb1}'}${
    fb2 ? `else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${fb2}'}` : ""
  }else{this.style.visibility='hidden'}"`;
}

// Üst bar hapları kaldırıldı; fonksiyon geriye dönük uyumluluk için no-op
export function updateRamPill(): void {
  const elp = document.getElementById("pill-ram");
  if (!elp || !state.sys) return;
  const inst = state.instances[0];
  const allocMb = inst?.ram_mb || state.config?.default_ram_mb || 4096;
  const totalMb = state.sys.total_ram_mb || 16384;
  const pct = Math.min(100, Math.round((allocMb / totalMb) * 100));
  // kaskad sayaç: değer değişince hücresinde kayar, satır zıplamaz
  const val = elp.querySelector("#ram-pill-val") as HTMLElement | null;
  const next = `${(allocMb / 1024).toFixed(1)} GB`;
  if (val) cascadeText(val, next);
  else elp.innerHTML = `RAM <b id="ram-pill-val">${next}</b>&nbsp;/ ${(totalMb / 1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${pct / 100})"></span></span>`;
  const bar = elp.querySelector<HTMLElement>(".ram-bar > span");
  if (bar) bar.style.transform = `scaleX(${pct / 100})`;
}

// ---------- Mini yardımcılar ----------
export const $ = (sel: string): HTMLElement | null => document.querySelector(sel);
export function el(html: string): HTMLElement {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
}
export function fmtBytes(n: number): string {
  if (!n) return "0 B";
  const u = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(n) / Math.log(1024)), 3);
  return `${(n / 1024 ** i).toFixed(i ? 1 : 0)} ${u[i]}`;
}
export function fmtDuration(ms: number): string {
  const mins = Math.floor(ms / 60000);
  if (mins < 60) return `${mins} dk`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h < 24) return m ? `${h} sa ${m} dk` : `${h} sa`;
  const d = Math.floor(h / 24);
  return `${d} gün ${h % 24} sa`;
}
export function fmtSpeed(bps: number): string {
  return bps > 0 ? `${(bps / 1048576).toFixed(1)} MB/s` : "";
}

/// Pilot lambası HTML'i — durum: ok (hazır) | warn (meşgule) | err | off
export function lamp(s: "ok" | "warn" | "err" | "off" = "ok", cls = ""): string {
  return `<span class="lamp ${s} ${cls}" aria-hidden="true"></span>`;
}

/// Oynanan kurulum (varsa) — lambalar warn yanar
export const launch: { activeId: string | null } = { activeId: null };

// ---------- Toast ----------
export function toast(msg: string, kind: "ok" | "err" = "ok"): void {
  const t = el(`<div class="toast ${kind}" role="status">${msg}</div>`);
  document.body.appendChild(t);
  setTimeout(() => t.classList.add("show"), 10);
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 3200);
}

// ---------- Modal ----------
export function openModal(contentHtml: string): { root: HTMLElement; close: () => void } {
  const backdrop = el(`<div class="modal-backdrop"><div class="modal">${contentHtml}</div></div>`);
  document.body.appendChild(backdrop);
  const close = () => backdrop.remove();
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });
  return { root: backdrop.firstElementChild as HTMLElement, close };
}

// ---------- Sayfa yönetimi ----------
export const pages: Record<string, (root: HTMLElement) => void> = {};
export const nav: { param?: string } = {};
let activeNav = "home";
export let currentPage = "home";

export function navigate(page: string, param?: string): void {
  const root = $("#content");
  if (!root) return;
  currentPage = page;
  activeNav = page;
  nav.param = param;
  document.querySelectorAll(".rail-item").forEach((n) => {
    n.classList.toggle("active", (n as HTMLElement).dataset.page === activeNav);
  });
  // kısa çıkış sahnesi → temizle → çiz → giriş sahnesi
  exitStage(root, () => {
    root.innerHTML = "";
    const fn = pages[page];
    if (fn) fn(root);
    enterStage(root);
  });
}

// ---------- Kabuk: ikon rayı + üst bar ----------
const RAIL = [
  { page: "home", icon: "home", label: "Ana Sayfa" },
  { page: "instances", icon: "grid", label: "Paketler" },
  { page: "explore", icon: "compass", label: "Keşfet" },
  { page: "news", icon: "news", label: "Haberler" },
  { page: "deneme", icon: "play", label: "Deneme Alanı" },
  { page: "settings", icon: "gear", label: "Ayarlar" },
];

export function setupShell(): void {
  const app = $("#app");
  if (!app) return;
  app.innerHTML = `
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${WINDOW_CONTROLS.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${WINDOW_CONTROLS.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${WINDOW_CONTROLS.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${RAIL.map((r) => `
          <button class="rail-item" data-page="${r.page}">
            ${icon(r.icon, "ri-icon")}
            <span class="ri-label">${r.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;

  const win = T.window;
  const w = win.getCurrentWindow();
  $("#tb-min")?.addEventListener("click", () => w.minimize());
  $("#tb-max")?.addEventListener("click", () => w.toggleMaximize());
  // Oyun çalışırken X = KÜÇÜLT (uygulama hayatta kalır: restart/perde akışı ve
  // oyunun yeniden başlatılması buna bağlı; görev çubuğundan geri açılır).
  // Oyun kapalıyken normal kapat.
  const closeOrKeepAlive = () => {
    if (launch.activeId) {
      w.minimize();
      toast("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");
      return;
    }
    w.close();
  };
  $("#tb-close")?.addEventListener("click", closeOrKeepAlive);
  // Alt+F4 / görev çubuğu kapatması da aynı kurala düşsün
  try {
    w.onCloseRequested((e: any) => {
      if (launch.activeId) {
        e?.preventDefault?.();
        w.minimize();
        toast("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");
      }
    });
  } catch { /* eski API ise boşver */ }

  // Maximize durumuna göre □ / ❐ glifi değişsin (Windows davranışı)
  // DİKKAT: TauriEvent enum'u T.event'te yaşar; T.window'tan erişilmeye çalışılırsa
  // TypeError fırlar ve setupShell yarıda kalır (boot çöker → boş ekran).
  try {
    const maxBtn = $("#tb-max");
    const setMaxGlyph = (maximized: boolean) => {
      if (!maxBtn) return;
      maxBtn.innerHTML = maximized ? WINDOW_CONTROLS.restore : WINDOW_CONTROLS.max;
      maxBtn.title = maximized ? "Geri Yükle" : "Ekranı Kapla";
      maxBtn.setAttribute("aria-label", maxBtn.title);
    };
    const syncGlyph = () => {
      void w.isMaximized().then(setMaxGlyph).catch(() => {});
    };
    if (typeof (w as any).onResized === "function") {
      (w as any).onResized(syncGlyph);
    } else if (T.event?.listen) {
      void T.event.listen("tauri://resize", syncGlyph);
    }
    syncGlyph();
  } catch { /* pencere olayları desteklenmezse glif □ kalır — sorun değil */ }

  document.querySelectorAll(".rail-item").forEach((n) => {
    n.addEventListener("click", () => navigate((n as HTMLElement).dataset.page!));
  });

  renderAccountPill();
  $("#rail-account")?.addEventListener("click", () => {
    if (state.accounts.length) navigate("settings");
    else openLoginModal();
  });

  // açılış sahnesi: rail soldan devreye girer (tek seferlik)
  enterRows(Array.from(document.querySelectorAll(".rail-item")));
}

export function renderAccountPill(): void {
  // Sol rayın en altındaki hesap bloğu (kurulum sayısı gösterilmez)
  const pill = $("#rail-account");
  if (!pill) return;
  const acc = currentAccount();
  if (!acc) {
    pill.innerHTML = `<span class="ra-head ph">${icon("user")}</span><span class="ra-name">Giriş yap</span>`;
    return;
  }
  pill.innerHTML = `
    <img class="ra-head" src="${headUrl(acc)}" draggable="false" ${headAttrs(acc)} />
    <span class="ra-name">${acc.name}</span>
    <span class="pa-dot on"></span>`;
}

// ---------- Giriş modalı (offline + MS device code) ----------
export function openLoginModal(): void {
  const { root, close } = openModal(`
    <h2>Hesap Girişi</h2>
    <div class="sub">Microsoft hesabınla gir ya da çevrimdışı oyna.</div>
    <div style="display:flex; flex-direction:column; gap:14px;">
      <div>
        <label style="font-size:12px; color:var(--text-dim)">Offline Kullanıcı Adı</label>
        <div style="display:flex; gap:8px; margin-top:6px;">
          <input class="input" id="off-name" placeholder="OyuncuAdı" maxlength="16" />
          <button class="btn" id="off-go">Giriş</button>
        </div>
      </div>
      <div class="or-divider"><span>veya</span></div>
      <button class="btn primary lg" id="ms-go">${icon("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `);
  root.querySelector("#off-go")?.addEventListener("click", async () => {
    const name = (root.querySelector("#off-name") as HTMLInputElement).value.trim();
    if (name.length < 3) return toast("İsim en az 3 karakter olmalı", "err");
    try {
      await invoke("cmd_add_offline_account", { name });
      await refreshState();
      renderUserCard();
      toast(`Hoş geldin, ${name}!`);
      close();
    } catch (e) {
      toast(String(e), "err");
    }
  });
  root.querySelector("#ms-go")?.addEventListener("click", async () => {
    const status = root.querySelector("#ms-status") as HTMLElement;
    const btn = root.querySelector("#ms-go") as HTMLButtonElement;
    btn.disabled = true;
    status.style.display = "block";
    status.innerHTML = `<span class="spinner"></span> Microsoft oturum penceresi açılıyor…`;
    try {
      const acc = await invoke("cmd_ms_login_begin");
      await refreshState();
      renderUserCard();
      toast(`Hoş geldin, ${acc.name}!`);
      close();
    } catch (e) {
      status.textContent = String(e);
      btn.disabled = false;
    }
  });
}

// ---------- Başlatma akışı (progress modal) ----------
let launchSeq = 0;
export async function launchInstance(instanceId: string): Promise<void> {
  if (!state.accounts.length) {
    openLoginModal();
    return;
  }
  // ÇİFT BAŞLATMA KORUMASI: oyun zaten çalışıyorsa veya açılıyorsa yeni başlatma yok
  if (launch.activeId) {
    toast("Oyun zaten açık — önce mevcut oyunu kapat", "err");
    return;
  }
  const seq = ++launchSeq;
  launch.activeId = instanceId;
  const { root, close } = openModal(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `);
  const bar = root.querySelector("#lp-bar") as HTMLElement;
  const stage = root.querySelector("#lp-stage") as HTMLElement;
  const detail = root.querySelector("#lp-detail") as HTMLElement;
  const logs = root.querySelector("#lp-logs") as HTMLElement;
  const off1 = await listen("launch-progress", (e: any) => {
    if (seq !== launchSeq) return;
    const p = e.payload;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p.percent / 100))})`;
    stage.textContent = stageName(p.stage);
    detail.textContent = p.detail || "";
  });
  const off2 = await listen("game-log", (e: any) => {
    if (seq !== launchSeq) return;
    logs.style.display = "block";
    const line = document.createElement("div");
    line.textContent = e.payload;
    logs.appendChild(line);
    logs.scrollTop = logs.scrollHeight;
    if (logs.children.length > 200) logs.firstElementChild?.remove();
  });
  const off3 = await listen("game-exit", (e: any) => {
    if (seq !== launchSeq) return;
    launch.activeId = null;
    const code = e.payload?.exit_code ?? e.payload?.code ?? -1;
    if (code === 0) {
      stage.textContent = "Oyun kapatıldı";
      setTimeout(close, 1200);
    } else {
      stage.textContent = `Oyun hata ile kapandı (kod ${code})`;
      detail.textContent = "Canlı logdan detayları görebilirsin.";
    }
  });
  const cleanup = () => { off1(); off2(); off3(); };
  const mo = new MutationObserver(() => {
    if (!document.body.contains(root)) { cleanup(); mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true });

  try {
    await invoke("cmd_launch_instance", { instanceId });
    // Oyun süreci başarıyla başladı → modal açık kalmasın.
    // (Eskiden yalnızca 'game-exit'te kapanıyordu; oyun çalıştığı sürece ekranda kalıyordu.)
    stage.textContent = "Oyun çalışıyor";
    detail.textContent = "İyi oyunlar!";
    bar.style.transform = "scaleX(1)";
    setTimeout(() => {
      cleanup();
      close();
    }, 1500);
    // rerender=true: kartlarda "Durdur" butonu ve "oynuyor" etiketi anında çıksın
    await refreshState(true);
  } catch (e) {
    launch.activeId = null;
    stage.textContent = "Başlatılamadı";
    detail.textContent = String(e);
    detail.style.color = "var(--danger)";
  }
}

function stageName(s: string): string {
  return ({
    manifest: "Sürüm bilgisi",
    download: "Dosyalar indiriliyor",
    java: "Java hazırlanıyor",
    mods: "Modlar hazırlanıyor",
    modpack: "Mod paketi kuruluyor",
    starting: "Başlatılıyor",
  } as Record<string, string>)[s] || s;
}

// Oyun kapandı → arayüzü tazele. Restart akışı Rust çekirdeğinde yürür.
// "game-started" = restart sonrası yeni oyun süreci → Play kilitli kalmalı
// "game-exit" yalnızca NORMAAL kapanışta activeId'i temizler.
let restartInProgress = false;
listen("curtain-status", (e: any) => {
  if (e.payload?.phase === "started") (window as any).__yikimRestart = true;
  if (e.payload?.phase === "closed") (window as any).__yikimRestart = false;
});

listen("game-started", (e: any) => {
  // restart sonrası yeni oyun süreci → Play kilitli kalsın
  launch.activeId = e.payload;
  void refreshState(true);
});

listen("game-exit", async () => {
  // restart akışı devam ediyorsa activeId'i TEMİZLEME — oyun geri açılacak
  if ((window as any).__yikimRestart) return;
  launch.activeId = null;
  void refreshState(true);
});

// Global event'ler (mod kurulum + standart modlar bildirimleri)
listen("mod-install-progress", (e: any) => {
  const p = e.payload;
  if (p.phase === "done") toast(`Kuruldu: ${p.filename}`);
  if (p.phase === "error") toast(`Hata: ${p.filename}`, "err");
});
// Standart modlar canlı kurulum paneli: her indirilen mod anında listede görünür.
let smPanel: HTMLElement | null = null;
let smHideTimer: ReturnType<typeof setTimeout> | undefined;
listen("standard-mods-progress", (e: any) => {
  const p = e.payload;
  if (!p.total) return;
  if (!smPanel || !document.body.contains(smPanel)) {
    smPanel = document.createElement("div");
    smPanel.className = "sm-panel";
    smPanel.innerHTML = `
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `;
    document.body.appendChild(smPanel);
  }
  clearTimeout(smHideTimer);
  const count = smPanel.querySelector("#sm-count") as HTMLElement;
  const fill = smPanel.querySelector("#sm-fill") as HTMLElement;
  const list = smPanel.querySelector("#sm-list") as HTMLElement;
  count.textContent = `${p.done}/${p.total}`;
  fill.style.transform = `scaleX(${Math.min(1, p.done / p.total)})`;
  if (p.current) {
    const row = document.createElement("div");
    row.className = "sm-row done";
    row.textContent = `✓ ${p.current}`;
    list.appendChild(row);
    while (list.children.length > 8) list.firstElementChild?.remove();
    list.scrollTop = list.scrollHeight;
  }
  if (p.done >= p.total) {
    (smPanel.querySelector(".sm-title") as HTMLElement).textContent = "Standart modlar hazır";
    smHideTimer = setTimeout(() => { smPanel?.remove(); smPanel = null; }, 4000);
  }
});
// mod-install-progress: standart kurulum sırasında indirme başlangıçlarını da listeye yaz
listen("mod-install-progress", (e: any) => {
  const p = e.payload;
  if (p.phase !== "done" || !smPanel) return;
  // "✓ <ad>" satırları standard-mods-progress'ten geliyor; tekil kurulumlarda sessiz kal
});

// ---------- Başlangıç ----------
export async function boot(): Promise<void> {
  try {
    await refreshState();
    registerPages();
    setupShell();
    navigate("home");
    // Sürükle-bırak + ilk kurulum sihirbazı + (o oynanmadıysa) rehber tur
    startDropWatcher();
    if (!maybeStartOnboarding()) maybeStartTour();
    // Otomatik güncelleme kontrolü (imzalı; GitHub releases'ten) — sessiz kontrol,
    // güncelleme varsa kullanıcıya sorar, hata asla açılışı bozmaz.
    void checkForUpdate();
  } catch (e) {
    fatalBoot(e);
  }
}

/// GitHub'dan yeni sürüm kontrolü → varsa "indir ve kur" onayı.
/// İmza doğrulaması Tauri updater içinde: geçersiz imza = kurulum REDDEDİLİR.
async function checkForUpdate(): Promise<void> {
  try {
    const mod = await import("@tauri-apps/plugin-updater");
    const update = await mod.check();
    if (!update?.available) return;
    const { root, close } = openModal(`
      <h2>Güncelleme Var</h2>
      <div class="sub">YIKIMLient <b>v${update.version}</b> hazır. Değişiklik notları:</div>
      <div style="margin:12px 0; max-height:180px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
        ${(update.body || "Değişiklik notu yok.").split("\n").map((l: string) => `<div>${l}</div>`).join("")}
      </div>
      <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
        <button class="btn ghost" id="upd-later">Sonra</button>
        <button class="btn primary" id="upd-go">İndir ve Kur</button>
      </div>
    `);
    root.querySelector("#upd-later")?.addEventListener("click", () => close());
    root.querySelector("#upd-go")?.addEventListener("click", async () => {
      const btn = root.querySelector("#upd-go") as HTMLButtonElement;
      btn.disabled = true;
      btn.textContent = "İndiriliyor…";
      try {
        let received = 0;
        let total = 0;
        await update.download((event: any) => {
          switch (event.event) {
            case "Started": total = event.data.contentLength ?? 0; break;
            case "Progress": received += event.data.chunkLength; break;
            case "Finished": btn.textContent = "Kuruluyor…"; break;
          }
          if (total > 0) btn.textContent = `İndiriliyor… %${Math.round((received / total) * 100)}`;
        });
        await update.install();
        toast("Güncelleme kuruldu — launcher yeniden başlıyor");
        setTimeout(() => { try { T.process.exit(0); } catch { window.location.reload(); } }, 900);
      } catch (e) {
        btn.disabled = false;
        btn.textContent = "İndir ve Kur";
        toast(`Güncelleme başarısız: ${e}`, "err");
      }
    });
  } catch {
    // güncelleme kontrolü sessizce atlanır (çevrimdışı / endpoint yok) — boot bozulmaz
  }
}

/// Açılış patlarsa ölü siyah pencere yerine hatayı EKRANDA göster.
function fatalBoot(e: unknown): void {
  const app = document.getElementById("app");
  const msg = e instanceof Error ? (e.stack || e.message) : String(e);
  console.error("boot hatası:", e);
  if (app) {
    app.innerHTML = `
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${msg}</pre>
      </div>`;
  }
}

boot();
