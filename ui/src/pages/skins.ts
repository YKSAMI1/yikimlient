// SKİN MERKEZİ — premium katalog, pelerin şeridi ve editör girişi.
//
// Akış: karta tıkla → 3D önizleme o skine döner + "SEÇİLİ" rozeti;
// "Bu Skini Giy" → Mojang hesabına yazar. Çift tık = hemen giy.
// Pelerin kartına tıklandığında anında uygulanır (geri alınabilir).

import { currentAccount, fileSrc, icon, invoke, navigate, openLoginModal, openModal, toast } from "../main";
import { sahneGetir, sahneKapat } from "../sahne/karakter";
import { PikselPafta } from "../sahne/piksel-pafta";
import { pelerinHazirla, pelerinPaneli } from "../sahne/pelerin";
import { KART_TUVAL_GENISLIK, KART_TUVAL_YUKSEKLIK, kartCiz } from "../sahne/skin-kart";
import type { SkinHub, SkinKayit } from "../sahne/skin-tipleri";
import { openSkinEditor } from "./skins-editor";

interface Secim {
  tur: "kayit" | "varsayilan";
  id: string;
  dosya: string;
  slim: boolean;
  ad: string;
}

let hub: SkinHub | null = null;
let secili: Secim | null = null;
let giyiliId: string | null = null;
let mesgul = false;
let sonPelerin: string | null = null;

const kacis = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

export function renderSkins(root: HTMLElement): void {
  sahneKapat();
  hub = null;
  secili = null;
  giyiliId = null;
  sonPelerin = null;
  const acc = currentAccount();
  if (!acc || acc.kind !== "microsoft") {
    kapiCiz(root);
    return;
  }
  root.innerHTML = iskelet(acc.name);
  baglantilar(root, acc.id);
  void hubYukle(root, acc.id, true);
}

/** Offline hesap: hiçbir ağ isteği yok, yalnız kapı. */
function kapiCiz(root: HTMLElement): void {
  root.innerHTML = `
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${icon("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          <button class="btn primary lg" id="sk-ms">${icon("globe")} Microsoft ile Giriş</button>
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`;
  root.querySelector("#sk-ms")?.addEventListener("click", () => {
    openLoginModal(() => renderSkins(root));
  });
  root.querySelector("#sk-hesap")?.addEventListener("click", () => navigate("settings"));
}

function iskelet(ad: string): string {
  return `
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür.</p>
        </div>
        <div class="skin-ust-aksiyon">
          <span class="skin-premium">${icon("check")} Orijinal hesap</span>
          <button class="btn primary" id="sk-duzenle">${icon("brush")} Skin Düzenle</button>
        </div>
      </div>
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${kacis(ad)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${icon("undo")} Yedeği Geri Yükle</button>
            </div>
          </div>
        </section>
        <aside class="skin-yan">
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Kayıtlı Skinler</h3><span id="sk-adet" class="skin-adet"></span></div>
            <div id="sk-kitaplik" class="skin-izgara"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-ekle dropzone" id="sk-ekle" tabindex="0" role="button">
              ${icon("plus")}
              <b>Skin Ekle</b>
              <span>PNG sürükle ya da tıkla</span>
            </div>
            <input type="file" id="sk-dosya" accept="image/png" style="display:none" />
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Varsayılan</h3></div>
            <div id="sk-varsayilan" class="skin-izgara"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Pelerinlerin</h3></div>
            <div id="sk-pelerin" class="skin-pelerin-serit"></div>
          </div>
        </aside>
      </div>
    </div>`;
}

