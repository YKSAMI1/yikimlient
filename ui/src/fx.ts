/* ============================================================
   AMBİENS PARÇACIK MOTORU — her dünya kendi efektini taşır.
   · canvas overlay (pointer-events: none), tek rAF döngüsü
   · sekme gizliyken döngü durur; geri dönüşte kaldığı yerden devam eder
   · prefers-reduced-motion'da ve fx_particles=none'da tamamen kapalı
   · YOĞUNLUK: config.fx_particles = "none"|"low"|"mid"|"high"
   · davranışlar: ember / dust / snow / bubble / rain / twinkle
   Tamamen yerel çizimdir — internet trafiği yoktur.
   ============================================================ */
import { state } from "./main";

interface P {
  x: number; y: number; vx: number; vy: number;
  r: number; a: number; life: number; max: number;
  hue: string; seed: number;
}

interface ModeDef {
  base: number;                                  // tam yoğunlukta hedef sayı
  spawn: (area: [number, number]) => P;
  step: (p: P, dt: number, area: [number, number]) => void;
  draw: (c: CanvasRenderingContext2D, p: P) => void;
}

const TAU = Math.PI * 2;

function accent(): string {
  return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff7a18";
}

/** hex'i karart (yumuşak zımtırak renki için) */
function mixDown(hex: string, factor: number): string {
  const m = hex.match(/^#?([0-9a-f]{6})$/i);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  return `rgba(${Math.round(((n >> 16) & 255) * factor)},${Math.round(((n >> 8) & 255) * factor)},${Math.round((n & 255) * factor)},1)`;
}

function dot(c: CanvasRenderingContext2D, p: P): void {
  c.fillStyle = p.hue;
  c.beginPath();
  c.arc(p.x, p.y, p.r, 0, TAU);
  c.fill();
}

/* ---------- davranış üreticileri (kapanışlarla güvenli) ---------- */

function emberDef(accel: number, coarse: boolean): ModeDef {
  const hue = coarse ? mixDown(accent(), 0.88) : accent();
  const spawn = (area: [number, number]): P => ({
    x: Math.random() * area[0], y: area[1] + 10,
    vx: (Math.random() - 0.5) * 12,
    vy: -(28 + Math.random() * 44) * (coarse ? 0.75 : 1),
    r: coarse ? 2.6 : 1.2 + Math.random() * 1.6,
    a: 0.95, life: 0, max: 6 + Math.random() * 5,
    hue, seed: Math.random() * TAU,
  });
  return {
    base: coarse ? 24 : 30,
    spawn,
    step: (p, dt, area) => {
      p.x += (p.vx + Math.sin(p.seed + p.life * 2.1) * 9) * dt * (1 + accel * dt);
      p.y += p.vy * dt;
      p.a = Math.max(0, 1 - (p.life / p.max) * 1.05);
      if (p.y < -12 || p.a <= 0) Object.assign(p, spawn(area));
    },
    draw: dot,
  };
}

function dustDef(hue: string): ModeDef {
  const spawn = (area: [number, number]): P => ({
    x: Math.random() * area[0], y: Math.random() * area[1],
    vx: (Math.random() - 0.5) * 7, vy: (Math.random() - 0.5) * 7,
    r: 0.9 + Math.random() * 1.5, a: 0.3, life: 0,
    max: 9 + Math.random() * 8, hue, seed: Math.random() * TAU,
  });
  return {
    base: 26,
    spawn,
    step: (p, dt, area) => {
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < -8) p.x = area[0] + 8;
      if (p.x > area[0] + 8) p.x = -8;
      if (p.y < -8) p.y = area[1] + 8;
      if (p.y > area[1] + 8) p.y = -8;
      p.a = 0.16 + 0.4 * Math.sin((p.life / p.max) * Math.PI);
      if (p.life > p.max) Object.assign(p, spawn(area));
    },
    draw: dot,
  };
}

function snowDef(): ModeDef {
  const spawn = (area: [number, number]): P => ({
    x: Math.random() * area[0], y: -8,
    vx: (Math.random() - 0.5) * 8, vy: 13 + Math.random() * 24,
    r: 1 + Math.random() * 2.6, a: 0.8, life: 0, max: 20,
    hue: "#ffffff", seed: Math.random() * TAU,
  });
  return {
    base: 36,
    spawn,
    step: (p, dt, area) => {
      p.x += (p.vx + Math.sin(p.seed + p.life * 1.2) * 11) * dt;
      p.y += p.vy * dt;
      if (p.y > area[1] + 10) Object.assign(p, spawn(area));
    },
    draw: dot,
  };
}

function bubbleDef(): ModeDef {
  const hue = accent();
  const spawn = (area: [number, number]): P => ({
    x: Math.random() * area[0], y: area[1] + 10,
    vx: (Math.random() - 0.5) * 9, vy: -(18 + Math.random() * 26),
    r: 1.4 + Math.random() * 2.6, a: 0.5, life: 0, max: 14,
    hue, seed: Math.random() * TAU,
  });
  return {
    base: 16,
    spawn,
    step: (p, dt, area) => {
      p.x += (p.vx + Math.sin(p.seed + p.life * 2.2) * 7) * dt;
      p.y += p.vy * dt;
      p.vy -= 2.5 * dt;
      if (p.y < -14) Object.assign(p, spawn(area));
    },
    draw: (c, p) => {
      c.strokeStyle = p.hue; c.lineWidth = 1;
      c.beginPath(); c.arc(p.x, p.y, p.r * 1.7, 0, TAU); c.stroke();
    },
  };
}

