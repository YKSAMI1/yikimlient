// YIKIM SAHNE - EMOTE PARÇALAMA (Emotecraft/PAL format uyumlu)
//
// Emotecraft .json emote'larını launcher karakter vitrininde oynatır.
// Desteklenen formatlar:
//   1. Eski format: {name, author, description, emote:{isLoop,beginTick,
//      endTick,stopTick,returnTick,degrees,moves:[{tick,easing,turn?,head/body/
//      torso/leftArm/rightArm/leftLeg/rightLeg:{pitch,yaw,roll,bend,x,y,z}}]}}
//   2. PAL/geckolib biçemi: {format_version, animations:{ad:{bones:{body:
//      {rotation/position: {vector:[..]} | [{time,vector:[..]}...]}}}}}
// MoLang ifadeleri (sayı yerine metin) ileri sürüm işi: 0 alınır, ihmal edilir.

export interface Kf { t: number; v: number; easing: string; }

export interface Kanal {
    pitch?: Kf[];
    yaw?: Kf[];
    roll?: Kf[];
    bend?: Kf[];
    x?: Kf[];
    y?: Kf[];
    z?: Kf[];
    turn?: Kf[];
}

export interface Emote {
    adi: string;
    yazar: string;
    aciklama: string;
    baslangicTick: number;
    bitisTick: number;
    stopTick: number;
    donusTick: number;
    dongu: boolean;
    kemikler: Map<string, Kanal>;
    /** true: x/y/z kanalı pivottan delta (PAL/geckolib); false/oidsız: mutlak pivot px (eski) */
    palDelta?: boolean;
    /**
     * true: değerler PAL ANİMASYON uzayında (biner .emotecraft çözümü):
     * konumlar pivot deltası (px, +y yukarı), `body` kemiği tüm karakteri taşır.
     * false/oidsız: eski Emotecraft JSON'u (mutlak px, body = gövde kutusu).
     */
    palUzay?: boolean;
    /** isLoop true ise döngünün başladığı tick (Emotecraft returnToTickLoop) */
    loopBas?: number;
}

const KEMIKLER = ["head", "body", "torso", "leftArm", "rightArm", "leftLeg", "rightLeg"];
const KANALLAR = ["pitch", "yaw", "roll", "bend", "x", "y", "z"] as const;

function say(v: unknown): number | null {
    return typeof v === "number" && Number.isFinite(v) ? v : null;
}

/** name alanı bazen {"translate": "..."} objesi gelir — düz metne çevir. */
function isim(v: unknown): string {
    if (typeof v === "string") return v.trim();
    if (v && typeof v === "object") {
        const t = (v as Record<string, unknown>).translate;
        if (typeof t === "string") return t.trim();
    }
    return "";
}

function BosEmote(adi: string): Emote {
    return {
        adi, yazar: "", aciklama: "",
        baslangicTick: 0, bitisTick: 60, stopTick: 61, donusTick: 60, dongu: false,
        kemikler: new Map(),
    };
}

/** Eski Emotecraft formatını parçalar. */
function eskiFormat(js: any): Emote {
    const e = js.emote || {};
    const donusTick = Number(e.returnTick) > 0 ? Number(e.returnTick) : 60;
    const bitis = Number(e.endTick) > 0 ? Number(e.endTick) : donusTick;
    const emote: Emote = {
        adi: isim(js.name) || "İsimsiz",
        yazar: String(js.author || ""),
        aciklama: String(js.description || ""),
        baslangicTick: Number(e.beginTick) > 0 ? Number(e.beginTick) : 0,
        bitisTick: bitis,
        stopTick: Number(e.stopTick) > 0 ? Number(e.stopTick) : bitis,
        donusTick,
        dongu: e.isLoop === true || e.isLoop === "true",
        kemikler: new Map(),
    };
    if (e.palUzay === true) emote.palUzay = true;
    // Emotecraft "returnToTickLoop": bitişte endTick'ten loopBas'a sarar
    const lb = say(e.loopBas);
    if (lb !== null && lb >= 0) emote.loopBas = lb;
    const moves: any[] = Array.isArray(e.moves) ? e.moves : [];
    let turnToplam: Record<string, number> = {};
    for (const m of moves) {
        if (typeof m?.tick !== "number") continue;
        const t = m.tick;
        for (const k of KEMIKLER) {
            const ham = m[k];
            if (!ham || typeof ham !== "object") continue;
            let kanal = emote.kemikler.get(k);
            if (!kanal) { kanal = {}; emote.kemikler.set(k, kanal); }
            for (const cn of KANALLAR) {
                const v = say(ham[cn]);
                if (v !== null) {
                    if (!kanal[cn]) kanal[cn] = [];
                    kanal[cn]!.push({ t, v, easing: String(m.easing || "LINEAR").toUpperCase() });
                }
            }
            // tam tur: yaw üstüne kümülatif 360'lık ek
            const turn = say(ham.turn);
            if (turn !== null && turn !== 0) {
                turnToplam[k] = (turnToplam[k] || 0) + turn * 360;
                if (!kanal.turn) kanal.turn = [];
                kanal.turn.push({ t, v: turnToplam[k], easing: "LINEAR" });
            }
        }
    }
    return emote;
}

