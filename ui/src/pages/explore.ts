import { el, fmtBytes, icon, invoke, nav, navigate, openExternal, openModal, state, toast } from "../main";
import { mdToHtml } from "../md";

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
interface RepoProject {
  source: string; id: string; slug: string; title: string; description: string; body: string;
  author: string; icon_url: string; downloads: number; followers: number;
  categories: string[]; game_versions: string[]; loaders: string[];
  gallery: { url: string; title: string; featured: boolean }[];
  links: { label: string; url: string }[];
  license: string; updated: string;
}
interface ModrinthHit {
  project_id?: string; slug?: string; title?: string; description?: string;
  author?: string; icon_url?: string; downloads?: number;
  display_categories?: string[];
}

const TUR_AD: Record<string, string> = {
  mod: "Mod", modpack: "Mod Paketi", resourcepack: "Doku Paketi",
  shader: "Shader", world: "Dünya", datapack: "Datapack",
};

let kind = "mod";
let lastQuery = "";
let lastVersion = "";
let lastLoader = "";

/* --- Sonsuz akış (v0.7.18): liste yukarıdan aşağı akar, dibe gelince
   bir sonraki sayfa kendiliğinden eklenir. --- */
const SAYFA_BOY = 24;
let akisSayfa: ((offset: number, limit: number) => Promise<SearchResult[]>) | null = null;
let akisOfset = 0;
let akisBusy = false;
let akisBitti = false;
let akisGoz: IntersectionObserver | null = null;
let akisId = 0;
let akisDinleyici = false;

/// Açık proje (Modrinth'teki gibi tam sayfa). null → liste görünümü.
let acikProje: SearchResult | null = null;
let kok: HTMLElement | null = null;

export function renderExplore(root: HTMLElement): void {
  kok = root;
  let presetInstance = nav.param;
  if (presetInstance?.startsWith("kind:")) {
    const k = presetInstance.slice(5);
    if (Object.keys(TUR_AD).includes(k)) kind = k;
    presetInstance = undefined;
  }
  nav.param = undefined;
  if (acikProje) {
    void buildProject(acikProje);
    return;
  }
  buildList(!!presetInstance);
}

/* ============================================================
   LİSTE GÖRÜNÜMÜ
   ============================================================ */
