package com.yikimlient.client;

import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_1060;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

/**
 * MENÜ KARAKTERİ (v1.32.0) — dokusuz, saf DOLGU tabanlı 3B oyuncu.
 *
 * NEDEN DOKU YOK: menüde özel {@code class_1043} dokusu çizildiğinde (özellikle
 * ImmediatelyFast/Sodium'lu kurulumlarda) metin partisi o dokunun UV'si ile
 * birleşiyor ve ekranın yarısı tek renk gri/beyaz bloklarla kaplanıyordu.
 * Bu yüzden menüde TEK BİR doku çizimi yok: model CPU'da kutu kutu hesaplanır,
 * yüzlerin texel'leri ekrana yansıtılır ve yalnızca DOLGU olarak basılır.
 * Aynı yüzde yan yana aynı renk texel'ler tek dolguda birleşir.
 *
 * v1.32.0 (kullanıcı: "pelerin birlikte dönmüyor, üst katman yok"):
 *  - Gerçek Y ekseni dönüşü: kafa/gövde/kollar/bacaklar + ŞAPKA/CEKET/KOLLUK/
 *    PANTOLON üst katmanı (vanilla atlas düzeni) birlikte döner.
 *  - Pelerin gövdenin ARKASINA bağlı bir kutu olarak çizilir; dönüşte gövdeyle
 *    birlikte hareket eder, arkadan (12,1) paneli görünür.
 *  - Elitra modunda pelerin yerine iki kanat çizilir; kanatlar (36,2) paneli.
 *  - 24 kare TAM tur (15° adım): sürükleyerek her açıdan bakabilirsin.
 *  - Kareler dikdörtgen listesi olarak önbelleğe alınır: çizim sırasında
 *    görüntü işleme/disk yok, sadece dolgu (menü FPS'i etkilenmez).
 */
public final class YikimKarakter {
    /** 15 derece adım — tam tur. */
    private static final int KARE_SAYISI = 24;
    /** 1 model birimi = 32 alt birim (koordinatlar int olarak saklanır). */
    private static final int OLCU = 32;
    /** Model tuvalinin birim ölçüleri (x: -12..12, y: 0..40). */
    private static final float TUVAL_G = 24.0f;
    private static final float TUVAL_Y = 40.0f;
    /** Arkadan görünüm kare indeksi (180°). */
    public static final int ARKA = KARE_SAYISI / 2;

    private static int[][] kareler;
    private static long kareImza = Long.MIN_VALUE;
    private static long sonDeneme;
    private static long sonKontrol;
    private static volatile int kareIndeksi;
    private static volatile boolean slim;
    private static volatile boolean elitraModu;
    private static volatile boolean pelerinVar;

    private static class_2960 deri;
    private static long deriImza = Long.MIN_VALUE;

    private YikimKarakter() {
    }

    public static void slimAyarla(boolean deger) {
        if (YikimKarakter.slim != deger) {
            YikimKarakter.kareImza = Long.MIN_VALUE;
        }
        YikimKarakter.slim = deger;
    }

    public static boolean hasPelerin() {
        return YikimKarakter.pelerinVar;
    }

    /** Elitra sekmesi: sırtta pelerin yerine kanat gösterilir. */
    public static void elitraModu(boolean acik) {
        if (YikimKarakter.elitraModu != acik) {
            YikimKarakter.elitraModu = acik;
            YikimKarakter.kareImza = Long.MIN_VALUE;
        }
    }

    public static boolean elitraModu() {
        return YikimKarakter.elitraModu;
    }

    /** Karakteri arkadan göster (pelerin/elitra sekmelerine geçince). */
    public static void arkayaDon() {
        YikimKarakter.kareIndeksi = ARKA;
    }

    /** Karakteri önden göster (skin sekmesi). */
    public static void oneDon() {
        YikimKarakter.kareIndeksi = 0;
    }

    /** Kullanıcı sürükleyerek döndürür (24 kare arasında). */
    public static void dondur(int kareFarki) {
        int yeni = (YikimKarakter.kareIndeksi + kareFarki) % KARE_SAYISI;
        if (yeni < 0) {
            yeni += KARE_SAYISI;
        }
        YikimKarakter.kareIndeksi = yeni;
    }

