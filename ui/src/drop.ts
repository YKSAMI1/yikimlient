/* ============================================================
   SÜRÜKLE-BIRAK YÜKLEME motoru.
   Masaüstünden atılan HER ŞEY tek akışta sınıflandırılır ve kurulur:
   .jar → mods · .mrpack/.zip(modrinth/cf) → yeni kurulum · dünya klasörü
   veya dünya zip → saves · belirsiz .zip → kullanıcıya sorulur.
   Tauri 2 native drag-drop (dragDropEnabled: true) gerçek DOSYA YOLU verir;
   tüm kurulumlar yerel kopya/açma — internet trafiği yoktur.
   ============================================================ */
import { invoke, openModal, navigate, refreshState, state, toast } from "./main";

let veil: HTMLElement | null = null;

const esc = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c] as string));

function showVeil(): void {
  if (veil) return;
  veil = document.createElement("div");
  veil.className = "drop-veil";
  veil.innerHTML = `
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`;
  document.body.appendChild(veil);
}

function hideVeil(): void {
  veil?.remove();
  veil = null;
}

/** Sürüklenen tek dosyayı sınıflandır ve kur. */
async function handleDropped(path: string): Promise<void> {
  const fileName = path.split(/[\\/]/).pop() || path;
  let route = "";
  try {
    route = await invoke("cmd_route_dropped", { path });
  } catch (e) {
    toast(`Dosya tanınamadı: ${e}`, "err");
    return;
  }
  try {
    if (route === "modpack") {
      const m = openModal(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${esc(fileName)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);
      let ok = false;
      m.root.querySelector("#dp-no")?.addEventListener("click", () => m.close());
      m.root.querySelector("#dp-go")?.addEventListener("click", () => { ok = true; m.close(); });
      await new Promise<void>((r) => {
        const iv = setInterval(() => {
          if (!document.body.contains(m.root)) { clearInterval(iv); r(); }
        }, 150);
      });
      if (!ok) { toast("Kurulum iptal edildi"); return; }
      toast("Paket indiriliyor — süreç panelinden takip edebilirsin");
      const inst = await invoke("cmd_import_pack_file", { path, name: null });
      await refreshState();
      navigate("instances");
      toast(`${(inst as any).name} kuruldu ✓`);
    } else if (route === "jar") {
      const inst = await pickInstance(`Mod eklenecek kurulum: <b>${esc(fileName)}</b>`);
      if (!inst) return;
      await invoke("cmd_add_content_path", { instanceId: inst.id, kind: "mods", path });
      const warn = inst.mod_loader && inst.mod_loader !== "fabric"
        ? " — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir" : "";
      toast(`Mod eklendi: ${fileName}${warn}`, warn ? "err" : "ok");
    } else if (route === "world") {
      const inst = await pickInstance(`Dünya yüklenecek kurulum: <b>${esc(fileName)}</b>`);
      if (!inst) return;
      await invoke("cmd_add_content_path", { instanceId: inst.id, kind: "saves", path });
      toast(`Dünya yüklendi: ${fileName}`);
    } else if (route === "emote") {
      // .emotecraft (ikili veya zip) ya da düz emote.json — çöz ve vitrin paketine ekle
      const sonuc = await invoke("cmd_import_emote_dosyasi", { path });
      toast(`Emote vitrine eklendi: ${(sonuc as any).adi}`);
    } else if (route === "zip") {
      await askZipKind(path, fileName);
    } else {
      toast(`${fileName} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`, "err");
    }
  } catch (e) {
    toast(`Kurulamadı: ${e}`, "err");
  }
}

/** Belirsiz zip: doku mu, shader mı, dünya mü? */
async function askZipKind(path: string, fileName: string): Promise<void> {
  const m = openModal(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${esc(fileName)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);
  let kind = "";
  m.root.querySelectorAll("[data-k]").forEach((b) =>
    b.addEventListener("click", () => { kind = (b as HTMLElement).dataset.k || ""; m.close(); }));
  m.root.querySelector("#dp-cancel")?.addEventListener("click", () => m.close());
  await new Promise<void>((r) => {
    const iv = setInterval(() => {
      if (!document.body.contains(m.root)) { clearInterval(iv); r(); }
    }, 150);
  });
  if (!kind) return;
  const inst = await pickInstance(
    kind === "saves_zip" ? "Dünya yüklenecek kurulum" : "İçerik eklenecek kurulum");
  if (!inst) return;
  await invoke("cmd_add_content_path", { instanceId: inst.id, kind, path });
  toast(`Eklendi: ${fileName}`);
}

/** Mod/dünya için kurulum seç; tek kurulum varsa sorma. */
function pickInstance(title: string): Promise<any | null> {
  return new Promise((resolve) => {
    const list: any[] = state.instances || [];
    if (!list.length) {
      toast("Önce Paketler sekmesinde bir kurulum oluştur", "err");
      resolve(null);
      return;
    }
    if (list.length === 1) { resolve(list[0]); return; }
    const m = openModal(`
      <h3 style="margin-bottom:6px">${title}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${list.map((i) => `
          <button class="btn ghost" data-id="${i.id}">
            <span style="font-size:18px">${i.icon || "📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${esc(String(i.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${esc(String(i.mc_version || ""))}</span>
          </button>`).join("")}
      </div>`);
    m.root.querySelectorAll("[data-id]").forEach((b) => {
      b.addEventListener("click", () => {
        const inst = list.find((x) => x.id === (b as HTMLElement).dataset.id) || null;
        m.close();
        resolve(inst);
      });
    });
    // arka plan tıklaması openModal'ı kapatır → null dönsün
    const iv = setInterval(() => {
      if (!document.body.contains(m.root)) { clearInterval(iv); resolve(null); }
    }, 150);
  });
}

/** Tauri 2 native drag-drop akışını dinle (gerçek yollar buradan gelir). */
export function startDropWatcher(): void {
  try {
    const w = (window as any).__TAURI__?.window?.getCurrentWindow?.();
    if (!w?.onDragDropEvent) return;
    void w.onDragDropEvent(async (event: any) => {
      const p = event?.payload ?? event ?? {};
      const t = p.type as string;
      if (t === "enter" || t === "over") {
        showVeil();
      } else if (t === "drop") {
        hideVeil();
        const paths: string[] = p.paths || [];
        for (const path of paths) await handleDropped(path);
      } else {
        hideVeil();
      }
    });
  } catch {
    // eski webview / API yok — sürükle-bırak sessizce devre dışı kalır
  }
}
