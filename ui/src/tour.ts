/* ============================================================
   İLK AÇILIŞ REHBERİ (yürüyen tur).
   Bu güncellemeden sonra herkeste BİR KEZ açılır:
   · her sekmeyi sırayla gösterir (sayfa gerçekten değişir)
   · tıklayınca ışık hücresi (spotlight) animasyonla kayar (GSAP)
   · "Atla" ya da tur bitince bir daha sorulmaz (guided_tour_done)
   ============================================================ */
import { gsap } from "gsap";
import { invoke, navigate, refreshState, state } from "./main";

interface TourStep {
  page: string;
  /** Rehber hedefi — her zaman rail'de (shell'de) yaşar, asla kaybolmaz. */
  sel: string | null;
  title: string;
  text: string;
}

const STEPS: TourStep[] = [
  {
    page: "home", sel: null,
    title: "YIKIMLient'e hoş geldin",
    text: "60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek.",
  },
  {
    page: "home", sel: '.rail-item[data-page="home"]',
    title: "Ana Sayfa",
    text: "Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır.",
  },
  {
    page: "instances", sel: '.rail-item[data-page="instances"]',
    title: "Paketler",
    text: "Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur.",
  },
  {
    page: "explore", sel: '.rail-item[data-page="explore"]',
    title: "Keşfet",
    text: "Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner.",
  },
  {
    page: "news", sel: '.rail-item[data-page="news"]',
    title: "Haberler",
    text: "YIKIMLient duyuruları ve Minecraft haberleri burada.",
  },
  {
    page: "settings", sel: '.rail-item[data-page="settings"]',
    title: "Ayarlar",
    text: "Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada.",
  },
  {
    page: "home", sel: null,
    title: "Hazırsın!",
    text: "İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek.",
  },
];

let active: HTMLElement | null = null;

function cardPosition(spot: DOMRect | null, card: HTMLElement): void {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const cw = card.offsetWidth;
  const ch = card.offsetHeight;
  const clampX = (x: number): number => Math.max(12, Math.min(x, W - cw - 12));
  const clampY = (y: number): number => Math.max(14, Math.min(y, H - ch - 14));
  if (spot) {
    // yatay: önce sağ tarafta dene, sığmazsa sol, o da sığmazsa ortala
    const rightX = spot.right + 16;
    const leftX = spot.left - 16 - cw;
    let x: number;
    if (rightX + cw <= W - 12) x = rightX;
    else if (leftX >= 12) x = leftX;
    else x = (W - cw) / 2;
    // dikey: hedefe hizala; üstte taşarsa hedefin altına in
    let y = spot.top + spot.height / 2 - ch / 2;
    if (y < 14) y = spot.bottom + 16;
    card.style.left = `${clampX(x)}px`;
    card.style.top = `${clampY(y)}px`;
    card.style.transform = "none";
  } else {
    // hedef yok → tam ortala (piksel bazlı; transform yok, GSAP bozamaz)
    card.style.left = `${Math.max(12, (W - cw) / 2)}px`;
    card.style.top = `${clampY((H - ch) / 2)}px`;
    card.style.transform = "none";
  }
}

function drawStep(root: HTMLElement, index: number): void {
  const step = STEPS[index];
  const spot = root.querySelector(".spot") as HTMLElement;
  const card = root.querySelector(".tc") as HTMLElement;

  // metni ÖNCE kur (boyut ölçümü doğru çıksın diye)
  navigate(step.page);
  const dots = card.querySelector(".tc-step") as HTMLElement;
  dots.innerHTML = STEPS.map((_, i) =>
    `<i class="${i <= index ? "done" : ""}"></i>`).join("");
  (card.querySelector("h3") as HTMLElement).textContent = step.title;
  (card.querySelector("p") as HTMLElement).textContent = step.text;
  const next = card.querySelector(".tc-next") as HTMLButtonElement;
  next.textContent = index === STEPS.length - 1 ? "Tamam ✓" : "İleri →";

  let rect: DOMRect | null = null;
  if (step.sel) {
    const t = document.querySelector(step.sel);
    if (t) rect = t.getBoundingClientRect();
  }
  if (rect) {
    const pad = 6;
    spot.style.opacity = "1";
    spot.style.left = `${rect.left - pad}px`;
    spot.style.top = `${rect.top - pad}px`;
    spot.style.width = `${rect.width + pad * 2}px`;
    spot.style.height = `${rect.height + pad * 2}px`;
  } else {
    spot.style.opacity = "0";
  }
  cardPosition(rect, card);

  // kart içeriği değiştiğinde kısa giriş sahnesi (GSAP); çıkışta transform'u
  // temizler — sonraki adımın elle konumlandırması bozulmaz
  gsap.fromTo(card,
    { y: 14, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.38, ease: "power3.out", clearProps: "transform" });
}

/** config.guided_tour_done false ise turu oynat; bitince bayrağı kaydet. */
export function maybeStartTour(): void {
  if (active || state.config?.guided_tour_done) return;

  const root = document.createElement("div");
  root.className = "yikim-tour";
  root.innerHTML = `
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`;
  document.body.appendChild(root);
  active = root;

  let index = 0;
  const finish = async (): Promise<void> => {
    root.remove();
    active = null;
    document.removeEventListener("keydown", onKey);
    navigate("home");
    try {
      state.config = { ...state.config, guided_tour_done: true };
      await invoke("cmd_save_settings", { config: state.config });
      await refreshState();
    } catch { /* bayrak kaydedilemezse sonraki açılışta tekrar sorulur — zararsız */ }
  };
  const next = (): void => {
    index += 1;
    if (index >= STEPS.length) { void finish(); return; }
    drawStep(root, index);
  };
  const onKey = (e: KeyboardEvent): void => {
    if (e.key === "Enter" || e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "Escape") { e.preventDefault(); void finish(); }
  };
  document.addEventListener("keydown", onKey);

  root.querySelector(".tc-skip")?.addEventListener("click", () => void finish());
  root.querySelector(".tc-next")?.addEventListener("click", next);
  drawStep(root, index);
}