    private static Path yol(String ad) {
        return YikimBridge.stateDir().resolve(ad);
    }

    /**
     * Oyuncunun GERÇEK derisi — yalnız oyun içi gövde dokusu için.
     *
     * v1.32.0 — OYUN İÇİNDE DERİ MOR (eksik doku) ÇIKIYORDU: 1.21.9+ gövde
     * dokusu `AssetInfo.TextureAssetInfo(id)` ile aranır ve vanilla bu yolu
     * `textures/<yol>.png` olarak çözer. Doku yalnız `yikimlient:oyuncu/deri`
     * kimliğine kayıtlıydı; aranan `yikimlient:textures/oyuncu/deri.png`
     * bulunamadığı için oyuncu mor-siyah çiziliyordu. Artık kozmetik
     * dokularındaki gibi TÜM aranabilecek yollara kaydedilir.
     */
    public static class_2960 deriDoku() {
        try {
            Path dosya = YikimKarakter.yol("deri.png");
            if (!Files.isRegularFile(dosya, new LinkOption[0])) {
                return null;
            }
            long zaman = Files.getLastModifiedTime(dosya, new LinkOption[0]).toMillis();
            if (YikimKarakter.deri != null && zaman == YikimKarakter.deriImza) {
                return YikimKarakter.deri;
            }
            try (java.io.InputStream in = Files.newInputStream(dosya)) {
                class_1011 gorsel = class_1011.method_4309(in);
                class_1043 nesne = new class_1043(() -> "yikim-deri", gorsel);
                class_2960 kimlik = class_2960.method_43902("yikimlient", "oyuncu/deri");
                class_2960 dokuYolu = class_2960.method_43902("yikimlient", "textures/oyuncu/deri.png");
                class_2960 dokuYoluUzantisiz = class_2960.method_43902("yikimlient", "textures/oyuncu/deri");
                class_1060 tm = class_310.method_1551().method_1531();
                tm.method_4616(kimlik, nesne);
                tm.method_4616(dokuYolu, nesne);
                tm.method_4616(dokuYoluUzantisiz, nesne);
                nesne.method_4524();
                YikimKarakter.deri = kimlik;
                YikimKarakter.deriImza = zaman;
                return kimlik;
            }
        }
        catch (Throwable ignored) {
            return YikimKarakter.deri;
        }
    }

    /** Karakteri çiz: `cx` yatay merkez, `tepe` başın üstü, `boy` toplam boy (px). */
    public static void draw(class_332 graphics, int cx, int tepe, int boy, int arkaRenk) {
        int istenen = Math.max(48, boy);
        float olcek = (float)istenen / TUVAL_Y;
        int genislik = Math.round(TUVAL_G * olcek);
        int boyPx = Math.round(TUVAL_Y * olcek);
        YikimDraw.roundedFill(graphics, cx - genislik / 3, tepe + boyPx - Math.round(2 * olcek),
            cx + genislik / 3, tepe + boyPx + Math.max(2, Math.round(2 * olcek)),
            YikimTheme.alpha(arkaRenk, 90));
        int[] kare = YikimKarakter.kare();
        if (kare == null) {
            return;
        }
        int sol = cx - genislik / 2;
        float birim = olcek / (float)OLCU;
        for (int i = 0; i + 4 < kare.length; i += 5) {
            int x0 = sol + Math.round((float)kare[i] * birim);
            int y0 = tepe + Math.round((float)kare[i + 1] * birim);
            int x1 = sol + Math.round((float)kare[i + 2] * birim);
            int y1 = tepe + Math.round((float)kare[i + 3] * birim);
            if (x1 <= x0) {
                x1 = x0 + 1;
            }
            if (y1 <= y0) {
                y1 = y0 + 1;
            }
            graphics.method_25294(x0, y0, x1, y1, kare[i + 4]);
        }
    }