function baglantilar(root: HTMLElement, hesapId: string): void {
  root.querySelector("#sk-duzenle")?.addEventListener("click", () => void editorAc(root, hesapId));
  root.querySelector("#sk-giy")?.addEventListener("click", () => void giy(root, hesapId));
  root.querySelector("#sk-yedek")?.addEventListener("click", () => void yedekGeri(root, hesapId));

  const ekle = root.querySelector("#sk-ekle") as HTMLElement;
  const dosya = root.querySelector("#sk-dosya") as HTMLInputElement;
  ekle.addEventListener("click", () => dosya.click());
  ekle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dosya.click();
    }
  });
  dosya.addEventListener("change", () => {
    const f = dosya.files?.[0];
    if (f) void dosyaEkle(root, hesapId, f);
    dosya.value = "";
  });
  ekle.addEventListener("dragover", (e) => {
    e.preventDefault();
    ekle.classList.add("uzerinde");
  });
  ekle.addEventListener("dragleave", () => ekle.classList.remove("uzerinde"));
  ekle.addEventListener("drop", (e) => {
    e.preventDefault();
    ekle.classList.remove("uzerinde");
    const f = e.dataTransfer?.files?.[0];
    if (f) void dosyaEkle(root, hesapId, f);
  });

  const kartTik = (kapsayici: string, cift: () => void) => {
    const k = root.querySelector(kapsayici) as HTMLElement;
    k?.addEventListener("click", (e) => {
      const kart = (e.target as HTMLElement).closest<HTMLElement>(".skin-kart");
      if (!kart || (e.target as HTMLElement).closest(".skin-sil")) return;
      kartSec(root, kart);
    });
    k?.addEventListener("dblclick", (e) => {
      const kart = (e.target as HTMLElement).closest<HTMLElement>(".skin-kart");
      if (!kart || (e.target as HTMLElement).closest(".skin-sil")) return;
      kartSec(root, kart);
      cift();
    });
  };
  kartTik("#sk-kitaplik", () => void giy(root, hesapId));
  kartTik("#sk-varsayilan", () => void giy(root, hesapId));

  root.querySelector("#sk-kitaplik")?.addEventListener("click", (e) => {
    const sil = (e.target as HTMLElement).closest<HTMLElement>(".skin-sil");
    if (!sil) return;
    e.stopPropagation();
    const kart = sil.closest<HTMLElement>(".skin-kart");
    if (kart?.dataset.id) void skinSil(root, hesapId, kart.dataset.id, kart.dataset.ad || "Skin");
  });

  root.querySelector("#sk-pelerin")?.addEventListener("click", (e) => {
    const kart = (e.target as HTMLElement).closest<HTMLElement>(".skin-pelerin");
    if (!kart) return;
    const id = kart.dataset.id || null;
    void pelerinTak(root, hesapId, id);
  });

  root.querySelector("#sk-serit")?.addEventListener("click", (e) => {
    if (!(e.target as HTMLElement).closest("#sk-yenile")) return;
    void hubYukle(root, hesapId, false);
  });
}

async function hubYukle(root: HTMLElement, hesapId: string, sahneKur: boolean): Promise<void> {
  try {
    const gelen = (await invoke("cmd_skin_hub", { id: hesapId })) as SkinHub;
    hub = gelen;
    secili = secili ?? aktifSecim();
    ciz(root);
    if (sahneKur) sahneBaslat(root);
    else sahneSecimUygula(root);
    sahnePelerin();
    if (hub.cevrimdisi) toast("Çevrimdışısın — son bilinen skin gösteriliyor");
    else if (hub.hata) toast(hub.hata, "err");
  } catch (e) {
    toast(String(e), "err");
    const yan = root.querySelector("#sk-kitaplik") as HTMLElement;
    if (yan) yan.innerHTML = `<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>`;
  }
}

function aktifSecim(): Secim | null {
  if (!hub) return null;
  if (hub.aktif) {
    return {
      tur: "kayit",
      id: `aktif:${hub.aktif.dosya}`,
      dosya: hub.aktif.dosya,
      slim: hub.aktif.slim,
      ad: "Aktif skin",
    };
  }
  const ilk = hub.kitaplik[0];
  if (ilk) return kayitSecim(ilk);
  const v = hub.varsayilanlar[0];
  if (v) return { tur: "varsayilan", id: `varsayilan:${v.ad}`, dosya: v.dosya, slim: v.slim, ad: v.ad };
  return null;
}

function kayitSecim(k: SkinKayit): Secim {
  return { tur: "kayit", id: k.id, dosya: k.dosya, slim: k.slim, ad: k.ad };
}

