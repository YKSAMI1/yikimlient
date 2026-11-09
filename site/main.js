/* YIKIMLient site — etkileşimler */
const REPO = "YKSAMI1/yikimlient";
const YEDEK_SURUM = "0.7.25";
const CACHE_MS = 10 * 60 * 1000;

const OS_ETIKET = {
  windows: { ikon: "Windows için indir", uzanti: [".exe", ".msi"], boyutEtiket: "Kurulum", sistem: "Windows 10/11", sistemAlt: "64-bit" },
  appimage: { ikon: "Linux için indir (.AppImage)", uzanti: [".appimage"], boyutEtiket: "AppImage", sistem: "Linux 64-bit", sistemAlt: "glibc 2.31+" },
  deb: { ikon: "Debian paketini indir (.deb)", uzanti: [".deb"], boyutEtiket: "Debian paketi", sistem: "Debian / Ubuntu", sistemAlt: "amd64" },
};

let secili = "windows";
let surumler = []; // [{ surum, onSurum, varliklar: [{ad,url,boyut}] }]

/* ---------- yardımcılar ---------- */
const boyutYazi = (b) =>
  !b ? "" : b > 1024 * 1024 ? (b / (1024 * 1024)).toFixed(1) + " MB" : Math.round(b / 1024) + " KB";

/** Seçili platform için en yeni sürümdeki dosyayı bul. */
function varlik(os = secili) {
  const uzantilar = OS_ETIKET[os].uzanti;
  for (const s of surumler) {
    const v = s.varliklar.find((x) => uzantilar.some((u) => x.ad.toLowerCase().endsWith(u)));
    if (v) return { ...v, surum: s.surum };
  }
  return null;
}

function enYeniSurum() {
  return surumler.find((s) => !s.onSurum)?.surum || surumler[0]?.surum || YEDEK_SURUM;
}

function indirmeAdresi(os) {
  return varlik(os)?.url || `https://github.com/${REPO}/releases/latest`;
}

function surumAltYazi() {
  const v = varlik(secili);
  if (!v) return "Son sürüm · GitHub'dan güvenli indirme";
  const b = boyutYazi(v.boyut);
  return `v${v.surum}${b ? " · " + b : ""} · GitHub'dan güvenli indirme`;
}

/* ---------- platform seçimi ---------- */
function platformSec(os) {
  secili = os;

  document.querySelectorAll(".dl-tab").forEach((t) => {
    const aktif = t.dataset.os === os;
    t.classList.toggle("is-active", aktif);
    t.setAttribute("aria-selected", String(aktif));
  });

  const adres = indirmeAdresi(os);
  for (const id of ["dlBtn", "dlBtn2"]) {
    const el = document.getElementById(id);
    if (el) el.href = adres;
  }

  const label = document.getElementById("dlLabel");
  const sub = document.getElementById("dlSub");
  if (label) label.textContent = OS_ETIKET[os].ikon;
  if (sub) sub.textContent = surumAltYazi();

  const boyutBaslik = document.getElementById("statBoyutEtiket");
  if (boyutBaslik) boyutBaslik.textContent = OS_ETIKET[os].boyutEtiket;

  // Üçüncü kutu seçili platforma göre değişir (eskiden hep "Windows 10/11").
  const sistem = document.getElementById("statSistem");
  const sistemAlt = document.getElementById("statSistemAlt");
  if (sistem) sistem.textContent = OS_ETIKET[os].sistem;
  if (sistemAlt) sistemAlt.textContent = OS_ETIKET[os].sistemAlt;

  const v = varlik(os);
  const sb = document.getElementById("statBoyut");
  if (sb) sb.textContent = v?.boyut ? "~" + Math.round(v.boyut / (1024 * 1024)) + " MB" : "—";

  try { localStorage.setItem("yikim-os", os); } catch { }
}

/* ---------- GitHub sürümleri ---------- */
function surumCoz(j) {
  return (Array.isArray(j) ? j : []).map((x) => ({
    surum: String(x.tag_name || "").replace(/^v/i, "") || "0.0.0",
    onSurum: Boolean(x.prerelease || x.draft),
    tarih: x.published_at || "",
    varliklar: (x.assets || []).map((a) => ({
      ad: a.name || "",
      url: a.browser_download_url || "",
      boyut: a.size || 0,
    })),
  })).filter((s) => s.varliklar.length > 0);
}