/** PAL/geckolib biçemini parçalar (baz: x=pitch, y=yaw, z=roll; derece). */
function palFormat(js: any): Emote {
    const anims = js.animations || {};
    const ilk = Object.values(anims)[0] as any;
    if (!ilk || typeof ilk !== "object") throw new Error("PAL animasyonu boş");
    const uzunluk = Number(ilk.animation_length) > 0 ? Number(ilk.animation_length) * 20 : 60;
    const emote: Emote = {
        adi: isim(ilk.player_animation_library?.name ?? js.name) || "İsimsiz",
        yazar: String(ilk.player_animation_library?.author || js.author || ""),
        aciklama: String(ilk.player_animation_library?.description || js.description || ""),
        baslangicTick: 0,
        bitisTick: uzunluk,
        stopTick: uzunluk,
        donusTick: uzunluk,
        dongu: true,
        kemikler: new Map(),
        palDelta: true,
    };
    const bones = ilk.bones || {};
    for (const k of Object.keys(bones)) {
        const b = bones[k];
        if (!b || typeof b !== "object") continue;
        const kanal: Kanal = {};
        // tek ekseni örnekle: zamana göre {time, vector:[x,y,z]} anahtar kareleri
        const okun = (veri: any, baz: 0 | 1 | 2, hedef: keyof Kanal) => {
            if (!veri) return;
            const kfs: Kf[] = [];
            const ekle = (t: number, v: unknown) => {
                const n = say(v);
                if (n !== null) kfs.push({ t, v: n, easing: "LINEAR" });
            };
            if (Array.isArray(veri)) {
                for (const g of veri) {
                    const t = typeof g?.time === "number" ? g.time * 20 : 0;
                    ekle(t, Array.isArray(g?.vector) ? g.vector[baz] : undefined);
                }
            } else if (Array.isArray(veri.vector)) {
                ekle(0, veri.vector[baz]);
            } else if (typeof veri === "number") {
                ekle(0, veri);
            }
            if (kfs.length) kanal[hedef] = kfs;
        };
        okun(b.rotation, 0, "pitch");
        okun(b.rotation, 1, "yaw");
        okun(b.rotation, 2, "roll");
        // pozisyon Blockbench pikselinde: /16 katsayısı oynatıcıda KS ile uygulanır
        okun(b.position, 0, "x");
        okun(b.position, 1, "y");
        okun(b.position, 2, "z");
        if (Object.keys(kanal).length) emote.kemikler.set(k, kanal);
    }
    return emote;
}

/** İki biçemi de dener; hiçbiri değilse fırlatır. */
export function emoteParca(icerik: string): Emote {
    const js = JSON.parse(icerik);
    if (js?.emote && typeof js.emote === "object") return eskiFormat(js);
    if (js?.animations) return palFormat(js);
    throw new Error("bilinmeyen emote formatı");
}

// ---------------------------------------------------------------------------
// zaman örnekleme
// ---------------------------------------------------------------------------

