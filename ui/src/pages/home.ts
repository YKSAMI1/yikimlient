import { $, currentAccount, el, fileSrc, fmtDuration, headAttrs, headUrl, icon, invoke, lamp, launch, navigate, openLoginModal, state } from "../main";
import { enterRows, switchPress } from "../motion";

let selectedInstanceId: string | null = null;

export function renderHome(root: HTMLElement): void {
  const lastInstance = state.instances[0];
  if (!selectedInstanceId || !state.instances.find((i) => i.id === selectedInstanceId)) {
    selectedInstanceId = lastInstance?.id || null;
  }
  const sel = state.instances.find((i) => i.id === selectedInstanceId);
  const acc = currentAccount();
  const iconIsFile = (v: string) => !!v && (v.includes("/") || v.includes("\\"));
  const heroIcon = sel
    ? (iconIsFile(sel.icon)
        ? `<img class="hero-inst-icon" src="${fileSrc(sel.icon)}" draggable="false" />`
        : `<span class="hero-inst-icon emoji">${sel.icon || "🔥"}</span>`)
    : "";
  const heroCover = sel?.cover ? ` style="background-image:url('${fileSrc(sel.cover)}')"` : "";
  const heroLamp = sel
    ? (launch.activeId === sel.id ? "warn" : "ok")
    : "off";
  const others = state.instances.filter((i) => i.id !== sel?.id);

  root.innerHTML = `
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${sel?.cover ? " has-cover" : ""}"${heroCover}>
      <div class="hero-content">
        ${sel ? `
          <div class="hero-badge">${lamp(heroLamp)} ${heroIcon} ${sel.mc_version} · ${loaderName(sel.mod_loader)}</div>
          <h1>${sel.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(sel.ram_mb / 1024).toFixed(0)} <small>GB / ${(state.sys?.total_ram_mb || 16384) / 1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100, Math.round((sel.ram_mb / (state.sys?.total_ram_mb || 16384)) * 100))}%"></span></div>
            </div>
            <div class="meter">
              <div class="meter-cap">MODLAR</div>
              <div class="meter-val">${sel.standard_mods ? "Optimize set" : "Sade"}<small>${sel.source_pack ? " · paket" : ""}</small></div>
            </div>
            <div class="meter">
              <div class="meter-cap">SON OYUN</div>
              <div class="meter-val">${sel.last_played ? new Date(sel.last_played).toLocaleDateString("tr-TR") : "—"}</div>
              <div class="meter-bar"><span style="width:0%"></span></div>
            </div>
          </div>
          <div class="hero-actions">
            <button class="btn ghost" id="h-manage">${icon("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${icon("plus")} Kurulum Oluştur</button>
          </div>
        ` : `
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${icon("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${sel ? `
      <div class="play-ring-wrap">
        <button class="play-ring" id="h-play" title="${sel.name} — OYNA">
          <span class="pr-icon">${icon("play")}</span>
          <span class="pr-label">OYNA</span>
          <span class="pr-sub">${sel.name}</span>
        </button>
        ${launch.activeId === sel.id ? `
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${icon("stop")}
          <span class="sr-label">DURDUR</span>
        </button>` : ""}
      </div>` : ""}
    </section>

    <!-- HAT DEFTERİ: diğer kurulumlar cetvelle bölünmüş satırlar -->
    ${others.length ? `
    <section class="home-section" aria-label="Diğer kurulumlar">
      <div class="ledger">
        <div class="ledger-head">
          <span class="ledger-title">DİĞER HATLAR</span>
          <button class="btn ghost sm" id="h-all">${icon("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>` : ""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${!acc ? `
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${lamp("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>` : ""}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${state.config?.show_news === false ? 'hidden' : ''}>
      <div class="section-head">
        <h2 class="dim-cap">YIKIM DUYURULARI</h2>
        <button class="btn ghost sm" id="news-all">Tümü</button>
      </div>
      <div class="news-strip" id="home-news"><div class="spinner" style="margin:30px auto"></div></div>
    </section>
    </div>
  `;

  // hat defteri satırları
  const rowsHost = root.querySelector("#ledger-rows") as HTMLElement | null;
  if (rowsHost) {
    for (const inst of others) {
      const iconIsFile2 = iconIsFile(inst.icon);
      const row = el(`
        <button class="ledger-row" data-id="${inst.id}">
          ${lamp(launch.activeId === inst.id ? "warn" : "ok")}
          <span class="lr-name">${inst.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${loaderName(inst.mod_loader)} ${inst.mc_version}
            <span class="sep">·</span>
            Son: ${inst.last_played ? new Date(inst.last_played).toLocaleDateString("tr-TR") : "hiç"}
          </span>
          <span class="lr-play" title="Oyna">${icon("play")}</span>
        </button>
      `);
      (row.querySelector(".lr-play") as HTMLElement).innerHTML = icon("play");
      row.addEventListener("click", async (e) => {
        if ((e.target as HTMLElement).closest(".lr-play")) {
          if (!state.accounts.length) return openLoginModal();
          switchPress(row);
          const { launchInstance } = await import("../main");
          launchInstance(inst.id);
          return;
        }
        navigate("instances", inst.id);
      });
      rowsHost.appendChild(row);
    }
    enterRows(Array.from(rowsHost.children));
  }

  wireHome(root);
  loadHomeNews();
}

function loaderName(l: string): string {
  return { vanilla: "Vanilla", fabric: "Fabric", forge: "Forge" }[l] || l;
}

function wireHome(root: HTMLElement): void {
  root.querySelector("#h-play")?.addEventListener("click", async () => {
    if (!selectedInstanceId) { navigate("instances"); return; }
    if (!state.accounts.length) { openLoginModal(); return; }
    switchPress(root.querySelector(".play-ring") as HTMLElement);
    const { launchInstance } = await import("../main");
    launchInstance(selectedInstanceId);
  });
  root.querySelector("#h-stop")?.addEventListener("click", async () => {
    try { await invoke("cmd_kill_game"); } catch { /* zaten kapalıysa sorun değil */ }
    const { refreshState } = await import("../main");
    await refreshState(true);
  });
  root.querySelector("#h-manage")?.addEventListener("click", () => {
    navigate("instances", selectedInstanceId || undefined);
  });
  root.querySelector("#h-new")?.addEventListener("click", () => navigate("instances"));
  root.querySelector("#h-all")?.addEventListener("click", () => navigate("instances"));
  root.querySelector("#news-all")?.addEventListener("click", () => navigate("news"));
  root.querySelector("#h-account-row")?.addEventListener("click", () => openLoginModal());
}

async function loadHomeNews(): Promise<void> {
  const strip = $("#home-news");
  if (!strip) return;
  try {
    // YALNIZCA geliştiricinin imzalı duyuruları (Minecraft haber akışı kaldırıldı).
    const items: any[] = await invoke("cmd_list_yikim_news");
    strip.innerHTML = "";
    if (!items.length) {
      strip.innerHTML = `<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>`;
      return;
    }
    items.sort((a: any, b: any) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.date.localeCompare(a.date));
    for (const a of items.slice(0, 4)) {
      const card = el(`
        <div class="news-card card hover">
          ${a.image ? `<div class="news-img" style="background-image:url('${a.image}')"></div>` : `<div class="news-img noimg">${icon("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${a.pinned ? "DUYURU" : "YIKIM"} · ${a.date}</div>
            <h3>${a.title}</h3>
          </div>
        </div>
      `);
      // kart tıklaması dış bağlantı AÇMAZ — Duyurular sayfasına götürür
      card.addEventListener("click", () => navigate("news"));
      strip.appendChild(card);
    }
  } catch {
    strip.innerHTML = `<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>`;
  }
}