async function surumYukle() {
  // önbellek: GitHub API saatte 60 istek — gereksiz tüketmeyelim
  try {
    const ham = localStorage.getItem("yikim-surumler");
    if (ham) {
      const c = JSON.parse(ham);
      if (c && Date.now() - c.zaman < CACHE_MS && Array.isArray(c.liste) && c.liste.length) {
        surumler = c.liste;
      }
    }
  } catch { }

  if (!surumler.length) {
    try {
      const r = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=10`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!r.ok) throw new Error("api");
      surumler = surumCoz(await r.json());
      try {
        localStorage.setItem("yikim-surumler", JSON.stringify({ zaman: Date.now(), liste: surumler }));
      } catch { }
    } catch {
      surumler = [];
    }
  }

  const surum = enYeniSurum();
  const pill = document.getElementById("verPill");
  const stat = document.getElementById("statSurum");
  const foot = document.getElementById("footVer");
  if (pill) pill.textContent = "v" + surum;
  if (stat) stat.textContent = surum;
  if (foot) foot.textContent = "v" + surum;

  platformSec(secili);
}

/* ---------- kaydırma animasyonu ---------- */
function gozlemci() {
  const ogeler = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    ogeler.forEach((e) => e.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (girisler) => {
      girisler.forEach((g) => {
        if (!g.isIntersecting) return;
        const el = g.target;
        const gecikme = Number(el.dataset.delay || 0);
        setTimeout(() => el.classList.add("is-in"), gecikme);
        io.unobserve(el);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  ogeler.forEach((e, i) => {
    if (!e.dataset.delay && e.closest(".cards, .trust, .shots, .steps")) {
      e.dataset.delay = String((i % 4) * 70);
    }
    io.observe(e);
  });

  // Yukarıda kalan öğeler asla gizli kalmasın: sayfa ortasında açıldıysa,
  // hızlı kaydırıldıysa veya gözlemci kaçırdıysa hemen görünür yap.
  const yukaridakileriAc = () => {
    document.querySelectorAll(".reveal:not(.is-in)").forEach((e) => {
      const b = e.getBoundingClientRect();
      if (b.bottom < 0) e.classList.add("is-in");
    });
  };

  yukaridakileriAc();
  window.addEventListener("scroll", yukaridakileriAc, { passive: true });

  // emniyet: 4 sn içinde görünür alanda kalan hiçbir öğe gizli kalmasın
  setTimeout(() => {
    ogeler.forEach((e) => {
      const r = e.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) e.classList.add("is-in");
    });
    yukaridakileriAc();
  }, 4000);
}

/* ---------- sayı sayacı ---------- */
function sayaclar() {
  const ogeler = [...document.querySelectorAll("[data-count]")];
  if (!ogeler.length) return;

  const azHareket = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const bitir = (el) => {
    if (el.dataset.sayildi) return;
    el.dataset.sayildi = "1";
    el.textContent = Number(el.dataset.count || 0) + (el.dataset.suffix || "");
  };

  if (!("IntersectionObserver" in window) || azHareket) {
    ogeler.forEach(bitir);
    return;
  }

  const io = new IntersectionObserver(
    (girisler) => {
      girisler.forEach((g) => {
        if (!g.isIntersecting) return;
        const el = g.target;
        io.unobserve(el);
        if (el.dataset.sayildi) return;
        el.dataset.sayildi = "1";

        const hedef = Number(el.dataset.count || 0);
        const son = el.dataset.suffix || "";
        const bas = performance.now();
        const sure = 1200;
        const adim = (t) => {
          const p = Math.min(1, (t - bas) / sure);
          el.textContent = Math.round(hedef * (1 - Math.pow(1 - p, 3))) + son;
          if (p < 1) requestAnimationFrame(adim);
        };
        requestAnimationFrame(adim);
      });
    },
    { threshold: 0.4 },
  );

  ogeler.forEach((e) => io.observe(e));

  // Görünür alanın üstünde kalanlar (sayfa ortasında açılış / hızlı kaydırma)
  // 0'da takılı kalmasın: hedef değeri hemen yaz.
  const yukaridakiler = () =>
    ogeler.forEach((el) => {
      if (el.getBoundingClientRect().bottom < 0) bitir(el);
    });

  yukaridakiler();
  window.addEventListener("scroll", yukaridakiler, { passive: true });
}

/* ---------- menü ---------- */
function navKur() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  if (!nav) return;

  const durum = () => nav.classList.toggle("is-stuck", window.scrollY > 12);
  durum();
  window.addEventListener("scroll", durum, { passive: true });

  toggle?.addEventListener("click", () => {
    const acik = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(acik));
  });

  nav.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }),
  );
}

/* ---------- başlat ---------- */
function baslat() {
  window.__ykHazir = true;

  let kayitli = null;
  try { kayitli = localStorage.getItem("yikim-os"); } catch { }

  const p = navigator.userAgent.toLowerCase();
  const tahmin = kayitli || (p.includes("win") ? "windows" : p.includes("linux") || p.includes("x11") ? "appimage" : "windows");

  document.querySelectorAll(".dl-tab").forEach((t) =>
    t.addEventListener("click", () => platformSec(t.dataset.os)),
  );

  const yil = document.getElementById("yil");
  if (yil) yil.textContent = String(new Date().getFullYear());

  platformSec(tahmin);
  navKur();
  gozlemci();
  sayaclar();
  surumYukle();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", baslat);
} else {
  baslat();
}
