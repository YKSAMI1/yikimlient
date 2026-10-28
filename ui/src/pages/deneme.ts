// EMOTE DENEME ALANI — Blockbench emote'larını anlık deneme sayfası
//
// Kullanıcının iş akışı: Blockbench'te animasyon yap → emote.json'u buraya
// sürükle → karakter vitrininde hemen izle → beğendiyse "Vitrine ekle" ile
// kalıcı kaydet (%APPDATA%\.yikimlient\emotes\).
//
// Burada motor tek emote oynatır (rastgele çalma kapalı); home vitrini ise
// tüm kayıtlı emote'ları rastgele döndürür.

import { el, fileSrc, icon, invoke, navigate, state, toast, currentAccount } from "../main";
import { sahneGetir, sahneKapat } from "../sahne/karakter";
import { Emote, emoteParca } from "../sahne/emote";

let aktifEmoteler: { adi: string; emote: Emote | null; icerik: string }[] = [];

export function renderDeneme(root: HTMLElement): void {
  sahneKapat();
  const acc = currentAccount();
  root.innerHTML = `
    <div class="page-wrap">
      <div class="page-header">
        <div>
          <h1>Emote Deneme Alanı</h1>
          <p class="sub">emote.json veya indirdiğin .emotecraft dosyasını buraya sürükle — karakter anında oynatır.</p>
        </div>
        <button class="btn ghost" id="d-vitrin">${icon("home")} Ana Vitrin</button>
      </div>

      <div class="deneme-grid">
        <div class="deneme-stage card">
          <canvas id="d-sahne"></canvas>
          <div class="vitrin-isim">${acc ? `${acc.name} — PROVA` : "PROVA"}</div>
        </div>

        <div class="deneme-panel">
          <div class="card dropzone" id="d-drop" role="button" tabindex="0">
            <div style="font-size:26px; margin-bottom:6px">⤵</div>
            <strong>emote.json / .emotecraft sürükle</strong>
            <p class="sub" style="margin-top:4px">veya tıkla — dosya seç. Çoklu seçim olur.</p>
            <input type="file" id="d-file" accept=".json,.emotecraft,application/json" multiple hidden />
          </div>

          <div class="card">
            <div class="section-head" style="margin-bottom:8px">
              <h2 class="dim-cap">BU OTURUM</h2>
              <span class="dim-cap" id="d-sayac">0 emote</span>
            </div>
            <div id="d-oturum" class="deneme-liste"><p class="sub">Henüz emote sürüklenmedi.</p></div>
          </div>

          <div class="card">
            <div class="section-head" style="margin-bottom:8px">
              <h2 class="dim-cap">VİTRİN PAKETİ</h2>
              <span class="dim-cap">ana ekranda rastgele oynar</span>
            </div>
            <div id="d-paket" class="deneme-liste"><div class="spinner" style="margin:14px auto"></div></div>
          </div>
        </div>
      </div>
    </div>
  `;

  root.querySelector("#d-vitrin")?.addEventListener("click", () => navigate("home"));
  wireDrop(root);
  void baslat(root, acc);
}

async function baslat(root: HTMLElement, acc: { id: string; name: string } | null | undefined): Promise<void> {
  const canvas = root.querySelector("#d-sahne") as HTMLCanvasElement | null;
  if (!canvas) return;
  const sah = sahneGetir();
  sah.kur(canvas);
  canvas.classList.add("on");
  aktifEmoteler = [];
  sayac(root);
  // vitrin paketinden başlangıç seti yükleyelim (tekil oynatıcıyla denemek için)
  try {
    const kayitli: { adi: string; icerik: string }[] = await invoke("cmd_list_emotes");
    for (const k of kayitli.slice(0, 6)) {
      try { aktifEmoteler.push({ adi: k.adi, emote: emoteParca(k.icerik), icerik: k.icerik }); } catch { /* atla */ }
    }
  } catch { /* vitrin boş olabilir */ }
  oturumListesi(root);
  void paketListesi(root);
  sayac(root);
  try {
    const skin = await invoke("cmd_get_account_skin", { id: acc?.id || "" });
    if (skin?.dosya) await sah.skin({ url: fileSrc(String(skin.dosya)), slim: !!skin.slim });
    else await sah.skin(null);
  } catch {
    await sah.skin(null);
  }
  sah.emoteleriKur(aktifEmoteler.filter((x) => x.emote).map((x) => x.emote as Emote).slice(0, 3));
}

function sayac(root: HTMLElement): void {
  const s = root.querySelector("#d-sayac");
  if (s) s.textContent = `${aktifEmoteler.length} emote`;
}

