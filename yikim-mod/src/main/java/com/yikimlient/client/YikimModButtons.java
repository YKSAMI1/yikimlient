package com.yikimlient.client;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import net.minecraft.class_11907;
import net.minecraft.class_310;
import net.minecraft.class_339;
import net.minecraft.class_364;
import net.minecraft.class_4185;
import net.minecraft.class_442;

/**
 * DIĞER MODLARIN ANA MENÜ TUŞLARINI YIKIM MENÜSÜNE TAŞIR.
 *
 * Flashback Essentials, Mod Menu gibi modlar kendi tuşlarını mixin ile
 * vanilla TitleScreen.init içine enjekte eder. YIKIM menüsü ekranı komple
 * değiştirdiği için o tuşlar görünmez oluyordu.
 *
 * Çözüm: görünmez bir vanilla TitleScreen oluşturup init'letiriz — mixin'ler
 * orada da çalışır ve mod tuşları ekranın çocuk listesine düşer. Vanilla
 * tuşlarını etiketlerinden ayıklar, kalanları (mod tuşları) YIKIM menüsünde
 * YIKIM stiliyle çizeriz; tıklanınca gerçek onPress handler'ı çalışır.
 *
 * Her adım try/catch: bir modun tuşu alınamazsa menü normal çalışmaya devam
 * eder — asla çökme, asla kare yolu etkisi (yalnızca menü açılışında bir kez).
 */
public final class YikimModButtons {
    /**
     * Vanilla buton etiketleri (TR + EN) — bunlar dışında kalan her buton
     * bir modun enjekte ettiği tuştur. Boş etiketler yok sayılır.
     */
    private static final String[] VANILLA_LABELS = {
        "tek oyunculu", "singleplayer",
        "çok oyunculu", "cok oyunculu", "multiplayer",
        "ayarlar", "options",
        "çıkış", "cikis", "quit",
        "dil", "language",
        "erişilebilirlik", "erisilebilirlik", "accessibility",
        "realms", "minecraft realms",
        "bildirimler", "notifications",
        "g\u00fcncelleme yok", "s\u00fcr\u00fcm g\u00fcncel", "up to date",
        "\u0130nternet sitesi", "internet sitesi", "website",
        "geri bildirim", "feedback",
    };

    private YikimModButtons() {
    }

    /**
     * OTURUM BOYUNCA BİR KEZ tara: menü her açılışında yeniden vanilla ekran
     * kurmak pahalı ve gereksiz — modlar oyun boyunca tuş eklemiyor.
     * İlk çağrıda tarar, sonrakiler önbellekten döner.
     */
    static List<class_4185> scanOnce(class_310 client) {
        if (!YikimModButtons.scanned) {
            YikimModButtons.scanned = true;
            YikimModButtons.cached = YikimModButtons.scan(client);
        }
        return YikimModButtons.cached;
    }

    private static boolean scanned;
    private static List<class_4185> cached = java.util.List.of();

    /** Modların vanilla menüye enjekte ettiği tuşları topla. */
    static List<class_4185> scan(class_310 client) {
        ArrayList<class_4185> out = new ArrayList<class_4185>();
        try {
            int w = client.method_22683().method_4486();
            int h = client.method_22683().method_4502();
            ScratchTitle scratch = new ScratchTitle();
            scratch.field_22789 = w;
            scratch.field_22790 = h;
            scratch.forceInit();
            for (class_364 child : scratch.method_25396()) {
                if (!(child instanceof class_4185)) continue;
                class_4185 button = (class_4185) child;
                if (YikimModButtons.isVanilla(YikimModButtons.label(button))) continue;
                out.add(button);
            }
        }
        catch (Throwable ignored) {
            // bir modun init'i patlarsa tuş listesi boş kalır; menü sağlamdır
        }
        return out;
    }

    /** Butonun görünen metni (Text → String). Hata olursa boş döner. */
    static String label(class_4185 button) {
        try {
            class_339 widget = button;
            String text = widget.method_25369().getString();
            return text == null ? "" : text.trim();
        }
        catch (Throwable ignored) {
            return "";
        }
    }

    private static boolean isVanilla(String label) {
        if (label == null || label.isEmpty()) {
            return true; // etiketsiz öğe menüye taşınmaz
        }
        String key = label.toLowerCase(Locale.ROOT);
        for (String vanilla : VANILLA_LABELS) {
            if (key.equals(vanilla)) {
                return true;
            }
        }
        return false;
    }

    /** Mod tuşunun gerçek tıklama davranışını çalıştır. */
    static void press(class_4185 button) {
        try {
            button.method_25306(new class_11907() {
                @Override
                public int method_74228() {
                    return 0;
                }

                @Override
                public int comp_4797() {
                    return 0;
                }
            });
        }
        catch (Throwable ignored) {
            // modun tuşu hata verirse oyunu düşürmemize izin yok
        }
    }

    /**
     * Görünmez vanilla başlık ekranı. method_25426 (init) korumalı olduğu için
     * alt sınıf içinden çağrılır — mixin'lenen mod tuşları tam bu noktada
     * eklenir (oyun setScreen akışıyla birebir aynı yol).
     */
    private static final class ScratchTitle extends class_442 {
        void forceInit() {
            this.method_25426();
        }
    }
}