function buildList(_preset = false): void {
  const root = kok!;
  root.innerHTML = `
    <div class="page-wrap xp-wrap">
      <div class="xp-head anim-fade-up">
        <div>
          <h1>Keşfet</h1>
          <p>Modrinth ve CurseForge — bir içeriğe tıkla, sayfası açılsın, sürümünü seç ve kur.</p>
        </div>
        <div class="xp-head-badges">
          <span class="chip green">● Modrinth</span>
          <span class="chip ${state.curseforge ? "green" : "gray"}" title="CurseForge (resmî API veya anahtarsız genel ayna)">● CurseForge</span>
        </div>
      </div>

      <div class="xp-search-row anim-fade-up">
        <div class="xp-search">
          ${icon("search")}
          <input id="exp-q" placeholder="Ara: sodium, pvp, shaders…" autocomplete="off" spellcheck="false" />
          <button class="btn primary" id="exp-go">Ara</button>
        </div>
      </div>

      <div class="xp-tabs anim-fade-up" role="tablist">
        ${Object.entries(TUR_AD).map(([k, ad]) =>
          `<button class="xp-tab ${kind === k ? "sel" : ""}" data-k="${k}">${ad}</button>`).join("")}
      </div>

      <div class="xp-filters anim-fade-up">
        <label class="xp-field"><span>Oyun sürümü</span>
          <select class="input" id="exp-ver">
            <option value="">hepsi</option>
            ${state.featured_versions.map((v) => `<option>${v}</option>`).join("")}
          </select>
        </label>
        <label class="xp-field"><span>Yükleyici</span>
          <select class="input" id="exp-loader">
            <option value="">hepsi</option>
            <option value="fabric">fabric</option>
            <option value="quilt">quilt</option>
            <option value="forge">forge</option>
            <option value="neoforge">neoforge</option>
          </select>
        </label>
        <span class="xp-hint" id="exp-hint">Sonuçlar iki kaynaktan birleştirilir.</span>
      </div>

      <div class="xp-section-head xp-flow-head anim-fade-up"><h2 id="exp-baslik">En çok indirilenler</h2></div>

      <div class="xp-grid" id="exp-results"></div>
      <div class="xp-son" id="exp-son"><div class="spinner"></div></div>
    </div>
  `;

  root.querySelectorAll(".xp-tab").forEach((b) =>
    b.addEventListener("click", () => {
      kind = (b as HTMLElement).dataset.k!;
      root.querySelectorAll(".xp-tab").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel");
      if (lastQuery) doSearch(lastQuery);
      else populerBaslat();
    })
  );

  const q = root.querySelector("#exp-q") as HTMLInputElement;
  let deb: ReturnType<typeof setTimeout>;
  q.addEventListener("input", () => {
    clearTimeout(deb);
    deb = setTimeout(() => doSearch(q.value.trim()), 400);
  });
  q.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(q.value.trim()); });
  root.querySelector("#exp-go")?.addEventListener("click", () => doSearch(q.value.trim()));
  root.querySelector("#exp-ver")?.addEventListener("change", () => {
    if (lastQuery) doSearch(lastQuery); else populerBaslat();
  });
  root.querySelector("#exp-loader")?.addEventListener("change", () => {
    if (lastQuery) doSearch(lastQuery); else populerBaslat();
  });
  root.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a[data-ext]") as HTMLAnchorElement | null;
    if (a) { e.preventDefault(); openExternal(a.href); }
  });

  akisGoz?.disconnect();
  akisGoz = null;
  if (!akisDinleyici) {
    // IntersectionObserver'a ek olarak kaydırma yedeği (bazı ortamlarda IO
    // bildirimi gecikebiliyor; kullanıcı dibe gelince mutlaka tetiklensin).
    document.addEventListener("scroll", akisKaydirma, true);
    window.addEventListener("resize", akisKaydirma);
    akisDinleyici = true;
  }
  const son = root.querySelector("#exp-son");
  if (son && "IntersectionObserver" in window) {
    akisGoz = new IntersectionObserver(
      (girisler) => { if (girisler.some((g) => g.isIntersecting)) void akisEkle(); },
      { root: null, rootMargin: "600px 0px", threshold: 0 }
    );
    akisGoz.observe(son);
  }
  populerBaslat();
}

/* ---------- Sonsuz akış ---------- */

function akisBasliklar(): HTMLElement | null {
  return kok?.querySelector("#exp-baslik") as HTMLElement | null;
}

function akisDurum(yazi: string | null): void {
  const son = kok?.querySelector("#exp-son") as HTMLElement | null;
  if (!son) return;
  son.innerHTML = yazi === null ? `<div class="spinner"></div>` : `<span>${yazi}</span>`;
  son.classList.toggle("bos", yazi !== null);
}

/// v0.7.18 — tek akış: popüler liste + arama aynı mekanizmayı kullanır.
function akisBaslat(
  saglayici: (offset: number, limit: number) => Promise<SearchResult[]>,
  baslik: string
): void {
  akisId++;
  akisSayfa = saglayici;
  akisOfset = 0;
  akisBusy = false;
  akisBitti = false;
  const grid = kok?.querySelector("#exp-results") as HTMLElement | null;
  if (grid) grid.innerHTML = "";
  const h = akisBasliklar();
  if (h) h.textContent = baslik;
  akisDurum(null);
  void akisEkle();
}

