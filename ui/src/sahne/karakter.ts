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
        body: THREE.Group; armL: THREE.Group; armR: THREE.Group;
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
    private kameraY = 0.34;
    private surukleX: number | null = null;
    private isaretciBas: ((e: PointerEvent) => void) | null = null;
    private isaretciTasi: ((e: PointerEvent) => void) | null = null;
    private isaretciBirak: ((e: PointerEvent) => void) | null = null;
    private durum: "idle" | "emote" | "soft" = "idle";
    /** vitrin kartında göstermek için son oynanan emote adı */
    public sonOynananAd = "";
    private durumBitis = 0;
    private emoteListe: Emote[] = [];
    private aktif: Emote | null = null;
    private tEmote = 0;

    /** Sahneyi başlatır; yeniden çağrılırsa öncekini temizler. */
    kur(canvas: HTMLCanvasElement): void {
        if (this.renderer) this.kapati();
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
            if (e.pointerType === "mouse" && e.button !== 0) return;
            this.surukleX = e.clientX;
            canvas.style.cursor = "grabbing";
            try { canvas.setPointerCapture(e.pointerId); } catch { /* pencere kapanmış olabilir */ }
        };
        this.isaretciTasi = (e: PointerEvent) => {
            if (this.surukleX === null) return;
            const dx = e.clientX - this.surukleX;
            this.surukleX = e.clientX;
            // sağa sürükle → karakter sağa döner (kamera sola kayar)
            this.kameraAciHedef -= dx * 0.008;
        };
        this.isaretciBirak = (e: PointerEvent) => {
            if (this.surukleX === null) return;
            this.surukleX = null;
            canvas.style.cursor = "grab";
            try { canvas.releasePointerCapture(e.pointerId); } catch { /* zaten bırakılmış */ }
        };
        canvas.addEventListener("pointerdown", this.isaretciBas);
        canvas.addEventListener("pointermove", this.isaretciTasi);
        canvas.addEventListener("pointerup", this.isaretciBirak);
        canvas.addEventListener("pointercancel", this.isaretciBirak);
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
    }

    /** Yörünge açısını yumuşatıp kamerayı yerleştirir. */
    private kameraGuncelle(dt: number): void {
        const f = Math.min(1, dt * 14);
        this.kameraAci += (this.kameraAciHedef - this.kameraAci) * f;
        const r = this.kameraYariCap;
        this.camera.position.set(Math.sin(this.kameraAci) * r, this.kameraY, Math.cos(this.kameraAci) * r);
        this.camera.lookAt(0, 0.02, 0);
    }

    private _bekleyenSkin: { url: string; slim: boolean } | null = null;

    /** Skin yükler (asset-protocol/file URL); null ise düz manken. */
    async skin(skin: { url: string; slim: boolean } | null): Promise<void> {
        let doku: THREE.Texture | null = null;
        if (skin?.url) {
            try {
                const resim = await new THREE.ImageLoader().loadAsync(skin.url);
                // eski 64x32 paftalar: UV eşlemi 64 yüksekliğine göre → 64x64 tuvale genişlet
                if (resim.height === 32) {
                    const tuval = document.createElement("canvas");
                    tuval.width = 64;
                    tuval.height = 64;
                    const ctx = tuval.getContext("2d");
                    if (ctx) {
                        ctx.imageSmoothingEnabled = false;
                        ctx.drawImage(resim, 0, 0);
                        doku = new THREE.Texture(tuval);
                    }
                }
                if (!doku) doku = new THREE.Texture(resim);
                doku.needsUpdate = true;
            } catch { doku = null; }
        }
        this._bekleyenSkin = skin; // edge: kur() çağrısından önce geldiyse kur After re-apply
        this.modelKur(doku, skin?.slim || false);
    }

    private modelKur(doku: THREE.Texture | null, slim: boolean): void {
        if (this.kok) {
            this.scene.remove(this.kok);
            this.kok.traverse((o) => {
                const m = o as THREE.Mesh;
                if (m.geometry) m.geometry.dispose();
            });
        }
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

        body.position.set(0, 12 * KS, 0);
        body.userData.pivotPx = [0, 12, 0];
        // Bükülebilir uzuv kurucusu: üst yarı kemiğe, alt yarı eklem grubuna bağlanır.
        // `ortaY` = orijinal kutu merkezinin kemik pivotuna göre yüksekliği.
        const uzuv = (parca: THREE.Group, bolge: Bölge, ortaY: number, x: number): THREE.Group => {
            const ust = yarimKutuYap(bolge, false, doku);
            ust.position.set(x, ortaY + (bolge.h / 4) * KS, 0);
            parca.add(ust);
            const eklem = new THREE.Group();
            eklem.position.set(0, ortaY, 0);
            const alt = yarimKutuYap(bolge, true, doku);
            alt.position.set(x, -(bolge.h / 4) * KS, 0);
            eklem.add(alt);
            parca.add(eklem);
            return eklem;
        };

        // BEL (torso bend): PAL gövde bükülmesini `APPLY_BEND_TO_OTHER_BONES` ile
        // baş/kollara da uygular (ikili emote okunurken bu bayrak kendiliğinden açılır).
        // Bu yüzden gövdenin ÜST yarısı + kafa + kollar bel düğümünde toplanır; bacaklar
        // ve gövdenin alt yarısı kalçada kalır. Bel dünyada y=18 (gövde kutusu 12..24).
        const bel = new THREE.Group();
        bel.position.set(0, 6 * KS, 0);
        bel.rotation.order = "ZYX";
        const govdeUst = yarimKutuYap({ u: 16, v: 16, w: 8, h: 12, d: 4 }, false, doku);
        govdeUst.position.set(0, 3 * KS, 0);
        bel.add(govdeUst);
        const govdeAlt = yarimKutuYap({ u: 16, v: 16, w: 8, h: 12, d: 4 }, true, doku);
        govdeAlt.position.set(0, -9 * KS, 0);
        body.add(govdeAlt);

        const armW = slim ? 3 : 4;
        // klasik kol: kutu merkezi x=±6 (pivot ±5) → local ±1; slim: merkez ±4 → local ±1 (içe gömülü 0.5)
        // pivotPx artık BEL'e göre: kafa 12-6, kol 10-6
        head.position.set(0, 6 * KS, 0);
        head.userData.pivotPx = [0, 6, 0];
        armL.position.set(5 * KS, 4 * KS, 0);
        armL.userData.pivotPx = [5, 4, 0];
        const armLEklem = uzuv(armL, { u: 32, v: 48, w: armW, h: 12, d: 4 }, -4 * KS, KS);
        armR.position.set(-5 * KS, 4 * KS, 0);
        armR.userData.pivotPx = [-5, 4, 0];
        const armREklem = uzuv(armR, { u: 40, v: 16, w: armW, h: 12, d: 4 }, -4 * KS, -KS);

        legL.position.set(1.9 * KS, 0, 0);
        legL.userData.pivotPx = [1.9, 0, 0];
        const legLEklem = uzuv(legL, { u: 16, v: 48, w: 4, h: 12, d: 4 }, -6 * KS, 0);
        legR.position.set(-1.9 * KS, 0, 0);
        legR.userData.pivotPx = [-1.9, 0, 0];
        const legREklem = uzuv(legR, { u: 0, v: 16, w: 4, h: 12, d: 4 }, -6 * KS, 0);

        this.bukulenler = {
            body: bel, armL: armLEklem, armR: armREklem,
            legL: legLEklem, legR: legREklem,
        };

        bel.add(head, armL, armR);
        this.kalca.add(body, bel, legL, legR);
        this.scene.add(this.kok);
    }

    /** Emote listesini bağlar; rastgele çalar hemen başlar. */
    emoteleriKur(liste: Emote[]): void {
        this.emoteListe = liste;
        this.durum = "idle";
        this.durumBitis = this.zaman + 0.6;
    }

    private baslatDongu(): void {
        const adim = () => {
            // canvas DOM'dan çekildiyse (sayfa değişimi) kendini temizle — sızıntı yok
            if (this.canvas && !this.canvas.isConnected) {
                this.kapati();
                sahneOrnegi = null;
                return;
            }
            this.rafId = requestAnimationFrame(adim);
            // ARKA PLANDA: launcher gizli/minimize iken render + animasyonu durdur
            // (GPU/CPU tasarrufu — görünür olunca kaldığı yerden devam eder)
            if (document.hidden) return;
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
                this.durumBitis = this.zaman + 0.9 + Math.random() * 1.8;
            }
        }

        const kar = this.durum === "soft" ? Math.min(1, dt * 7) : 1;
        this.uygula(hedef, kar);
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
            eklem(b.body, hedef.bend[4]);
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
        cancelAnimationFrame(this.rafId);
        this.rafId = 0;
        if (this.boyutla) window.removeEventListener("resize", this.boyutla);
        this.boyutla = null;
        this.yorungeKapat();
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
