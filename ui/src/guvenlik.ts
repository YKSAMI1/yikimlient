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

export function guvenlikYoklamayiDurdur(): void {
  if (yoklama !== null) {
    clearInterval(yoklama);
    yoklama = null;
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
        ? "Kendi pelerin/elitranı çizebilirsin (Yol Silindiri)."
        : "Kozmetik ve skin değiştirme açık.",
    );
  } else if (d.baglandi) {
    durum = durumSatiri("uyari", "Discord bağlı — şifre eksik", "Şifre oluştur, kozmetiklerin hesabına bağlansın.");
  } else {
    durum = durumSatiri("uyari", "Hesap doğrulanmadı", "Oynayabilirsin; kozmetik değiştirmek için doğrula.");
  }

  // ---- Gövde: duruma göre adımlar
  let govde = "";

  if (d.api_acik && hesapVar && !d.baglandi) {
    govde += `
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">1</span><b>Discord hesabını bağla</b></div>
        <p class="gv-mini">Aşağıdaki kodu Discord'da bota yaz: <code>/bagla KOD</code></p>
        <div class="gv-kod-satir">
          <div class="gv-kod" id="gv-kod">···</div>
          <button class="btn primary sm" id="gv-kod-al">Kod al</button>
          <button class="btn ghost sm" id="gv-kontrol">Kontrol et</button>
        </div>
        <p class="gv-mini" id="gv-kod-alt">Kod 10 dakika geçerlidir.</p>
      </div>`;
  }

  if (d.api_acik && hesapVar && d.baglandi && !d.dogrulandi) {
    govde += `
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">2</span><b>Şifre oluştur</b></div>
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
      toast(
        m.includes("parola_var") ? "Bu hesabın şifresi zaten var — 'Şifremi unuttum' kullan." : `Olmadı: ${m}`,
        "err",
      );
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
    <div class="sub">Discord'da <code>/sifirla</code> yaz; bot sana tek seferlik kod gönderir.</div>
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
  void openExternal("https://discord.gg/").catch(() => {});
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