function ciz(root: HTMLElement): void {
  if (!hub) return;

  // üst şerit
  const serit = root.querySelector("#sk-serit") as HTMLElement;
  if (serit) {
    serit.innerHTML = hub.cevrimdisi
      ? `<div class="skin-serit-cevrimdisi">${icon("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`
      : "";
  }

  // kayıtlı skinler
  const kitaplik = root.querySelector("#sk-kitaplik") as HTMLElement;
  if (kitaplik) {
    if (!hub.kitaplik.length) {
      kitaplik.innerHTML = `<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>`;
    } else {
      kitaplik.innerHTML = hub.kitaplik.map((k) => kartHtml(k)).join("");
      kitaplik.querySelectorAll<HTMLCanvasElement>(".skin-yuz").forEach((c) => {
        const yol = c.dataset.dosya;
        if (yol) kartKarakterCiz(c, yol, c.dataset.slim === "1");
      });
    }
    const adet = root.querySelector("#sk-adet") as HTMLElement;
    if (adet) adet.textContent = hub.kitaplik.length ? `${hub.kitaplik.length}` : "";
  }

  // varsayılanlar
  const vars = root.querySelector("#sk-varsayilan") as HTMLElement;
  if (vars) {
    vars.innerHTML = (hub.varsayilanlar || [])
      .map(
        (v) => `
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${kacis(v.ad)}" data-dosya="${kacis(v.dosya)}"
           data-slim="${v.slim ? 1 : 0}" data-ad="${kacis(v.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${KART_TUVAL_GENISLIK}" height="${KART_TUVAL_YUKSEKLIK}"
                  data-dosya="${kacis(v.dosya)}" data-slim="${v.slim ? 1 : 0}"></canvas>
          <span class="skin-model">${v.slim ? "Slim" : "Wide"}</span>
        </div>
        <div class="skin-kart-ad">${kacis(v.ad)}</div>
      </div>`,
      )
      .join("");
    vars.querySelectorAll<HTMLCanvasElement>(".skin-yuz").forEach((c) => {
      const yol = c.dataset.dosya;
      if (yol) kartKarakterCiz(c, yol, c.dataset.slim === "1");
    });
  }

  // pelerinler
  const pelerinler = root.querySelector("#sk-pelerin") as HTMLElement;
  if (pelerinler) {
    if (!hub.pelerinler.length) {
      pelerinler.innerHTML = `<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>`;
    } else {
      const aktif = hub.pelerinler.find((p) => p.aktif);
      pelerinler.innerHTML =
        hub.pelerinler
          .map(
            (p) => `
        <button class="skin-pelerin ${p.aktif ? "aktif" : ""}" data-id="${kacis(p.id)}" title="${kacis(p.ad)}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${kacis(p.dosya || "")}"></canvas>
          <span class="skin-pelerin-ad">${kacis(p.ad)}</span>
          ${p.aktif ? `<span class="skin-rozet aktif">TAKILI</span>` : ""}
        </button>`,
          )
          .join("") +
        (aktif
          ? `<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
               <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
             </button>`
          : "");
      pelerinler.querySelectorAll<HTMLCanvasElement>(".skin-pelerin-tuval").forEach((c) => {
        const yol = c.dataset.dosya;
        if (yol) pelerinCiz(c, yol);
      });
    }
  }

  // sahne alt bilgisi / butonlar
  const aktifAd = root.querySelector("#sk-aktif-ad") as HTMLElement;
  if (aktifAd) {
    const k = secili;
    aktifAd.textContent = hub.cevrimdisi
      ? "çevrimdışı önizleme"
      : k
        ? `${k.ad} · ${k.slim ? "Slim" : "Wide"}`
        : "skin seç";
  }
  const giyBtn = root.querySelector("#sk-giy") as HTMLButtonElement;
  if (giyBtn) {
    giyBtn.disabled = !secili || mesgul;
    giyBtn.textContent = mesgul ? "Bekle…" : "Bu Skini Giy";
  }
  const yedekBtn = root.querySelector("#sk-yedek") as HTMLButtonElement;
  if (yedekBtn) yedekBtn.style.display = hub.yedek_var ? "" : "none";

  // seçim rozetleri
  root.querySelectorAll<HTMLElement>(".skin-kart").forEach((k) => {
    const sec = secili && k.dataset.id === secili.id;
    k.classList.toggle("secili", !!sec);
    const eski = k.querySelector(".skin-rozet.secim");
    if (sec && !eski) {
      const r = document.createElement("span");
      r.className = "skin-rozet secim";
      r.textContent = giyiliId && k.dataset.id === giyiliId ? "GİYİLİ" : "SEÇİLİ";
      k.appendChild(r);
    } else if (!sec && eski) {
      eski.remove();
    } else if (sec && eski) {
      eski.textContent = giyiliId && k.dataset.id === giyiliId ? "GİYİLİ" : "SEÇİLİ";
    }
  });
}

