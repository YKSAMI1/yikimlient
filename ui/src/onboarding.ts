/* ============================================================
   İLK KURULUM SİHİRBAZI (onboarding).
   İlk defa indirenlerde — hesabı DA kurulumu DA olmayan kullanıcıda —
   launcher ilk açılışta 4 adımlı bir kurulum provalarında geçirir:
     1) Hoş geldin   2) Hesap bağla   3) İlk paketi oluştur   4) Hazır!
   Bu akış bir kez çalışır (onboarding_done); mevcut kullanıcılar
   hesap/kurulum sahibi oldukları için asla görmez.
   ============================================================ */
import { invoke, navigate, refreshState, state } from "./main";

let overlay: HTMLElement | null = null;
/** Adım 2'deki hesap yoklaması — adım değişince mutlaka temizlenir. */
let hesapTik: ReturnType<typeof setInterval> | null = null;

function temizleTik(): void {
  if (hesapTik !== null) {
    clearInterval(hesapTik);
    hesapTik = null;
  }
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c] as string));
}

async function markDone(): Promise<void> {
  try {
    state.config = { ...state.config, onboarding_done: true };
    await invoke("cmd_save_settings", { config: state.config });
    await refreshState();
  } catch { /* bayrak kalıcı değilse sonraki açılışta tekrar sorulur */ }
}

function finish(goHome: boolean): void {
  temizleTik();
  overlay?.remove();
  overlay = null;
  void markDone();
  navigate(goHome ? "home" : "settings");
}

