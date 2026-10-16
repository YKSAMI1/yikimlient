import { el, fmtBytes, fmtDuration, fileSrc, icon, invoke, lamp, launch, listen, nav, navigate, openLoginModal, state, toast } from "../main";
import { enterRows } from "../motion";
import { loaderIcon } from "../loader-icons";

let selectedId: string | null = null;

/// Kapak render — MP4/GIF (animasyonlu) + PNG/JPG (statik).
/// MP4: <video> ile sonsuz döngü, sessiz, ekran dolduran.
/// GIF: <img> (tarayıcı natif döngü yapar).
/// Optimizasyon: IntersectionObserver — ekranda DEĞİLSE video dururulur.
function renderCover(cover: string): string {
  const src = fileSrc(cover);
  const lower = cover.toLowerCase();
  if (lower.endsWith(".mp4") || lower.endsWith(".webm")) {
    return `<div class="inst-cover video-cover"><video src="${src}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`;
  }
  if (lower.endsWith(".gif")) {
    return `<div class="inst-cover gif-cover"><img src="${src}" draggable="false" alt="" /></div>`;
  }
  return `<div class="inst-cover" style="background-image:url('${src}')"></div>`;
}

/// Ekranda görünmeyen MP4'leri durdur — CPU/RAM tasarrufu.
function optimizeVideos(root: HTMLElement): void {
  const videos = root.querySelectorAll(".video-cover video");
  if (!videos.length) return;
  const obs = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const v = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }
  }, { threshold: 0.05 });
  videos.forEach((v) => obs.observe(v));
}

export function renderInstances(root: HTMLElement): void {
  // "Kurulumu Yönet" gibi dış bağlantılarla gelindiyse hedefi al
  if (nav.param && state.instances.find((i) => i.id === nav.param)) {
    selectedId = nav.param;
    nav.param = undefined;
    renderDetail(root, selectedId);
    return;
  }
  if (selectedId && state.instances.find((i) => i.id === selectedId)) {
    renderDetail(root, selectedId);
    return;
  }
  renderGrid(root);
}

