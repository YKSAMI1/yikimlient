import { currentAccount, headAttrs, headUrl, icon, invoke, openModal, openLoginModal, state, toast, applyWorld, refreshState, openPath, openExternal } from "../main";

/* Dört dünya — her kart o dünyanın kendi zemininde mini önizleme taşır.
   preview html'i inline style'la çizilir; tema motoruna bağımlı değil. */
const WORLDS = [
  {
    id: "pano", name: "Devre Panosu", desc: "Varsayılan — hatlar, lambalar, şalter",
    bg: "#0b0b0d", panel: "#141419", line: "#26262e", text: "#e9e7e2", dim: "#6d6b66", accent: "#ff7a18",
  },
  {
    id: "sokum", name: "Söküm Sahası", desc: "Sıcak işlik zemini, kızıl turuncu, keskin köşe",
    bg: "#14100c", panel: "#201a14", line: "#382c1f", text: "#f2e9dd", dim: "#7d7264", accent: "#ff5a24",
  },
  {
    id: "anons", name: "Anons Panosu", desc: "Flap siyahı, sıcak beyaz, parlak amber",
    bg: "#0d0c09", panel: "#17150f", line: "#2b2718", text: "#f7f1e3", dim: "#77715f", accent: "#ffc247",
  },
  {
    id: "standart", name: "Kategori Standardı", desc: "Arc/Linear cilası — yumuşak köşe, çelik mavisi",
    bg: "#0e1016", panel: "#171a24", line: "#2b3044", text: "#eceffa", dim: "#666e8a", accent: "#6e8bff",
  },
];

/// Dünyanın mini önizlemesi: kendi paletiyle pano + 3 hat + lambalar
function worldPreview(w: typeof WORLDS[number]): string {
  const row = (y: number, wpx: number, lampColor: string, alpha = 1) => `
    <div class="wc-row" style="top:${y}px; left:14px; width:${wpx}%; background:${w.dim}; opacity:${alpha}"></div>
    <div class="wc-lamp" style="top:${y - 1}px; left:6px; background:${lampColor}"></div>`;
  return `
    <span class="wc-preview" style="background:${w.bg}; border-bottom:1px solid ${w.line}">
      <span class="wc-bar" style="top:0; background:${w.panel}; border-bottom:1px solid ${w.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${w.accent}"></span>
      ${row(30, 55, w.accent)}
      ${row(46, 40, "#3ecf8e")}
      ${row(62, 47, "#3ecf8e")}
    </span>`;
}

