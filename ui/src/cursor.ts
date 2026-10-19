/* ============================================================
   ÖZEL İMLEÇ SİSTEMİ — launcher içinde fare simgesi değişir.
   · config.cursor_style = "standart" | "yikim" | "hedef" | "nokta"
   · SVG data-URI olarak inline verilir (dosya yok, istek yok),
     vurgu rengi O ANKI dünyanın --accent'inden alınır
   · body + tüm çocuklara !important ile zorlanır (buton pointer'ı dahil)
   ============================================================ */
import { state } from "./main";

function accent(): string {
  const v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  return v || "#ff7a18";
}

/* SVG'ler 24x24 — data-URI'ye encodeURIComponent ile gömülür */
function svgArrow(fill: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${fill}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
}
function svgCross(fill: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${fill}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${fill}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${fill}" stroke-width="2"/></svg>`;
}
function svgDot(fill: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${fill}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`;
}

const CURSORS: Record<string, { build: (a: string) => string; spot: string }> = {
  yikim: { build: svgArrow, spot: "3 2" },
  hedef: { build: svgCross, spot: "12 12" },
  nokta: { build: svgDot, spot: "8 8" },
};

/** applyWorld() her kayıttan sonra bunu çağırır. */
export function applyCursor(): void {
  const style = String(state.config?.cursor_style || "standart");
  const root = document.documentElement;
  const cur = CURSORS[style];
  if (!cur) {
    root.removeAttribute("data-custom-cursor");
    root.style.removeProperty("--yikim-cursor");
    return;
  }
  const svg = cur.build(accent());
  root.style.setProperty(
    "--yikim-cursor",
    `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${cur.spot}, auto`,
  );
  root.setAttribute("data-custom-cursor", "1");
}