function akisKaydirma(): void {
  if (!akisSayfa || akisBitti || akisBusy) return;
  const son = kok?.querySelector("#exp-son") as HTMLElement | null;
  if (!son) return;
  const r = son.getBoundingClientRect();
  if (r.top < window.innerHeight + 500) void akisEkle();
}

async function akisEkle(): Promise<void> {
  if (akisBusy || akisBitti || !akisSayfa) return;
  const benim = akisId;
  akisBusy = true;
  const grid = kok?.querySelector("#exp-results") as HTMLElement | null;
  akisDurum(null);
  try {
    const parca = await akisSayfa(akisOfset, SAYFA_BOY);
    if (benim !== akisId) return;
    if (!parca.length) {
      akisBitti = true;
      akisDurum(akisOfset === 0 ? "Sonuç yok." : "Hepsi bu kadar.");
      return;
    }
    const mevcut = new Set(
      Array.from(grid?.querySelectorAll<HTMLElement>(".xp-card") || []).map(
        (c) => c.dataset.id || ""
      )
    );
    let eklenen = 0;
    for (const r of parca) {
      if (mevcut.has(`${r.source}:${r.id}`)) continue;
      grid?.appendChild(resultCard(r));
      eklenen++;
    }
    akisOfset += parca.length;
    // Kısmi sayfa "bitti" demek DEĞİL: eski backend'ler istenen limitin
    // altında dönebiliyor (ör. popüler uçta 12). Gerçek son, yeni kart
    // gelmeyen sayfadır.
    if (eklenen === 0) akisBitti = true;
    akisDurum(akisBitti ? "Hepsi bu kadar." : null);
    // Sentinör hâlâ ekranda ise (kısa içerik) bir sayfa daha çek.
    setTimeout(() => {
      const son = kok?.querySelector("#exp-son") as HTMLElement | null;
      if (!son || eklenen === 0) return;
      const r = son.getBoundingClientRect();
      if (!akisBitti && r.top < window.innerHeight + 600) void akisEkle();
    }, 60);
  } catch (e) {
    if (benim !== akisId) return;
    akisBitti = true;
    akisDurum(`Yüklenemedi: ${String(e)}`);
  } finally {
    if (benim === akisId) akisBusy = false;
  }
}

/// En çok indirilenler — doğrudan Modrinth (index=downloads, offset'li).
///
/// Neden backend değil? `cmd_repos_popular`'ın `page` parametresi yeni
/// eklendi; eski launcher exe'lerinde komut bu parametreyi yok sayıp her
/// çağrıda ilk 12 kaydı döndürüyordu → sıcak UI 12 < 24 görüp "Hepsi bu
/// kadar." diyordu. Liste burada doğrudan çekilince exe güncellemesi
/// gerekmeden gerçek sayfa sayfa akış çalışır (API CORS'a açık).
async function modrinthPopuler(offset: number, limit: number): Promise<SearchResult[]> {
  const facets: string[][] = [[`project_type:${kind}`]];
  if (lastLoader) facets.push([`categories:${lastLoader}`]);
  const url =
    "https://api.modrinth.com/v2/search?query=&index=downloads" +
    `&facets=${encodeURIComponent(JSON.stringify(facets))}` +
    `&offset=${offset}&limit=${limit}`;
  const yanit = await fetch(url, { headers: { Accept: "application/json" } });
  if (!yanit.ok) throw new Error(`Modrinth ${yanit.status}`);
  const js = (await yanit.json()) as { hits?: ModrinthHit[] };
  return (js.hits || []).map((h) => ({
    source: "modrinth",
    id: String(h.project_id || ""),
    slug: String(h.slug || ""),
    title: String(h.title || ""),
    description: String(h.description || ""),
    author: String(h.author || "Modrinth"),
    icon_url: String(h.icon_url || ""),
    downloads: Number(h.downloads || 0),
    kind,
    categories: Array.isArray(h.display_categories) ? h.display_categories : [],
  }));
}