export function renderSettings(root: HTMLElement): void {
  // DİKKAT: refreshState() state.config'i YENİ nesneyle değiştirir; save() sonrası
  // ölü nesneye yazmamak için cfg her kayıttan sonra tazelenir (save() içinde).
  let cfg = state.config;
  // eski tema değerlerini dünyalara eşle (orange/dark/neon/light artık dünya adlarıyla yaşar)
  const legacy: Record<string, string> = { dark: "standart", neon: "anons", light: "pano", orange: "pano" };
  const activeTheme = legacy[cfg.theme] ?? cfg.theme;
  const customOn = !!(cfg.custom_accent || "").trim();
  // dinamik sürüm — Tauri'nin kendi getVersion()'undan
  try {
    const app = (window as any).__TAURI__?.app;
    if (app?.getVersion) {
      app.getVersion().then((v: string) => {
        const el = root.querySelector("#app-version");
        if (el) el.textContent = `v${v} "Kıvılcım"`;
      }).catch(() => {
        const el = root.querySelector("#app-version");
        if (el) el.textContent = "v? — geliştirici sürümü";
      });
    }
  } catch { /* sessiz */ }

  root.innerHTML = `
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${state.accounts.map((a) => {
          const active = currentAccount()?.id === a.id;
          return `
          <div class="acc-row ${active ? "active" : ""}" data-id="${a.id}">
            <img class="acc-head" src="${headUrl(a)}" ${headAttrs(a)} draggable="false" />
            <div class="acc-info">
              <b>${a.name}</b>
              <span>${a.kind === "microsoft" ? "Microsoft · premium" : "Offline"}</span>
            </div>
            ${active ? `<span class="chip">aktif</span>` : `<button class="btn ghost sm acc-use">Seç</button>`}
            <button class="btn danger sm acc-del" title="Kaldır">${icon("trash")}</button>
          </div>`;
        }).join("") || `<p class="set-sub">Henüz hesap eklenmemiş.</p>`}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${icon("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${icon("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${WORLDS.map((w) => `
          <button class="world-card ${activeTheme === w.id ? "sel" : ""}" data-t="${w.id}">
            ${worldPreview(w)}
            <span class="wc-body">
              <b>${w.name}</b>
              <span>${w.desc}</span>
            </span>
            ${activeTheme === w.id ? `<span class="sel-tag">SEÇİLİ</span>` : ""}
          </button>`).join("")}
      </div>
      <div class="row-between" style="margin-top:14px" id="custom-row">
        <div>
          <b style="font-size:13px">Özel vurgu rengi</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Her dünyada çalışır — lamba, şalter ve vurgu renklerini boyar. Dünya rengine dönmek için kapat.</div>
        </div>
        <div style="display:flex; gap:8px; align-items:center">
          <button class="btn ghost sm ${customOn ? "" : "sel"}" id="accent-default">Dünya rengi</button>
          <input type="color" id="accent-pick" value="${cfg.custom_accent || activeTheme === "standart" ? "#6e8bff" : "#ff7a18"}" style="width:56px; height:34px; border:none; background:none; cursor:pointer" />
        </div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("mug")} Java</h3>
      <div class="row-between">
        <div>
          <b style="font-size:13px">Özel Java konumu</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Boşsa YIKIMLient Mojang'in resmî runtime'ını otomatik indirir (önerilen).</div>
        </div>
        <div style="display:flex; gap:8px">
          <button class="btn ghost" id="pick-java">Klasör Seç</button>
          <button class="btn ghost" id="clear-java">Sıfırla</button>
        </div>
      </div>
      <div class="chip gray" id="java-path" style="margin-top:10px; max-width:100%; overflow:hidden; text-overflow:ellipsis">${cfg.java_dir || "otomatik"}</div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("gear")} Genel</h3>
      ${toggleRow("keep-open", "Oyun açılınca launcher açık kalsın", cfg.keep_launcher_open)}
      ${toggleRow("hide-on-launch", "Oyun sırasında launcher'ı gizle (RAM tasarrufu)", cfg.hide_on_launch)}
      ${toggleRow("show-news", "Ana sayfada haberleri göster", cfg.show_news)}
      ${toggleRow("stats-enabled", "İstatistik toplansın (tamamen yerel)", cfg.stats_enabled)}
      ${toggleRow("use-java25", "Microsoft OpenJDK 25 kullan (mod paketleri için optimize)", cfg.use_java25 !== false)}
      ${toggleRow("discord-rpc", "Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)", cfg.discord_rpc !== false)}
      <div class="row-between" style="margin-top:8px">
        <span>İndirme hızı (paralel bağlantı)</span>
        <div class="ram-row" style="width:260px">
          <input type="range" min="8" max="64" step="8" value="${cfg.download_concurrency || 32}" id="dlc-range" style="flex:1" />
          <span class="chip" id="dlc-val">${cfg.download_concurrency || 32}</span>
        </div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="open-dir">${icon("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `;

  // hesap yöneticisi
  root.querySelector("#acc-add-ms")?.addEventListener("click", () => openLoginModal());
  root.querySelector("#acc-add-off")?.addEventListener("click", () => openLoginModal());
  root.querySelectorAll(".acc-row").forEach((row) => {
    const id = (row as HTMLElement).dataset.id!;
    row.querySelector(".acc-use")?.addEventListener("click", async (e) => {
      e.stopPropagation();
      await invoke("cmd_select_account", { accountId: id });
      await refreshState();
      renderSettings(root);
      toast("Hesap değiştirildi");
    });
    row.querySelector(".acc-del")?.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!confirm("Bu hesap kaldırılsın mı?")) return;
      await invoke("cmd_remove_account", { accountId: id });
      await refreshState();
      renderSettings(root);
      toast("Hesap kaldırıldı");
    });
  });

  // dünya kartları — anında önizleme, kaydet change'de
  root.querySelectorAll(".world-card").forEach((c) =>
    c.addEventListener("click", async () => {
      state.config.theme = (c as HTMLElement).dataset.t!;
      applyWorld(); // canlı önizleme
      root.querySelectorAll(".world-card").forEach((x) => x.classList.remove("sel"));
      c.classList.add("sel");
      await save();
    })
  );

  // özel vurgu rengi — tüm dünyalarda geçerli, dünya seçimini BOZMAZ
  const accentPick = root.querySelector("#accent-pick") as HTMLInputElement;
  const accentDefault = root.querySelector("#accent-default");
  accentPick?.addEventListener("input", (e) => {
    state.config.custom_accent = (e.target as HTMLInputElement).value;
    applyWorld();
  });
  accentPick?.addEventListener("change", async () => {
    await save();
    toast("Vurgu rengi kaydedildi");
  });
  accentDefault?.addEventListener("click", async () => {
    state.config.custom_accent = ""; // dünya rengine dön
    applyWorld();
    await save();
    toast("Dünya rengine dönüldü");
  });

  // java
  root.querySelector("#pick-java")?.addEventListener("click", async () => {
    const dir = await invoke("cmd_pick_java");
    if (dir) {
      state.config.java_dir = dir;
      await save();
      (root.querySelector("#java-path") as HTMLElement).textContent = dir;
      toast("Java konumu kaydedildi");
    }
  });
  root.querySelector("#clear-java")?.addEventListener("click", async () => {
    state.config.java_dir = null;
    await save();
    (root.querySelector("#java-path") as HTMLElement).textContent = "otomatik";
  });

  // toggles
  wireToggle(root, "keep-open", "keep_launcher_open");
  wireToggle(root, "hide-on-launch", "hide_on_launch");
  wireToggle(root, "show-news", "show_news");
  wireToggle(root, "stats-enabled", "stats_enabled");
  wireToggle(root, "use-java25", "use_java25");
  wireToggle(root, "discord-rpc", "discord_rpc");

  const dlc = root.querySelector("#dlc-range") as HTMLInputElement;
  dlc.addEventListener("input", () => (root.querySelector("#dlc-val") as HTMLElement).textContent = dlc.value);
  dlc.addEventListener("change", async () => {
    state.config.download_concurrency = parseInt(dlc.value);
    await save();
  });

  root.querySelector("#check-upd")?.addEventListener("click", async () => {
    toast("Güncelleme kontrol ediliyor…");
    try {
      const mod = await import("@tauri-apps/plugin-updater");
      const update = await mod.check();
      if (update?.available) {
        const { root: mRoot, close } = openModal(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${update.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(update.body || "Değişiklik notu yok.").split("\n").map((l: string) => `<div>${l}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);
        mRoot.querySelector("#upd-later")?.addEventListener("click", () => close());
        mRoot.querySelector("#upd-go")?.addEventListener("click", async () => {
          const btn = mRoot.querySelector("#upd-go") as HTMLButtonElement;
          btn.disabled = true;
          btn.textContent = "İndiriliyor…";
          try {
            await update.downloadAndInstall();
            toast("Güncelleme kuruldu — launcher yeniden başlıyor");
            setTimeout(() => { try { (window as any).__TAURI__.process.exit(0); } catch { location.reload(); } }, 900);
          } catch (e) {
            btn.disabled = false;
            btn.textContent = "İndir ve Kur";
            toast(`Güncelleme başarısız: ${e}`, "err");
          }
        });
      } else {
        toast("YIKIMLient güncel ✓");
      }
    } catch (e) {
      toast(`Güncelleme kontrolü başarısız: ${e}`, "err");
    }
  });
  root.querySelector("#open-dir")?.addEventListener("click", async () => {
    const dir = await invoke("cmd_get_app_dir");
    openPath(dir).catch(() => {});
  });
}

function toggleRow(id: string, label: string, on: boolean): string {
  return `
    <div class="row-between" style="margin-top:8px">
      <span>${label}</span>
      <div class="switch ${on ? "on" : ""}" data-tid="${id}"></div>
    </div>`;
}

function wireToggle(root: HTMLElement, tid: string, key: string): void {
  root.querySelector(`[data-tid="${tid}"]`)?.addEventListener("click", async (e) => {
    const sw = e.currentTarget as HTMLElement;
    sw.classList.toggle("on");
    state.config[key] = sw.classList.contains("on");
    await save();
  });
}

async function save(): Promise<void> {
  await invoke("cmd_save_settings", { config: state.config });
  await refreshState(); // state.config'i taze nesneyle değiştirir
  applyWorld();
}
