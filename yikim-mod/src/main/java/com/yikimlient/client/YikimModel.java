package com.yikimlient.client;

import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import net.minecraft.class_10055;
import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_1060;
import net.minecraft.class_12079;
import net.minecraft.class_1299;
import net.minecraft.class_1799;
import net.minecraft.class_1802;
import net.minecraft.class_2561;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;
import net.minecraft.class_7920;
import net.minecraft.class_8685;
import org.joml.Quaternionf;
import org.joml.Vector3f;

/**
 * MENÜ KARAKTERİ (v1.33.0) — OYUNUN KENDİ OYUNCU MODELİ.
 *
 * v1.32'ye kadar karakter CPU'da kutu kutu hesaplanıp DOLGU ile basılıyordu:
 * yüz UV'leri kayıyordu (gövdede renk şeritleri), HD pelerinler örneklenemiyor,
 * üst katman gövdeyle iç içe geçiyordu.
 *
 * Artık oyunun kendi 3B oyuncu çizicisi kullanılıyor:
 *   - `class_10055` (PlayerEntityRenderState) doldurulur,
 *   - `class_332.method_70856` (DrawContext'in GUI varlık çizicisi) çağrılır.
 * Bu, envanterdeki oyuncu önizlemesinin aynı yoludur: gerçek model, gerçek UV
 * eşlemesi (HD pelerin/elitra dahil), şapka/ceket/kolluk/pantolon üst katmanı,
 * pelerin ve elitra vanilla çizicileriyle.
 *
 * Kare başına iş yok: render state ve dokular değişmedikçe yeniden kurulmaz.
 */
public final class YikimModel {
    /** Oyuncu 1.8 blok; ölçek = blok başına piksel. */
    private static final float OYUNCU_BOY_BLOK = 1.8f;

    private static class_10055 durum;
    private static String imza = "";
    private static long sonDeneme;

    private static class_2960 pelerinId;
    private static long pelerinDamga = Long.MIN_VALUE;
    private static long pelerinKontrol;
    private static class_2960 kanatId;
    private static long kanatDamga = Long.MIN_VALUE;
    private static long kanatKontrol;

    private YikimModel() {
    }

    private static Path yol(String ad) {
        return YikimBridge.stateDir().resolve(ad);
    }

