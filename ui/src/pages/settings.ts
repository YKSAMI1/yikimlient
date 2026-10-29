import { currentAccount, headAttrs, headUrl, icon, invoke, openModal, openLoginModal, state, toast, applyWorld, refreshState, openPath, openExternal, navigate } from "../main";
import { SAHNE_ARTLARI, sahneArkaCiz } from "../sahne/arkaplan";

/* Beş dünya — her kart o dünyanın kendi zemininde mini önizleme taşır.
   Diğer denemeler (Devre Panosu, Kategori Standardı, Karanlık Oda, Kumaş,
   Perde, Buzul, Skala) kaldırıldı: hepsi aynı düzenin sadece farklı arka
   planıydı. Kalan her dünya kendi kimliğini taşır; rengi ve köşesi ayrıca
   özelleştirilebilir (aşağıdaki "Bu dünyayı özelleştir" paneli). */
const WORLDS = [
  {
    id: "sahne", name: "Sahne", desc: "Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",
    bg: "#0d0e12", panel: "#17181f", line: "#2a2c3a", text: "#f2edde", dim: "#71695c", accent: "#ffd83d",
  },
  {
    id: "sokum", name: "Söküm Sahası", desc: "Sıcak işlik zemini, kızıl turuncu, keskin köşe",
    bg: "#14100c", panel: "#201a14", line: "#382c1f", text: "#f2e9dd", dim: "#7d7264", accent: "#ff5a24",
  },
  {
    id: "afis", name: "Afiş Provası", desc: "Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",
    bg: "#f3ecdd", panel: "#faf6ea", line: "#16130c", text: "#16130c", dim: "#8a7f6b", accent: "#ff4d00",
  },
  {
    id: "sira", name: "Sıra Düzeni", desc: "Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",
    bg: "#0e1112", panel: "#171b1c", line: "#2a3134", text: "#edf2e6", dim: "#6c7568", accent: "#a3e635",
  },
  {
    id: "rihtim", name: "Rıhtım", desc: "Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",
    bg: "#0a0f18", panel: "#111a29", line: "#22304a", text: "#e6effa", dim: "#5e6d85", accent: "#2fd6c3",
  },
];

