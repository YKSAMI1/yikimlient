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

import { currentAccount, fileSrc, icon, invoke, navigate, toast } from "../main";
import {
  discordAc,
  guvenlikOzetYukle,
  guvenlikYetkiTazele,
  hesapDogrulandi,
  hesapKozmetikSerbest,
  hesapRolYol,
  type KozmetikErisim,
} from "../guvenlik";
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
  /** Gömülü varsayılan YIKIM tasarımı (kayıt yoksa gösterilir). */
  pelerin_varsayilan?: string[] | null;
  kanat_varsayilan?: string[] | null;
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
/** 3D çizimde piksel matrisi (ızgara) görünür mü — düğmeyle aç/kapa. */
let matrisAcik = true;

/** 2D araç: kalem · silgi · kova (doldur) · damla (renk al). */
type KzArac = "kalem" | "silgi" | "kova" | "damla";
let arac: KzArac = "kalem";
/** Atlas yakınlaştırması: 1 doku pikseli kaç ekran pikseli. */
const KZ_YUMLAR = [4, 8, 12, 16];
let kzyum = 8;
/** Son kullanılan renkler (yeni başta) — tüm sayfalarda ortak. */
const SON_RENK_ANAHTAR = "yikim:renk:son";
const GERI_SINIR = 40;
const gecmis: Record<Tur, string[][]> = { pelerin: [], kanat: [] };
const gelecek: Record<Tur, string[][]> = { pelerin: [], kanat: [] };
let sonRenkler: string[] = sonRenkleriOku();

function sonRenkleriOku(): string[] {
  try {
    const ham = localStorage.getItem(SON_RENK_ANAHTAR);
    const d = ham ? (JSON.parse(ham) as unknown) : null;
    return Array.isArray(d) ? d.filter((x) => typeof x === "string").slice(0, 12) : [];
  } catch {
    return [];
  }
}

function sonRengeEkle(c: string): void {
  const kucuk = c.toLowerCase();
  if (sonRenkler[0]?.toLowerCase() === kucuk) return;
  sonRenkler = [c, ...sonRenkler.filter((x) => x.toLowerCase() !== kucuk)].slice(0, 12);
  try {
    localStorage.setItem(SON_RENK_ANAHTAR, JSON.stringify(sonRenkler));
  } catch {
    /* kota dolu — bu oturumda bellekte kalır */
  }
}

/** "#RRGGBB" ya da "RRGGBB" → "#rrggbb"; geçersizse null. */
function hexGecerli(ham: string): string | null {
  const t = `#${ham.trim().replace(/^#+/, "")}`;
  return /^#[0-9a-fA-F]{6}$/.test(t) ? t.toLowerCase() : null;
}
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
  kozKok = root;
  pelerin = bosAtlas();
  kanat = elitraSablonu();
  pelerinKayitli = false;
  kanatKayitli = false;
  secili = "pelerin";
  renk = "#ff8a3d";
  silgi = false;
  arac = "kalem";
  gecmis.pelerin.length = 0;
  gecmis.kanat.length = 0;
  gelecek.pelerin.length = 0;
  gelecek.kanat.length = 0;
  cizimde = false;
  cizimSilgi = false;
  oyuncuGizli = false;
  arkadan = true;
  // HD durumu ÖNCEKİ ziyaretten taşınmasın; `yukle` diskteki dosyadan
  // yeniden belirler. Silme isteği de her açılışta sıfırdır.
  fotografModu.pelerin = false;
  fotografModu.kanat = false;
  fotografYol.pelerin = null;
  fotografYol.kanat = null;
  silmeIstegi.pelerin = false;
  silmeIstegi.kanat = false;
  pelerinOnizleme = null;
  kanatOnizleme = null;
  vurgular.clear();
  root.innerHTML = iskelet();
  kozmetikKisitliCiz(root);
  // Yerel bilgiyle ANINDA karar verilir, sonra sunucudaki rol/doğrulama
  // durumu tazelenir (rol yeni verildiyse kısıtlı görünüm kalkar).
  void yetkiTazele(root);
  void yukle(root);
}

/** Kozmetik sayfasındaki erişim düzeyi. */
type Erisim = "tam" | "dogrulanmamis" | "rol_yok";

/** Yerel bilgiden erişim düzeyi: bilgi yoksa KISITLI (güvenli taraf). */
function kozmetikErisim(): Erisim {
  const acc = currentAccount();
  if (!acc) return "dogrulanmamis";
  if (!hesapDogrulandi(acc.id) || !hesapKozmetikSerbest(acc.id)) return "dogrulanmamis";
  if (!hesapRolYol(acc.id)) return "rol_yok";
  return "tam";
}

/**
 * Kısıtlı görünüm (tasarım §9 / Yol Silindiri kuralı).
 *
 *  - Doğrulanmamış hesap: editör ve fotoğraf yükleme YOK. Yalnız 3B önizleme,
 *    pelerin/elitra seçimi ve aç/kapa anahtarları kalır.
 *  - Doğrulandı ama "Yol Silindiri" rolü yok: kendi tasarımını çizemez ve
 *    katalogdaki başka kayıtları seçemez — yalnız varsayılan YIKIM pelerin/
 *    elitrasını açıp kapatır.
 *
 * Sunucu yetkisi (`guvenlikYetkiTazele`) sonraki tazelemede gelince görünüm
 * güncellenir — bu yüzden her açılışta sunucu sorulur.
 */
function kozmetikKisitliCiz(root: HTMLElement, erisimOverride?: Erisim): void {
  const erisim = erisimOverride ?? kozmetikErisim();
  const kisitli = erisim !== "tam";
  const sayfa = root.querySelector<HTMLElement>("#kz-sayfa");
  sayfa?.classList.toggle("kz-kisitli", kisitli);
  // Sağ üstteki çizim ipucu kısıtlı görünümde yanıltıcı olmasın.
  const ipucu = root.querySelector<HTMLElement>("#kz-sekme-ipucu");
  if (ipucu) {
    if (kisitli) ipucu.textContent = "Bu sayfada yalnız önizleme ve aç/kapa var";
    else ipucu.textContent = "Atlasta ya da 3D modelin üstünde çiz";
  }
  root.querySelector("#kz-kisitli")?.remove();
  if (erisim === "tam") return;

  const bas = root.querySelector(".page-header");
  if (!bas) return;
  const kutu = document.createElement("div");
  kutu.id = "kz-kisitli";
  kutu.className = "kz-kilit" + (erisim === "rol_yok" ? " kz-kilit-rol" : "");
  if (erisim === "dogrulanmamis") {
    kutu.innerHTML = `<span class="gv-carpi">✕</span>
      <div><b>Kozmetikler kilitli</b>
      <small>Pelerinini/elitranı çizebilmen ve fotoğraf yükleyebilmen için hesabını doğrula.
         Bu sayfada yalnız önizleme, pelerin/elitra seçimi ve aç/kapa anahtarları var.</small></div>
      <button class="btn primary sm" id="kz-kisitli-eski">Doğrula</button>`;
  } else {
    kutu.innerHTML = `<span aria-hidden="true">🔒</span>
      <div><b>Kendi tasarımını çizmek için "Yol Silindiri" rolü gerekir</b>
      <small>Discord sunucusundaki YIKIM etiketini/rolünü al; rolü taşıdığın sürece kendi pelerin ve
         elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin. Etiketi bırakırsan çizme izni
         otomatik geri alınır — bu sayfada yalnız aç/kapa kalır.</small></div>
      <button class="btn ghost sm" id="kz-kisitli-eski">Discord'a katıl ↗</button>`;
  }
  bas.after(kutu);
  root.querySelector<HTMLButtonElement>("#kz-kisitli-eski")?.addEventListener("click", () => {
    if (erisim === "dogrulanmamis") navigate("settings");
    else discordAc();
  });
}

