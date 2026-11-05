package com.yikimlient.client;

import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.ConcurrentHashMap;

/**
 * KOZMETİK SEÇİCİSİ (v1.29.0) — ana menüde karakterin altında.
 *
 * Kaynak: launcher'ın oyun açılışında yazdığı `.yikim/kozmetik-katalog.txt`
 * (sekme ayraçlı satırlar) + `.yikim/kozmetik/<tür>/<id>.png` kopyaları.
 * Mod ağa çıkmaz; kullanıcı bir karta tıklayınca `.yikim/kozmetik-istek.txt`
 * dosyasına `tur<TAB>id` yazılır, launcher ~1 sn içinde uygular ve deri/
 * pelerin/elitra dosyalarını tazeler (mod mtime'dan anlar).
 *
 * Her adım korumalı: katalog yoksa "kitaplık boş" satırı çizilir, oyun düşmez.
 */
public final class YikimKozmetikSecim {
    public static final int DERI = 0;
    public static final int PELERIN = 1;
    public static final int KANAT = 2;
    private static final String[] TUR = new String[]{"deri", "pelerin", "kanat"};
    private static final String[] BASLIK = new String[]{"DERİ", "PELERİN", "ELİTRA"};

    /** Ana menü hit listesine tıklama alanı eklemek için. */
    public interface HitEkle {
        void ekle(int x, int y, int genislik, int yukseklik, Runnable eylem);
    }

    public static final class Oge {
        final String id;
        final String ad;
        final String dosya;
        final boolean slim;
        final boolean hd;

        Oge(String id, String ad, String dosya, boolean slim, boolean hd) {
            this.id = id;
            this.ad = ad;
            this.dosya = dosya;
            this.slim = slim;
            this.hd = hd;
        }
    }

    private static final List<List<Oge>> OGE = List.of(new ArrayList<Oge>(), new ArrayList<Oge>(), new ArrayList<Oge>());
    private static String[] aktif = new String[]{"", "", ""};
    private static long damga = Long.MIN_VALUE;
    private static long sonOkuma;
    private static int sekme;
    private static final int[] sayfa = new int[]{0, 0, 0};
    /** Tıklamadan sonra launcher kataloğu tazeleyene kadar iyimser gösterim. */
    private static String bekleyenTur = "";
    private static String bekleyenId = "";
    private static long bekleyenZaman;
    private static final ConcurrentHashMap<String, class_2960> DOKULAR = new ConcurrentHashMap<>();
    /** Küçük görsellerin 8×8 renk ızgarası (v1.30.0 — doku çizimi yok). */
    private static final ConcurrentHashMap<String, int[]> IZGARA = new ConcurrentHashMap<>();

    private YikimKozmetikSecim() {
    }

    public static int sekme() {
        return YikimKozmetikSecim.sekme;
    }

    public static String aktifId(int tur) {
        if (tur >= 0 && tur < 3) {
            return YikimKozmetikSecim.aktif[tur];
        }
        return "";
    }

    private static Path katalog() {
        return YikimBridge.stateDir().resolve("kozmetik-katalog.txt");
    }

