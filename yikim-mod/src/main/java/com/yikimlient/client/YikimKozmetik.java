package com.yikimlient.client;

import java.io.ByteArrayInputStream;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Base64;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_2960;
import net.minecraft.class_310;

/**
 * KOZMETİK — özel pelerin ve elitra kanadı (oyun tarafı).
 *
 * Kaynak iki yerde:
 *   1) KENDİ oyuncu: launcher'ın yazdığı `.yikim/pelerin.png` / `.yikim/elytra.png`
 *      (64×32). Dosya zaman damgası değişince doku yeniden kurulur — oyun
 *      açıkken kaydetmek yeterli, yeniden başlatma gerekmez.
 *   2) DİĞER oyuncular: presence sunucusunun `kc` / `ke` alanları
 *      (uuid → base64 PNG). Aynı sunucudaki YIKIMLient kullanıcıları görür.
 *
 * Doku yerleşimi: vanilla PlayerListEntry.getSkinTextures() derlemesinde
 * (KozmetikMixin) pelerin/elitra dokuları bizim Identifier'larla değiştirilir;
 * böylece vanilla pelerin/elitra geometrisi aynen kullanılır.
 *
 * Her adım korumalı: doku kurulamazsa vanilla görünüm kalır, oyun düşmez.
 */
public final class YikimKozmetik {
    private static final Map<UUID, String> UZAK_PELERIN = new ConcurrentHashMap<UUID, String>();
    private static final Map<UUID, String> UZAK_KANAT = new ConcurrentHashMap<UUID, String>();
    /** anahtar (dosya adı / uuid-tür) → kayıtlı doku kimliği */
    private static final Map<String, class_2960> DOKULAR = new ConcurrentHashMap<String, class_2960>();
    private static final java.util.Set<String> BASARISIZ = ConcurrentHashMap.newKeySet();

    /** Yerel dosyaların son okunan hâli (sunucuya yalnız değişince gönderilir). */
    private static volatile String sonPelerinB64 = "";
    private static volatile String sonKanatB64 = "";

    private YikimKozmetik() {
    }

    private static Path stateDir() {
        return net.fabricmc.loader.api.FabricLoader.getInstance().getGameDir().resolve(".yikim");
    }

    /// Yerel dosyaların önbelleği — getSkinTextures her karede çağrılır, disk
    /// okuması oraya giremez. En fazla saniyede bir kez tazelenir.
    private static long sonKontrol;
    private static volatile String pelerinYerel = "";
    private static volatile String kanatYerel = "";

    private static synchronized void dosyalariTazele() {
        long simdi = System.currentTimeMillis();
        if (simdi - YikimKozmetik.sonKontrol < 1000L) {
            return;
        }
        YikimKozmetik.sonKontrol = simdi;
        YikimKozmetik.pelerinYerel = YikimKozmetik.disktenOku("pelerin.png");
        YikimKozmetik.kanatYerel = YikimKozmetik.disktenOku("elytra.png");
    }

    private static String disktenOku(String ad) {
        try {
            Path f = YikimKozmetik.stateDir().resolve(ad);
            if (!Files.isRegularFile(f)) {
                return "";
            }
            byte[] png = Files.readAllBytes(f);
            if (png.length < 8) {
                return "";
            }
            return Base64.getEncoder().encodeToString(png);
        }
        catch (Throwable ignored) {
            return "";
        }
    }

    private static String dosyaB64(String ad) {
        YikimKozmetik.dosyalariTazele();
        return "pelerin.png".equals(ad) ? YikimKozmetik.pelerinYerel : YikimKozmetik.kanatYerel;
    }

    /** Presence gövdesine eklenecek alanlar: yalnız DEĞİŞEN kozmetik gönderilir. */
    public static synchronized String govdeEk() {
        YikimKozmetik.dosyalariTazele();
        StringBuilder ek = new StringBuilder();
        String pelerin = YikimKozmetik.pelerinYerel;
        if (!pelerin.equals(YikimKozmetik.sonPelerinB64)) {
            YikimKozmetik.sonPelerinB64 = pelerin;
            ek.append(",\"kc\":\"").append(pelerin).append('"');
        }
        String kanat = YikimKozmetik.kanatYerel;
        if (!kanat.equals(YikimKozmetik.sonKanatB64)) {
            YikimKozmetik.sonKanatB64 = kanat;
            ek.append(",\"ke\":\"").append(kanat).append('"');
        }
        return ek.toString();
    }