/** Sunucudan güncel rol/doğrulama durumunu çek ve kısıtlı görünümü tazele. */
async function yetkiTazele(root: HTMLElement): Promise<void> {
  await guvenlikOzetYukle(true);
  const taze: KozmetikErisim | null = await guvenlikYetkiTazele();
  const erisim: Erisim = !taze
    ? kozmetikErisim()
    : !taze.dogrulandi
      ? "dogrulanmamis"
      : taze.cizimSerbest
        ? "tam"
        : "rol_yok";
  kozmetikKisitliCiz(root, erisim);
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

      <div class="kz-sekmeler" role="tablist" aria-label="Düzenlenecek kozmetik">
        <button class="kz-sekme aktif" data-secim="pelerin" role="tab">
          ${icon("shirt")} <span>Pelerin</span>
          <em class="kz-sekme-durum" id="kz-pelerin-sekme-durum"></em>
        </button>
        <button class="kz-sekme" data-secim="kanat" role="tab">
          ${icon("sparkle")} <span>Elitra</span>
          <em class="kz-sekme-durum" id="kz-kanat-sekme-durum"></em>
        </button>
        <div class="kz-sekme-sag" id="kz-sekme-ipucu">Atlasta ya da 3D modelin üstünde çiz</div>
      </div>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d" id="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${icon("user")} Karakterde görünüm</span>
            <button class="btn ghost sm" id="kz-yon" title="Ön / arka bakış">Önden gör</button>
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
            <div class="kz-cizim-satir">
              <span class="kz-etiket">Araç</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-kalem" title="Modelin üstüne boya">${icon("brush")} Kalem</button>
                <button class="seg-btn" id="kz-3d-silgi" title="Modelin üstünde sil">${icon("eraser")} Silgi</button>
                <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${icon("undo")} Döndür</button>
              </span>
              <span class="kz-etiket">Görünüm</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-matris" title="Piksel matrisini (ızgara) aç/kapat">${icon("grid")} Matris</button>
                <button class="seg-btn" id="kz-3d-oyuncu" title="Karakter gövdesini göster/gizle">${icon("user")} Oyuncuyu gizle</button>
              </span>
              <button class="btn ghost sm kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${icon("image")} 2D'ye geç</button>
            </div>
            <div class="kz-cizim-satir">
              <span class="kz-etiket">Fırça rengi</span>
              <span class="kz-3d-renk">
                <input type="color" id="kz-3d-renk" value="#ff8a3d" title="Fırça rengi" />
                <code class="kz-renk-kod" id="kz-3d-renk-kod">#FF8A3D</code>
                <span class="kz-3d-palet" id="kz-3d-palet"></span>
              </span>
            </div>
            <p class="kz-ipucu kz-cizim-ipucu">Kalem: sol tık boyar · Silgi: siler · Döndür: sol tık çevirir ·
              Ctrl+Z geri · Ctrl+Shift+Z ileri</p>
          </div>
          <p class="kz-ipucu kz-oniz3d-alt" id="kz-sahne-alt">Sürükle: döndür · Tekerlek: yakınlaş</p>
        </aside>

        <div class="kz-kartlar" id="kz-kartlar">
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
  const yumlar = KZ_YUMLAR.map(
    (z) => `<button class="seg-btn ${z === kzyum ? "aktif" : ""}" data-kzyum="${z}" title="${z}× yakınlaştır">${z}×</button>`,
  ).join("");
  return `
    <section class="kz-kart" id="kz-${tur}-kart" data-tur="${tur}">
      <div class="kz-kart-ust">
        <h3>${icon(simge)} ${baslik}</h3>
        <span class="kz-rozet" id="kz-${tur}-durum"></span>
      </div>

      <div class="kz-calisma">
        <div class="kz-tuval-kolon">
          <div class="kz-tuval-kaydir">
            <div class="kz-tuval-sar" id="kz-${tur}-sar">
              <canvas class="kz-tuval" id="kz-${tur}-tuval" width="${KOZ_G}" height="${KOZ_Y}"
                aria-label="${alan} atlası — 64×32 piksel"></canvas>
              <canvas class="kz-rehber" id="kz-${tur}-rehber"
                width="${KOZ_G * REHBER_OLC}" height="${KOZ_Y * REHBER_OLC}"></canvas>
            </div>
          </div>
          <div class="kz-tuval-alt">
            <span class="kz-etiket">Yakınlaştır</span>
            <span class="seg-grup">${yumlar}</span>
            <span class="kz-ipucu kz-kart-ipucu">${ipucu}</span>
          </div>
          <div class="kz-bolgeler" id="kz-${tur}-bolgeler"></div>
        </div>

        <div class="kz-arac-panel">
          <div class="kz-arac-grup" id="kz-${tur}-araclar" role="group" aria-label="Araçlar">
            <button class="kz-arac-btn aktif" data-kzarac="kalem" title="Kalem">${icon("brush")}</button>
            <button class="kz-arac-btn" data-kzarac="silgi" title="Silgi (çizerek siler)">${icon("eraser")}</button>
            <button class="kz-arac-btn" data-kzarac="kova" title="Kova — bitişik aynı renk alanını doldur">${icon("bucket")}</button>
            <button class="kz-arac-btn" data-kzarac="damla" title="Damlalık — tuvallin rengini al">${icon("picker")}</button>
            <span class="kz-arac-ayrac"></span>
            <button class="kz-arac-btn" id="kz-${tur}-geri" title="Geri al">${icon("undo")}</button>
            <button class="kz-arac-btn" id="kz-${tur}-ileri" title="İleri al">${icon("redo")}</button>
          </div>

          <div class="kz-blok">
            <div class="kz-blok-ust">
              <span class="kz-etiket">Renk</span>
              <code class="kz-renk-kod" id="kz-${tur}-renk-kod">#FF8A3D</code>
            </div>
            <div class="kz-renk-sec">
              <input type="color" id="kz-${tur}-renk" value="#ff8a3d" title="Renk seç" />
              <input class="input kz-hex" id="kz-${tur}-hex" value="#FF8A3D" maxlength="7"
                spellcheck="false" aria-label="Renk kodu (hex)" />
            </div>
          </div>

          <div class="kz-blok">
            <span class="kz-etiket">Son kullandıkların</span>
            <div class="kz-son-renkler" id="kz-${tur}-son"></div>
          </div>

          <div class="kz-blok">
            <span class="kz-etiket">Hazır palet</span>
            <div class="kz-araclar" id="kz-${tur}-palet"></div>
          </div>
        </div>
      </div>

      <div class="kz-foto" id="kz-${tur}-foto" hidden>
        <canvas class="kz-foto-img" id="kz-${tur}-foto-img" aria-label="Yüklenen fotoğraf"></canvas>
        <div class="kz-foto-metin">
          <b>Fotoğraf modu</b>
          <p>Bu kozmetik yüklediğin fotoğraftan oluşturuldu ve <b>fotoğrafın kendi kalitesinde</b> görünür.
             Fotoğrafın üzerine çizim yapılamaz — yeni bir fotoğraf yüklediğinde eskisinin yerine geçer.</p>
          <p class="kz-foto-ipucu">Farklı bir bölümü kullanmak istersen tekrar <b>Fotoğraf / Pafta</b> ile yükle.</p>
        </div>
      </div>

      <div class="kz-alt">
        <button class="btn" id="kz-${tur}-3d" data-ciz3d="${tur}"
          title="Doğrudan 3D modelin her yüzüne boya">${icon("box")} 3D Çiz</button>
        <label class="btn" for="kz-${tur}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${icon("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${tur}-dosya" accept="image/*" style="display:none" />
        <span class="kz-alt-bos"></span>
        <button class="btn" id="kz-${tur}-temizle" title="Atlasın tamamını temizle">${icon("trash")} Temizle</button>
        <button class="btn danger" id="kz-${tur}-kaldir" title="Kayıtlı kozmetiği kaldır">Kaldır</button>
        <button class="btn primary" id="kz-${tur}-kaydet">${icon("check")} Kaydet</button>
      </div>
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
  // Gömülü varsayılan YIKIM tasarımı: hiç kayıt yoksa editör/önizleme boş
  // tuval yerine bunu gösterir. "Kayıtlı" sayılmaz → Kaydet düğmesi yanıltmaz.
  const varsayilanPelerin = gecerli(durum.pelerin_varsayilan, "pelerin");
  const varsayilanKanat = gecerli(durum.kanat_varsayilan, "kanat");

  const pelerinDolu = !!kayitliPelerin && !atlasBosMu(kayitliPelerin);
  pelerin = pelerinDolu
    ? kayitliPelerin!
    : (yedekOku("pelerin") ?? varsayilanPelerin ?? kayitliPelerin ?? bosAtlas());
  // Elitra kayıtlı değilse varsayılan YIKIM elitrasıyla başla — "boş kanat"
  // yerine oyunda görünen tasarımın aynısı düzenlenir.
  const kanatDolu = !!kayitliKanat && !atlasBosMu(kayitliKanat);
  kanat = kanatDolu
    ? kayitliKanat!
    : (yedekOku("kanat") ?? varsayilanKanat ?? kayitliKanat ?? elitraSablonu());
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
  // Diskteki dosya 64×32'den büyükse o kozmetik FOTOĞRAF modundadır.
  fotografDurumlari(root, durum);
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
  // Fotoğraf modunda doku piksel tuvalinden değil, diskteki HD PNG'den gelir.
  if (secili === "pelerin") {
    sahne.kanatTuval(null);
    if (fotografModu.pelerin && fotografYol.pelerin) {
      sahne.pelerinTuval(null);
      void sahne.pelerin({ url: fileSrc(fotografYol.pelerin) });
    } else {
      sahne.pelerinTuval(pelerinOnizleme);
    }
  } else {
    sahne.pelerinTuval(null);
    if (fotografModu.kanat && fotografYol.kanat) {
      sahne.kanatTuval(null);
      void sahne.kanat({ url: fileSrc(fotografYol.kanat) });
    } else {
      sahne.kanatTuval(kanatOnizleme);
    }
  }

  root.querySelectorAll<HTMLElement>("[data-secim]").forEach((b) => {
    b.classList.toggle("aktif", b.dataset.secim === secili);
    b.setAttribute("aria-selected", b.dataset.secim === secili ? "true" : "false");
  });
  for (const tur of TURLER) {
    const k = root.querySelector<HTMLElement>(`#kz-${tur}-kart`);
    if (!k) continue;
    // Tek çalışma alanı: yalnız seçili kozmetik görünür.
    k.hidden = secili !== tur;
    k.classList.toggle("secili", secili === tur);
  }
  root.querySelectorAll<HTMLElement>("[data-ciz3d]").forEach((b) => {
    const buTur = b.dataset.ciz3d === secili;
    b.classList.toggle("aktif", cizimde && buTur);
    b.innerHTML = cizimde && buTur ? `${icon("image")} 2D'ye geç` : `${icon("box")} 3D Çiz`;
  });
}