    /** Kataloğu (değiştiyse) oku. */
    public static void tazele() {
        try {
            Path yol = YikimKozmetikSecim.katalog();
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return;
            }
            long simdi = System.currentTimeMillis();
            if (simdi - YikimKozmetikSecim.sonOkuma < 800L) {
                return;
            }
            YikimKozmetikSecim.sonOkuma = simdi;
            long zaman = Files.getLastModifiedTime(yol, new LinkOption[0]).toMillis();
            if (zaman == YikimKozmetikSecim.damga) {
                return;
            }
            List<String> satirlar = Files.readAllLines(yol, StandardCharsets.UTF_8);
            for (List<Oge> liste : YikimKozmetikSecim.OGE) {
                liste.clear();
            }
            String[] secili = new String[]{"", "", ""};
            for (String satir : satirlar) {
                String[] p = satir.split("\t", -1);
                if (p.length < 2) {
                    continue;
                }
                String tur = p[0].trim();
                if (tur.equals("A")) {
                    for (int i = 0; i < 3; ++i) {
                        secili[i] = i + 1 < p.length ? p[i + 1].trim() : "";
                    }
                    continue;
                }
                int indeks = switch (tur) {
                    case "D" -> 0;
                    case "P" -> 1;
                    case "K" -> 2;
                    default -> -1;
                };
                if (indeks < 0 || p.length < 5) {
                    continue;
                }
                String id = p[1].trim();
                if (id.isEmpty()) {
                    continue;
                }
                boolean bayrak = "1".equals(p[3].trim());
                YikimKozmetikSecim.OGE.get(indeks).add(
                    new Oge(id, p[2].trim(), p[4].trim(), indeks == 0 && bayrak, indeks != 0 && bayrak));
            }
            YikimKozmetikSecim.aktif = secili;
            YikimKozmetikSecim.damga = zaman;
            // iyimser gösterim katalogla eşleştiyse bırak
            if (!YikimKozmetikSecim.bekleyenTur.isEmpty()) {
                int i = YikimKozmetikSecim.turIndeks(YikimKozmetikSecim.bekleyenTur);
                if (i >= 0 && YikimKozmetikSecim.aktif[i].equals(YikimKozmetikSecim.bekleyenId)) {
                    YikimKozmetikSecim.bekleyenTur = "";
                }
            }
            // slim bilgisi karakter çizimine
            boolean slim = false;
            for (Oge oge : YikimKozmetikSecim.OGE.get(0)) {
                if (oge.id.equals(secili[0])) {
                    slim = oge.slim;
                    break;
                }
            }
            YikimKarakter.slimAyarla(slim);
        }
        catch (Throwable ignored) {
            // katalog okunamazsa mevcut hâl korunur
        }
    }

    private static int turIndeks(String tur) {
        for (int i = 0; i < 3; ++i) {
            if (YikimKozmetikSecim.TUR[i].equals(tur)) {
                return i;
            }
        }
        return -1;
    }

    private static void sec(int tur, String id) {
        try {
            Path yol = YikimBridge.stateDir().resolve("kozmetik-istek.txt");
            Files.writeString(yol, YikimKozmetikSecim.TUR[tur] + "\t" + id + "\n", StandardCharsets.UTF_8);
            YikimKozmetikSecim.bekleyenTur = YikimKozmetikSecim.TUR[tur];
            YikimKozmetikSecim.bekleyenId = id;
            YikimKozmetikSecim.bekleyenZaman = System.currentTimeMillis();
            YikimMetrics.notify(id.isEmpty() ? "Kozmetik kapatıldı" : "Seçildi: " + id);
        }
        catch (Throwable e) {
            YikimLog.info("kozmetik istegi yazilamadi: " + e);
        }
    }

    private static String gorunen(int tur) {
        if (YikimKozmetikSecim.bekleyenTur.equals(YikimKozmetikSecim.TUR[tur])
            && System.currentTimeMillis() - YikimKozmetikSecim.bekleyenZaman < 6000L) {
            return YikimKozmetikSecim.bekleyenId;
        }
        return YikimKozmetikSecim.aktif[tur];
    }

    private static class_2960 doku(String goreli) {
        try {
            if (goreli.isEmpty()) {
                return null;
            }
            String anahtar = goreli;
            class_2960 hazir = YikimKozmetikSecim.DOKULAR.get(anahtar);
            if (hazir != null) {
                return hazir;
            }
            Path yol = YikimBridge.stateDir().resolve(goreli);
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return null;
            }
            if (YikimKozmetikSecim.DOKULAR.size() > 96) {
                YikimKozmetikSecim.DOKULAR.clear();
            }
            try (InputStream in = Files.newInputStream(yol)) {
                class_1011 gorsel = class_1011.method_4309(in);
                class_1043 dokuNesnesi = new class_1043(() -> "yikim-koz", gorsel);
                String temiz = anahtar.toLowerCase(Locale.ROOT).replaceAll("[^a-z0-9/._-]", "_");
                class_2960 kimlik = class_2960.method_43902("yikimlient", "koz/" + temiz);
                class_310.method_1551().method_1531().method_4616(kimlik, dokuNesnesi);
                dokuNesnesi.method_4524();
                YikimKozmetikSecim.DOKULAR.put(anahtar, kimlik);
                return kimlik;
            }
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /**
     * Seçiciyi çiz. `x,y` sol üst, `genislik` sütun genişliği. Dönen değer
     * kullanılan yüksekliktir (çağıran altına başka şey koyabilir).
     */
    public static int draw(class_332 g, class_327 font, int x, int y, int genislik,
                           int mouseX, int mouseY, HitEkle hitler) {
        YikimKozmetikSecim.tazele();
        int yukseklik = 0;
        int sekmeG = genislik / 3;
        int seciliTur = YikimKozmetikSecim.sekme;
        for (int i = 0; i < 3; ++i) {
            int sx = x + i * sekmeG;
            int sg = i == 2 ? genislik - sekmeG * 2 : sekmeG;
            boolean aktifSekme = i == seciliTur;
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, sx, y, sg, 16);
            YikimDraw.roundedFill(g, sx, y, sx + sg, y + 16,
                aktifSekme ? YikimTheme.alpha(YikimTheme.accent, 210)
                    : (uzerinde ? YikimTheme.alpha(YikimTheme.accent, 60) : 0x33101016));
            String etiket = YikimKozmetikSecim.BASLIK[i];
            YikimAdapter.text(g, font, etiket, sx + (sg - font.method_1727(etiket)) / 2, y + 4,
                aktifSekme ? -15724524 : (uzerinde ? -723722 : YikimTheme.TEXT_MUTED), !aktifSekme);
            final int hedef = i;
            hitler.ekle(sx, y, sg, 16, () -> YikimKozmetikSecim.sekme = hedef);
        }
        yukseklik += 16 + 6;
        y += 22;

        List<Oge> liste = YikimKozmetikSecim.OGE.get(seciliTur);
        int kart = 30;
        int bosluk = 4;
        int okG = 12;
        int alan = genislik - okG * 2 - 4;
        int adet = Math.max(1, (alan + bosluk) / (kart + bosluk));
        int toplam = liste.size() + (seciliTur == 0 ? 0 : 1);
        int sayfaAdet = Math.max(1, (toplam + adet - 1) / adet);
        int sayfa = Math.min(YikimKozmetikSecim.sayfa[seciliTur], sayfaAdet - 1);
        int basla = sayfa * adet;

        if (toplam == 0) {
            YikimAdapter.text(g, font, "Kitaplıkta kayıt yok", x, y + 8, YikimTheme.TEXT_MUTED, false);
            return yukseklik + 26;
        }

        String seciliId = YikimKozmetikSecim.gorunen(seciliTur);
        for (int i = 0; i < adet; ++i) {
            int indeks = basla + i;
            if (indeks >= toplam) {
                break;
            }
            int kx = x + okG + 2 + i * (kart + bosluk);
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, kx, y, kart, kart);
            String id = "";
            Oge oge = null;
            boolean yokKarti = seciliTur != 0 && indeks == 0;
            if (!yokKarti) {
                int ogeIndeks = seciliTur == 0 ? indeks : indeks - 1;
                if (ogeIndeks >= liste.size()) {
                    break;
                }
                oge = liste.get(ogeIndeks);
                id = oge.id;
            }
            boolean bu = seciliId.equals(id);
            YikimDraw.roundedFill(g, kx, y, kx + kart, y + kart,
                bu ? YikimTheme.alpha(YikimTheme.accent, 45) : (uzerinde ? 0x55FFFFFF : 0x33000000));
            int cerceve = bu ? YikimTheme.accent : (uzerinde ? YikimTheme.alpha(YikimTheme.accent, 140) : 0x22FFFFFF);
            YikimDraw.outline(g, kx, y, kart, kart, cerceve);
            if (yokKarti) {
                YikimAdapter.text(g, font, "YOK", kx + (kart - font.method_1727("YOK")) / 2, y + 11,
                    bu ? YikimTheme.accent : YikimTheme.TEXT_MUTED, true);
            } else {
                YikimKozmetikSecim.kucukResim(g, oge, kx + 2, y + 2, kart - 4);
            }
            if (uzerinde && oge != null) {
                YikimAdapter.text(g, font, YikimDraw.clip(font, oge.ad, genislik),
                    x, y + kart + 3, YikimTheme.TEXT_DIM, false);
            }
            final String secilen = id;
            final int hedefTur = seciliTur;
            hitler.ekle(kx, y, kart, kart, () -> YikimKozmetikSecim.sec(hedefTur, secilen));
            if (bu) {
                // seçili kartın köşesinde aksan noktası
                g.method_25294(kx + kart - 5, y + 1, kx + kart - 1, y + 5, YikimTheme.accent);
            }
        }

        if (sayfaAdet > 1) {
            boolean oncekiVar = sayfa > 0;
            boolean sonrakiVar = sayfa < sayfaAdet - 1;
            YikimAdapter.text(g, font, "<", x + 3, y + 10,
                oncekiVar ? (YikimDraw.inside(mouseX, mouseY, x, y, okG, kart) ? -723722 : YikimTheme.TEXT_DIM)
                    : 0x44FFFFFF, true);
            YikimAdapter.text(g, font, ">", x + genislik - okG + 2, y + 10,
                sonrakiVar ? (YikimDraw.inside(mouseX, mouseY, x + genislik - okG, y, okG, kart) ? -723722 : YikimTheme.TEXT_DIM)
                    : 0x44FFFFFF, true);
            if (oncekiVar) {
                hitler.ekle(x, y, okG, kart, () -> --YikimKozmetikSecim.sayfa[seciliTur]);
            }
            if (sonrakiVar) {
                hitler.ekle(x + genislik - okG, y, okG, kart, () -> ++YikimKozmetikSecim.sayfa[seciliTur]);
            }
            YikimAdapter.text(g, font, (sayfa + 1) + "/" + sayfaAdet,
                x + genislik - font.method_1727((sayfa + 1) + "/" + sayfaAdet), y + kart + 3,
                YikimTheme.TEXT_MUTED, false);
        }
        yukseklik += kart + 14;
        return yukseklik;
    }

    /**
     * Deri için kafa, pelerin/kanat için küçük görsel.
     *
     * v1.30.0: ARTIK DOKU ÇİZİLMİYOR. Menüde özel doku basmak, metin partisiyle
     * birleşip ekranı tek renk bloklarla kaplayan gri kutulara yol açıyordu;
     * burada görsel önce 8×8 renk ızgarasına indiriliyor, sonra HÜCRE olarak
     * (dolgularla) boyanıyor. Hiçbir doku bağlama durumu değişmiyor.
     */
    private static void kucukResim(class_332 g, Oge oge, int x, int y, int boyut) {
        if (oge == null) {
            YikimDraw.roundedFill(g, x + 4, y + 4, x + boyut - 4, y + boyut - 4, 0x33FFFFFF);
            return;
        }
        int[] izgara = YikimKozmetikSecim.izgara(oge.dosya, oge.dosya.startsWith("kozmetik/deri/"));
        if (izgara == null) {
            YikimDraw.roundedFill(g, x + 4, y + 4, x + boyut - 4, y + boyut - 4, 0x33FFFFFF);
            return;
        }
        int hucre = Math.max(1, boyut / 8);
        int sol = x + (boyut - hucre * 8) / 2;
        int ust = y + (boyut - hucre * 8) / 2;
        for (int sy = 0; sy < 8; ++sy) {
            int satir = sy * 8;
            int sx = 0;
            while (sx < 8) {
                int renk = izgara[satir + sx];
                if (renk == 0) {
                    ++sx;
                    continue;
                }
                int bitis = sx + 1;
                while (bitis < 8 && izgara[satir + bitis] == renk) {
                    ++bitis;
                }
                g.method_25294(sol + sx * hucre, ust + sy * hucre, sol + bitis * hucre,
                    ust + (sy + 1) * hucre, renk);
                sx = bitis;
            }
        }
    }

    /** Görsel dosyasını 8×8 renk ızgarasına indir (dosya+ölçüm başına önbellek). */
    private static int[] izgara(String goreli, boolean kafa) {
        try {
            Path yol = YikimBridge.stateDir().resolve(goreli);
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return null;
            }
            long zaman = Files.getLastModifiedTime(yol, new LinkOption[0]).toMillis();
            String anahtar = goreli + "|" + zaman + "|" + kafa;
            int[] hazir = YikimKozmetikSecim.IZGARA.get(anahtar);
            if (hazir != null) {
                return hazir;
            }
            java.awt.image.BufferedImage gorsel = javax.imageio.ImageIO.read(yol.toFile());
            if (gorsel == null) {
                return null;
            }
            if (YikimKozmetikSecim.IZGARA.size() > 256) {
                YikimKozmetikSecim.IZGARA.clear();
            }
            int[] hedef = new int[64];
            for (int y = 0; y < 8; ++y) {
                for (int x = 0; x < 8; ++x) {
                    int sx;
                    int sy;
                    if (kafa) {
                        int olcek = gorsel.getWidth() / 64;
                        if (olcek < 1) {
                            olcek = 1;
                        }
                        sx = 8 * olcek + x * olcek;
                        sy = 8 * olcek + y * olcek;
                    } else {
                        sx = x * gorsel.getWidth() / 8;
                        sy = (4 + y * 3) * gorsel.getHeight() / 40;
                    }
                    if (sx >= gorsel.getWidth()) {
                        sx = gorsel.getWidth() - 1;
                    }
                    if (sy >= gorsel.getHeight()) {
                        sy = gorsel.getHeight() - 1;
                    }
                    int argb = gorsel.getRGB(sx, sy);
                    hedef[y * 8 + x] = (argb >>> 24) > 32 ? argb | 0xFF000000 : 0;
                }
            }
            YikimKozmetikSecim.IZGARA.put(anahtar, hedef);
            return hedef;
        }
        catch (Throwable ignored) {
            return null;
        }
    }
}
