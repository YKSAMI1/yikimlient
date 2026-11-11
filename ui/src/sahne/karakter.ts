// YIKIM SAHNE - KARAKTER VİTRİNİ (three.js Minecraft oyuncu modeli + emote oynatıcı)
//
// Seçili hesabın skin'i ile kutu model (kafa/gövde/kollar/bacaklar + şapka)
// çizer; Emotecraft emote'larını rastgele oynatır, boşluklarda idle durur.
//
// UV eşlemi: standart 64x64 skin paftası, BoxGeometry yüz sırası
// [px(0), nx(1), py(2), ny(3), pz(4), nz(5)] üzerinde bölge eşleme.
// Kamera +z tarafında; karakterin ön yüzü(camera'ya bakan) pz yüzüne gelir.
// Yön işaretleri görsel testle doğrulanmıştır (dev önizleme).

import * as THREE from "three";
import { Emote, Poz, SIFIR_POZ, poz as pozAl } from "./emote";

const KS = 1 / 24; // piksel → dünya (oyuncu boyu 32px = 1.33 birim)

interface Bölge { u: number; v: number; w: number; h: number; d: number; }

/** Kozmetik paftası: pelerin ve elitranın ikisi de vanilla 64×32 atlasıdır. */
const KOZ_G = 64;
const KOZ_Y = 32;
/** Vanilla elitra duruşu (class_563 / ElytraEntityModel): her iki kanat
 *  +15° pitch (alt uç sırttan ayrılır) ve ∓15° roll (alt uçlar dışa açılır). */
const KANAT_PITCH = 0.2617994;
const KANAT_ROLL = 0.2617994;
/** 3D çizimde her kanadın pivotunu dışa kaydırma (px): sağ kanat sağa, sol kanat
 *  sola — iki plaka arasında ~8 px boşluk kalır, ikisi de rahat boyanır. */
const KANAT_AYRIK = 9;

/** BoxGeometry'nin bir yüzüne paftadan bölge eşler.
 *  `dikey` yalnızca alt (ny) yüzde gerekir: vanilla paftada alt yüz dikey aynalıdır. */
function yuzUV(geo: THREE.BufferGeometry, yuz: number, x1: number, y1: number, x2: number, y2: number, dikey = false): void {
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    const i = yuz * 4;
    const ay1 = dikey ? y2 : y1;
    const ay2 = dikey ? y1 : y2;
    uv.setXY(i + 0, x1 / 64, 1 - ay1 / 64);
    uv.setXY(i + 1, x2 / 64, 1 - ay1 / 64);
    uv.setXY(i + 2, x1 / 64, 1 - ay2 / 64);
    uv.setXY(i + 3, x2 / 64, 1 - ay2 / 64);
}

/** Piksel dokusunu keskin (nearest) ve doğru renk uzayında kullan. */
function dokuAyarla(doku: THREE.Texture): void {
    doku.magFilter = THREE.NearestFilter;
    doku.minFilter = THREE.NearestFilter;
    doku.colorSpace = THREE.SRGBColorSpace;
}

function kutuMalzeme(doku: THREE.Texture | null, saydam = false): THREE.Material {
    return doku
        ? new THREE.MeshLambertMaterial({ map: doku, transparent: saydam, alphaTest: saydam ? 0.01 : 0 })
        : new THREE.MeshLambertMaterial({ color: 0x5a6672 });
}

/** Bölge tablosundan kutu mesh'i kurar (uv: 64x64 pafta formülü). */
function kutuYap(b: Bölge, doku: THREE.Texture | null, saydam = false): THREE.Mesh {
    const geo = new THREE.BoxGeometry(b.w * KS, b.h * KS, b.d * KS);
    const { u, v, w, h, d } = b;
    if (doku) {
        yuzUV(geo, 0, u + d + w, v + d, u + d + w + d, v + d + h);          // px: +x yüzü
        yuzUV(geo, 1, u, v + d, u + d, v + d + h);                          // nx: -x yüzü
        yuzUV(geo, 2, u + d, v, u + d + w, v + d);                          // py: üst
        yuzUV(geo, 3, u + d + w, v, u + d + w + w, v + d, true);            // ny: alt (dikey ayna)
        yuzUV(geo, 4, u + d, v + d, u + d + w, v + d + h);                  // pz: ön
        yuzUV(geo, 5, u + d + w + d, v + d, u + d + w + d + w, v + d + h);  // nz: arka
        dokuAyarla(doku);
    }
    return new THREE.Mesh(geo, kutuMalzeme(doku, saydam));
}

/** Kozmetik kutusu UV'si: vanilla `ModelPart` cuboid düzeni, 64×32 atlas.
 *
 *  Pelerin texOffs(0,0) 10×16×1 · elitra texOffs(22,0) 10×20×2.
 *  Yüz sırası: [px, nx, py, ny, pz, nz]. Alt yüz (ny) dikey aynalıdır —
 *  vanilla paftada alt şerit ters durur.
 *
 *  UV'ler vanilla formülüdür, aynalama YOKTUR. Pelerinde oyunda görünen yüz
 *  pz'dir `(u+d, v+d)` = (1,1) — çünkü vanilla model kutuyu 180° Y döndürür
 *  (`pelerinMeshKur` aynı dönüşü uygular). Elitrada dönüş yoktur; görünen yüz
 *  nz'dir `(u+2d+w, v+d)` = (36,2) — vanilla elitra dokusunda desen yalnız
 *  orada durur (173 opak piksel), (24,2) tamamen saydamdır.
 *  v0.6.3'te pelerin panelleri ters etiketlenmişti; v0.9.0'da düzeltildi. */
function kozUV(
    geo: THREE.BufferGeometry,
    u: number,
    v: number,
    w: number,
    h: number,
    d: number,
): void {
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    const yaz = (yuz: number, x1: number, y1: number, x2: number, y2: number, dikey = false): void => {
        const i = yuz * 4;
        const ay1 = dikey ? y2 : y1;
        const ay2 = dikey ? y1 : y2;
        uv.setXY(i + 0, x1 / KOZ_G, 1 - ay1 / KOZ_Y);
        uv.setXY(i + 1, x2 / KOZ_G, 1 - ay1 / KOZ_Y);
        uv.setXY(i + 2, x1 / KOZ_G, 1 - ay2 / KOZ_Y);
        uv.setXY(i + 3, x2 / KOZ_G, 1 - ay2 / KOZ_Y);
    };
    yaz(0, u + d + w, v + d, u + d + w + d, v + d + h);          // px (+x, karakterin solu)
    yaz(1, u, v + d, u + d, v + d + h);                          // nx (−x, karakterin sağı)
    yaz(2, u + d, v, u + d + w, v + d);                          // py (üst)
    yaz(3, u + d + w, v, u + d + w + w, v + d, true);            // ny (alt, dikey ayna)
    yaz(4, u + d, v + d, u + d + w, v + d + h);                  // pz (+z, gövdeye bakan = iç)
    yaz(5, u + d + w + d, v + d, u + d + w + d + w, v + d + h);  // nz (−z, dış = görünen)
    uv.needsUpdate = true;
}

/** Görseli tam 64×32 paftaya oturt (HD dosyalar da doğru örneklenir). */
function kozPaftasi(resim: CanvasImageSource & { width: number; height: number }): HTMLCanvasElement {
    // HD FOTOĞRAF: 64×32'den büyük görseller olduğu gibi (kendi çözünürlüğünde)
    // tutulur. Doku yerleşimi 64×32 ızgarasının tam katı olduğu için UV'ler
    // değişmez; oyun da bu yüzden HD pelerini/elitrayı aynı şekilde örter.
    const genis = Math.max(KOZ_G, Math.round(resim.width));
    const yuksek = Math.max(KOZ_Y, Math.round(resim.height));
    const t = document.createElement("canvas");
    t.width = genis;
    t.height = yuksek;
    const g = t.getContext("2d");
    if (g) {
        g.imageSmoothingEnabled = genis !== KOZ_G || yuksek !== KOZ_Y;
        g.imageSmoothingQuality = "high";
        g.drawImage(resim, 0, 0, genis, yuksek);
    }
    return t;
}

/** 64×32 paftayı keskin (nearest) doku olarak sarar. */
function atlasDoku(kaynak: CanvasImageSource, yumusak = false): THREE.CanvasTexture {
    const doku = new THREE.CanvasTexture(kaynak as HTMLCanvasElement);
    dokuAyarla(doku);
    if (yumusak) {
        // HD fotoğraf: pikseller ekranda küçültülürken titremesin (mipmap).
        doku.magFilter = THREE.LinearFilter;
        doku.minFilter = THREE.LinearMipmapLinearFilter;
        doku.generateMipmaps = true;
    }
    doku.needsUpdate = true;
    return doku;
}

