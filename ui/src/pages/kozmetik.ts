// KOZMETİKLER — özel pelerin ve elitra (ücretsiz).
//
// Editör artık VANILLA 64×32 atlasının tamamıdır: kullanıcı ön/arka/yan/üst/alt
// bütün yüzleri doğrudan çizer. Kaydet, atlası olduğu gibi PNG'ye yazar; mod
// hiçbir dönüşüm yapmadan onu oyundaki pelerin/elitra modeline takar. Böylece
// hem kendi oyununda hem aynı sunucudaki diğer YIKIMLient oyuncularında görünür.
// Kredi/ücret YOKTUR.
//
// Önizleme 2D değil: Skin Merkezi ile aynı 3D karakter sahnesi kullanılır.
// Aynı anda YALNIZ seçili kozmetik gösterilir (üst üste binmez).
// "3D Çiz" ile doğrudan modelin her yüzüne boyanır; "2D'ye geç" ile dönülür.

import { currentAccount, fileSrc, icon, invoke, toast } from "../main";
import { sahneGetir, sahneKapat } from "../sahne/karakter";
import {
  ATLAS_PIKSEL,
  ELITRA_BOLGELERI,
  KOZ_G,
  KOZ_KUTU,
  KOZ_Y,
  KozBolge,
  PELERIN_BOLGELERI,
  Piksel,
  atlasBosMu,
  atlasOku,
  atlasTuval,
  atlasTuvalGuncelle,
  bosAtlas,
  disBolge,
  elitraSablonu,
  icBolge,
} from "../sahne/kozmetik-pafta";

type Tur = "pelerin" | "kanat";

const TURLER: Tur[] = ["pelerin", "kanat"];

interface KozmetikDurum {
  pelerin: string[] | null;
  kanat: string[] | null;
  pelerin_dosya?: string | null;
  kanat_dosya?: string | null;
  /** Özel kozmetik oyunda etkin mi? Kapalıysa vanilla pelerin/elitra görünür. */
  pelerin_aktif?: boolean;
  kanat_aktif?: boolean;
}

const PALET = [
  "#0b0b10", "#1d1d24", "#3a3a46", "#6b6b7a", "#a8a8b6", "#e8e8ef",
  "#ff8a3d", "#ff5a1f", "#ffd166", "#f6f6f6", "#ff4d6d", "#b8132f",
  "#7b2ff7", "#3d5afe", "#22d3ee", "#0ea5a3", "#22c55e", "#166534",
  "#8b5e34", "#d9a066", "#f5c6a5", "#e11d48", "#111827", "#4b5563",
];

/** Kılavuz tuvalinin ölçeği (yazılar okunaklı kalsın). */
const REHBER_OLC = 8;

let pelerin: Piksel[] = bosAtlas();
let kanat: Piksel[] = bosAtlas();
let pelerinKayitli = false;
let kanatKayitli = false;
/** Önizlemede + 3D çizimde hangi kozmetik etkin. */
let secili: Tur = "pelerin";
/** Fırça rengi ve silgi durumu iki kart arasında ortaktır. */
let renk = "#ff8a3d";
let silgi = false;
let cizimde = false;
let cizimSilgi = false;
/** 3D çizimde "Döndür" modu: sol tık boyamaz, karakteri döndürür. */
let dondurmeModu = false;
let oyuncuGizli = false;
/** Varsayılan bakış: kozmetikler sırtta olduğu için arkadan 3/4. */
let arkadan = true;
/** 3D sahneye verilen kalıcı tuvaller (kimlik korunur → doku yeniden kurulmaz). */
let pelerinOnizleme: HTMLCanvasElement | null = null;
let kanatOnizleme: HTMLCanvasElement | null = null;
/** İmlecin üstündeki atlas bölgesi (kılavuzda vurgulanır). */
const vurgular = new Map<Tur, KozBolge | null>();

/** Elitra boşken gösterilen vanilla benzeri hayalet doku (kaydedilmez). */
const ELITRA_SABLON = elitraSablonu();

const kacis = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

const hedef = (tur: Tur): Piksel[] => (tur === "pelerin" ? pelerin : kanat);
const bolgeler = (tur: Tur): KozBolge[] => (tur === "pelerin" ? PELERIN_BOLGELERI : ELITRA_BOLGELERI);

export function renderKozmetik(root: HTMLElement): void {
  sahneKapat();
  pelerin = bosAtlas();
  kanat = elitraSablonu();
  pelerinKayitli = false;
  kanatKayitli = false;
  secili = "pelerin";
  renk = "#ff8a3d";
  silgi = false;
  cizimde = false;
  cizimSilgi = false;
  oyuncuGizli = false;
  arkadan = true;
  pelerinOnizleme = null;
  kanatOnizleme = null;
  vurgular.clear();
  root.innerHTML = iskelet();
  void yukle(root);
}

function iskelet(): string {
  return `
    <div class="page-wrap kozmetik-sayfa" id="kz-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitranı doğrudan Minecraft'ın 64×32 dokusu üzerinde çiz — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d" id="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${icon("user")} Karakterde görünüm</span>
            <button class="btn ghost sm" id="kz-yon" title="Ön / arka bakış">Önden gör</button>
          </div>
          <div class="kz-secim" id="kz-secim" role="group" aria-label="Önizlenecek kozmetik">
            <button class="seg-btn aktif" data-secim="pelerin" title="Yalnız pelerini göster">Pelerin</button>
            <button class="seg-btn" data-secim="kanat" title="Yalnız elitrayı göster">Elitra</button>
          </div>
          <canvas id="kz-sahne"></canvas>
          <div class="kz-zum" id="kz-zum">
            <button class="seg-btn" id="kz-zum-eksi" title="Uzaklaş">−</button>
            <button class="seg-btn" id="kz-zum-arti" title="Yakınlaş">+</button>
            <button class="seg-btn" id="kz-zum-sigdir" title="Varsayılan mesafe">Sığdır</button>
            <span class="kz-zum-ipucu">Tekerlek: yakınlaş · Sürükle: döndür</span>
          </div>
          <div class="kz-aktif-satir" id="kz-aktif-satir">
            <span class="kz-aktif-baslik">Oyunda</span>
            <label class="kz-anahtar" title="Kapalıyken oyunda normal Minecraft pelerin görünür">
              <input type="checkbox" id="kz-pelerin-aktif" checked />
              <span>Özel pelerin</span>
            </label>
            <label class="kz-anahtar" title="Kapalıyken oyunda normal Minecraft elitrası görünür">
              <input type="checkbox" id="kz-kanat-aktif" checked />
              <span>Özel elitra</span>
            </label>
          </div>
          <div class="kz-cizim-arac" id="kz-cizim-arac" hidden>
            <button class="seg-btn aktif" id="kz-3d-kalem">${icon("brush")} Kalem</button>
            <button class="seg-btn" id="kz-3d-silgi">${icon("trash")} Silgi</button>
            <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${icon("undo")} Döndür</button>
            <button class="seg-btn" id="kz-3d-oyuncu">${icon("user")} Oyuncuyu gizle</button>
            <button class="seg-btn kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${icon("image")} 2D'ye geç</button>
            <span class="kz-3d-renk">
              <input type="color" id="kz-3d-renk" value="#ff8a3d" title="Fırça rengi" />
              <span class="kz-3d-palet" id="kz-3d-palet"></span>
            </span>
          </div>
          <p class="kz-ipucu kz-oniz3d-alt" id="kz-sahne-alt">Sürükle: döndür · Tekerlek: yakınlaş</p>
        </aside>

        <div class="kz-izgara">
          ${kart("pelerin", "Pelerin", "shirt", "Pelerin", "Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${kart("kanat", "Elitra", "sparkle", "Elitra", "Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`;
}

