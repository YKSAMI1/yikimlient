import { el, fmtBytes, icon, invoke, nav, navigate, openModal, state, toast } from "../main";

interface SearchResult {
  source: string; id: string; slug: string; title: string; description: string;
  author: string; icon_url: string; downloads: number; kind: string; categories: string[];
}
interface RepoVersion {
  id: string; name: string; version_number: string; date: string;
  game_versions: string[]; loaders: string[];
  files: { url: string; filename: string; primary: boolean; size: number }[];
  source: string;
}

let kind = "mod";            // "mod" | "modpack" | "resourcepack" | "shader" | "world" | "datapack"
let lastQuery = "";
let lastResults: SearchResult[] = [];
// sayfalama: her kaynak (Modrinth/CurseForge) kendi limiti kadar döner; offset kaynak başına
// artar (search_all iki kaynağı birleştirip indirilme sırasına dizer)
let pageLimit = 40;
let pageOffset = 0;
let lastVersion = "";
let lastLoader = "";
let loadingMore = false;

export function renderExplore(root: HTMLElement): void {
  // nav.param iki kalıp: "kind:X" (paketler/içerik sayfalarından) veya instance id ("Mod Ekle")
  let presetInstance = nav.param;
  if (presetInstance?.startsWith("kind:")) {
    const k = presetInstance.slice(5);
    if (["mod", "modpack", "resourcepack", "shader", "world", "datapack"].includes(k)) {
      kind = k;
    }
    presetInstance = undefined;
  }
  nav.param = undefined;
  root.innerHTML = `
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Keşfet</h1>
      <p>Modrinth ve CurseForge'ta arama yap — mod veya hazır paket tek tıkla kur.</p>
    </div>
    <div class="exp-hero anim-fade-up">
      <div class="kind-toggle">
        <button class="kt ${kind === "mod" ? "sel" : ""}" data-k="mod">${icon("puzzle")} Modlar</button>
        <button class="kt ${kind === "modpack" ? "sel" : ""}" data-k="modpack">${icon("box")} Paketler</button>
        <button class="kt ${kind === "resourcepack" ? "sel" : ""}" data-k="resourcepack">Doku Paketleri</button>
        <button class="kt ${kind === "shader" ? "sel" : ""}" data-k="shader">Shaderlar</button>
        <button class="kt ${kind === "world" ? "sel" : ""}" data-k="world">Dünyalar</button>
        <button class="kt ${kind === "datapack" ? "sel" : ""}" data-k="datapack">Datapack</button>
      </div>
      <input class="input search-in exp-hero-q" id="exp-q" placeholder="Ara: sodium, pvp, bedwars…" />
    </div>
    <div class="exp-toolbar anim-fade-up">
      <select class="input" id="exp-ver" style="width:130px">
        <option value="">sürüm: hepsi</option>
        ${state.featured_versions.map((v) => `<option>${v}</option>`).join("")}
      </select>
      <select class="input" id="exp-loader" style="width:130px">
        <option value="">loader: hepsi</option>
        <option value="fabric">fabric</option>
        <option value="forge">forge</option>
      </select>
      <button class="btn primary" id="exp-go">Ara</button>
      <span class="chip green">● Modrinth</span>
      <span class="chip green" title="Resmî API veya genel ayna üzerinden">● CurseForge</span>
      ${presetInstance ? `<span class="chip">hedef kurulum seçili</span>` : ""}
    </div>
    <div class="result-grid" id="exp-results">
      <div class="card empty-state" style="grid-column:1/-1">
        ${icon("search")}
        <h3 style="margin-top:14px">Bir şeyler ara</h3>
        <p style="margin-top:6px">"sodium", "essential", "pvp pack" gibi…</p>
      </div>
    </div>
    <div class="exp-popular" id="exp-popular">
      <div class="section-head">
        <h2 class="dim-cap">EN ÇOK İNDİRİLENLER</h2>
      </div>
      <div class="popular-strip" id="popular-strip"><div class="spinner" style="margin:26px auto"></div></div>
    </div>
    </div>
  `;

  root.querySelectorAll(".kt").forEach((b) =>
    b.addEventListener("click", () => {
      kind = (b as HTMLElement).dataset.k!;
      root.querySelectorAll(".kt").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel");
      if (lastQuery) doSearch(root, lastQuery);
      loadPopular(root); // tür değişince popülerler de o türe dönsün
    })
  );
  const q = root.querySelector("#exp-q") as HTMLInputElement;
  let deb: ReturnType<typeof setTimeout>;
  q.addEventListener("input", () => {
    clearTimeout(deb);
    deb = setTimeout(() => doSearch(root, q.value.trim()), 380);
  });
  q.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(root, q.value.trim()); });
  root.querySelector("#exp-go")?.addEventListener("click", () => doSearch(root, q.value.trim()));
  root.querySelector("#exp-ver")?.addEventListener("change", () => { if (lastQuery) doSearch(root, lastQuery); });
  root.querySelector("#exp-loader")?.addEventListener("change", () => { if (lastQuery) doSearch(root, lastQuery); });

  if (presetInstance && lastQuery) doSearch(root, lastQuery);

  // Popülerler — her açılışta tazele
  loadPopular(root);
}

