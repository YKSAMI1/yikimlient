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
    private static final String GLYPH = "\uE000";
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
            KNOWN.clear();
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

    public static class_2561 tag(class_2561 name) {
        try {
            if (name == null) {
                return null;
            }
            if (LOGLANMADI.compareAndSet(false, true)) {
                // canlı kanıt: mixin zinciri çalışıyor mu? (sunucu bağımsız teşhis)
                YikimClient.LOGGER.info("YIKIM rozet: glif metne ekleniyor (font: yikimlient:badge)");
            }
            // glif, modun KENDİ fontuyla çözümlenir — minecraft:default'u ezan
            // başka modlardan (139 mod!) tamamen bağımsız.
            class_2583 stil = class_2583.field_24360.method_27704(
                new class_11719.class_11721(class_2960.method_60655("yikimlient", "badge")));
            return class_2561.method_43470(GLYPH).method_10862(stil)
                .method_10852(class_2561.method_43470(BOSLUK)).method_10852(name);
        }
        catch (Throwable problem) {
            return name;
        }
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