function populerBaslat(): void {
  lastQuery = "";
  const ldr = (kok?.querySelector("#exp-loader") as HTMLSelectElement | null)?.value || "";
  lastLoader = ["resourcepack", "shader", "world", "datapack"].includes(kind) ? "" : ldr;
  akisBaslat(async (offset, limit) => {
    try {
      return await modrinthPopuler(offset, limit);
    } catch {
      // Çevrimdışı / API erişimi yok: eski backend yoluna düş.
      const page = Math.floor(offset / SAYFA_BOY);
      const r: SearchResult[] = await invoke("cmd_repos_popular", { kind, loader: lastLoader, page });
      return r.slice(0, limit);
    }
  }, "En çok indirilenler");
}

/// Arama da aynı sonsuz akışa düşer: sorgu değişince akış sıfırlanır.
async function doSearch(query: string): Promise<void> {
  const grid = kok?.querySelector("#exp-results") as HTMLElement | null;
  if (!grid) return;
  if (!query) { populerBaslat(); return; }
  lastQuery = query;
  const verSel = kok!.querySelector("#exp-ver") as HTMLSelectElement;
  const loaderSel = kok!.querySelector("#exp-loader") as HTMLSelectElement;
  lastVersion = verSel?.value || "";
  const rawLoader = loaderSel?.value || "";
  const isContent = ["resourcepack", "shader", "world", "datapack"].includes(kind);
  lastLoader = isContent ? "" : rawLoader;
  akisBaslat(async (offset, limit) => {
    const resp = await invoke("cmd_repos_search", {
      query, kind, versions: lastVersion ? [lastVersion] : [], loader: lastLoader, offset, limit,
    });
    return resp.results as SearchResult[];
  }, `Arama: ${query}`);
}

function resultCard(r: SearchResult): HTMLElement {
  const card = el(`
    <button class="xp-card" data-id="${r.source}:${r.id}">
      <span class="xp-card-icon">${r.icon_url
        ? `<img src="${r.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-card-icon ph','puzzle')" />`
        : icon(r.kind === "modpack" ? "box" : "puzzle")}</span>
      <span class="xp-card-body">
        <span class="xp-card-t">${r.title}</span>
        <span class="xp-card-a">${r.author || (r.source === "modrinth" ? "Modrinth" : "CurseForge")}</span>
        <span class="xp-card-d">${r.description}</span>
        <span class="xp-card-foot">
          <span class="xp-card-stat">${icon("dl")} ${fmtDownloads(r.downloads)}</span>
          ${(r.categories || []).slice(0, 3).map((c) => `<span class="xp-tag">${c}</span>`).join("")}
        </span>
      </span>
    </button>
  `);
  card.addEventListener("click", () => openProject(r));
  return card;
}

