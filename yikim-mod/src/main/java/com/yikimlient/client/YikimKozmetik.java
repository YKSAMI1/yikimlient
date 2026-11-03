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
import net.minecraft.class_1060;
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
    /// v1.25: HD doku sunucuya PARÇA PARÇA gider (tek istek 192 KB ile sınırlı).
    /// Parçalar tamamlanınca doku yayına girer; yarım doku görünmez.
    private static final int PARCA_BOY = 45000;
    /// Bu uzunluğun altındaki doku normal presence gövdesine sığar.
    private static final int TEK_PARCA_ESIK = 18000;
    /// Sunucunun kabul ettiği en büyük base64; üstündeyse 64×32 kopya gönderilir.
    private static final int SUNUCU_SINIR = 690_000;

    /// Sırası bekleyen HD dokular (parçalı gönderim).
    private static volatile String bekleyenPelerin = "";
    private static volatile String bekleyenKanat = "";
    private static volatile String gonderilenPelerin = "";
    private static volatile String gonderilenKanat = "";

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
    /// Sunucuya gönderilecek 64x32 kopya (HD fotoğraf kozmetiklerinde launcher
    /// `pelerin.kucuk.png` yazar; presence gövdesi ~32 KB ile sınırlı).
    private static volatile String pelerinKucuk = "";
    private static volatile String kanatKucuk = "";

    private static synchronized void dosyalariTazele() {
        long simdi = System.currentTimeMillis();
        if (simdi - YikimKozmetik.sonKontrol < 1000L) {
            return;
        }
        YikimKozmetik.sonKontrol = simdi;
        YikimKozmetik.pelerinYerel = YikimKozmetik.disktenOku("pelerin.png");
        YikimKozmetik.kanatYerel = YikimKozmetik.disktenOku("elytra.png");
        YikimKozmetik.pelerinKucuk = YikimKozmetik.kucukDosya("pelerin.kucuk.png", YikimKozmetik.pelerinYerel);
        YikimKozmetik.kanatKucuk = YikimKozmetik.kucukDosya("elytra.kucuk.png", YikimKozmetik.kanatYerel);
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

    /// 64x32 kopya varsa onu, yoksa tam dosyayı döndür.
    private static String kucukDosya(String ad, String tam) {
        try {
            Path f = YikimKozmetik.stateDir().resolve(ad);
            if (Files.isRegularFile(f)) {
                byte[] png = Files.readAllBytes(f);
                if (png.length > 8) {
                    return Base64.getEncoder().encodeToString(png);
                }
            }
        }
        catch (Throwable ignored) {
            // kopya okunamazsa tam dosya kullanılır
        }
        return tam;
    }

    private static String dosyaB64(String ad) {
        YikimKozmetik.dosyalariTazele();
        return "pelerin.png".equals(ad) ? YikimKozmetik.pelerinYerel : YikimKozmetik.kanatYerel;
    }

    /** Hızlı kapı: hiçbir kozmetik yoksa (yerel dosya + uzak liste boş) hiçbir
     *  iş yapılmaz. getSkinTextures her karede çağrılır → bu kontrol bedava
     *  olmalı: yalnız alan okuma, kilit/ağ/reflection yok. */
    public static boolean etkinMi() {
        YikimKozmetik.dosyalariTazele(); // saniyede en fazla bir dosya kontrolü
        return !YikimKozmetik.pelerinYerel.isEmpty()
            || !YikimKozmetik.kanatYerel.isEmpty()
            || !YikimKozmetik.UZAK_PELERIN.isEmpty()
            || !YikimKozmetik.UZAK_KANAT.isEmpty();
    }

    /** Presence gövdesine eklenecek alanlar: yalnız DEĞİŞEN kozmetik gönderilir. */
    public static synchronized String govdeEk() {
        YikimKozmetik.dosyalariTazele();
        StringBuilder ek = new StringBuilder();
        // Değişiklik TAM dosyadan anlaşılır; gönderilen ise 64x32 kopyadır
        // (HD doku sunucu gövde sınırına sığmaz, diğer oyuncular küçüğünü görür).
        String pelerin = YikimKozmetik.pelerinYerel;
        if (!pelerin.equals(YikimKozmetik.sonPelerinB64)) {
            YikimKozmetik.sonPelerinB64 = pelerin;
            if (pelerin.length() <= YikimKozmetik.TEK_PARCA_ESIK) {
                ek.append(",\"kc\":\"").append(pelerin).append('"');
            }
            else {
                // HD: parçalı yükleme kuyruğuna al (parçalar bitince yayına girer)
                YikimKozmetik.bekleyenPelerin = pelerin;
            }
        }
        String kanat = YikimKozmetik.kanatYerel;
        if (!kanat.equals(YikimKozmetik.sonKanatB64)) {
            YikimKozmetik.sonKanatB64 = kanat;
            if (kanat.length() <= YikimKozmetik.TEK_PARCA_ESIK) {
                ek.append(",\"ke\":\"").append(kanat).append('"');
            }
            else {
                YikimKozmetik.bekleyenKanat = kanat;
            }
        }
        return ek.toString();
    }

    /// İstemcinin elindeki doku sürümleri: "uuid:<hash>:<uzunluk>;..."
    ///
    /// Sunucu aynı sürümü biliyorsa dokuyu GÖNDERMEZ → kalp atışı başına
    /// yüzlerce KB indirmek yerine yalnız değişen doku iner.
    public static String bildiklerim() {
        StringBuilder sb = new StringBuilder();
        YikimKozmetik.surumEkle(sb, YikimKozmetik.UZAK_PELERIN);
        YikimKozmetik.surumEkle(sb, YikimKozmetik.UZAK_KANAT);
        return sb.toString();
    }

    /// Presence gövdesine eklenecek "ob" alanı (boşsa hiçbir şey eklenmez).
    public static String bildiklerimEk() {
        String b = YikimKozmetik.bildiklerim();
        return b.isEmpty() ? "" : ",\"ob\":\"" + b + "\"";
    }

    private static void surumEkle(StringBuilder sb, Map<UUID, String> kaynak) {
        for (Map.Entry<UUID, String> e : kaynak.entrySet()) {
            String b64 = e.getValue();
            if (b64 == null || b64.isEmpty()) {
                continue;
            }
            if (sb.length() > 0) {
                sb.append(';');
            }
            sb.append(e.getKey()).append(':')
                .append(Integer.toHexString(b64.hashCode())).append(':').append(b64.length());
        }
    }

    /// Bekleyen HD dokuları parça parça gönder (presence iş parçacığından).
    ///
    /// Parçalar paralel gider (4 iş parçacığı) → 1024×512 doku ~1 sn'de yüklenir.
    /// Doku yalnız TÜM parçalar ulaştığında yayına girer.
    public static void parcalariGonder(String ucak, String uuid) {
        String p = YikimKozmetik.bekleyenPelerin;
        if (!p.isEmpty() && !p.equals(YikimKozmetik.gonderilenPelerin)) {
            String veri = p;
            if (veri.length() > YikimKozmetik.SUNUCU_SINIR) {
                // Sunucu sınırını aşan doku: 64×32 kopya (yoksa gönderilmez)
                veri = YikimKozmetik.kucukDosya("pelerin.kucuk.png", "");
            }
            if (YikimKozmetik.parcaliGonder(ucak, uuid, "kc", veri)) {
                YikimKozmetik.gonderilenPelerin = p;
                YikimKozmetik.bekleyenPelerin = "";
            }
        }
        String k = YikimKozmetik.bekleyenKanat;
        if (!k.isEmpty() && !k.equals(YikimKozmetik.gonderilenKanat)) {
            String veri = k;
            if (veri.length() > YikimKozmetik.SUNUCU_SINIR) {
                veri = YikimKozmetik.kucukDosya("elytra.kucuk.png", "");
            }
            if (YikimKozmetik.parcaliGonder(ucak, uuid, "ke", veri)) {
                YikimKozmetik.gonderilenKanat = k;
                YikimKozmetik.bekleyenKanat = "";
            }
        }
    }

    /// Bir dokuyu parçalara bölüp gönder. Hepsi tuttuysa true.
    private static boolean parcaliGonder(String ucak, String uuid, String hedef, String b64) {
        if (b64 == null || b64.isEmpty()) {
            return false;
        }
        if (b64.length() > YikimKozmetik.SUNUCU_SINIR) {
            return false;
        }
        int toplam = (b64.length() + YikimKozmetik.PARCA_BOY - 1) / YikimKozmetik.PARCA_BOY;
        if (toplam < 1 || toplam > 64) {
            return false;
        }
        String kid = Integer.toHexString(b64.hashCode()) + "-" + b64.length();
        java.util.concurrent.atomic.AtomicInteger basarisiz =
            new java.util.concurrent.atomic.AtomicInteger();
        java.util.concurrent.ExecutorService havuz =
            java.util.concurrent.Executors.newFixedThreadPool(4);
        try {
            for (int i = 0; i < toplam; i++) {
                final int parca = i;
                havuz.execute(() -> {
                    int bas = parca * YikimKozmetik.PARCA_BOY;
                    int son = Math.min(b64.length(), bas + YikimKozmetik.PARCA_BOY);
                    String parcaVeri = b64.substring(bas, son);
                    String govde = "{\"v\":1,\"u\":\"" + uuid + "\",\"kp\":\"" + hedef
                        + "\",\"ki\":" + parca + ",\"kn\":" + toplam + ",\"kid\":\"" + kid
                        + "\",\"kv\":\"" + parcaVeri + "\"}";
                    if (!YikimKozmetik.gonder(ucak, govde)) {
                        basarisiz.incrementAndGet();
                    }
                });
            }
            havuz.shutdown();
            if (!havuz.awaitTermination(12L, java.util.concurrent.TimeUnit.SECONDS)) {
                havuz.shutdownNow();
                return false;
            }
        }
        catch (Throwable hata) {
            havuz.shutdownNow();
            return false;
        }
        return basarisiz.get() == 0;
    }

    /// Tek POST (parça yükleme için). 200 dönerse true.
    private static boolean gonder(String ucak, String govde) {
        java.net.HttpURLConnection bag = null;
        try {
            byte[] bayt = govde.getBytes(java.nio.charset.StandardCharsets.UTF_8);
            bag = (java.net.HttpURLConnection) new java.net.URL(ucak).openConnection();
            bag.setConnectTimeout(6000);
            bag.setReadTimeout(8000);
            bag.setRequestMethod("POST");
            bag.setDoOutput(true);
            bag.setRequestProperty("Content-Type", "application/json; charset=utf-8");
            bag.setFixedLengthStreamingMode(bayt.length);
            try (java.io.OutputStream cikis = bag.getOutputStream()) {
                cikis.write(bayt);
            }
            int kod = bag.getResponseCode();
            return kod == 200;
        }
        catch (Throwable hata) {
            return false;
        }
        finally {
            if (bag != null) {
                bag.disconnect();
            }
        }
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
            String b64;
            boolean kendi = YikimKozmetik.kendim(id);
            if (kendi) {
                // KENDİ oyuncu: launcher'ın yazdığı yerel dosya. Dosya yoksa
                // (launcher bu kuruluma yazamadı / oyun klasörü farklı)
                // presence sunucusundaki KENDİ tasarımımıza düşeriz —
                // aksi hâlde "herkes benim pelerinimi görüyor ama ben
                // görmüyorum" durumu çıkıyordu.
                b64 = YikimKozmetik.dosyaB64("pelerin.png");
                if (b64 == null || b64.isEmpty()) {
                    b64 = YikimKozmetik.UZAK_PELERIN.get(id);
                }
            }
            else {
                b64 = YikimKozmetik.UZAK_PELERIN.get(id);
            }
            class_2960 d = YikimKozmetik.doku("pelerin-" + id, b64);
            if (d == null && kendi) {
                // HD dosya kurulamadıysa 64×32 kopyayla devam: pelerin kaybolmaz.
                d = YikimKozmetik.doku("pelerin-k-" + id,
                    YikimKozmetik.kucukDosya("pelerin.kucuk.png", ""));
            }
            return d;
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** Oyuncunun elitra kanat dokusu (yoksa null → vanilla). */
    public static class_2960 kanat(UUID id) {
        try {
            String b64;
            boolean kendi = YikimKozmetik.kendim(id);
            if (kendi) {
                b64 = YikimKozmetik.dosyaB64("elytra.png");
                if (b64 == null || b64.isEmpty()) {
                    b64 = YikimKozmetik.UZAK_KANAT.get(id);
                }
            }
            else {
                b64 = YikimKozmetik.UZAK_KANAT.get(id);
            }
            class_2960 d = YikimKozmetik.doku("kanat-" + id, b64);
            if (d == null && kendi) {
                d = YikimKozmetik.doku("kanat-k-" + id,
                    YikimKozmetik.kucukDosya("elytra.kucuk.png", ""));
            }
            return d;
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** base64 PNG → TextureManager'a kayıtlı Identifier (bir kez).
     *
     * v1.19.1 — "bilinmeyen doku" hatasının kökü:
     * vanilla `AssetInfo.TextureAssetInfo(id)` dokuyu `textures/<id-yolu>.png`
     * altında ARAR (tek argümanlı kurucu yolu kendisi önekler). Doku eskiden
     * yalnız `yikimlient:kozmetik/...` kimliğine kaydedildiği için renderer
     * `yikimlient:textures/kozmetik/....png` bulamıyor, pelerin/elitra mor-siyah
     * "eksik doku" olarak çiziliyordu. Artık aynı doku hem asset kimliğine hem
     * de aranabilecek tüm yol biçimlerine kaydedilir.
     */
    private static class_2960 doku(String anahtar, String b64) {
        if (b64 == null || b64.isEmpty()) {
            return null;
        }
        String imza = anahtar + ":" + Integer.toHexString(b64.hashCode()) + ":" + b64.length();
        YikimKozmetik.kayitlariTazele();
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
            if (image == null) {
                YikimKozmetik.BASARISIZ.add(imza);
                return null;
            }
            class_1043 texture = new class_1043(() -> "yikim-kozmetik", image);
            String guvenli = anahtar.replaceAll("[^a-z0-9-]", "-");
            if (guvenli.length() > 40) {
                guvenli = guvenli.substring(0, 40);
            }
            String yol = "kozmetik/" + Integer.toHexString(imza.hashCode()) + "-" + guvenli;
            class_2960 id = class_2960.method_43902("yikimlient", yol);
            class_2960 dokuYolu = class_2960.method_43902("yikimlient", "textures/" + yol + ".png");
            class_2960 dokuYoluUzantisiz = class_2960.method_43902("yikimlient", "textures/" + yol);
            YikimKozmetik.kaydet(id, texture, dokuYolu, dokuYoluUzantisiz);
            YikimKozmetik.DOKULAR.put(imza, id);
            return id;
        }
        catch (Throwable e) {
            // Sessiz kalmak teşhisi imkânsız kılıyordu: ilk hatayı günlüğe yaz.
            YikimKozmetik.BASARISIZ.add(imza);
            if (YikimKozmetik.BASARISIZ.size() < 4) {
                com.yikimlient.client.YikimLog.warn("kozmetik doku kurulamadi (" + anahtar + "): " + e);
            }
            return null;
        }
    }

    /** id → [doku, aranan yollar...] — kaynak yenilenmesinden sonra tekrar kurulur. */
    private static final Map<class_2960, Object[]> KAYITLI =
        new ConcurrentHashMap<class_2960, Object[]>();
    private static long sonTazeleme;

    private static void kaydet(class_2960 id, class_1043 texture, class_2960... yollar) {
        try {
            class_1060 tm = class_310.method_1551().method_1531();
            tm.method_4616(id, texture);
            for (class_2960 yol : yollar) {
                tm.method_4616(yol, texture);
            }
            texture.method_4524();
            Object[] kayit = new Object[yollar.length + 1];
            kayit[0] = texture;
            System.arraycopy(yollar, 0, kayit, 1, yollar.length);
            YikimKozmetik.KAYITLI.put(id, kayit);
        }
        catch (Throwable ignored) {
            // kayıt başarısızsa çağıran BASARISIZ'a düşer
        }
    }

    /**
     * F3+T / dil değişimi gibi kaynak yenilemelerinde TextureManager dinamik
     * dokuları bırakır. Saniyede en fazla bir kez kontrol edilip yeniden
     * kaydedilir; aksi hâlde pelerin bir kez yenilemeden sonra kayboluyordu.
     */
    private static void kayitlariTazele() {
        long simdi = System.currentTimeMillis();
        if (simdi - YikimKozmetik.sonTazeleme < 1000L) {
            return;
        }
        YikimKozmetik.sonTazeleme = simdi;
        if (YikimKozmetik.KAYITLI.isEmpty()) {
            return;
        }
        try {
            class_1060 tm = class_310.method_1551().method_1531();
            for (Map.Entry<class_2960, Object[]> e : YikimKozmetik.KAYITLI.entrySet()) {
                Object[] kayit = e.getValue();
                class_1043 texture = (class_1043) kayit[0];
                if (tm.method_4619(e.getKey()) == texture) {
                    continue;
                }
                tm.method_4616(e.getKey(), texture);
                for (int i = 1; i < kayit.length; i++) {
                    tm.method_4616((class_2960) kayit[i], texture);
                }
            }
        }
        catch (Throwable ignored) {
            // yenileme sırasında hata olursa oyun etkilenmez
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

    /** İki doku kimliği (AssetInfo) AYNI metni mi gösteriyor? (doku yolu) */
    private static boolean ayniDoku(Object a, Object b) {
        if (a == null || b == null) {
            return a == b;
        }
        Object pa = YikimKozmetik.cagir(a, "comp_3627");
        Object pb = YikimKozmetik.cagir(b, "comp_3627");
        if (pa != null && pb != null) {
            return pa.equals(pb);
        }
        return a.equals(b);
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

    /** Kaynak SkinTextures → {doku anahtarı, sonuç}. Kare başına iş yok.
     *
     * v1.19.2 — "pelerin takınca skin gidiyor" hatasının kökü:
     * önbellek yalnız oyuncu kimliği + doku kimlikleriyle anahtarlanıyordu.
     * Giriş anında oyuncu varlığı (`class_742.method_52814`) henüz oyuncu
     * listesi girişine sahip olmayabilir; o durumda vanilla
     * `class_1068.method_4648` ile VARSAYILAN (Steve/Alex) gövdesini döndürür.
     * Sonuç önbelleğe yazıldığı için gerçek skin sonradan gelse bile hep
     * varsayılan gövde gösteriliyordu. Artık kaynak nesnenin kimliği de
     * anahtarın parçası: vanilla yeni bir SkinTextures döndürdüğünde
     * (skin yüklendiğinde) sonuç yeniden hesaplanır.
     * Zayıf (weak) anahtar: kaynak nesne bırakılınca kayıt kendiliğinden düşer. */
    private static final Map<Object, Object[]> ONBELLEK =
        java.util.Collections.synchronizedMap(new java.util.WeakHashMap<Object, Object[]>());

    /**
     * Oyuncunun kozmetiğini uygular; sonuç önbelleğe alınır.
     * Hem PlayerListEntry hem oyuncu varlığı noktası bunu çağırır — ikinci
     * çağrı aynı nesneye düşer, çift doku kurulumu olmaz.
     */
    /** Vanilla'nın "skin yok" varsayılanı mı? (Steve/Alex)
     *
     * Giriş anında oyuncu listesi girişi hazır değilken `method_52814`
     * `class_1068.method_4648(uuid)` varsayılanını döndürür. O gövdeyi
     * kozmetikle birlikte uygulamak gerçek skini gizlerdi; varsayılan
     * nesneyle AYNI örnekse hiç dokunma. */
    private static boolean varsayilanMi(Object mevcut, UUID id) {
        try {
            Class<?> c = YikimKozmetik.sinif("net.minecraft.class_1068");
            if (c == null) {
                return false;
            }
            Method m = c.getMethod("method_4648", UUID.class);
            return mevcut == m.invoke(null, id);
        }
        catch (Throwable ignored) {
            return false;
        }
    }

    public static Object onbellekli(Object mevcut, UUID id) {
        try {
            if (mevcut == null || YikimKozmetik.varsayilanMi(mevcut, id)) {
                return null;
            }
            class_2960 pelerin = YikimKozmetik.pelerin(id);
            class_2960 kanat = YikimKozmetik.kanat(id);
            if (pelerin == null && kanat == null) {
                return null;
            }
            String anahtar = pelerin + "|" + kanat;
            Object[] kayit = YikimKozmetik.ONBELLEK.get(mevcut);
            if (kayit != null && anahtar.equals(kayit[0])) {
                return kayit[1];
            }
            Object var = YikimKozmetik.uygula(mevcut, pelerin, kanat);
            if (var == null) {
                return null;
            }
            if (YikimKozmetik.ONBELLEK.size() > 512) {
                YikimKozmetik.ONBELLEK.clear();
            }
            YikimKozmetik.ONBELLEK.put(mevcut, new Object[] {anahtar, var});
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
                Object var = c.newInstance(govde, yeniPelerin, yeniKanat, model, secure);
                // GÜVENLİK KİLİDİ (v1.19.3) — "kozmetik takınca skinim Steve
                // oldu" hatası: yansımayla kurulan nesnenin bileşen sırası
                // sürümler arasında değişebilir. Yeni nesnenin GÖVDE dokusu
                // mevcutla birebir aynı değilse hiçbir şey uygulanmaz → oyuncu
                // kendi skinini asla kaybetmez, en fazla kozmetik görünmez.
                Object varGovde = YikimKozmetik.cagir(var, "comp_1626");
                if (varGovde == null || !YikimKozmetik.ayniDoku(varGovde, govde)) {
                    return null;
                }
                return var;
            }
        }
        catch (Throwable ignored) {
            // doku değişimi başarısızsa vanilla görünüm
        }
        return null;
    }
}
