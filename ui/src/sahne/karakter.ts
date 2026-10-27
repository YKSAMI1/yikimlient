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

/** BoxGeometry'nin bir yüzüne paftadan bölge eşler. */
function yuzUV(geo: THREE.BufferGeometry, yuz: number, x1: number, y1: number, x2: number, y2: number, ters = false): void {
    const uv = geo.attributes.uv as THREE.BufferAttribute;
    const i = yuz * 4;
    const ax1 = ters ? x2 : x1;
    const ax2 = ters ? x1 : x2;
    uv.setXY(i + 0, ax1 / 64, 1 - y1 / 64);
    uv.setXY(i + 1, ax2 / 64, 1 - y1 / 64);
    uv.setXY(i + 2, ax1 / 64, 1 - y2 / 64);
    uv.setXY(i + 3, ax2 / 64, 1 - y2 / 64);
}

/** Bölge tablosundan kutu mesh'i kurar (uv: 64x64 pafta formülü). */
function kutuYap(b: Bölge, doku: THREE.Texture | null, saydam = false): THREE.Mesh {
    const geo = new THREE.BoxGeometry(b.w * KS, b.h * KS, b.d * KS);
    const { u, v, w, h, d } = b;
    if (doku) {
        yuzUV(geo, 0, u + d + w, v + d, u + d + w + d, v + d + h);          // px: sağ şerit
        yuzUV(geo, 1, u, v + d, u + d, v + d + h, true);                    // nx: sol şerit (ayna)
        yuzUV(geo, 2, u + d, v, u + d + w, v + d);                          // py: üst
        yuzUV(geo, 3, u + d + w, v, u + d + w + w, v + d);                  // ny: alt
        yuzUV(geo, 4, u + d, v + d, u + d + w, v + d + h);                  // pz: ön
        yuzUV(geo, 5, u + d + w + d, v + d, u + d + w + d + w, v + d + h, true); // nz: arka (ayna)
        doku.magFilter = THREE.NearestFilter;
        doku.minFilter = THREE.NearestFilter;
        doku.colorSpace = THREE.SRGBColorSpace;
    }
    const mat = doku
        ? new THREE.MeshLambertMaterial({ map: doku, transparent: saydam, alphaTest: saydam ? 0.01 : 0 })
        : new THREE.MeshLambertMaterial({ color: 0x5a6672 });
    return new THREE.Mesh(geo, mat);
}

export class Sahne {
    private renderer: THREE.WebGLRenderer | null = null;
    private scene = new THREE.Scene();
    private camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    private kok: THREE.Group | null = null;
    private kemikler: {
        head: THREE.Group; body: THREE.Group; armL: THREE.Group; armR: THREE.Group;
        legL: THREE.Group; legR: THREE.Group;
    } | null = null;
    private saat = new THREE.Clock();
    private rafId = 0;
    private canvas: HTMLCanvasElement | null = null;
    private boyutla: (() => void) | null = null;
    private zaman = 0;
    private durum: "idle" | "emote" | "soft" = "idle";
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

    private _bekleyenSkin: { url: string; slim: boolean } | null = null;

    /** Skin yükler (asset-protocol/file URL); null ise düz manken. */
    async skin(skin: { url: string; slim: boolean } | null): Promise<void> {
        let doku: THREE.Texture | null = null;
        if (skin?.url) {
            try { doku = await new THREE.TextureLoader().loadAsync(skin.url); }
            catch { doku = null; }
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
        this.kemikler = {
            head: new THREE.Group(), body: new THREE.Group(),
            armL: new THREE.Group(), armR: new THREE.Group(),
            legL: new THREE.Group(), legR: new THREE.Group(),
        };
        const [head, body, armL, armR, legL, legR] = [
            this.kemikler.head, this.kemikler.body, this.kemikler.armL,
            this.kemikler.armR, this.kemikler.legL, this.kemikler.legR,
        ];

        head.position.set(0, 24 * KS, 0);
        head.userData.pivotPx = [0, 24, 0];
        const headMesh = kutuYap({ u: 0, v: 0, w: 8, h: 8, d: 8 }, doku);
        headMesh.position.set(0, 4 * KS, 0);
        head.add(headMesh);
        const hat = kutuYap({ u: 32, v: 0, w: 8, h: 8, d: 8 }, doku, true);
        hat.scale.setScalar(1.125);
        hat.position.set(0, 4 * KS, 0);
        head.add(hat);

        body.position.set(0, 24 * KS, 0);
        body.userData.pivotPx = [0, 24, 0];
        const bodyMesh = kutuYap({ u: 16, v: 16, w: 8, h: 12, d: 4 }, doku);
        bodyMesh.position.set(0, -6 * KS, 0);
        body.add(bodyMesh);

        const armW = slim ? 3 : 4;
        // klasik kol: kutu merkezi x=±6 (pivot ±5) → local ±1; slim: merkez ±4 → local ±1 (içe gömülü 0.5)
        armL.position.set(5 * KS, 22 * KS, 0);
        armL.userData.pivotPx = [5, 22, 0];
        const armLMesh = kutuYap({ u: 32, v: 48, w: armW, h: 12, d: 4 }, doku);
        armLMesh.position.set(KS, -6 * KS, 0);
        armL.add(armLMesh);
        armR.position.set(-5 * KS, 22 * KS, 0);
        armR.userData.pivotPx = [-5, 22, 0];
        const armRMesh = kutuYap({ u: 40, v: 16, w: armW, h: 12, d: 4 }, doku);
        armRMesh.position.set(-KS, -6 * KS, 0);
        armR.add(armRMesh);

        legL.position.set(1.9 * KS, 12 * KS, 0);
        legL.userData.pivotPx = [1.9, 12, 0];
        const legLMesh = kutuYap({ u: 16, v: 48, w: 4, h: 12, d: 4 }, doku);
        legLMesh.position.set(0, -6 * KS, 0);
        legL.add(legLMesh);
        legR.position.set(-1.9 * KS, 12 * KS, 0);
        legR.userData.pivotPx = [-1.9, 12, 0];
        const legRMesh = kutuYap({ u: 0, v: 16, w: 4, h: 12, d: 4 }, doku);
        legRMesh.position.set(0, -6 * KS, 0);
        legR.add(legRMesh);

        this.kok.add(head, body, armL, armR, legL, legR);
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
            const dt = Math.min(0.05, this.saat.getDelta());
            this.zaman += dt;
            this.adimla(dt);
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
            bend: [0, 0, 0, 0],
            konum: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        };
    }

    private uygula(hedef: Poz, kar: number): void {
        const k = this.kemikler;
        if (!k) return;
        const R = THREE.MathUtils.degToRad;
        const em = (g: THREE.Group, a: number[], bendX: number, ki: number) => {
            const tx = R(a[0] + bendX);
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
            g.position.x += (hx - g.position.x) * kar;
            g.position.y += (hy - g.position.y) * kar;
            if (kn[2]) g.position.z += (piv[2] * KS + kn[2] * KS - g.position.z) * kar;
        };
        em(k.head, hedef.head, 0, 0);
        em(k.body, hedef.body, 0, 1);
        em(k.armL, hedef.armL, hedef.bend[0], 2);
        em(k.armR, hedef.armR, hedef.bend[1], 3);
        em(k.legL, hedef.legL, hedef.bend[2], 4);
        em(k.legR, hedef.legR, hedef.bend[3], 5);
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
        this.renderer?.dispose();
        this.renderer = null;
        this.kemikler = null;
        this.kok = null;
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
