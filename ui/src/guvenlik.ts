/* ============================================================
   GÜVENLİK ARAYÜZÜ — hesap doğrulama, Discord bağlama, şifre.
   ------------------------------------------------------------
   Akış (tasarım §9, §19):
     1) Discord bağla  → launcher 8 karakterlik kod gösterir,
        oyuncu botta /bagla KOD yazar.
     2) Şifre oluştur  → yalnız bağlantı doğrulandıktan sonra.
     3) Doğrulandı     → kozmetik/skin değiştirme açılır (7 gün).
   Doğrulanmayan hesap kullanılabilir; yalnız kozmetik değişimi kilitli.
   Bot/API kapalıyken oyun ve mevcut kozmetikler çalışmaya devam eder.
   ============================================================ */
import { currentAccount, invoke, openExternal, openModal, state, toast } from "./main";

/** Topluluk Discord sunucusu — doğrulama burada yapılır. */
export const DISCORD_DAVET = "https://discord.gg/3zTCpMzeNq";

/** Launcher'ın bildiği hesap doğrulama özeti (yerel kayıttan, çevrimdışı güvenli). */
export interface HesapGuvenlik {
  id: string;
  anahtar: string;
  ad: string;
  dogrulandi: boolean;
  rol_yol: boolean;
  carpi: boolean;
  kozmetik_serbest: boolean;
  cizim_serbest: boolean;
}

let ozet: Record<string, HesapGuvenlik> = {};
let ozetZaman = 0;
/** Bağlantı yoklaması — güvenlik kartı yeniden çizilince temizlenir. */
let yoklama: ReturnType<typeof setInterval> | null = null;
/** "Yol Silindiri" rolünün son bilinen durumu — değişince kullanıcıya haber ver. */
let rolYolOnce: boolean | null = null;

export function guvenlikYoklamayiDurdur(): void {
  if (yoklama !== null) {
    clearInterval(yoklama);
    yoklama = null;
  }
}

// ---------------------------------------------------------------- rol yoklaması
//
// Rol ("Yol Silindiri") Discord'da düşürülünce bot bunu API'ye yazar. Launcher
// açıkken bunu duymak için 5 sn'de bir + pencere odağa gelince sorulur. Rust
// tarafı (`cmd_guvenlik_durum`) değişimi görünce kozmetik dosyalarını ANINDA
// günceller; burada da `yikim:yetki` olayı yayılır → açık sayfa kendini
// tazeler. Yeniden başlatma GEREKMEZ.

let rolYoklama: ReturnType<typeof setInterval> | null = null;
let rolImza = "";

export function rolYoklamayiBaslat(): void {
  if (rolYoklama !== null) return;
  const tik = (): void => {
    void rolTazele();
  };
  rolYoklama = setInterval(tik, 5000);
  window.addEventListener("focus", tik);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tik();
  });
  tik();
}

export function rolYoklamayiDurdur(): void {
  if (rolYoklama !== null) {
    clearInterval(rolYoklama);
    rolYoklama = null;
  }
}

async function rolTazele(): Promise<void> {
  if (document.hidden) return;
  try {
    await guvenlikOzetYukle(true);
    const t = await guvenlikYetkiTazele();
    if (!t) return; // API kapalı: yerel durum korunur
    const imza = `${t.cizimSerbest}|${t.rolYol}|${t.dogrulandi}`;
    if (imza === rolImza) return;
    const ilk = rolImza === "";
    rolImza = imza;
    // "Yol Silindiri" rolü değişti mi? Kullanıcı ne olduğunu anlamlı bir
    // mesajla duysun: izin açıldı / izin kapanıp tasarım kilitlendi basit
    // bir bildirim yeterli (ayrıntı Kozmetikler sayfasındaki kutuda).
    if (t.dogrulandi && rolYolOnce !== null && rolYolOnce !== t.rolYol) {
      if (t.rolYol) {
        toast(
          'Yol Silindiri izni açıldı ✓ pelerinini ve elıtranı çizebilirsin — Kozmetikler sayfasına geç.',
          "ok",
        );
      } else {
        toast(
          'Yol Silindiri izni kapandı — tasarımın kaydedildi ama şu an varsayılan YIKIM pelerini/elitrası görünüyor. Etiketi geri alınca aynı tasarım döner.',
          "err",
        );
      }
    }
    rolYolOnce = t.rolYol;
    if (ilk) return; // ilk okuma yalnız taban çizgisi
    window.dispatchEvent(new CustomEvent("yikim:yetki", { detail: t }));
  } catch {
    // Sessiz: ağ hatası kozmetiği kilitlemez.
  }
}