function easingFn(ad: string): (x: number) => number {
    switch (ad) {
        case "EASEINSINE": case "INSINE": case "EASEIN": return (x) => 1 - Math.cos((x * Math.PI) / 2);
        case "EASEOUTSINE": case "OUTSINE": return (x) => Math.sin((x * Math.PI) / 2);
        case "EASEINOUTSINE": case "INOUTSINE": case "SINE": return (x) => -(Math.cos(Math.PI * x) - 1) / 2;
        case "EASEINOUTQUAD": case "INOUTQUAD": return (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
        case "EASEINOUTCUBIC": return (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
        case "STEP": return (x) => (x >= 1 ? 1 : 0);
        default: return (x) => x;
    }
}

/** Tek kanalı tick T anında örnekler. */
function orneklem(kf: Kf[] | undefined, t: number): number | null {
    if (!kf || !kf.length) return null;
    if (kf.length === 1) return kf[0].v;
    let i = 0;
    while (i < kf.length && kf[i].t <= t) i++;
    if (i <= 0) return kf[0].v;
    if (i >= kf.length) return kf[kf.length - 1].v;
    const a = kf[i - 1];
    const b = kf[i];
    const span = b.t - a.t;
    const x = span <= 0 ? 1 : (t - a.t) / span;
    return a.v + (b.v - a.v) * easingFn(b.easing)(x);
}

export interface Poz {
    head: number[]; body: number[]; armL: number[]; armR: number[]; legL: number[]; legR: number[];
    /** dirsek/diz/bel bükülmesi (derece): [armL, armR, legL, legR, gövde] */
    bend: number[];
    /** kemiğin pivotundan delta px: [head, body, armL, armR, legL, legR] [x,y,z] */
    konum: number[][];
    /** PAL: tüm karakteri taşıyan kalça (kök) dönüşü [pitch, yaw, roll] (launcher işaretli) */
    kokDon: number[];
    /** PAL: kalça pivotundan kök kayması px (launcher: +x sağ, +y yukarı, +z öne) */
    kokKonum: number[];
}

function bosKonumlar(): number[][] {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
}

export const SIFIR_POZ: Poz = {
    head: [0, 0, 0], body: [0, 0, 0], armL: [0, 0, 0], armR: [0, 0, 0], legL: [0, 0, 0], legR: [0, 0, 0],
    bend: [0, 0, 0, 0, 0], konum: bosKonumlar(),
    kokDon: [0, 0, 0], kokKonum: [0, 0, 0],
};

const KEMIK_HEDEF: Record<string, number> = { head: 0, body: 1, torso: 1, leftArm: 2, rightArm: 3, leftLeg: 4, rightLeg: 5 };
const KONUM_INDEKS: Record<string, number> = KEMIK_HEDEF;
const BEND_INDEKS: Record<string, number> = { leftArm: 0, rightArm: 1, leftLeg: 2, rightLeg: 3, torso: 4, body: 4 };

/** Emote'un tick T anındaki pozu. */
export function poz(emote: Emote, tHam: number): Poz {
    let donus = tHam;
    if (emote.dongu && emote.loopBas !== undefined && emote.bitisTick > emote.loopBas) {
        // returnToTickLoop: 0..endTick bir kez oynar, sonra loopBas..endTick döner
        if (tHam > emote.bitisTick) {
            const periyot = emote.bitisTick - emote.loopBas;
            donus = emote.loopBas + ((tHam - emote.loopBas) % periyot);
        }
    } else if (emote.dongu && emote.donusTick > 0) {
        donus = ((tHam - emote.baslangicTick) % emote.donusTick) + emote.baslangicTick;
    }
    const t = Math.max(donus, emote.baslangicTick);
    const pal = emote.palUzay === true;
    const p: Poz = {
        head: [0,0,0], body: [0,0,0], armL: [0,0,0], armR: [0,0,0], legL: [0,0,0], legR: [0,0,0],
        bend: [0,0,0,0,0],
        konum: bosKonumlar(),
        kokDon: [0,0,0], kokKonum: [0,0,0],
    };
    const ADLAR = ["head", "body", "armL", "armR", "legL", "legR"];
    const bos = () => [undefined, undefined, undefined] as (number | undefined)[];
    const konumHam: (number | undefined)[][] = Array.from({ length: 6 }, bos);
    const kokHam = bos();
    const yazEksen = (hedef: (number | undefined)[], cn: string, v: number) => {
        hedef[cn === "x" ? 0 : cn === "y" ? 1 : 2] = v;
    };
    for (const [ad, kanal] of emote.kemikler) {
        // PAL Animasyon uzayında `body` gövde kutusu DEĞİL, tüm karakterin köküdür
        // (mod: LivingEntityRendererMixin → poseStack translate/rotate). Pivotu kalçadır.
        if (pal && ad === "body") {
            for (const cn of KANALLAR) {
                const v = orneklem(kanal[cn], t);
                if (v === null) continue;
                if (cn === "pitch") p.kokDon[0] = v;
                else if (cn === "yaw") p.kokDon[1] = v;
                // launcher dönüşü: (pitch, -yaw, -roll); uygula() roll'u ters çevirmez
                else if (cn === "roll") p.kokDon[2] = -v;
                else if (cn === "bend") p.bend[4] = v; // gövde beli
                else if (cn === "x" || cn === "y" || cn === "z") yazEksen(kokHam, cn, v);
            }
            continue;
        }
        const dizi = KEMIK_HEDEF[ad];
        const hedef = dizi !== undefined ? ((p as any)[ADLAR[dizi]] as number[]) : null;
        for (const cn of KANALLAR) {
            const v = orneklem(kanal[cn], t);
            if (v === null) continue;
            if (hedef) {
                if (cn === "pitch") hedef[0] = v;
                else if (cn === "yaw") hedef[1] = v;
                else if (cn === "roll") hedef[2] = pal ? -v : v;
                else if (cn === "x" || cn === "y" || cn === "z") {
                    // kemiğin kendi pivot konumu (eski: mutlak px; PAL: delta px)
                    const ki = KONUM_INDEKS[ad];
                    if (ki !== undefined) yazEksen(konumHam[ki], cn, v);
                }
            }
            if (cn === "bend") {
                const idx = BEND_INDEKS[ad];
                if (idx !== undefined) p.bend[idx] += v;
            }
        }
    }
    // Kemiklerin model uzayındaki (ayak=0, +y yukarı) dinlenme pivotları
    const PIVOT: number[][] = [
        [0, 24, 0], [0, 24, 0], [5, 22, 0], [-5, 22, 0], [1.9, 12, 0], [-1.9, 12, 0],
    ];
    if (pal) {
        // PAL konum kanalları da MUTLAK pivot konumudur ama kalça merkezlidir
        // (kalça y=24 → model uzayında 0). Örn. bacak y≈-12, kol y≈-2, kafa 0.
        // Launcher'ın beklediği değer kendi pivotundan DELTA olduğu için çevir.
        for (let i = 0; i < 6; i++) {
            const h = konumHam[i];
            const yaz = p.konum[i];
            yaz[0] = h[0] === undefined ? 0 : h[0] - PIVOT[i][0];
            yaz[1] = h[1] === undefined ? 0 : h[1] + 24 - PIVOT[i][1];
            // PAL +z arkaya gider; launcher'da +z öne
            yaz[2] = h[2] === undefined ? 0 : -(h[2] - PIVOT[i][2]);
        }
        p.kokKonum = [kokHam[0] ?? 0, kokHam[1] ?? 0, -(kokHam[2] ?? 0)];
        return p;
    }
    // Eski format: x/y/z = kemiğin EBEVEYNİNE GÖRE mutlak konumu (palm: head y=-0.0 gövde çocuğu;
    // waving: bacak y=12 köke bağlı gibi).
    // Dünya koordinatına çevir → açısal pivotumuzdan delta çıkar.
    // ebeveyn düzeltmesi: [head, body, armL, armR, legL, legR] — head/kollar gövdenin çocuğu (y'e +24)
    const GOVDE_COCUK = [1, 0, 1, 1, 0, 0];
    for (let i = 0; i < 6; i++) {
        const ham = konumHam[i];
        const yaz = p.konum[i];
        for (let a = 0; a < 3; a++) {
            if (ham[a] === undefined) { yaz[a] = 0; continue; }
            let dunya = ham[a] as number;
            if (a === 1 && GOVDE_COCUK[i]) dunya += 24;
            yaz[a] = dunya - PIVOT[i][a];
        }
    }
    return p;
}
