// SAHNE PROVASI — launcher'a bağımlı olmayan motor test sayfası.
// dev: npm run dev → http://localhost:1420/prova.html
// Blockbench'te yeni emote yaparken burada hızlı doğrula. Build'e ALINMAZ
// (vite rollupOptions.input listesinde değil; üretim paketine girmez).

import { sahneGetir } from "./sahne/karakter";
import { emoteParca, Emote } from "./sahne/emote";
import ornekWaving from "./orn/emote/waving.json";
import ornekPalm from "./orn/emote/palm.json";

const ORNEKLER: Record<string, string> = {
    "waving.json (örnek)": JSON.stringify(ornekWaving),
    "palm.json (örnek)": JSON.stringify(ornekPalm),
};
const ORNEK_SIRALAMA = ["waving.json (örnek)", "palm.json (örnek)"];

const canvas = document.querySelector("#sahne") as HTMLCanvasElement;
const durum = document.querySelector("#durum") as HTMLElement;
const liste = document.querySelector("#liste") as HTMLElement;
const skinUrl = document.querySelector("#skin-url") as HTMLInputElement;
const emoteUrl = document.querySelector("#emote-url") as HTMLInputElement;
const slimBtn = document.querySelector("#slim-toggle") as HTMLButtonElement;
const rasBtn = document.querySelector("#rastgele-toggle") as HTMLButtonElement;

const sah = sahneGetir();

let slim = false;
let rastgele = true;
const emoteler: { adi: string; emote: Emote }[] = [];

(function baslat(): void {
    sah.kur(canvas);
    void skinYukle();
    // gömülü örnekle hemen prova başlat + PAL/geckolib ve eski format kontrolü
    for (const ad of ORNEK_SIRALAMA) parcaVeEkle(ad, ORNEKLER[ad]);
})();

function yaz(s: string): void {
    durum.textContent = s;
}

async function skinYukle(): Promise<void> {
    try {
        await sah.skin({ url: skinUrl.value.trim(), slim });
        yaz(`skin yüklendi (${slim ? "slim" : "klasik"})`);
    } catch (h) {
        yaz(`skin hatası: ${h}`);
    }
}

async function emoteGetir(): Promise<void> {
    try {
        const r = await fetch(emoteUrl.value.trim());
        const icerik = await r.text();
        parcaVeEkle(emoteUrl.value.split("/").pop() || "emote", icerik);
    } catch (h) {
        yaz(`emote hatası: ${h}`);
    }
}

function parcaVeEkle(adi: string, icerik: string): void {
    try {
        const emote = emoteParca(icerik);
        emoteler.push({ adi: emote.adi || adi, emote });
        updateEmoteler();
        oyna(emoteler.length - 1);
        yaz(`parçalandı: ${emote.adi} — kemikler: ${Array.from(emote.kemikler.keys()).join(", ")} | stop ${emote.stopTick} tick | ${emote.dongu ? "döngü" : "tek"} ${emote.bitisTick} tick`);
    } catch (h) {
        yaz(`emote hatası: ${h}`);
    }
}

function oyna(i: number): void {
    const kayit = emoteler[i];
    if (!kayit?.emote) return;
    sah.emoteleriKur([kayit.emote]);
}

function updateEmoteler(): void {
    liste.innerHTML = "";
    if (!emoteler.length) {
        liste.innerHTML = `<div class="durum">Emote yok — URL'den getir ya da sürükle.</div>`;
        return;
    }
    emoteler.forEach((k, i) => {
        const d = document.createElement("div");
        d.className = "satir";
        d.textContent = `${k.adi} (${Array.from(k.emote.kemikler.keys()).length} kemik)`;
        d.onclick = () => oyna(i);
        liste.appendChild(d);
    });
}

document.querySelector("#skin-yukle")?.addEventListener("click", () => void skinYukle());
slimBtn.addEventListener("click", () => {
    slim = !slim;
    slimBtn.textContent = `Slim: ${slim ? "evet" : "hayır"}`;
    void skinYukle();
});
document.querySelector("#emote-yukle")?.addEventListener("click", () => void emoteGetir());
rasBtn.addEventListener("click", () => {
    rastgele = !rastgele;
    rasBtn.textContent = `Rastgele: ${rastgele ? "açık" : "kapalı"}`;
    sah.emoteleriKur(rastgele ? emoteler.map((k) => k.emote) : []);
});
document.querySelector("#idle")?.addEventListener("click", () => sah.emoteleriKur([]));

// sürükle-tıkla
const drop = document.querySelector("#drop") as HTMLElement;
const file = document.querySelector("#file") as HTMLInputElement;
function dosyaIsle(f: File, icerik: string): void {
    parcaVeEkle(f.name, icerik);
}
drop.onclick = () => file.click();
drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("surunuyor"); };
drop.ondragleave = () => drop.classList.remove("surunuyor");
drop.ondrop = async (e) => {
    e.preventDefault();
    drop.classList.remove("surunuyor");
    await dosyalar(Array.from(e.dataTransfer?.files || []));
};
file.onchange = async () => {
    await dosyalar(file.files ? Array.from(file.files) : []);
    file.value = "";
};

async function dosyalar(sekme: File[]): Promise<void> {
    for (const f of sekme) {
        try {
            dosyaIsle(f, await f.text());
        } catch (h) {
            yaz(`${f.name}: ${h}`);
        }
    }
}