/** Tüm hesapların doğrulama durumunu yerel kayıttan tazele. */
export async function guvenlikOzetYukle(zorla = false): Promise<void> {
  if (!zorla && Date.now() - ozetZaman < 15000) return;
  try {
    const v = (await invoke("cmd_guvenlik_ozet")) as { hesaplar?: HesapGuvenlik[] };
    ozet = {};
    for (const h of v.hesaplar || []) ozet[h.id] = h;
    ozetZaman = Date.now();
  } catch {
    // Eski launcher sürümü: güvenlik komutu yok — sessizce geç.
  }
}

export function hesapDogrulandi(accId: string): boolean {
  return ozet[accId]?.dogrulandi ?? false;
}

/** Hesabın "Yol Silindiri" rolü var mı? (özel pelerin/elitra çizme izni) */
export function hesapRolYol(accId: string): boolean {
  return ozet[accId]?.rol_yol ?? false;
}

/** Kozmetik değiştirme izni (doğrulandı + sunucu kilidi kapalı). */
export function hesapKozmetikSerbest(accId: string): boolean {
  return ozet[accId]?.kozmetik_serbest ?? false;
}

/** Kozmetik sayfası için yetki özeti — "kısıtlı görünüm" kararı bundan çıkar. */
export interface KozmetikErisim {
  cizimSerbest: boolean;
  dogrulandi: boolean;
  rolYol: boolean;
}

/**
 * Seçili hesabın rol/doğrulama durumunu SUNUCU yetkisine göre tazele.
 *
 * `cmd_guvenlik_durum` rolü API'den sorar ve yerel kayda yazar; bu çağrı
 * yapılmadan kozmetik sayfasında yükleme düğmeleri eski (yetkisiz) durumda
 * kalıyordu — HD fotoğraf ve maske yükleme bu yüzden reddediliyordu.
 */
export async function guvenlikYetkiTazele(): Promise<KozmetikErisim | null> {
  let d: any = null;
  try {
    d = await invoke("cmd_guvenlik_durum");
  } catch {
    return null;
  }
  const anahtar: string = d?.hesap?.anahtar ?? "";
  const accId = state.accounts?.find((a) => hesapAnahtar(a) === anahtar)?.id;
  const erisim: KozmetikErisim | null = accId
    ? {
        cizimSerbest: !!d?.cizim_serbest,
        dogrulandi: !!d?.dogrulandi,
        rolYol: !!d?.yetki?.rol_yol,
      }
    : null;
  if (!accId) return erisim;
  const eski = ozet[accId];
  ozet[accId] = {
    id: accId,
    anahtar,
    ad: String(d?.hesap?.ad ?? eski?.ad ?? ""),
    dogrulandi: !!d?.dogrulandi,
    rol_yol: !!d?.yetki?.rol_yol,
    carpi: !!d?.carpi,
    kozmetik_serbest: !!d?.kozmetik_serbest,
    cizim_serbest: !!d?.cizim_serbest,
  };
  ozetZaman = Date.now();
  return erisim;
}

/** Hesap listesindeki kayıttan yerel güvenlik anahtarını üret. */
function hesapAnahtar(acc: { id: string; uuid?: string; kind?: string; name?: string }): string {
  // Launcher içindeki anahtar üretimi Rust ile aynı: ms:<uuid> / offline:<uuid>
  const tur = acc.kind === "microsoft" ? "ms" : "offline";
  const uuid = acc.uuid || "";
  return uuid ? `${tur}:${uuid}` : `${tur}:${(acc.name || acc.id).toLowerCase()}`;
}

/** Hesap adının başına konan ✕ işareti (doğrulanmamış hesap). */
export function hesapCarpi(accId: string): string {
  const h = ozet[accId];
  if (!h || h.dogrulandi) return "";
  return `<span class="gv-carpi" title="Hesap doğrulanmadı — kozmetik değiştirmek için Ayarlar → Güvenlik">✕</span>`;
}

/** Hesap adı + ✕ (tek yerde kullanılsın). */
export function hesapAdi(acc: { id: string; name: string }): string {
  return `${hesapCarpi(acc.id)}${acc.name}`;
}