function kart(tur: Tur, baslik: string, simge: string, alan: string, ipucu: string): string {
  return `
    <section class="kz-kart" id="kz-${tur}-kart" data-tur="${tur}">
      <div class="kz-kart-ust">
        <h3>${icon(simge)} ${baslik}</h3>
        <span class="kz-rozet" id="kz-${tur}-durum"></span>
      </div>
      <div class="kz-tuval-sar" id="kz-${tur}-sar">
        <canvas class="kz-tuval" id="kz-${tur}-tuval" width="${KOZ_G}" height="${KOZ_Y}"
          aria-label="${alan} atlası — 64×32 piksel"></canvas>
        <canvas class="kz-rehber" id="kz-${tur}-rehber"
          width="${KOZ_G * REHBER_OLC}" height="${KOZ_Y * REHBER_OLC}"></canvas>
      </div>
      <div class="kz-bolgeler" id="kz-${tur}-bolgeler"></div>
      <div class="kz-araclar" id="kz-${tur}-palet"></div>
      <div class="kz-renk-satir">
        <label for="kz-${tur}-renk">Renk</label>
        <input type="color" id="kz-${tur}-renk" value="#ff8a3d" />
        <button class="btn" id="kz-${tur}-sil" title="Silgi (çizerek siler)">${icon("trash")} Silgi</button>
        <button class="btn" id="kz-${tur}-temizle" title="Atlasın tamamını temizle">${icon("trash")} Temizle</button>
      </div>
      <div class="kz-alt">
        <button class="btn" id="kz-${tur}-3d" data-ciz3d="${tur}"
          title="Doğrudan 3D modelin her yüzüne boya">${icon("box")} 3D Çiz</button>
        <label class="btn" for="kz-${tur}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${icon("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${tur}-dosya" accept="image/*" style="display:none" />
        <button class="btn primary" id="kz-${tur}-kaydet">${icon("check")} Kaydet</button>
        <button class="btn" id="kz-${tur}-kaldir">Kaldır</button>
      </div>
      <p class="kz-ipucu kz-kart-ipucu">${ipucu}</p>
    </section>`;
}

// ---------------------------------------------------------------- yükleme

async function yukle(root: HTMLElement): Promise<void> {
  let durum: KozmetikDurum;
  try {
    durum = (await invoke("cmd_kozmetik_oku")) as KozmetikDurum;
  } catch (e) {
    toast(String(e), "err");
    durum = { pelerin: null, kanat: null };
  }

  // "Kapat" ile dosya boşaltıldıysa bile çizim yedekten geri gelir.
  const yedekOku = (tur: Tur): Piksel[] | null => {
    try {
      const ham = localStorage.getItem(`yikim:kozmetik:${tur}:yedek`);
      const d = ham ? (JSON.parse(ham) as Piksel[]) : null;
      return Array.isArray(d) && d.length === ATLAS_PIKSEL ? d.slice() : null;
    } catch {
      return null;
    }
  };

  // Kayıtlı liste ya tam atlastır (2048) ya da ESKİ EXE'nin döndürdüğü
  // tasarım panelidir (pelerin 160 / elitra 200) — ikisi de kabul edilir.
  const gecerli = (liste: string[] | null | undefined, tur: Tur): Piksel[] | null => {
    if (!liste) return null;
    if (liste.length === ATLAS_PIKSEL) return liste.slice();
    if (liste.length === ESKI_BOY[tur]) return eskiTasarimiAtlasa(liste, tur);
    return null;
  };

  // Disk boşsa (eski exe'de "kapat" dosyayı boşaltır) localStorage yedeği
  // devreye girer — sayfa yenilense de çizim kaybolmaz.
  // Disk BOŞATILMIŞSA ("kapat" yolu) yedekteki çizim editöre geri gelir;
  // böylece anahtarı açınca eski tasarım aynen yazılır.
  const kayitliPelerin = gecerli(durum.pelerin, "pelerin");
  const kayitliKanat = gecerli(durum.kanat, "kanat");

  const pelerinDolu = !!kayitliPelerin && !atlasBosMu(kayitliPelerin);
  pelerin = pelerinDolu ? kayitliPelerin! : (yedekOku("pelerin") ?? kayitliPelerin ?? bosAtlas());
  // Elitra kayıtlı değilse vanilla benzeri şablonla başla — kullanıcı hazır
  // bir tabandan düzenler; "Temizle" ile boşaltınca oyunda normal elitra görünür.
  const kanatDolu = !!kayitliKanat && !atlasBosMu(kayitliKanat);
  kanat = kanatDolu ? kayitliKanat! : (yedekOku("kanat") ?? kayitliKanat ?? elitraSablonu());
  pelerinKayitli = !!kayitliPelerin && !atlasBosMu(kayitliPelerin);
  kanatKayitli = !!kayitliKanat && !atlasBosMu(kayitliKanat);

  pelerinOnizleme = atlasTuval();
  kanatOnizleme = atlasTuval();
  onizlemeTazele();

  sahnayiKur(root);
  for (const tur of TURLER) duzenle(root, tur);
  secimiUygula(root);
  yonuUygula(root);
  cizimDinleyicileri(root);
  // Etkin/pasif anahtarları kayıtlı durumla eşle (varsayılan: açık).
  const pelerinAnahtar = root.querySelector<HTMLInputElement>("#kz-pelerin-aktif");
  const kanatAnahtar = root.querySelector<HTMLInputElement>("#kz-kanat-aktif");
  // `*_aktif` alanını ESKİ exe döndürmez → son seçim localStorage'da tutulur
  // (sayfadan çıkıp gelince anahtar kendiliğinden kapanmasın).
  if (pelerinAnahtar) {
    pelerinAnahtar.checked = durum.pelerin_aktif ?? aktifOku("pelerin") ?? !!durum.pelerin_dosya;
  }
  if (kanatAnahtar) {
    kanatAnahtar.checked = durum.kanat_aktif ?? aktifOku("kanat") ?? !!durum.kanat_dosya;
  }
}