    /** Yanıttaki `"kc":{...}` / `"ke":{...}` haritalarını ayrıştır. */
    public static void uzaklariIsle(String json) {
        if (json == null || json.isEmpty()) {
            return;
        }
        YikimKozmetik.haritaOku(json, "kc", YikimKozmetik.UZAK_PELERIN);
        YikimKozmetik.haritaOku(json, "ke", YikimKozmetik.UZAK_KANAT);
    }

    private static void haritaOku(String json, String alan, Map<UUID, String> hedef) {
        try {
            int i = json.indexOf("\"" + alan + "\"");
            if (i < 0) {
                return;
            }
            int sol = json.indexOf('{', i);
            if (sol < 0) {
                return;
            }
            int sag = json.indexOf('}', sol);
            if (sag < 0) {
                return;
            }
            String ic = json.substring(sol + 1, sag);
            int j = 0;
            while (j < ic.length()) {
                int a1 = ic.indexOf('"', j);
                if (a1 < 0) break;
                int a2 = ic.indexOf('"', a1 + 1);
                if (a2 < 0) break;
                String anahtar = ic.substring(a1 + 1, a2);
                int v1 = ic.indexOf('"', a2 + 1);
                if (v1 < 0) break;
                int v2 = ic.indexOf('"', v1 + 1);
                if (v2 < 0) break;
                String deger = ic.substring(v1 + 1, v2);
                try {
                    UUID id = UUID.fromString(anahtar);
                    if (!deger.isEmpty()) {
                        hedef.put(id, deger);
                    }
                    else {
                        hedef.remove(id);
                    }
                }
                catch (IllegalArgumentException bozuk) {
                    // uuid değil — atla
                }
                j = v2 + 1;
            }
        }
        catch (Throwable ignored) {
            // bozuk yanıt kozmetiği bozmaz
        }
    }

    private static boolean kendim(UUID id) {
        try {
            class_310 mc = class_310.method_1551();
            return mc != null && mc.field_1724 != null && mc.field_1724.method_5667().equals(id);
        }
        catch (Throwable ignored) {
            return false;
        }
    }