/** 2D tuval + kılavuz + 3D dokusunu birlikte tazele. */
function tazele(root: HTMLElement, tur: Tur): void {
  // Atlas yeniden dolduysa "sil" isteği geçersizdir (Temizle'den sonra boyama).
  if (!atlasBosMu(hedef(tur))) silmeIstegi[tur] = false;
  const tuval = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-tuval`);
  if (tuval) atlasTuvalGuncelle(tuval, hedef(tur));
  rehberTazele(root, tur);
  rozetGuncelle(root, tur);
  onizlemeTazele();
}

function rozetGuncelle(root: HTMLElement, tur: Tur): void {
  // Fotoğraf (HD) modunda tasarım piksel atlasında değil diskteki dosyada →
  // rozet boş görünüp "silindi" izlenimi vermesin.
  const dolu = fotografModu[tur] || !atlasBosMu(hedef(tur));
  const kayitli = tur === "pelerin" ? pelerinKayitli : kanatKayitli;
  const durum = root.querySelector<HTMLElement>(`#kz-${tur}-durum`);
  if (durum) durum.textContent = kayitli && dolu ? "KAYITLI" : "";
  const sekme = root.querySelector<HTMLElement>(`#kz-${tur}-sekme-durum`);
  if (sekme) sekme.textContent = kayitli && dolu ? "kayıtlı" : "";
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

/** Renk seçimi: kalemi geri getirir; hex kutusu, kod etiketi, palet ve
 *  "son kullandıkların" göstergelerini eşitler. */
function renkAyarla(root: HTMLElement, c: string, kalemKapat = true): void {
  const gecerli = hexGecerli(c) ?? renk;
  renk = gecerli;
  if (kalemKapat) {
    silgi = false;
    arac = "kalem";
    sonRengeEkle(gecerli);
  }
  const ayni = (a: string | undefined): boolean => (a ?? "").toLowerCase() === gecerli.toLowerCase();
  for (const tur of TURLER) {
    const girdi = root.querySelector<HTMLInputElement>(`#kz-${tur}-renk`);
    if (girdi) girdi.value = gecerli;
    const hex = root.querySelector<HTMLInputElement>(`#kz-${tur}-hex`);
    if (hex) hex.value = gecerli.toUpperCase();
    const kod = root.querySelector<HTMLElement>(`#kz-${tur}-renk-kod`);
    if (kod) kod.textContent = gecerli.toUpperCase();
    root.querySelectorAll<HTMLElement>(`#kz-${tur}-palet .kz-renk`).forEach((b) => {
      b.classList.toggle("aktif", ayni(b.dataset.renk));
    });
    root.querySelectorAll<HTMLElement>(`#kz-${tur}-son .kz-renk`).forEach((b) => {
      b.classList.toggle("aktif", ayni(b.dataset.renk));
    });
  }
  // 3D çizim araç çubuğu: renk seçmek kalemi geri getirir.
  const ucRenk = root.querySelector<HTMLInputElement>("#kz-3d-renk");
  if (ucRenk) ucRenk.value = gecerli;
  const ucKod = root.querySelector<HTMLElement>("#kz-3d-renk-kod");
  if (ucKod) ucKod.textContent = gecerli.toUpperCase();
  root.querySelectorAll<HTMLElement>("#kz-3d-palet .kz-renk").forEach((b) => {
    b.classList.toggle("aktif", ayni(b.dataset.renk));
  });
  if (kalemKapat && cizimde) cizimSilgi = false;
  aracDugmeleri(root);
  sonRenklerCiz(root);
}

function duzenle(root: HTMLElement, tur: Tur): void {
  const tuval = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-tuval`);
  if (!tuval) return;
  paletCiz(root, tur);
  atlasTuvalGuncelle(tuval, hedef(tur));
  rehberTazele(root, tur);
  rozetGuncelle(root, tur);
  bolgeRozetleri(root, tur);
  sonRenklerCiz(root);
  zoomUygula(root);
  aracDugmeleri(root);
  if (tur === "pelerin") renkAyarla(root, renk, false);

  let ciziyor = false;
  let sonX = -1;
  let sonY = -1;

  /** Bir vuruşun başında tam kopya — geri al bununla çalışır. */
  const gecmiseYaz = (): void => {
    gecmis[tur].push(hedef(tur).slice());
    if (gecmis[tur].length > GERI_SINIR) gecmis[tur].shift();
    gelecek[tur].length = 0;
  };

  const uygula = (x: number, y: number, ilk: boolean): void => {
    const p = hedef(tur);
    if (arac === "damla") {
      const v = p[y * KOZ_G + x];
      if (v) renkAyarla(root, v, true);
      return;
    }
    if (arac === "kova") {
      if (!ilk) return; // kova sürüklemede tekrar doldurmaz
      gecmiseYaz();
      kovaDoldur(p, x, y, renk);
      tazele(root, tur);
      return;
    }
    const deger = arac === "silgi" ? "" : renk;
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
      /* pencere kapanmis olabilir */
    }
    const n = pikselXY(e, tuval);
    if (!n) return;
    if (arac !== "damla") gecmiseYaz();
    uygula(n.x, n.y, true);
  });
  tuval.addEventListener("pointermove", (e) => {
    const n = pikselXY(e, tuval);
    const b = n ? bolgeBul(tur, n.x, n.y) : null;
    if ((vurgular.get(tur) ?? null)?.id !== (b?.id ?? null)) {
      vurgular.set(tur, b);
      rehberTazele(root, tur);
    }
    if (!n || !ciziyor) return;
    uygula(n.x, n.y, false);
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

  // Araç düğmeleri
  root.querySelectorAll<HTMLElement>(`#kz-${tur}-araclar [data-kzarac]`).forEach((b) => {
    b.addEventListener("click", () => aracSec(root, (b.dataset.kzarac as KzArac) ?? "kalem"));
  });

  // Geri / ileri
  root.querySelector(`#kz-${tur}-geri`)?.addEventListener("click", () => geriAl(root, tur));
  root.querySelector(`#kz-${tur}-ileri`)?.addEventListener("click", () => ileriAl(root, tur));

  // Serbest renk seçici
  root.querySelector<HTMLInputElement>(`#kz-${tur}-renk`)?.addEventListener("input", (e) => {
    renkAyarla(root, (e.target as HTMLInputElement).value);
  });

  // Hex kutusu: yazarken değil, bitirince (Enter / odak çıkışı) uygula.
  const hex = root.querySelector<HTMLInputElement>(`#kz-${tur}-hex`);
  const hexUygula = (): void => {
    if (!hex) return;
    const g = hexGecerli(hex.value);
    if (g) renkAyarla(root, g);
    else hex.value = renk.toUpperCase();
  };
  hex?.addEventListener("change", hexUygula);
  hex?.addEventListener("blur", hexUygula);
  hex?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      hexUygula();
    }
  });

  root.querySelector(`#kz-${tur}-temizle`)?.addEventListener("click", () => {
    gecmiseYaz();
    const p = hedef(tur);
    for (let i = 0; i < p.length; i++) p[i] = "";
    // "Temizle + Kaydet" bilinçli silmedir; kaydet() bunu ancak bu bayrakla yapar.
    silmeIstegi[tur] = true;
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
    if (fotografModu[tur]) {
      fotografModu[tur] = false;
      fotografYol[tur] = null;
      fotografGorunum(root, tur);
    }
    gecmiseYaz();
    const p = hedef(tur);
    for (let i = 0; i < p.length; i++) p[i] = "";
    // "Kaldır" açık silme isteğidir: dosya + sunucu kaydı silinir.
    silmeIstegi[tur] = true;
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

// ---------------------------------------------------------------- araçlar

/** Aracı seç (kalem/silgi/kova/damlalık) ve tüm düğmeleri eşitle. */
function aracSec(root: HTMLElement, yeni: KzArac): void {
  arac = yeni;
  silgi = yeni === "silgi";
  aracDugmeleri(root);
  if (yeni === "damla") toast("Damlalık: tuvallin bir pikseline tıkla, rengi alır.");
  else if (yeni === "kova") toast("Kova: bitişik aynı renk alanını seçili renkle doldurur.");
}

function aracDugmeleri(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>("[data-kzarac]").forEach((b) => {
    b.classList.toggle("aktif", b.dataset.kzarac === arac);
  });
  // 3D araç çubuğu aynı aracı izler (kalem / silgi).
  root.querySelector("#kz-3d-kalem")?.classList.toggle("aktif", cizimde && arac !== "silgi");
  root.querySelector("#kz-3d-silgi")?.classList.toggle("aktif", cizimde && arac === "silgi");
}

/** Bitişik aynı renkli alanı doldur (4 komşu). */
function kovaDoldur(p: Piksel[], x: number, y: number, deger: string): void {
  const hedefRenk = p[y * KOZ_G + x] ?? "";
  if (hedefRenk === deger) return;
  const yigin: number[] = [y * KOZ_G + x];
  while (yigin.length) {
    const i = yigin.pop() as number;
    if ((p[i] ?? "") !== hedefRenk) continue;
    p[i] = deger;
    const px = i % KOZ_G;
    const py = Math.floor(i / KOZ_G);
    if (px > 0) yigin.push(i - 1);
    if (px < KOZ_G - 1) yigin.push(i + 1);
    if (py > 0) yigin.push(i - KOZ_G);
    if (py < KOZ_Y - 1) yigin.push(i + KOZ_G);
  }
}

function geriAl(root: HTMLElement, tur: Tur): void {
  const onceki = gecmis[tur].pop();
  if (!onceki) {
    toast("Geri alınacak adım yok.");
    return;
  }
  gelecek[tur].push(hedef(tur).slice());
  hedef(tur).splice(0, hedef(tur).length, ...onceki);
  tazele(root, tur);
}

function ileriAl(root: HTMLElement, tur: Tur): void {
  const sonraki = gelecek[tur].pop();
  if (!sonraki) {
    toast("İleri alınacak adım yok.");
    return;
  }
  gecmis[tur].push(hedef(tur).slice());
  hedef(tur).splice(0, hedef(tur).length, ...sonraki);
  tazele(root, tur);
}

/** Atlas yakınlaştırmasını uygula (canvas CSS ölçüsü; dokusu 64×32 kalır). */
function zoomUygula(root: HTMLElement): void {
  for (const tur of TURLER) {
    const tuval = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-tuval`);
    const rehber = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-rehber`);
    const g = `${KOZ_G * kzyum}px`;
    const y = `${KOZ_Y * kzyum}px`;
    if (tuval) {
      tuval.style.width = g;
      tuval.style.height = y;
    }
    if (rehber) {
      rehber.style.width = g;
      rehber.style.height = y;
    }
  }
  root.querySelectorAll<HTMLElement>("[data-kzyum]").forEach((b) => {
    b.classList.toggle("aktif", Number(b.dataset.kzyum) === kzyum);
  });
}

/** "Son kullandıkların" şeridini iki kartta da tazele. */
function sonRenklerCiz(root: HTMLElement): void {
  for (const tur of TURLER) {
    const kutu = root.querySelector<HTMLElement>(`#kz-${tur}-son`);
    if (!kutu) continue;
    kutu.innerHTML = sonRenkler.length
      ? sonRenkler
          .map((r) => `<button class="kz-renk" data-renk="${r}" style="background:${r}" title="${r}" aria-label="${r}"></button>`)
          .join("")
      : `<span class="kz-bos-not">Henüz renk kullanmadın — bir renk seç, burada birikir.</span>`;
    kutu.querySelectorAll<HTMLButtonElement>(".kz-renk").forEach((b) => {
      b.addEventListener("click", () => renkAyarla(root, b.dataset.renk ?? "#ffffff"));
    });
  }
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
  sahne.izgaraGoster(acik && matrisAcik);
  // 3D çizimde elitra kanatları iki yana açık → ikinci kanada da rahat
  // boyanır. Karakterin kendi parçaları ayrılmaz (üstte aç/kapa düğmeleri var).
  sahne.kanatAyrik(acik);
  sahne.oyuncuGoster(!oyuncuGizli);
  root.querySelector("#kz-3d-matris")?.classList.toggle("aktif", acik && matrisAcik);
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
      // ESKİ LAUNCHER: etkinleştirme komutu yok. Piksel tasarımı dosyayı
      // boşaltarak kapatmak güvenli (localStorage yedeği var). HD fotoğrafta
      // ise dosyayı silmek geri dönüşsüzdür → hiç dokunma, kullanıcıyı uyar.
      if (fotografModu[tur]) {
        throw new Error("Bu launcher sürümü HD fotoğrafı kapatmayı desteklemiyor — launcher'ı güncelle.");
      }
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

  // Atlas yakınlaştırması (4×–16×): doku 64×32 kalır, sadece ekranda büyür.
  root.querySelectorAll<HTMLElement>("[data-kzyum]").forEach((b) => {
    b.addEventListener("click", () => {
      const z = Number(b.dataset.kzyum);
      if (!z) return;
      kzyum = z;
      zoomUygula(root);
    });
  });

  // Piksel matrisi (ızgara) aç/kapa — 3D çizimde her kozmetik için geçerli.
  root.querySelector("#kz-3d-matris")?.addEventListener("click", () => {
    matrisAcik = !matrisAcik;
    root.querySelector("#kz-3d-matris")?.classList.toggle("aktif", matrisAcik);
    sahne.izgaraGoster(matrisAcik);
    toast(matrisAcik ? "Matris açık — piksel sınırları görünür." : "Matris kapalı.");
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
    arac = "kalem";
    silgi = false;
    sahne.etkilesimKapali = cizimde;
    root.querySelector("#kz-3d-kalem")?.classList.add("aktif");
    root.querySelector("#kz-3d-silgi")?.classList.remove("aktif");
    root.querySelector("#kz-3d-dondur")?.classList.remove("aktif");
  });
  root.querySelector("#kz-3d-silgi")?.addEventListener("click", () => {
    cizimSilgi = true;
    dondurmeModu = false;
    arac = "silgi";
    silgi = true;
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

// ---------------------------------------------------------------- fotoğraf (HD)
//
// Fotoğraf artık 10×16'ya sıkıştırılmıyor: hedef oranında bir ÇERÇEVE seçtirilir
// (sitede profil fotoğrafı seçer gibi) ve sonuç, fotoğrafın kendi
// çözünürlüğünde bir doku olarak üretilir.
//
// Doku boyutu 64×32 ızgarasının TAM KATIDIR (64N×32N). Vanilla UV'ler bu
// ızgaraya göre normalize olduğu için oyun ve mod HD dokuyu aynı şekilde
// örter — ekstra dönüşüm gerekmez.
//
// Fotoğraftan gelen kozmetik "fotoğraf modu"dur: üzerine çizim yapılamaz
// (pikseller fotoğraftan gelir), yalnız yenisini yükleyebilir ya da
// kaldırabilirsin. Elle çizilen 64×32 kozmetikler eskisi gibi düzenlenir.

/** Fotoğraftan üretilmiş kozmetik mi? (çizim devre dışı) */
const fotografModu: Record<Tur, boolean> = { pelerin: false, kanat: false };
/** Fotoğraf modundaki kozmetiğin diskteki PNG yolu. */
const fotografYol: Record<Tur, string | null> = { pelerin: null, kanat: null };
/**
 * Açık silme isteği ("Kaldır" ya da "Temizle + Kaydet").
 *
 * `false` iken boş atlas gönderilmez: diskte kayıtlı bir dosya varsa o dosya
 * KORUNUR. Böylece HD fotoğraf modu henüz algılanmadan "Kaydet"e basmak ya da
 * sayfa yeniden açılırken boş atlas yakalamak pelerini/elitrayı silmiyor.
 */
const silmeIstegi: Record<Tur, boolean> = { pelerin: false, kanat: false };

/** Dosyayı <img> olarak aç; hata olursa toast + null. */
function resimAc(f: File): Promise<HTMLImageElement | null> {
  return new Promise((coz) => {
    const url = URL.createObjectURL(f);
    const i = new Image();
    i.onload = () => {
      URL.revokeObjectURL(url);
      coz(i);
    };
    i.onerror = () => {
      URL.revokeObjectURL(url);
      toast("Görsel okunamadı", "err");
      coz(null);
    };
    i.src = url;
  });
}

/** Kaynak bölgeyi hedef boyuta indir.
 *
 *  `yumusak` açıkken KADEMELİ küçültme yapılır: 2000 piksel genişlikteki bir
 *  fotoğrafı tek adımda küçültmek kenarları testereye çeviriyordu. Yarıya
 *  indirerek (mipmap mantığı) sonuç çok daha temiz çıkıyor.
 *  `yumusak` kapalıyken komşu-piksel (nearest) kullanılır — pixel-art için. */
function ornekle(
  resim: HTMLImageElement | HTMLCanvasElement,
  sx: number,
  sy: number,
  sw: number,
  sh: number,
  w: number,
  h: number,
  yumusak: boolean,
): HTMLCanvasElement {
  const hedefTuval = document.createElement("canvas");
  hedefTuval.width = Math.max(1, Math.round(w));
  hedefTuval.height = Math.max(1, Math.round(h));
  const g = hedefTuval.getContext("2d", { willReadFrequently: true });
  if (!g) throw new Error("tuval yok");
  g.imageSmoothingEnabled = yumusak;
  g.imageSmoothingQuality = "high";
  if (!yumusak) {
    g.drawImage(resim, sx, sy, sw, sh, 0, 0, hedefTuval.width, hedefTuval.height);
    return hedefTuval;
  }
  let kaynak: HTMLImageElement | HTMLCanvasElement = resim;
  let kx = sx;
  let ky = sy;
  let kw = sw;
  let kh = sh;
  let gw = Math.round(sw);
  let gh = Math.round(sh);
  while (gw > hedefTuval.width * 2 && gh > hedefTuval.height * 2) {
    gw = Math.max(hedefTuval.width, Math.round(gw / 2));
    gh = Math.max(hedefTuval.height, Math.round(gh / 2));
    const ara = document.createElement("canvas");
    ara.width = gw;
    ara.height = gh;
    const ag = ara.getContext("2d");
    if (!ag) break;
    ag.imageSmoothingEnabled = true;
    ag.imageSmoothingQuality = "high";
    ag.drawImage(kaynak, kx, ky, kw, kh, 0, 0, gw, gh);
    kaynak = ara;
    kx = 0;
    ky = 0;
    kw = gw;
    kh = gh;
  }
  g.drawImage(kaynak, kx, ky, kw, kh, 0, 0, hedefTuval.width, hedefTuval.height);
  return hedefTuval;
}

/** Seçim çerçevesinin resim koordinatlarındaki hâli. */
interface KirpSecim {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Fotoğraftan HD pafta üret (64N×32N).
 *
 *  `duz` false → vanilla yerleşim: dış yüz + iç astar aynası + yan/üst/alt
 *  şeritleri. `duz` true → yalnız seçilen dikdörtgen (diğer yüzler boş). */
function hdPafta(
  resim: HTMLImageElement | HTMLCanvasElement,
  sec: KirpSecim,
  tur: Tur,
  duz: boolean,
  hd: boolean,
  ayna = false,
  don = 0,
): HTMLCanvasElement {
  const ana = disBolge(tur);
  const ic = icBolge(tur);
  const k = KOZ_KUTU[tur];
  // HD açık: seçimin genişliğine göre 1..16 kat doku. Kapalı: 64×32 (piksel).
  const N = hd ? Math.max(1, Math.min(16, Math.round(sec.w / ana.w))) : 1;
  const t = document.createElement("canvas");
  t.width = KOZ_G * N;
  t.height = KOZ_Y * N;
  const g = t.getContext("2d", { willReadFrequently: true });
  if (!g) throw new Error("tuval yok");

  const dx = ana.x * N;
  const dy = ana.y * N;
  const dw = ana.w * N;
  const dh = ana.h * N;
  g.imageSmoothingEnabled = false;
  // HD açık → yumuşak (kaliteli) ölçekleme; kapalı → keskin piksel örnekleme.
  const kirpilmis = ornekle(resim, sec.x, sec.y, sec.w, sec.h, dw, dh, hd);
  // ÇERÇEVE İÇİ DÖNÜŞÜM: ayna ve 90° döndürme SEÇİLEN DİKDÖRTGENİN içinde
  // uygulanır. Döndürünce fotoğraf dikdörtgeni doldurmaz → dışarıda kalan
  // alanlar oluşur. O alanlar:
  //   pelerin → opak SİYAH kumaş
  //   elitra  → SAYDAM (vanilla silüet maskesi + oyun)
  let kaynak: HTMLCanvasElement = kirpilmis;
  if (ayna || don !== 0) {
    const t = document.createElement("canvas");
    t.width = dw;
    t.height = dh;
    const ig = t.getContext("2d");
    if (ig) {
      ig.imageSmoothingEnabled = !hd;
      ig.translate(dw / 2, dh / 2);
      ig.rotate((don * Math.PI) / 180);
      ig.scale(ayna ? -1 : 1, 1);
      ig.drawImage(kirpilmis, -dw / 2, -dh / 2);
      kaynak = t;
    }
  }
  if (tur === "pelerin") {
    g.fillStyle = "#000000";
    g.fillRect(dx, dy, dw, dh);
  }
  // PELERİN: oyun görünen yüzü (nz) YATAY AYNALAYARAK örer → doku şimdiden
  // aynalanır, oyunda düz görünür. (Elitrada böyle bir ayna yok.)
  if (tur === "pelerin") {
    g.save();
    g.translate(dx + dw, dy);
    g.scale(-1, 1);
    g.drawImage(kaynak, 0, 0);
    g.restore();
  } else {
    g.drawImage(kaynak, dx, dy);
  }
  if (duz) return t;

  // İç astar: dış yüzün yatay aynası (gövdeye bakan yüz).
  g.save();
  g.translate(ic.x * N + dw, ic.y * N);
  g.scale(-1, 1);
  g.drawImage(t, dx, dy, dw, dh, 0, 0, dw, dh);
  g.restore();

  const s = N; // şerit kalınlığı (1 taban pikseli)
  // Yan şeritler: dış yüzün sol ve sağ sütunu.
  g.drawImage(t, dx, dy, s, dh, (k.u + k.d + k.w) * N, (k.v + k.d) * N, k.d * N, dh);
  g.drawImage(t, dx + dw - s, dy, s, dh, k.u * N, (k.v + k.d) * N, k.d * N, dh);
  // Üst/alt şeritler: dış yüzün ilk ve son satırı.
  g.drawImage(t, dx, dy, dw, s, (k.u + k.d) * N, k.v * N, dw, k.d * N);
  g.drawImage(t, dx, dy + dh - s, dw, s, (k.u + k.d + k.w) * N, k.v * N, dw, k.d * N);
  return t;
}

/** Tuvali base64 PNG'ye çevir (Tauri komutuna verilecek). */
function tuvalB64(t: HTMLCanvasElement): Promise<string> {
  return new Promise((coz, red) => {
    t.toBlob((b) => {
      if (!b) {
        red(new Error("PNG üretilemedi"));
        return;
      }
      const o = new FileReader();
      o.onload = () => coz(String(o.result).split(",")[1] ?? "");
      o.onerror = () => red(new Error("PNG okunamadı"));
      o.readAsDataURL(b);
    }, "image/png");
  });
}

/** Fotoğraf modunu ekranda uygula: çizim alanını gizle, fotoğrafı göster. */
function fotografGorunum(root: HTMLElement, tur: Tur): void {
  const acik = fotografModu[tur];
  const kart = root.querySelector<HTMLElement>(`#kz-${tur}-kart`);
  if (!kart) return;
  kart.classList.toggle("foto", acik);
  const calisma = kart.querySelector<HTMLElement>(".kz-calisma");
  if (calisma) calisma.hidden = acik;
  const blok = root.querySelector<HTMLElement>(`#kz-${tur}-foto`);
  if (blok) blok.hidden = !acik;
  // Küçük önizleme: HD atlasın YALNIZ oyunda görünen yüzü kırpılıp çizilir
  // (tüm atlas yerine gerçek fotoğraf görünsün).
  const on = root.querySelector<HTMLCanvasElement>(`#kz-${tur}-foto-img`);
  const yol = fotografYol[tur];
  if (on && yol) {
    const img = new Image();
    img.onload = () => {
      const N = Math.max(1, Math.round(img.naturalWidth / KOZ_G));
      const b = disBolge(tur);
      on.width = b.w * 12;
      on.height = b.h * 12;
      const g = on.getContext("2d");
      if (!g) return;
      g.clearRect(0, 0, on.width, on.height);
      g.imageSmoothingEnabled = true;
      g.imageSmoothingQuality = "high";
      if (tur === "pelerin") {
        // Doku oyunun aynası için ters yazıldı → önizlemede geri çevrilir.
        g.save();
        g.translate(on.width, 0);
        g.scale(-1, 1);
      }
      g.drawImage(img, b.x * N, b.y * N, b.w * N, b.h * N, 0, 0, on.width, on.height);
      if (tur === "pelerin") g.restore();
    };
    img.src = fileSrc(yol);
  } else if (on) {
    on.getContext("2d")?.clearRect(0, 0, on.width, on.height);
  }
  for (const secici of ["#kz-" + tur + "-3d", "#kz-" + tur + "-temizle", "#kz-" + tur + "-kaydet"]) {
    const b = root.querySelector<HTMLButtonElement>(secici);
    if (b) b.hidden = acik;
  }
  const rozet = root.querySelector<HTMLElement>(`#kz-${tur}-durum`);
  if (rozet) rozet.textContent = acik ? "fotoğraf (HD)" : "";
  if (secili === tur) secimiUygula(root);
}

/** Sayfa açılırken: kayıtlı dosya 64×32'den büyükse fotoğraf modu. */
function fotografDurumlari(root: HTMLElement, durum: KozmetikDurum): void {
  const kontrol = (tur: Tur, yol: string | null | undefined, liste: string[] | null | undefined): void => {
    // 64×32 atlas okunabildiyse dosya piksel tasarımıdır → fotoğraf modu YOK.
    if (Array.isArray(liste) && liste.length === ATLAS_PIKSEL) {
      fotografModu[tur] = false;
      fotografYol[tur] = null;
      fotografGorunum(root, tur);
      return;
    }
    if (!yol) {
      fotografModu[tur] = false;
      fotografYol[tur] = null;
      fotografGorunum(root, tur);
      return;
    }
    // Atlas yok ama dosya var → HD fotoğraf. Bunu GÖRSEL YÜKLENMESİNİ BEKLEMEDEN
    // uygula: aksi hâlde ilk birkaç yüz milisaniyede "Kaydet" görünür kalıyor ve
    // boş atlas gönderip dosyayı siliyordu ("kaydete bastım pelerin silindi").
    fotografModu[tur] = true;
    fotografYol[tur] = String(yol);
    fotografGorunum(root, tur);
    // Boyutu doğrula: dosya gerçekten büyük mü? Hata olsa bile KORUMA sürer.
    const dosya = String(yol);
    const img = new Image();
    img.onload = () => {
      if (fotografYol[tur] !== dosya) return; // bu arada başka dosya seçildi
      const hd = img.naturalWidth > KOZ_G || img.naturalHeight > KOZ_Y;
      fotografModu[tur] = hd;
      fotografYol[tur] = hd ? dosya : null;
      fotografGorunum(root, tur);
    };
    img.onerror = () => {
      // Dosya diskte duruyor ama webview okuyamadı: silme yolunu AÇMA.
      if (fotografYol[tur] === dosya) fotografModu[tur] = true;
    };
    img.src = fileSrc(dosya);
  };
  kontrol("pelerin", durum.pelerin_dosya, durum.pelerin);
  kontrol("kanat", durum.kanat_dosya, durum.kanat);
}

/** Fotoğrafı HD paftaya çevirip kaydet. */
async function fotografUygula(
  root: HTMLElement,
  tur: Tur,
  resim: HTMLImageElement | HTMLCanvasElement,
  sec: KirpSecim,
  duz: boolean,
  hd: boolean,
  ayna = false,
  don = 0,
): Promise<void> {
  silmeIstegi[tur] = false;
  const pafta = hdPafta(resim, sec, tur, duz, hd, ayna, don);
  const b64 = await tuvalB64(pafta);
  let sonuc: { kurulum: number; yuklendi: boolean; hata: string; genislik: number; yukseklik: number };
  try {
    sonuc = (await invoke("cmd_kozmetik_fotograf", { tur, png: b64, duz })) as typeof sonuc;
  } catch (e) {
    // ESKİ LAUNCHER (exe güncellenmemiş): HD komutu yok → 64×32'ye indirip
    // normal piksel kaydına düş. Böylece özellik bozuk görünmez.
    const kucuk = document.createElement("canvas");
    kucuk.width = KOZ_G;
    kucuk.height = KOZ_Y;
    const kg = kucuk.getContext("2d", { willReadFrequently: true });
    if (!kg) throw e;
    kg.imageSmoothingEnabled = true;
    kg.imageSmoothingQuality = "high";
    kg.drawImage(pafta, 0, 0, KOZ_G, KOZ_Y);
    const yeni = atlasOku(kg);
    const p0 = hedef(tur);
    gecmis[tur].push(p0.slice());
    if (gecmis[tur].length > GERI_SINIR) gecmis[tur].shift();
    gelecek[tur].length = 0;
    for (let i = 0; i < ATLAS_PIKSEL; i++) p0[i] = yeni[i];
    tazele(root, tur);
    await kaydet(root, tur);
    toast("Launcher eski sürümde — fotoğraf 64×32 olarak kaydedildi. HD için launcher'ı güncelle.", "err");
    return;
  }
  // Elle çizim verisi artık geçersiz: fotoğraf modu tamamen dosyadan gelir.
  const p = hedef(tur);
  for (let i = 0; i < p.length; i++) p[i] = "";
  localStorage.removeItem(`yikim:kozmetik:${tur}:yedek`);
  fotografModu[tur] = true;
  fotografYol[tur] = tur === "pelerin" ? "pelerin.png" : "elytra.png";
  // Dosyanın gerçek yolu launcher'ın uygulama klasöründe; taze veriyle al.
  try {
    const guncel = (await invoke("cmd_kozmetik_oku")) as KozmetikDurum;
    const yol = tur === "pelerin" ? guncel.pelerin_dosya : guncel.kanat_dosya;
    if (yol) fotografYol[tur] = String(yol);
  } catch {
    /* yol alınamazsa sahne zaten yeniden çizilmez */
  }
  if (tur === "pelerin") pelerinKayitli = true;
  else kanatKayitli = true;

  if (!hd) {
    // HD KAPALI = eski davranış: fotoğraf 64×32 piksel dokusuna iner ve
    // üzerine yeniden çizilebilir (fotoğraf modu kapanır).
    const kg = pafta.getContext("2d", { willReadFrequently: true });
    if (kg) {
      const yeni = atlasOku(kg);
      const p2 = hedef(tur);
      gecmis[tur].push(p2.slice());
      if (gecmis[tur].length > GERI_SINIR) gecmis[tur].shift();
      gelecek[tur].length = 0;
      for (let i = 0; i < ATLAS_PIKSEL; i++) p2[i] = yeni[i];
      // ELİTRA: vanilya kanat silüetinin dışı SAYDAM kalmalı. Kırpma önizlemesi
      // (ve HD kaydındaki `elytra_maskele`) bu maskeyi uyguluyor; 64×32 piksel
      // yolunda unutulunca oyunda köşeler dolu dikdörtgen olarak görünüyor,
      // önizleme ise kanat biçimini gösteriyordu → WYSIWYG bozuluyordu.
      if (tur === "kanat") {
        for (let i = 0; i < ATLAS_PIKSEL; i++) {
          if (!ELITRA_SABLON[i]) p2[i] = "";
        }
      }
    }
    fotografModu[tur] = false;
    fotografYol[tur] = null;
    tazele(root, tur);
    fotografGorunum(root, tur);
    await kaydet(root, tur);
    return;
  }

  tazele(root, tur);
  fotografGorunum(root, tur);
  const ek = sonuc.yuklendi ? "" : " (sunucuya yüklenemedi; yalnız sende görünür)";
  toast(`Fotoğraf ${sonuc.genislik}×${sonuc.yukseklik} HD doku olarak kaydedildi${ek}`);
}

/** Kırpma penceresi: fotoğrafın üzerine hedef oranlı bir çerçeve koyar. */
function kirpPenceresi(root: HTMLElement, tur: Tur, resim: HTMLImageElement): void {
  root.querySelector("#kz-kirp")?.remove();
  const ana = disBolge(tur);
  const oran = ana.w / ana.h; // genişlik / yükseklik
  const turAd = tur === "pelerin" ? "Pelerin" : "Elitra";
  let duz = false;
  // "HD görünüm" varsayılan AÇIK: fotoğraf yumuşak/HD ölçeklenir.
  // Kapatılırsa eski keskin (pixel-art) örnekleme kullanılır.
  let hd = true;
  // AYNA (yatay ters) ve DÖNDÜRME (90° adımlar) — çerçevenin İÇİNDE uygulanır.
  let ayna = false;
  let don = 0; // derece — fareyle serbest döndürme tutamacından gelir

  const kat = document.createElement("div");
  kat.className = "kz-kirp";
  kat.id = "kz-kirp";
  kat.innerHTML = `
    <div class="kz-kirp-kart" role="dialog" aria-modal="true" aria-label="Fotoğrafı yerleştir">
      <div class="kz-kirp-bas">
        <div class="kz-kirp-basla">
          <b>${turAd} fotoğrafı</b>
          <span>Çerçeveyi sürükle · köşeden boyutlandır · tekerlekle yakınlaştır · üstteki tutamaçla döndür</span>
        </div>
        <button class="btn ghost sm" id="kz-kirp-kapat" title="Kapat (Esc)">${icon("close")}</button>
      </div>
      <div class="kz-kirp-govde">
        <canvas id="kz-kirp-c"></canvas>
        <div class="kz-kirp-yan">
          <span class="kz-etiket">Oyunda görünecek</span>
          <canvas id="kz-kirp-on" width="${ana.w}" height="${ana.h}"></canvas>
          <p class="kz-kirp-not" id="kz-kirp-boyut">—</p>
          <span class="kz-etiket">Şekil</span>
          <div class="kz-kirp-mod" id="kz-kirp-mod">
            <button class="seg-btn aktif" data-mod="normal">${turAd} şekli</button>
            <button class="seg-btn" data-mod="duz">Düz dikdörtgen</button>
          </div>
          <p class="kz-kirp-not" id="kz-kirp-mod-not"></p>
          <span class="kz-etiket">Ayarlama</span>
          <div class="kz-kirp-mod" id="kz-kirp-ayar">
            <button class="seg-btn" id="kz-kirp-ayna" title="Fotoğrafı yatay olarak ters çevir">Ayna</button>
            <button class="seg-btn" id="kz-kirp-don" title="Döndürmeyi sıfırla">0°</button>
          </div>
          <p class="kz-kirp-not" id="kz-kirp-ayar-not">Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.</p>
          <span class="kz-etiket">Kalite</span>
          <label class="kz-kirp-piksel"><input type="checkbox" id="kz-kirp-piksel" checked /> HD görünüm</label>
          <p class="kz-kirp-not">İşaretliyken fotoğraf HD dokusu olarak kaydedilir. Kapatırsan 64×32 piksel dokusuna iner ve üzerine yeniden çizebilirsin.</p>
        </div>
      </div>
      <div class="kz-kirp-alt">
        <span class="kz-kirp-bilgi" id="kz-kirp-bilgi"></span>
        <button class="btn" id="kz-kirp-iptal">İptal</button>
        <button class="btn primary" id="kz-kirp-uygula">${icon("check")} Uygula</button>
      </div>
    </div>`;
  root.appendChild(kat);

  const tuval = kat.querySelector<HTMLCanvasElement>("#kz-kirp-c")!;
  const onIzleme = kat.querySelector<HTMLCanvasElement>("#kz-kirp-on")!;
  const bilgi = kat.querySelector<HTMLElement>("#kz-kirp-bilgi");
  const boyutNot = kat.querySelector<HTMLElement>("#kz-kirp-boyut");
  const modNot = kat.querySelector<HTMLElement>("#kz-kirp-mod-not");

  const olcek = Math.min(620 / resim.width, 420 / resim.height, 1);
  tuval.width = Math.max(60, Math.round(resim.width * olcek));
  tuval.height = Math.max(60, Math.round(resim.height * olcek));
  const ekran = tuval.width / resim.width; // resim pikseli → tuval pikseli
  const g = tuval.getContext("2d");
  if (!g) throw new Error("tuval yok");

  const baslangic = (): KirpSecim => {
    let h = resim.height;
    let w = h * oran;
    if (w > resim.width) {
      w = resim.width;
      h = w / oran;
    }
    return { x: (resim.width - w) / 2, y: (resim.height - h) / 2, w, h };
  };
  let sec: KirpSecim = baslangic();

  const sinirla = (s: KirpSecim): KirpSecim => {
    const enAz = Math.max(4, resim.width / 60);
    let w = Math.min(Math.max(s.w, enAz), resim.width);
    let h = w / oran;
    if (h > resim.height) {
      h = resim.height;
      w = h * oran;
    }
    return {
      x: Math.min(Math.max(s.x, 0), Math.max(0, resim.width - w)),
      y: Math.min(Math.max(s.y, 0), Math.max(0, resim.height - h)),
      w,
      h,
    };
  };
  sec = sinirla(sec);

  /** Döndürme tutamacının tuval pikselindeki yeri (çizim + vuruş testi). */
  const tutamacKonum = (): { x: number; y: number } => {
    const kx = sec.x * ekran;
    const ky = sec.y * ekran;
    const kw = sec.w * ekran;
    const ust = ky - 26;
    return { x: kx + kw / 2, y: ust < 14 ? ky + 24 : ust };
  };

  const ciz = (): void => {
    g.clearRect(0, 0, tuval.width, tuval.height);
    g.imageSmoothingEnabled = true;
    g.imageSmoothingQuality = "high";
    g.drawImage(resim, 0, 0, tuval.width, tuval.height);
    const kx = sec.x * ekran;
    const ky = sec.y * ekran;
    const kw = sec.w * ekran;
    const kh = sec.h * ekran;
    g.fillStyle = "rgba(6,8,12,0.66)";
    g.fillRect(0, 0, tuval.width, ky);
    g.fillRect(0, ky + kh, tuval.width, Math.max(0, tuval.height - ky - kh));
    g.fillRect(0, ky, kx, kh);
    g.fillRect(kx + kw, ky, Math.max(0, tuval.width - kx - kw), kh);
    g.strokeStyle = "rgba(255,255,255,0.30)";
    g.lineWidth = 1;
    for (let i = 1; i < 3; i++) {
      g.beginPath();
      g.moveTo(kx + (kw * i) / 3, ky);
      g.lineTo(kx + (kw * i) / 3, ky + kh);
      g.stroke();
      g.beginPath();
      g.moveTo(kx, ky + (kh * i) / 3);
      g.lineTo(kx + kw, ky + (kh * i) / 3);
      g.stroke();
    }
    g.strokeStyle = "#ff8a3d";
    g.lineWidth = 2;
    g.strokeRect(kx + 1, ky + 1, Math.max(1, kw - 2), Math.max(1, kh - 2));
    g.fillStyle = "#ff8a3d";
    g.fillRect(kx + kw - 8, ky + kh - 8, 8, 8);

    // DÖNDÜRME TUTAMACI: çerçevenin üst ortasında yuvarlak; fareyle çevrilir.
    // Çerçeve üst kenara yapışıksa tutamaç tuvalin İÇİNE alınır (yoksa
    // ekran dışında kalıp tutulamıyordu).
    const th = tutamacKonum();
    const hx = th.x;
    const hy = th.y;
    g.strokeStyle = "#ff8a3d";
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(hx, ky);
    g.lineTo(hx, hy + 9);
    g.stroke();
    g.beginPath();
    g.arc(hx, hy, 9, 0, Math.PI * 2);
    g.fillStyle = "#12161e";
    g.fill();
    g.stroke();
    g.fillStyle = "#ff8a3d";
    g.font = "bold 11px sans-serif";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText("↻", hx, hy + 1);

    // "Oyunda görünecek" = KAYDEDİLECEK dokunun oyunda görünen yüzü (WYSIWYG):
    // atlas hdPafta() ile birebir üretilir, elitrada vanilla siluet maskesi
    // uygulanır, pelerinde oyunun aynası geri çevrilir. Böylece önizleme ile
    // kaydettikten sonraki görünüm aynı olur.
    const pafta = hdPafta(resim, sec, tur, duz, hd, ayna, don);
    const kN = pafta.width / KOZ_G;
    const yuz = disBolge(tur);
    const pw = yuz.w * kN;
    const ph = yuz.h * kN;
    const ara = document.createElement("canvas");
    ara.width = pw;
    ara.height = ph;
    const ag = ara.getContext("2d", { willReadFrequently: true });
    // HD: önizleme dokuyu 1:1 kullanır → oyundaki yumuşak görünüm.
    // Piksel: her doku pikseli 11 ekran pikseli (CSS genişliği 110px) → keskin.
    const onG = hd ? pw : yuz.w * 11;
    const onY = hd ? ph : yuz.h * 11;
    onIzleme.width = onG;
    onIzleme.height = onY;
    const og = onIzleme.getContext("2d");
    if (ag && og) {
      ag.imageSmoothingEnabled = false;
      ag.drawImage(pafta, yuz.x * kN, yuz.y * kN, pw, ph, 0, 0, pw, ph);
      if (tur === "kanat") {
        // Vanilla elitra saydamlığı: oyunda boş kalan piksel önizlemede de boş.
        const veri = ag.getImageData(0, 0, pw, ph);
        for (let y = 0; y < ph; y++) {
          for (let x = 0; x < pw; x++) {
            const ix = yuz.x + Math.floor(x / kN);
            const iy = yuz.y + Math.floor(y / kN);
            if (!ELITRA_SABLON[iy * KOZ_G + ix]) veri.data[(y * pw + x) * 4 + 3] = 0;
          }
        }
        ag.putImageData(veri, 0, 0);
      }
      og.clearRect(0, 0, onG, onY);
      og.imageSmoothingEnabled = false;
      if (tur === "pelerin") {
        // Doku oyunun aynası için ters yazılır → önizleme oyun görünümüne çevirir.
        og.save();
        og.translate(onG, 0);
        og.scale(-1, 1);
      }
      og.drawImage(ara, 0, 0, onG, onY);
      if (tur === "pelerin") og.restore();
    }
    // Tarayıcı ölçeklemesi: HD'de yumuşak (oyun gibi), pikselde keskin.
    onIzleme.style.imageRendering = hd ? "auto" : "pixelated";
    const N = kN;
    if (boyutNot) boyutNot.textContent = `Doku: ${KOZ_G * N}×${KOZ_Y * N} (kumaş ${ana.w * N}×${ana.h * N})`;
    if (bilgi) bilgi.textContent = `${Math.round(sec.w)}×${Math.round(sec.h)} px seçim`;
  };

  const konum = (e: PointerEvent): { x: number; y: number } => {
    const r = tuval.getBoundingClientRect();
    return {
      x: (((e.clientX - r.left) / Math.max(1, r.width)) * tuval.width) / ekran,
      y: (((e.clientY - r.top) / Math.max(1, r.height)) * tuval.height) / ekran,
    };
  };

  let tut: {
    tip: "tasi" | "boyut" | "don";
    px: number;
    py: number;
    sec: KirpSecim;
    aci?: number;
    don?: number;
  } | null = null;
  tuval.addEventListener("pointerdown", (e) => {
    const p = konum(e);
    const esik = 14 / ekran;
    // Tutamaç ekran pikselinde çiziliyor; vuruş testini tuval pikselinde yap.
    const th = tutamacKonum();
    const hx = th.x;
    const hy = th.y;
    const bx = (((e.clientX - tuval.getBoundingClientRect().left) / Math.max(1, tuval.getBoundingClientRect().width)) * tuval.width);
    const by = (((e.clientY - tuval.getBoundingClientRect().top) / Math.max(1, tuval.getBoundingClientRect().height)) * tuval.height);
    const merkez = { x: sec.x + sec.w / 2, y: sec.y + sec.h / 2 };
    const aci = (Math.atan2(p.y - merkez.y, p.x - merkez.x) * 180) / Math.PI;
    if (Math.hypot(bx - hx, by - hy) <= 14) {
      tut = { tip: "don", px: p.x, py: p.y, sec: { ...sec }, aci, don };
    } else {
      const kose = Math.hypot(p.x - (sec.x + sec.w), p.y - (sec.y + sec.h)) < esik;
      tut = { tip: kose ? "boyut" : "tasi", px: p.x, py: p.y, sec: { ...sec } };
    }
    tuval.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  tuval.addEventListener("pointermove", (e) => {
    if (!tut) return;
    const p = konum(e);
    const dx = p.x - tut.px;
    const dy = p.y - tut.py;
    if (tut.tip === "don") {
      const merkez = { x: sec.x + sec.w / 2, y: sec.y + sec.h / 2 };
      const aci = (Math.atan2(p.y - merkez.y, p.x - merkez.x) * 180) / Math.PI;
      // Shift basılıyken 15°'ye yapış.
      let yeni = (tut.don ?? 0) + (aci - (tut.aci ?? aci));
      yeni = ((yeni % 360) + 360) % 360;
      if (e.shiftKey) yeni = Math.round(yeni / 15) * 15;
      don = yeni;
      ayarNotu();
    } else if (tut.tip === "tasi") {
      sec = sinirla({ x: tut.sec.x + dx, y: tut.sec.y + dy, w: tut.sec.w, h: tut.sec.h });
    } else {
      const w = Math.max(tut.sec.w + Math.max(dx, dy * oran), 4);
      sec = sinirla({ x: tut.sec.x, y: tut.sec.y, w, h: w / oran });
    }
    ciz();
  });
  const birak = (): void => {
    tut = null;
  };
  tuval.addEventListener("pointerup", birak);
  tuval.addEventListener("pointercancel", birak);
  tuval.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const f = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const mx = sec.x + sec.w / 2;
      const my = sec.y + sec.h / 2;
      const w = sec.w * f;
      sec = sinirla({ x: mx - w / 2, y: my - (w / oran) / 2, w, h: w / oran });
      ciz();
    },
    { passive: false },
  );

  const modNotu = (): void => {
    if (!modNot) return;
    modNot.textContent = duz
      ? "Sadece seçtiğin dikdörtgen yazılır. İç astar, yanlar ve alt şerit BOŞ kalır."
      : "Desen kumaşın tamamına oturur: iç astar aynası ve yan/üst/alt şeritler otomatik tamamlanır.";
  };
  modNotu();

  kat.querySelectorAll<HTMLElement>("[data-mod]").forEach((b) => {
    b.addEventListener("click", () => {
      duz = b.dataset.mod === "duz";
      kat.querySelectorAll("[data-mod]").forEach((x) => x.classList.toggle("aktif", x === b));
      modNotu();
    });
  });
  const ayarNotu = (): void => {
    const n = kat.querySelector<HTMLElement>("#kz-kirp-ayar-not");
    const b = kat.querySelector<HTMLElement>("#kz-kirp-don");
    const aci = Math.round(don);
    if (b) {
      b.textContent = `${aci}°`;
      b.classList.toggle("aktif", aci !== 0);
    }
    if (!n) return;
    if (aci === 0 && !ayna) {
      n.textContent = "Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.";
    } else {
      n.textContent = `${aci ? aci + "° döndürüldü" : ""}${aci && ayna ? " · " : ""}${ayna ? "aynalandı" : ""} — boş kalan yerler pelerinde SİYAH, elitrada SAYDAM.`;
    }
  };
  kat.querySelector<HTMLElement>("#kz-kirp-ayna")?.addEventListener("click", (e) => {
    ayna = !ayna;
    (e.currentTarget as HTMLElement).classList.toggle("aktif", ayna);
    ayarNotu();
    ciz();
  });
  kat.querySelector<HTMLElement>("#kz-kirp-don")?.addEventListener("click", (e) => {
    don = 0;
    (e.currentTarget as HTMLElement).classList.remove("aktif");
    (e.currentTarget as HTMLElement).textContent = "0°";
    ayarNotu();
    ciz();
  });
  ayarNotu();

  kat.querySelector<HTMLInputElement>("#kz-kirp-piksel")?.addEventListener("change", (e) => {
    hd = (e.target as HTMLInputElement).checked;
    ciz();
  });

  const kapat = (): void => {
    document.removeEventListener("keydown", tus);
    kat.remove();
  };
  const tus = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      e.preventDefault();
      kapat();
    }
  };
  document.addEventListener("keydown", tus);

  const uygulaBtn = kat.querySelector<HTMLButtonElement>("#kz-kirp-uygula");
  uygulaBtn?.addEventListener("click", () => {
    if (uygulaBtn.disabled) return;
    uygulaBtn.disabled = true;
    uygulaBtn.textContent = "Kaydediliyor…";
    void fotografUygula(root, tur, resim, { ...sec }, duz, hd, ayna, don)
      .then(() => kapat())
      .catch((e) => {
        uygulaBtn.disabled = false;
        uygulaBtn.innerHTML = `${icon("check")} Uygula`;
        toast(String(e), "err");
      });
  });

  kat.querySelector("#kz-kirp-kapat")?.addEventListener("click", kapat);
  kat.querySelector("#kz-kirp-iptal")?.addEventListener("click", kapat);
  kat.addEventListener("pointerdown", (e) => {
    if (e.target === kat) kapat();
  });

  ciz();
}

/** Hazır 64×32 pafta: olduğu gibi atlasa yazılır (kırpma sorulmaz). */
function paftaUygula(root: HTMLElement, tur: Tur, resim: HTMLImageElement): void {
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
  gecmis[tur].push(p.slice());
  if (gecmis[tur].length > GERI_SINIR) gecmis[tur].shift();
  gelecek[tur].length = 0;
  for (let i = 0; i < ATLAS_PIKSEL; i++) p[i] = yeni[i];
  fotografModu[tur] = false;
  fotografYol[tur] = null;
  silmeIstegi[tur] = false;
  tazele(root, tur);
  fotografGorunum(root, tur);
  toast("Pafta okundu — 64×32 atlas yüklendi.");
}

/** Fotoğraf seçildi: pafta ise doğrudan, değilse kırpma penceresiyle. */
async function fotograftan(root: HTMLElement, tur: Tur, f: File): Promise<void> {
  try {
    const resim = await resimAc(f);
    if (!resim) return;
    // HAZIR PAFTA: 2:1 oranlı her görsel vanilla 64×32 atlasıdır.
    const oran = resim.width / Math.max(1, resim.height);
    const paftaMi = Math.abs(oran - 2) < 0.02 && resim.height >= 32 && resim.height <= 128;
    if (paftaMi) {
      paftaUygula(root, tur, resim);
      return;
    }
    kirpPenceresi(root, tur, resim);
  } catch (e) {
    toast(String(e), "err");
  }
}

/** Boş atlas göndermeden önce diskte kayıtlı bir tasarım var mı? Varsa geri yükle.
 *
 *  "Kaydet" tek başına ASLA silmez: silme yalnız "Kaldır" ya da
 *  "Temizle + Kaydet" (silmeIstegi) ile olur. HD dosya diskte dururken boş
 *  atlas yollamak dosyayı ve sunucu kaydını siliyordu. */
async function disktekiTasarimiKoru(root: HTMLElement, tur: Tur): Promise<boolean> {
  let durum: KozmetikDurum;
  try {
    durum = (await invoke("cmd_kozmetik_oku")) as KozmetikDurum;
  } catch {
    return false;
  }
  const yol = tur === "pelerin" ? durum.pelerin_dosya : durum.kanat_dosya;
  if (!yol) return false;
  const liste = tur === "pelerin" ? durum.pelerin : durum.kanat;
  if (Array.isArray(liste) && liste.length === ATLAS_PIKSEL && !atlasBosMu(liste)) {
    // 64×32 piksel dosyası: editörü diskteki tasarımla doldur.
    const p = hedef(tur);
    for (let i = 0; i < ATLAS_PIKSEL; i++) p[i] = liste[i] ?? "";
    fotografModu[tur] = false;
    fotografYol[tur] = null;
  } else {
    // HD (ya da 64×32 dışı) dosya: fotoğraf moduna dön, dosyaya dokunma.
    fotografModu[tur] = true;
    fotografYol[tur] = String(yol);
  }
  if (tur === "pelerin") pelerinKayitli = true;
  else kanatKayitli = true;
  tazele(root, tur);
  fotografGorunum(root, tur);
  return true;
}

async function kaydet(root: HTMLElement, tur: Tur): Promise<void> {
  const p = hedef(tur);
  const dolu = !atlasBosMu(p);
  const ad = tur === "pelerin" ? "Pelerin" : "Elitra";
  // HD FOTOĞRAF MODU: piksel atlası bilerek boştur (tasarım diskteki HD
  // dosyada). Boş atlas göndermek dosyayı VE sunucudaki kaydı siler —
  // "kaydete bastım pelerin silindi" hatası buydu. Fotoğraf zaten
  // "Uygula" anında kaydedildi; burada hiçbir şey silinmez.
  if (fotografModu[tur]) {
    toast(`${ad} HD fotoğraf olarak kayıtlı. Değiştirmek için yeni fotoğraf yükle.`);
    return;
  }
  // Boş atlas + kayıtlı dosya: kullanıcı yalnızca "Kaydet"e bastı → SİLME.
  if (!dolu && !silmeIstegi[tur]) {
    const korundu = await disktekiTasarimiKoru(root, tur);
    if (korundu) toast(`${ad} diskte kayıtlı — silmek için "Kaldır"ı kullan.`);
    else toast(`Kaydedilecek bir ${ad.toLocaleLowerCase("tr")} tasarımı yok.`);
    return;
  }
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
    silmeIstegi[tur] = false;
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

// ---------------------------------------------------------------- kısayollar

/** Kozmetik sayfası açıkken etkin kök (klavye kısayolu bunu kullanır). */
let kozKok: HTMLElement | null = null;

/** Ctrl+Z geri · Ctrl+Shift+Z ya da Ctrl+Y ileri. 2D ve 3D çizimde de çalışır. */
function kozKisayol(e: KeyboardEvent): void {
  if (!kozKok || !kozKok.isConnected) return;
  const h = e.target as HTMLElement | null;
  if (h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA" || h.isContentEditable)) return;
  if (!(e.ctrlKey || e.metaKey) || e.altKey) return;
  const tus = e.key.toLowerCase();
  if (tus === "z" && !e.shiftKey) {
    e.preventDefault();
    geriAl(kozKok, secili);
  } else if ((tus === "z" && e.shiftKey) || tus === "y") {
    e.preventDefault();
    ileriAl(kozKok, secili);
  }
}

window.addEventListener("keydown", kozKisayol);