    /** Yerel PNG'yi doku olarak kaydet (kimlik + path biçimleri). */
    private static class_2960 dosyaDoku(String ad, String kimlik) {
        try {
            Path dosya = YikimModel.yol(ad);
            if (!Files.isRegularFile(dosya, new LinkOption[0])) {
                return null;
            }
            try (java.io.InputStream in = Files.newInputStream(dosya)) {
                class_1011 gorsel = class_1011.method_4309(in);
                if (gorsel == null) {
                    return null;
                }
                class_1043 doku = new class_1043(() -> kimlik, gorsel);
                class_2960 id = class_2960.method_43902("yikimlient", kimlik);
                class_2960 dokuYolu = class_2960.method_43902("yikimlient", "textures/" + kimlik + ".png");
                class_1060 tm = class_310.method_1551().method_1531();
                tm.method_4616(id, doku);
                tm.method_4616(dokuYolu, doku);
                doku.method_4524();
                return id;
            }
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    private static class_2960 pelerin() {
        try {
            long simdi = System.currentTimeMillis();
            if (simdi - YikimModel.pelerinKontrol < 500L) {
                return YikimModel.pelerinId;
            }
            YikimModel.pelerinKontrol = simdi;
            Path dosya = YikimModel.yol("pelerin.png");
            if (!Files.isRegularFile(dosya, new LinkOption[0])) {
                YikimModel.pelerinId = null;
                YikimModel.pelerinDamga = Long.MIN_VALUE;
                return null;
            }
            long damga = Files.getLastModifiedTime(dosya, new LinkOption[0]).toMillis()
                ^ Files.size(dosya) << 8;
            if (damga != YikimModel.pelerinDamga) {
                class_2960 yeni = YikimModel.dosyaDoku("pelerin.png", "oyuncu/pelerin");
                if (yeni != null) {
                    YikimModel.pelerinId = yeni;
                }
                YikimModel.pelerinDamga = damga;
            }
            return YikimModel.pelerinId;
        }
        catch (Throwable ignored) {
            return YikimModel.pelerinId;
        }
    }

    private static class_2960 kanat() {
        try {
            long simdi = System.currentTimeMillis();
            if (simdi - YikimModel.kanatKontrol < 500L) {
                return YikimModel.kanatId;
            }
            YikimModel.kanatKontrol = simdi;
            Path dosya = YikimModel.yol("elytra.png");
            if (!Files.isRegularFile(dosya, new LinkOption[0])) {
                YikimModel.kanatId = null;
                YikimModel.kanatDamga = Long.MIN_VALUE;
                return null;
            }
            long damga = Files.getLastModifiedTime(dosya, new LinkOption[0]).toMillis()
                ^ Files.size(dosya) << 8;
            if (damga != YikimModel.kanatDamga) {
                class_2960 yeni = YikimModel.dosyaDoku("elytra.png", "oyuncu/kanat");
                if (yeni != null) {
                    YikimModel.kanatId = yeni;
                }
                YikimModel.kanatDamga = damga;
            }
            return YikimModel.kanatId;
        }
        catch (Throwable ignored) {
            return YikimModel.kanatId;
        }
    }

    /** Deri/kozmetik/poz değişti mi? Değişmediyse aynı state yeniden kullanılır. */
    private static class_10055 durum(boolean elitraModu, boolean slim) {
        try {
            class_2960 deri = YikimKarakter.deriDoku();
            if (deri == null) {
                return null;
            }
            // v1.33.3 — ana menüde katalog hiç tazelenmiyordu: seçim boş
            // görünüp pelerin kayboluyordu. Her durum kurulumunda tazele
            // (kendi içinde 800 ms kapılı).
            YikimKozmetikSecim.tazele();
            // v1.33.2 — SEÇİM NEYSE O: dosya duruyor diye kozmetik gösterme.
            boolean pelerinSecili = !YikimKozmetikSecim.aktifId(YikimKozmetikSecim.PELERIN).isEmpty()
                || !YikimKozmetikSecim.aktifId(YikimKozmetikSecim.MOJANG).isEmpty();
            boolean kanatSecili = !YikimKozmetikSecim.aktifId(YikimKozmetikSecim.ELITRA).isEmpty();
            // katalog okunamadıysa (liste boş) seçim kapısı uygulanmaz —
            // yoksa bir kez katalog okunamayınca kozmetik tamamen kayboluyordu
            if (YikimKozmetikSecim.liste(YikimKozmetikSecim.PELERIN).isEmpty()) {
                pelerinSecili = true;
            }
            if (YikimKozmetikSecim.liste(YikimKozmetikSecim.ELITRA).isEmpty()) {
                kanatSecili = true;
            }
            // v1.33.5 — ELİTRA GİYDİR: kanat seçiliyse HER sekmede sırtta
            // durur. Eskiden yalnız ELİTRA sekmesinde takılıyordu; sekme
            // durumuna bağlı kaldığı için kullanıcı kanadı hiç göremedi.
            class_2960 kanat = kanatSecili ? YikimModel.kanat() : null;
            // kanat varsa pelerin ÇİZİLMEZ: ikisi aynı sırta oturur, üst üste
            // binince pelerin kanadı örtüyordu.
            class_2960 pelerin = (elitraModu || !pelerinSecili || kanat != null)
                ? null : YikimModel.pelerin();
            String yeniImza = deri + "|" + pelerin + "|" + kanat + "|" + slim;
            if (YikimModel.durum != null && yeniImza.equals(YikimModel.imza)) {
                return YikimModel.durum;
            }
            long simdi = System.currentTimeMillis();
            if (YikimModel.durum != null && simdi - YikimModel.sonDeneme < 900L) {
                return YikimModel.durum;
            }
            YikimModel.sonDeneme = simdi;

            class_12079.class_10726 deriBilgi = new class_12079.class_10726(deri);
            class_12079.class_10726 pelerinBilgi =
                new class_12079.class_10726(pelerin != null ? pelerin : deri);
            class_12079.class_10726 kanatBilgi =
                new class_12079.class_10726(kanat != null ? kanat : deri);
            class_8685 dokular = new class_8685(deriBilgi, pelerinBilgi, kanatBilgi,
                slim ? class_7920.field_41122 : class_7920.field_41123, true);

            class_10055 s = new class_10055();
            s.field_58171 = class_1299.field_6099;
            // v1.33.1 — model ARKASI DÖNÜK çiziliyordu: envanter önizlemesi
            // gövde yaw'ını 180° yapar; 0 iken sırtımızı görüyorduk (pelerin
            // "göğüste" gibi duruyordu). Yaw her karede `draw` içinde ayarlanır.
            s.field_53446 = 180.0f;
            s.field_53447 = 0.0f;
            s.field_53448 = 0.0f;
            s.field_53453 = 1.0f;
            s.field_53329 = 0.6f;
            s.field_53330 = OYUNCU_BOY_BLOK;
            s.field_53520 = dokular;
            // üst katman: şapka / ceket / kolluk / pantolon görünür
            s.field_53543 = true;
            s.field_53544 = true;
            s.field_53545 = true;
            s.field_53546 = true;
            s.field_53530 = true;
            s.field_53531 = true;
            // pelerin yalnız pelerin modunda; elitra göğüs eşyası olarak
            s.field_53532 = pelerin != null;
            s.field_53525 = class_2561.method_43470("");
            // envanterdeki oyuncu önizlemesiyle aynı aydınlatma: menüde tam
            // parlaklık (aksi hâlde model karanlık/pitch black çizilir)
            s.field_61820 = 15728880;
            s.field_61821 = 0;
            s.field_61823.clear();
            if (kanat != null) {
                s.field_53418 = new class_1799(class_1802.field_8833);
            }
            // v1.33.5 — teşhis: state yeniden kurulduğunda bir kez yaz
            YikimLog.info("MENU KARAKTER sekme=" + YikimKozmetikSecim.sekme()
                + " elitraModu=" + elitraModu
                + " pelerinSecili=" + pelerinSecili
                + " kanatSecili=" + kanatSecili
                + " pelerinDoku=" + (pelerin != null)
                + " kanatDoku=" + (kanat != null)
                + " aktifPelerin='" + YikimKozmetikSecim.aktifId(YikimKozmetikSecim.PELERIN) + "'"
                + " aktifKanat='" + YikimKozmetikSecim.aktifId(YikimKozmetikSecim.ELITRA) + "'"
                + " gogusEsyasi=" + (s.field_53418 != null));
            YikimModel.durum = s;
            YikimModel.imza = yeniImza;
            return s;
        }
        catch (Throwable e) {
            YikimLog.warn("menu karakteri kurulamadi: " + e);
            return null;
        }
    }

    /**
     * Karakteri çiz: `cx` yatay merkez, `tepe` başın üstü, `boy` yükseklik.
     * `aciDerece`: 0 = önden, 180 = arkadan.
     */
    public static boolean draw(class_332 graphics, int cx, int tepe, int boy, float aciDerece) {
        try {
            class_10055 s = YikimModel.durum(YikimKarakter.elitraModu(), YikimKarakter.slim());
            if (s == null) {
                return false;
            }
            // v1.33.1 — DÖNME: dönme açısı quaternion'a değil GÖVDE YAW'ına
            // yazılır. `method_70856`'nın ikinci quaternion'ı modelin dönüşü
            // DEĞİL, ışığın yönüdür (vanilla onu fare eğimi için kullanıyor);
            // bu yüzden sürükleme hiç etki etmiyordu.
            s.field_53446 = 180.0f + aciDerece;
            s.field_53447 = 0.0f;
            int yukseklik = Math.max(64, boy);
            // v1.33.2 — "çok büyük, sığmıyor": modelin vanilya çizim uzayındaki
            // gerçek yüksekliği 1.8 değil ~2.3 blok (şapka katmanı dahil); ölçek
            // buna göre küçültülüp kutuya nefes payı bırakılıyor.
            float olcek = (float)yukseklik / 2.35f;
            int yariG = Math.max(yukseklik / 2, (int)(olcek * 1.05f));
            Vector3f orta = new Vector3f(0.0f, 1.0f, 0.0f);
            Quaternionf cevir = new Quaternionf().rotateZ((float)Math.PI);
            graphics.method_70856(s, olcek, orta, cevir, null,
                cx - yariG, tepe, cx + yariG, tepe + yukseklik);
            return true;
        }
        catch (Throwable e) {
            YikimLog.warn("menu karakteri cizilemedi: " + e);
            return false;
        }
    }
}