function fmtDownloads(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}K`;
  return String(n);
}

function openProject(r: SearchResult): void {
  acikProje = r;
  void buildProject(r);
  kok?.scrollTo({ top: 0 });
}

/* ============================================================
   PROJE SAYFASI (Modrinth tarzı)
   ============================================================ */
async function buildProject(r: SearchResult): Promise<void> {
  const root = kok!;
  const isContent = ["resourcepack", "shader", "world", "datapack"].includes(r.kind);
  // Mod paketi HER ZAMAN yeni bir kurulum oluşturur; hedef kurulum seçimi anlamsız
  // (mod paketi, mod paketinin içine kurulamaz).
  const isPack = r.kind === "modpack";
  root.innerHTML = `
    <div class="page-wrap xp-wrap xp-detail">
      <button class="xp-back" id="xp-back">${icon("back")} Keşfet'e dön</button>

      <div class="xp-hero anim-fade-up">
        <div class="xp-hero-icon">
          ${r.icon_url
            ? `<img src="${r.icon_url}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-hero-icon ph','puzzle')" />`
            : icon(r.kind === "modpack" ? "box" : "puzzle")}
        </div>
        <div class="xp-hero-main">
          <div class="xp-hero-kicker">${TUR_AD[r.kind] || r.kind} · ${r.source === "modrinth" ? "Modrinth" : "CurseForge"}</div>
          <h1 class="xp-hero-title">${r.title}</h1>
          <p class="xp-hero-sub">${r.description}</p>
          <div class="xp-hero-chips" id="xp-hero-chips">
            <span class="xp-tag">${icon("dl")} ${fmtDownloads(r.downloads)}</span>
            ${r.author ? `<span class="xp-tag">${r.author}</span>` : ""}
            ${(r.categories || []).slice(0, 5).map((c) => `<span class="xp-tag">${c}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="xp-cols">
        <div class="xp-main">
          <div class="xp-panel" id="xp-gallery-panel" hidden>
            <div class="xp-panel-h">Galeri</div>
            <div class="xp-gallery" id="xp-gallery"></div>
          </div>
          <div class="xp-panel">
            <div class="xp-panel-h">Açıklama</div>
            <div class="xp-prose" id="xp-body"><div class="spinner" style="margin:26px auto"></div></div>
          </div>
        </div>

        <aside class="xp-side">
          <div class="xp-panel xp-install">
            <div class="xp-panel-h">Kur</div>
            ${isPack ? `
              <p class="xp-note">Bu paket için <b>yeni bir kurulum</b> oluşturulacak. Paket kendi Minecraft sürümünü ve yükleyicisini getirir; hedef kurulum seçilmez.</p>
              <div class="xp-ver-list" id="xp-vers"><div class="spinner" style="margin:22px auto"></div></div>
            ` : state.instances.length ? `
              <label class="xp-field"><span>Hedef kurulum</span>
                <select class="input" id="xp-inst">
                  ${state.instances.map((i) => `<option value="${i.id}">${i.name} · ${i.mod_loader} ${i.mc_version}</option>`).join("")}
                </select>
              </label>
              <div class="xp-two">
                <label class="xp-field"><span>Oyun sürümü</span><select class="input" id="xp-mc"></select></label>
                <label class="xp-field"><span>Yükleyici</span><select class="input" id="xp-loader" ${isContent ? "disabled" : ""}></select></label>
              </div>
              <div class="xp-ver-list" id="xp-vers"><div class="spinner" style="margin:22px auto"></div></div>
            ` : `
              <p class="xp-note">Mod kurmak için bir kurulum gerekiyor.</p>
              <button class="btn primary" id="xp-new-inst">Kurulum oluştur</button>
            `}
          </div>
          <div class="xp-panel" id="xp-links-panel" hidden>
            <div class="xp-panel-h">Bağlantılar</div>
            <div class="xp-links" id="xp-links"></div>
          </div>
        </aside>
      </div>
    </div>
  `;

  root.querySelector("#xp-back")?.addEventListener("click", () => {
    acikProje = null;
    buildList();
  });
  root.querySelector("#xp-new-inst")?.addEventListener("click", () => navigate("instances"));

  // proje detayı + tüm sürümler paralel
  void (async () => {
    let proje: RepoProject | null = null;
    try {
      proje = await invoke("cmd_repos_project", { source: r.source, projectId: r.id, kind: r.kind });
    } catch { /* ayrıntı gelmezse özet kartıyla devam */ }

    if (proje) {
      const chips = root.querySelector("#xp-hero-chips") as HTMLElement | null;
      if (chips) {
        chips.innerHTML = `
          <span class="xp-tag">${icon("dl")} ${fmtDownloads(proje.downloads || r.downloads)}</span>
          ${proje.followers ? `<span class="xp-tag">♥ ${fmtDownloads(proje.followers)}</span>` : ""}
          ${proje.author ? `<span class="xp-tag">${proje.author}</span>` : ""}
          ${proje.license ? `<span class="xp-tag">${proje.license}</span>` : ""}
          ${proje.updated ? `<span class="xp-tag">${proje.updated.slice(0, 10)}</span>` : ""}
          ${(proje.categories || []).slice(0, 5).map((c) => `<span class="xp-tag">${c}</span>`).join("")}
        `;
      }
      const body = root.querySelector("#xp-body") as HTMLElement;
      if (proje.body && proje.body.trim()) {
        body.innerHTML = mdToHtml(proje.body);
        body.querySelectorAll("a[data-ext]").forEach((a) =>
          a.addEventListener("click", (e) => { e.preventDefault(); openExternal((a as HTMLAnchorElement).href); })
        );
      } else {
        body.innerHTML = `<p class="xp-note">Bu proje için açıklama verisi yok.</p>`;
      }
      if (proje.gallery?.length) {
        const gal = root.querySelector("#xp-gallery") as HTMLElement;
        (root.querySelector("#xp-gallery-panel") as HTMLElement).hidden = false;
        gal.innerHTML = proje.gallery.map((g) =>
          `<button class="xp-shot" data-u="${g.url}"><img src="${g.url}" loading="lazy" referrerpolicy="no-referrer" alt="${g.title || ""}" /></button>`
        ).join("");
        gal.querySelectorAll(".xp-shot").forEach((b) =>
          b.addEventListener("click", () => lightbox((b as HTMLElement).dataset.u!))
        );
      }
      if (proje.links?.length) {
        const lp = root.querySelector("#xp-links-panel") as HTMLElement;
        lp.hidden = false;
        (root.querySelector("#xp-links") as HTMLElement).innerHTML = proje.links
          .map((l) => `<button class="xp-link" data-u="${l.url}">${l.label} ${icon("globe")}</button>`)
          .join("");
        root.querySelectorAll(".xp-link").forEach((b) =>
          b.addEventListener("click", () => openExternal((b as HTMLElement).dataset.u!))
        );
      }
    } else {
      (root.querySelector("#xp-body") as HTMLElement).innerHTML =
        `<p class="xp-note">Açıklama yüklenemedi — sürüm listesi kullanılabilir.</p>`;
    }
  })();

  // Mod paketi hedef kurulum GEREKTİRMEZ (kendi kurulumunu oluşturur).
  if (!isPack && !state.instances.length) return;

  const instSel = root.querySelector("#xp-inst") as HTMLSelectElement | null;
  const mcSel = root.querySelector("#xp-mc") as HTMLSelectElement | null;
  const loadSel = root.querySelector("#xp-loader") as HTMLSelectElement | null;
  const list = root.querySelector("#xp-vers") as HTMLElement;

  let tumVersiyonlar: RepoVersion[] = [];
  let lastVerSayfa = 8;
  const inst = () =>
    isPack ? null : state.instances.find((i) => i.id === instSel?.value) || state.instances[0];

  // kurulum seçimi değişince sürüm/loader'ı o kuruluma otomatik çek
  const instUygula = () => {
    const i = inst();
    const mc = i?.mc_version || "";
    const ld = i?.mod_loader || "fabric";
    if (mcSel) {
      if (![...mcSel.options].some((o) => o.value === mc)) {
        mcSel.appendChild(new Option(mc, mc));
      }
      mcSel.value = mc;
    }
    if (loadSel) {
      if (![...loadSel.options].some((o) => o.value === ld)) {
        loadSel.appendChild(new Option(ld, ld));
      }
      loadSel.value = ld;
    }
    cizVers();
  };
  instSel?.addEventListener("change", instUygula);
  mcSel?.addEventListener("change", () => { lastVerSayfa = 8; cizVers(); });
  loadSel?.addEventListener("change", () => { lastVerSayfa = 8; cizVers(); });

  function cizVers(): void {
    const i = inst();
    // Mod paketinde sürüm listesi hedef kuruluma göre süzülmez; paket kendi
    // Minecraft sürümünü getirir.
    const mc = isPack ? "" : (mcSel?.value || i?.mc_version || "");
    const ld = isPack ? "" : (isContent ? "" : (loadSel?.value || i?.mod_loader || ""));
    const uygun = tumVersiyonlar.filter((v) => uyumluMu(v, mc, ld, isContent));
    const digerleri = tumVersiyonlar.filter((v) => !uygun.includes(v));

    const siral = [...uygun].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    const goster = siral.slice(0, lastVerSayfa);

    if (!tumVersiyonlar.length) {
      list.innerHTML = `<p class="xp-note">Sürüm listesi boş.</p>`;
      return;
    }

    // Uyumlu sürüm yoksa (kurulumun MC sürümü projede yok): boş liste göstermek
    // yerine en yeni sürümleri "uyumsuz" etiketiyle öne çıkar — kullanıcı yine
    // kurabilsin (Modrinth de böyle davranır).
    const yedek = siral.length
      ? []
      : [...tumVersiyonlar].sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 4);

    list.innerHTML = `
      ${siral.length ? goster.map((v) => verRow(v, true)).join("") : `
        <p class="xp-note">${mc}${ld ? ` · ${ld}` : ""} için uyumlu sürüm yok — en yeni sürümler aşağıda (uyumsuz).</p>
        ${yedek.map((v) => verRow(v, false)).join("")}`}
      ${siral.length > goster.length
        ? `<button class="btn ghost sm xp-more" id="xp-more">Daha eski sürümler (${siral.length - goster.length})</button>` : ""}
      ${(() => {
        const kalan = digerleri.filter((v) => !yedek.includes(v));
        return kalan.length ? `
        <details class="xp-others">
          <summary>Uyumsuz sürümler (${kalan.length})</summary>
          ${kalan.slice(0, 25).map((v) => verRow(v, false)).join("")}
        </details>` : "";
      })()}
      ${i ? `<p class="xp-note xp-note-sm">Hedef: <b>${i.name}</b> · ${i.mod_loader} ${i.mc_version}</p>` : ""}
    `;

    list.querySelector("#xp-more")?.addEventListener("click", () => {
      lastVerSayfa += 12;
      cizVers();
    });
    list.querySelectorAll<HTMLButtonElement>(".xp-ver-kur").forEach((btn) => {
      btn.addEventListener("click", () => {
        const v = tumVersiyonlar.find((x) => x.id === btn.dataset.id);
        if (v) void kurVersion(r, v, instSel?.value || "", btn);
      });
    });
  }

  function verRow(v: RepoVersion, uyumlu: boolean): string {
    const boyut = v.files[0]?.size || 0;
    return `
      <div class="xp-ver ${uyumlu ? "" : "dim"}">
        <div class="xp-ver-head">
          <b>${v.version_number || v.name}</b>
          ${uyumlu ? `<span class="xp-ver-ok">uyumlu</span>` : ""}
        </div>
        ${v.name && v.name !== v.version_number ? `<div class="xp-ver-name">${v.name}</div>` : ""}
        <div class="xp-ver-meta">
          <span>${(v.game_versions || []).slice(0, 3).join(", ")}${v.game_versions.length > 3 ? "…" : ""}</span>
          ${!isContent && v.loaders?.length ? `<span>${v.loaders.slice(0, 2).join(" · ")}</span>` : ""}
          <span>${v.date ? v.date.slice(0, 10) : ""}</span>
          ${boyut ? `<span>${fmtBytes(boyut)}</span>` : ""}
        </div>
        <button class="btn ${uyumlu ? "primary" : "ghost"} sm xp-ver-kur" data-id="${v.id}">
          ${r.kind === "modpack" ? "Kur" : isContent ? "İndir" : "Kur"}
        </button>
      </div>
    `;
  }

  try {
    tumVersiyonlar = await invoke("cmd_repos_get_versions", {
      source: r.source, projectId: r.id, kind: r.kind, loader: "", gameVersion: "",
    });
  } catch (e) {
    list.innerHTML = `<p class="xp-note">Sürümler alınamadı: ${String(e)}</p>`;
    return;
  }

  // oyun sürümü seçenekleri: projede olanlar + kurulumun sürümü
  if (mcSel) {
    const surumler = new Set<string>();
    for (const v of tumVersiyonlar) for (const g of v.game_versions || []) surumler.add(g);
    const sirali = [...surumler].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
    mcSel.innerHTML = sirali.map((s) => `<option value="${s}">${s}</option>`).join("") || `<option value="">—</option>`;
  }

  if (loadSel) {
    const yukleyiciler = new Set<string>();
    for (const v of tumVersiyonlar) for (const l of v.loaders || []) yukleyiciler.add(l);
    const yl = ["fabric", "quilt", "forge", "neoforge", "rift"].filter((l) => yukleyiciler.has(l));
    loadSel.innerHTML = (yl.length ? yl : [...yukleyiciler]).map((l) => `<option value="${l}">${l}</option>`).join("") ||
      `<option value="">—</option>`;
  }

  if (isPack) cizVers();
  else instUygula();
}

