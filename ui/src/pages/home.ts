import { $, currentAccount, el, fileSrc, fmtDuration, headAttrs, headUrl, icon, invoke, lamp, launch, navigate, openLoginModal, state } from "../main";
import { enterRows, switchPress } from "../motion";
import { sahneGetir, sahneKapat } from "../sahne/karakter";
import { emoteParca } from "../sahne/emote";

let selectedInstanceId: string | null = null;

const sahneDunyasi = (): boolean => document.documentElement.getAttribute("data-world") === "sahne";
const timeAgo = (t: number | null | undefined): string => {
  if (!t) return "hiç";
  const dk = Math.round((Date.now() - t) / 60000);
  if (dk < 1) return "şimdi";
  if (dk < 60) return `${dk} dk önce`;
  const sa = Math.round(dk / 60);
  if (sa < 24) return `${sa} saat önce`;
  return `${Math.round(sa / 24)} gün önce`;
};

/** IMPERIAL USLÜBÜ home (Sahne dünyası): banner + ortada karakter + sağda haberler/hızlı giriş */
function impHome(root: HTMLElement): void {
  const lastInstance = state.instances[0];
  if (!selectedInstanceId || !state.instances.find((i) => i.id === selectedInstanceId)) {
    selectedInstanceId = lastInstance?.id || null;
  }
  const sel = state.instances.find((i) => i.id === selectedInstanceId);
  const acc = currentAccount();
  const iconIsFile = (v: string) => !!v && (v.includes("/") || v.includes("\\"));
  const sonOynananlar = [...state.instances].sort((a, b) => (b.last_played || 0) - (a.last_played || 0));
  const hizli = sonOynananlar[0] || null;
  const profiller = sonOynananlar.slice(0, 5);

  root.innerHTML = `
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${state.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${sel?.cover ? " kapakli" : ""}"${sel?.cover ? ` style="background-image:url('${fileSrc(sel.cover)}')"` : ""}>
          <div class="vitrin"><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${acc?.name ? `<img src="${headUrl(acc)}" alt="" draggable="false" ${headAttrs(acc)}><b>${acc.name}</b><small>hesabı yönet</small>` : `<b>hesap yok</b><small>giriş yap</small>`}
          </button>
          <div class="imp-vitrin-kart">
            <b class="imp-emote-adi" id="i-emote-adi">EMOTE BEKLER</b>
            <button class="btn imp-sari-kucuk" id="i-wardrobe">DENEME ALANI</button>
          </div>
          ${sel ? `<button class="imp-buyut" id="i-menu" title="${sel.name}">${icon("gear")}</button>` : ""}
        </div>

        <div class="imp-profil-baslik">
          <span>${icon("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${sel?.mod_loader ? loaderName(sel.mod_loader) : "Java"}</span>
            <span class="pill">${sel?.mc_version || "—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${icon("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${icon("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${icon("play")} HIZLI GİRİŞ</div>
          ${hizli ? `
          <button class="imp-hizli-satir${launch.activeId === hizli.id ? " durdur" : ""}" id="i-hizli-oyla" ${launch.activeId && launch.activeId !== hizli.id ? "disabled data-kilitli=\"1\"" : ""}>
            <b>${hizli.name}${launch.activeId === hizli.id ? " — AÇIK" : ""}</b>
            <small>${loaderName(hizli.mod_loader)} · ${hizli.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>` : `
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;

  // profil satırları (Imperial: ikon + piksel isim + yeşil OYNA + dişli)
  const satirHost = root.querySelector("#i-profil-satirlar") as HTMLElement;
  for (const inst of profiller) {
    const row = el(`
      <div class="imp-satir${launch.activeId === inst.id ? " oyunda" : ""}" role="button" tabindex="0" data-id="${inst.id}">
        <span class="imp-satir-ikon">${iconIsFile(inst.icon)
          ? `<img src="${fileSrc(inst.icon)}" draggable="false" />`
          : `<span class="emoji">${inst.icon || "🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${inst.name}</b>
          <small>${loaderName(inst.mod_loader)} · ${inst.mc_version} — ${timeAgo(inst.last_played)}</small>
        </span>
        <button class="imp-oyla${launch.activeId === inst.id ? " durdur" : ""}" ${launch.activeId && launch.activeId !== inst.id ? "disabled data-kilitli=\"1\"" : ""}
          title="${launch.activeId === inst.id ? "Oyunu kapat" : `${inst.name} — OYNA`}">${icon(launch.activeId === inst.id ? "stop" : "play")} ${launch.activeId === inst.id ? "DURDUR" : "OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${icon("gear")}</button>
      </div>
    `);
    row.addEventListener("click", (e) => {
      const id = inst.id;
      if ((e.target as HTMLElement).closest(".imp-diyis")) {
        navigate("instances", id);
        return;
      }
      if ((e.target as HTMLElement).closest(".imp-oyla")) {
        if (launch.activeId === inst.id) void stopOyun();
        return;
      }
      selectedInstanceId = id;
      navigate("instances", id);
    });
    row.querySelector(".imp-oyla")?.addEventListener("click", (e) => e.stopPropagation());
    satirHost.appendChild(row);
  }
  // OYNA butonlarını ayrıca bağla (satır click'i yürümesin)
  satirHost.querySelectorAll(".imp-satir").forEach((row) => {
    const id = (row as HTMLElement).dataset.id || "";
    row.querySelector(".imp-oyla")?.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (launch.activeId === id) return stopOyun();
      if (!state.accounts.length) return openLoginModal();
      const { launchInstance } = await import("../main");
      void launchInstance(id);
    });
  });

  // üst şerit ve alt butonlar
  root.querySelector("#i-yonet")?.addEventListener("click", () => navigate("instances"));
  root.querySelector("#i-mod")?.addEventListener("click", () => navigate("explore"));
  root.querySelector("#i-menu")?.addEventListener("click", () => { if (selectedInstanceId) navigate("instances", selectedInstanceId); });
  root.querySelector("#i-ad")?.addEventListener("click", () => openLoginModal());
  root.querySelector("#i-wardrobe")?.addEventListener("click", () => navigate("deneme"));
  root.querySelector("#i-haber-tumu")?.addEventListener("click", () => navigate("news"));
  root.querySelector("#i-hizli-liste")?.addEventListener("click", () => navigate("instances"));
  root.querySelector("#i-hizli-oyla")?.addEventListener("click", async () => {
    if (!hizli) return;
    if (launch.activeId === hizli.id) return stopOyun();
    if (!state.accounts.length) return openLoginModal();
    const { launchInstance } = await import("../main");
    void launchInstance(hizli.id);
  });

  // vitrin motoru + skin + emote (eski akışla aynı)
  void baslatVitrin(root, acc);
  // vitrin karttındaki emote adını canlı tut
  const kartaYaz = setInterval(() => {
    const host = root.querySelector("#i-emote-adi");
    const canvas = root.querySelector("#sahne-katman");
    if (!host || (canvas && !canvas.isConnected)) { clearInterval(kartaYaz); return; }
    const ad = sahnekartad();
    if (ad && host.textContent !== ad) host.textContent = ad.toUpperCase();
  }, 800);
}

function sahnekartad(): string {
  const ws = (window as any).__sahne as { sonOynananAd?: string } | null;
  return ws?.sonOynananAd || "EMOTE BEKLER";
}

/** Çalışan oyunu kapatır ve arayüzü tazeler (satır OYNA/DURDUR + hızlı giriş ortak). */
async function stopOyun(): Promise<void> {
  try { await invoke("cmd_kill_game"); } catch { /* zaten kapalıysa sorun değil */ }
  const { refreshState } = await import("../main");
  await refreshState(true);
}

async function impNewsYukle(root: HTMLElement): Promise<void> {
  const host = root.querySelector("#i-news") as HTMLElement | null;
  if (!host) return;
  try {
    const items: any[] = await invoke("cmd_list_yikim_news");
    items.sort((a: any, b: any) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.date.localeCompare(a.date));
    host.innerHTML = "";
    for (const a of items.slice(0, 2)) {
      const kart = el(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${a.image ? ` style="background-image:url('${a.image}')"` : ""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${a.pinned ? " sar" : ""}">${a.pinned ? "DUYURU" : "YIKIM"}</span>
            <b>${a.title}</b>
            <small>${a.date}</small>
          </div>
        </div>
      `);
      kart.addEventListener("click", () => navigate("news"));
      host.appendChild(kart);
    }
  } catch { /* çevrimdışı: sessiz geç */ }
}

export function renderHome(root: HTMLElement): void {
  sahneKapat(); // eski canvas/renderer'ı temizle (sayfa yenileniyor)
  if (sahneDunyasi()) {
    impHome(root);
    void impNewsYukle(root);
    return;
  }
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
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${acc ? `${acc.name} — SAHNE` : "SAHNE"}</div>
      </div>
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
        <button class="play-ring ${launch.activeId ? "disabled" : ""}" id="h-play"
          title="${launch.activeId ? "Oyun zaten açık" : `${sel.name} — OYNA`}"
          ${launch.activeId ? "disabled" : ""}>
          <span class="pr-icon">${launch.activeId ? icon("clock") : icon("play")}</span>
          <span class="pr-label">${launch.activeId ? "AÇIK" : "OYNA"}</span>
          <span class="pr-sub">${launch.activeId ? "çalışıyor" : sel.name}</span>
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

    <!-- Topluluk -->
    <section class="home-section">
      <div class="section-head">
        <h2 class="dim-cap">TOPLULUK</h2>
      </div>
      <div class="community-stats" id="community-stats">
        <div class="card hover community-card">
          <div class="cs-val" id="cs-downloads">…</div>
          <div class="cs-label">İndirilme</div>
        </div>
        <div class="card hover community-card">
          <div class="cs-val" id="cs-stars">…</div>
          <div class="cs-label">GitHub Yıldız</div>
        </div>
        <div class="card hover community-card" id="cs-github-link" style="cursor:pointer">
          <div class="cs-val">${icon("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
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
  loadCommunityStats(root);
  void baslatVitrin(root, acc);
}

/** Karakter vitrinini başlat: skin + emote paketleri sahneye bağlanır. */
async function baslatVitrin(root: HTMLElement, acc: { id: string; name: string } | null | undefined): Promise<void> {
  const canvas = root.querySelector("#sahne-katman") as HTMLCanvasElement | null;
  if (!canvas) return;
  const sah = sahneGetir();
  sah.kur(canvas);
  canvas.classList.add("on");
  try {
    const skin = await invoke("cmd_get_account_skin", { id: acc?.id || "" });
    if (skin?.dosya) {
      await sah.skin({ url: fileSrc(String(skin.dosya)), slim: !!skin.slim });
    } else {
      await sah.skin(null);
    }
  } catch {
    await sah.skin(null);
  }
  try {
    const emotes: { adi: string; icerik: string }[] = await invoke("cmd_list_emotes");
    const liste = [];
    for (const e of emotes) {
      try { liste.push(emoteParca(e.icerik)); } catch { /* bozuk emote atlanır */ }
    }
    sah.emoteleriKur(liste);
  } catch {
    sah.emoteleriKur([]);
  }
}

async function loadCommunityStats(root: HTMLElement): Promise<void> {
  try {
    const stats = await invoke("cmd_get_community_stats");
    const dl = root.querySelector("#cs-downloads");
    const st = root.querySelector("#cs-stars");
    if (dl) dl.textContent = (stats.downloads || 0).toLocaleString("tr-TR");
    if (st) st.textContent = (stats.stars || 0).toLocaleString("tr-TR");
  } catch {
    const dl = root.querySelector("#cs-downloads");
    const st = root.querySelector("#cs-stars");
    if (dl) dl.textContent = "—";
    if (st) st.textContent = "—";
  }
  root.querySelector("#cs-github-link")?.addEventListener("click", () => {
    import("../main").then((m) => m.openExternal("https://github.com/YKSAMI1/yikimlient").catch(() => {}));
  });
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