/** Kaldırılan dünyalar eski config'lerde kalmış olabilir → sahne'ye düşür. */
const KALDIRILAN: Record<string, string> = {
  pano: "sahne", standart: "sahne", oda: "sahne", kumas: "afis", perde: "sahne", buz: "rihtim", skala: "sira",
};

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
  // eski tema değerlerini yaşayan beş dünyaya eşle
  const legacy: Record<string, string> = { dark: "sahne", neon: "sahne", light: "afis", orange: "sahne", anons: "sahne", ...KALDIRILAN };
  const activeTheme = legacy[cfg.theme] ?? cfg.theme;
  const ozel = (cfg.tema_ozel || {})[activeTheme] || {};
  const dTop = WORLDS.find((w) => w.id === activeTheme) || WORLDS[0];
  const temaAccent = (ozel.accent || "").trim();
  const temaRadius = ozel.radius || "";
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
      <div class="row-between" style="margin-top:14px">
        <div>
          <div style="font-size:12.5px; font-weight:600">Skin Merkezi</div>
          <div style="font-size:11.5px; color:var(--text-dim)">Skinlerini düzenle, giy; Mojang pelerinlerini tak.</div>
        </div>
        <button class="btn ghost sm" id="skins-alani">${icon("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${icon("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${dTop.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${icon("undo")} Sıfırla</button>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Vurgu rengi</span>
          <div class="to-kontrol">
            <button class="tema-renk${temaAccent ? "" : " aktif"}" data-renk="" style="--sw:${dTop.accent}" title="Dünya rengi"></button>
            ${["#ff5a24", "#ffd83d", "#a3e635", "#2fd6c3", "#5b9dff", "#c084fc", "#ff4d8d", "#f5f5f5"].map((c) =>
              `<button class="tema-renk${temaAccent.toLowerCase() === c ? " aktif" : ""}" data-renk="${c}" style="--sw:${c}"></button>`).join("")}
            <label class="tema-renk-ozel" title="Özel renk">
              <input type="color" id="tema-accent-pick" value="${temaAccent || dTop.accent}" />
            </label>
          </div>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Köşe</span>
          <div class="sk-edit-seg" id="tema-radius">
            ${[["", "Dünya"], ["keskin", "Keskin"], ["yumusak", "Yumuşak"], ["hap", "Hap"]].map(([v, l]) =>
              `<button class="seg-btn${temaRadius === v ? " aktif" : ""}" data-r="${v}">${l}</button>`).join("")}
          </div>
          <span class="to-ornek" id="tema-ornek">Örnek buton</span>
        </div>
      </div>

      <div class="sahne-art-secim" id="sahne-art-secim">
        <div class="sas-bas">
          <b>Sahne arka planı</b>
          <span>Karakterin arkasındaki piksel manzara — yalnız Sahne dünyasında görünür.</span>
        </div>
        <div class="sas-izgara" id="sas-izgara"></div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("sparkles")} Ambiens &amp; İmleç</h3>
      <p class="set-sub">Dünyanızı hareketlendir: her temanın kendi ambiens parçacık efekti vardır; imleç simgesi de seçilebilir.</p>
      <div class="row-between">
        <div>
          <b style="font-size:13px">Ambiens parçacıklar</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Zımtırak, kar, fosfor yağmuru... — dünya efektinin yoğunluğu. Performans kaygısı varsa Sessiz'i seç.</div>
        </div>
        <select class="input" id="fx-particles" style="width:130px">
          <option value="none" ${cfg.fx_particles === "none" ? "selected" : ""}>Kapalı</option>
          <option value="low" ${cfg.fx_particles === "low" ? "selected" : ""}>Sessiz</option>
          <option value="mid" ${!cfg.fx_particles || cfg.fx_particles === "mid" ? "selected" : ""}>Normal</option>
          <option value="high" ${cfg.fx_particles === "high" ? "selected" : ""}>Yoğun</option>
        </select>
      </div>
      <div class="row-between" style="margin-top:12px">
        <div>
          <b style="font-size:13px">Fare imleci</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Launcher içindeki fare simgesi — temasının rengiyle boyunca güncellenir.</div>
        </div>
        <select class="input" id="cursor-style" style="width:130px">
          <option value="standart" ${!cfg.cursor_style || cfg.cursor_style === "standart" ? "selected" : ""}>Sistem</option>
          <option value="yikim" ${cfg.cursor_style === "yikim" ? "selected" : ""}>YIKIM Oku</option>
          <option value="hedef" ${cfg.cursor_style === "hedef" ? "selected" : ""}>Hedef</option>
          <option value="nokta" ${cfg.cursor_style === "nokta" ? "selected" : ""}>Nokta</option>
        </select>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${toggleRow("menu-anim", "Animasyonlar oynasın", cfg.menu_animasyon !== false)}
      <div class="row-between" style="margin-top:8px">
        <span>Tempo</span>
        <select class="input" id="menu-anim-hiz" style="width:150px">
          <option value="sakin" ${cfg.menu_animasyon_hiz === "sakin" ? "selected" : ""}>Sakin</option>
          <option value="normal" ${!cfg.menu_animasyon_hiz || cfg.menu_animasyon_hiz === "normal" ? "selected" : ""}>Normal</option>
          <option value="canli" ${cfg.menu_animasyon_hiz === "canli" ? "selected" : ""}>Canlı</option>
        </select>
      </div>
      <div class="anim-liste" id="anim-liste"><div class="spinner" style="margin:14px auto"></div></div>
      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap">
        <button class="btn ghost" id="anim-ekle">${icon("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${icon("undo")} Listeyi yenile</button>
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

    <div id="rozet-alani"></div>

    <div class="card set-card anim-fade-up">
      <h3>${icon("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${icon("dl")} İndirme Sayfası</button>
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
      await save();
      renderSettings(root); // özelleştirme paneli yeni dünyaya geçsin
    })
  );
  root.querySelector("#skins-alani")?.addEventListener("click", () => navigate("skins"));

  // ---- dünya başına özelleştirme (renk + köşe) ----
  const temaOzel = (): Record<string, { accent?: string; radius?: string }> =>
    (state.config.tema_ozel ||= {});
  const ozelYaz = async (alan: "accent" | "radius", deger: string) => {
    const kayit = (temaOzel()[activeTheme] ||= {});
    kayit[alan] = deger;
    if (!kayit.accent && !kayit.radius) delete temaOzel()[activeTheme];
    applyWorld();
    await save();
  };
  root.querySelectorAll(".tema-renk").forEach((b) =>
    b.addEventListener("click", async () => {
      const renk = (b as HTMLElement).dataset.renk || "";
      root.querySelectorAll(".tema-renk").forEach((x) => x.classList.toggle("aktif", x === b));
      await ozelYaz("accent", renk);
      toast(renk ? "Vurgu rengi güncellendi" : "Dünya rengine dönüldü");
    })
  );
  const temaPick = root.querySelector("#tema-accent-pick") as HTMLInputElement | null;
  temaPick?.addEventListener("input", () => {
    state.config.tema_ozel ||= {};
    (state.config.tema_ozel[activeTheme] ||= {}).accent = temaPick.value;
    applyWorld();
  });
  temaPick?.addEventListener("change", async () => {
    await save();
    toast("Vurgu rengi kaydedildi");
  });
  root.querySelectorAll("#tema-radius .seg-btn").forEach((b) =>
    b.addEventListener("click", async () => {
      root.querySelectorAll("#tema-radius .seg-btn").forEach((x) => x.classList.toggle("aktif", x === b));
      await ozelYaz("radius", (b as HTMLElement).dataset.r || "");
    })
  );
  root.querySelector("#tema-sifirla")?.addEventListener("click", async () => {
    delete temaOzel()[activeTheme];
    applyWorld();
    await save();
    renderSettings(root);
    toast("Bu dünyanın özelleştirmesi sıfırlandı");
  });

  // ---- sahne arka planı: piksel manzara seçimi (canlı minik önizleme) ----
  const artIzgara = root.querySelector("#sas-izgara") as HTMLElement | null;
  if (artIzgara) {
    const seciliArt = String(cfg.sahne_arka || "kiraz");
    artIzgara.innerHTML = SAHNE_ARTLARI.map((a) => `
      <button class="sas-kart${a.id === seciliArt ? " sel" : ""}" data-art="${a.id}">
        <span class="sas-tuval"><canvas data-ciz="${a.id}"></canvas></span>
        <b>${a.ad}</b>
        <small>${a.etiket}</small>
      </button>`).join("");
    artIzgara.querySelectorAll<HTMLCanvasElement>("canvas[data-ciz]").forEach((c) => {
      sahneArkaCiz(c, c.dataset.ciz || "kiraz");
    });
    artIzgara.querySelectorAll(".sas-kart").forEach((k) =>
      k.addEventListener("click", async () => {
        state.config.sahne_arka = (k as HTMLElement).dataset.art!;
        artIzgara.querySelectorAll(".sas-kart").forEach((x) => x.classList.toggle("sel", x === k));
        await save();
        toast("Sahne arka planı değişti");
      })
    );
  }

  // ambiens parçacıklar + özel imleç
  root.querySelector("#fx-particles")?.addEventListener("change", async (e) => {
    state.config.fx_particles = (e.target as HTMLSelectElement).value;
    applyWorld();
    await save();
  });
  root.querySelector("#cursor-style")?.addEventListener("change", async (e) => {
    state.config.cursor_style = (e.target as HTMLSelectElement).value;
    applyWorld();
    await save();
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
  wireToggle(root, "menu-anim", "menu_animasyon");

  // ---- ana menü animasyonları ----
  root.querySelector("#menu-anim-hiz")?.addEventListener("change", async (e) => {
    state.config.menu_animasyon_hiz = (e.target as HTMLSelectElement).value;
    await save();
  });
  const animYukle = () => animasyonlariYukle(root);
  root.querySelector("#anim-yenile")?.addEventListener("click", animYukle);
  root.querySelector("#anim-ekle")?.addEventListener("click", async () => {
    try {
      const eklenen = (await invoke("cmd_pick_emote")) as any[];
      if (eklenen?.length) {
        toast(`${eklenen.length} animasyon eklendi`);
        animYukle();
      }
    } catch (e) {
      toast(`Animasyon eklenemedi: ${e}`, "err");
    }
  });
  animYukle();

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
      await updaterFallback(e);
    }
  });
  root.querySelector("#upd-page")?.addEventListener("click", () => {
    openExternal(YAYIN_SAYFASI).catch(() =>
      toast(`Tarayıcı açılamadı — adresi elle aç: ${YAYIN_SAYFASI}`, "err")
    );
  });
  root.querySelector("#open-dir")?.addEventListener("click", async () => {
    const dir = await invoke("cmd_get_app_dir");
    openPath(dir).catch(() => {});
  });

  rozetKarti(root, cfg);
}

// ---------------------------------------------------------------------------
// ROZET — isim başı logosu (yalnız yönetici hesapta görünür)
// ---------------------------------------------------------------------------

/** Sahip/yönetici hesap mı? Yalnız Microsoft hesabı + atolye_admin listesi. */
export function rozetYoneticiMi(cfg: any): boolean {
  const acc = currentAccount();
  if (!acc || acc.kind !== "microsoft") return false;
  return (cfg?.atolye_admin || []).some(
    (n: string) => String(n).toLowerCase() === acc.name.toLowerCase()
  );
}

const ROZET_RENKLER = [
  "#ffffff", "#c9ced8", "#5b6472", "#12151c",
  "#ff5a24", "#ffd83d", "#a3e635", "#2fd6c3",
  "#5b9dff", "#c084fc", "#ff4d8d", "#8b3a1e",
];

function rozetKarti(root: HTMLElement, cfg: any): void {
  const host = root.querySelector("#rozet-alani") as HTMLElement | null;
  if (!host) return;
  if (!rozetYoneticiMi(cfg)) {
    host.innerHTML = "";
    return;
  }

  let izgara: string[] = new Array(64).fill("");
  let renk = "#ffd83d";
  let silgi = false;
  const gecmis: string[][] = [];
  let izinli: string[] = [...(cfg.atolye_izinli || [])];

  host.innerHTML = `
    <div class="card set-card anim-fade-up">
      <h3>${icon("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
      <p class="set-sub">
        Bu logoyu yalnız sen çizebilirsin. Çizim <b>tüm kurulumlarına</b> yazılır ve oyun içinde
        adının başına basılır — hangi sunucu olursa olsun, TAB ve F5 dahil. İzin verdiğin
        oyuncular da kendi logolarını çizebilir.
      </p>

      <div class="rozet-duzen">
        <div class="rozet-sol">
          <div class="rozet-izgara" id="rozet-izgara"></div>
          <div class="rozet-palet">
            <button class="rozet-renk${silgi ? "" : " aktif"}" data-c="" title="Boya">
              ${icon("brush")}
            </button>
            ${ROZET_RENKLER.map((c) => `<button class="rozet-renk" data-c="${c}" style="--c:${c}" title="${c}"></button>`).join("")}
            <button class="rozet-renk${silgi ? " aktif" : ""}" id="rozet-silgi" title="Silgi">
              ${icon("trash")}
            </button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${icon("undo")} Geri</button>
            <button class="btn ghost sm" id="rozet-temizle">Temizle</button>
            <button class="btn ghost sm" id="rozet-stok">Standart Y</button>
          </div>
        </div>
        <div class="rozet-sag">
          <div class="rozet-onizleme">
            <span class="ro-ambiyans"></span>
            <span class="ro-etiket">Önizleme</span>
            <span class="ro-satir">
              <span class="ro-rozet" id="rozet-onizleme"></span>
              <b class="ro-isim">${currentAccount()?.name || "oyuncu"}</b>
            </span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap">
            <button class="btn primary sm" id="rozet-kaydet">Kaydet ve yayınla</button>
            <button class="btn danger sm" id="rozet-sil">Rozeti kaldır</button>
          </div>
          <div class="set-sub" style="margin:0; font-size:11px">
            Kaydedince dosya tüm kurulumlara yazılır ve oyun içinde en geç 30 saniyede görünür.
          </div>
        </div>
      </div>

      <div class="rozet-izinler">
        <div class="rozet-izin-bas">
          <b>Kendi rozetini çizebilecekler</b>
          <span class="set-sub" style="margin:0; font-size:11px">Orijinal (Microsoft) hesap adlarını yaz. Liste sunucuya da gönderilir.</span>
        </div>
        <div class="rozet-izin-ekle">
          <input class="input" id="rozet-isim" placeholder="Oyuncu adı" maxlength="32" />
          <button class="btn ghost sm" id="rozet-ekle">${icon("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>
    </div>`;

  const hucreler = host.querySelector("#rozet-izgara") as HTMLElement;
  const onizleme = host.querySelector("#rozet-onizleme") as HTMLElement;
  const cipler = host.querySelector("#rozet-cipler") as HTMLElement;

  const cizgara = () => {
    hucreler.innerHTML = izgara
      .map((c, i) => `<button class="rozet-hucre${c ? " dolu" : ""}" data-i="${i}" style="--c:${c || "transparent"}"></button>`)
      .join("");
    // önizleme (32×32)
    onizleme.innerHTML = izgara
      .map((c) => `<i style="--c:${c || "transparent"}"></i>`)
      .join("");
  };

  const boya = (i: number) => {
    const yeni = silgi ? "" : renk;
    if (izgara[i] === yeni) return;
    izgara[i] = yeni;
    cizgara();
  };

  hucreler.addEventListener("click", (e) => {
    const h = (e.target as HTMLElement).closest(".rozet-hucre") as HTMLElement | null;
    if (!h) return;
    gecmis.push([...izgara]);
    if (gecmis.length > 40) gecmis.shift();
    boya(Number(h.dataset.i));
  });

  host.querySelectorAll(".rozet-renk[data-c]").forEach((b) =>
    b.addEventListener("click", () => {
      const c = (b as HTMLElement).dataset.c || "";
      silgi = false;
      if (c) renk = c;
      host.querySelectorAll(".rozet-renk").forEach((x) => x.classList.toggle("aktif", x === b));
    })
  );
  host.querySelector("#rozet-silgi")?.addEventListener("click", () => {
    silgi = true;
    host.querySelectorAll(".rozet-renk").forEach((x) => x.classList.remove("aktif"));
    host.querySelector("#rozet-silgi")?.classList.add("aktif");
  });
  host.querySelector("#rozet-geri")?.addEventListener("click", () => {
    const onceki = gecmis.pop();
    if (onceki) {
      izgara = onceki;
      cizgara();
    }
  });
  host.querySelector("#rozet-temizle")?.addEventListener("click", () => {
    gecmis.push([...izgara]);
    izgara = new Array(64).fill("");
    cizgara();
  });
  host.querySelector("#rozet-stok")?.addEventListener("click", () => {
    gecmis.push([...izgara]);
    izgara = standartY();
    cizgara();
  });

  host.querySelector("#rozet-kaydet")?.addEventListener("click", async () => {
    const btn = host.querySelector("#rozet-kaydet") as HTMLButtonElement;
    btn.disabled = true;
    btn.textContent = "Kaydediliyor…";
    try {
      const r: any = await invoke("cmd_rozet_ciz", { pikseller: izgara });
      toast(
        r?.yuklendi
          ? `Rozet kaydedildi — ${r.kurulum} kuruluma yazıldı ve yayınlandı`
          : `Rozet kaydedildi — ${r.kurulum} kuruluma yazıldı (sunucuya ulaşılamadı)`
      );
    } catch (e) {
      toast(`Rozet kaydedilemedi: ${e}`, "err");
    } finally {
      btn.disabled = false;
      btn.textContent = "Kaydet ve yayınla";
    }
  });
  host.querySelector("#rozet-sil")?.addEventListener("click", async () => {
    if (!confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")) return;
    await invoke("cmd_rozet_sil");
    izgara = new Array(64).fill("");
    cizgara();
    toast("Rozet kaldırıldı");
  });

  // izinli listesi
  const cipleriCiz = () => {
    cipler.innerHTML = izinli.length
      ? izinli.map((n, i) => `<span class="rozet-cip">${n}<button data-i="${i}" title="Kaldır">×</button></span>`).join("")
      : `<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>`;
    cipler.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", () => {
        izinli.splice(Number((b as HTMLElement).dataset.i), 1);
        void izinleriKaydet();
      })
    );
  };
  const izinleriKaydet = async () => {
    state.config.atolye_izinli = [...izinli];
    await save();
    cipleriCiz();
    try {
      const r: any = await invoke("cmd_rozet_izinler", { isimler: izinli });
      if (!r?.yuklendi) toast("Liste sunucuya gönderilemedi (yerel kaydedildi)", "err");
    } catch { /* ağ yok */ }
  };
  host.querySelector("#rozet-ekle")?.addEventListener("click", () => {
    const girdi = host.querySelector("#rozet-isim") as HTMLInputElement;
    const ad = girdi.value.trim();
    if (!ad) return;
    if (izinli.some((n) => n.toLowerCase() === ad.toLowerCase())) {
      toast("Bu isim zaten listede");
      return;
    }
    izinli.push(ad);
    girdi.value = "";
    void izinleriKaydet();
    toast(`${ad} eklendi`);
  });
  (host.querySelector("#rozet-isim") as HTMLInputElement)?.addEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Enter") (host.querySelector("#rozet-ekle") as HTMLElement)?.click();
  });

  cizgara();
  cipleriCiz();
  // diskte kayıtlı çizim varsa editörü onunla doldur
  invoke("cmd_rozet_oku")
    .then((r: any) => {
      const p = r?.pikseller;
      if (Array.isArray(p) && p.length === 64) {
        izgara = p;
        cizgara();
      }
    })
    .catch(() => {});
}