function oturumListesi(root: HTMLElement): void {
  const host = root.querySelector("#d-oturum") as HTMLElement | null;
  if (!host) return;
  host.innerHTML = "";
  if (!aktifEmoteler.length) {
    host.innerHTML = `<p class="sub">Henüz emote sürüklenmedi.</p>`;
    return;
  }
  aktifEmoteler.forEach((x, i) => {
    const ad = x.emote?.adi || x.adi;
    const döngü = x.emote?.dongu ? " · döngü" : "";
    const satir = el(`
      <div class="deneme-satir" role="button" tabindex="0" data-i="${i}">
        <span class="ds-nome">${ad}<small>${döngü}</small></span>
        <span class="ds-butonlar">
          <button class="btn ghost sm" data-ok="${i}" title="Vitrin paketine kalıcı ekle">Vitrine ekle</button>
        </span>
      </div>
    `);
    satir.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest("[data-ok]")) {
        void vitrineEkle(x.icerik, root);
        return;
      }
      // satır tıkla → bu emote'u hemen oynat
      if (x.emote) {
        sahneGetir().emoteleriKur([x.emote]);
        toast(`"${ad}" oynatılıyor — rastgele çalma geçici kapalı`);
      }
    });
    host.appendChild(satir);
  });
}

function wireDrop(root: HTMLElement): void {
  const drop = root.querySelector("#d-drop") as HTMLElement | null;
  const file = root.querySelector("#d-file") as HTMLInputElement | null;
  if (!drop || !file) return;
  const oku = async (dosyalar: FileList | File[]) => {
    let eklenen = 0;
    for (const f of Array.from(dosyalar)) {
      try {
        // .emotecraft / zip / binary: gerçek dosya baytlarını Rust çözer
        const buf = new Uint8Array(await f.arrayBuffer());
        const zipMi = buf.length > 4 && buf[0] === 0x50 && buf[1] === 0x4b && buf[2] === 0x03 && buf[3] === 0x04;
        const ikiliMi = !zipMi && buf.length > 8 && buf[0] !== 0x7b && buf[4] === 0x10;
        const icerik = zipMi || ikiliMi
          ? String(await invoke("cmd_emote_bayt_coz", { veri: Array.from(buf) }))
          : new TextDecoder().decode(buf);
        const emote = emoteParca(icerik);
        aktifEmoteler.push({ adi: f.name, emote, icerik });
        eklenen++;
      } catch (h) {
        toast(`${f.name}: ${h instanceof Error ? h.message : String(h)} — atlandı`);
      }
    }
    if (eklenen) {
      toast(`${eklenen} emote yüklendi — satıra tıkla, oynar`);
      oturumListesi(root);
      sayac(root);
      const sah = sahneGetir();
      const liste = aktifEmoteler.filter((x) => x.emote).map((x) => x.emote as Emote);
      // son yüklenenler öne: son 3'ü oynat
      sah.emoteleriKur(liste.slice(-3).length ? liste.slice(-3) : liste.slice(0, 3));
    }
  };
  drop.addEventListener("click", () => file.click());
  drop.addEventListener("keydown", (e) => { if (e.key === "Enter") file.click(); });
  file.addEventListener("change", () => {
    if (file.files && file.files.length) void oku(file.files);
    file.value = "";
  });
  drop.addEventListener("dragover", (e) => {
    e.preventDefault();
    drop.classList.add("surunuyor");
  });
  drop.addEventListener("dragleave", () => drop.classList.remove("surunuyor"));
  drop.addEventListener("drop", (e) => {
    e.preventDefault();
    drop.classList.remove("surunuyor");
    if (e.dataTransfer?.files?.length) void oku(e.dataTransfer.files);
  });
}

async function vitrineEkle(icerik: string, root: HTMLElement): Promise<void> {
  try {
    const sonuc = await invoke("cmd_add_emote", { icerik });
    toast(`Vitrin paketine eklendi: ${sonuc.adi}`);
    void paketListesi(root);
  } catch (h) {
    toast(`Eklenemedi: ${String(h)}`);
  }
}

async function paketListesi(root: HTMLElement): Promise<void> {
  const host = root.querySelector("#d-paket") as HTMLElement | null;
  if (!host) return;
  try {
    const kayitli: { adi: string; icerik: string }[] = await invoke("cmd_list_emotes");
    host.innerHTML = "";
    if (!kayitli.length) {
      host.innerHTML = `<p class="sub">Vitrin paketi boş — emote ekleyince ana ekranda rastgele oynamaya başlar.</p>`;
      return;
    }
    for (const k of kayitli) {
      const satir = el(`
        <div class="deneme-satir">
          <span class="ds-nome">${k.adi}</span>
          <span class="ds-butonlar">
            <button class="btn ghost sm" data-sil title="Vitrin paketinden çıkar">Kaldır</button>
          </span>
        </div>
      `);
      satir.querySelector("[data-sil]")?.addEventListener("click", async (e) => {
        e.stopPropagation();
        try {
          await invoke("cmd_delete_emote", { adi: k.adi });
          toast(`${k.adi} kaldırıldı`);
          void paketListesi(root);
        } catch { /* geç */ }
      });
      host.appendChild(satir);
    }
  } catch {
    host.innerHTML = `<p class="sub">Paket okunamadı.</p>`;
  }
}

void state;
