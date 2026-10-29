// PİKSEL PAFTA — editörün DOM'suz çekirdeği (64×64 RGBA).
// Tarayıcıda canvas'a, Node testlerinde doğrudan belleğe çalışır.

export type RGBA = [number, number, number, number];

const W = 64;
const H = 64;
const EN_FAZLA_GECMIS = 40;

export class PikselPafta {
  readonly w = W;
  readonly h = H;
  veri: Uint8ClampedArray;
  private gecmis: Uint8ClampedArray[] = [];
  private gelecek: Uint8ClampedArray[] = [];

  constructor(veri?: Uint8ClampedArray) {
    this.veri = veri ? new Uint8ClampedArray(veri) : new Uint8ClampedArray(W * H * 4);
  }

  static bos(): PikselPafta {
    return new PikselPafta();
  }

  static rgba(v: ArrayLike<number>, i = 0): RGBA {
    return [v[i], v[i + 1], v[i + 2], v[i + 3]];
  }

  kopya(): PikselPafta {
    return new PikselPafta(this.veri);
  }

  piksel(x: number, y: number): RGBA {
    if (x < 0 || y < 0 || x >= W || y >= H) return [0, 0, 0, 0];
    const i = (y * W + x) * 4;
    return [this.veri[i], this.veri[i + 1], this.veri[i + 2], this.veri[i + 3]];
  }

  /** Tek piksel yazar; `kalinlik` kare fırça (1/2/4 px). */
  boya(x: number, y: number, renk: RGBA, kalinlik = 1): void {
    const k = Math.max(1, Math.min(8, Math.floor(kalinlik)));
    const bas = x - Math.floor((k - 1) / 2);
    const basY = y - Math.floor((k - 1) / 2);
    for (let dy = 0; dy < k; dy++) {
      for (let dx = 0; dx < k; dx++) {
        const px = bas + dx;
        const py = basY + dy;
        if (px < 0 || py < 0 || px >= W || py >= H) continue;
        const i = (py * W + px) * 4;
        this.veri[i] = renk[0];
        this.veri[i + 1] = renk[1];
        this.veri[i + 2] = renk[2];
        this.veri[i + 3] = renk[3];
      }
    }
  }

  /** Bresenham: iki nokta arasında boşluksuz çizgi. */
  cizgi(x0: number, y0: number, x1: number, y1: number, renk: RGBA, kalinlik = 1): void {
    let x = Math.round(x0);
    let y = Math.round(y0);
    const xb = Math.round(x1);
    const yb = Math.round(y1);
    const dx = Math.abs(xb - x);
    const dy = -Math.abs(yb - y);
    const sx = x < xb ? 1 : -1;
    const sy = y < yb ? 1 : -1;
    let hata = dx + dy;
    for (;;) {
      this.boya(x, y, renk, kalinlik);
      if (x === xb && y === yb) break;
      const e2 = 2 * hata;
      if (e2 >= dy) {
        hata += dy;
        x += sx;
      }
      if (e2 <= dx) {
        hata += dx;
        y += sy;
      }
    }
  }

  /** Kova: tohumla aynı renkteki bağlantılı bölgeyi boyar (4 komşu). */
  kova(x: number, y: number, renk: RGBA): void {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const hedef = this.piksel(x, y);
    if (ayni(hedef, renk)) return;
    const yigin: number[] = [y * W + x];
    const gorulen = new Uint8Array(W * H);
    while (yigin.length) {
      const i = yigin.pop() as number;
      if (gorulen[i]) continue;
      gorulen[i] = 1;
      const px = i % W;
      const py = Math.floor(i / W);
      if (!ayni(this.piksel(px, py), hedef)) continue;
      this.boya(px, py, renk);
      if (px > 0) yigin.push(i - 1);
      if (px < W - 1) yigin.push(i + 1);
      if (py > 0) yigin.push(i - W);
      if (py < H - 1) yigin.push(i + W);
    }
  }

  /** Damlacık: pikselin rengini döner. */
  damla(x: number, y: number): RGBA {
    return this.piksel(x, y);
  }

  /** Bir çizim hamlesinin başında çağrılır: mevcut hâli geçmişe atar. */
  katmanBasla(): void {
    this.gecmis.push(new Uint8ClampedArray(this.veri));
    if (this.gecmis.length > EN_FAZLA_GECMIS) this.gecmis.shift();
    this.gelecek.length = 0;
  }

  geriAl(): boolean {
    const onceki = this.gecmis.pop();
    if (!onceki) return false;
    this.gelecek.push(new Uint8ClampedArray(this.veri));
    this.veri = onceki;
    return true;
  }

  ileriAl(): boolean {
    const sonraki = this.gelecek.pop();
    if (!sonraki) return false;
    this.gecmis.push(new Uint8ClampedArray(this.veri));
    this.veri = sonraki;
    return true;
  }

  /** Undo yığınında adım var mı? */
  geriVar(): boolean {
    return this.gecmis.length > 0;
  }

  ileriVar(): boolean {
    return this.gelecek.length > 0;
  }
}

function ayni(a: RGBA, b: RGBA): boolean {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/** 64×32 eski paftayı 64×64 tuvale genişletir (üst yarı kopyalanır, alt yüzler saydam). */
export function eskiPaftayiGenislet(veri: Uint8ClampedArray): Uint8ClampedArray {
  const cikti = new Uint8ClampedArray(64 * 64 * 4);
  for (let y = 0; y < 32; y++) {
    const bas = y * 64 * 4;
    cikti.set(veri.subarray(bas, bas + 64 * 4), bas);
  }
  return cikti;
}
