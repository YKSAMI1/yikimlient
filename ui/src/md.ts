/* ------------------------------------------------------------
   Küçük markdown çevirici — Modrinth açıklamaları için.
   Bağımlılık yok, ~150 satır. ÖNEMLİ: kaynak metin ÖNCE kaçışlanır
   (escape), sonra biçimlendirme uygulanır; uzak içerikteki ham HTML
   asla olduğu gibi DOM'a basılmaz (yalnız güvenli alt küme).
   ------------------------------------------------------------ */

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeUrl(u: string): string {
  const t = u.trim();
  if (/^https?:\/\//i.test(t)) return t;
  if (/^\/\//.test(t)) return `https:${t}`;
  return "";
}

/** Satır içi biçimlendirme — kaçışlanmış metin alır. */
function inline(raw: string): string {
  let s = esc(raw);
  // satır içi kod: önce al, gerisi onu bozmasın
  const kodlar: string[] = [];
  s = s.replace(/`([^`]+)`/g, (_m, c: string) => {
    kodlar.push(c);
    return `\u0000K${kodlar.length - 1}\u0000`;
  });
  // görsel ![alt](url)
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (m, alt: string, url: string) => {
    const u = safeUrl(url.replace(/&amp;/g, "&"));
    return u ? `<img src="${esc(u)}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer">` : m;
  });
  // bağlantı [metin](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (m, txt: string, url: string) => {
    const u = safeUrl(url.replace(/&amp;/g, "&"));
    return u ? `<a href="${esc(u)}" data-ext="1">${txt}</a>` : m;
  });
  // çıplak bağlantı
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<>"]+)/g, (_m, pre: string, url: string) =>
    `${pre}<a href="${esc(url)}" data-ext="1">${url}</a>`);
  s = s.replace(/\*\*\*([^*]+)\*\*\*/g, "<b><i>$1</i></b>");
  s = s.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  s = s.replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, "$1<i>$2</i>");
  s = s.replace(/(^|[\s(])_([^_\s][^_]*)_/g, "$1<i>$2</i>");
  s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  s = s.replace(/\u0000K(\d+)\u0000/g, (_m, i: string) => `<code>${kodlar[+i]}</code>`);
  return s;
}

/** Ham HTML'den yalnız güvenli karşılıkları al (img/a/br), gerisini at. */
function htmlKirp(src: string): string {
  let s = src;
  // <center>, <details> gibi sarmalayıcılar: sadece içeriği kalsın
  s = s.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, (_m, u: string) => `\n\n![resim](${u})\n\n`);
  s = s.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_m, u: string, t: string) => `[${t.replace(/<[^>]+>/g, "")}](${u})`);
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/(p|div|h[1-6]|li|tr)>/gi, "\n\n");
  s = s.replace(/<li[^>]*>/gi, "- ");
  s = s.replace(/<h([1-4])[^>]*>/gi, (_m, n: string) => `\n\n${"#".repeat(+n)} `);
  s = s.replace(/<\/?(details|summary|center|table|tbody|thead|tr|td|th|span|font|u|b|i|strong|em|sup|sub|kbd|p|div|ul|ol|blockquote|figure|figcaption)[^>]*>/gi, "\n");
  s = s.replace(/<[^>]+>/g, "");
  s = s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  return s;
}

export function mdToHtml(src: string): string {
  if (!src) return "";
  let s = src.replace(/\r\n?/g, "\n");
  s = htmlKirp(s);

  // kod blokları (``` … ```) — çıkar, sonra geri koy
  const bloklar: string[] = [];
  s = s.replace(/```[a-zA-Z0-9+-]*\n([\s\S]*?)```/g, (_m, kod: string) => {
    bloklar.push(kod.replace(/\n$/, ""));
    return `\u0000B${bloklar.length - 1}\u0000`;
  });

  const satirlar = s.split("\n");
  const out: string[] = [];
  let liste: "ul" | "ol" | null = null;
  let paragraf: string[] = [];

  const paragrafKapat = () => {
    if (!paragraf.length) return;
    out.push(`<p>${inline(paragraf.join(" "))}</p>`);
    paragraf = [];
  };
  const listeKapat = () => {
    if (liste) {
      out.push(`</${liste}>`);
      liste = null;
    }
  };

  for (const ham of satirlar) {
    const line = ham.trimEnd();
    const t = line.trim();

    if (!t) {
      paragrafKapat();
      listeKapat();
      continue;
    }
    // kod bloğu yer tutucusu
    const bm = t.match(/^\u0000B(\d+)\u0000$/);
    if (bm) {
      paragrafKapat();
      listeKapat();
      out.push(`<pre><code>${esc(bloklar[+bm[1]])}</code></pre>`);
      continue;
    }
    // başlık
    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      paragrafKapat();
      listeKapat();
      const n = Math.min(6, h[1].length);
      out.push(`<h${n}>${inline(h[2])}</h${n}>`);
      continue;
    }
    // yatay çizgi
    if (/^([-*_])\1{2,}$/.test(t)) {
      paragrafKapat();
      listeKapat();
      out.push("<hr>");
      continue;
    }
    // alıntı
    if (t.startsWith(">")) {
      paragrafKapat();
      listeKapat();
      out.push(`<blockquote>${inline(t.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }
    // sıralı liste
    const ol = t.match(/^\d+[.)]\s+(.*)$/);
    if (ol) {
      paragrafKapat();
      if (liste !== "ol") {
        listeKapat();
        out.push("<ol>");
        liste = "ol";
      }
      out.push(`<li>${inline(ol[1])}</li>`);
      continue;
    }
    // madde listesi
    const ul = t.match(/^[-*+]\s+(.*)$/);
    if (ul) {
      paragrafKapat();
      if (liste !== "ul") {
        listeKapat();
        out.push("<ul>");
        liste = "ul";
      }
      out.push(`<li>${inline(ul[1])}</li>`);
      continue;
    }
    // tablo satırı → düz metin (boru işaretleriyle)
    if (t.includes("|") && /^\|.*\|$/.test(t)) {
      paragrafKapat();
      listeKapat();
      if (/^[|\-\s:]+$/.test(t)) continue;
      out.push(`<p class="md-tr">${inline(t.replace(/^\||\|$/g, "").split("|").join(" · "))}</p>`);
      continue;
    }
    listeKapat();
    paragraf.push(t);
  }
  paragrafKapat();
  listeKapat();
  return out.join("\n");
}