/**
 * İstemci tarafı parola türetme.
 * Sunucu bu değeri tuz + pepper ile yeniden türetip ŞİFRELİ saklar; düz
 * parola hiçbir yere yazılmaz. PBKDF2-SHA256, sabit tuz (cihazlar arası
 * aynı sonuç üretmeli), 210k tur.
 */
export async function parolaHash(parola: string): Promise<string> {
  const enc = new TextEncoder();
  const anahtar = await crypto.subtle.importKey("raw", enc.encode(parola), "PBKDF2", false, ["deriveBits"]);
  const bit = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: enc.encode("yikimlient-parola-v1"), iterations: 210000, hash: "SHA-256" },
    anahtar,
    256,
  );
  return Array.from(new Uint8Array(bit))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

function durumSatiri(renk: "ok" | "uyari" | "hata", baslik: string, alt: string): string {
  return `<div class="gv-durum ${renk}">
    <span class="gv-nokta"></span>
    <div><b>${esc(baslik)}</b><small>${esc(alt)}</small></div>
  </div>`;
}

const sifreAlani = (id: string, etiket: string) => `
  <label class="gv-etiket" for="${id}">${etiket}</label>
  <input class="input gv-girdi" id="${id}" type="password" autocomplete="new-password" minlength="8" placeholder="en az 8 karakter" />`;