/** 3D karakter sahnesi: oyuncunun kendi skini üstünde kozmetik önizlemesi. */
function sahnayiKur(root: HTMLElement): void {
  const canvas = root.querySelector<HTMLCanvasElement>("#kz-sahne");
  if (!canvas) return;
  const sahne = sahneGetir();
  sahne.kur(canvas);
  void (async () => {
    try {
      // v0.6.2: cracked/offline hesapta da karakter görünür. Eskiden burada
      // `kind !== "microsoft"` kapısı vardı → `sahne.skin(...)` hiç çağrılmıyor,
      // model kurulmuyor ve önizleme tamamen boş kalıyordu. Artık:
      //   1) aktif skin varsa o (premium),
      //   2) yoksa gömülü varsayılan kart (Steve),
      //   3) o da yoksa düz manken çizilir.
      const acc = currentAccount();
      let kaynak: { dosya?: string; slim?: boolean } | null = null;
      if (acc) {
        const hub = (await invoke("cmd_skin_hub", { id: acc.id })) as {
          aktif?: { dosya?: string; slim?: boolean } | null;
          varsayilanlar?: { dosya?: string; slim?: boolean }[];
        };
        kaynak = hub?.aktif?.dosya ? hub.aktif : (hub?.varsayilanlar?.[0] ?? null);
      }
      await sahne.skin(kaynak?.dosya ? { url: fileSrc(kaynak.dosya), slim: !!kaynak.slim } : null);
    } catch {
      // skin alınamazsa düz manken kalır — önizleme yine çalışır
      try { await sahne.skin(null); } catch { /* yok say */ }
    }
  })();
}

// ---------------------------------------------------------------- önizleme

/** Pelerin boşken görünür kalsın diye yüzlerin altına soluk bir siluet. */
function pelerinZemini(g: CanvasRenderingContext2D): void {
  g.fillStyle = "rgba(150,152,170,0.16)";
  for (const b of PELERIN_BOLGELERI) g.fillRect(b.x, b.y, b.w, b.h);
}

/** Elitra boşken normal Minecraft elitrası gibi görünür (hayalet, kaydedilmez). */
function kanatZemini(g: CanvasRenderingContext2D): void {
  if (!atlasBosMu(kanat)) {
    g.fillStyle = "rgba(150,152,170,0.10)";
    for (const b of ELITRA_BOLGELERI) g.fillRect(b.x, b.y, b.w, b.h);
    return;
  }
  g.save();
  g.globalAlpha = 0.6;
  for (let i = 0; i < ATLAS_PIKSEL; i++) {
    const renkli = ELITRA_SABLON[i];
    if (!renkli) continue;
    g.fillStyle = renkli;
    g.fillRect(i % KOZ_G, Math.floor(i / KOZ_G), 1, 1);
  }
  g.restore();
}

function onizlemeTazele(): void {
  if (pelerinOnizleme) atlasTuvalGuncelle(pelerinOnizleme, pelerin, pelerinZemini);
  if (kanatOnizleme) atlasTuvalGuncelle(kanatOnizleme, kanat, kanatZemini);
  sahneGetir().dokuTazele();
}

/** Seçili kozmetiği sahneye besle; diğerini KALDIR (üst üste binmesin). */
function secimiUygula(root: HTMLElement): void {
  const sahne = sahneGetir();
  sahne.pelerinTuval(secili === "pelerin" ? pelerinOnizleme : null);
  sahne.kanatTuval(secili === "kanat" ? kanatOnizleme : null);

  root.querySelectorAll<HTMLElement>("[data-secim]").forEach((b) => {
    b.classList.toggle("aktif", b.dataset.secim === secili);
  });
  for (const tur of TURLER) {
    root.querySelector(`#kz-${tur}-kart`)?.classList.toggle("secili", secili === tur);
  }
  root.querySelectorAll<HTMLElement>("[data-ciz3d]").forEach((b) => {
    const buTur = b.dataset.ciz3d === secili;
    b.classList.toggle("aktif", cizimde && buTur);
    b.innerHTML = cizimde && buTur ? `${icon("image")} 2D'ye geç` : `${icon("box")} 3D Çiz`;
  });
}

/** 2D tuval + kılavuz + 3D dokusunu birlikte tazele. */
function tazele(root: HTMLElement, tur: Tur): void {
  const tuval = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-tuval`);
  if (tuval) atlasTuvalGuncelle(tuval, hedef(tur));
  rehberTazele(root, tur);
  rozetGuncelle(root, tur);
  onizlemeTazele();
}

function rozetGuncelle(root: HTMLElement, tur: Tur): void {
  const d = root.querySelector<HTMLElement>(`#kz-${tur}-durum`);
  if (!d) return;
  const kayitli = tur === "pelerin" ? pelerinKayitli : kanatKayitli;
  d.textContent = kayitli && !atlasBosMu(hedef(tur)) ? "KAYITLI" : "";
}

// ---------------------------------------------------------------- 2D atlas

function rehberCiz(tuval: HTMLCanvasElement, liste: KozBolge[], vurgu: KozBolge | null): void {
  const g = tuval.getContext("2d");
  if (!g) return;
  g.clearRect(0, 0, tuval.width, tuval.height);
  const px = tuval.width / KOZ_G;
  g.font = "600 10px ui-sans-serif, system-ui, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  for (const b of liste) {
    const etkin = vurgu?.id === b.id;
    g.strokeStyle = etkin ? "rgba(255,150,60,0.95)" : "rgba(255,255,255,0.26)";
    g.lineWidth = etkin ? 2 : 1;
    g.setLineDash(etkin ? [] : [4, 3]);
    g.strokeRect(b.x * px + 0.5, b.y * px + 0.5, b.w * px - 1, b.h * px - 1);
    g.setLineDash([]);
    // Üst/alt gibi ince şeritler etiket almaz — adları alttaki rozetlerde yazar.
    if (b.h * px < 20) continue;
    const dikey = b.w * px < 46;
    const cx = (b.x + b.w / 2) * px;
    const cy = Math.min(tuval.height - 10, Math.max(10, (b.y + b.h / 2) * px));
    g.save();
    g.translate(cx, cy);
    if (dikey) g.rotate(-Math.PI / 2);
    const m = g.measureText(b.ad);
    g.fillStyle = "rgba(8,9,13,0.74)";
    g.fillRect(-m.width / 2 - 4, -7, m.width + 8, 14);
    g.fillStyle = etkin ? "#ffb066" : "rgba(255,255,255,0.8)";
    g.fillText(b.ad, 0, 0);
    g.restore();
  }
}