function renderGrid(root: HTMLElement): void {
  root.innerHTML = `
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title="Modrinth .mrpack veya CurseForge .zip paket dosyası içe aktar">${icon("box")} Paket İçe Aktar</button>
        <button class="btn primary" id="btn-new">${icon("plus")} Yeni Kurulum</button>
      </div>
    </div>
    <div class="inst-grid" id="inst-grid"></div>
    <div class="exp-popular" id="inst-popular">
      <div class="section-head">
        <h2 class="dim-cap">EN ÇOK İNDİRİLEN PAKETLER</h2>
      </div>
      <div class="popular-strip" id="popular-strip"><div class="spinner" style="margin:26px auto"></div></div>
    </div>
    </div>
  `;
  const grid = root.querySelector("#inst-grid") as HTMLElement;
  if (!state.instances.length) {
    grid.innerHTML = `
      <div class="empty-state">
        ${icon("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`;
    grid.querySelector("#empty-new")?.addEventListener("click", () => openCreateWizard());
  } else {
    for (const inst of state.instances) {
      const iconIsFile = inst.icon && (inst.icon.includes("/") || inst.icon.includes("\\"));
      const iconHtml = iconIsFile
        ? `<img src="${fileSrc(inst.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`
        : (inst.icon || "🔥");
      const playing = launch.activeId === inst.id;
      const card = el(`
        <div class="inst-card card hover ${inst.cover ? "has-cover" : ""}" data-id="${inst.id}" title="${inst.name} — yönet">
          ${inst.cover ? renderCover(inst.cover) : ""}
          <div class="inst-top">
            <div class="inst-icon">${iconHtml}</div>
            <div class="inst-info">
              <h3>${inst.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${loaderName(inst.mod_loader)} ${inst.mc_version}</span>
                ${playing ? `<span class="chip green">oynuyor</span>` : ""}
              </div>
            </div>
            ${lamp(playing ? "warn" : "ok", "card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${inst.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${inst.last_played ? new Date(inst.last_played).toLocaleDateString("tr-TR") : "hiç"}</span>
            <span title="Toplam süre">${fmtDuration(inst.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${launch.activeId ? "disabled" : ""}>
              ${launch.activeId ? `${icon("clock")} Açık` : `${icon("play")} Oyna`}
            </button>
            ${playing ? `<button class="btn danger card-stop" title="Oyunu kapat">${icon("stop")} Durdur</button>` : ""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);
      card.addEventListener("click", async (e) => {
        if ((e.target as HTMLElement).closest(".card-play")) {
          if (!state.accounts.length) return openLoginModal();
          const { launchInstance } = await import("../main");
          launchInstance(inst.id);
          return;
        }
        if ((e.target as HTMLElement).closest(".card-stop")) {
          try { await invoke("cmd_kill_game"); } catch { /* zaten kapalıysa sorun değil */ }
          const { refreshState } = await import("../main");
          await refreshState(true);
          return;
        }
        selectedId = inst.id;
        renderDetail(root, inst.id);
      });
      grid.appendChild(card);
    }
    enterRows(Array.from(grid.querySelectorAll(".inst-card")));
  optimizeVideos(grid); // ekranda olmayan videoları durdur
  }
  root.querySelector("#btn-new")?.addEventListener("click", () => openCreateWizard());
  root.querySelector("#btn-import")?.addEventListener("click", () => importPackFile().catch(() => {}));

  // Popüler mod paketleri — tıklayınca Keşfet'te o paket açılır
  loadPopularPacks();
}

/// Yerel .mrpack / CurseForge .zip paket dosyasını içe aktar.
/// Dosya seçici Rust tarafında (dialog plugin) açılır; format otomatik algılanır.
async function importPackFile(): Promise<void> {
  const path = await invoke("cmd_pick_pack_file");
  if (!path) return; // kullanıcı iptal etti
  toast("Paket içe aktarılıyor…", "ok");
  try {
    const inst = await invoke("cmd_import_pack_file", { path });
    const { refreshState } = await import("../main");
    await refreshState();
    toast(`${(inst as any).name || "Paket"} kuruldu!`, "ok");
    navigate("instances");
  } catch (e) {
    toast(`Paket içe aktarılamadı: ${e}`, "err");
  }
}

async function loadPopularPacks(): Promise<void> {  const strip = document.querySelector("#popular-strip") as HTMLElement | null;
  if (!strip) return;
  try {
    const popular: any[] = await invoke("cmd_repos_popular", { kind: "modpack", loader: "" });
    strip.innerHTML = "";
    for (const r of popular) {
      const card = el(`
        <div class="card hover popular-card">
          ${r.icon_url
            ? `<img class="pc-icon" src="${r.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`
            : `<div class="pc-icon ph">${icon("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${r.title}</div>
            <div class="pc-meta">${icon("dl")} ${fmtDownloads(r.downloads)}</div>
          </div>
        </div>
      `);
      card.addEventListener("click", () => navigate("explore", "kind:modpack"));
      strip.appendChild(card);
    }
  } catch {
    strip.innerHTML = `<p class="pc-fail">Popüler paketler yüklenemedi.</p>`;
  }
}

function fmtDownloads(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}K`;
  return String(n);
}

function loaderName(l: string): string {
  return { vanilla: "Vanilla", fabric: "Fabric", forge: "Forge" }[l] || l;
}

// ==================== Detay görünümü ====================

type TabId = "mods" | "content" | "java" | "log" | "analytics" | "settings";

function renderDetail(root: HTMLElement, id: string): void {
  const inst = state.instances.find((i) => i.id === id);
  if (!inst) { selectedId = null; renderGrid(root); return; }
  const iconIsFile = inst.icon && (inst.icon.includes("/") || inst.icon.includes("\\"));
  const iconHtml = iconIsFile
    ? `<img src="${fileSrc(inst.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`
    : (inst.icon || "🔥");
  root.innerHTML = `
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${icon("back")}</button>
      <div class="inst-icon xl">${iconHtml}</div>
      <div>
        <h1>${inst.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${loaderName(inst.mod_loader)} ${inst.mc_version}</span>
          <span class="chip gray">${inst.ram_mb} MB RAM</span>
          <span class="chip gray">${fmtDuration(inst.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${launch.activeId ? "disabled" : ""}>${launch.activeId ? `${icon("clock")} Oyun Açık` : `${icon("play")} Oyna`}</button>
      ${launch.activeId === inst.id ? `<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${icon("stop")} Durdur</button>` : ""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${icon("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${icon("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${icon("mug")} Java</button>
      <button class="tab" data-tab="log">${icon("term")} Log</button>
      <button class="tab" data-tab="analytics">${icon("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${icon("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `;
  root.querySelector(".back-btn")?.addEventListener("click", () => {
    selectedId = null;
    renderGrid(root);
  });
  root.querySelector("#detail-play")?.addEventListener("click", async () => {
    if (!state.accounts.length) return openLoginModal();
    const { launchInstance } = await import("../main");
    launchInstance(inst.id);
  });
  root.querySelector("#detail-stop")?.addEventListener("click", async () => {
    try { await invoke("cmd_kill_game"); } catch { /* zaten kapalıysa sorun değil */ }
    const { refreshState } = await import("../main");
    await refreshState(true);
  });
  root.querySelectorAll(".tab").forEach((t) => {
    t.addEventListener("click", () => {
      root.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      const tab = (t as HTMLElement).dataset.tab as TabId;
      const content = root.querySelector("#tab-content") as HTMLElement;
      ({ mods: tabMods, content: tabContent, java: tabJava, log: tabLog, analytics: tabAnalytics, settings: tabSettings })[tab](content, inst);
    });
  });
  (root.querySelector("#tab-content") as HTMLElement);
  (root.querySelectorAll(".tab")[0] as HTMLElement).click();
}