/** Ayarlar sayfasına gömülen güvenlik kartını çiz ve olayları bağla. */
export async function guvenlikKartiCiz(host: HTMLElement): Promise<void> {
  guvenlikYoklamayiDurdur();
  host.innerHTML = `<div class="card set-card gv-kart"><h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Durum okunuyor…</p></div>`;

  await guvenlikOzetYukle(true);

  let d: any = null;
  try {
    d = await invoke("cmd_guvenlik_durum");
  } catch {
    d = null;
  }

  if (!d) {
    host.innerHTML = `<div class="card set-card gv-kart">
      <h3>🛡️ Hesap Doğrulama</h3>
      ${durumSatiri("hata", "Güvenlik servisi bu sürümde yok", "Launcher'ı güncelle. Oyun ve mevcut kozmetikler çalışmaya devam eder.")}
    </div>`;
    return;
  }

  const acc = currentAccount();
  const yetki = d.yetki || {};
  const hesapVar = !!d.hesap;
  const carpi = d.carpi ? hesapCarpi(acc?.id || "") : "";

  // ---- Başlık durumu
  let durum = "";
  if (!d.api_acik) {
    durum = durumSatiri(
      "hata",
      "Sunucuya ulaşılamıyor",
      "Bağlantı, şifre oluşturma ve sıfırlama şu an kapalı. Oyun ve mevcut kozmetikler çalışmaya devam eder.",
    );
  } else if (!hesapVar) {
    durum = durumSatiri("uyari", "Önce hesap ekle", "Ayarlar → Hesaplar bölümünden bir hesap ekle.");
  } else if (d.baglandi && d.dogrulandi) {
    durum = durumSatiri(
      "ok",
      `Doğrulandı${d.discord_ad ? ` · ${d.discord_ad}` : ""}`,
      d.yetki?.rol_yol
        ? "Kendi pelerin/elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin (Yol Silindiri)."
        : "Kozmetik ve skin değiştirme açık. Kendi tasarımını çizmek için Discord sunucusundaki YIKIM etiketi (\"Yol Silindiri\" rolü) gerekir — etiketi bırakırsan çizme izni kendiliğinden kapanır.",
    );
  } else if (d.baglandi) {
    durum = durumSatiri("uyari", "Discord bağlı — bu cihazda giriş yapmadın", "Şifreni gir; kozmetiklerin ve çizme iznin bu cihaza açılsın.");
  } else {
    durum = durumSatiri(
      "uyari",
      "Hesap doğrulanmadı",
      "Oynayabilirsin; kozmetik değiştirmek için Discord'da doğrula.",
    );
  }

  // ---- Gövde: duruma göre adımlar
  let govde = "";

  if (d.api_acik && hesapVar && !d.baglandi) {
    govde += `
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">1</span><b>Discord sunucusuna katıl</b></div>
        <p class="gv-mini">
          Doğrulama Discord üzerinden yapılır. Sunucuya katıl, <b>bot komut kanalına</b> git ve
          aşağıdaki kodu oraya yaz. Bot nerede diye arama — komut kanalı sunucunun en üstünde.
        </p>
        <div class="gv-alt-satir" style="margin:10px 0 4px">
          <button class="btn ghost sm" id="gv-discord">Discord sunucusuna katıl ↗</button>
          <span class="gv-mini" style="margin:0">discord.gg/3zTCpMzeNq</span>
        </div>
      </div>
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">2</span><b>Hesabını bağla</b></div>
        <p class="gv-mini">Kodu al, sonra bot komut kanalında yaz: <code>/bagla KOD</code></p>
        <div class="gv-kod-satir">
          <div class="gv-kod" id="gv-kod">···</div>
          <button class="btn primary sm" id="gv-kod-al">Kod al</button>
          <button class="btn ghost sm" id="gv-kopyala" hidden title="Kodu kopyala">Kopyala</button>
          <button class="btn ghost sm" id="gv-kontrol">Kontrol et</button>
        </div>
        <p class="gv-mini" id="gv-kod-alt">Kod 10 dakika geçerlidir.</p>
      </div>`;
  }

  if (d.api_acik && hesapVar && d.baglandi && !d.dogrulandi) {
    // 3) GİRİŞ YAP — birincil yol. Hesabın şifresi başka cihazda
    //    oluşturulmuş olabilir; "şifre oluştur" yalnız şifresi YOKSA geçerli.
    govde += `
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">3</span><b>Giriş yap</b></div>
        <p class="gv-mini">Hesabının şifresini gir — kozmetiklerin ve çizme iznin bu cihaza açılır. Şifre her cihazda aynıdır.</p>
        <div class="gv-izgara">
          ${sifreAlani("gv-giris-sifre", "Şifre")}
        </div>
        <div class="gv-alt-satir">
          <button class="btn primary" id="gv-giris">Giriş yap</button>
          <button class="btn ghost sm" id="gv-olustur-ac">Hesabımın şifresi yok</button>
        </div>
      </div>

      <div class="gv-adim" id="gv-olustur-blok" hidden>
        <div class="gv-adim-bas"><span class="gv-no">4</span><b>Şifre oluştur</b></div>
        <p class="gv-mini">Bu şifre hesabını korur; her cihazda aynı şifreyle doğrulanırsın.</p>
        <div class="gv-izgara">
          ${sifreAlani("gv-p1", "Yeni şifre")}
          ${sifreAlani("gv-p2", "Yeni şifre (tekrar)")}
        </div>
        <div class="gv-alt-satir">
          <button class="btn primary" id="gv-parola-kur">Şifreyi oluştur</button>
        </div>
        <p class="gv-mini">Şimdi oluşturmazsan oyun açılır; kozmetikler kilitli kalır.</p>
      </div>`;
  }

  if (d.api_acik && hesapVar && d.dogrulandi) {
    govde += `
      <div class="gv-alt-satir" style="margin-top:4px">
        <button class="btn ghost sm" id="gv-unuttum">Şifremi unuttum</button>
      </div>`;
  }

  if (!d.api_acik) {
    govde += `<div class="gv-alt-satir"><button class="btn ghost sm" id="gv-yenile">Yeniden dene</button></div>`;
  }

  host.innerHTML = `<div class="card set-card gv-kart">
    <h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Hesabını Discord ile doğrula; kozmetiklerin hesaba bağlansın, cihaz değiştirince kaybolmasın.</p>
    ${carpi ? `<div class="gv-uyari-satir">${carpi}<span>Bu hesap doğrulanmadı — adının başında ✕ görünür.</span></div>` : ""}
    ${durum}
    ${govde}
    <div class="gv-alt-bilgi">
      <span>${d.bot_acik ? "Bot: çevrimiçi" : "Bot: kapalı (oyun çalışır)"}</span>
      <span>${d.cihaz_hazir ? "Cihaz imzası: hazır" : "Cihaz imzası: yok"}</span>
    </div>
  </div>`;

  // ---- Olaylar
  const kodEl = () => host.querySelector<HTMLElement>("#gv-kod");
  const altEl = () => host.querySelector<HTMLElement>("#gv-kod-alt");

  host.querySelector("#gv-kod-al")?.addEventListener("click", async () => {
    try {
      const v = (await invoke("cmd_guvenlik_baglama_kod")) as { kod?: string; kalan_sn?: number };
      if (kodEl()) kodEl()!.textContent = v.kod || "?";
      if (altEl()) altEl()!.textContent = `Discord'da bota yaz: /bagla ${v.kod || ""} · ${Math.ceil((v.kalan_sn || 600) / 60)} dk`;
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
      }
      // Kod alındıktan sonra bağlantıyı kendiliğinden yokla. Sayfadan
      // çıkıldıysa kart DOM'dan düşer; yoklama kendini durdurur.
      if (!yoklama) {
        yoklama = setInterval(() => {
          if (!host.isConnected || !document.body.contains(host)) {
            guvenlikYoklamayiDurdur();
            return;
          }
          void kontrol(true);
        }, 3000);
      }
    } catch (e) {
      toast(`Kod alınamadı: ${String(e).replace(/^Error:\s*/, "")}`, "err");
    }
  });

  const kontrol = async (sessiz = false) => {
    try {
      const v = (await invoke("cmd_guvenlik_baglama_durum")) as { baglandi?: boolean };
      if (v.baglandi) {
        guvenlikYoklamayiDurdur();
        toast("Discord bağlandı ✓");
        await guvenlikKartiCiz(host);
        return true;
      }
      if (!sessiz) toast("Henüz bağlanmadı — Discord'da kodu yazdın mı?", "err");
    } catch (e) {
      if (!sessiz) toast(`Kontrol edilemedi: ${String(e).replace(/^Error:\s*/, "")}`, "err");
    }
    return false;
  };

  host.querySelector("#gv-kontrol")?.addEventListener("click", () => void kontrol(false));
  host.querySelector("#gv-discord")?.addEventListener("click", () => discordAc());

  // ---- Şifreyle GİRİŞ (birincil yol) ----
  const girisYap = async (): Promise<void> => {
    const sifre = host.querySelector<HTMLInputElement>("#gv-giris-sifre")?.value || "";
    if (sifre.length < 8) return toast("Şifreni gir (en az 8 karakter)", "err");
    const btn = host.querySelector<HTMLButtonElement>("#gv-giris");
    if (btn) btn.disabled = true;
    try {
      const h = await parolaHash(sifre);
      const v = (await invoke("cmd_guvenlik_giris", { parolaHash: h })) as { dogrulandi?: boolean };
      if (v?.dogrulandi) {
        await guvenlikOzetYukle(true);
        toast("Giriş yapıldı ✓ kozmetikler açıldı");
        await guvenlikKartiCiz(host);
      }
    } catch (e) {
      const m = String(e).replace(/^Error:\s*/, "");
      if (m.includes("parola_yok")) {
        // Hesabın şifresi yok → oluşturma bloğunu aç (kullanıcı "şifre oluştur"
        // diye diretsin ya da "şifren var" uyarısına takılmasın).
        const blok = host.querySelector<HTMLElement>("#gv-olustur-blok");
        if (blok) blok.hidden = false;
        toast("Bu hesabın şifresi yok — aşağıdan oluşturabilirsin.", "err");
      } else {
        toast(m.includes("baglanti_yok") ? "Önce Discord'da /bagla ile bağla" : `Giriş olmadı: ${m}`, "err");
      }
      if (btn) btn.disabled = false;
    }
  };
  host.querySelector("#gv-giris")?.addEventListener("click", () => void girisYap());
  host.querySelector<HTMLInputElement>("#gv-giris-sifre")?.addEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Enter") void girisYap();
  });
  host.querySelector("#gv-olustur-ac")?.addEventListener("click", () => {
    const blok = host.querySelector<HTMLElement>("#gv-olustur-blok");
    if (blok) blok.hidden = false;
  });

  host.querySelector("#gv-parola-kur")?.addEventListener("click", async () => {
    const p1 = host.querySelector<HTMLInputElement>("#gv-p1")?.value || "";
    const p2 = host.querySelector<HTMLInputElement>("#gv-p2")?.value || "";
    if (p1.length < 8) return toast("Şifre en az 8 karakter olmalı", "err");
    if (p1 !== p2) return toast("Şifreler eşleşmiyor", "err");
    const btn = host.querySelector<HTMLButtonElement>("#gv-parola-kur");
    if (btn) btn.disabled = true;
    try {
      const h = await parolaHash(p1);
      await invoke("cmd_guvenlik_parola_kur", { parolaHash: h });
      // Hemen giriş yap → 7 günlük yetki belgesi yazılsın.
      await invoke("cmd_guvenlik_giris", { parolaHash: h });
      toast("Şifre oluşturuldu ✓ kozmetikler açıldı");
      await guvenlikOzetYukle(true);
      await guvenlikKartiCiz(host);
    } catch (e) {
      const m = String(e).replace(/^Error:\s*/, "");
      if (m.includes("parola_var")) {
        // Şifre zaten VAR (başka cihazda oluşturulmuş): "unuttum"a yollama,
        // DOĞRUDAN giriş ekranına dön.
        const blok = host.querySelector<HTMLElement>("#gv-olustur-blok");
        if (blok) blok.hidden = true;
        toast("Bu hesabın şifresi zaten var — yukarıdan giriş yap.", "err");
      } else {
        toast(`Olmadı: ${m}`, "err");
      }
      if (btn) btn.disabled = false;
    }
  });

  host.querySelector("#gv-unuttum")?.addEventListener("click", () => sifirlaModalAc(host));
  host.querySelector("#gv-yenile")?.addEventListener("click", () => void guvenlikKartiCiz(host));
}