function rainDef(): ModeDef {
  const hue = accent();
  const spawn = (area: [number, number]): P => ({
    x: Math.random() * area[0], y: Math.random() * -area[1],
    vx: 0, vy: 170 + Math.random() * 260,
    r: 1, a: 0.4 + Math.random() * 0.4, life: 0, max: 30,
    hue, seed: 0,
  });
  return {
    base: 20,
    spawn,
    step: (p, dt, area) => {
      p.y += p.vy * dt;
      if (p.y > area[1] + 40) Object.assign(p, spawn(area));
    },
    draw: (c, p) => {
      c.strokeStyle = p.hue; c.lineWidth = p.a * 1.3;
      c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x, p.y - 14 - p.a * 16); c.stroke();
    },
  };
}

function twinkleDef(hue: string): ModeDef {
  const spawn = (area: [number, number]): P => ({
    x: Math.random() * area[0], y: Math.random() * area[1],
    vx: 0, vy: 0, r: 0.8 + Math.random() * 1.3, a: 0,
    life: Math.random() * 4, max: 2.6 + Math.random() * 3.4, hue,
    seed: Math.random() * TAU,
  });
  return {
    base: 24,
    spawn,
    step: (p, _dt, _area) => {
      p.a = Math.max(0, Math.sin((p.life / p.max) * Math.PI)) * 0.9;
      if (p.life > p.max) p.life = 0;
    },
    draw: dot,
  };
}

/* ---------- dünya → davranış eşleşmesi (her dünya benzersiz) ---------- */

function modeForWorld(world: string): ModeDef | null {
  switch (world) {
    case "pano":     return emberDef(0.5, false);                // turuncu zımtırak
    case "sokum":    return emberDef(0.9, true);                 // ağır kızıl zımtırak
    case "afis":     return dustDef("rgba(63,50,38,0.5)");       // baskı kâğıdı tozu
    case "anons":    return twinkleDef("rgba(255,194,71,0.9)");  // amber şimşek
    case "standart": return twinkleDef("rgba(147,168,255,0.5)"); // nazik mavi kıvılcım
    case "sira":     return twinkleDef("rgba(163,230,53,0.85)"); // ateşböceği
    case "rihtim":   return bubbleDef();                          // deniz kabarcığı
    case "oda":      return dustDef("rgba(224,48,30,0.6)");      // kırmızı toz
    case "kumas":    return dustDef("rgba(138,122,92,0.5)");     // keten tüyü
    case "perde":    return twinkleDef("rgba(212,175,55,0.8)");  // altın toz
    case "buz":      return snowDef();
    case "skala":    return rainDef();                            // fosfor yağmuru
    default:         return null;
  }
}

/* ---------- döngü altyapısı ---------- */

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let def: ModeDef | null = null;
let parts: P[] = [];
let raf = 0;
let last = 0;
let intensity = 1;

function stopCanvas(): void {
  if (raf) cancelAnimationFrame(raf);
  raf = 0;
  def = null;
  parts = [];
  if (canvas) { canvas.remove(); canvas = null; ctx = null; }
}

function loop(t: number): void {
  raf = 0;
  if (!ctx || !canvas || !def) return;
  const dt = Math.min((t - last) / 1000, 0.06);
  last = t;
  raf = requestAnimationFrame(loop);
  const dpr = window.devicePixelRatio || 1;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const area: [number, number] = [window.innerWidth, window.innerHeight];
  const target = Math.max(1, Math.round(def.base * intensity));
  while (parts.length < target) {
    const p = def.spawn(area);
    p.life = Math.random() * p.max;
    parts.push(p);
  }
  while (parts.length > target) parts.pop();
  for (const p of parts) {
    p.life += dt;
    def.step(p, dt, area);
    ctx.globalAlpha = p.a;
    def.draw(ctx, p);
  }
  ctx.globalAlpha = 1;
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  } else if (def && !raf) {
    last = performance.now();
    raf = requestAnimationFrame(loop);
  }
});

window.addEventListener("resize", () => {
  if (!canvas || !ctx) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(innerWidth * dpr);
  canvas.height = Math.round(innerHeight * dpr);
});

/** main.applyWorld() her tema/ayar değişiminde bunu çağırır. */
export function applyFx(): void {
  const level = String(state.config?.fx_particles ?? "mid");
  const world = document.documentElement.getAttribute("data-world") || "pano";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (level === "none" || reduced) { stopCanvas(); return; }

  const next = modeForWorld(world);
  if (!next) { stopCanvas(); return; }

  const map: Record<string, number> = { low: 0.45, mid: 1, high: 1.9 };
  intensity = map[level] ?? 1;

  stopCanvas();                    // kısa yeniden tohumlama — tema rengi güvende
  def = next;
  const dpr = window.devicePixelRatio || 1;
  canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:3";
  canvas.width = Math.round(innerWidth * dpr);
  canvas.height = Math.round(innerHeight * dpr);
  document.body.appendChild(canvas);
  ctx = canvas.getContext("2d");
  last = performance.now();
  raf = requestAnimationFrame(loop);
}