/** Kutunun ALTI yüzüne piksel ızgarası ekler (3D çizim yardımı).
 *  Izgara mesh'in çocuğudur; kutu dönerken onunla birlikte hareket eder. */
function kutuIzgarasi(hedef: THREE.Mesh, w: number, h: number, d: number): void {
    const hw = (w * KS) / 2;
    const hh = (h * KS) / 2;
    const hd = (d * KS) / 2;
    const eps = 0.0015;
    const malzeme = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
    });
    const cizgi = (noktalar: number[]): void => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(noktalar, 3));
        const l = new THREE.LineSegments(geo, malzeme);
        l.renderOrder = 4;
        hedef.add(l);
    };
    // Ön/arka (z sabit): x × y ızgarası
    for (const z of [-hd - eps, hd + eps]) {
        const n: number[] = [];
        for (let i = 0; i <= w; i++) {
            const x = -hw + i * KS;
            n.push(x, -hh, z, x, hh, z);
        }
        for (let j = 0; j <= h; j++) {
            const y = -hh + j * KS;
            n.push(-hw, y, z, hw, y, z);
        }
        cizgi(n);
    }
    // Sol/sağ (x sabit): z × y ızgarası
    for (const x of [-hw - eps, hw + eps]) {
        const n: number[] = [];
        for (let i = 0; i <= d; i++) {
            const z = -hd + i * KS;
            n.push(x, -hh, z, x, hh, z);
        }
        for (let j = 0; j <= h; j++) {
            const y = -hh + j * KS;
            n.push(x, y, -hd, x, y, hd);
        }
        cizgi(n);
    }
    // Üst/alt (y sabit): x × z ızgarası
    for (const y of [-hh - eps, hh + eps]) {
        const n: number[] = [];
        for (let i = 0; i <= w; i++) {
            const x = -hw + i * KS;
            n.push(x, y, -hd, x, y, hd);
        }
        for (let j = 0; j <= d; j++) {
            const z = -hd + j * KS;
            n.push(-hw, y, z, hw, y, z);
        }
        cizgi(n);
    }
}

/** Bükülebilir uzvun YARISINI üretir (dirsek / diz / bel bükülmesi).
 *
 *  Emotecraft (BendingGeometry) modeli: kemik kutusu yatay ortadan ikiye bölünür,
 *  alt yarı orijinal pivotun yarım boy aşağısındaki eklemden döner.
 *  - `alt === false` → üst yarı; alt yüzü KESİK yüzüdür (orijinal üst dokudan)
 *  - `alt === true`  → alt yarı; üst yüzü kesik yüzü, alt yüzü gerçek alt doku
 *
 *  İki kesik yüz bükülme yokken çakışıktır; tek yüzlü malzeme (front-face culling)
 *  sayesinde z-fighting olmaz, bükülünce de içi boş görünmez. */
function yarimKutuYap(b: Bölge, alt: boolean, doku: THREE.Texture | null, saydam = false): THREE.Mesh {
    const yh = b.h / 2;
    const { u, v, w, d } = b;
    const geo = new THREE.BoxGeometry(b.w * KS, yh * KS, b.d * KS);
    if (doku) {
        // Yan yüzlerde doku bandı: üst yarı kutunun üstünde, alt yarı altında kalır
        const vy = v + d + (alt ? yh : 0);
        const vy2 = vy + yh;
        yuzUV(geo, 0, u + d + w, vy, u + d + w + d, vy2);                    // px
        yuzUV(geo, 1, u, vy, u + d, vy2);                                    // nx
        yuzUV(geo, 2, u + d, v, u + d + w, v + d);                           // py: üst kesik yüzü
        if (alt) yuzUV(geo, 3, u + d + w, v, u + d + w + w, v + d, true);    // ny: gerçek alt doku
        else yuzUV(geo, 3, u + d, v, u + d + w, v + d);                      // ny: kesik yüzü
        yuzUV(geo, 4, u + d, vy, u + d + w, vy2);                            // pz
        yuzUV(geo, 5, u + d + w + d, vy, u + d + w + d + w, vy2);            // nz
        dokuAyarla(doku);
    }
    return new THREE.Mesh(geo, kutuMalzeme(doku, saydam));
}

export class Sahne {
    private renderer: THREE.WebGLRenderer | null = null;
    private scene = new THREE.Scene();
    private camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    private kok: THREE.Group | null = null;
    /** kalça (kök) düğümü: PAL `body` kemiği buradan döndürür/taşır (pivot 0,12,0) */
    private kalca: THREE.Group | null = null;
    private kemikler: {
        head: THREE.Group; body: THREE.Group; armL: THREE.Group; armR: THREE.Group;
        legL: THREE.Group; legR: THREE.Group;
    } | null = null;
    /** dirsek/diz/bel eklemleri: alt yarıların büküldüğü gruplar */
    private bukulenler: {
        /** gövde üst yarısı (dünyada y=18) — her zaman bükülür */
        body: THREE.Group;
        /** baş + kollar (dünyada y=18) — yalnız PAL `applyBendToOtherBones` açıkken bükülür */
        belUst: THREE.Group;
        armL: THREE.Group; armR: THREE.Group;
        legL: THREE.Group; legR: THREE.Group;
    } | null = null;
    private saat = new THREE.Clock();
    private rafId = 0;
    private canvas: HTMLCanvasElement | null = null;
    private boyutla: (() => void) | null = null;
    private zaman = 0;
    /** yatay yörünge: vitrinde sürükleyerek karakterin etrafında dönülür */
    private kameraAci = 0;
    private kameraAciHedef = 0;
    private kameraYariCap = 2.75;
    private kameraYariCapHedef = 2.75;
    private kameraY = 0.34;
    private surukleX: number | null = null;
    private isaretciBas: ((e: PointerEvent) => void) | null = null;
    private isaretciTasi: ((e: PointerEvent) => void) | null = null;
    private isaretciBirak: ((e: PointerEvent) => void) | null = null;
    private tekerlek: ((e: WheelEvent) => void) | null = null;
    private fareEngel: ((e: MouseEvent) => void) | null = null;
    private baglamEngel: ((e: Event) => void) | null = null;
    private durum: "idle" | "emote" | "soft" = "idle";
    /** vitrin kartında göstermek için son oynanan emote adı */
    public sonOynananAd = "";
    private durumBitis = 0;
    private emoteListe: Emote[] = [];
    /** Animasyon temposu çarpanı (Ayarlar → Animasyonlar). */
    private hiz = 1;
    private aktif: Emote | null = null;
    private tEmote = 0;
    /** Pelerin: gövde üst yarısına (belUst) bağlı sarkan KUTU (10×16×1). */
    private pelerinGrup: THREE.Group | null = null;
    private pelerinSarkac: THREE.Group | null = null;
    private pelerinDoku: THREE.Texture | null = null;
    /** Pelerin/kanat yükleme sıra numarası — geç biten istek mesh kurmasın. */
    private pelerinJeton = 0;
    private kanatJeton = 0;
    private _bekleyenPelerin: { url: string } | null = null;
    /** Editör tuvallerinden gelen canlı doku. */
    private canliDoku: THREE.CanvasTexture | null = null;
    /** Son çizilen karenin zamanı — kare bütçesi (FPS sınırı) için. */
    private sonCizimAt = 0;
    /** Canlı tuval modu: editör tuvalleri modelin dokusunu sahiplenir. */
    private canliMod = false;
    /** En son beslenen pelerin tuvali — model sonradan kurulursa yeniden bağlanır. */
    private _pelerinTuval: HTMLCanvasElement | null = null;
    /** Elitra kanatları (kozmetik önizleme): gövde arkasında iki kutu. */
    private kanatGrup: THREE.Group | null = null;
    private kanatDoku: THREE.Texture | null = null;
    /** 3D çizimde kanatlar iki yana açık mı (üst üste binmeden boyamak için). */
    private kanatAyrikAcik = false;
    /** Kanatların son çizilen paftası — model yeniden kurulunca tekrar bağlanır. */
    private _bekleyenKanat: HTMLCanvasElement | null = null;
    /** 3D çizim ışın hedefleri: taban katman ve üst (overlay) katman mesh'leri. */
    private tabanMeshler: THREE.Mesh[] = [];
    private ustMeshler: THREE.Mesh[] = [];
    /** Oyuncu gizle/göster: kozmetik mesh'leri dışındaki tüm parçalar. */
    private oyuncuMeshler: THREE.Mesh[] = [];
    private oyuncuGorunur = true;
    /** 3D çizimde sol tuş boyamaya ayrılır; sağ tuşla döndürme açık kalır. */
    public etkilesimKapali = false;
    /** Dikey yörünge (yukarıdan/aşağıdan bakış). */
    private kameraEgim = 0;
    private kameraEgimHedef = 0;
    private surukleY: number | null = null;
    /** Üst (overlay) katman görünürlüğü. */
    private kaplamaGorunur = true;
    /** Pelerin + elitra görünürlüğü (skin düzenleyicide aç/kapa). */
    private kozmetikGorunur = true;
    /** 3D çizimde piksel sınırlarını gösteren ızgara. */
    private izgaraAcik = false;
    /** Skin düzenleyicide modelin (gövde/kafa/kollar) üstünde piksel ızgarası. */
    private modelIzgaraAcik = false;