/** "Şifremi unuttum" — bot DM kodu → yeni şifre. */
function sifirlaModalAc(host: HTMLElement): void {
  const m = openModal(`
    <h2>Şifremi unuttum</h2>
    <div class="sub">Sunucudaki <b>bot komut kanalında</b> <code>/sifirla</code> yaz; bot sana tek seferlik kod gönderir.</div>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px">
      <div>
        <label class="gv-etiket" for="gv-sif-kod">Kod</label>
        <input class="input gv-girdi" id="gv-sif-kod" placeholder="8 karakter" maxlength="12" style="text-transform:uppercase" />
      </div>
      ${sifreAlani("gv-sif-p1", "Yeni şifre")}
      ${sifreAlani("gv-sif-p2", "Yeni şifre (tekrar)")}
      <div class="gv-alt-satir">
        <button class="btn ghost" id="gv-sif-iptal">Vazgeç</button>
        <button class="btn primary" id="gv-sif-tamam">Şifreyi değiştir</button>
      </div>
      <p class="gv-mini">5 hatalı denemede bu cihazda hesap 24 saat kilitlenir.</p>
    </div>
  `);
  m.root.querySelector("#gv-sif-iptal")?.addEventListener("click", () => m.close());
  m.root.querySelector("#gv-sif-tamam")?.addEventListener("click", async () => {
    const kod = (m.root.querySelector<HTMLInputElement>("#gv-sif-kod")?.value || "").trim().toUpperCase();
    const p1 = m.root.querySelector<HTMLInputElement>("#gv-sif-p1")?.value || "";
    const p2 = m.root.querySelector<HTMLInputElement>("#gv-sif-p2")?.value || "";
    if (!kod) return toast("Kodu gir", "err");
    if (p1.length < 8) return toast("Şifre en az 8 karakter olmalı", "err");
    if (p1 !== p2) return toast("Şifreler eşleşmiyor", "err");
    try {
      const h = await parolaHash(p1);
      await invoke("cmd_guvenlik_sifirla", { kod, parolaHash: h });
      await invoke("cmd_guvenlik_giris", { parolaHash: h });
      toast("Şifre değiştirildi ✓");
      m.close();
      await guvenlikOzetYukle(true);
      await guvenlikKartiCiz(host);
    } catch (e) {
      toast(`Olmadı: ${String(e).replace(/^Error:\s*/, "")}`, "err");
    }
  });
}

/** Discord davet bağlantısını dış tarayıcıda aç (panellerde kullanılır). */
export function discordAc(): void {
  void openExternal(DISCORD_DAVET).catch(() => toast("Discord açılamadı", "err"));
}

/** Hesap durumunu tek satırda özetle (onboarding vb.). */
export function hesapDurumMetni(accId: string): string {
  const h = ozet[accId];
  if (!h) return "durum bilinmiyor";
  if (h.dogrulandi) return h.rol_yol ? "doğrulandı · Yol Silindiri" : "doğrulandı";
  return "doğrulanmadı";
}

/** Onboarding/oturum açma sonrası özeti tazele (state.accounts hazırsa). */
export async function hesapDurumlariTazele(): Promise<void> {
  if (!state.accounts?.length) return;
  await guvenlikOzetYukle(true);
}
