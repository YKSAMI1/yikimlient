/* ============================================================
   Hareket motoru — GSAP
   Bir imza hareket, tek yerde orkestre:
   1) Kaskad sayaç: canlı değerler sabit hücrelerinde yukarı kayarak
      değişir (satır zıplamaz) —gsap.matchMedia ile reduced-motion'da
      anında geçer.
   2) Sayfa girişi: rail ve içerik ilk açılışta kısa yükselme.
   3) Şalter: OYNA'ya basınca tek seferlik geri bildirim.
   CSS transition'ları mikro-etkileşimler için yeterli; GSAP yalnız
   bu üç orkestrayı çalar.
   ============================================================ */
import { gsap } from "gsap";

export { gsap };

const mm = gsap.matchMedia();

/** prefers-reduced-motion'a saygılı tek ayar: */
export function reducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ---------- 1) Kaskad sayaç ---------- */

interface CascadeEntry {
  current: string;
  tween: gsap.core.Tween | null;
}

const cascadeTargets = new WeakMap<HTMLElement, CascadeEntry>();

/**
 * Bir değeri hücresinde kaskadla değiştirir: eski değer yukarı çıkar,
 * yenisi alttan girer. Değer değişmemişse hiçbir şey yapmaz.
 * reduced-motion'da doğrudan yazar.
 */
export function cascadeText(elm: HTMLElement, next: string): void {
  const entry = cascadeTargets.get(elm) ?? { current: elm.textContent ?? "", tween: null };
  if (entry.current === next) return;
  entry.current = next;
  cascadeTargets.set(elm, entry);

  if (reducedMotion()) {
    elm.textContent = next;
    return;
  }
  entry.tween?.kill();
  const old = elm.textContent ?? "";
  // çift katman: eski yukarı, yeni alttan
  elm.innerHTML = "";
  const wrap = document.createElement("span");
  wrap.style.cssText = "display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";
  const up = document.createElement("span");
  up.textContent = old;
  up.style.cssText = "display:block;";
  const dn = document.createElement("span");
  dn.textContent = next;
  dn.style.cssText = "display:block; position:absolute; left:0; top:100%;";
  wrap.append(up, dn);
  elm.appendChild(wrap);
  entry.tween = gsap.to([up, dn], {
    yPercent: -100,
    duration: 0.32,
    ease: "power2.out",
    onComplete: () => {
      elm.textContent = next;
      entry.tween = null;
    },
  });
}

/* ---------- 2) Sayfa girişi ---------- */

/** Yeni render edilen kökün çocuklarını tek seferlik sahnelendir. */
export function enterStage(root: HTMLElement): void {
  if (reducedMotion()) return;
  const targets = Array.from(root.children).slice(0, 8) as HTMLElement[];
  if (!targets.length) return;
  gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: 0.34, ease: "power2.out", stagger: 0.045, overwrite: true, clearProps: "transform" },
  );
}

/** Bir grup satırı sırayla devreye alır (hat defteri girişi). */
export function enterRows(rows: Element[]): void {
  if (reducedMotion() || !rows.length) return;
  gsap.fromTo(
    rows,
    { autoAlpha: 0, x: -8 },
    { autoAlpha: 1, x: 0, duration: 0.28, ease: "power2.out", stagger: 0.03, overwrite: true, clearProps: "transform" },
  );
}

/* ---------- 3) Şalter geri bildirimi ---------- */

/** OYNA şalteri tıklanınca tek seferlik basış geri bildirimi. */
export function switchPress(btn: HTMLElement): void {
  if (reducedMotion()) return;
  gsap.fromTo(
    btn,
    { scale: 1 },
    { scale: 0.97, duration: 0.07, yoyo: true, repeat: 1, ease: "power1.inOut", overwrite: true, clearProps: "scale" },
  );
}

/** Sayfa kapanışı — içerik kısa söner (navigasyon sürekli hissetmesin). */
export function exitStage(root: HTMLElement, done: () => void): void {
  if (reducedMotion()) { done(); return; }
  gsap.to(root, {
    autoAlpha: 0,
    duration: 0.12,
    ease: "power1.in",
    onComplete: () => {
      gsap.set(root, { clearProps: "all" });
      done();
    },
  });
}

/* matchMedia örneği kullanım dışı; ileride breakpoint'e özel sahne gerekirse burada */
void mm;
