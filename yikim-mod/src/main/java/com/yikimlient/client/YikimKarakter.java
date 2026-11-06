package com.yikimlient.client;

import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_1060;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;

/**
 * MENÜ KARAKTERİ (v1.33.0) — oyunun kendi 3B oyuncu modeli.
 *
 * Gövde/kafa/kollar/bacaklar, üst katman (şapka/ceket/kolluk/pantolon),
 * pelerin ve elitra artık vanilla çizicileriyle çizilir; doku eşlemesi
 * oyunun kendi model UV'leridir. Bu yüzden HD pelerinler/elitralar menüde de
 * oyun içindeki gibi görünür ve yüz UV'leri kaymaz.
 *
 * Buradaki sınıf yalnız yön/poz durumunu tutar:
 *   - 24 kademeli tam tur (15°) — sürükleyerek döndürme,
 *   - `elitraModu`: sırtta pelerin yerine kanat,
 *   - `slim`: ince (Alex) gövde.
 *
 * Kare başına doku işleme/disk yok: render state `YikimModel` içinde
 * (değişmediği sürece) yeniden kurulmaz.
 */
public final class YikimKarakter {
    /** 15° adım — tam tur. */
    private static final int KARE_SAYISI = 24;
    /** Arkadan görünüm (180°). */
    public static final int ARKA = KARE_SAYISI / 2;

    private static volatile int kareIndeksi;
    private static volatile boolean slim;
    private static volatile boolean elitraModu;

    private static class_2960 deri;
    private static long deriImza = Long.MIN_VALUE;
    private static long deriKontrol;

    private YikimKarakter() {
    }

    public static void slimAyarla(boolean deger) {
        YikimKarakter.slim = deger;
    }

    public static boolean slim() {
        return YikimKarakter.slim;
    }

    /** Elitra sekmesi: sırtta pelerin yerine kanat gösterilir. */
    public static void elitraModu(boolean acik) {
        YikimKarakter.elitraModu = acik;
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

    /** Kullanıcı sürükleyerek döndürür (24 kademe arasında). */
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
     * Oyuncunun GERÇEK derisi — hem oyun içi gövde dokusu hem menü modeli.
     *
     * Doku kimliği `yikimlient:oyuncu/deri`; 1.21.9+ bu kimliği
     * `textures/oyuncu/deri.png` yolunda arar, o yüzden üç yol da kaydedilir.
     * Dosya denetimi saniyede en fazla bir kez (bu metot her karede çağrılır).
     */
    public static class_2960 deriDoku() {
        try {
            long simdi = System.currentTimeMillis();
            if (YikimKarakter.deri != null && simdi - YikimKarakter.deriKontrol < 1000L) {
                return YikimKarakter.deri;
            }
            YikimKarakter.deriKontrol = simdi;
            Path dosya = YikimKarakter.yol("deri.png");
            if (!Files.isRegularFile(dosya, new LinkOption[0])) {
                YikimKarakter.deri = null;
                YikimKarakter.deriImza = Long.MIN_VALUE;
                return null;
            }
            long zaman = Files.getLastModifiedTime(dosya, new LinkOption[0]).toMillis()
                ^ Files.size(dosya) << 8;
            if (YikimKarakter.deri != null && zaman == YikimKarakter.deriImza) {
                return YikimKarakter.deri;
            }
            try (java.io.InputStream in = Files.newInputStream(dosya)) {
                class_1011 gorsel = class_1011.method_4309(in);
                if (gorsel == null) {
                    return YikimKarakter.deri;
                }
                class_1043 nesne = new class_1043(() -> "yikim-deri", gorsel);
                class_2960 kimlik = class_2960.method_43902("yikimlient", "oyuncu/deri");
                class_2960 dokuYolu = class_2960.method_43902("yikimlient", "textures/oyuncu/deri.png");
                class_2960 uzantisiz = class_2960.method_43902("yikimlient", "textures/oyuncu/deri");
                class_1060 tm = class_310.method_1551().method_1531();
                tm.method_4616(kimlik, nesne);
                tm.method_4616(dokuYolu, nesne);
                tm.method_4616(uzantisiz, nesne);
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
        int yukseklik = Math.max(48, boy);
        int yariG = Math.max(yukseklik / 4, yukseklik * 9 / 20);
        // ayak altı yumuşak gölge
        YikimDraw.roundedFill(graphics, cx - yariG / 2, tepe + yukseklik - 4,
            cx + yariG / 2, tepe + yukseklik + 3, YikimTheme.alpha(arkaRenk, 90));
        float aci = (float)YikimKarakter.kareIndeksi / (float)KARE_SAYISI * 360.0f;
        YikimModel.draw(graphics, cx, tepe, yukseklik, aci);
    }
}