/** Boş gelen ilk kullanıcıysa sihirbazı oynat; oynatıldıysa true döner. */
export function maybeStartOnboarding(): boolean {
  if (overlay) return true;
  if (state.config?.onboarding_done) return false;
  const fresh = state.accounts.length === 0 && state.instances.length === 0;
  if (!fresh) {
    // mevcut kullanıcı: bayrağı arada kaydet, akış asla açılmasın
    void markDone();
    return false;
  }

  const root = document.createElement("div");
  root.className = "yikim-ob";
  root.innerHTML = `<div class="ob-card"></div>`;
  document.body.appendChild(root);
  overlay = root;
  const card = root.querySelector(".ob-card") as HTMLElement;

  const dots = (n: number): string =>
    `<div class="ob-dots">${[0, 1, 2, 3].map((i) => `<i class="${i <= n ? "done" : ""}"></i>`).join("")}</div>`;

  const actions = (opts: { back?: boolean; next?: string; nextId: string; skip?: string; skipId?: string }): string => `
    <div class="ob-actions">
      ${opts.back ? `<button class="btn ghost sm" id="ob-back">← Geri</button>` : ""}
      <span class="spacer"></span>
      ${opts.skip ? `<button class="btn ghost sm" id="${opts.skipId}">${opts.skip}</button>` : ""}
      ${opts.next ? `<button class="btn primary sm" id="${opts.nextId}">${opts.next}</button>` : ""}
    </div>`;

  // ---------- ADIM 1: hoş geldin ----------
  function step1(): void {
    card.innerHTML = `
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>YIKIMLient'e hoş geldin</h2>
      <p class="ob-sub">Ultra-hızlı Minecraft launcher — 60 saniyede oyundasın.<br />Üç kısa soru, hepsi bu.</p>
      ${dots(0)}
      <div class="ob-step-label">1 / 4 — Hoş geldin</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.6">
        Bu sihirbaz hesabını bağlar ve ilk oyun paketini kurar.<br />Her istediğin zaman Ayarlar'dan değiştirebilirsin.
      </p>
      ${actions({ next: "Başla →", nextId: "ob-next", skip: "Geç beni", skipId: "ob-skip" })}
    `;
    card.querySelector("#ob-skip")?.addEventListener("click", () => finish(true));
    card.querySelector("#ob-next")?.addEventListener("click", step2);
  }

  // ---------- ADIM 2: hesap (satır içi giriş, modal yok) ----------
  function step2(): void {
    temizleTik();
    card.innerHTML = `
      ${dots(1)}
      <div class="ob-step-label">2 / 4 — Hesap</div>
      <h2 style="font-size:16px">Hesabını bağla</h2>
      <p class="ob-sub" style="margin-bottom:12px">Microsoft hesabıyla premium giriş ya da doğrudan çevrimdışı oyna.</p>
      <button class="btn primary lg" id="ob-ms" style="width:100%">Microsoft ile Giriş</button>
      <div id="ob-ms-durum" class="ob-durum" style="display:none"></div>
      <div class="or-divider"><span>veya çevrimdışı</span></div>
      <div class="ob-offline">
        <input class="input" id="ob-off-ad" placeholder="OyuncuAdı" maxlength="16" autocomplete="off" spellcheck="false" />
        <button class="btn" id="ob-off-go">Giriş</button>
      </div>
      <div class="ob-opt" id="ob-off-uyari"></div>
      <div class="ob-ok" id="ob-acc-ok" style="display:none"></div>
      ${actions({ back: true, next: "İleri →", nextId: "ob-next", skip: "Sonra", skipId: "ob-skip" })}
    `;
    card.querySelector("#ob-back")?.addEventListener("click", () => {
      temizleTik();
      step1();
    });
    card.querySelector("#ob-skip")?.addEventListener("click", () => finish(true));

    const ok = card.querySelector("#ob-acc-ok") as HTMLElement;
    const next = card.querySelector("#ob-next") as HTMLButtonElement;
    const durum = card.querySelector("#ob-ms-durum") as HTMLElement;
    const uyari = card.querySelector("#ob-off-uyari") as HTMLElement;
    const msBtn = card.querySelector("#ob-ms") as HTMLButtonElement;
    const offBtn = card.querySelector("#ob-off-go") as HTMLButtonElement;
    const offAd = card.querySelector("#ob-off-ad") as HTMLInputElement;

    const hesabiGoster = (ad: string): void => {
      ok.style.display = "flex";
      ok.textContent = `✓ Hesap hazır: ${ad}`;
      next.disabled = false;
      temizleTik();
    };

    if (state.accounts.length) hesabiGoster(state.accounts[0]?.name ?? "");
    else next.disabled = true;

    msBtn.addEventListener("click", async () => {
      if (msBtn.disabled) return;
      msBtn.disabled = true;
      durum.style.display = "block";
      durum.innerHTML = `<span class="spinner"></span> Microsoft oturum penceresi açılıyor…`;
      try {
        const acc = (await invoke("cmd_ms_login_begin")) as { name?: string };
        await refreshState();
        durum.textContent = "";
        durum.style.display = "none";
        hesabiGoster(acc?.name ?? state.accounts[0]?.name ?? "");
      } catch (e) {
        durum.textContent = String(e);
        msBtn.disabled = false;
      }
    });

    const offlineGir = async (): Promise<void> => {
      if (offBtn.disabled) return;
      const name = offAd.value.trim();
      if (name.length < 3) {
        uyari.textContent = "İsim en az 3 karakter olmalı.";
        offAd.focus();
        return;
      }
      uyari.textContent = "";
      offBtn.disabled = true;
      offBtn.textContent = "…";
      try {
        await invoke("cmd_add_offline_account", { name });
        await refreshState();
        hesabiGoster(name);
        offBtn.textContent = "✓";
      } catch (e) {
        uyari.textContent = String(e);
        offBtn.disabled = false;
        offBtn.textContent = "Giriş";
      }
    };
    offBtn.addEventListener("click", () => void offlineGir());
    offAd.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        void offlineGir();
      }
    });

    // Modal yerine kendi kendine yoklama: dışarıdan giriş olursa yakala.
    hesapTik = setInterval(() => {
      if (state.accounts.length) hesabiGoster(state.accounts[0]?.name ?? "");
    }, 600);

    next.addEventListener("click", () => {
      temizleTik();
      void step3();
    });
  }

  // ---------- ADIM 3: ilk paket ----------
  async function step3(): Promise<void> {
    // sürümleri önden çek
    let versions: string[] = [];
    try {
      const resp = await invoke("cmd_list_versions");
      versions = (resp as any).all?.slice(0, 80) ?? [];
    } catch { /* çevrimdışı — boş liste; sonradan Paketler'den seçer */ }
    card.innerHTML = `
      ${dots(2)}
      <div class="ob-step-label">3 / 4 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${versions.map((v) => `<option value="${esc(v)}">${esc(v)}</option>`).join("") || `<option value="1.21.11">1.21.11</option>`}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${actions({ back: true, next: "Kurulum Oluştur", nextId: "ob-create" })}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `;
    card.querySelector("#ob-back")?.addEventListener("click", step2);
    let created: any = null;
    card.querySelector("#ob-create")?.addEventListener("click", async (e) => {
      const btn = e.currentTarget as HTMLButtonElement;
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner"></span> Oluşturuluyor…`;
      const namev = (card.querySelector("#ob-name") as HTMLInputElement).value.trim() || "Yeni Kurulum";
      const ver = (card.querySelector("#ob-version") as HTMLSelectElement).value;
      try {
        created = await invoke("cmd_create_instance", {
          instance: {
            name: namev, mc_version: ver, mod_loader: "fabric",
            ram_mb: state.config?.default_ram_mb || 4096,
            java_preset_id: state.config?.default_java_preset || "balanced",
            standard_mods: true,
          },
        });
        const ok = card.querySelector("#ob-inst-ok") as HTMLElement;
        ok.style.display = "flex";
        ok.textContent = `✓ Kurulum hazır: ${(created as any).name}`;
        btn.textContent = "✓ Oluşturuldu";
        await refreshState();
        setTimeout(() => step4(), 700);
      } catch (err) {
        toastErr(`Kurulum oluşturulamadı: ${err}`);
        btn.disabled = false;
        btn.textContent = "Kurulum Oluştur";
      }
    });
    card.querySelector("#ob-explore")?.addEventListener("click", () => {
      navToExplore();
    });
  }

  // ---------- ADIM 4: hazır ----------
  function step4(): void {
    card.innerHTML = `
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>Her şey hazır! 🎉</h2>
      <p class="ob-sub">Hesabın bağlandı, ilk paketin kuruldu.</p>
      ${dots(3)}
      <div class="ob-step-label">4 / 4 — Hazır</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.7">
        Ana Sayfa'dan <b>Oyna</b>'ya bas — saniyeler içinde oyundasın.<br />
        Modları Paketler → modlar sekmesinden yönet; dosyayı<br />ekrana sürükleyip bırak, otomatik kurulur.
      </p>
      ${actions({ next: "Oyna'ya Git →", nextId: "ob-done" })}
    `;
    card.querySelector("#ob-done")?.addEventListener("click", () => finish(true));
  }

  step1();
  return true;

  function navToExplore(): void {
    temizleTik();
    overlay?.remove();
    overlay = null;
    void markDone();
    navigate("explore", "kind:modpack");
  }
  function toastErr(msg: string): void {
    // main.toast'ı burada içeri almak (döngüsel import değil) güvenli; dinamik import:
    void import("./main").then((m) => m.toast(msg, "err"));
  }
}