    /** Oyuncunun pelerin dokusu (yoksa null → vanilla). */
    public static class_2960 pelerin(UUID id) {
        try {
            String b64 = YikimKozmetik.kendim(id)
                ? YikimKozmetik.dosyaB64("pelerin.png")
                : YikimKozmetik.UZAK_PELERIN.get(id);
            return YikimKozmetik.doku("pelerin-" + id, b64);
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** Oyuncunun elitra kanat dokusu (yoksa null → vanilla). */
    public static class_2960 kanat(UUID id) {
        try {
            String b64 = YikimKozmetik.kendim(id)
                ? YikimKozmetik.dosyaB64("elytra.png")
                : YikimKozmetik.UZAK_KANAT.get(id);
            return YikimKozmetik.doku("kanat-" + id, b64);
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** base64 PNG → TextureManager'a kayıtlı Identifier (bir kez). */
    private static class_2960 doku(String anahtar, String b64) {
        if (b64 == null || b64.isEmpty()) {
            return null;
        }
        String imza = anahtar + ":" + Integer.toHexString(b64.hashCode()) + ":" + b64.length();
        class_2960 var = YikimKozmetik.DOKULAR.get(imza);
        if (var != null) {
            return var;
        }
        if (YikimKozmetik.BASARISIZ.contains(imza)) {
            return null;
        }
        try {
            byte[] png = Base64.getDecoder().decode(b64);
            class_1011 image = class_1011.method_4309(new ByteArrayInputStream(png));
            class_1043 texture = new class_1043(() -> "yikim-kozmetik", image);
            String guvenli = anahtar.replaceAll("[^a-z0-9-]", "-");
            if (guvenli.length() > 40) {
                guvenli = guvenli.substring(0, 40);
            }
            class_2960 id = class_2960.method_43902(
                "yikimlient",
                "kozmetik/" + Integer.toHexString(imza.hashCode()) + "-" + guvenli
            );
            class_310.method_1551().method_1531().method_4616(id, texture);
            texture.method_4524();
            YikimKozmetik.DOKULAR.put(imza, id);
            return id;
        }
        catch (Throwable ignored) {
            YikimKozmetik.BASARISIZ.add(imza);
            return null;
        }
    }

    // ------------------------------------------------------------ SkinTextures

    private static Class<?> sinif(String ad) {
        try {
            return Class.forName(ad);
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** 1.21.9+ `AssetInfo$TextureAssetInfo(Identifier)` — aynı id hem kimlik hem yol. */
    private static Object dokuBilgisi(class_2960 id) {
        try {
            Class<?> tur = YikimKozmetik.sinif("net.minecraft.class_12079$class_10726");
            if (tur == null) {
                return null;
            }
            Constructor<?> c = tur.getConstructor(class_2960.class);
            return c.newInstance(id);
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    private static Object cagir(Object hedef, String ad) {
        try {
            Method m = hedef.getClass().getMethod(ad);
            return m.invoke(hedef);
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** Benzersiz (oyuncu, doku) → derlenmiş SkinTextures. Kare başına iş yok. */
    private static final Map<String, Object> ONBELLEK =
        new ConcurrentHashMap<String, Object>();

    /**
     * Oyuncunun kozmetiğini uygular; sonuç önbelleğe alınır.
     * Hem PlayerListEntry hem oyuncu varlığı noktası bunu çağırır — ikinci
     * çağrı aynı nesneye düşer, çift doku kurulumu olmaz.
     */
    public static Object onbellekli(Object mevcut, UUID id) {
        try {
            class_2960 pelerin = YikimKozmetik.pelerin(id);
            class_2960 kanat = YikimKozmetik.kanat(id);
            if (pelerin == null && kanat == null) {
                return null;
            }
            String anahtar = id + "|" + pelerin + "|" + kanat;
            Object var = YikimKozmetik.ONBELLEK.get(anahtar);
            if (var != null) {
                return var;
            }
            var = YikimKozmetik.uygula(mevcut, pelerin, kanat);
            if (var == null) {
                return null;
            }
            if (YikimKozmetik.ONBELLEK.size() > 256) {
                YikimKozmetik.ONBELLEK.clear();
            }
            YikimKozmetik.ONBELLEK.put(anahtar, var);
            return var;
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /**
     * Mevcut SkinTextures'ın pelerin/elitra dokularını bizimkilerle değiştirir.
     * Doku yoksa veya derleme tutmazsa `null` döner → vanilla kalır.
     */
    public static Object uygula(Object mevcut, class_2960 pelerin, class_2960 kanat) {
        if (mevcut == null || (pelerin == null && kanat == null)) {
            return null;
        }
        try {
            Object govde = YikimKozmetik.cagir(mevcut, "comp_1626");
            Object eskiPelerin = YikimKozmetik.cagir(mevcut, "comp_1627");
            Object eskiKanat = YikimKozmetik.cagir(mevcut, "comp_1628");
            Object model = YikimKozmetik.cagir(mevcut, "comp_1629");
            Object secure = YikimKozmetik.cagir(mevcut, "comp_1630");
            if (govde == null || model == null || secure == null) {
                return null;
            }
            Object yeniPelerin = eskiPelerin;
            if (pelerin != null) {
                Object bilgi = YikimKozmetik.dokuBilgisi(pelerin);
                if (bilgi != null) {
                    yeniPelerin = bilgi;
                }
            }
            Object yeniKanat = eskiKanat;
            if (kanat != null) {
                Object bilgi = YikimKozmetik.dokuBilgisi(kanat);
                if (bilgi != null) {
                    yeniKanat = bilgi;
                }
            }
            if (yeniPelerin == eskiPelerin && yeniKanat == eskiKanat) {
                return null;
            }
            Class<?> tur = Class.forName("net.minecraft.class_8685");
            for (Constructor<?> c : tur.getConstructors()) {
                Class<?>[] p = c.getParameterTypes();
                if (p.length != 5 || p[4] != boolean.class) {
                    continue;
                }
                return c.newInstance(govde, yeniPelerin, yeniKanat, model, secure);
            }
        }
        catch (Throwable ignored) {
            // doku değişimi başarısızsa vanilla görünüm
        }
        return null;
    }
}
