// guvenlik.ts: "tıkla kopyala" düğmesini kodu kopyalayacak şekilde ekle.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(kok, "ui/src/guvenlik.ts");
let t = fs.readFileSync(p, "utf8");

// 1) Şablona Kopyala düğmesi ekle
const eski = `          <button class="btn primary sm" id="gv-kod-al">Kod al</button>
          <button class="btn ghost sm" id="gv-kontrol">Kontrol et</button>`;
const yeni = `          <button class="btn primary sm" id="gv-kod-al">Kod al</button>
          <button class="btn ghost sm" id="gv-kopyala" hidden title="Kodu kopyala">Kopyala</button>
          <button class="btn ghost sm" id="gv-kontrol">Kontrol et</button>`;
if (!t.includes(eski)) {
  console.log("1) şablon bulunamadı (veya zaten ekli)");
} else {
  t = t.replace(eski, yeni);
  console.log("1) Kopyala düğmesi şablona eklendi");
}

// 2) Kopyala tıklamasını bağla + Kopyala'nı göster/gizle
const kodAlEski = `    try {
      const v = (await invoke("cmd_guvenlik_baglama_kod")) as { kod?: string; kalan_sn?: number };
      if (kodEl()) kodEl()!.textContent = v.kod || "?";
      if (altEl()) altEl()!.textContent = \`Discord'da bota yaz: /bagla \${v.kod || ""} · \${Math.ceil((v.kalan_sn || 600) / 60)} dk\`;`;
const kodAlYeni = `    try {
      const v = (await invoke("cmd_guvenlik_baglama_kod")) as { kod?: string; kalan_sn?: number };
      if (kodEl()) kodEl()!.textContent = v.kod || "?";
      if (altEl()) altEl()!.textContent = \`Discord'da bota yaz: /bagla \${v.kod || ""} · \${Math.ceil((v.kalan_sn || 600) / 60)} dk\`;
      const kopyala = host.querySelector<HTMLButtonElement>("#gv-kopyala");
      if (kopyala) {
        kopyala.hidden = !v.kod;
        kopyala.onclick = async () => {
          const kod = v.kod || "";
          if (!kod) return;
          try {
            await navigator.clipboard.writeText(kod);
            const eskiYazi = kopyala.textContent;
            kopyala.textContent = "Kopyalandı ✓";
            setTimeout(() => { kopyala.textContent = eskiYazi; }, 1600);
          } catch {
            // pano kapalıysa elle seçebilsin diye kodu seçili göster
            const secim = window.getSelection();
            const aralik = document.createRange();
            aralik.selectNodeContents(host.querySelector("#gv-kod")!);
            secim?.removeAllRanges();
            secim?.addRange(aralik);
            toast("Pano kapalı — kodu elle seçip kopyala", "err");
          }
        };
      }`;
if (!t.includes(kodAlEski)) {
  console.log("2) kod-al yolu bulunamadı");
} else {
  t = t.replace(kodAlEski, kodAlYeni);
  console.log("2) Kopyala tıklaması bağlandı");
}

fs.writeFileSync(p, t, "utf8");
console.log("kaydedildi");
