// BELLEK UYARISI — bilgilendirme amaçlı, ASLA otomatik uygulanmaz.
//
// Kullanıcı kararı (2026-11-15): "mod paketi kurulurken önerilen RAM otomatik
// uygulanmasın, sadece uyarı gösterilsin." Bu yüzden burada `cmd_set_instance_ram`
// ÇAĞRILMAZ; yalnızca metin üretilir. Bellek sürgüsü Kurulumlar → Java & Args.
//
// Neden var: 358 modlu bir paket 4 GB ile takılır (çöp toplayıcı sürekli
// çalışır). Öneriler kaba ama gerçek gözleme dayanıyor:
//   ~60 mod  → 5 GB   (4 GB sınırda kalıyor)
//   ~120 mod → 7 GB   (Iris + dünya yüklemesi ağır)
//   ~200+    → 8 GB
// Fiziksel RAM'in yarısından fazlası ASLA önerilmez (Windows + oyun aynı anda
// yaşamalı; 8 GB'lık makinede 8 GB istemek uygulamayı kilitler).

/// Uyarı eşiği: bu sayının altında öneri üretilmez.
const ESIK_MOD = 60;

/// Uyarı yapma kuralı: kullanıcı ZATEN makinenin tavanasındaysa uyarı
/// gösterilmez. Örn. 8 GB makinede 4096 MB (tam yarım) ayıran birine
/// "7168 öneriyorum" demek — Windows'u boğacağı için — hatalıdır; bu paket
/// o makinede 4 GB ile oynanacaktır, uyarı aksiyon üretmez.

/// Mod sayısına göre ham öneri (MB). 0 = uyarı yok.
export function hamOneriRamMb(modSayisi: number): number {
  if (!Number.isFinite(modSayisi) || modSayisi < ESIK_MOD) return 0;
  if (modSayisi >= 200) return 8192;
  if (modSayisi >= 120) return 7168;
  return 5120;
}

/// Fiziksel RAM'e göre kırpılmış öneri (512 MB'a yuvarlanır, yarısı tavan).
/// Uyarı gerektirmiyorsa 0 döner.
export function onerilenRamMb(modSayisi: number, mevcutRamMb: number, toplamRamMb: number): number {
  const ham = hamOneriRamMb(modSayisi);
  if (!ham) return 0;
  const tavanHam = Math.max(1024, Math.floor((toplamRamMb > 0 ? toplamRamMb : 16384) / 2));
  const tavan = Math.max(1024, Math.floor(tavanHam / 512) * 512);
  const onerilen = Math.min(ham, tavan);
  return mevcutRamMb >= onerilen ? 0 : onerilen;
}

export async function paketSonrasiRamUyarisi(inst: any): Promise<void> {
  try {
    const { invoke, state } = await import("./main");
    const modlar = (await invoke("cmd_list_mods", { instanceId: inst.id })) as any[] | undefined;
    if (!Array.isArray(modlar)) return;
    const mevcut = Number(inst.ram_mb) || 4096;
    const onerilen = onerilenRamMb(modlar.length, mevcut, state.sys?.total_ram_mb || 0);
    if (!onerilen) return;
    const { bildirimEkle } = await import("./bildirim");
    bildirimEkle(
      "kurulum",
      "Bellek düşük kalabilir",
      `${inst.name || "Paket"}: ${modlar.length} mod • önerilen ${onerilen} MB, şu an ${mevcut} MB. ` +
        "Kurulumlar → bu kurulum → Java & Args sekmesinden bellek sürgüsünü artırabilirsin. (Otomatik değiştirilmedi.)",
    );
  } catch {
    /* mod listesi okunamadı: kurulum akışı asla etkilenmez */
  }
}

/// Uyarı HTML'i. Uyarı yoksa boş dizge döner (çağıran tarafı sadeleştirir).
///
/// `yer`:
///   "kurulum" → paket kurulduktan hemen sonraki pencerede gösterilir
///               (orada sürgü yok, yol tarif edilir)
///   "ayar"    → Kurulumlar → Java & Args: sürgü hemen altında
export function ramUyarisiHtml(
  modSayisi: number,
  mevcutRamMb: number,
  toplamRamMb: number,
  yer: "kurulum" | "ayar",
): string {
  const onerilen = onerilenRamMb(modSayisi, mevcutRamMb, toplamRamMb);
  if (!onerilen) return "";
  const yol =
    yer === "ayar"
      ? "Bellek sürgüsünü yukarı çekmek takılmayı azaltır; sistem RAM'inin en fazla yarısını ayır."
      : "Kurulumlar → bu kurulum → Java & Args sekmesindeki bellek sürgüsünden artırabilirsin.";
  return `
    <div class="ram-uyari">
      <b>Bu pakette ${modSayisi} mod var.</b>
      Önerilen bellek <b>${onerilen} MB</b>, şu an <b>${mevcutRamMb} MB</b>.
      ${yol}
    </div>`;
}