function rehberTazele(root: HTMLElement, tur: Tur): void {
  const rehber = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-rehber`);
  if (!rehber) return;
  rehberCiz(rehber, bolgeler(tur), vurgular.get(tur) ?? null);
}

/** İmlecin bulunduğu atlas pikseli (tuval dışındaysa null). */
function pikselXY(e: PointerEvent, tuval: HTMLCanvasElement): { x: number; y: number } | null {
  const yer = tuval.getBoundingClientRect();
  if (yer.width < 1 || yer.height < 1) return null;
  const x = Math.floor(((e.clientX - yer.left) / yer.width) * KOZ_G);
  const y = Math.floor(((e.clientY - yer.top) / yer.height) * KOZ_Y);
  if (x < 0 || y < 0 || x >= KOZ_G || y >= KOZ_Y) return null;
  return { x, y };
}

function bolgeBul(tur: Tur, x: number, y: number): KozBolge | null {
  for (const b of bolgeler(tur)) {
    if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) return b;
  }
  return null;
}

/** İki piksel arasını doldurur (hızlı sürüklemede boşluk kalmasın). */
function cizgiBoya(p: Piksel[], x0: number, y0: number, x1: number, y1: number, deger: string): void {
  let x = x0;
  let y = y0;
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let hata = dx - dy;
  for (;;) {
    if (x >= 0 && x < KOZ_G && y >= 0 && y < KOZ_Y) p[y * KOZ_G + x] = deger;
    if (x === x1 && y === y1) break;
    const e2 = 2 * hata;
    if (e2 > -dy) {
      hata -= dy;
      x += sx;
    }
    if (e2 < dx) {
      hata += dx;
      y += sy;
    }
  }
}

function paletCiz(root: HTMLElement, tur: Tur): void {
  const kutu = root.querySelector<HTMLElement>(`#kz-${tur}-palet`);
  if (!kutu) return;
  paletDoldur(kutu, root);
  // 3D çizim araç çubuğundaki palet bir kez doldurulur (kartlar 3D'de gizli).
  const ucBoyut = root.querySelector<HTMLElement>("#kz-3d-palet");
  if (ucBoyut && !ucBoyut.childElementCount) paletDoldur(ucBoyut, root);
}

/** Palet düğmelerini bir kutuya yaz (kart paleti + 3D araç çubuğu paleti). */
function paletDoldur(kutu: HTMLElement, root: HTMLElement): void {
  kutu.innerHTML = PALET.map(
    (r) => `<button class="kz-renk" data-renk="${r}" style="background:${r}" title="${r}" aria-label="${r}"></button>`,
  ).join("");
  kutu.querySelectorAll<HTMLButtonElement>(".kz-renk").forEach((b) => {
    b.addEventListener("click", () => renkAyarla(root, b.dataset.renk ?? "#ffffff"));
  });
}

/** Renk seçimi: silgiyi kapatır, iki kartın göstergesini eşitler. */
function renkAyarla(root: HTMLElement, c: string, silgiKapat = true): void {
  renk = c;
  if (silgiKapat) silgi = false;
  for (const tur of TURLER) {
    const girdi = root.querySelector<HTMLInputElement>(`#kz-${tur}-renk`);
    if (girdi) girdi.value = c;
    root.querySelectorAll<HTMLElement>(`#kz-${tur}-palet .kz-renk`).forEach((b) => {
      b.classList.toggle("aktif", (b.dataset.renk ?? "").toLowerCase() === c.toLowerCase());
    });
    root.querySelector(`#kz-${tur}-sil`)?.classList.toggle("aktif", silgi);
  }
  // 3D çizim araç çubuğu: renk seçmek kalemi geri getirir.
  const ucRenk = root.querySelector<HTMLInputElement>("#kz-3d-renk");
  if (ucRenk) ucRenk.value = c;
  root.querySelectorAll<HTMLElement>("#kz-3d-palet .kz-renk").forEach((b) => {
    b.classList.toggle("aktif", (b.dataset.renk ?? "").toLowerCase() === c.toLowerCase());
  });
  if (silgiKapat && cizimde) {
    cizimSilgi = false;
    root.querySelector("#kz-3d-kalem")?.classList.add("aktif");
    root.querySelector("#kz-3d-silgi")?.classList.remove("aktif");
  }
}