function kartHtml(k: SkinKayit): string {
  return `
    <div class="skin-kart" data-tur="kayit" data-id="${kacis(k.id)}" data-dosya="${kacis(k.dosya)}"
         data-slim="${k.slim ? 1 : 0}" data-ad="${kacis(k.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${KART_TUVAL_GENISLIK}" height="${KART_TUVAL_YUKSEKLIK}"
                data-dosya="${kacis(k.dosya)}" data-slim="${k.slim ? 1 : 0}"></canvas>
        <span class="skin-model">${k.slim ? "Slim" : "Wide"}</span>
      </div>
      <div class="skin-kart-ad">${kacis(k.ad)}</div>
      <button class="skin-sil" title="Sil">${icon("trash")}</button>
    </div>`;
}

function kartSec(root: HTMLElement, kart: HTMLElement): void {
  secili = {
    tur: (kart.dataset.tur as "kayit" | "varsayilan") || "kayit",
    id: kart.dataset.id || "",
    dosya: kart.dataset.dosya || "",
    slim: kart.dataset.slim === "1",
    ad: kart.dataset.ad || "Skin",
  };
  sahneSecimUygula(root);
  ciz(root);
}

function sahneBaslat(root: HTMLElement): void {
  const canvas = root.querySelector("#skin-canvas") as HTMLCanvasElement | null;
  if (!canvas) return;
  const sahne = sahneGetir();
  sahne.kur(canvas);
  sahneSecimUygula(root);
}

function sahneSecimUygula(root: HTMLElement): void {
  void root;
  const sahne = sahneGetir();
  if (!secili) return;
  void sahne.skin({ url: fileSrc(secili.dosya), slim: secili.slim });
}

function sahnePelerin(): void {
  if (!hub) return;
  const aktif = hub.pelerinler.find((p) => p.aktif && p.dosya);
  const yol = aktif?.dosya || null;
  if (yol === sonPelerin) return;
  sonPelerin = yol;
  void sahneGetir().pelerin(yol ? { url: fileSrc(yol) } : null);
}

