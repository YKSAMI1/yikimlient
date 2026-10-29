// SAHNE ARKA PLANLARI — piksel sanat sahneleri (prosedürel, dosyasız)
//
// Karakterin arkasındaki sahne 128×96 piksel tuvale çizilir, CSS `pixelated`
// ile büyütülür; her sahne sabit bir tohumla çizildiği için görüntü titremez.
// Amaç: düz checker zemin yerine Minecraft'ın kendi dünyalarından tanıdık,
// katmanlı (gök → siluet → orta plan → zemin → ön detay) manzaralar.

export interface SahneArti {
  id: string;
  ad: string;
  /** Sahne kartında gösterilen kısa etiket */
  etiket: string;
  ciz: (g: CanvasRenderingContext2D) => void;
}

const W = 128;
const H = 96;

/** Deterministik PRNG — her çizimde aynı yıldız/petal/parıltı dağılımı. */
function rastgele(tohum: number): () => number {
  let s = tohum >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function px(g: CanvasRenderingContext2D, x: number, y: number, w = 1, h = 1, renk = "#fff") {
  g.fillStyle = renk;
  g.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

/** Gökyüzü: 4-5 renkli bantlar arasında 2×1 dither ile yumuşak geçiş. */
function gok(g: CanvasRenderingContext2D, renkler: string[], alt = H) {
  const bant = Math.ceil(alt / renkler.length);
  renkler.forEach((renk, i) => px(g, 0, i * bant, W, bant + 1, renk));
  // bant sınırlarında karışık pikseller (piksel sanatın imzası)
  for (let i = 1; i < renkler.length; i++) {
    const y = i * bant;
    const r = rastgele(i * 977);
    for (let x = 0; x < W; x += 2) {
      if (r() > 0.45) {
        px(g, x, y - 1, 1, 1, renkler[i - 1]);
        if (r() > 0.6) px(g, x + 1, y - 1, 1, 1, renkler[i]);
      }
    }
  }
}

/** Yumuşak bulut kümeleri (2-3 katman dikdörtgen + alt gölge). */
function bulut(g: CanvasRenderingContext2D, x: number, y: number, w: number, acik: string, koyu: string) {
  px(g, x + 3, y + 3, w, 3, acik);
  px(g, x, y + 5, w + 6, 3, acik);
  px(g, x + 2, y + 8, w - 2, 2, koyu);
  px(g, x + 6, y + 2, w - 8, 2, acik);
  px(g, x + 4, y + 10, w - 6, 1, koyu);
}

/** Uzak dağ/hilal silueti: üçgenler + kar/ışık pikselleri. */
function daglar(g: CanvasRenderingContext2D, taban: number, renk: string, isik: string, tohum: number) {
  const r = rastgele(tohum);
  for (let i = 0; i < 6; i++) {
    const x = Math.floor(r() * W);
    const h = 18 + Math.floor(r() * 26);
    for (let k = 0; k < h; k++) {
      const gen = Math.max(1, Math.round((k / h) * (16 + (i % 3) * 6)));
      px(g, x - gen, taban - k, gen * 2, 1, renk);
    }
    px(g, x - 1, taban - h + 1, 2, 2, isik);
  }
}

/** Titreşen lav/ışık parçacıkları. */
function parilti(g: CanvasRenderingContext2D, adet: number, renkler: string[], tohum: number, ust = 30) {
  const r = rastgele(tohum);
  for (let i = 0; i < adet; i++) {
    const x = Math.floor(r() * W);
    const y = ust + Math.floor(r() * (H - ust));
    px(g, x, y, 1, 1, renkler[Math.floor(r() * renkler.length)]);
  }
}

const ARTLar: SahneArti[] = [
  {
    id: "kiraz",
    ad: "Kiraz Korusu",
    etiket: "Pembe taç, düşen yapraklar",
    ciz(g) {
      gok(g, ["#f6d8e4", "#f1c6d8", "#e8b0ca", "#cf8fb4"], 70);
      // uzak tepe
      px(g, 0, 62, W, 8, "#b98aa6");
      px(g, 0, 68, W, 8, "#8f6377");
      daglar(g, 64, "#a97a95", "#d9aec6", 41);
      // kiraz ağaçları: taç = üst üste yuvarlak kümeler
      const agac = (x: number, boy: number, tohum: number) => {
        const r = rastgele(tohum);
        const taban = 78;
        px(g, x, taban - boy, 3, boy, "#5d3b46");
        px(g, x + 1, taban - boy, 1, boy, "#7a5260");
        const yaricap = 12 + Math.floor(r() * 5);
        for (let i = 0; i < 3; i++) {
          const cx = x + 1 + Math.round((r() - 0.5) * 14);
          const cy = taban - boy - Math.round(r() * 14) - i * 4;
          for (let dy = -yaricap; dy <= yaricap; dy++) {
            const gen = Math.round(Math.sqrt(Math.max(0, yaricap * yaricap - dy * dy)) * 1.15);
            if (gen <= 0) continue;
            px(g, cx - gen, cy + dy, gen * 2, 1, dy < 0 ? "#f7b8d2" : "#e795b6");
          }
          // taç içi gölge ve ışık
          for (let k = 0; k < 10; k++) {
            const dx = Math.round((r() - 0.5) * yaricap * 1.6);
            const dy = Math.round((r() - 0.5) * yaricap * 1.6);
            px(g, cx + dx, cy + dy, 1, 1, r() > 0.5 ? "#ffd3e4" : "#d47fa1");
          }
        }
      };
      agac(18, 26, 7);
      agac(96, 30, 19);
      agac(58, 22, 31);
      // zemin + düşen yapraklar
      px(g, 0, 78, W, H - 78, "#7fa86a");
      px(g, 0, 78, W, 2, "#9dc484");
      px(g, 0, 90, W, 6, "#5d7f4f");
      const r = rastgele(53);
      for (let i = 0; i < 70; i++) {
        px(g, r() * W, 12 + r() * 62, 1, 1, r() > 0.5 ? "#ffd3e4" : "#f2a7c4");
      }
    },
  },
  {
    id: "nether",
    ad: "Nether Kalesi",
    etiket: "Obsidyen kule, lav parıltısı",
    ciz(g) {
      gok(g, ["#2a0d13", "#4a1119", "#6d1a1e", "#8f2a20"], 56);
      // lav ufku
      px(g, 0, 52, W, 6, "#ff6a1a");
      px(g, 0, 52, W, 2, "#ffa347");
      px(g, 0, 56, W, 2, "#c93d0c");
      // uzak kale silueti
      px(g, 0, 40, W, 14, "#2b1218");
      px(g, 12, 26, 16, 30, "#1c0a10");
      px(g, 12, 22, 16, 5, "#2f121a");
      px(g, 96, 18, 20, 42, "#1c0a10");
      px(g, 96, 14, 20, 5, "#2f121a");
      px(g, 44, 34, 34, 26, "#22101a");
      px(g, 44, 30, 34, 4, "#331522");
      // pencere ışıkları
      const r = rastgele(17);
      for (let i = 0; i < 16; i++) {
        const x = 46 + Math.floor(r() * 30);
        const y = 36 + Math.floor(r() * 20);
        px(g, x, y, 2, 3, "#ff9b3d");
      }
      px(g, 18, 32, 2, 3, "#ffb04d");
      px(g, 102, 26, 2, 3, "#ffb04d");
      // ön plan: obsidyen blokları + lav yarığı
      px(g, 0, 70, W, 26, "#120810");
      for (let x = 0; x < W; x += 16) {
        px(g, x, 70, 15, 8, "#1b0d17");
        px(g, x + 1, 71, 13, 2, "#241322");
      }
      px(g, 0, 84, W, 4, "#ff5a14");
      px(g, 0, 84, W, 1, "#ffb44d");
      px(g, 0, 88, W, 8, "#120810");
      parilti(g, 40, ["#ff8a2a", "#ffc061", "#ff5a14"], 91, 24);
    },
  },
  {
    id: "end",
    ad: "End Şehri",
    etiket: "Mor boşluk, koros kuleler",
    ciz(g) {
      gok(g, ["#150c22", "#1d1030", "#26143d", "#2f1a49"], 62);
      parilti(g, 55, ["#e7d6ff", "#b795f0", "#8e6bd0"], 13, 4);
      // ufuk adası
      px(g, 0, 58, W, 10, "#241436");
      px(g, 0, 58, W, 2, "#3a2152");
      // end şehri kuleleri
      const kule = (x: number, y: number, h: number) => {
        px(g, x, y, 9, h, "#3d2a56");
        px(g, x + 1, y, 2, h, "#55406f");
        px(g, x + 7, y, 2, h, "#2a1c3d");
        px(g, x - 2, y - 3, 13, 3, "#63498a");
        px(g, x - 1, y - 6, 11, 3, "#4a3568");
        px(g, x + 2, y - 9, 5, 3, "#63498a");
      };
      kule(16, 30, 30);
      kule(74, 22, 38);
      kule(104, 36, 24);
      // end rod ışıkları (parlak mor-beyaz noktalar + hale)
      const isik = (x: number, y: number) => {
        px(g, x, y, 2, 6, "#efe4ff");
        px(g, x - 2, y + 1, 6, 3, "rgba(200,170,255,0.35)");
        px(g, x, y + 6, 2, 2, "#b795f0");
      };
      isik(20, 24);
      isik(78, 16);
      isik(108, 30);
      // yüzen ada parçaları
      px(g, 30, 46, 14, 4, "#2c1a41");
      px(g, 34, 50, 6, 3, "#1e1130");
      px(g, 96, 50, 10, 3, "#2c1a41");
      // ön plan: end taşı
      px(g, 0, 68, W, H - 68, "#1b1029");
      px(g, 0, 68, W, 3, "#34204a");
      for (let x = 4; x < W; x += 14) px(g, x, 76, 9, 2, "#2a1a3d");
      parilti(g, 22, ["#c9b3f5", "#8e6bd0"], 71, 70);
    },
  },
  {
    id: "bastion",
    ad: "Bastion",
    etiket: "Karataş surlar, altın damar",
    ciz(g) {
      gok(g, ["#2b0b0b", "#451014", "#5d1717", "#74201b"], 50);
      px(g, 0, 46, W, 8, "#8a2a1c");
      // bastion gövdesi: katmanlı karataş
      const tas = (x: number, y: number, w: number, h: number) => {
        px(g, x, y, w, h, "#221a1f");
        px(g, x, y, w, 2, "#33272e");
        for (let i = 4; i < h; i += 8) px(g, x + 2, y + i, w - 4, 1, "#1a1318");
      };
      tas(0, 24, 30, 46);
      tas(98, 18, 30, 52);
      tas(34, 34, 60, 36);
      // mazgallar
      for (let x = 36; x < 92; x += 12) px(g, x, 38, 6, 6, "#120d10");
      px(g, 4, 28, 8, 8, "#120d10");
      px(g, 104, 24, 8, 8, "#120d10");
      // altın blok damarları
      px(g, 8, 50, 4, 4, "#ffcf4d");
      px(g, 14, 54, 2, 2, "#e0a81f");
      px(g, 106, 44, 5, 5, "#ffcf4d");
      px(g, 60, 52, 4, 4, "#ffcf4d");
      px(g, 66, 56, 2, 2, "#e0a81f");
      // alt uçurum + lav
      px(g, 0, 70, W, 26, "#150f12");
      px(g, 0, 74, W, 6, "#ff6418");
      px(g, 0, 74, W, 1, "#ffb44d");
      px(g, 0, 80, W, 16, "#150f12");
      parilti(g, 26, ["#ffb44d", "#ff7a20"], 33, 60);
    },
  },
  {
    id: "mantar",
    ad: "Mantar Adası",
    etiket: "Dev şapkalar, turkuaz gök",
    ciz(g) {
      gok(g, ["#0d2b33", "#123a44", "#17505a", "#1d6b70"], 74);
      bulut(g, 22, 18, 22, "#2d6f74", "#1d5259");
      bulut(g, 76, 12, 30, "#2d6f74", "#1d5259");
      // uzak ada
      px(g, 0, 66, W, 10, "#2f6b52");
      px(g, 0, 66, W, 2, "#4b8b68");
      // dev mantarlar
      const mantar = (x: number, boy: number, tohum: number) => {
        const r = rastgele(tohum);
        const sap = 4 + Math.floor(r() * 2);
        px(g, x, 74 - boy, sap, boy, "#e6d7bd");
        px(g, x, 74 - boy, 1, boy, "#f3e9d6");
        px(g, x + sap - 1, 74 - boy, 1, boy, "#c9b797");
        const capY = 74 - boy - 10;
        for (let i = 0; i < 10; i++) {
          const gen = Math.round(14 - i * 1.1);
          px(g, x + sap / 2 - gen, capY + i, gen * 2, 1, i < 4 ? "#e14a3a" : "#c33a2e");
        }
        // şapka benekleri
        for (let i = 0; i < 9; i++) {
          px(g, x + sap / 2 - 12 + r() * 24, capY + 2 + r() * 7, 2, 1, "#fff3e2");
        }
      };
      mantar(22, 30, 3);
      mantar(72, 40, 9);
      mantar(104, 24, 15);
      // zemin + sporlar
      px(g, 0, 74, W, H - 74, "#3f7c5c");
      px(g, 0, 74, W, 2, "#5b9d77");
      px(g, 0, 86, W, 10, "#2c5a44");
      const r = rastgele(61);
      for (let i = 0; i < 48; i++) px(g, r() * W, 10 + r() * 60, 1, 1, r() > 0.5 ? "#a9f0d8" : "#7fd6be");
    },
  },
  {
    id: "buz",
    ad: "Buz Diyarı",
    etiket: "Aurora, buzdağı",
    ciz(g) {
      gok(g, ["#071226", "#0c1d3a", "#122b52", "#19396b"], 60);
      // aurora bantları
      for (let i = 0; i < 4; i++) {
        const y = 12 + i * 7;
        for (let x = 0; x < W; x++) {
          const dalga = Math.round(Math.sin((x / W) * Math.PI * 2 + i) * 3);
          px(g, x, y + dalga, 1, 2, i % 2 ? "rgba(94,255,206,0.30)" : "rgba(122,182,255,0.28)");
        }
      }
      parilti(g, 40, ["#ffffff", "#cfe6ff", "#9fc4ff"], 29, 2);
      // uzak dağlar
      daglar(g, 60, "#2a4a74", "#7fa8d6", 77);
      // buzdağları
      const buz = (x: number, y: number, w: number, h: number) => {
        for (let i = 0; i < h; i++) {
          const gen = Math.round(w * (1 - i / h) * 0.9);
          px(g, x - gen / 2 + i * 0.4, y + i, gen, 1, i < h * 0.4 ? "#d6ecff" : "#a6cbe8");
        }
        px(g, x, y + 2, 2, h - 4, "#ffffff");
      };
      buz(22, 46, 26, 26);
      buz(96, 52, 30, 20);
      buz(60, 58, 18, 14);
      // buzlu su
      px(g, 0, 72, W, H - 72, "#0f2a4a");
      px(g, 0, 72, W, 2, "#2b5f8c");
      for (let i = 0; i < 24; i++) {
        const r = rastgele(i * 13);
        px(g, r() * W, 76 + r() * 18, 6 + r() * 10, 1, "#1f4b72");
      }
      const r = rastgele(83);
      for (let i = 0; i < 26; i++) px(g, r() * W, 28 + r() * 44, 1, 1, "#ffffff");
    },
  },
  {
    id: "col",
    ad: "Çöl Tapınağı",
    etiket: "Kum piramit, sıcak pus",
    ciz(g) {
      gok(g, ["#f7dfa8", "#f3cf86", "#e8b969", "#d9a052"], 62);
      // güneş + hale
      px(g, 96, 12, 12, 12, "#fff3cf");
      px(g, 94, 10, 16, 16, "rgba(255,235,180,0.25)");
      // kumullar
      for (let i = 0; i < 4; i++) {
        const y = 54 + i * 6;
        px(g, 0, y, W, 6, i < 2 ? "#d8ab68" : "#c1924f");
        px(g, 0, y, W, 1, "#e8c584");
      }
      // piramit (basamaklı)
      const tepe = 22;
      for (let i = 0; i < 34; i++) {
        const gen = Math.round(8 + i * 1.7);
        px(g, 46 - gen / 2, tepe + i, gen, 1, i % 7 === 0 ? "#c79a55" : "#dcb271");
        px(g, 46 - gen / 2, tepe + i, 2, 1, "#f0d29a");
      }
      // tapınak girişi
      px(g, 42, 40, 8, 16, "#6b4d28");
      px(g, 43, 42, 6, 14, "#3d2b14");
      // palmiye
      px(g, 18, 52, 3, 22, "#7b5a34");
      for (let i = 0; i < 5; i++) {
        const yon = i < 2 ? -1 : 1;
        for (let k = 0; k < 8; k++) {
          px(g, 19 + yon * k, 52 - k + Math.abs(k - 3), 2, 1, i % 2 ? "#5f8f4a" : "#7aa85c");
        }
      }
      // kum zemin + taş
      px(g, 0, 78, W, H - 78, "#e0b877");
      px(g, 0, 78, W, 2, "#f2d49b");
      for (let x = 6; x < W; x += 18) px(g, x, 86, 5, 2, "#c69a5c");
    },
  },
  {
    id: "okyanus",
    ad: "Okyanus Anıtı",
    etiket: "PriZmarin, ışık huzmeleri",
    ciz(g) {
      gok(g, ["#0a2a3a", "#0c3446", "#0e3f52", "#104a5e"], 40);
      // ışık huzmeleri
      for (let i = 0; i < 6; i++) {
        const x = 8 + i * 21;
        for (let y = 0; y < 66; y++) {
          const gen = 2 + y * 0.18;
          px(g, x + y * 0.12, y, gen, 1, "rgba(150,240,255,0.06)");
        }
      }
      // anıt gövdesi
      const blok = (x: number, y: number, w: number, h: number) => {
        px(g, x, y, w, h, "#2f7d76");
        px(g, x, y, w, 2, "#48a89a");
        px(g, x, y + h - 2, w, 2, "#1f5b57");
      };
      blok(28, 30, 72, 34);
      blok(40, 22, 48, 10);
      blok(52, 14, 24, 10);
      // deniz feneri kristali (parlak)
      px(g, 60, 18, 8, 4, "#a8f0e2");
      px(g, 62, 16, 4, 2, "#e0fff8");
      // detay: altın bloklar ve yosun
      px(g, 34, 40, 4, 4, "#d9b34a");
      px(g, 90, 46, 4, 4, "#d9b34a");
      for (let x = 32; x < 96; x += 12) px(g, x, 52, 6, 2, "#1d4a48");
      // deniz tabanı
      px(g, 0, 64, W, H - 64, "#0b2c33");
      px(g, 0, 64, W, 3, "#164a4a");
      // yosun demetleri
      const r = rastgele(47);
      for (let i = 0; i < 16; i++) {
        const x = r() * W;
        const h = 6 + r() * 12;
        px(g, x, 78 - h, 2, h, r() > 0.5 ? "#1f6b55" : "#2b8a63");
      }
      parilti(g, 30, ["#8fe8dd", "#c8fff6"], 11, 8);
    },
  },
];

export const SAHNE_ARTLARI: SahneArti[] = ARTLar;

export function sahneArtiBul(id: string): SahneArti {
  return ARTLar.find((a) => a.id === id) || ARTLar[0];
}

/** Sahneyi verilen tuvale çiz (tuval 128×96'ya ayarlanır). */
export function sahneArkaCiz(canvas: HTMLCanvasElement, id: string): void {
  const g = canvas.getContext("2d");
  if (!g) return;
  if (canvas.width !== W || canvas.height !== H) {
    canvas.width = W;
    canvas.height = H;
  }
  g.imageSmoothingEnabled = false;
  g.clearRect(0, 0, W, H);
  sahneArtiBul(id).ciz(g);
}