function duzenle(root: HTMLElement, tur: Tur): void {
  const tuval = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-tuval`);
  if (!tuval) return;
  paletCiz(root, tur);
  atlasTuvalGuncelle(tuval, hedef(tur));
  rehberTazele(root, tur);
  rozetGuncelle(root, tur);
  bolgeRozetleri(root, tur);
  if (tur === "pelerin") renkAyarla(root, renk, false);

  let ciziyor = false;
  let sonX = -1;
  let sonY = -1;

  const uygula = (x: number, y: number): void => {
    const p = hedef(tur);
    const deger = silgi ? "" : renk;
    if (sonX >= 0 && sonY >= 0) cizgiBoya(p, sonX, sonY, x, y, deger);
    else p[y * KOZ_G + x] = deger;
    sonX = x;
    sonY = y;
    tazele(root, tur);
  };

  tuval.addEventListener("contextmenu", (e) => e.preventDefault());
  tuval.addEventListener("pointerdown", (e) => {
    if (secili !== tur) {
      secili = tur;
      secimiUygula(root);
    }
    ciziyor = true;
    sonX = -1;
    sonY = -1;
    try {
      tuval.setPointerCapture(e.pointerId);
    } catch {
      /* pencere kapanmış olabilir */
    }
    const n = pikselXY(e, tuval);
    if (n) uygula(n.x, n.y);
  });
  tuval.addEventListener("pointermove", (e) => {
    const n = pikselXY(e, tuval);
    const b = n ? bolgeBul(tur, n.x, n.y) : null;
    if ((vurgular.get(tur) ?? null)?.id !== (b?.id ?? null)) {
      vurgular.set(tur, b);
      rehberTazele(root, tur);
    }
    if (!n || !ciziyor) return;
    uygula(n.x, n.y);
  });
  const birak = (): void => {
    ciziyor = false;
    sonX = -1;
    sonY = -1;
  };
  tuval.addEventListener("pointerup", birak);
  tuval.addEventListener("pointercancel", birak);
  tuval.addEventListener("pointerleave", () => {
    if (ciziyor) return;
    if (vurgular.get(tur)) {
      vurgular.set(tur, null);
      rehberTazele(root, tur);
    }
  });

  root.querySelector<HTMLInputElement>(`#kz-${tur}-renk`)?.addEventListener("input", (e) => {
    const hedefRenk = (e.target as HTMLInputElement).value;
    renkAyarla(root, hedefRenk);
  });

  root.querySelector(`#kz-${tur}-sil`)?.addEventListener("click", () => {
    silgi = !silgi;
    renkAyarla(root, renk, false);
    toast(silgi ? "Silgi açık — çizerek silersin." : "Kalem açık.");
  });

  root.querySelector(`#kz-${tur}-temizle`)?.addEventListener("click", () => {
    const p = hedef(tur);
    for (let i = 0; i < p.length; i++) p[i] = "";
    tazele(root, tur);
    toast(`${tur === "pelerin" ? "Pelerin" : "Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`);
  });

  root.querySelector(`#kz-${tur}-3d`)?.addEventListener("click", () => {
    // Aynı kozmetikte 3D moddaysak düğme "2D'ye geç" olarak çalışır.
    if (cizimde && secili === tur) {
      cizimModu(root, false);
      requestAnimationFrame(() => {
        root.querySelector(`#kz-${tur}-kart`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }
    cizimModu(root, true, tur);
    root.querySelector("#kz-oniz3d")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  root.querySelector(`#kz-${tur}-kaydet`)?.addEventListener("click", () => void kaydet(root, tur));
  root.querySelector(`#kz-${tur}-kaldir`)?.addEventListener("click", () => {
    const p = hedef(tur);
    for (let i = 0; i < p.length; i++) p[i] = "";
    tazele(root, tur);
    void kaydet(root, tur);
  });

  const dosya = root.querySelector<HTMLInputElement>(`#kz-${tur}-dosya`);
  dosya?.addEventListener("change", () => {
    const f = dosya.files?.[0];
    if (f) void fotograftan(root, tur, f);
    dosya.value = "";
  });
}

/** Atlas bölgelerini listeleyen rozetler (üst/alt şeritleri de görünür kılar). */
function bolgeRozetleri(root: HTMLElement, tur: Tur): void {
  const kutu = root.querySelector<HTMLElement>(`#kz-${tur}-bolgeler`);
  if (!kutu) return;
  kutu.innerHTML = bolgeler(tur)
    .map((b) => `<button class="kz-bolge-rozet" data-bolge="${b.id}" title="Atlasta ${b.ad} yüzü">${b.ad}</button>`)
    .join("");
  kutu.querySelectorAll<HTMLButtonElement>("[data-bolge]").forEach((d) => {
    const b = bolgeler(tur).find((x) => x.id === d.dataset.bolge) ?? null;
    const vurgula = (acik: boolean): void => {
      vurgular.set(tur, acik ? b : null);
      rehberTazele(root, tur);
    };
    d.addEventListener("pointerenter", () => vurgula(true));
    d.addEventListener("pointerleave", () => vurgula(false));
  });
}

// ---------------------------------------------------------------- 3D çizim

/** 3D çizim modunu aç/kapat (hedef verilirse o kozmetiğe geç). */
function cizimModu(root: HTMLElement, acik: boolean, tur?: Tur): void {
  if (acik && tur) secili = tur;
  cizimde = acik;
  cizimSilgi = false;
  if (!acik) oyuncuGizli = false;
  if (!acik) dondurmeModu = false;
  const sahne = sahneGetir();
  sahne.etkilesimKapali = acik && !dondurmeModu;
  sahne.izgaraGoster(acik);
  sahne.oyuncuGoster(!oyuncuGizli);
  root.querySelector("#kz-sayfa")?.classList.toggle("cizim3d", acik);
  root.querySelector("#kz-oniz3d")?.classList.toggle("cizim", acik);
  const arac = root.querySelector<HTMLElement>("#kz-cizim-arac");
  if (arac) arac.hidden = !acik;
  const oyuncuBtn = root.querySelector<HTMLElement>("#kz-3d-oyuncu");
  if (oyuncuBtn) oyuncuBtn.innerHTML = `${icon("user")} ${oyuncuGizli ? "Oyuncuyu göster" : "Oyuncuyu gizle"}`;
  root.querySelector("#kz-3d-kalem")?.classList.toggle("aktif", acik && !cizimSilgi);
  root.querySelector("#kz-3d-silgi")?.classList.toggle("aktif", acik && cizimSilgi);
  root.querySelector("#kz-3d-dondur")?.classList.toggle("aktif", acik && dondurmeModu);
  const alt = root.querySelector<HTMLElement>("#kz-sahne-alt");
  if (alt) {
    alt.textContent = acik
      ? (dondurmeModu
        ? "Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş"
        : "Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")
      : "Sürükle: döndür · Tekerlek: yakınlaş";
  }
  secimiUygula(root);
  // Canvas boyutu CSS ile değişti → renderer'ı yeni ölçüye getir.
  requestAnimationFrame(() => sahne.boyutGuncelle());
}

function cizimDinleyicileri(root: HTMLElement): void {
  // Etkin/pasif yazımı: yeni launcher'da tek komut; eski sürümde tasarım
  // localStorage'a yedeklenip dosya kaldırılır (tekrar açınca geri yazılır).
  const aktifYaz = async (kök: HTMLElement, tur: Tur, acik: boolean): Promise<void> => {
    const tasarim = hedef(tur);
    const anahtar = `yikim:kozmetik:${tur}:yedek`;
    // KAPATIRKEN: tasarım HER DURUMDA yedeklenir (bellekte + localStorage).
    // Eski launcher `cmd_kozmetik_aktif` bilmiyor → dosya boşaltılıyor; geri
    // açarken bu yedek yeniden yazılıyor. Yedek yoksa eskiden "kapatınca bir
    // daha açılmıyor" oluyordu; artık bellekteki tasarım kaynak kabul edilir.
    if (!acik && !atlasBosMu(tasarim)) {
      try {
        localStorage.setItem(anahtar, JSON.stringify(tasarim));
      } catch {
        /* kota dolu — bellek yedeği yine duruyor */
      }
    }
    try {
      await invoke("cmd_kozmetik_aktif", { [tur]: acik });
      return;
    } catch {
      /* eski exe: aşağıdaki dosya yedeği yolu devreye girer */
    }
    if (!acik) {
      await kozKaydet(tur, bosAtlas());
      return;
    }
    // GERİ AÇMA: localStorage yedeği bellekteki tasarımdan önce gelir
    // (sayfa yenilendiyse bellek boş/şablondur, gerçek çizim yedektedir).
    let geri: Piksel[] = [];
    try {
      const ham = localStorage.getItem(anahtar);
      const d = ham ? (JSON.parse(ham) as Piksel[]) : null;
      if (Array.isArray(d) && d.length === ATLAS_PIKSEL) geri = d;
    } catch {
      geri = [];
    }
    if (!geri.length && !atlasBosMu(tasarim)) geri = tasarim.slice();
    // Hiç çizim yoksa yazacak bir şey de yok: anahtar açık kalır, hata verilmez.
    if (!geri.length) return;
    await kozKaydet(tur, geri);
    tasarim.splice(0, tasarim.length, ...geri);
    tazele(kök, tur);
  };

  const canvas = root.querySelector<HTMLCanvasElement>("#kz-sahne");
  if (!canvas) return;
  const sahne = sahneGetir();
  let ciziyor = false;

  const boya = (e: PointerEvent): void => {
    const n = sahne.kozmetikNoktasi(e, secili);
    if (!n || n.x < 0 || n.y < 0 || n.x >= KOZ_G || n.y >= KOZ_Y) return;
    const p = hedef(secili);
    const deger = cizimSilgi ? "" : renk;
    const i = n.y * KOZ_G + n.x;
    if (p[i] === deger) return;
    p[i] = deger;
    tazele(root, secili);
  };

  canvas.addEventListener("contextmenu", (e) => {
    if (cizimde) e.preventDefault();
  });
  canvas.addEventListener("pointerdown", (e) => {
    if (!cizimde || dondurmeModu) return;
    // Sol tık boyar; sağ tık sahneye kalır → 3D çizimde döndürme.
    if (e.pointerType === "mouse" && e.button !== 0) return;
    ciziyor = true;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      /* pencere kapanmış olabilir */
    }
    boya(e);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (cizimde && ciziyor) boya(e);
  });
  const birak = (): void => {
    ciziyor = false;
  };
  canvas.addEventListener("pointerup", birak);
  canvas.addEventListener("pointercancel", birak);

  root.querySelectorAll<HTMLElement>("[data-secim]").forEach((b) => {
    b.addEventListener("click", () => {
      secili = (b.dataset.secim as Tur) ?? "pelerin";
      secimiUygula(root);
    });
  });

  // 3D araç çubuğu renk seçicisi (palet + serbest renk).
  root.querySelector<HTMLInputElement>("#kz-3d-renk")?.addEventListener("input", (e) => {
    renkAyarla(root, (e.target as HTMLInputElement).value);
  });

  // Özel pelerin / elitra oyunda etkin mi? Kapalıyken vanilla görünüm kullanılır.
  const anahtarlar: [string, Tur][] = [["#kz-pelerin-aktif", "pelerin"], ["#kz-kanat-aktif", "kanat"]];
  for (const [secici, tur] of anahtarlar) {
    root.querySelector<HTMLInputElement>(secici)?.addEventListener("change", (e) => {
      const girdi = e.target as HTMLInputElement;
      const acik = girdi.checked;
      aktifYazYerel(tur, acik);
      void (async () => {
        try {
          await aktifYaz(root, tur, acik);
          toast(
            tur === "pelerin"
              ? (acik ? "Özel pelerin açık — oyunda kendi pelerin görünür." : "Özel pelerin kapalı — oyunda Minecraft pelerini görünür.")
              : (acik ? "Özel elitra açık — oyunda kendi elitran görünür." : "Özel elitra kapalı — oyunda Minecraft elitrası görünür."),
          );
        } catch (hata) {
          girdi.checked = !acik;
          aktifYazYerel(tur, !acik);
          toast(String(hata), "err");
        }
      })();
    });
  }

  root.querySelector("#kz-yon")?.addEventListener("click", () => {
    arkadan = !arkadan;
    yonuUygula(root);
  });

  root.querySelector("#kz-zum-arti")?.addEventListener("click", () => sahne.zoomAyarla(sahne.zoomAl() * 0.85));
  root.querySelector("#kz-zum-eksi")?.addEventListener("click", () => sahne.zoomAyarla(sahne.zoomAl() * 1.18));
  root.querySelector("#kz-zum-sigdir")?.addEventListener("click", () => sahne.zoomAyarla(2.75));

  root.querySelector("#kz-3d-kalem")?.addEventListener("click", () => {
    cizimSilgi = false;
    dondurmeModu = false;
    sahne.etkilesimKapali = cizimde;
    root.querySelector("#kz-3d-kalem")?.classList.add("aktif");
    root.querySelector("#kz-3d-silgi")?.classList.remove("aktif");
    root.querySelector("#kz-3d-dondur")?.classList.remove("aktif");
  });
  root.querySelector("#kz-3d-silgi")?.addEventListener("click", () => {
    cizimSilgi = true;
    dondurmeModu = false;
    sahne.etkilesimKapali = cizimde;
    root.querySelector("#kz-3d-silgi")?.classList.add("aktif");
    root.querySelector("#kz-3d-kalem")?.classList.remove("aktif");
    root.querySelector("#kz-3d-dondur")?.classList.remove("aktif");
  });
  root.querySelector("#kz-3d-dondur")?.addEventListener("click", () => {
    dondurmeModu = !dondurmeModu;
    sahne.etkilesimKapali = cizimde && !dondurmeModu;
    const b = root.querySelector<HTMLElement>("#kz-3d-dondur");
    b?.classList.toggle("aktif", dondurmeModu);
    const alt = root.querySelector<HTMLElement>("#kz-sahne-alt");
    if (alt) {
      alt.textContent = dondurmeModu
        ? "Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş"
        : "Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş";
    }
  });
  root.querySelector("#kz-3d-oyuncu")?.addEventListener("click", () => {
    const b = root.querySelector<HTMLElement>("#kz-3d-oyuncu");
    oyuncuGizli = !oyuncuGizli;
    sahne.oyuncuGoster(!oyuncuGizli);
    if (b) b.innerHTML = `${icon("user")} ${oyuncuGizli ? "Oyuncuyu göster" : "Oyuncuyu gizle"}`;
  });
  root.querySelector("#kz-3d-2d")?.addEventListener("click", () => {
    const tur = secili;
    cizimModu(root, false);
    requestAnimationFrame(() => {
      root.querySelector(`#kz-${tur}-kart`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

/** Ön/arka bakışı uygula (kozmetikler sırtta; varsayılan arkadan 3/4). */
function yonuUygula(root: HTMLElement): void {
  sahneGetir().bakisaAyarla(arkadan ? 2.5 : 0, arkadan ? 0.12 : 0.02);
  const b = root.querySelector<HTMLElement>("#kz-yon");
  if (b) b.textContent = arkadan ? "Önden gör" : "Arkadan gör";
}

// ---------------------------------------------------------------- fotoğraf / pafta

const hexKisa = (n: number): string => n.toString(16).padStart(2, "0");

const al = (p: Piksel[], x: number, y: number): Piksel => p[y * KOZ_G + x] ?? "";
const yaz = (p: Piksel[], x: number, y: number, deger: Piksel): void => {
  if (x < 0 || x >= KOZ_G || y < 0 || y >= KOZ_Y) return;
  p[y * KOZ_G + x] = deger;
};

/** Ana yüzün desenini KARŞI yüze aynala (ön → arka).
 *
 *  Yan/üst/alt yüzler BİLEREK boş bırakılır: eskiden buraları kenar
 *  piksellerinden türetiliyordu ve taşan lekeler oyunda kötü görünüyordu.
 *  Kullanıcı isterse 3D modunda o yüzleri kendi boyar. */
function karsiYuzuAynala(p: Piksel[], ana: KozBolge, karsi: KozBolge): void {
  for (let y = 0; y < ana.h; y++) {
    for (let x = 0; x < ana.w; x++) {
      yaz(p, karsi.x + (ana.w - 1 - x), karsi.y + y, al(p, ana.x + x, ana.y + y));
    }
  }
}

/** Tasarımın kenar piksellerini yan/üst/alt şeritlere kopyalar ("piksel devamı").
 *
 *  Bu şeritler vanilla kutunun yan yüzleridir: 3B'de görünürler. Boş
 *  bırakılınca pelerinin/elitranın yanı ve özellikle ALT kenarı delik
 *  görünüyordu. Elytrada şeritler 2 piksel (kalınlık 2), pelerinde 1. */
function kenarlariDoldur(p: Piksel[], tur: Tur): void {
  const dis = disBolge(tur);
  const k = KOZ_KUTU[tur];
  const { u, v, d } = k;
  const oku = (x: number, y: number): Piksel => p[y * KOZ_G + x] ?? "";
  // "Dış" panel artık ARKADAN GÖRÜNEN yüz (u+2d+w, v+d). Bu yüzün sol sütunu
  // karakterin SOL yanına, sağ sütunu SAĞ yanına denk gelir — ön panelin
  // tersine (orada sol sütun sağ yana gider).
  for (let y = 0; y < dis.h; y++) {
    const sol = oku(dis.x, dis.y + y);
    const sag = oku(dis.x + dis.w - 1, dis.y + y);
    for (let i = 0; i < d; i++) {
      yaz(p, u + d + k.w + i, v + d + y, sol); // sol yan şerit
      yaz(p, u + i, v + d + y, sag);           // sağ yan şerit
    }
  }
  // üst / alt şeritler (dış panelin ilk ve son satırı)
  for (let x = 0; x < dis.w; x++) {
    const ust = oku(dis.x + x, dis.y);
    const alt = oku(dis.x + x, dis.y + dis.h - 1);
    for (let i = 0; i < d; i++) {
      yaz(p, u + d + x, v + i, ust);
      yaz(p, u + d + k.w + x, v + i, alt);
    }
  }
}

/** ESKİ LAUNCHER UYUMU — atlas öncesi exe yalnız TASARIM panelini bilir. */
const ESKI_BOY: Record<Tur, number> = { pelerin: 160, kanat: 200 };

/** Atlastan dış yüzün 10×16 / 10×20 listesini çıkar (eski exe'ye gönderilir). */
function eskiTasarim(tur: Tur, kaynak: Piksel[] = hedef(tur)): Piksel[] {
  const b = disBolge(tur);
  const cikti: Piksel[] = [];
  for (let y = 0; y < b.h; y++) {
    for (let x = 0; x < b.w; x++) {
      // Eski exe tasarımı (1,1) paneline BİREBİR yazar, (12,1)'e aynasını
      // koyar — yani bizim "dış" panelimizin tam kendisini bekler.
      cikti.push(kaynak[(b.y + y) * KOZ_G + b.x + x] ?? "");
    }
  }
  return cikti;
}

/** Eski exe'nin döndürdüğü tasarım listesini atlasta dış yüze yerleştir. */
function eskiTasarimiAtlasa(liste: string[], tur: Tur): Piksel[] {
  const p = bosAtlas();
  const dis = disBolge(tur);
  for (let y = 0; y < dis.h; y++) {
    for (let x = 0; x < dis.w; x++) {
      // Eski exe'nin döndürdüğü liste dış yüzün birebir kendisidir.
      yaz(p, dis.x + x, dis.y + y, liste[y * dis.w + x] ?? "");
    }
  }
  karsiYuzuAynala(p, dis, icBolge(tur));
  // Kenar şeritleri de yeniden doldurulur: eski exe yalnız tasarım panelini
  // döndürdüğü için sayfadan çıkıp gelince yanlar/alt boş kalıyordu
  // ("kaydettim, bazı yerler silindi").
  kenarlariDoldur(p, tur);
  return p;
}

/** Kaydet: tam atlas gönderilir; eski exe piksel sayısını reddederse
 *  yalnız tasarım paneli yollanır (kayıt yine de çalışsın). */
async function kozKaydet(
  tur: Tur,
  liste: Piksel[],
): Promise<{ kurulum: number; yuklendi: boolean; hata: string }> {
  try {
    return (await invoke("cmd_kozmetik_kaydet", { [tur]: liste })) as {
      kurulum: number;
      yuklendi: boolean;
      hata: string;
    };
  } catch (e) {
    if (!/piksel bekleniyordu/i.test(String(e))) throw e;
    return (await invoke("cmd_kozmetik_kaydet", { [tur]: eskiTasarim(tur, liste) })) as {
      kurulum: number;
      yuklendi: boolean;
      hata: string;
    };
  }
}

/** Özel kozmetik oyunda açık mı? (Eski exe bu durumu saklamaz → localStorage) */
function aktifOku(tur: Tur): boolean | null {
  try {
    const v = localStorage.getItem(`yikim:kozmetik:${tur}:aktif`);
    return v === null ? null : v === "1";
  } catch {
    return null;
  }
}

function aktifYazYerel(tur: Tur, acik: boolean): void {
  try {
    localStorage.setItem(`yikim:kozmetik:${tur}:aktif`, acik ? "1" : "0");
  } catch {
    /* kota dolu — sunucu/exe durumu yine geçerli */
  }
}

async function fotograftan(root: HTMLElement, tur: Tur, f: File): Promise<void> {
  try {
    const url = URL.createObjectURL(f);
    const resim = await new Promise<HTMLImageElement>((cozum, red) => {
      const i = new Image();
      i.onload = () => cozum(i);
      i.onerror = () => red(new Error("görsel okunamadı"));
      i.src = url;
    });
    URL.revokeObjectURL(url);

    // HAZIR PAFTA: 2:1 oranlı her görsel vanilla 64×32 atlasıdır.
    const oran = resim.width / Math.max(1, resim.height);
    const paftaMi = Math.abs(oran - 2) < 0.02 && resim.height >= 32;
    if (paftaMi) {
      const ara = document.createElement("canvas");
      ara.width = KOZ_G;
      ara.height = KOZ_Y;
      const g = ara.getContext("2d", { willReadFrequently: true });
      if (!g) throw new Error("tuval yok");
      g.imageSmoothingEnabled = false;
      g.drawImage(resim, 0, 0, KOZ_G, KOZ_Y);
      const yeni = atlasOku(g);
      if (atlasBosMu(yeni)) throw new Error("pafta boş görünüyor");
      const p = hedef(tur);
      for (let i = 0; i < ATLAS_PIKSEL; i++) p[i] = yeni[i];
      tazele(root, tur);
      toast("Pafta okundu — 64×32 atlas yüklendi.");
      return;
    }

    // DÜZ FOTOĞRAF: ana yüze sığdır, kalan yüzleri türet.
    const p = hedef(tur);
    const ana = disBolge(tur);
    const ara = document.createElement("canvas");
    ara.width = ana.w;
    ara.height = ana.h;
    const g = ara.getContext("2d", { willReadFrequently: true });
    if (!g) throw new Error("tuval yok");
    const oranHedef = ana.w / ana.h;
    let kw = resim.width;
    let kh = kw / oranHedef;
    if (kh > resim.height) {
      kh = resim.height;
      kw = kh * oranHedef;
    }
    const kx = (resim.width - kw) / 2;
    const ky = (resim.height - kh) / 2;
    g.drawImage(resim, kx, ky, kw, kh, 0, 0, ana.w, ana.h);
    const veri = g.getImageData(0, 0, ana.w, ana.h).data;
    for (let y = 0; y < ana.h; y++) {
      for (let x = 0; x < ana.w; x++) {
        const i = y * ana.w + x;
        const a = veri[i * 4 + 3];
        yaz(p, ana.x + x, ana.y + y, a < 24 ? "" : `#${hexKisa(veri[i * 4])}${hexKisa(veri[i * 4 + 1])}${hexKisa(veri[i * 4 + 2])}`);
      }
    }
    // Kenarlar: yan şeritler + üst/alt şeritler tasarımın kenar pikseliyle
    // devam ettirilir. Oyunda bu şeritler görünür; boş kalınca pelerinin/
    // elitranın yanı ve ALT tarafı delik görünüyordu.
    kenarlariDoldur(p, tur);
    // Fotoğraf DIŞ (oyunda görünen) yüze oturur; iç astara aynası yazılır.
    karsiYuzuAynala(p, ana, icBolge(tur));
    tazele(root, tur);
    toast("Fotoğraf atlasa indirgendi — istersen fırçayla düzeltebilirsin.");
  } catch (e) {
    toast(String(e), "err");
  }
}

// ---------------------------------------------------------------- kayıt

async function kaydet(root: HTMLElement, tur: Tur): Promise<void> {
  const p = hedef(tur);
  const dolu = !atlasBosMu(p);
  const ad = tur === "pelerin" ? "Pelerin" : "Elitra";
  const btn = root.querySelector<HTMLButtonElement>(`#kz-${tur}-kaydet`);
  const eskiIcerik = btn ? btn.innerHTML : "";
  // Jeton: art arda kayıtta eski zamanlayıcı yeni durumu ezmesin.
  const jeton = `${Date.now()}-${Math.random()}`;
  const durum = (metin: string, sinif: "tamam" | "hata" | "bekliyor"): void => {
    if (!btn) return;
    btn.dataset.jeton = jeton;
    btn.classList.remove("tamam", "hata", "bekliyor");
    btn.classList.add(sinif);
    btn.textContent = metin;
    btn.disabled = true;
  };
  const geriAl = (gecikme: number): void => {
    if (!btn) return;
    window.setTimeout(() => {
      // bu arada yeni bir kayıt başladıysa dokunma
      if (btn.dataset.jeton !== jeton) return;
      btn.innerHTML = eskiIcerik;
      btn.disabled = false;
      btn.classList.remove("tamam", "hata", "bekliyor");
    }, gecikme);
  };
  durum("Kaydediliyor…", "bekliyor");
  try {
    const sonuc = await kozKaydet(tur, p.slice());
    // Tasarımın localStorage kopyası: sayfadan çıkıp gelince (ya da exe
    // dosyayı okuyamazsa) çizim aynen geri gelir.
    try {
      if (dolu) localStorage.setItem(`yikim:kozmetik:${tur}:yedek`, JSON.stringify(p));
      else localStorage.removeItem(`yikim:kozmetik:${tur}:yedek`);
    } catch {
      /* kota dolu */
    }
    if (tur === "pelerin") pelerinKayitli = dolu;
    else kanatKayitli = dolu;
    rozetGuncelle(root, tur);
    durum("Kaydedildi ✓", "tamam");
    geriAl(1800);
    if (!dolu) {
      toast(`${ad} kaldırıldı — oyunda ${tur === "kanat" ? "normal elitra" : "görünmeyecek"}.`);
      return;
    }
    if (sonuc.yuklendi) toast(`${ad} kaydedildi — oyunda ve diğer oyuncularda görünecek.`);
    else toast(`${ad} kaydedildi (yerel). Sunucu: ${kacis(sonuc.hata || "ulaşılamadı")}`);
  } catch (e) {
    durum("Kaydedilemedi", "hata");
    geriAl(2200);
    toast(String(e), "err");
  }
}
