/* YIKIMLient site â€” etkileÅŸimler */
const REPO = "YKSAMI1/yikimlient";
const YEDEK_SURUM = "0.9.3";
const CACHE_MS = 10 * 60 * 1000;

const OS_ETIKET = {
  windows: { ikon: "Windows iÃ§in indir", uzanti: [".exe", ".msi"], boyutEtiket: "Kurulum", sistem: "Windows 10/11", sistemAlt: "64-bit" },
  appimage: { ikon: "Linux iÃ§in indir (.AppImage)", uzanti: [".appimage"], boyutEtiket: "AppImage", sistem: "Linux 64-bit", sistemAlt: "glibc 2.31+" },
  deb: { ikon: "Debian paketini indir (.deb)", uzanti: [".deb"], boyutEtiket: "Debian paketi", sistem: "Debian / Ubuntu", sistemAlt: "amd64" },
};

let secili = "windows";
let surumler = []; // [{ surum, onSurum, varliklar: [{ad,url,boyut}] }]

/* ---------- yardÄ±mcÄ±lar ---------- */
const boyutYazi = (b) =>
  !b ? "" : b > 1024 * 1024 ? (b / (1024 * 1024)).toFixed(1) + " MB" : Math.round(b / 1024) + " KB";

/** SeÃ§ili platform iÃ§in en yeni sÃ¼rÃ¼mdeki dosyayÄ± bul. */
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
  if (!v) return "Son sÃ¼rÃ¼m Â· GitHub'dan gÃ¼venli indirme";
  const b = boyutYazi(v.boyut);
  return `v${v.surum}${b ? " Â· " + b : ""} Â· GitHub'dan gÃ¼venli indirme`;
}

/* ---------- platform seÃ§imi ---------- */
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

  // ÃœÃ§Ã¼ncÃ¼ kutu seÃ§ili platforma gÃ¶re deÄŸiÅŸir (eskiden hep "Windows 10/11").
  const sistem = document.getElementById("statSistem");
  const sistemAlt = document.getElementById("statSistemAlt");
  if (sistem) sistem.textContent = OS_ETIKET[os].sistem;
  if (sistemAlt) sistemAlt.textContent = OS_ETIKET[os].sistemAlt;

  const v = varlik(os);
  const sb = document.getElementById("statBoyut");
  if (sb) sb.textContent = v?.boyut ? "~" + Math.round(v.boyut / (1024 * 1024)) + " MB" : "â€”";

  try { localStorage.setItem("yikim-os", os); } catch { }
}

/* ---------- GitHub sÃ¼rÃ¼mleri ---------- */
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
  // Ã¶nbellek: GitHub API saatte 60 istek â€” gereksiz tÃ¼ketmeyelim
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

/* ---------- kaydÄ±rma animasyonu ---------- */
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

  // YukarÄ±da kalan Ã¶ÄŸeler asla gizli kalmasÄ±n: sayfa ortasÄ±nda aÃ§Ä±ldÄ±ysa,
  // hÄ±zlÄ± kaydÄ±rÄ±ldÄ±ysa veya gÃ¶zlemci kaÃ§Ä±rdÄ±ysa hemen gÃ¶rÃ¼nÃ¼r yap.
  //
  // v0.8.3 â€” MOBÄ°L: burada eskiden `scroll` dinleyicisi vardÄ± ve her kaydÄ±rma
  // karesinde gÃ¶rÃ¼nmeyen TÃœM Ã¶ÄŸeler iÃ§in getBoundingClientRect() Ã§aÄŸÄ±rÄ±yordu
  // (zorunlu layout â†’ telefonlarda kaydÄ±rma takÄ±lmasÄ±). ArtÄ±k yalnÄ±z aÃ§Ä±lÄ±ÅŸta
  // bir kez + 4 sn emniyet zamanlayÄ±cÄ±sÄ± Ã§alÄ±ÅŸÄ±r; IntersectionObserver
  // gÃ¶rÃ¼nÃ¼r alana girenleri zaten yakalar.
  const yukaridakileriAc = () => {
    document.querySelectorAll(".reveal:not(.is-in)").forEach((e) => {
      if (e.getBoundingClientRect().bottom < 0) e.classList.add("is-in");
    });
  };

  yukaridakileriAc();

  // emniyet: 4 sn iÃ§inde gÃ¶rÃ¼nÃ¼r alanda kalan hiÃ§bir Ã¶ÄŸe gizli kalmasÄ±n
  setTimeout(() => {
    ogeler.forEach((e) => {
      const r = e.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) e.classList.add("is-in");
    });
    yukaridakileriAc();
  }, 4000);
}

/* ---------- sayÄ± sayacÄ± ---------- */
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

  // GÃ¶rÃ¼nÃ¼r alanÄ±n Ã¼stÃ¼nde kalanlar (sayfa ortasÄ±nda aÃ§Ä±lÄ±ÅŸ / hÄ±zlÄ± kaydÄ±rma)
  // 0'da takÄ±lÄ± kalmasÄ±n: hedef deÄŸeri hemen yaz.
  //
  // v0.8.3 â€” MOBÄ°L: burada eskiden `scroll` dinleyicisi vardÄ±; her karede tÃ¼m
  // sayaÃ§lar iÃ§in layout okumasÄ± yapÄ±yordu. ArtÄ±k aÃ§Ä±lÄ±ÅŸta bir kez + 4 sn
  // sonra bir kez (tek layout) Ã§alÄ±ÅŸÄ±r.
  const yukaridakiler = () =>
    ogeler.forEach((el) => {
      if (!el.dataset.sayildi && el.getBoundingClientRect().bottom < 0) bitir(el);
    });

  yukaridakiler();
  setTimeout(yukaridakiler, 4000);
}

/* ---------- menÃ¼ ---------- */
function navKur() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  if (!nav) return;

  let kare = 0;
  const durum = () => {
    const takildi = window.scrollY > 12;
    if (nav.classList.contains("is-stuck") !== takildi) {
      nav.classList.toggle("is-stuck", takildi);
    }
  };
  durum();
  // rAF ile tekilleÅŸtir: kaydÄ±rma sÄ±rasÄ±nda saniyede onlarca kez deÄŸil,
  // kare baÅŸÄ±na bir kez ve yalnÄ±z durum gerÃ§ekten deÄŸiÅŸince DOM'a dokunur.
  window.addEventListener(
    "scroll",
    () => {
      if (kare) return;
      kare = requestAnimationFrame(() => {
        kare = 0;
        durum();
      });
    },
    { passive: true },
  );

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

/* ---------- baÅŸlat ---------- */
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
