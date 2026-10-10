import { icon, invoke, openExternal } from "../main";

interface YikimAnnouncement {
  id: string; title: string; text: string; body: string;
  image: string; link: string; link_label: string; date: string; pinned: boolean;
}

/**
 * Duyurular — YALNIZCA geliştiricinin imzalı feed'i.
 * Mojang/patch-note akışı kaldırıldı: burada yalnızca senin yayınladığın,
 * ed25519 imzası doğrulanmış duyurular görünür. İmzasız içerik sayfaya hiç girmez.
 */
export function renderNews(root: HTMLElement): void {
  root.classList.add("news-page");
  root.innerHTML = `
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `;
  loadYikim(root);
}

/// YIKIM özel duyurular — imzalı feed'den gelir; doğrulanamayan içerik asla gösterilmez.
async function loadYikim(root: HTMLElement): Promise<void> {
  const host = root.querySelector("#yikim-news") as HTMLElement;
  try {
    const items: YikimAnnouncement[] = await invoke("cmd_list_yikim_news");
    if (!items.length) {
      host.innerHTML = `
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${icon("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;
      return;
    }
    // pinned önce, sonra tarih sırasına göre (yeni üstte)
    items.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.date.localeCompare(a.date));
    host.innerHTML = items.map((a) => `
      <div class="card yikim-announce ${a.pinned ? "pinned" : ""} anim-fade-up" data-link="${a.link || ""}">
        ${a.image ? `<div class="yikim-img" style="background-image:url('${a.image}')"></div>` : ""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${a.pinned ? `${icon("sparkle")} DUYURU` : "YIKIM"} · ${a.date}</div>
            ${a.pinned ? `<span class="chip">Sabit</span>` : ""}
          </div>
          <h3>${a.title}</h3>
          <p class="yikim-preview">${a.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${a.body.split("\n\n").map((p) => `<p>${p}</p>`).join("")}</div>
          </details>
          ${a.link ? `<button class="btn ghost sm yikim-link">${icon("globe")} ${a.link_label || "Bağlantıyı aç"}</button>` : ""}
        </div>
      </div>`).join("");
    // tıklanabilir link yalnızca https'e açık
    host.querySelectorAll(".yikim-announce").forEach((card) => {
      const link = (card as HTMLElement).dataset.link;
      card.querySelector(".yikim-link")?.addEventListener("click", (e) => {
        e.stopPropagation();
        if (link?.startsWith("https://")) openExternal(link).catch(() => {});
      });
    });
  } catch {
    host.innerHTML = ""; // sessiz: duyurular opsiyonel
  }
}