async function giy(root: HTMLElement, hesapId: string): Promise<void> {
  if (!secili || mesgul) return;
  const sec = secili;
  const onay = await onaySor(
    "Skini giy",
    `<b>${kacis(sec.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,
    "Giy",
  );
  if (!onay) return;
  mesgul = true;
  ciz(root);
  try {
    let yeni: SkinHub;
    if (sec.tur === "kayit" && hub?.kitaplik.some((k) => k.id === sec.id)) {
      yeni = (await invoke("cmd_skin_giy_kitaplik", { id: hesapId, kayitId: sec.id })) as SkinHub;
    } else {
      const veri = await dosyaBaytlari(sec.dosya);
      yeni = (await invoke("cmd_skin_giy", {
        id: hesapId,
        veri,
        slim: sec.slim,
        ad: null,
      })) as SkinHub;
    }
    hub = yeni;
    giyiliId = sec.tur === "kayit" ? sec.id : null;
    toast("Skin giyildi — sunucularda görünecek.");
  } catch (e) {
    toast(String(e), "err");
  } finally {
    mesgul = false;
    ciz(root);
  }
}

async function yedekGeri(root: HTMLElement, hesapId: string): Promise<void> {
  if (mesgul) return;
  const onay = await onaySor(
    "Yedeği geri yükle",
    "Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?",
    "Geri Yükle",
  );
  if (!onay) return;
  mesgul = true;
  try {
    hub = (await invoke("cmd_skin_yedek_geri_yukle", { id: hesapId })) as SkinHub;
    giyiliId = null;
    toast("Yedek skin geri yüklendi.");
  } catch (e) {
    toast(String(e), "err");
  } finally {
    mesgul = false;
    ciz(root);
    sahnePelerin();
  }
}

async function pelerinTak(root: HTMLElement, hesapId: string, capeId: string | null): Promise<void> {
  if (mesgul || !hub) return;
  if (capeId === null && !hub.pelerinler.some((p) => p.aktif)) return;
  mesgul = true;
  try {
    hub = (await invoke("cmd_skin_pelerin", { id: hesapId, capeId })) as SkinHub;
    toast(capeId ? "Pelerin takıldı." : "Pelerin çıkarıldı.");
    sahnePelerin();
  } catch (e) {
    toast(String(e), "err");
  } finally {
    mesgul = false;
    ciz(root);
  }
}

async function skinSil(root: HTMLElement, hesapId: string, id: string, ad: string): Promise<void> {
  const onay = await onaySor("Skini sil", `<b>${kacis(ad)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`, "Sil");
  if (!onay) return;
  try {
    await invoke("cmd_skin_sil", { kayitId: id });
    if (secili?.id === id) secili = null;
    toast("Skin silindi.");
    await hubYukle(root, hesapId, false);
  } catch (e) {
    toast(String(e), "err");
  }
}

async function dosyaEkle(root: HTMLElement, hesapId: string, f: File): Promise<void> {
  try {
    const veri = Array.from(new Uint8Array(await f.arrayBuffer()));
    const ad = f.name.replace(/\.png$/i, "").slice(0, 48) || "Skin";
    const slim = await modelSor(ad);
    if (slim === null) return;
    await invoke("cmd_skin_kaydet", { ad, veri, slim });
    toast(`Skin kitaplığa eklendi · ${slim ? "Slim" : "Wide"}`);
    await hubYukle(root, hesapId, false);
  } catch (e) {
    toast(String(e), "err");
  }
}

/** Dosyadan eklerken model seçimi: wide (klasik 4px kol) / slim (ince 3px kol). */
function modelSor(ad: string): Promise<boolean | null> {
  return new Promise((coz) => {
    const { root, close } = openModal(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${kacis(ad)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${icon("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${icon("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);
    let bitti = false;
    // Escape / arka plan tıklaması modali kapatır; söz de iptal olarak çözülür,
    // yoksa `dosyaEkle` sonsuza kadar bekler.
    const tus = (e: KeyboardEvent) => {
      if (e.key === "Escape") bitir(null);
    };
    const bitir = (v: boolean | null) => {
      if (bitti) return;
      bitti = true;
      window.removeEventListener("keydown", tus);
      close();
      coz(v);
    };
    root.querySelector("#sm-wide")?.addEventListener("click", () => bitir(false));
    root.querySelector("#sm-slim")?.addEventListener("click", () => bitir(true));
    root.querySelector("#sm-iptal")?.addEventListener("click", () => bitir(null));
    const arka = root.parentElement as HTMLElement | null;
    arka?.addEventListener("click", (e) => {
      if (e.target === arka) bitir(null);
    });
    window.addEventListener("keydown", tus);
  });
}

async function editorAc(root: HTMLElement, hesapId: string): Promise<void> {
  const kaynak = secili?.dosya || hub?.aktif?.dosya || hub?.varsayilanlar[0]?.dosya;
  if (!kaynak) {
    toast("Önce bir skin seç.", "err");
    return;
  }
  let pafta: PikselPafta;
  try {
    pafta = await paftaCoz(await dosyaBaytlari(kaynak));
  } catch (e) {
    toast(String(e), "err");
    return;
  }
  const simdi = new Date();
  const varsayilanAd = `Skinim ${String(simdi.getDate()).padStart(2, "0")}.${String(simdi.getMonth() + 1).padStart(2, "0")}`;
  let kaydedildi = false;
  openSkinEditor(
    root,
    { pafta, slim: secili?.slim ?? false, ad: varsayilanAd },
    async (cikti, giyMi) => {
      // Önce kitaplığa yaz: kimliği elimizde tutup doğrudan o kaydı giyiyoruz.
      const kayit = (await invoke("cmd_skin_kaydet", {
        ad: cikti.ad,
        veri: cikti.veri,
        slim: cikti.slim,
      })) as SkinKayit;
      if (giyMi) {
        hub = (await invoke("cmd_skin_giy_kitaplik", {
          id: hesapId,
          kayitId: kayit.id,
        })) as SkinHub;
        giyiliId = kayit.id;
        toast("Skin giyildi — sunucularda görünecek.");
      } else {
        hub = (await invoke("cmd_skin_hub", { id: hesapId })) as SkinHub;
        toast("Kitaplığa kaydedildi.");
      }
      secili = kayitSecim(kayit);
      kaydedildi = true;
    },
    () => {
      if (!kaydedildi) {
        renderSkins(root);
        return;
      }
      // Editör sahneyi kapattı; ana sayfa sahnesini SIFIRDAN kur ve seçimi koru.
      // (Tekil örneği de yenile: eski döngü/renderer kalırsa karakter iki kez çizilir.)
      ciz(root);
      sahneKapat();
      sonPelerin = null; // yeni sahne pelerinsiz doğar; bilinen yol yeniden uygulanmalı
      sahneBaslat(root);
      sahnePelerin();
    },
  );
}

async function paftaCoz(veri: number[]): Promise<PikselPafta> {
  const blob = new Blob([new Uint8Array(veri)], { type: "image/png" });
  const url = URL.createObjectURL(blob);
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = () => rej(new Error("Skin dosyası okunamadı."));
      i.src = url;
    });
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const g = c.getContext("2d") as CanvasRenderingContext2D;
    g.imageSmoothingEnabled = false;
    // 64 pikselden büyük dosya (HD skin) kırpılmasın: 64 ızgarasına indir.
    // 64×32 eski pafta ise üst yarıda kalır (dikey esnetilmez).
    const kaynak = atlasHazirla(img);
    const eski = img.naturalHeight === 32;
    g.drawImage(kaynak, 0, 0, 64, eski ? 32 : 64);
    return new PikselPafta(new Uint8ClampedArray(g.getImageData(0, 0, 64, 64).data));
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function dosyaBaytlari(yol: string): Promise<number[]> {
  const r = await fetch(fileSrc(yol));
  if (!r.ok) throw new Error("Skin dosyası okunamadı.");
  return Array.from(new Uint8Array(await r.arrayBuffer()));
}

/** Atlas 64 piksel ızgarasına göre okunur; dosya daha büyükse (HD skin)
 *  doğrudan çizmek yakınlaşıp sadece bir kareyi gösterir. Bu yüzden kaynak
 *  her zaman 64×64 (veya 64×32) ızgarasına indirgenir. */
function atlasHazirla(img: HTMLImageElement): CanvasImageSource {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;
  if (w === 64) return img;
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = Math.max(1, Math.round((h / w) * 64));
  const g = c.getContext("2d");
  if (!g) return img;
  g.imageSmoothingEnabled = false;
  g.drawImage(img, 0, 0, c.width, c.height);
  return c;
}

function kartKarakterCiz(canvas: HTMLCanvasElement, yol: string, slim: boolean): void {
  const img = new Image();
  img.onload = () => {
    const g = canvas.getContext("2d");
    if (!g) return;
    kartCiz(g, atlasHazirla(img), slim);
  };
  img.src = fileSrc(yol);
}

function pelerinCiz(canvas: HTMLCanvasElement, yol: string): void {
  const img = new Image();
  img.onload = () => {
    const g = canvas.getContext("2d");
    if (!g) return;
    g.imageSmoothingEnabled = false;
    g.clearRect(0, 0, canvas.width, canvas.height);
    // Pelerin 64×32: tasarım paneli (desen hangi panelde varsa) tam boy çizilir.
    const pafta = pelerinHazirla(img);
    const p = pelerinPaneli(pafta);
    g.drawImage(pafta, p.x, p.y, p.w, p.h, 0, 0, canvas.width, canvas.height);
  };
  img.src = fileSrc(yol);
}

function onaySor(baslik: string, govde: string, onayMetni: string): Promise<boolean> {
  return new Promise((coz) => {
    const { root, close } = openModal(`
      <h2>${baslik}</h2>
      <div class="sub" style="margin-bottom:16px">${govde}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${onayMetni}</button>
      </div>`);
    let bitti = false;
    const bitir = (v: boolean) => {
      if (bitti) return;
      bitti = true;
      close();
      coz(v);
    };
    root.querySelector("#on-vazgec")?.addEventListener("click", () => bitir(false));
    root.querySelector("#on-tamam")?.addEventListener("click", () => bitir(true));
    const arka = root.parentElement as HTMLElement | null;
    arka?.addEventListener("click", (e) => {
      if (e.target === arka) bitir(false);
    });
  });
}