// ---------- Doku & Dünya sekmesi ----------

/// Seçili içerik türü sekme değişimlerinde korunsun.
type ContentKind = "resourcepacks" | "shaderpacks" | "saves";
let contentKind: ContentKind = "resourcepacks";

const CONTENT_KINDS: Array<{ id: ContentKind; label: string; hint: string }> = [
  { id: "resourcepacks", label: "Doku Paketleri", hint: "Kaynak paketleri (.zip)" },
  { id: "shaderpacks", label: "Shaderlar", hint: "Iris/OptiFine shader'ları (.zip)" },
  { id: "saves", label: "Dünyalar", hint: "Tek oyunculu dünyalar (klasör)" },
];

async function tabContent(content: HTMLElement, inst: any): Promise<void> {
  const kindMeta = () => CONTENT_KINDS.find((k) => k.id === contentKind)!;
  content.innerHTML = `<div class="spinner" style="margin:40px auto"></div>`;

  const draw = async (): Promise<void> => {
    let files: any[] = [];
    try { files = await invoke("cmd_list_content_files", { instanceId: inst.id, kind: contentKind }); } catch { /* klasör yok */ }
    const meta = kindMeta();
    content.innerHTML = `
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${CONTENT_KINDS.map((k) => `<button class="kt ${k.id === contentKind ? "sel" : ""}" data-k="${k.id}">${k.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${icon("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${icon("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${icon("plus")} ${meta.id === "saves" ? "Dünya Ekle" : "Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `;
    content.querySelectorAll("#content-kinds .kt").forEach((b) => {
      b.addEventListener("click", () => {
        contentKind = (b as HTMLElement).dataset.k as ContentKind;
        draw();
      });
    });
    content.querySelector("#content-open")?.addEventListener("click", () =>
      invoke("cmd_open_content_folder", { instanceId: inst.id, kind: contentKind }).catch(() => {}));
    content.querySelector("#content-search")?.addEventListener("click", () => {
      // Keşfet sayfasını bu içerik türüyle önden ayarlı aç
      const exploreKind = contentKind === "resourcepacks" ? "resourcepack"
        : contentKind === "shaderpacks" ? "shader" : "world";
      nav.param = `kind:${exploreKind}`;
      navigate("explore");
    });
    content.querySelector("#content-add")?.addEventListener("click", async () => {
      try {
        await invoke("cmd_add_content_file", { instanceId: inst.id, kind: contentKind });
        await draw();
      } catch (e) {
        toast(`Eklenemedi: ${e}`, "err");
      }
    });
    const list = content.querySelector("#content-list") as HTMLElement;
    if (!files.length) {
      list.innerHTML = `<div class="card" style="text-align:center; padding:34px">
        <p>${meta.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilirsin.</span></p></div>`;
      return;
    }
    list.innerHTML = "";
    for (const f of files) {
      const row = el(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          <div style="font-size:22px">${f.is_dir ? "🌍" : "📦"}</div>
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${f.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${f.is_dir ? "dünya" : fmtBytes(f.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${f.name}" title="Sil">${icon("trash")}</button>
        </div>
      `);
      row.querySelector("[data-del]")?.addEventListener("click", async (e) => {
        const name = (e.currentTarget as HTMLElement).dataset.del as string;
        if (!confirm(`"${name}" silinsin mi?`)) return;
        try {
          await invoke("cmd_delete_content_file", { instanceId: inst.id, kind: contentKind, name });
          await draw();
        } catch (err) {
          toast(`Silinemedi: ${err}`, "err");
        }
      });
      list.appendChild(row);
    }
  };
  await draw();
}

// ---------- Modlar sekmesi ----------
async function tabMods(content: HTMLElement, inst: any): Promise<void> {
  content.innerHTML = `<div class="spinner" style="margin:40px auto"></div>`;
  let mods: any[] = [];
  try { mods = await invoke("cmd_list_mods", { instanceId: inst.id }); } catch { /* yok */ }
  // Mod logoları: Modrinth'ten paralel çözümle (bulunamayanlar sessizce emoji kalır)
  let icons: Record<string, string> = {};
  if (mods.length) {
    try { icons = await invoke("cmd_resolve_mod_icons", { filenames: mods.map((m) => m.filename) }); } catch { /* yok */ }
  }
  // ÖNEMLİ: filtre değişince SADECE liste yeniden çizilir; toolbar (arama kutusu)
  // DOM'da kalır — her tuşta kutu yeniden kurulursa yazma sırası bozuluyor (ters yazma).
  content.innerHTML = `
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${icon("plus")} Mod Ekle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;
  const render = (filter: string) => {
    const list = mods.filter((m) => m.filename.toLowerCase().includes(filter.toLowerCase()));
    const listEl = content.querySelector("#mod-list") as HTMLElement;
    listEl.innerHTML = "";
    if (!list.length) {
      listEl.innerHTML = `<div class="card" style="text-align:center; padding:34px">
        <p>${filter ? "Eşleşen mod yok." : "Bu kurulumda henüz mod yok."}</p></div>`;
    }
    for (const m of list) {
      const iconUrl = icons[m.filename];
      const iconHtml = iconUrl
        ? `<img class="mod-logo" src="${iconUrl}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`
        : `<span class="mod-logo ph">${icon("puzzle")}</span>`;
      const row = el(`
        <div class="mod-row card">
          <span class="dot ${m.enabled ? "on" : "off"}"></span>
          ${iconHtml}
          <div class="mod-name">
            <div class="mn">${m.filename.replace(".jar", "")}</div>
            <div class="ms">${fmtBytes(m.size)}</div>
          </div>
          <div style="flex:1"></div>
          <div class="switch ${m.enabled ? "on" : ""}" data-fn="${m.filename}" data-en="${m.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${m.filename}">Sil</button>
        </div>
      `);
      row.querySelector(".switch")?.addEventListener("click", async (e) => {
        const sw = e.currentTarget as HTMLElement;
        const fn = sw.dataset.fn!;
        const en = sw.dataset.en !== "true";
        await invoke("cmd_toggle_mod", { instanceId: inst.id, filename: fn, enabled: en });
        m.enabled = en;
        render((content.querySelector("#mod-search") as HTMLInputElement).value);
      });
      row.querySelector(".del-mod")?.addEventListener("click", async () => {
        await invoke("cmd_delete_mod", { instanceId: inst.id, filename: m.filename });
        mods = mods.filter((x) => x.filename !== m.filename);
        render((content.querySelector("#mod-search") as HTMLInputElement).value);
        toast("Mod silindi");
      });
      listEl.appendChild(row);
    }
  };
  content.querySelector("#mod-search")?.addEventListener("input", (e) => {
    render((e.target as HTMLInputElement).value);
  });
  content.querySelector("#mod-add")?.addEventListener("click", () => {
    navigate("explore", inst.id);
  });
  render("");
}

// ---------- Java & Args sekmesi ----------
async function tabJava(content: HTMLElement, inst: any): Promise<void> {
  content.innerHTML = `<div class="spinner" style="margin:40px auto"></div>`;
  const presets: any[] = await invoke("cmd_list_java_arg_presets");
  content.innerHTML = `
    <div class="java-grid">
      <div class="card">
        <h3>${icon("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${inst.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${inst.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${icon("args")} Java Argüman Presetleri</h3>
        <p style="margin-bottom:12px">FPS'e doğrudan etki eden JVM ayarları. Açıklamalarını okuyarak seç.</p>
        <div class="preset-list">
          ${presets.map((p) => `
            <div class="preset-row card hover ${inst.java_preset_id === p.id ? "sel" : ""}" data-id="${p.id}">
              <div class="preset-head">
                <b>${p.name}</b>
                ${inst.java_preset_id === p.id ? `<span class="chip">aktif</span>` : ""}
                <span class="chip gray">${p.recommended_ram_mb} MB öneri</span>
              </div>
              <p>${p.description}</p>
              <details><summary>JVM bayraklarını göster</summary><pre>${p.args.join("\n").replace(/\{ram_mb\}/g, String(inst.ram_mb))}</pre></details>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `;
  const range = content.querySelector("#ram-range") as HTMLInputElement;
  range.addEventListener("input", () => {
    (content.querySelector("#ram-val") as HTMLElement).textContent = `${range.value} MB`;
  });
  range.addEventListener("change", async () => {
    await invoke("cmd_set_instance_ram", { id: inst.id, ramMb: parseInt(range.value) });
    inst.ram_mb = parseInt(range.value);
    toast("RAM güncellendi");
  });
  content.querySelectorAll(".preset-row").forEach((r) => {
    // detay açma/kapama (summary) tıklamaları preset seçimini tetiklemesin
    const details = r.querySelector("details");
    details?.addEventListener("click", (e) => e.stopPropagation());
    details?.querySelector("summary")?.addEventListener("click", (e) => e.stopPropagation());
    // yalnızca head/açıklama alanı seçim yapsın; details alanı hariç
    r.addEventListener("click", async (e) => {
      if ((e.target as HTMLElement).closest("details")) return;
      const pid = (r as HTMLElement).dataset.id!;
      await invoke("cmd_set_instance_java_preset", { id: inst.id, presetId: pid });
      inst.java_preset_id = pid;
      // seçimi yeniden çiz ama açık details'leri koru
      const openIds = new Set(
        Array.from(content.querySelectorAll(".preset-row details[open]"))
          .map((d) => (d.closest(".preset-row") as HTMLElement).dataset.id),
      );
      tabJava(content, inst);
      content.querySelectorAll(".preset-row").forEach((row) => {
        if (openIds.has((row as HTMLElement).dataset.id)) {
          (row.querySelector("details") as HTMLDetailsElement).open = true;
        }
      });
      toast("Preset seçildi");
    });
  });
}

// ---------- Log sekmesi ----------
async function tabLog(content: HTMLElement, inst: any): Promise<void> {
  content.innerHTML = `
    <div class="card log-card">
      <div class="log-head">
        <h3>${icon("term")} Log — ${inst.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;
  const logEl = content.querySelector("#live-log") as HTMLElement;
  const countEl = content.querySelector("#log-count") as HTMLElement;
  const select = content.querySelector("#log-file") as HTMLSelectElement;
  const search = content.querySelector("#log-search") as HTMLInputElement;

  let view = "live";
  let lines = 0;                 // bu canlı oturumda gelen satır sayısı
  const liveLines: string[] = []; // canlı akış satırları (sekmeler arası geçiş için tutulur)
  let histLines: string[] = [];   // seçili geçmiş logun satırları

  const setCount = (total: number, shown?: number) => {
    countEl.textContent = shown !== undefined && shown !== total ? `${shown}/${total} satır` : `${total} satır`;
  };

  const lineDiv = (l: string): HTMLElement => {
    const div = document.createElement("div");
    div.textContent = l;
    if (l.includes("ERROR") || l.includes("Exception")) div.classList.add("err");
    else if (l.includes("WARN")) div.classList.add("warn");
    return div;
  };

  const renderHist = () => {
    const q = search.value.trim().toLowerCase();
    const shown = q ? histLines.filter((l) => l.toLowerCase().includes(q)) : histLines;
    logEl.innerHTML = "";
    if (!shown.length) {
      logEl.innerHTML = `<div class="log-hint">${q ? "Eşleşen satır yok." : "Log boş görünüyor."}</div>`;
    } else {
      const frag = document.createDocumentFragment();
      for (const l of shown) frag.appendChild(lineDiv(l));
      logEl.appendChild(frag);
    }
    setCount(histLines.length, shown.length);
  };

  const showLive = () => {
    view = "live";
    histLines = [];
    logEl.innerHTML = "";
    if (!liveLines.length) {
      logEl.innerHTML = `<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>`;
    } else {
      const frag = document.createDocumentFragment();
      for (const l of liveLines) frag.appendChild(lineDiv(l));
      logEl.appendChild(frag);
      logEl.scrollTop = logEl.scrollHeight;
    }
    setCount(lines);
  };

  const loadFile = async (fileId: string) => {
    view = fileId;
    logEl.innerHTML = `<div class="log-hint">Yükleniyor…</div>`;
    try {
      const text: string = await invoke("cmd_read_log", { instanceId: inst.id, fileId });
      histLines = text.split("\n");
      renderHist();
      logEl.scrollTop = 0;
    } catch (e) {
      logEl.innerHTML = `<div class="log-hint">Log yüklenemedi: ${String(e)}</div>`;
    }
  };

  // Geçmiş log dosyalarını listele (tarih gruplu, en yeni üstte)
  let files: any[] = [];
  try {
    files = await invoke("cmd_list_logs", { instanceId: inst.id });
    const groups = new Map<string, any[]>();
    for (const f of files) {
      if (!groups.has(f.date)) groups.set(f.date, []);
      groups.get(f.date)!.push(f);
    }
    for (const [date, items] of groups) {
      const og = document.createElement("optgroup");
      og.label = date;
      for (const f of items) {
        const o = document.createElement("option");
        o.value = f.id;
        // uzun etiketleri kısalt: "Oturum 2026-10-08-1" → "#1" (tarih zaten grup başlığında)
        const short = f.label.startsWith("Oturum ")
          ? "#" + (f.label.split("-").pop() || f.label)
          : f.label;
        o.textContent = `${f.time !== "-" ? f.time + " — " : ""}${short} (${fmtBytes(f.size)})`;
        og.appendChild(o);
      }
      select.appendChild(og);
    }
  } catch { /* liste alınamadıysa yalnızca canlı akış kalır */ }

  // Oyun kapalıyken açıldıysa doğrudan en yeni geçmiş logu göster
  if (launch.activeId !== inst.id && files.length) {
    select.value = files[0].id;
    void loadFile(files[0].id);
  } else {
    showLive();
  }

  select.addEventListener("change", () => {
    if (select.value === "live") showLive();
    else void loadFile(select.value);
  });

  search.addEventListener("input", () => {
    if (view !== "live") renderHist();
  });

  const off = await listen("game-log", (e: any) => {
    // Oyun başlatıldıysa geçmiş logdan otomatik canlı akışa geç
    if (view !== "live") {
      select.value = "live";
      showLive();
    }
    if (logEl.querySelector(".log-hint")) logEl.innerHTML = "";
    liveLines.push(e.payload);
    lines++;
    if (liveLines.length > 500) liveLines.shift();
    logEl.appendChild(lineDiv(e.payload));
    setCount(lines);
    logEl.scrollTop = logEl.scrollHeight;
    if (logEl.children.length > 500) logEl.firstElementChild?.remove();
  });
  const obs = new MutationObserver(() => {
    if (!document.body.contains(logEl)) { off(); obs.disconnect(); }
  });
  obs.observe(document.body, { childList: true, subtree: true });
}

// ---------- Analiz sekmesi ----------
async function tabAnalytics(content: HTMLElement, inst: any): Promise<void> {
  content.innerHTML = `<div class="spinner" style="margin:40px auto"></div>`;
  const resp = await invoke("cmd_get_stats");
  const s = resp.snapshot;
  const myMs = s.per_instance_ms[inst.id] || 0;
  const mySessions = s.sessions ? Math.round((myMs / s.total_playtime_ms) * s.sessions) : 0;
  const myServers: Record<string, number> = {};
  // sunucu verisi instance bazlı kaydedilmiyor; genel listeyi göster
  content.innerHTML = `
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${fmtDuration(myMs)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${mySessions}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${inst.last_played ? new Date(inst.last_played).toLocaleDateString("tr-TR") : "—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${inst.created_at ? new Date(inst.created_at).toLocaleDateString("tr-TR") : "—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${icon("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${s.servers.length ? s.servers.slice(0, 10).map((srv: any, i: number) => `
        <div class="server-row">
          <span class="rank">#${i + 1}</span>
          <span class="host">${srv.host}</span>
          <span class="chip gray">${srv.visits} giriş</span>
          <span class="dur">${fmtDuration(srv.total_ms)}</span>
        </div>`).join("") : `<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>`}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${icon("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${last14(s.daily_ms).map((d) => `
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max((d.ms / Math.max(...last14(s.daily_ms).map((x) => x.ms), 1)) * 100, d.ms ? 5 : 2)}%"></div>
            <div class="bar-lbl">${d.label}</div>
            <div class="tooltip">${d.full} — ${fmtDuration(d.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `;
}

function last14(daily: Record<string, number>) {
  const out: { label: string; ms: number; full: string }[] = [];
  const now = new Date();
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    out.push({ label: d.getDate() % 3 === 0 ? String(d.getDate()) : "", ms: daily[key] || 0, full: key });
  }
  return out;
}

// ---------- Ayarlar sekmesi ----------
async function tabSettings(content: HTMLElement, inst: any): Promise<void> {
  const isFilePath = (v: string) => v.includes("/") || v.includes("\\");
  const iconPreview = inst.icon && isFilePath(inst.icon)
    ? `<img src="${fileSrc(inst.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`
    : (inst.icon || "🔥");
  content.innerHTML = `
    <div class="card">
      <h3>${icon("gear")} Kurulum Ayarları</h3>
      <div style="display:flex; flex-direction:column; gap:14px; margin-top:12px">
        <div class="row-between">
          <span>Kurulum adı</span>
          <input class="input" id="set-name" style="width:240px" value="${inst.name}" />
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>İkon</span>
            <span class="set-icon-hint">dosya seç veya emoji yaz</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            <div class="inst-icon inst-icon-preview" id="icon-preview">${iconPreview}</div>
            <button class="btn ghost sm" id="pick-icon">${icon("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${inst.icon && !isFilePath(inst.icon) ? inst.icon : ""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${inst.cover ? `<img class="cover-thumb" src="${fileSrc(inst.cover)}" onerror="this.style.visibility='hidden'" />` : `<span class="cover-thumb empty">—</span>`}
            <button class="btn ghost sm" id="pick-cover">${inst.cover ? icon("image") + " Değiştir" : icon("image") + " Fotoğraf Seç"}</button>
            ${inst.cover ? `<button class="btn danger sm" id="clear-cover">Kaldır</button>` : ""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${icon("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${icon("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${icon("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${icon("trash")} Kurulumu Sil</button>
        </div>
      </div>
    </div>
  `;
  const save = async () => {
    const name = (content.querySelector("#set-name") as HTMLInputElement).value.trim() || inst.name;
    const iconInput = (content.querySelector("#set-icon") as HTMLInputElement).value.trim();
    await invoke("cmd_rename_instance", { id: inst.id, name });
    // emoji alanı boşsa ve dosya ikonu yoksa default emoji
    if (iconInput) await invoke("cmd_set_instance_icon", { id: inst.id, icon: iconInput });
    await import("../main").then((m) => m.refreshState());
  };
  content.querySelector("#set-name")?.addEventListener("change", save);
  content.querySelector("#set-icon")?.addEventListener("change", save);
  content.querySelector("#set-icon")?.addEventListener("input", () => {
    const v = (content.querySelector("#set-icon") as HTMLInputElement).value.trim();
    if (v) (content.querySelector("#icon-preview") as HTMLElement).textContent = v;
  });
  content.querySelector("#pick-icon")?.addEventListener("click", async () => {
    try {
      await invoke("cmd_pick_instance_icon", { instanceId: inst.id });
      await import("../main").then((m) => m.refreshState(true)); // anında yeniden çiz
      toast("İkon güncellendi");
    } catch { /* iptal */ }
  });
  content.querySelector("#pick-cover")?.addEventListener("click", async () => {
    try {
      await invoke("cmd_pick_instance_cover", { instanceId: inst.id });
      await import("../main").then((m) => m.refreshState(true));
      toast("Kapak fotoğrafı eklendi");
    } catch { /* iptal */ }
  });
  content.querySelector("#clear-cover")?.addEventListener("click", async () => {
    await invoke("cmd_set_instance_cover", { id: inst.id, cover: null });
    await import("../main").then((m) => m.refreshState(true));
    toast("Kapak kaldırıldı");
  });
  content.querySelector("#open-folder")?.addEventListener("click", () => invoke("cmd_open_instance_folder", { instanceId: inst.id }));
  content.querySelector("#open-mods")?.addEventListener("click", () => invoke("cmd_open_mods_folder", { instanceId: inst.id }));
  content.querySelector("#dup-inst")?.addEventListener("click", async () => {
    await invoke("cmd_duplicate_instance", { id: inst.id });
    await import("../main").then((m) => m.refreshState());
    toast("Kurulum kopyalandı");
    renderDetail(content.parentElement as HTMLElement, selectedId!);
  });
  content.querySelector("#del-inst")?.addEventListener("click", async () => {
    if (!confirm(`"${inst.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)) return;
    await invoke("cmd_delete_instance", { id: inst.id });
    await import("../main").then((m) => m.refreshState());
    selectedId = null;
    renderGrid(content.parentElement as HTMLElement);
    toast("Kurulum silindi");
  });
}

// ==================== Oluşturma sihirbazı ====================

async function openCreateWizard(): Promise<void> {
  const versionsResp = await invoke("cmd_list_versions");
  const all: string[] = versionsResp.all;
  const presets: any[] = await invoke("cmd_list_java_arg_presets");
  const stdMods: any[] = await invoke("cmd_list_standard_mods");

  const { root, close } = (await import("../main")).openModal(`
    <h2>Yeni Kurulum</h2>
    <div class="sub">Sürümü ve modloader'ı seç — YIKIM çekirdeği, Java'yı, kütüphaneleri, asset'leri biz indiriyoruz.</div>

    <label class="wiz-label">Kurulum adı</label>
    <input class="input" id="w-name" placeholder="Örn: PVP Paketim" />

    <label class="wiz-label">Minecraft sürümü</label>
    <select class="input" id="w-version">
      ${all.slice(0, 100).map((v) => `<option value="${v}">${v}</option>`).join("")}
    </select>

    <label class="wiz-label">Mod Loader</label>
    <div class="loader-cards">
      <button class="loader-card sel" data-l="fabric">
        <div class="lc-icon">${loaderIcon("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${loaderIcon("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card disabled" data-l="forge" disabled>
        <div class="lc-icon">${loaderIcon("forge")}</div><b>Forge</b><span>Yakında</span>
      </button>
    </div>

    <label class="wiz-label">Bellek</label>
    <div class="ram-row">
      <input type="range" min="1024" max="16384" step="512" value="4096" id="w-ram" style="flex:1" />
      <span class="chip" id="w-ram-val">4096 MB</span>
    </div>

    <label class="wiz-label">Java Argüman Preseti</label>
    <select class="input" id="w-preset">
      ${presets.map((p) => `<option value="${p.id}">${p.name} — ${p.description}</option>`).join("")}
    </select>

    <div class="std-mods-row">
      <div class="std-mods-text">
        <b>Standart modlar kurulsun</b>
        <div class="std-mods-desc">Performans, PVP ve görünüm modları otomatik kurulur. Sonra paket içinden tek tek açıp kapatabilirsin.</div>
      </div>
      <label class="switch on" id="w-std-switch"></label>
    </div>
    <details class="std-mods-details">
      <summary>Hangi modlar kurulacak? (${stdMods.length} mod)</summary>
      ${["performans", "pvp", "gorunum", "yardarci"].map((cat) => `
        <div class="std-cat">
          <div class="std-cat-label">${cat === "performans" ? "Performans" : cat === "pvp" ? "PVP" : cat === "yardarci" ? "Yardımcı" : "Görünüm"}</div>
          <div class="std-chips">
            ${stdMods.filter((m) => m.category === cat).map((m) => `<span class="chip ${m.enabled_by_default ? "" : "gray"}" title="${m.description}">${m.name}</span>`).join("")}
          </div>
        </div>`).join("")}
    </details>

    <div style="display:flex; gap:10px; margin-top:20px">
      <button class="btn ghost" id="w-cancel" style="flex:1">Vazgeç</button>
      <button class="btn primary lg" id="w-create" style="flex:2">Kurulumu Oluştur</button>
    </div>
  `);

  let loader = "fabric";
  let stdOn = true;

  root.querySelectorAll(".loader-card").forEach((c) => {
    c.addEventListener("click", () => {
      if ((c as HTMLElement).classList.contains("disabled")) return;
      root.querySelectorAll(".loader-card").forEach((x) => x.classList.remove("sel"));
      c.classList.add("sel");
      loader = (c as HTMLElement).dataset.l!;
    });
  });
  const ramRange = root.querySelector("#w-ram") as HTMLInputElement;
  ramRange.addEventListener("input", () => {
    (root.querySelector("#w-ram-val") as HTMLElement).textContent = `${ramRange.value} MB`;
  });
  root.querySelector("#w-std-switch")?.addEventListener("click", (e) => {
    stdOn = !stdOn;
    (e.currentTarget as HTMLElement).classList.toggle("on", stdOn);
  });
  root.querySelector("#w-cancel")?.addEventListener("click", close);
  root.querySelector("#w-create")?.addEventListener("click", async () => {
    const btn = root.querySelector("#w-create") as HTMLButtonElement;
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Oluşturuluyor…`;
    const name = (root.querySelector("#w-name") as HTMLInputElement).value.trim() || "Yeni Kurulum";
    const version = (root.querySelector("#w-version") as HTMLSelectElement).value;
    const preset = (root.querySelector("#w-preset") as HTMLSelectElement).value;
    try {
      const resp = await invoke("cmd_create_instance", {
        instance: {
          name, mc_version: version, mod_loader: loader, ram_mb: parseInt(ramRange.value),
          java_preset_id: preset, standard_mods: stdOn && loader === "fabric",
        },
      });
      await import("../main").then((m) => m.refreshState());
      close();
      toast(`"${name}" oluşturuldu`);
      const newId: string = resp.instance.id;
      selectedId = newId;
      if (state.instances.length) {
        const contentRoot = document.querySelector("#content") as HTMLElement;
        renderDetail(contentRoot, newId);
      }
    } catch (e) {
      toast(String(e), "err");
      btn.disabled = false;
      btn.textContent = "Kurulumu Oluştur";
    }
  });

  void listen;
}