function uyumluMu(v: RepoVersion, mc: string, loader: string, isContent: boolean): boolean {
  const mcOk = !mc || (v.game_versions || []).includes(mc);
  if (!mcOk) return false;
  if (isContent || !loader) return true;
  const yukler = (v.loaders || []).map((l) => l.toLowerCase());
  if (!yukler.length) return true;
  const l = loader.toLowerCase();
  if (yukler.includes(l)) return true;
  // eşdeğer yükleyiciler
  if (l === "quilt" && yukler.includes("fabric")) return true;
  if (l === "neoforge" && yukler.includes("forge")) return true;
  return false;
}

async function kurVersion(r: SearchResult, v: RepoVersion, instanceId: string, btn: HTMLButtonElement): Promise<void> {
  // Mod paketi: hedef kurulum GEREKMEZ — her zaman yeni kurulum oluşturur.
  if (r.kind === "modpack") {
    await installPack(r, v);
    return;
  }
  if (!instanceId) {
    toast("Önce bir kurulum oluştur", "err");
    navigate("instances");
    return;
  }
  const eski = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span>`;
  try {
    const isContent = ["resourcepack", "shader", "world", "datapack"].includes(r.kind);
    if (isContent) {
      await invoke("cmd_repos_install_content", {
        instanceId, source: r.source, projectId: r.id, versionId: v.id, kind: r.kind,
      });
    } else {
      await invoke("cmd_repos_install", { instanceId, source: r.source, projectId: r.id, versionId: v.id });
    }
    const hedef: Record<string, string> = {
      resourcepack: "Doku paketleri klasörüne indirildi",
      shader: "Shader klasörüne indirildi",
      world: "Dünyalar klasörüne indirildi",
      datapack: "Datapacks klasörüne indirildi",
    };
    toast(hedef[r.kind] || `Kuruldu: ${r.title}`);
    btn.innerHTML = `${icon("check")} Kuruldu`;
    btn.classList.remove("primary");
    btn.classList.add("ghost");
    setTimeout(() => { btn.innerHTML = eski; btn.classList.add("primary"); btn.classList.remove("ghost"); btn.disabled = false; }, 2200);
  } catch (e) {
    toast(String(e), "err");
    btn.disabled = false;
    btn.innerHTML = eski;
  }
}

function lightbox(url: string): void {
  if (!/^https?:\/\//i.test(url)) return;
  const { root, close } = openModal(`
    <div class="xp-light">
      <img src="${url}" alt="" referrerpolicy="no-referrer" />
    </div>
    <div style="display:flex; justify-content:flex-end; margin-top:10px">
      <button class="btn ghost" id="lb-close">Kapat</button>
    </div>
  `);
  root.querySelector("#lb-close")?.addEventListener("click", close);
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