/** Standart Y + şimşek (modun varsayılan glifinin birebir kopyası). */
function standartY(): string[] {
  const B = "#ffffff";
  const T = "#ff5a24";
  const g = [
    [B, "", "", "", "", T, "", ""],
    [B, "", "", "", T, T, "", ""],
    ["", B, "", "", "", T, "", ""],
    ["", B, "", "", T, "", "", ""],
    ["", "", B, "", T, "", "", ""],
    ["", "", B, "", T, "", "", ""],
    ["", "", B, "", "", "", "", ""],
    ["", "", B, "", "", "", "", ""],
  ];
  return g.flat();
}

const YAYIN_SAYFASI = "https://github.com/YKSAMI1/yikimlient/releases/latest";

/** "v0.3.48" / "0.3.48" gibi etiketleri karşılaştırılabilir biçime indirger. */
function surumCek(s: unknown): string {
  return String(s ?? "").trim().replace(/^v/i, "");
}

/** Otomatik güncelleyici hata verirse: GitHub API + manifest teşhisi ile
    kullanıcıyı elle indirme yoluna yönlendirir. */
async function updaterFallback(hata: unknown): Promise<void> {
  let yeni = "";
  let teshis = "";
  try {
    const r: any = await invoke("cmd_check_updates");
    const cur = surumCek(r?.current);
    const son = surumCek(r?.latest);
    if (son && son !== cur) yeni = son;
  } catch { /* ağ yok — sorun değil */ }
  try {
    const t: any = await invoke("cmd_upd_teshis");
    const plat = Array.isArray(t?.platformlar) && t.platformlar.length ? t.platformlar.join(", ") : "yok";
    const parca = [`HTTP ${t?.durum || "?"}`, `manifest ${t?.surum || "?"}`, `platform: ${plat}`];
    if (t?.hata) parca.push(String(t.hata));
    teshis = parca.join(" · ");
  } catch { /* yoksay */ }
  const { root: mRoot, close } = openModal(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${yeni ? `<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${yeni}</b></div>` : ""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${teshis ? `Teşhis: ${teshis}` : `Hata: ${String(hata ?? "bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${icon("dl")} İndirme Sayfası</button>
    </div>
  `);
  mRoot.querySelector("#upd-kapat")?.addEventListener("click", () => close());
  mRoot.querySelector("#upd-sayfa")?.addEventListener("click", () => {
    openExternal(YAYIN_SAYFASI).catch(() =>
      toast(`Tarayıcı açılamadı — adresi elle aç: ${YAYIN_SAYFASI}`, "err")
    );
  });
}

/** Animasyon listesi: paket animasyonları + kullanıcının ekledikleri. */
async function animasyonlariYukle(root: HTMLElement): Promise<void> {
  const host = root.querySelector("#anim-liste") as HTMLElement | null;
  if (!host) return;
  try {
    const liste = (await invoke("cmd_list_emotes")) as { adi: string; baslik: string; yerlesik: boolean }[];
    if (!liste.length) {
      host.innerHTML = `<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>`;
      return;
    }
    host.innerHTML = "";
    for (const a of liste) {
      const satir = document.createElement("div");
      satir.className = "anim-satir";
      satir.innerHTML = `
        <span class="anim-ad">${a.baslik || a.adi}</span>
        ${a.yerlesik ? `<span class="chip gray">paket</span>` : `<span class="chip">kendi</span>`}
        ${a.yerlesik ? "" : `<button class="btn danger sm anim-sil" title="Kaldır">${icon("trash")}</button>`}`;
      satir.querySelector(".anim-sil")?.addEventListener("click", async () => {
        if (!confirm(`"${a.baslik}" kaldırılsın mı?`)) return;
        await invoke("cmd_delete_emote", { adi: a.adi });
        toast("Animasyon kaldırıldı");
        animasyonlariYukle(root);
      });
      host.appendChild(satir);
    }
  } catch (e) {
    host.innerHTML = `<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(e)}</p>`;
  }
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