    /** Sahneyi başlatır; yeniden çağrılırsa öncekini temizler. */
    /** Sahneyi boşalt: eski model, ışıklar ve kalan her şey.
     *  Editör kendi tuvalinde aynı örneği kullandığı için bu şart — aksi hâlde
     *  geri dönünce eski model sahnede kalıp karakter iki kez çiziliyor. */
    private sahneTemizle(): void {
        if (this.kok) {
            (this.kok.parent ?? this.scene).remove(this.kok);
            this.kok.traverse((o) => {
                const m = o as THREE.Mesh;
                if (m.geometry) m.geometry.dispose();
            });
        }
        this.scene.clear(); // ışıklar dahil; kur() yeniden ekler
        this.kok = null;
        this.pelerinGrup = null;
        this.pelerinSarkac = null;
        this.kanatGrup = null;
        this.tabanMeshler = [];
        this.ustMeshler = [];
        this.oyuncuMeshler = [];
        this.aktif = null;
    }

    kur(canvas: HTMLCanvasElement): void {
        if (this.renderer) this.kapati();
        this.sahneTemizle();
        // Yeni tuval = yeni sayfa: ızgara durumu sıfırlanır (önceki sayfadan taşınmaz).
        this.izgaraAcik = false;
        this.modelIzgaraAcik = false;
        this.canvas = canvas;
        try {
            this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
        } catch {
            return; // WebGL yok — sessiz vazgeç (sayfa akışı bozulmaz)
        }
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.9));
        const ana = new THREE.DirectionalLight(0xffffff, 1.7);
        ana.position.set(2, 4, 5);
        this.scene.add(ana);
        const dolgu = new THREE.DirectionalLight(0xffab4d, 0.55);
        dolgu.position.set(-3, 2, -4);
        this.scene.add(dolgu);
        this.camera.position.set(0, 0.34, 2.75);
        this.camera.lookAt(0, 0.02, 0);
        this.kameraYariCap = 2.75;
        this.kameraYariCapHedef = 2.75;
        this.yorungeKur(canvas);
        this.boyutla = () => {
            if (!this.renderer) return;
            const w = canvas.clientWidth || canvas.parentElement?.clientWidth || 320;
            const h = canvas.clientHeight || 300;
            this.renderer.setSize(w, h, false);
            this.camera.aspect = w / Math.max(1, h);
            this.camera.updateProjectionMatrix();
        };
        this.boyutla();
        window.addEventListener("resize", this.boyutla);
        this.baslatDongu();
        // askılı skin'i kurma sırasında yeniden besle
        if (this._bekleyenSkin) {
            const s = this._bekleyenSkin;
            this._bekleyenSkin = null;
            void this.skin(s);
        }
    }

    /** Vitrin tuvalinde yatay sürükleme ile karakterin etrafında dönme. */
    private yorungeKur(canvas: HTMLCanvasElement): void {
        this.yorungeKapat();
        canvas.style.cursor = "grab";
        canvas.style.touchAction = "pan-y";
        this.isaretciBas = (e: PointerEvent) => {
            // Orta tuş ve sağ tuş HER ZAMAN döndürür (Döndür düğmesine gerek yok).
            // 3D çizimde sol tuş fırçaya aittir; 2D önizlemede sol tuş da döndürür.
            if (e.pointerType === "mouse") {
                const sol = e.button === 0;
                if (sol && this.etkilesimKapali) return;
                if (!sol && e.button !== 1 && e.button !== 2) return;
            }
            this.surukleX = e.clientX;
            this.surukleY = e.clientY;
            canvas.style.cursor = "grabbing";
            try { canvas.setPointerCapture(e.pointerId); } catch { /* pencere kapanmış olabilir */ }
        };
        this.isaretciTasi = (e: PointerEvent) => {
            if (this.surukleX === null) return;
            const dx = e.clientX - this.surukleX;
            const dy = e.clientY - (this.surukleY ?? e.clientY);
            this.surukleX = e.clientX;
            this.surukleY = e.clientY;
            // sağa sürükle → karakter etrafında dön (kamera sola kayar)
            this.kameraAciHedef -= dx * 0.008;
            // yukarı/aşağı sürükle → yukarıdan/aşağıdan bakış
            this.kameraEgimHedef = Math.max(-0.55, Math.min(0.95, this.kameraEgimHedef + dy * 0.006));
        };
        this.isaretciBirak = (e: PointerEvent) => {
            if (this.surukleX === null) return;
            this.surukleX = null;
            this.surukleY = null;
            canvas.style.cursor = "grab";
            try { canvas.releasePointerCapture(e.pointerId); } catch { /* zaten bırakılmış */ }
        };
        canvas.addEventListener("pointerdown", this.isaretciBas);
        canvas.addEventListener("pointermove", this.isaretciTasi);
        canvas.addEventListener("pointerup", this.isaretciBirak);
        canvas.addEventListener("pointercancel", this.isaretciBirak);
        // ORTA/SAG TUS: tarayicinin "kaydirma imleci" (autoscroll) devreye
        // girmesin. Aksi halde orta tusla dondururken sayfa kayiyor ve
        // karakter duzgun donmuyordu. Chrome autoscroll'u mousedown'in
        // varsayilan davranisiyla baslatir → mousedown + auxclick birlikte.
        this.fareEngel = (e: MouseEvent): void => {
            if (e.button === 1) e.preventDefault();
        };
        this.baglamEngel = (e: Event): void => e.preventDefault();
        canvas.addEventListener("mousedown", this.fareEngel);
        canvas.addEventListener("auxclick", this.fareEngel);
        canvas.addEventListener("contextmenu", this.baglamEngel);
        // ORTA/SAG TUS: tarayicinin "kaydirma imleci" (autoscroll) ve baglam
        // menusu devreye girmesin. Aksi halde orta tusla dondururken sayfa
        // kayiyor ve karakter duzgun donmuyordu. `mousedown` da yakalanir:
        // Chrome autoscroll'u mousedown'in varsayilan davranisiyla baslatir.
        this.fareEngel = (e: MouseEvent) => {
            if (e.button === 1) {
                e.preventDefault();
            }
        };
        // Tekerlek: karaktere yaklaş / uzaklaş (sayfa kaymasın diye preventDefault).
        this.tekerlek = (e: WheelEvent) => {
            e.preventDefault();
            this.zoomAyarla(this.kameraYariCapHedef * (e.deltaY > 0 ? 1.12 : 0.89));
        };
        canvas.addEventListener("wheel", this.tekerlek, { passive: false });
    }

    /** Yörünge dinleyicilerini bırakır (yeniden kurma / kapatma). */
    private yorungeKapat(): void {
        const c = this.canvas;
        if (c) {
            if (this.isaretciBas) c.removeEventListener("pointerdown", this.isaretciBas);
            if (this.isaretciTasi) c.removeEventListener("pointermove", this.isaretciTasi);
            if (this.isaretciBirak) {
                c.removeEventListener("pointerup", this.isaretciBirak);
                c.removeEventListener("pointercancel", this.isaretciBirak);
            }
        }
        this.isaretciBas = null;
        this.isaretciTasi = null;
        this.isaretciBirak = null;
        this.surukleX = null;
        if (c && this.tekerlek) c.removeEventListener("wheel", this.tekerlek);
        this.tekerlek = null;
        if (c && this.fareEngel) {
            c.removeEventListener("mousedown", this.fareEngel);
            c.removeEventListener("auxclick", this.fareEngel);
        }
        this.fareEngel = null;
        if (c && this.baglamEngel) c.removeEventListener("contextmenu", this.baglamEngel);
        this.baglamEngel = null;
    }

    /** CSS ile boyut değişince renderer'ı yeniden ölçekle (mod geçişleri). */
    boyutGuncelle(): void {
        this.boyutla?.();
    }

    /** Kamera mesafesi — küçük değer = yakın (yakınlaştırılmış) görünüm. */
    zoomAyarla(mesafe: number): void {
        this.kameraYariCapHedef = Math.max(1.05, Math.min(5.5, mesafe));
    }

    /** Anlık kamera mesafesi. */
    zoomAl(): number {
        return this.kameraYariCapHedef;
    }

    /** Yörünge açısını yumuşatıp kamerayı yerleştirir (yatay + dikey). */
    private kameraGuncelle(dt: number): void {
        const f = Math.min(1, dt * 14);
        this.kameraAci += (this.kameraAciHedef - this.kameraAci) * f;
        this.kameraEgim += (this.kameraEgimHedef - this.kameraEgim) * f;
        this.kameraYariCap += (this.kameraYariCapHedef - this.kameraYariCap) * Math.min(1, dt * 10);
        const r = this.kameraYariCap;
        const yatay = Math.cos(this.kameraEgim) * r;
        this.camera.position.set(
            Math.sin(this.kameraAci) * yatay,
            this.kameraY + Math.sin(this.kameraEgim) * r,
            Math.cos(this.kameraAci) * yatay,
        );
        this.camera.lookAt(0, 0.02, 0);
    }

    /** Bakış açısını ayarla: 0 = ön, π = arka, negatif/pozitif = yanlar. */
    bakisaAyarla(aci: number, egim = 0): void {
        this.kameraAciHedef = aci;
        this.kameraEgimHedef = Math.max(-0.55, Math.min(0.95, egim));
    }

    /** Oyuncu parçasını göster/gizle (3D düzenlemede parça aç-kapa). */
    parcaGoster(parca: "kafa" | "govde" | "kollar" | "bacaklar", acik: boolean): void {
        const k = this.kemikler;
        if (!k) return;
        if (parca === "kafa") k.head.visible = acik;
        else if (parca === "govde") k.body.visible = acik;
        else if (parca === "kollar") {
            k.armL.visible = acik;
            k.armR.visible = acik;
        } else {
            k.legL.visible = acik;
            k.legR.visible = acik;
        }
    }

    /** Üst (overlay) katmanı göster/gizle. */
    kaplamaGoster(acik: boolean): void {
        this.kaplamaGorunur = acik;
        for (const m of this.ustMeshler) m.visible = acik && this.oyuncuGorunur;
    }

    /** Kozmetikleri (pelerin + elitra) göster/gizle — skin düzenleyicide katman. */
    kozmetikGoster(acik: boolean): void {
        this.kozmetikGorunur = acik;
        if (this.pelerinGrup) this.pelerinGrup.visible = acik;
        if (this.kanatGrup) this.kanatGrup.visible = acik;
    }

    private _bekleyenSkin: { url: string; slim: boolean } | null = null;

    /**
     * Dokuyu getir: önce fetch + blob (aynı kaynak → WebGL'de CORS/taint derdi yok),
     * olmazsa klasik ImageLoader (asset:// fetch'e kapalı bazı WebKit sürümleri).
     *
     * DİKKAT: `createImageBitmap` BİLİNÇLİ olarak kullanılmıyor. WebKitGTK
     * (Linux) ImageBitmap dokularında `flipY` bayrağını yok sayıyor → pafta
     * dikey ters düşüyor ve karakter "yamuk yumuk" görünüyordu (Windows'ta
     * WebView2 aynı hatayı yapmadığı için sorun yalnız Linux'ta çıkıyordu).
     * HTMLImageElement + tuval yolu iki platformda birebir aynı sonucu verir.
     */
    private async dokuResmi(url: string): Promise<CanvasImageSource & { width: number; height: number }> {
        try {
            const yanit = await fetch(url);
            if (yanit.ok) {
                const blob = await yanit.blob();
                return await new Promise<HTMLImageElement>((coz, reddet) => {
                    const url2 = URL.createObjectURL(blob);
                    const img = new Image();
                    img.onload = () => { URL.revokeObjectURL(url2); coz(img); };
                    img.onerror = () => { URL.revokeObjectURL(url2); reddet(new Error("görsel açılamadı")); };
                    img.src = url2;
                });
            }
        } catch {
            // asset:// fetch desteklenmiyorsa aşağıdaki klasik yol devreye girer
        }
        return await new THREE.ImageLoader().loadAsync(url);
    }

    /** Skin yükler (asset-protocol/file URL); null ise düz manken. */
    async skin(skin: { url: string; slim: boolean } | null): Promise<void> {
        // Canlı tuval (skin/kozmetik editörü) devraldıysa geç gelen skin yanıtı
        // modeli ezmemeli — yoksa 3D çizimde yapılan boyama görünmez.
        this.canliMod = false;
        let doku: THREE.Texture | null = null;
        if (skin?.url) {
            try {
                const resim = await this.dokuResmi(skin.url);
                // Her skin 64×64 tuvale oturtulur:
                //  - 64×32 (eski pafta): sol üst 1:1 kopya, alt yarı saydam kalır
                //  - 128×128 (HD): 64'e indirgenir
                // Tuval dokusu iki platformda da flipY/sRGB davranışı aynıdır.
                const tuval = document.createElement("canvas");
                tuval.width = 64;
                tuval.height = 64;
                const ctx = tuval.getContext("2d");
                if (ctx) {
                    ctx.imageSmoothingEnabled = false;
                    if (resim.height === 32) ctx.drawImage(resim, 0, 0);
                    else ctx.drawImage(resim, 0, 0, 64, 64);
                    doku = new THREE.Texture(tuval);
                    dokuAyarla(doku);
                    doku.needsUpdate = true;
                }
            } catch { doku = null; }
        }
        if (this.canliMod) return; // bu arada canlı tuval bağlandı → onu koru
        this._bekleyenSkin = skin; // edge: kur() çağrısından önce geldiyse kur After re-apply
        this.modelKur(doku, skin?.slim || false);
    }

    /** Pelerin yükler (tam 64×32 vanilla paftası); null → pelerini kaldırır. */
    async pelerin(p: { url: string } | null): Promise<void> {
        this._bekleyenPelerin = p;
        this.pelerinTemizle();
        this._pelerinTuval = null;
        if (!p?.url) return;
        // SIRA KORUMASI: arka arkaya iki yükleme gelirse (önce Mojang pelerini,
        // sonra özel kozmetik) geç biten istek ikinci bir pelerin mesh'i
        // kuruyordu → üst üste binen iki pelerin. Yalnız SON istek kurar.
        const jeton = ++this.pelerinJeton;
        try {
            const resim = await this.dokuResmi(p.url);
            if (jeton !== this.pelerinJeton) return;
            const pafta = kozPaftasi(resim);
            this.pelerinDoku = atlasDoku(pafta, pafta.width > KOZ_G || pafta.height > KOZ_Y);
            this.pelerinMeshKur();
        } catch { /* pelerin yüklenemedi — pelerinsiz devam */ }
    }

    /**
     * Pelerini doğrudan bir TUVALDEN besle (launcher önizlemesi).
     * Aynı tuval her fırça darbesinde tazelenir → doku yeniden kurulmaz,
     * yalnız `needsUpdate` işaretlenir (geometri yeniden inşa edilmez).
     */
    pelerinTuval(pafta: HTMLCanvasElement | null): void {
        this._bekleyenPelerin = null;
        this._pelerinTuval = pafta;
        if (!pafta) {
            this.pelerinTemizle();
            return;
        }
        if (this.pelerinDoku && (this.pelerinDoku as THREE.CanvasTexture).image === pafta) {
            this.pelerinDoku.needsUpdate = true;
            return;
        }
        this.pelerinTemizle();
        this.pelerinDoku = atlasDoku(pafta);
        this.pelerinMeshKur();
    }

    /** Elitrayı ağdan yükle (tam 64×32 vanilla paftası). */
    async kanat(p: { url: string } | null): Promise<void> {
        this._bekleyenKanat = null;
        this.kanatTemizle();
        if (!p?.url) return;
        const jeton = ++this.kanatJeton;
        try {
            const resim = await this.dokuResmi(p.url);
            if (jeton !== this.kanatJeton) return;
            const kpafta = kozPaftasi(resim);
            this.kanatDoku = atlasDoku(kpafta, kpafta.width > KOZ_G || kpafta.height > KOZ_Y);
            this.kanatMeshKur();
        } catch { /* kanat yüklenemedi — kanatsız devam */ }
    }

    /** Kanatları (elitra paftası 64×32) tuvallerden besle; null → kanatları kaldırır. */
    kanatTuval(pafta: HTMLCanvasElement | null): void {
        this._bekleyenKanat = pafta;
        if (!pafta) {
            this.kanatTemizle();
            return;
        }
        if (this.kanatDoku && (this.kanatDoku as THREE.CanvasTexture).image === pafta) {
            this.kanatDoku.needsUpdate = true;
            return;
        }
        this.kanatTemizle();
        this.kanatDoku = atlasDoku(pafta);
        this.kanatMeshKur();
    }

    /** Kanat mesh'lerini kaldırır — DOKUYA dokunmaz. */
    private kanatMeshSil(): void {
        if (this.kanatGrup?.parent) this.kanatGrup.parent.remove(this.kanatGrup);
        this.kanatGrup?.traverse((o) => {
            const m = o as THREE.Mesh;
            m.geometry?.dispose();
            const mat = m.material as THREE.Material | undefined;
            mat?.dispose();
        });
        this.kanatGrup = null;
    }

    private kanatTemizle(): void {
        this.kanatMeshSil();
        this.kanatDoku?.dispose();
        this.kanatDoku = null;
    }

    /** Elitra kanatları — vanilla `ElytraEntityModel` (class_563) geometrisi.
     *
     *  Vanilla iki kanadı da 10×20×2 kutudan kurar ama kutu, pivotun DIŞINA
     *  değil İÇİNE uzanır: `left_wing` pivot +5, kutu `addBox(-10,0,0,...)`;
     *  `right_wing` pivot −5, kutu `addBox(0,0,0,...)` + `mirror()`. Yani iki
     *  kanat da sırtın TAMAMINI (−5…+5) kaplar ve ortada üst üste biner —
     *  yan yana iki ayrı 10 px'lik panel değildir.
     *
     *  Duruş da vanilyadan: pitch +15° (alt uç sırttan ayrılır), roll ∓15°
     *  (sol +, sağ −; alt uçlar dışa açılır → üstte daralan A silueti).
     *  Vanilla renderer modeli +2 px geri kaydırır (translate 0.125 blok),
     *  bu yüzden kutu z −4…−2 aralığında, gövde sırtının (−2) hemen arkasında.
     *
     *  Doku tam 64×32 atlasından: her kanat vanilla `uv(22,0)` düzenini
     *  kullanır; sağ kanat `mirror()` gibi aynalanır (`scale.x = −1`). */
    private kanatMeshKur(): void {
        const belUst = this.bukulenler?.belUst;
        if (!belUst || !this.kanatDoku) return;
        if (this.kanatGrup) this.kanatMeshSil(); // çift mesh imkânsız
        const mat = new THREE.MeshLambertMaterial({
            map: this.kanatDoku,
            transparent: true,
            alphaTest: 0.01,
            side: THREE.DoubleSide,
        });
        const grup = new THREE.Group();
        // belUst dünyada y=18 (bel); +6 px = omuz (24). Vanilla +2 px geri
        // kaydırma: kutu z −4…−2, dış yüz gövde sırtının 2 px arkasında.
        grup.position.set(0, 6 * KS, -2 * KS);
        for (const yon of [1, -1]) {
            // yon +1 = oyuncunun solu (left_wing, pivot +5), −1 = sağı.
            const eklem = new THREE.Group();
            eklem.position.set(yon * 5 * KS, 0, 0);
            eklem.rotation.order = "ZYX"; // vanilla rotateZYX = Rz·Ry·Rx
            const geo = new THREE.BoxGeometry(10 * KS, 20 * KS, 2 * KS);
            kozUV(geo, 22, 0, 10, 20, 2);
            const kanat = new THREE.Mesh(geo, mat);
            // Kutu pivotun İÇ tarafına 10 px uzanır (vanilla addBox −10 / 0).
            kanat.position.set(-yon * 5 * KS, -10 * KS, -KS);
            if (yon < 0) kanat.scale.x = -1; // vanilla `right_wing` mirror()
            kutuIzgarasi(kanat, 10, 20, 2);
            eklem.add(kanat);
            eklem.rotation.x = KANAT_PITCH;
            eklem.rotation.y = 0;
            eklem.rotation.z = yon * KANAT_ROLL;
            eklem.userData.yon = yon;
            grup.add(eklem);
        }
        grup.visible = this.kozmetikGorunur;
        belUst.add(grup);
        this.kanatGrup = grup;
        this.kanatAyrikUygula(); // 3D çizimde kanatlar ayrık kalsın
        this.izgaraYenile();
    }

    /**
     * Elitra kanatlarını iki yana aç. Vanilla `ElytraEntityModel` her kanadı
     * sırtın TAMAMINI kaplayacak şekilde kurar (ortada üst üste biner); 3D
     * çizimde ikinci kanadın yüzleri seçilemiyordu. Ayrık modda pivotlar
     * dışa kayar → iki panel arasında boşluk kalır, ikisi de boyanabilir.
     */
    kanatAyrik(acik: boolean): void {
        if (this.kanatAyrikAcik === acik) return;
        this.kanatAyrikAcik = acik;
        this.kanatAyrikUygula();
    }

    private kanatAyrikUygula(): void {
        if (!this.kanatGrup) return;
        for (const eklem of this.kanatGrup.children) {
            const yon = (eklem.userData.yon as number) || 1;
            eklem.position.x = yon * (5 + (this.kanatAyrikAcik ? KANAT_AYRIK : 0)) * KS;
        }
    }

    /** 3D çizimde piksel sınırları: kutuların her yüzünde ince ızgara. */
    izgaraGoster(acik: boolean, model = false): void {
        this.izgaraAcik = acik;
        this.modelIzgaraAcik = acik && model;
        if (this.modelIzgaraAcik) this.modelIzgaralari();
        this.izgaraYenile();
    }

    private izgaraYenile(): void {
        for (const kok of [this.pelerinGrup, this.kanatGrup]) {
            kok?.traverse((o) => {
                if ((o as THREE.LineSegments).isLineSegments) o.visible = this.izgaraAcik;
            });
        }
        for (const m of [...this.tabanMeshler, ...this.ustMeshler]) {
            for (const c of m.children) {
                if ((c as THREE.LineSegments).isLineSegments) c.visible = this.modelIzgaraAcik;
            }
        }
    }

    /** Modelin her kutusuna piksel ızgarası ekler ("matris karakterin üstünde").
     *  Yalnız 3D düzenlemede açılır; mesh başına bir kez kurulur. */
    private modelIzgaralari(): void {
        for (const m of [...this.tabanMeshler, ...this.ustMeshler]) {
            if (m.children.some((c) => (c as THREE.LineSegments).isLineSegments)) continue;
            const p = (m.geometry as THREE.BoxGeometry).parameters as
                | { width: number; height: number; depth: number }
                | undefined;
            if (!p) continue;
            const w = Math.max(1, Math.round(p.width / KS));
            const h = Math.max(1, Math.round(p.height / KS));
            const d = Math.max(1, Math.round(p.depth / KS));
            kutuIzgarasi(m, w, h, d);
        }
    }

    /** Pelerin mesh'ini kaldırır — DOKUYA dokunmaz (yeni mesh aynı dokuyu kullanır). */
    private pelerinMeshSil(): void {
        if (this.pelerinGrup?.parent) this.pelerinGrup.parent.remove(this.pelerinGrup);
        this.pelerinGrup?.traverse((o) => {
            const m = o as THREE.Mesh;
            m.geometry?.dispose();
            const mat = m.material as THREE.Material | undefined;
            mat?.dispose();
        });
        this.pelerinGrup = null;
        this.pelerinSarkac = null;
    }

    private pelerinTemizle(): void {
        this.pelerinMeshSil();
        this.pelerinDoku?.dispose();
        this.pelerinDoku = null;
    }

    /** Pelerin — vanilla `CapeFeatureRenderer` gibi 10×16×1 kutu (texOffs 0,0).
     *  Düzlem yerine kutu olması üst/alt/yan yüzlerin de boyanabilmesini sağlar. */
    private pelerinMeshKur(): void {
        const belUst = this.bukulenler?.belUst;
        if (!belUst || !this.pelerinDoku) return;
        if (this.pelerinGrup) this.pelerinMeshSil(); // çift mesh imkânsız
        const geo = new THREE.BoxGeometry(10 * KS, 16 * KS, 1 * KS);
        kozUV(geo, 0, 0, 10, 16, 1);
        // Vanilla pelerin modeli kutuyu 180° Y döndürerek kurar
        // (`PartPose.offsetAndRotation(0,0,2, 0,π,0)`). Dönüş olmadan arkadan
        // görünen yüz (12,1) = astar olurdu; 180° ile oyunda görünen yüz
        // (1,1) = tasarımdır. Önizleme de aynı dönüşü uygular → WYSIWYG.
        // (Ayrıca UV aynalama YAPILMAZ: dönüş okunabilirliği korur.)
        const mat = new THREE.MeshLambertMaterial({
            map: this.pelerinDoku,
            transparent: true,
            alphaTest: 0.01,
            side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.y = Math.PI;
        mesh.position.set(0, -8 * KS, 0);
        kutuIzgarasi(mesh, 10, 16, 1);

        const sarkan = new THREE.Group();
        sarkan.position.set(0, 6 * KS, -2.5 * KS);
        sarkan.rotation.x = 0.06; // hafif dışa salınım (gövdeye doğru değil)
        sarkan.visible = this.kozmetikGorunur;
        sarkan.add(mesh);
        belUst.add(sarkan);
        this.pelerinGrup = sarkan;
        this.pelerinSarkac = sarkan;
        this.izgaraYenile();
    }

    /** Editör tuvalleri için canlı doku kurar (slim değişince model yeniden kurulur). */
    tuvalDoku(kaynak: HTMLCanvasElement, slim: boolean): void {
        const doku = new THREE.CanvasTexture(kaynak);
        dokuAyarla(doku);
        doku.needsUpdate = true;
        this.canliMod = true; // geç gelen skin yanıtları modeli artık ezemez
        this._bekleyenSkin = null;
        this.canliDoku = doku;
        this.modelKur(doku, slim);
    }

    /** Tuvalde çizim yapıldıktan sonra dokuyu tazeler (yeniden kurmadan). */
    dokuTazele(): void {
        if (this.canliDoku) this.canliDoku.needsUpdate = true;
        if (this.pelerinDoku) this.pelerinDoku.needsUpdate = true;
        if (this.kanatDoku) this.kanatDoku.needsUpdate = true;
    }

    /** Oyuncu modelini gizle/göster — kozmetik (pelerin/kanat) görünür kalır. */
    oyuncuGoster(goster: boolean): void {
        this.oyuncuGorunur = goster;
        for (const m of this.oyuncuMeshler) {
            const ustMu = this.ustMeshler.includes(m);
            m.visible = goster && (!ustMu || this.kaplamaGorunur);
        }
    }

    /** 3D çizim (skin): tuval olayı → 64×64 atlas pikseli. */
    atlasNoktasi(e: PointerEvent, katman: "taban" | "ust" | "oto" = "taban"): { x: number; y: number } | null {
        if (katman === "oto") {
            // OTOMATİK: ışın hem taban hem overlay kutularına çarpıp EN YAKIN
            // yüzeyi seçer. Böylece ceket/şapka üstüne tıklayınca doğrudan
            // overlay bölgesine, çıplak deriye tıklayınca skine boyanır.
            // (Eskiden varsayılan "taban"dı: kullanıcı Overlay'i açsa bile
            // boya alttaki skine gidiyordu.)
            return this.isin(e, [...this.tabanMeshler, ...this.ustMeshler], 64, 64);
        }
        const hedef = katman === "ust" ? this.ustMeshler : this.tabanMeshler;
        return this.isin(e, hedef, 64, 64);
    }

    /** 3D çizim (kozmetik): doğrudan 64×32 atlas pikseli.
     *
     *  Model kutularının UV'si atlasa birebir eşlendiği için ışın sonucu
     *  olduğu gibi kullanılır; ön/arka/yan/üst/alt bütün yüzler boyanabilir. */
    kozmetikNoktasi(e: PointerEvent, tur: "pelerin" | "kanat"): { x: number; y: number } | null {
        if (tur === "pelerin") {
            if (!this.pelerinGrup) return null;
            return this.isin(e, [this.pelerinGrup], KOZ_G, KOZ_Y);
        }
        if (!this.kanatGrup) return null;
        // Kanatlar omuz pivot gruplarının içinde → özyinelemeli ışın gerekir.
        return this.isin(e, [this.kanatGrup], KOZ_G, KOZ_Y);
    }

    /** Işın: tuval koordinatı → dokudaki piksel (gw×gh doku). */
    private isin(e: PointerEvent, nesneler: THREE.Object3D[], gw: number, gh: number): { x: number; y: number } | null {
        const canvas = this.canvas;
        if (!canvas || !this.renderer || nesneler.length === 0) return null;
        const r = canvas.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) return null;
        const ndc = new THREE.Vector2(
            ((e.clientX - r.left) / r.width) * 2 - 1,
            -((e.clientY - r.top) / r.height) * 2 + 1,
        );
        const ray = new THREE.Raycaster();
        ray.setFromCamera(ndc, this.camera);
        const kesisim = ray.intersectObjects(nesneler, true).find((h) => !!h.uv);
        if (!kesisim?.uv) return null;
        const x = Math.min(gw - 1, Math.max(0, Math.floor(kesisim.uv.x * gw)));
        const y = Math.min(gh - 1, Math.max(0, Math.floor((1 - kesisim.uv.y) * gh)));
        return { x, y };
    }

    private modelKur(doku: THREE.Texture | null, slim: boolean): void {
        if (this.kok) {
            // Gerçek ebeveynden çıkar: sahne dışında bir gruba bağlanmış eski model
            // kalırsa karakter iki kez (üst üste) çizilirdi. `parent` kontrolü bunu
            // imkânsız kılar.
            (this.kok.parent ?? this.scene).remove(this.kok);
            this.kok.traverse((o) => {
                const m = o as THREE.Mesh;
                if (m.geometry) m.geometry.dispose();
            });
        }
        // Eski modelle birlikte giden pelerin grubu: dokusu korunur, mesh yeniden kurulur.
        this.pelerinGrup = null;
        this.pelerinSarkac = null;
        this.tabanMeshler = [];
        this.ustMeshler = [];
        this.oyuncuMeshler = [];
        this.kok = new THREE.Group();
        this.kok.position.y = -0.66;
        // Kalça düğümü: parçalar buna göre konumlanır; PAL `body` kemiği bu düğümü
        // döndürür/taşır (mod: body pivotu 0,12,0 — tüm karakter).
        this.kalca = new THREE.Group();
        this.kalca.position.set(0, 12 * KS, 0);
        this.kalca.rotation.order = "ZYX"; // mod: rotateZYX = Rz·Ry·Rx
        this.kok.add(this.kalca);
        this.kemikler = {
            head: new THREE.Group(), body: new THREE.Group(),
            armL: new THREE.Group(), armR: new THREE.Group(),
            legL: new THREE.Group(), legR: new THREE.Group(),
        };
        const [head, body, armL, armR, legL, legR] = [
            this.kemikler.head, this.kemikler.body, this.kemikler.armL,
            this.kemikler.armR, this.kemikler.legL, this.kemikler.legR,
        ];
        for (const g of [head, body, armL, armR, legL, legR]) g.rotation.order = "ZYX";

        const headMesh = kutuYap({ u: 0, v: 0, w: 8, h: 8, d: 8 }, doku);
        headMesh.position.set(0, 4 * KS, 0);
        head.add(headMesh);
        const hat = kutuYap({ u: 32, v: 0, w: 8, h: 8, d: 8 }, doku, true);
        hat.scale.setScalar(1.125);
        hat.position.set(0, 4 * KS, 0);
        head.add(hat);
        this.tabanMeshler.push(headMesh);
        this.ustMeshler.push(hat);
        this.oyuncuMeshler.push(headMesh, hat);

        body.position.set(0, 12 * KS, 0);
        body.userData.pivotPx = [0, 12, 0];
        // Bükülebilir uzuv kurucusu: üst yarı kemiğe, alt yarı eklem grubuna bağlanır.
        // `ortaY` = orijinal kutu merkezinin kemik pivotuna göre yüksekliği.
        // `kaplama` verilirse aynı uzvun ÜST katmanı (ceket/kolluk/pantolon) da
        // kurulur: hafif şişirilmiş, yarı saydam dokulu ikinci kutu. Böylece skin
        // önizlemesi overlay'i gösterir ve 3D çizimde üst katmana boyanabilir.
        const uzuv = (parca: THREE.Group, bolge: Bölge, ortaY: number, x: number, kaplama?: Bölge): THREE.Group => {
            const ust = yarimKutuYap(bolge, false, doku);
            ust.position.set(x, ortaY + (bolge.h / 4) * KS, 0);
            parca.add(ust);
            const eklem = new THREE.Group();
            eklem.position.set(0, ortaY, 0);
            const alt = yarimKutuYap(bolge, true, doku);
            alt.position.set(x, -(bolge.h / 4) * KS, 0);
            eklem.add(alt);
            parca.add(eklem);
            this.tabanMeshler.push(ust, alt);
            this.oyuncuMeshler.push(ust, alt);
            if (kaplama) {
                const sisir = (m: THREE.Mesh): void => {
                    m.scale.set(
                        (kaplama.w + 0.5) / kaplama.w,
                        (kaplama.h + 0.25) / kaplama.h,
                        (kaplama.d + 0.5) / kaplama.d,
                    );
                };
                const ustKaplama = yarimKutuYap(kaplama, false, doku, true);
                ustKaplama.position.set(x, ortaY + (kaplama.h / 4) * KS, 0);
                sisir(ustKaplama);
                parca.add(ustKaplama);
                const altKaplama = yarimKutuYap(kaplama, true, doku, true);
                altKaplama.position.set(x, -(kaplama.h / 4) * KS, 0);
                sisir(altKaplama);
                eklem.add(altKaplama);
                this.ustMeshler.push(ustKaplama, altKaplama);
                this.oyuncuMeshler.push(ustKaplama, altKaplama);
            }
            return eklem;
        };

        // GÖVDE: alt yarı `body` kemiğinde (dünya 12..18), üst yarı da `body` İÇİNDEKİ
        // bel ekleminde (dünya 18..24). Böylece `body` dönüşü (klasik `body`/`torso`
        // kanalı, PAL `torso` kemiği) gövdenin tamamını döndürür — oyun içi modelde
        // gövde tek kutu; iki yarı ayrı dönerse belden yırtılır.
        const bel = new THREE.Group();
        bel.position.set(0, -6 * KS, 0); // body-local → dünya 18 (bel hizası)
        bel.rotation.order = "ZYX";
        const govdeUst = yarimKutuYap({ u: 16, v: 16, w: 8, h: 12, d: 4 }, false, doku);
        govdeUst.position.set(0, 3 * KS, 0);
        bel.add(govdeUst);
        body.add(bel);
        const govdeAlt = yarimKutuYap({ u: 16, v: 16, w: 8, h: 12, d: 4 }, true, doku);
        govdeAlt.position.set(0, -9 * KS, 0);
        body.add(govdeAlt);
        // Ceket (üst katman) — gövdenin yarılarıyla aynı bükülmeyi izler.
        const ceketUst = yarimKutuYap({ u: 16, v: 32, w: 8, h: 12, d: 4 }, false, doku, true);
        ceketUst.position.set(0, 3 * KS, 0);
        ceketUst.scale.set(1.0625, 1.0208, 1.125);
        bel.add(ceketUst);
        const ceketAlt = yarimKutuYap({ u: 16, v: 32, w: 8, h: 12, d: 4 }, true, doku, true);
        ceketAlt.position.set(0, -9 * KS, 0);
        ceketAlt.scale.set(1.0625, 1.0208, 1.125);
        body.add(ceketAlt);
        this.tabanMeshler.push(govdeUst, govdeAlt);
        this.ustMeshler.push(ceketUst, ceketAlt);
        this.oyuncuMeshler.push(govdeUst, govdeAlt, ceketUst, ceketAlt);

        // BEL ÜSTÜ: kafa + kollar. Aynı bel hizasında (dünya 18) durur. PAL gövde
        // bükülmesi (`APPLY_BEND_TO_OTHER_BONES`, ikili emote okunurken otomatik açılır)
        // baş/kolları da taşır; klasik emote'larda gövde dönüşü onları taşımaz
        // (oyun içi modelde ayrı parçalar).
        const belUst = new THREE.Group();
        belUst.position.set(0, 6 * KS, 0); // kalça-local → dünya 18
        belUst.rotation.order = "ZYX";

        const armW = slim ? 3 : 4;
        // klasik kol: kutu merkezi x=±6 (pivot ±5) → local ±1; slim: merkez ±4 → local ±1 (içe gömülü 0.5)
        // pivotPx bel düğümüne göre: kafa 12-6, kol 10-6
        head.position.set(0, 6 * KS, 0);
        head.userData.pivotPx = [0, 6, 0];
        armL.position.set(5 * KS, 4 * KS, 0);
        armL.userData.pivotPx = [5, 4, 0];
        const armLEklem = uzuv(armL, { u: 32, v: 48, w: armW, h: 12, d: 4 }, -4 * KS, KS, { u: 48, v: 48, w: armW, h: 12, d: 4 });
        armR.position.set(-5 * KS, 4 * KS, 0);
        armR.userData.pivotPx = [-5, 4, 0];
        const armREklem = uzuv(armR, { u: 40, v: 16, w: armW, h: 12, d: 4 }, -4 * KS, -KS, { u: 40, v: 32, w: armW, h: 12, d: 4 });

        legL.position.set(1.9 * KS, 0, 0);
        legL.userData.pivotPx = [1.9, 0, 0];
        const legLEklem = uzuv(legL, { u: 16, v: 48, w: 4, h: 12, d: 4 }, -6 * KS, 0, { u: 0, v: 48, w: 4, h: 12, d: 4 });
        legR.position.set(-1.9 * KS, 0, 0);
        legR.userData.pivotPx = [-1.9, 0, 0];
        const legREklem = uzuv(legR, { u: 0, v: 16, w: 4, h: 12, d: 4 }, -6 * KS, 0, { u: 0, v: 32, w: 4, h: 12, d: 4 });

        this.bukulenler = {
            body: bel, belUst, armL: armLEklem, armR: armREklem,
            legL: legLEklem, legR: legREklem,
        };

        belUst.add(head, armL, armR);
        this.kalca.add(body, belUst, legL, legR);
        this.scene.add(this.kok);
        if (!this.oyuncuGorunur) {
            for (const m of this.oyuncuMeshler) m.visible = false;
        } else if (!this.kaplamaGorunur) {
            for (const m of this.ustMeshler) m.visible = false;
        }
        // Izgara açıksa yeni modelin kutularına da ekle (model yeniden kurulur).
        if (this.modelIzgaraAcik) this.modelIzgaralari();
        // Bekleyen pelerini yeni modele bağla (kur()/skin() sonrası).
        if (this._pelerinTuval && this.pelerinDoku) {
            // Editor tuvali: doku hazır, yalnız mesh'i yeni gövdeye as.
            this.pelerinMeshKur();
        } else if (this._bekleyenPelerin) {
            if (this.pelerinDoku) this.pelerinMeshKur();
            else void this.pelerin(this._bekleyenPelerin);
        }
        // Kanatlar da yeni gövdeye taşınır (yoksa eski modelle birlikte giderdi).
        if (this._bekleyenKanat) {
            if (this.kanatDoku) this.kanatMeshKur();
            else this.kanatTuval(this._bekleyenKanat);
        }
    }

    /** Emote listesini bağlar; rastgele çalar hemen başlar.
     *  `hiz`: 0.5 sakin · 1 normal · 1.8 canlı — bekleme sürelerini böler. */
    emoteleriKur(liste: Emote[], hiz = 1): void {
        this.emoteListe = liste;
        this.hiz = hiz > 0 ? hiz : 1;
        this.durum = "idle";
        this.durumBitis = this.zaman + 0.6;
    }

    private baslatDongu(): void {
        const adim = () => {
            // canvas DOM'dan çekildiyse (sayfa değişimi) kendini temizle — sızıntı yok
            if (this.canvas && !this.canvas.isConnected) {
                this.kapati();
                // Yalnızca HÂLÂ bu örnek tekil ise sıfırla; sayfa değişiminde eski
                // bir döngü yeni örneği unutturursa iki renderer aynı tuvale çizer
                // ve karakter üst üste iki kez görünür.
                if (sahneOrnegi === this) sahneOrnegi = null;
                return;
            }
            this.rafId = requestAnimationFrame(adim);
            // ARKA PLANDA: launcher gizli/minimize iken render + animasyonu durdur
            // (GPU/CPU tasarrufu — görünür olunca kaldığı yerden devam eder)
            if (document.hidden) return;
            // KARE BÜTÇESİ (v0.5.5): önizleme 45 FPS'e yeter; pencere odakta
            // değilken (oyun önde) yalnız seyrek kare çizilir → GPU oyuna kalır.
            const simdi = performance.now();
            const aralik = document.hasFocus() ? 1000 / 45 : 1000 / 4;
            if (simdi - this.sonCizimAt < aralik) return;
            this.sonCizimAt = simdi;
            const dt = Math.min(0.05, this.saat.getDelta());
            this.zaman += dt;
            this.adimla(dt);
            this.kameraGuncelle(dt);
            if (this.renderer) this.renderer.render(this.scene, this.camera);
        };
        adim();
    }

    private adimla(dt: number): void {
        if (!this.kemikler) return;
        let hedef: Poz;

        if (this.durum === "idle") {
            hedef = this.idlePozu(this.zaman);
            if (this.emoteListe.length && this.zaman >= this.durumBitis) {
                this.aktif = this.emoteListe[Math.floor(Math.random() * this.emoteListe.length)];
                this.sonOynananAd = this.aktif.adi;
                this.durum = "emote";
                this.tEmote = this.aktif.baslangicTick;
                if (this.aktif.dongu) {
                    // döngülisini 10-16 sn gösterip geç
                    this.durumBitis = this.zaman + 10 + Math.random() * 6;
                }
                hedef = pozAl(this.aktif, this.tEmote);
            }
        } else if (this.durum === "emote" && this.aktif) {
            this.tEmote += dt * 20;
            const son = this.aktif.dongu
                ? this.zaman >= this.durumBitis
                : this.tEmote >= this.aktif.stopTick;
            if (son) {
                this.durum = "soft";
                this.durumBitis = this.zaman + 0.55;
                hedef = SIFIR_POZ;
            } else {
                hedef = pozAl(this.aktif, this.tEmote);
            }
        } else {
            hedef = SIFIR_POZ;
            if (this.zaman >= this.durumBitis) {
                this.durum = "idle";
                this.durumBitis = this.zaman + (0.9 + Math.random() * 1.8) / this.hiz;
            }
        }

        const kar = this.durum === "soft" ? Math.min(1, dt * 7) : 1;
        this.uygula(hedef, kar);
        this.pelerinSalin();
        this.kanatSalin();
    }

    /** Kanat çırpınması: önizlemede hafif, canlı görünsün. */
    private kanatSalin(): void {
        const g = this.kanatGrup;
        if (!g) return;
        const ch = Math.sin(this.zaman * 2.1);
        g.rotation.x = ch * 0.045;
        g.position.y = 6 * KS + ch * 0.3 * KS;
        // Kanatlar hafifçe açılıp kapanır (vanilla elitra "nefes"i).
        // Taban açı vanilla roll'u (±15°); çırpınma onun üstüne eklenir.
        for (const cocuk of g.children) {
            const yon = (cocuk.userData.yon as number) ?? 1;
            cocuk.rotation.z = yon * (KANAT_ROLL + Math.max(0, ch) * 0.035);
        }
    }

    /** Pelerin salınımı: idle'da hafif, emote sırasında geniş. Pozitif açı = gövdeden dışa. */
    private pelerinSalin(): void {
        const s = this.pelerinSarkac;
        if (!s) return;
        const taban = 0.06;
        const guc = this.durum === "emote" ? 0.075 : 0.03;
        const hedef = taban + Math.sin(this.zaman * 1.3) * guc;
        s.rotation.x += (hedef - s.rotation.x) * 0.12;
        s.rotation.z = Math.sin(this.zaman * 0.9) * 0.02;
    }

    private idlePozu(t: number): Poz {
        const s = Math.sin(t * 1.7);
        const s2 = Math.sin(t * 1.13);
        return {
            head: [s2 * 2.4, s * 4.5, s * 1.5],
            body: [s2 * 0.5, 0, 0],
            armL: [s * 3.6, 0, 2.6 + s2 * 1.4],
            armR: [-s * 3.6, 0, -2.6 - s2 * 1.4],
            legL: [-s * 1.2, 0, 0],
            legR: [s * 1.2, 0, 0],
            bend: [0, 0, 0, 0, 0],
            konum: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
            kokDon: [0, 0, 0], kokKonum: [0, 0, 0],
        };
    }

    private uygula(hedef: Poz, kar: number): void {
        const k = this.kemikler;
        if (!k) return;
        const R = THREE.MathUtils.degToRad;
        const em = (g: THREE.Group, a: number[], ki: number) => {
            const tx = R(a[0]);
            const ty = -R(a[1]); // yaw işareti: pozitif = karakterin sağına dönme
            const tz = R(a[2]);
            g.rotation.x += (tx - g.rotation.x) * kar;
            g.rotation.y += (ty - g.rotation.y) * kar;
            g.rotation.z += (tz - g.rotation.z) * kar;
            // pivot deltası (eski format mutlak pivot, PAL delta — poz() delta'ya çevirdi)
            const piv = (g.userData.pivotPx as number[] | undefined) || [0, 0, 0];
            const kn = hedef.konum[ki];
            const hx = (piv[0] + kn[0]) * KS;
            const hy = (piv[1] + kn[1]) * KS;
            const hz = (piv[2] + kn[2]) * KS;
            g.position.x += (hx - g.position.x) * kar;
            g.position.y += (hy - g.position.y) * kar;
            g.position.z += (hz - g.position.z) * kar;
        };
        em(k.head, hedef.head, 0);
        em(k.body, hedef.body, 1);
        em(k.armL, hedef.armL, 2);
        em(k.armR, hedef.armR, 3);
        em(k.legL, hedef.legL, 4);
        em(k.legR, hedef.legR, 5);
        // BÜKÜLME: alt yarı eklemden (dirsek/diz/bel) döner — Emotecraft bend kanalı
        const b = this.bukulenler;
        if (b) {
            const eklem = (g: THREE.Group, derece: number) => {
                const t = R(derece);
                g.rotation.x += (t - g.rotation.x) * kar;
            };
            eklem(b.armL, hedef.bend[0]);
            eklem(b.armR, hedef.bend[1]);
            eklem(b.legL, hedef.bend[2]);
            eklem(b.legR, hedef.bend[3]);
            // gövde üst yarısı her zaman belden bükülür; baş/kollar yalnız PAL
            // `applyBendToOtherBones` açıkken onu izler (klasik emote'larda ayrı kalır)
            eklem(b.body, hedef.bend[4]);
            eklem(b.belUst, hedef.bendTasi === true ? hedef.bend[4] : 0);
        }
        // KÖK: PAL `body` → tüm karakter kalça pivotu (0,12,0) etrafında döner/kayar
        if (this.kalca) {
            const d = hedef.kokDon;
            this.kalca.rotation.x += (R(d[0]) - this.kalca.rotation.x) * kar;
            this.kalca.rotation.y += (-R(d[1]) - this.kalca.rotation.y) * kar;
            this.kalca.rotation.z += (R(d[2]) - this.kalca.rotation.z) * kar;
            const kk = hedef.kokKonum;
            const hx = kk[0] * KS;
            const hy = (12 + kk[1]) * KS;
            const hz = kk[2] * KS;
            this.kalca.position.x += (hx - this.kalca.position.x) * kar;
            this.kalca.position.y += (hy - this.kalca.position.y) * kar;
            this.kalca.position.z += (hz - this.kalca.position.z) * kar;
        }
        if (this.kok) {
            const hedefY = -0.66;
            this.kok.position.y += (hedefY - this.kok.position.y) * kar;
        }
    }

    kapati(): void {
        this.sahneTemizle();
        cancelAnimationFrame(this.rafId);
        this.rafId = 0;
        if (this.boyutla) window.removeEventListener("resize", this.boyutla);
        this.boyutla = null;
        this.yorungeKapat();
        this.pelerinTemizle();
        this.kanatTemizle();
        this._bekleyenPelerin = null;
        this._bekleyenKanat = null;
        this._pelerinTuval = null;
        this.canliDoku?.dispose();
        this.canliDoku = null;
        this.renderer?.dispose();
        this.renderer = null;
        this.kemikler = null;
        this.bukulenler = null;
        this.kok = null;
        this.kalca = null;
        this.aktif = null;
        this.canvas = null;
        this.durum = "idle";
    }
}

// modül tekil örneği — sayfa yenilenirken kapat/aç
export let sahneOrnegi: Sahne | null = null;

export function sahneGetir(): Sahne {
    if (!sahneOrnegi) sahneOrnegi = new Sahne();
    // dev/prova kanca: tarayıcı konsolundan __sahne.skin({url, slim}) denenebilir
    (window as any).__sahne = sahneOrnegi;
    return sahneOrnegi;
}

export function sahneKapat(): void {
    sahneOrnegi?.kapati();
    sahneOrnegi = null;
    (window as any).__sahne = null;
}