    /** Geçerli kare (dikdörtgen listesi) — gerekirse yeniden üretir. */
    private static int[] kare() {
        try {
            int[][] hepsi = YikimKarakter.kareler();
            if (hepsi == null) {
                return null;
            }
            return hepsi[YikimKarakter.kareIndeksi % KARE_SAYISI];
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    private static int[][] kareler() {
        try {
            long kontrol = System.currentTimeMillis();
            // Dosya denetimi saniyede bir: her karede disk çağrısı menüyü yoruyordu.
            if (YikimKarakter.kareler != null && kontrol - YikimKarakter.sonKontrol < 900L) {
                return YikimKarakter.kareler;
            }
            YikimKarakter.sonKontrol = kontrol;
            Path deriYol = YikimKarakter.yol("deri.png");
            if (!Files.isRegularFile(deriYol, new LinkOption[0])) {
                return null;
            }
            Path kanatYol = YikimKarakter.yol("elytra.png");
            Path pelerinYol = YikimKarakter.yol("pelerin.png");
            Path kozYol = YikimKarakter.elitraModu
                ? (Files.isRegularFile(kanatYol, new LinkOption[0]) ? kanatYol : null)
                : (Files.isRegularFile(pelerinYol, new LinkOption[0]) ? pelerinYol : null);
            long zaman = Files.getLastModifiedTime(deriYol, new LinkOption[0]).toMillis();
            if (kozYol != null) {
                zaman ^= Files.getLastModifiedTime(kozYol, new LinkOption[0]).toMillis() << 1;
            }
            zaman ^= YikimKarakter.elitraModu ? -1L : 0L;
            zaman ^= YikimKarakter.slim ? 0x5DEECE66DL : 0L;
            if (YikimKarakter.kareler != null && zaman == YikimKarakter.kareImza) {
                return YikimKarakter.kareler;
            }
            long simdi = System.currentTimeMillis();
            if (YikimKarakter.kareler != null && simdi - YikimKarakter.sonDeneme < 4000L) {
                return YikimKarakter.kareler;
            }
            YikimKarakter.sonDeneme = simdi;
            BufferedImage deri = ImageIO.read(deriYol.toFile());
            if (deri == null) {
                return YikimKarakter.kareler;
            }
            BufferedImage kozmetik = null;
            if (kozYol != null) {
                try {
                    kozmetik = ImageIO.read(kozYol.toFile());
                }
                catch (Throwable ignored) {
                    kozmetik = null;
                }
            }
            YikimKarakter.pelerinVar = kozmetik != null;
            int[] deriPiksel = YikimKarakter.pikseller(deri);
            int[] kozPiksel = YikimKarakter.pikseller(kozmetik);
            if (kozmetik != null) {
                YikimKarakter.KOZ_BOYUT[0] = kozmetik.getWidth();
                YikimKarakter.KOZ_BOYUT[1] = kozmetik.getHeight();
            }
            int[][] hepsi = new int[KARE_SAYISI][];
            for (int f = 0; f < KARE_SAYISI; ++f) {
                double aci = (double)f / (double)KARE_SAYISI * Math.PI * 2.0;
                hepsi[f] = YikimKarakter.kareUret(deriPiksel, deri.getWidth(), deri.getHeight(),
                    kozPiksel, kozmetik, (float)aci, YikimKarakter.slim, YikimKarakter.elitraModu);
            }
            YikimKarakter.kareler = hepsi;
            YikimKarakter.kareImza = zaman;
            return hepsi;
        }
        catch (Throwable ignored) {
            return YikimKarakter.kareler;
        }
    }

    // ------------------------------------------------------------------ model

    /** Kutu: model uzayında eksen hizalı; 1 birim = 1 deri pikseli; y AŞAĞI. */
    private static final class Kutu {
        final float x0;
        final float x1;
        final float y0;
        final float y1;
        final float z0;
        final float z1;
        /** Atlas köşesi (64'lük gridde). */
        final int u;
        final int v;
        /** Dokunun gerçek ölçüleri (üst katmanda geometriden bağımsız). */
        final int tw;
        final int th;
        final int td;
        /** Kozmetik dokusu mu (pelerin/elitra). */
        final boolean koz;
        /** Kutuya özel Y ekseni dönüşü (radyan) — elitra kanatları için. */
        final float yaw;
        /** Doku yatayda aynalanır (sağ kanat). */
        final boolean ayna;

        Kutu(float x0, float x1, float y0, float y1, float z0, float z1,
             int u, int v, int tw, int th, int td, boolean koz, float yaw, boolean ayna) {
            this.x0 = x0;
            this.x1 = x1;
            this.y0 = y0;
            this.y1 = y1;
            this.z0 = z0;
            this.z1 = z1;
            this.u = u;
            this.v = v;
            this.tw = tw;
            this.th = th;
            this.td = td;
            this.koz = koz;
            this.yaw = yaw;
            this.ayna = ayna;
        }
    }

    /** Model küpü: kafa/gövde/kollar/bacaklar + üst katman (şapka/ceket/…). */
    private static List<Kutu> kutular(boolean slim, boolean elitra, boolean kozmetikVar) {
        List<Kutu> liste = new ArrayList<Kutu>(24);
        float kolIc = slim ? 7.0f : 8.0f;
        int kol = slim ? 3 : 4;
        // taban katman (atlas: kafa 0,0 · gövde 16,16 · sag kol 40,16 · sol kol 32,48)
        liste.add(new Kutu(-4.0f, 4.0f, 0.0f, 8.0f, -4.0f, 4.0f, 0, 0, 8, 8, 8, false, 0.0f, false));
        liste.add(new Kutu(-4.0f, 4.0f, 8.0f, 20.0f, -2.0f, 2.0f, 16, 16, 8, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(-kolIc, -4.0f, 8.0f, 20.0f, -2.0f, 2.0f, 40, 16, kol, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(4.0f, kolIc, 8.0f, 20.0f, -2.0f, 2.0f, 32, 48, kol, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(-4.0f, 0.0f, 20.0f, 32.0f, -2.0f, 2.0f, 0, 16, 4, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(0.0f, 4.0f, 20.0f, 32.0f, -2.0f, 2.0f, 16, 48, 4, 12, 4, false, 0.0f, false));
        // üst katman — geometri yarım piksel büyür, DOKU ölçüsü tabanla aynı kalır
        liste.add(new Kutu(-4.25f, 4.25f, -0.25f, 8.25f, -4.25f, 4.25f, 32, 0, 8, 8, 8, false, 0.0f, false));
        liste.add(new Kutu(-4.25f, 4.25f, 7.75f, 20.25f, -2.25f, 2.25f, 16, 32, 8, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(-kolIc - 0.25f, -3.75f, 7.75f, 20.25f, -2.25f, 2.25f, 40, 32, kol, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(3.75f, kolIc + 0.25f, 7.75f, 20.25f, -2.25f, 2.25f, 48, 48, kol, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(-4.25f, 0.25f, 19.75f, 32.25f, -2.25f, 2.25f, 0, 32, 4, 12, 4, false, 0.0f, false));
        liste.add(new Kutu(-0.25f, 4.25f, 19.75f, 32.25f, -2.25f, 2.25f, 0, 48, 4, 12, 4, false, 0.0f, false));
        if (!kozmetikVar) {
            return liste;
        }
        if (elitra) {
            // İki kanat: gövde arkasında, hafifçe dışa açık; kanatlar AYNALI.
            liste.add(new Kutu(1.5f, 11.5f, 7.0f, 27.0f, -4.0f, -2.0f, 22, 0, 10, 20, 2, true, -0.30f, false));
            liste.add(new Kutu(-11.5f, -1.5f, 7.0f, 27.0f, -4.0f, -2.0f, 22, 0, 10, 20, 2, true, 0.30f, true));
        } else {
            // Pelerin: gövdenin ARKASINA bağlı ince kutu (arkadan (12,1) görünür).
            liste.add(new Kutu(-5.0f, 5.0f, 8.0f, 24.0f, -3.6f, -2.6f, 0, 0, 10, 16, 1, true, 0.0f, false));
        }
        return liste;
    }

    /** Bir yüz: 4 köşe (model uzayı) + doku penceresi + ışık. */
    private static final class Yuz {
        final float[] kose = new float[12];
        final int u;
        final int v;
        final int uw;
        final int vh;
        final boolean koz;
        final boolean ayna;
        final float isik;
        float derinlik;

        Yuz(int u, int v, int uw, int vh, boolean koz, boolean ayna, float isik) {
            this.u = u;
            this.v = v;
            this.uw = uw;
            this.vh = vh;
            this.koz = koz;
            this.ayna = ayna;
            this.isik = isik;
        }
    }

    /** Tek kareyi dikdörtgen listesine (x0,y0,x1,y1,renk × n) çevir. */
    private static int[] kareUret(int[] deriPiksel, int deriG, int deriY,
                                  int[] kozPiksel, BufferedImage kozmetik,
                                  float aci, boolean slim, boolean elitra) {
        if (deriPiksel == null) {
            return new int[0];
        }
        List<Yuz> yuzler = new ArrayList<Yuz>(64);
        for (Kutu kutu : YikimKarakter.kutular(slim, elitra, kozPiksel != null)) {
            if (kutu.koz && kozPiksel == null) {
                continue;
            }
            YikimKarakter.kutuYuzleri(yuzler, kutu, aci);
        }
        if (yuzler.isEmpty()) {
            return new int[0];
        }
        // yakından uzağa: arkadaki önce çizilir
        yuzler.sort((a, b) -> Float.compare(a.derinlik, b.derinlik));
        List<int[]> cikti = new ArrayList<int[]>(1024);
        for (Yuz yuz : yuzler) {
            YikimKarakter.yuzCiz(cikti, yuz, deriPiksel, deriG, deriY, kozPiksel);
        }
        int[] duz = new int[cikti.size() * 5];
        for (int i = 0; i < cikti.size(); ++i) {
            int[] r = cikti.get(i);
            System.arraycopy(r, 0, duz, i * 5, 5);
        }
        return duz;
    }

    private static int[] pikseller(BufferedImage resim) {
        if (resim == null) {
            return null;
        }
        int g = resim.getWidth();
        int y = resim.getHeight();
        int[] veri = new int[g * y];
        resim.getRGB(0, 0, g, y, veri, 0, g);
        return veri;
    }

    /**
     * Kutunun dört yan yüzünü (ön/arka/sağ/sol) üretir. Üst/alt yüzler saf Y
     * dönüşünde görünmez (ekranda sıfır yükseklik) — bu yüzden eklenmez.
     */
    private static void kutuYuzleri(List<Yuz> hedef, Kutu k, float aci) {
        int d = k.td;
        int w = k.tw;
        int h = k.th;
        int u = k.u;
        int v = k.v;
        // atlas düzeni (vanilla cuboid): ön (u+d, v+d), arka (u+2d+w, v+d),
        // +X yanı (u+d+w, v+d), -X yanı (u, v+d)
        hedef.add(YikimKarakter.yuz(k, 0, u + d, v + d, w, h, 1.00f, aci));
        hedef.add(YikimKarakter.yuz(k, 1, u + d + w + d, v + d, w, h, 0.86f, aci));
        hedef.add(YikimKarakter.yuz(k, 2, u + d + w, v + d, d, h, 0.74f, aci));
        hedef.add(YikimKarakter.yuz(k, 3, u, v + d, d, h, 0.80f, aci));
    }

    /**
     * Tek yüzü kur. `tip`: 0 = +Z (ön), 1 = -Z (arka), 2 = +X (sağ), 3 = -X (sol).
     * Köşe sırası: sol üst, sağ üst, sağ alt, sol alt (doku u/v yönünde).
     */
    private static Yuz yuz(Kutu k, int tip, int u, int v, int uw, int vh, float isik, float aci) {
        Yuz yz = new Yuz(u, v, Math.max(1, uw), Math.max(1, vh), k.koz, k.ayna, isik);
        float x0 = k.x0;
        float x1 = k.x1;
        float y0 = k.y0;
        float y1 = k.y1;
        float z0 = k.z0;
        float z1 = k.z1;
        float[] kok;
        float[] du;
        float[] dv;
        switch (tip) {
            case 0: // +Z: sol üst (x0, y0, z1), u +X
                kok = new float[]{x0, y0, z1};
                du = new float[]{x1 - x0, 0.0f, 0.0f};
                break;
            case 1: // -Z (arkadan bakış): sol üst (x1, y0, z0), u -X
                kok = new float[]{x1, y0, z0};
                du = new float[]{x0 - x1, 0.0f, 0.0f};
                break;
            case 2: // +X: sol üst (x1, y0, z1), u -Z
                kok = new float[]{x1, y0, z1};
                du = new float[]{0.0f, 0.0f, z0 - z1};
                break;
            default: // -X: sol üst (x0, y0, z0), u +Z
                kok = new float[]{x0, y0, z0};
                du = new float[]{0.0f, 0.0f, z1 - z0};
                break;
        }
        dv = new float[]{0.0f, y1 - y0, 0.0f};
        // köşe sırası: (0,0) (1,0) (0,1) (1,1) — yuzCiz bilineerinde p00,p10,p01,p11
        for (int i = 0; i < 4; ++i) {
            float ti = (i == 1 || i == 3) ? 1.0f : 0.0f;
            float tj = (i >= 2) ? 1.0f : 0.0f;
            float px = kok[0] + du[0] * ti + dv[0] * tj;
            float py = kok[1] + du[1] * ti + dv[1] * tj;
            float pz = kok[2] + du[2] * ti + dv[2] * tj;
            float[] don = YikimKarakter.dondur(px, pz, aci + k.yaw);
            yz.kose[i * 3] = don[0];
            yz.kose[i * 3 + 1] = py;
            yz.kose[i * 3 + 2] = don[1];
        }
        yz.derinlik = (yz.kose[2] + yz.kose[5] + yz.kose[8] + yz.kose[11]) * 0.25f;
        return yz;
    }

    /** Y ekseni dönüşü: dönen x ve z. */
    private static float[] dondur(float x, float z, float aci) {
        float c = (float)Math.cos(aci);
        float s = (float)Math.sin(aci);
        return new float[]{x * c + z * s, z * c - x * s};
    }

    /** Bir yüzü texel texel doldur (yan yana aynı renkler tek dikdörtgende). */
    private static void yuzCiz(List<int[]> hedef, Yuz yuz, int[] deriPiksel, int deriG, int deriY,
                               int[] kozPiksel) {
        int[] kaynak = yuz.koz ? kozPiksel : deriPiksel;
        if (kaynak == null) {
            return;
        }
        // kozmetik dokusunun gerçek boyutu (HD pelerin/kanat da doğru örneklenir)
        int g = yuz.koz ? YikimKarakter.KOZ_BOYUT[0] : deriG;
        int y = yuz.koz ? YikimKarakter.KOZ_BOYUT[1] : deriY;
        float[] p00 = new float[]{yuz.kose[0], yuz.kose[1], yuz.kose[2]};
        float[] p10 = new float[]{yuz.kose[3], yuz.kose[4], yuz.kose[5]};
        float[] p01 = new float[]{yuz.kose[6], yuz.kose[7], yuz.kose[8]};
        float[] p11 = new float[]{yuz.kose[9], yuz.kose[10], yuz.kose[11]};
        // görünürlük: normalin +Z bileşeni
        float e1x = p10[0] - p00[0];
        float e1y = p10[1] - p00[1];
        float e2x = p01[0] - p00[0];
        float e2y = p01[1] - p00[1];
        float nz = e1x * e2y - e1y * e2x;
        if (nz <= 1.0E-4f) {
            return;
        }
        int uw = yuz.uw;
        int vh = yuz.vh;
        int atlasG = yuz.koz ? 64 : 64;
        int atlasY = yuz.koz ? 32 : 64;
        for (int j = 0; j < vh; ++j) {
            int calisanRenk = 0;
            int calisanX0 = 0;
            int calisanX1 = 0;
            int calisanY0 = 0;
            int calisanY1 = 0;
            for (int i = 0; i <= uw; ++i) {
                int renk = 0;
                int x0 = 0;
                int x1 = 0;
                int y0 = 0;
                int y1 = 0;
                if (i < uw) {
                    float ti0 = (float)i / (float)uw;
                    float ti1 = (float)(i + 1) / (float)uw;
                    float tj0 = (float)j / (float)vh;
                    float tj1 = (float)(j + 1) / (float)vh;
                    float ax = YikimKarakter.karis(p00[0], p10[0], p01[0], p11[0], ti0, tj0);
                    float ay = YikimKarakter.karis(p00[1], p10[1], p01[1], p11[1], ti0, tj0);
                    float bx = YikimKarakter.karis(p00[0], p10[0], p01[0], p11[0], ti1, tj0);
                    float by = YikimKarakter.karis(p00[1], p10[1], p01[1], p11[1], ti1, tj0);
                    float cx = YikimKarakter.karis(p00[0], p10[0], p01[0], p11[0], ti1, tj1);
                    float cy = YikimKarakter.karis(p00[1], p10[1], p01[1], p11[1], ti1, tj1);
                    float dx = YikimKarakter.karis(p00[0], p10[0], p01[0], p11[0], ti0, tj1);
                    float dy = YikimKarakter.karis(p00[1], p10[1], p01[1], p11[1], ti0, tj1);
                    x0 = Math.round(Math.min(Math.min(ax, bx), Math.min(cx, dx)) * (float)OLCU);
                    x1 = Math.round(Math.max(Math.max(ax, bx), Math.max(cx, dx)) * (float)OLCU);
                    y0 = Math.round(Math.min(Math.min(ay, by), Math.min(cy, dy)) * (float)OLCU);
                    y1 = Math.round(Math.max(Math.max(ay, by), Math.max(cy, dy)) * (float)OLCU);
                    int uu = yuz.ayna ? (yuz.u + uw - 1 - i) : (yuz.u + i);
                    renk = YikimKarakter.texel(kaynak, g, y, atlasG, atlasY, uu, yuz.v + j, yuz.isik);
                }
                boolean bitis = i == uw || renk == 0
                    || renk != calisanRenk || y0 != calisanY0 || y1 != calisanY1;
                if (!bitis) {
                    calisanX1 = x1;
                    continue;
                }
                if (calisanRenk != 0) {
                    hedef.add(new int[]{calisanX0, calisanY0, calisanX1, calisanY1, calisanRenk});
                }
                calisanRenk = renk;
                calisanX0 = x0;
                calisanX1 = x1;
                calisanY0 = y0;
                calisanY1 = y1;
            }
        }
    }

    private static float karis(float a, float b, float c, float d, float ti, float tj) {
        float ust = a + (b - a) * ti;
        float alt = c + (d - c) * ti;
        return ust + (alt - ust) * tj;
    }

    /** Kozmetik dokusunun piksel boyutu (üretim sırasında yazılır). */
    private static final int[] KOZ_BOYUT = new int[]{64, 32};

    /** Atlas texel'ini oku: 0 = saydam. */
    private static int texel(int[] kaynak, int g, int y, int atlasG, int atlasY,
                             int u, int v, float isik) {
        int sx = u * g / atlasG;
        int sy = v * y / atlasY;
        if (sx < 0 || sy < 0 || sx >= g || sy >= y) {
            return 0;
        }
        int argb = kaynak[sy * g + sx];
        if (argb >>> 24 <= 32) {
            return 0;
        }
        if (isik > 0.999f) {
            return argb | 0xFF000000;
        }
        int r = Math.round((float)(argb >> 16 & 0xFF) * isik);
        int gg = Math.round((float)(argb >> 8 & 0xFF) * isik);
        int b = Math.round((float)(argb & 0xFF) * isik);
        return 0xFF000000 | r << 16 | gg << 8 | b;
    }
}
