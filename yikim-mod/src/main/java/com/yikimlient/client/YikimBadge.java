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
    /** KİLİTSİZ OKUMA (v1.20.2): bu kümeler her karede her varlık için okunur.
     *  `synchronized` yerine DEĞİŞMEZ kopyalar tutulur (yazma nadir, okuma sıcak
     *  yol) → isim etiketi döngüsünde monitor beklemesi/çekişmesi yok. */
    private static volatile Set<UUID> KNOWN = java.util.Collections.emptySet();
    /** v1.18: isimle eşleşme — proxy/offline modda UUID değişebiliyor.
     *  Presence aynı sunucudaki oyuncuların İSİMLERİNİ de verir ("pn"). */
    private static volatile Set<String> KNOWN_ADLAR = java.util.Collections.emptySet();
    private static final Object YAZMA_KILIDI = new Object();
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
        synchronized (YAZMA_KILIDI) {
            // BİRLEŞTİR: el sıkışmadan öğrenilenler roster gelince kaybolmasın
            Set<UUID> yeni = new HashSet<UUID>(KNOWN);
            yeni.addAll(fresh);
            KNOWN = yeni;
        }
    }

    /** Dünya/sunucu değişti — taze liste gelene kadar sıfırla. */
    public static void clear() {
        KNOWN = java.util.Collections.emptySet();
        KNOWN_ADLAR = java.util.Collections.emptySet();
        METIN_ONBELLEK.clear();
    }

    /** Presence yanıtındaki "pn" haritası: uuid → isim. */
    public static void setKnownIsimler(String json) {
        if (json == null || json.isEmpty()) {
            return;
        }
        try {
            int p = json.indexOf("\"pn\"");
            if (p < 0) {
                return;
            }
            int sol = json.indexOf('{', p);
            int sag = sol < 0 ? -1 : json.indexOf('}', sol);
            if (sol < 0 || sag <= sol) {
                return;
            }
            String ic = json.substring(sol + 1, sag);
            int i = 0;
            while (i < ic.length()) {
                int a1 = ic.indexOf('"', i);
                int a2 = a1 < 0 ? -1 : ic.indexOf('"', a1 + 1);
                int b1 = a2 < 0 ? -1 : ic.indexOf('"', a2 + 1);
                int b2 = b1 < 0 ? -1 : ic.indexOf('"', b1 + 1);
                if (b2 < 0) {
                    break;
                }
                knownName(ic.substring(b1 + 1, b2));
                i = b2 + 1;
            }
        }
        catch (Throwable ignored) {
            // bozuk yanıt rozet eşleşmesini bozmaz
        }
    }

    /** İsimle tanıma: UUID farklıysa da (proxy/offline) rozet çıkar. */
    public static void knownName(String ad) {
        if (ad == null || ad.isEmpty()) {
            return;
        }
        String temiz = ad.trim().toLowerCase(java.util.Locale.ROOT);
        if (!temiz.isEmpty()) {
            synchronized (YAZMA_KILIDI) {
                Set<String> yeni = new HashSet<String>(KNOWN_ADLAR);
                yeni.add(temiz);
                KNOWN_ADLAR = yeni;
            }
        }
    }

    public static boolean isKnownName(String ad) {
        if (ad == null || ad.isEmpty()) {
            return false;
        }
        // KENDİ adım: sunucu proxy/offline modda UUID'yi değiştirse, presence
        // hiç çalışmasa da rozet çıkar (kullanıcı isteği: "öncelik hep benim
        // clientimde olmalı").
        if (benimAdimMi(ad)) {
            return true;
        }
        // Çizimi İSİMLE elimizde olan oyuncu da rozetlidir (UUID tutmasa da).
        if (YikimSlotlar.slotOfAd(ad) != 0) {
            return true;
        }
        Set<String> adlar = KNOWN_ADLAR;
        if (adlar.isEmpty()) {
            return false;
        }
        return adlar.contains(ad.trim().toLowerCase(java.util.Locale.ROOT));
    }

    /** Oturum adım (bir kez okunur, sonra önbellek). */
    private static volatile String BENIM_AD;

    public static boolean benimAdimMi(String ad) {
        if (ad == null || ad.isEmpty()) {
            return false;
        }
        String ben = BENIM_AD;
        if (ben == null) {
            try {
                ben = class_310.method_1551().method_1548().method_1674();
            }
            catch (Throwable ignored) {
                ben = null;
            }
            if (ben == null || ben.isEmpty()) {
                return false;
            }
            BENIM_AD = ben;
        }
        return ben.equalsIgnoreCase(ad.trim());
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
        if (KNOWN.contains(id)) {
            return true;
        }
        // Çizimi elimizde olan oyuncu da rozetlidir: presence'tan çizim
        // ("x"/"b") gelmişse roster'ı beklemeden rozet çıkar.
        return YikimSlotlar.slotOf(id) != 0;
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
        synchronized (YAZMA_KILIDI) {
            if (KNOWN.contains(id)) {
                return false;
            }
            Set<UUID> yeni = new HashSet<UUID>(KNOWN);
            yeni.add(id);
            KNOWN = yeni;
            return true;
        }
    }

    /** Rozet listesinde kimse var mı? (bedava kontrol — isim etiketi sıcak yolu) */
    public static boolean bilinenVarMi() {
        return !KNOWN.isEmpty() || !KNOWN_ADLAR.isEmpty();
    }

    /** Metin zaten rozetli mi (idempotence — çift ön ek imkânsız).
     *
     * v1.13.1: eskiden yalnız İLK karaktere bakılıyordu. Sunucu eklentileri
     * ismin başına kendi önekini (rütbe ikonu, renk kodu, takım etiketi)
     * koyduğunda glif 1. karakter olmaktan çıkıyor, "zaten rozetli" kontrolü
     * kaçırıyor ve ikinci bir rozet ekleniyordu → TAB'da üst üste binmiş,
     * kalınlaşmış görünüm. Artık metnin HERHANGİ bir yerinde glif varsa
     * rozet çoktan eklenmiştir. */
    public static boolean kapsar(class_2561 ad) {
        try {
            if (ad == null) {
                return false;
            }
            String metin = ad.getString();
            // rozet glifi VEYA ✕ işareti varsa zaten işlenmiştir
            return metin.indexOf(VARSAYILAN_GLIF) >= 0 || metin.indexOf(CARPI_GLIF) >= 0;
        }
        catch (Throwable ignored) {
            return false;
        }
    }

    public static class_2561 tag(class_2561 name) {
        return tag(name, null);
    }

    /**
     * ROCKE v1.12 — oyuncu başına AYRI glif: uuid'un slotu (YikimSlotlar)
     * ≠ 0 ise o slotun OWN fontu (yikimlient:badge_s<k>) kullanılır; artı
     * rakam 0 ise standart Y (yikimlient:badge) glifi çıkar. Böylece bir
     * oyuncunun çizimi SADECE kendi rozetinde görünür.
     */
    public static class_2561 tag(class_2561 name, java.util.UUID kim) {
        return tag(name, kim, null);
    }

    /**
     * v1.20.3 — İSİM YEDEĞİ: çizimler sunucuda çoğu zaman launcher'ın yüklediği
     * UUID ile durur (Microsoft UUID'si). Offline/proxy sunucularda oyundaki
     * entity UUID'si farklı olduğu için rozet standart Y'ye düşüyordu
     * ("benim çizimim bende var, arkadaşımda Y görünüyor"). Slot UUID'de
     * bulunamazsa oyuncunun ADIYLA aranır.
     */
    public static class_2561 tag(class_2561 name, java.util.UUID kim, String oyuncuAdi) {
        int slot = YikimSlotlar.slotOf(kim);
        if (slot == 0 && oyuncuAdi != null && !oyuncuAdi.isEmpty()) {
            slot = YikimSlotlar.slotOfAd(oyuncuAdi);
        }
        // slot 0 = çizim yok → standart YIKIM logosu (piksel Y + şimşek).
        // slot != 0 → oyuncunun KENDİ çizimi (yikimlient:badge_s<k>).
        return tag(name, VARSAYILAN_GLIF, "yikimlient", slot == 0 ? "badge" : "badge_s" + slot);
    }

    public static class_2561 tag(class_2561 name, char glif) {
        return tag(name, glif, "yikimlient", "badge");
    }

    /** Rozet glifi (var). Ön ek olarak ✕ eklenecekse bu da kullanılır. */
    private static final char CARPI_GLIF = '\uE002';

    private static class_2561 tag(class_2561 name, char glif, String fontNs, String fontYol) {
        try {
            if (name == null) {
                return null;
            }
            // ÇİFT ROZET KORUMASI: aynı isim birden çok katmandan (kaynak
            // adı, render state, TAB satırı, başka mod) geçebilir. Glif
            // metnin neresinde olursa olsun ikinci kez eklenmez.
            if (kapsar(name)) {
                return name;
            }
            if (LOGLANMADI.compareAndSet(false, true)) {
                // canlı kanıt: mixin zinciri çalışıyor mu? (sunucu bağımsız teşhis)
                YikimClient.LOGGER.info("YIKIM rozet: glif metne ekleniyor (font: {}.{})", fontNs, fontYol);
            }
            // ✕ işareti (v0.7.25): hesap doğrulanmamışsa rozetin ÖNÜNE gelir.
            // Sadece launcher gerçekten kayıt yaztıysa (kayitliMi) gösterilir;
            // elle kurulmuş/ilk açılış durumunda isim temiz kalır.
            class_2561 hedef = name;
            if (!YikimDogrulama.dogrulandiMi() && YikimDogrulama.kayitliMi()) {
                class_2583 carpiStil = stil("yikimlient", "carpi");
                class_2583 normalStil2 = stil("minecraft", "default");
                hedef = class_2561.method_43470(String.valueOf(CARPI_GLIF)).method_10862(carpiStil)
                    .method_10852(class_2561.method_43470(BOSLUK).method_10862(normalStil2))
                    .method_10852(name);
            }
            String imza = fontYol + "|" + hedef.getString();
            class_2561 bekleyen = METIN_ONBELLEK.get(imza);
            if (bekleyen != null) {
                return bekleyen;
            }
            class_2583 glifStil = stil(fontNs, fontYol);
            class_2583 normalStil = stil("minecraft", "default");
            // isim, açık default stilli bir sarmalın içine konur: kendi özel
            // stili (sunucu renkli isim vb.) korunur, fontu ise garanti default.
            class_2561 sarmal = class_2561.method_43470("")
                .method_10862(normalStil).method_10852(hedef);
            class_2561 var = class_2561.method_43470(String.valueOf(glif)).method_10862(glifStil)
                .method_10852(class_2561.method_43470(BOSLUK).method_10862(normalStil))
                .method_10852(sarmal);
            if (METIN_ONBELLEK.size() > 512) {
                METIN_ONBELLEK.clear();
            }
            METIN_ONBELLEK.put(imza, var);
            return var;
        }
        catch (Throwable problem) {
            return name;
        }
    }

    private static class_2583 fontStil(String ns, String yol) {
        return class_2583.field_24360.method_27704(
            new class_11719.class_11721(class_2960.method_60655(ns, yol)));
    }

    // PERFORMANS: tag() isim etiketi render state'i icin her karede cagrilir.
    // Olusan metin degismez -> (font + gorunen ad) anahtariyla saklanir; her
    // karede Style/Text kurulumu ve GC baskisi olmaz.
    private static final java.util.Map<String, class_2561> METIN_ONBELLEK =
        new java.util.concurrent.ConcurrentHashMap<String, class_2561>();
    private static final java.util.Map<String, class_2583> STIL_ONBELLEK =
        new java.util.concurrent.ConcurrentHashMap<String, class_2583>();

    private static class_2583 stil(String ns, String yol) {
        String anahtar = ns + ":" + yol;
        class_2583 var = STIL_ONBELLEK.get(anahtar);
        if (var != null) {
            return var;
        }
        var = fontStil(ns, yol);
        if (STIL_ONBELLEK.size() > 64) {
            STIL_ONBELLEK.clear();
        }
        STIL_ONBELLEK.put(anahtar, var);
        return var;
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