async function loadPopular(root: HTMLElement): Promise<void> {
  const strip = root.querySelector("#popular-strip") as HTMLElement;
  try {
    const popular: SearchResult[] = await invoke("cmd_repos_popular", { kind, loader: "" });
    strip.innerHTML = "";
    for (const r of popular) {
      const card = el(`
        <div class="card hover popular-card">
          ${r.icon_url
            ? `<img class="pc-icon" src="${r.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','puzzle')" />`
            : `<div class="pc-icon ph">${icon("puzzle")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${r.title}</div>
            <div class="pc-meta">${icon("dl")} ${fmtDownloads(r.downloads)}</div>
          </div>
        </div>
      `);
      card.addEventListener("click", () => openProject(r));
      strip.appendChild(card);
    }
  } catch {
    strip.innerHTML = `<p class="pc-fail">Popüler listesi yüklenemedi.</p>`;
  }
}

async function doSearch(root: HTMLElement, query: string): Promise<void> {
  if (!query) return;
  lastQuery = query;
  const grid = root.querySelector("#exp-results") as HTMLElement;
  grid.innerHTML = `<div class="spinner" style="grid-column:1/-1; margin:40px auto"></div>`;
  lastVersion = (root.querySelector("#exp-ver") as HTMLSelectElement).value;
  const rawLoader = (root.querySelector("#exp-loader") as HTMLSelectElement).value;
  // içerik türlerinde (doku/shader/dünya/datapack) loader kategorisi anlamsızdır
  // ve Modrinth facet'i sonuçları boşaltır → boş geç
  const isContent = ["resourcepack", "shader", "world", "datapack"].includes(kind);
  lastLoader = isContent ? "" : rawLoader;
  pageOffset = 0;
  try {
    const resp = await invoke("cmd_repos_search", {
      query, kind, versions: lastVersion ? [lastVersion] : [], loader: lastLoader, offset: 0, limit: pageLimit,
    });
    lastResults = resp.results;
    grid.innerHTML = "";
    if (!lastResults.length) {
      grid.innerHTML = `<div class="card empty-state" style="grid-column:1/-1"><p>Sonuç bulunamadı — farklı bir şey dene.</p></div>`;
      return;
    }
    for (const r of lastResults) grid.appendChild(resultCard(r));
    attachMoreBtn(root);
  } catch (e) {
    grid.innerHTML = `<div class="card" style="grid-column:1/-1"><p>Arama hatası: ${e}</p></div>`;
  }
}

/// Sonuç listesinin sonuna "Daha fazla göster" koyar — sayfalama bitince kaldırır.
function attachMoreBtn(root: HTMLElement): void {
  const grid = root.querySelector("#exp-results") as HTMLElement;
  const old = grid.querySelector("#exp-more");
  if (old) old.remove();
  if (lastResults.length < pageLimit) return; // aşırı az gelmediyse devam edilebilir
  const btn = el(`
    <div class="card hover exp-more-card" id="exp-more" style="grid-column:1/-1; display:flex; align-items:center; justify-content:center; gap:10px; padding:14px; cursor:pointer">
      <span id="exp-more-label">Daha fazla göster</span>
    </div>
  `);
  btn.addEventListener("click", () => loadMore(root));
  grid.appendChild(btn);
}

async function loadMore(root: HTMLElement): Promise<void> {
  if (loadingMore) return;
  loadingMore = true;
  const grid = root.querySelector("#exp-results") as HTMLElement;
  const label = grid.querySelector("#exp-more-label");
  if (label) label.textContent = "Yükleniyor…";
  try {
    const resp = await invoke("cmd_repos_search", {
      query: lastQuery, kind, versions: lastVersion ? [lastVersion] : [], loader: lastLoader,
      offset: pageOffset, limit: pageLimit,
    });
    const fresh: SearchResult[] = resp.results;
    pageOffset += pageLimit;
    // aynı projeyi iki kaynaktan tekrar eklemeyi önle (id tekrarları)
    const seen = new Set(lastResults.map((r) => r.id));
    const added: SearchResult[] = fresh.filter((r) => !seen.has(r.id));
    grid.querySelector("#exp-more")?.remove();
    if (!added.length) return;
    lastResults = lastResults.concat(added);
    for (const r of added) grid.appendChild(resultCard(r));
    attachMoreBtn(root);
  } catch (e) {
    grid.innerHTML += `<div class="card" style="grid-column:1/-1"><p>Sayfa yüklenemedi: ${e}</p></div>`;
  } finally {
    loadingMore = false;
  }
}

function resultCard(r: SearchResult): HTMLElement {
  const card = el(`
    <div class="card hover result-card">
      <div class="r-top">
        ${r.icon_url ? `<img class="r-icon" src="${r.icon_url}" loading="lazy" />` : `<div class="r-icon ph">${icon(r.kind === "modpack" ? "box" : "puzzle")}</div>`}
        <div class="r-head">
          <div class="r-title">${r.title}</div>
          <div class="r-meta">
            <span class="chip">${r.source === "modrinth" ? "Modrinth" : "CurseForge"}</span>
            <span class="chip gray">${icon("dl")} ${fmtDownloads(r.downloads)}</span>
            ${r.author ? `<span class="chip gray">${r.author}</span>` : ""}
          </div>
        </div>
      </div>
      <p class="r-desc">${r.description}</p>
    </div>
  `);
  card.addEventListener("click", () => openProject(r));
  return card;
}

function fmtDownloads(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}K`;
  return String(n);
}

async function openProject(r: SearchResult): Promise<void> {
  const { root, close } = openModal(`
    <h2>${r.title}</h2>
    <div class="sub">${r.source === "modrinth" ? "Modrinth" : "CurseForge"} · ${({ mod: "Mod", modpack: "Mod Paketi", resourcepack: "Doku Paketi", shader: "Shader", world: "Dünya", datapack: "Datapack" } as Record<string, string>)[r.kind] || r.kind}</div>
    <div class="spinner" style="margin:24px auto"></div>
    <div id="ver-list" class="ver-list"></div>
  `);
  const version = (document.querySelector("#exp-ver") as HTMLSelectElement)?.value || "";
  const rawLoader = (document.querySelector("#exp-loader") as HTMLSelectElement)?.value ||
    (state.instances[0]?.mod_loader === "forge" ? "forge" : "fabric");
  // içerik türlerinde loader facet'i sonuç boşaltır → boş geç
  const isContent = ["resourcepack", "shader", "world", "datapack"].includes(r.kind);
  const loader = isContent ? "" : rawLoader;
  try {
    const versions: RepoVersion[] = await invoke("cmd_repos_get_versions", {
      source: r.source, projectId: r.id, kind: r.kind, loader: r.kind === "mod" ? loader : "", gameVersion: version,
    });
    const list = root.querySelector("#ver-list") as HTMLElement;
    list.innerHTML = "";
    if (!versions.length) {
      list.innerHTML = `<p style="color:var(--text-dim)">Bu sürüm/loader için dosya bulunamadı.</p>`;
      return;
    }
    for (const v of versions) {
      const row = el(`
        <div class="ver-row">
          <div class="ver-info">
            <b>${v.name || v.version_number}</b>
            <span class="ver-date">${v.date.slice(0, 10)} · ${v.game_versions.slice(0, 3).join(", ")}${v.game_versions.length > 3 ? "…" : ""}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px">
            <span class="chip gray">${fmtBytes(v.files[0]?.size || 0)}</span>
            <button class="btn primary sm">İndir</button>
          </div>
        </div>
      `);
      row.querySelector("button")?.addEventListener("click", () => installFlow(r, v, close));
      list.appendChild(row);
    }
  } catch (e) {
    (root.querySelector("#ver-list") as HTMLElement).innerHTML = `<p style="color:var(--danger)">Sürümler alınamadı: ${e}</p>`;
  }
}

async function installFlow(r: SearchResult, v: RepoVersion, closeParent: () => void): Promise<void> {
  if (r.kind === "modpack") {
    closeParent();
    await installPack(r, v);
  } else {
    // hedef kurulum seç
    if (!state.instances.length) {
      toast("Önce bir kurulum oluşturmalısın", "err");
      navigate("instances");
      return;
    }
    const { root, close } = openModal(`
      <h2>Hangi kuruluma?</h2>
      <div class="sub">${r.title} → ${v.name || v.version_number}</div>
      <select class="input" id="tgt">
        ${state.instances.map((i) => {
          // icon bir dosya yoluysa (media/con.png) option metninde GÖSTERME —
          // kullanıcı bunu "rastgele dosya yolu" olarak görüyordu
          const ic = i.icon && !i.icon.includes("/") && !i.icon.includes("\\") ? `${i.icon} ` : "";
          return `<option value="${i.id}">${ic}${i.name} (${i.mod_loader} ${i.mc_version})</option>`;
        }).join("")}
      </select>
      <div style="display:flex; gap:10px; margin-top:16px">
        <button class="btn ghost" id="cxl" style="flex:1">Vazgeç</button>
        <button class="btn primary" id="ok" style="flex:2">Kur</button>
      </div>
    `);
    root.querySelector("#cxl")?.addEventListener("click", close);
    root.querySelector("#ok")?.addEventListener("click", async () => {
      const tgt = (root.querySelector("#tgt") as HTMLSelectElement).value;
      const btn = root.querySelector("#ok") as HTMLButtonElement;
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner"></span> İndiriliyor…`;
      try {
        if (r.kind === "resourcepack" || r.kind === "shader" || r.kind === "world" || r.kind === "datapack") {
          await invoke("cmd_repos_install_content", {
            instanceId: tgt, source: r.source, projectId: r.id, versionId: v.id, kind: r.kind,
          });
        } else {
          await invoke("cmd_repos_install", {
            instanceId: tgt, source: r.source, projectId: r.id, versionId: v.id,
          });
        }
        close();
        closeParent();
        const hedef: Record<string, string> = {
          resourcepack: "Doku paketleri klasörüne indirildi",
          shader: "Shader klasörüne indirildi",
          world: "Dünyalar klasörüne indirildi",
          datapack: "Datapacks klasörüne indirildi",
        };
        toast(hedef[r.kind] || `Kuruldu: ${r.title}`);
      } catch (e) {
        toast(String(e), "err");
        btn.disabled = false;
        btn.textContent = "Kur";
      }
    });
  }
}

/// Paket kurulumu + ilk açılışta java preset sorusu.
async function installPack(r: SearchResult, v: RepoVersion): Promise<void> {
  const { root, close } = openModal(`
    <h2>Paket Kurulumu</h2>
    <div class="sub">${r.title} — indirilecek, açılacak ve kurulum oluşturulacak.</div>
    <div class="progressbar"><div id="pk-bar" style="transform:scaleX(0.03)"></div></div>
    <div id="pk-detail" style="margin-top:10px; font-size:12.5px; color:var(--text-dim)">Başlıyor…</div>
    <div style="display:none" id="pk-done"></div>
  `);
  const bar = root.querySelector("#pk-bar") as HTMLElement;
  const detail = root.querySelector("#pk-detail") as HTMLElement;
  const { listen } = await import("../main");
  const off = await listen("launch-progress", (e: any) => {
    if (e.payload.stage === "modpack") {
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, e.payload.percent / 100))})`;
      detail.textContent = e.payload.detail || "";
    }
  });
  try {
    const inst = await invoke("cmd_install_pack_files", {
      source: r.source, projectId: r.id, versionId: v.id, packName: r.title, icon: null, iconUrl: r.icon_url || null,
    });
    off();
    close();
    await import("../main").then((m) => m.refreshState());
    await askJavaPreset(inst);
    navigate("instances");
  } catch (e) {
    off();
    detail.textContent = `Kurulum başarısız: ${e}`;
    detail.style.color = "var(--danger)";
  }
}

/// "Özel java argümanı eklensin mi?" — paket kurulunca ilk soru.
async function askJavaPreset(inst: any): Promise<void> {
  const presets: any[] = await invoke("cmd_list_java_arg_presets");
  const { root, close } = openModal(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    <div class="preset-list">
      ${presets.map((p) => `
        <div class="preset-row card hover" data-id="${p.id}">
          <div class="preset-head"><b>${p.name}</b><span class="chip gray">${p.recommended_ram_mb} MB öneri</span></div>
          <p>${p.description}</p>
        </div>`).join("")}
      <div class="preset-row card hover" data-id="__skip">
        <div class="preset-head"><b>Atla — varsayılan dengeli kalsın</b></div>
      </div>
    </div>
  `);
  root.querySelectorAll(".preset-row").forEach((row) => {
    row.addEventListener("click", async () => {
      const id = (row as HTMLElement).dataset.id!;
      if (id !== "__skip") {
        await invoke("cmd_set_instance_java_preset", { id: inst.id, presetId: id });
        toast(`Preset: ${presets.find((p) => p.id === id)?.name}`);
      }
      close();
    });
  });
}
