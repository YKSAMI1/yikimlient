package com.yikimlient.client;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicBoolean;
import net.minecraft.class_11719;
import net.minecraft.class_2561;
import net.minecraft.class_2583;
import net.minecraft.class_2960;
import net.minecraft.class_310;

/**
 * YIKIM rozeti (v1.10.0) — YIKIMLient oyuncularının adının başında launcher logosu.
 *
 * Görsel bir FONT GLIF'IDIR (private-use \uE000): modun kendi tarif fontu
 * (default.json include) ile her yerde — isim etiketi, TAB listesi — aynı
 * beyaz Y + turuncu şimşek logosu çıkar. Mixin yalnızca metne ön ek yapar;
 * hiçbir ekstra render sırası, buffer veya dokuya dokunulmaz → FPS etkisi ~0.
 *
 * Kim oznakli?
 *  - KENDIN: default (her sunucuda, F5 dahil).
 *  - Diğer YIKIMLient oyuncuları: aynı sunucudaki sunucu tarafı relay'in
 *    (aynı jarın mods klasöründe olması) yaydığı roster listesi — YikimNet.
 */
public final class YikimBadge {
    /** Glif + boşluk ayrı bileşen: glif yalnız badge fontunda, boşluk default fontta. */
    private static final char VARSAYILAN_GLIF = '\uE000';
    private static final String BOSLUK = " ";
    private static final Set<UUID> KNOWN = new HashSet<UUID>();
    private static final AtomicBoolean LOGLANMADI = new AtomicBoolean(false);

    private YikimBadge() {
    }

    /** Sunucudan geldı roster: {"p":[["uuid","name"],...]} */
    public static void setKnown(String json) {
        if (json == null || json.isEmpty()) {
            return;
        }
        Set<UUID> fresh = new HashSet<UUID>();
        parsePairs(json, fresh);
        synchronized (KNOWN) {
            // BİRLEŞTİR: el sıkışmadan öğrenilenler roster gelince kaybolmasın
            KNOWN.addAll(fresh);
        }
    }

    /** Dünya/sunucu değişti — taze liste gelene kadar sıfırla. */
    public static void clear() {
        synchronized (KNOWN) {
            KNOWN.clear();
        }
    }

    /** Kendi hesabı daima rozetli; diğerleri roster listesinden. */
    public static boolean isKnown(UUID id) {
        if (id == null) {
            return false;
        }
        try {
            class_310 mc = class_310.method_1551();
            if (mc.field_1724 != null && id.equals(mc.field_1724.method_5667())) {
                return true;
            }
        }
        catch (Throwable ignored) {
            // client null olabilir — sadece KNOWN'a bak
        }
        synchronized (KNOWN) {
            return KNOWN.contains(id);
        }
    }

    /**
     * El sıkışmadan öğrenilen oyuncu: listede EKLE (varsa false döner).
     * Roster'ın temizleyici olmadan BİRLEŞMESİ de buradan: hem sunucu relay'i
     * hem görünmez selamlaşma aynı seti besler.
     */
    public static boolean markKnown(UUID id) {
        if (id == null) {
            return false;
        }
        synchronized (KNOWN) {
            return KNOWN.add(id);
        }
    }

    public static class_2561 tag(class_2561 name) {
        return tag(name, VARSAYILAN_GLIF);
    }

    /**
     * Rozetli isim. <b>glif</b> parametresi gelecekteki "özel rozet" altyapısı
     * için ayrıldı: kullanıcı kendi sembolünü seçtiğinde ayrı bir glif kodu
     * (yikimlient:badge fontunun ayrı bir karakteri) buradan verilir.
     *
     * STİL MİRASI TUZAĞI: boş stilli kardeş bileşenler kökün stilini miras
     * alır — kök glif (badge fontu) olduğu için isim de badge fontuyla
     * çizilip KUTU KUTU görünüyordu (v1.10.2 hatası). Bu yüzden boşluk ve
     * isim AÇIKÇA minecraft:default fontuna bağlanır; yalnız glif modun
     * kendi fontuyla çözümlenir (default'u ezen modlardan bağımsız).
     */
    public static class_2561 tag(class_2561 name, char glif) {
        try {
            if (name == null) {
                return null;
            }
            if (LOGLANMADI.compareAndSet(false, true)) {
                // canlı kanıt: mixin zinciri çalışıyor mu? (sunucu bağımsız teşhis)
                YikimClient.LOGGER.info("YIKIM rozet: glif metne ekleniyor (font: yikimlient:badge)");
            }
            class_2583 glifStil = fontStil("yikimlient", "badge");
            class_2583 normalStil = fontStil("minecraft", "default");
            // isim, açık default stilli bir sarmalın içine konur: kendi özel
            // stili (sunucu renkli isim vb.) korunur, fontu ise garanti default.
            class_2561 sarmal = class_2561.method_43470("")
                .method_10862(normalStil).method_10852(name);
            return class_2561.method_43470(String.valueOf(glif)).method_10862(glifStil)
                .method_10852(class_2561.method_43470(BOSLUK).method_10862(normalStil))
                .method_10852(sarmal);
        }
        catch (Throwable problem) {
            return name;
        }
    }

    private static class_2583 fontStil(String ns, String yol) {
        return class_2583.field_24360.method_27704(
            new class_11719.class_11721(class_2960.method_60655(ns, yol)));
    }

    private static void parsePairs(String json, Set<UUID> out) {
        int p = json.indexOf("\"p\"");
        if (p < 0) {
            return;
        }
        int i = json.indexOf('[', p);
        while (i >= 0 && i < json.length() - 2) {
            int qs = json.indexOf('"', i);
            int qe = qs < 0 ? -1 : json.indexOf('"', qs + 1);
            if (qe < 0) {
                return;
            }
            String uuid = json.substring(qs + 1, qe);
            if (uuid.length() == 36) {
                try {
                    out.add(UUID.fromString(uuid));
                }
                catch (IllegalArgumentException ignored) {
                    // bozuk satır — atla
                }
            }
            i = json.indexOf('[', qe + 1);
        }
    }
}
