import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;

/**
 * YIKIMLient PRESENCE SUNUCUSU v2 (VDS / Docker sürümü — tek dosya, bağımlılık YOK)
 * =====================================================================
 * JDK'nın gömülü HTTP sunucusu; HARİCİ KÜTÜPHANE YOK.
 *
 * ÇALIŞTIRMA:
 *   java PresenceServer.java            (port 8787)
 *   java PresenceServer.java 9000       (özel port)
 *
 * PROTOCOL (hepsi POST /presence, JSON):
 *   presence + çizim : {"v":1,"s":"<sunucu>","u":"<uuid>","n":"<isim>","png":"<b64>"}
 *   çizim yükle      : {"u":"<uuid>","n":"<isim>","png":"<b64>"}   (s yok)
 *   çizim sil        : {"u":"<uuid>","sil":true}
 *   izin listesi     : {"izinler":["ad", ...]}                      (tam liste)
 *   yanıt            : {"p":[uuid...],"b":{uuid:"<b64>"},"izinler":["ad"...]}
 *
 * v2 DEĞİŞİKLİKLERİ (v1.12.8):
 *   - "b" artık YALNIZ AYNI SUNUCUDAKİ oyuncuların çizimlerini döner.
 *     v1'de tüm dünyadaki çizimler herkese gidiyordu (bellek + gizlilik sorunu).
 *   - Çizimler `rozetler.json` dosyasına yazılır → süreç yeniden başlasa da kalır.
 *   - İzin karşılaştırması KÜÇÜK HARFE duyarsız (v1'de "YKSAMI1" ↔ "yksami1"
 *     eşleşmiyordu ve çizim her kalp atışında siliniyordu).
 *   - İzin geri alma artık SADECE listeden çıkarılan oyuncunun çizimini siler;
 *     hiç listede olmayanların çizimi kendiliğinden silinmez.
 *   - İzin listesi boşsa (hiç kurulmamış) yükleme serbesttir — kilitlenme yok.
 */

public class PresenceServer {

    private static final long TTL_MS = 90_000L;
    // v4: gövdeye kozmetik (pelerin/elitra, iki adet ~3-6 KB base64) sığmalı
    private static final int MAX_BODY = 32768;
    private static final int MAX_PLAYERS = 200;
    private static final int MAX_ROZET_B64 = 4096;
    /** protokol sürümü — GET yanıtında görünür, dağıtım doğrulaması için */
    private static final int SURUM = 4;

    /// KOZMETİKLER (v4): uuid → base64 PNG doku (64×32).
    ///   PELERINLER: "kc" — özel pelerin dokusu
    ///   KANATLAR  : "ke" — elitra kanat dokusu
    /// Herkes kullanabilir (ücretsiz); izin listesine bağlı DEĞİL.
    private static final Map<String, String> PELERINLER = new ConcurrentHashMap<>();
    private static final Map<String, String> KANATLAR = new ConcurrentHashMap<>();
    private static final int MAX_KOZMETIK_B64 = 6144;

    /// sunucu adresi → (uuid → oyuncu bilgisi)
    private static final Map<String, Map<String, Oyuncu>> KAYIT = new ConcurrentHashMap<>();

    /// özel rozetler: uuid → base64 png (8x8); TTL yok — çizim kalıcıdır
    private static final Map<String, String> ROZETLER = new ConcurrentHashMap<>();

    /// v3: aynı çizimin HAM hali — 64 piksel × 4 bayt (RGBA) base64.
    /// PNG her istemcide farklı kanal sırasıyla (ABGR/ARGB) çözülebiliyordu ve
    /// kırmızı↔mavi takası oluyordu (turuncu kalp karşı tarafta MAVİ). Ham
    /// baytta yorum yok: bayt sırası protokolün parçası.
    private static final Map<String, String> PIXEL = new ConcurrentHashMap<>();
    private static final int PX_BAYT = 8 * 8 * 4;

    /// uuid → hesap adı (izin eşleşmesi ve "kimin logosu" bilgisi için)
    private static final Map<String, String> ISIMLER = new ConcurrentHashMap<>();

    /// v3.1: ortam değişkeninden gelen, ASLA silinemeyen sahip isimleri.
    private static final Set<String> SAHIPLER = new HashSet<>();

    /// çizim izinli oyuncu isimleri — ANAHTARLAR KÜÇÜK HARF
    private static final Map<String, Boolean> IZINLER = new ConcurrentHashMap<>();

    private static final class Oyuncu {
        final String isim;
        volatile long zaman;
        Oyuncu(String isim, long zaman) { this.isim = isim; this.zaman = zaman; }
    }

    public static void main(String[] args) throws IOException {
        int port = 8787;
        if (args.length > 0) {
            try { port = Integer.parseInt(args[0].trim()); } catch (NumberFormatException yok) { /* varsayılan */ }
        } else {
            // bulut (Render/Docker) PORT ortam değişkenini dayatır
            String ortam = System.getenv("PORT");
            if (ortam != null) {
                try { port = Integer.parseInt(ortam.trim()); } catch (NumberFormatException yok) { /* varsayılan */ }
            }
        }
        izinleriYukle();
        sahipleriYukle();
        rozetleriYukle();
        kozmetikleriYukle();
        HttpServer sunucu = HttpServer.create(new InetSocketAddress("0.0.0.0", port), 0);
        sunucu.createContext("/presence", PresenceServer::isle);
        sunucu.setExecutor(Executors.newFixedThreadPool(2));
        sunucu.start();
        System.out.println("[YIKIM presence] v" + SURUM + " calisiyor: http://0.0.0.0:" + port + "/presence");
        System.out.println("[YIKIM presence] launcher config'ine su adresi yaz: http://VDS_IP:" + port + "/presence");
    }

    // ---------------------------------------------------------------- izinler

    /// İstek gövdesindeki "izinler":[...] dizisini işle (tam liste değişimi).
    private static void izinleriIsle(String govde) {
        if (!govde.contains("\"izinler\"")) {
            return;
        }
        List<String> adlar = dizi(govde, "izinler");
        if (adlar == null) {
            return;
        }
        Set<String> eski = new HashSet<>(IZINLER.keySet());
        IZINLER.clear();
        for (String sahip : SAHIPLER) {
            IZINLER.put(sahip, Boolean.TRUE);
        }
        for (String ad : adlar) {
            String temiz = ad.trim().toLowerCase(Locale.ROOT);
            if (temiz.length() > 1 && temiz.length() <= 32) {
                IZINLER.put(temiz, Boolean.TRUE);
            }
        }
        izinleriKaydet();

        // İZİN GERİ ALMA: yalnız ÖNCEDEN listede olup şimdi çıkarılan oyuncunun
        // çizimi silinir. Hiç listede olmayanlarınki kendiliğinden silinmez
        // (v1'de isim eşleşmediği için herkesin çizimi siliniyordu).
        int temizlenen = 0;
        for (String rozetUuid : new ArrayList<>(ROZETLER.keySet())) {
            String ad = ISIMLER.get(rozetUuid);
            if (ad == null) {
                continue;
            }
            String kucuk = ad.toLowerCase(Locale.ROOT);
            if (eski.contains(kucuk) && !IZINLER.containsKey(kucuk)
                && ROZETLER.remove(rozetUuid) != null) {
                temizlenen++;
            }
        }
        if (temizlenen > 0) {
            rozetleriKaydet();
            System.out.println("[YIKIM presence] izin geri alindi: " + temizlenen + " cizim silindi");
        }
        System.out.println("[YIKIM presence] izin listesi guncellendi: " + IZINLER.keySet());
    }

    /// Sahip isimleri ORTAM DEĞİŞKENİNDEN (YIKIM_SAHIP, virgülle ayrılmış).
    ///
    /// Neden: ücretsiz bulut katmanında disk kalıcı değildir; her dağıtımda
    /// `izinler.json` sıfırlanıyor ve liste boşalınca sunucu "herkes çizebilir"
    /// moduna düşüyordu. Sahip env'den her zaman listeye eklenir → dağıtım
    /// sonrası bile atölye yalnız sahibe açık kalır.
    private static void sahipleriYukle() {
        String ham = System.getenv("YIKIM_SAHIP");
        if (ham == null || ham.trim().isEmpty()) {
            if (!IZINLER.isEmpty()) {
                System.out.println("[YIKIM presence] YIKIM_SAHIP tanimsiz — yalniz izinler.json gecerli");
            }
            return;
        }
        for (String parca : ham.split(",")) {
            String ad = parca.trim().toLowerCase(Locale.ROOT);
            if (ad.length() > 1 && ad.length() <= 32) {
                SAHIPLER.add(ad);
                IZINLER.put(ad, Boolean.TRUE);
            }
        }
        System.out.println("[YIKIM presence] sahip listesi env'den yuklendi: " + IZINLER.keySet());
    }

    private static String izinlerYaz() {
        StringBuilder json = new StringBuilder("[");
        boolean ilk = true;
        for (String ad : IZINLER.keySet()) {
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(ad.replace("\"", "")).append('"');
        }
        return json.append(']').toString();
    }

    private static void izinleriKaydet() {
        try {
            Files.write(Path.of("izinler.json"), izinlerYaz().getBytes(StandardCharsets.UTF_8));
        } catch (Throwable yoksay) { /* salt-okunur dosya sisteminde sessiz kal */ }
    }

    private static void izinleriYukle() {
        try {
            Path yol = Path.of("izinler.json");
            if (Files.exists(yol)) {
                String json = new String(Files.readAllBytes(yol), StandardCharsets.UTF_8);
                List<String> adlar = dizi(json, "izinler");
                if (adlar != null) {
                    for (String ad : adlar) {
                        String temiz = ad.trim().toLowerCase(Locale.ROOT);
                        if (temiz.length() > 1) {
                            IZINLER.put(temiz, Boolean.TRUE);
                        }
                    }
                }
            }
        } catch (Throwable yoksay) { /* yok say */ }
    }

    /// Çizim izni var mı? Liste HİÇ kurulmamışsa serbest (kilitlenme olmasın).
    private static boolean izinliMi(String uuid, String isim) {
        if (IZINLER.isEmpty()) {
            return true;
        }
        if (isim != null && !isim.isEmpty() && IZINLER.containsKey(isim.toLowerCase(Locale.ROOT))) {
            return true;
        }
        String kayitli = ISIMLER.get(uuid);
        return kayitli != null && IZINLER.containsKey(kayitli.toLowerCase(Locale.ROOT));
    }

    // ---------------------------------------------------------------- çizimler

    /// Çizimleri diske yaz: {"<uuid>":{"n":"isim","p":"<b64>"}, ...}
    private static void rozetleriKaydet() {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (Map.Entry<String, String> e : ROZETLER.entrySet()) {
            if (!ilk) json.append(',');
            ilk = false;
            String ad = ISIMLER.getOrDefault(e.getKey(), "");
            json.append('"').append(e.getKey()).append("\":{\"n\":\"")
                .append(ad.replace("\"", "")).append("\",\"p\":\"")
                .append(e.getValue()).append('"');
            String ham = PIXEL.get(e.getKey());
            if (ham != null) {
                json.append(",\"x\":\"").append(ham).append('"');
            }
            json.append('}');
        }
        json.append('}');
        try {
            Files.write(Path.of("rozetler.json"), json.toString().getBytes(StandardCharsets.UTF_8));
        } catch (Throwable yoksay) { /* yok say */ }
    }

    private static void rozetleriYukle() {
        try {
            Path yol = Path.of("rozetler.json");
            if (!Files.exists(yol)) {
                return;
            }
            String json = new String(Files.readAllBytes(yol), StandardCharsets.UTF_8);
            int i = 0;
            while ((i = json.indexOf('"', i)) >= 0) {
                int son = json.indexOf('"', i + 1);
                if (son < 0) break;
                String uuid = json.substring(i + 1, son);
                if (!uuidGuvenli(uuid)) {
                    i = son + 1;
                    continue;
                }
                String ad = alan(json, son, "n");
                String png = alan(json, son, "p");
                if (png != null && png.length() <= MAX_ROZET_B64) {
                    ROZETLER.put(uuid, png);
                    if (ad != null) ISIMLER.put(uuid, ad);
                }
                String ham = alan(json, son, "x");
                if (ham != null && pxGecerli(ham)) {
                    PIXEL.put(uuid, pxTemizle(ham));
                    if (ad != null) ISIMLER.put(uuid, ad);
                }
                int kapanis = json.indexOf('}', son);
                i = kapanis < 0 ? son + 1 : kapanis + 1;
            }
            if (!ROZETLER.isEmpty()) {
                System.out.println("[YIKIM presence] " + ROZETLER.size() + " rozet diskten yuklendi");
            }
        } catch (Throwable yoksay) { /* yok say */ }
    }

    // ---------------------------------------------------------------- kozmetik

    /// Kozmetikleri diske yaz: {"<uuid>":{"kc":"<b64>","ke":"<b64>"}, ...}
    private static void kozmetikleriKaydet() {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        Set<String> hepsi = new HashSet<>(PELERINLER.keySet());
        hepsi.addAll(KANATLAR.keySet());
        for (String uuid : hepsi) {
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(uuid).append("\":{");
            boolean alan = false;
            String p = PELERINLER.get(uuid);
            if (p != null) {
                json.append("\"kc\":\"").append(p).append('"');
                alan = true;
            }
            String k = KANATLAR.get(uuid);
            if (k != null) {
                if (alan) json.append(',');
                json.append("\"ke\":\"").append(k).append('"');
            }
            json.append('}');
        }
        json.append('}');
        try {
            Files.write(Path.of("kozmetikler.json"), json.toString().getBytes(StandardCharsets.UTF_8));
        } catch (Throwable yoksay) { /* yok say */ }
    }

    private static void kozmetikleriYukle() {
        try {
            Path yol = Path.of("kozmetikler.json");
            if (!Files.exists(yol)) {
                return;
            }
            String json = new String(Files.readAllBytes(yol), StandardCharsets.UTF_8);
            int i = 0;
            while ((i = json.indexOf('"', i)) >= 0) {
                int son = json.indexOf('"', i + 1);
                if (son < 0) break;
                String uuid = json.substring(i + 1, son);
                if (!uuidGuvenli(uuid)) {
                    i = son + 1;
                    continue;
                }
                String p = alan(json, son, "kc");
                String k = alan(json, son, "ke");
                if (p != null && p.length() <= MAX_KOZMETIK_B64) PELERINLER.put(uuid, p);
                if (k != null && k.length() <= MAX_KOZMETIK_B64) KANATLAR.put(uuid, k);
                int kapanis = json.indexOf('}', son);
                i = kapanis < 0 ? son + 1 : kapanis + 1;
            }
            if (!PELERINLER.isEmpty() || !KANATLAR.isEmpty()) {
                System.out.println("[YIKIM presence] kozmetik diskten yuklendi: "
                    + PELERINLER.size() + " pelerin, " + KANATLAR.size() + " kanat");
            }
        } catch (Throwable yoksay) { /* yok say */ }
    }

    /// Aynı sunucudaki oyuncuların İSİMLERİ {"uuid":"isim"}.
    ///
    /// Neden: rozet eşleşmesi yalnız UUID ile yapıldığında, proxy/offline
    /// modda oyuncunun görünen UUID'si presence'a kaydolandan farklı olabiliyor
    /// → TAB'da rozet çıkarken isim etiketinde çıkmıyordu (veya tersi).
    /// İsim eşleşmesi bu farkı kapatır; iki tarafta da aynı kural işler.
    private static String isimlerYaz(String istekSahibi, Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) continue;
            String ad = ISIMLER.get(akran);
            if (ad == null || ad.isEmpty()) continue;
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(akran).append("\":\"")
                .append(ad.replace("\\", "").replace("\"", "")).append('"');
        }
        return json.append('}').toString();
    }

    /// Aynı sunucudaki oyuncuların kozmetikleri {"uuid":"<b64>"}.
    private static String kozmetikYaz(Map<String, String> kaynak, String istekSahibi,
                                      Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) continue;
            String doku = kaynak.get(akran);
            if (doku == null) continue;
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(akran).append("\":\"").append(doku).append('"');
        }
        return json.append('}').toString();
    }

    /// Aynı sunucudaki oyuncuların çizimleri {"uuid":"<b64>"} — başka sunucular SIZMAZ.
    private static String rozetlerYaz(String istekSahibi, Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) {
                continue;
            }
            String art = ROZETLER.get(akran);
            if (art == null) {
                continue;
            }
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(akran).append("\":\"").append(art).append('"');
        }
        return json.append('}').toString();
    }

    // ---------------------------------------------------------------- piksel (v3)

    /// Aynı sunucudaki oyuncuların HAM çizimleri {"uuid":"<b64>"}.
    private static String pixelYaz(String istekSahibi, Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) continue;
            String ham = PIXEL.get(akran);
            if (ham == null) continue;
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(akran).append("\":\"").append(ham).append('"');
        }
        return json.append('}').toString();
    }

    /// base64 çözülünce tam 256 bayt (64 piksel × RGBA) mı?
    private static boolean pxGecerli(String ham) {
        try {
            return Base64.getDecoder().decode(ham.trim()).length == PX_BAYT;
        } catch (Throwable yok) {
            return false;
        }
    }

    private static String pxTemizle(String ham) {
        return Base64.getEncoder().encodeToString(Base64.getDecoder().decode(ham.trim()));
    }

    // ---------------------------------------------------------------- istek

    private static void isle(HttpExchange degis) throws IOException {
        try {
            String metot = degis.getRequestMethod();
            if ("GET".equalsIgnoreCase(metot)) {
                cevap(degis, 200, "{\"ok\":true,\"service\":\"yikim-presence\",\"v\":" + SURUM
                    + ",\"rozet\":" + ROZETLER.size() + ",\"izin\":" + IZINLER.size() + ",\"p\":[]}");
                return;
            }
            if (!"POST".equalsIgnoreCase(metot)) {
                cevap(degis, 405, "{\"p\":[]}");
                return;
            }
            byte[] bayt = degis.getRequestBody().readNBytes(MAX_BODY + 1);
            if (bayt.length > MAX_BODY) {
                cevap(degis, 413, "{\"p\":[]}");
                return;
            }
            String govde = new String(bayt, StandardCharsets.UTF_8);
            String sunucu = alan(govde, "s");
            String uuid = alan(govde, "u");
            String isim = alan(govde, "n");
            String png = alan(govde, "png");

            // --- izin listesi değişimi UUID'DEN ÖNCE işlenir (v1.12.6): admin
            // paneli izinleri u/n OLMADAN yollar; eski sürüm bunu 400 ile
            // kovduğu için izin kaydı HİÇ çalışmıyordu.
            if (govde.contains("\"izinler\"")) {
                izinleriIsle(govde);
                if (uuid == null || !uuidGuvenli(uuid)) {
                    cevap(degis, 200, "{\"p\":[],\"b\":{},\"izinler\":" + izinlerYaz() + "}");
                    return;
                }
            }

            if (uuid == null || !uuidGuvenli(uuid)) {
                cevap(degis, 400, "{\"p\":[]}");
                return;
            }

            if (isim != null && !isim.isEmpty()) {
                ISIMLER.put(uuid, isim.length() > 32 ? isim.substring(0, 32) : isim);
            }

            // --- rozet işlemi (sunucu bilgisi şart değil) ---
            // v3: istemci HAM RGBA ("x") da gönderir. Sunucu çizimi YORUMLAMAZ
            // (görüntü kodlayıcı/çözücü yok, kanal sırası tahmini yok): gelen
            // baytı saklar, aynen dağıtır. Yeni istemci "x"i, eski istemci
            // "b"yi okur. Kırmızı↔mavi takasının tek kaynağı buydu.
            // --- kozmetik (pelerin/elitra): ücretsiz, izin listesine bağlı değil ---
            // Boş dizge = "kaldır" (alan() boşu null sayar, bu yüzden hamAlan).
            String pelerin = hamAlan(govde, "kc");
            String kanat = hamAlan(govde, "ke");
            boolean kozmetikDegisti = false;
            if (pelerin != null && pelerin.length() <= MAX_KOZMETIK_B64) {
                if (pelerin.isEmpty()) PELERINLER.remove(uuid);
                else PELERINLER.put(uuid, pelerin);
                kozmetikDegisti = true;
            }
            if (kanat != null && kanat.length() <= MAX_KOZMETIK_B64) {
                if (kanat.isEmpty()) KANATLAR.remove(uuid);
                else KANATLAR.put(uuid, kanat);
                kozmetikDegisti = true;
            }
            if (kozmetikDegisti) {
                kozmetikleriKaydet();
            }

            String ham = alan(govde, "x");
            if (ham != null && pxGecerli(ham)) {
                if (izinliMi(uuid, isim)) {
                    PIXEL.put(uuid, pxTemizle(ham));
                    if (png != null && png.length() <= MAX_ROZET_B64) {
                        ROZETLER.put(uuid, png);
                    }
                    rozetleriKaydet();
                }
            } else if (png != null && png.length() <= MAX_ROZET_B64) {
                if (izinliMi(uuid, isim)) {
                    ROZETLER.put(uuid, png);
                    rozetleriKaydet();
                }
            } else if (govde.contains("\"sil\"")) {
                PIXEL.remove(uuid);
                if (ROZETLER.remove(uuid) != null) {
                    rozetleriKaydet();
                }
            }

            // yalnız kozmetik isteği (presence bilgisi yok) burada biter
            if (pelerin != null || kanat != null) {
                if (sunucu == null) {
                    cevap(degis, 200, "{\"p\":[],\"b\":{},\"kc\":{},\"ke\":{}}");
                    return;
                }
            }

            // --- sadece rozet isteği (presence yoksa) burada biter ---
            if (sunucu == null) {
                cevap(degis, 200, "{\"p\":[],\"b\":{},\"izinler\":" + izinlerYaz() + "}");
                return;
            }
            if (isim == null || isim.isEmpty()) isim = "oyuncu";
            if (isim.length() > 32) isim = isim.substring(0, 32);
            final String isimSon = isim;

            long simdi = System.currentTimeMillis();
            Map<String, Oyuncu> liste = KAYIT.computeIfAbsent(sunucu, k -> new ConcurrentHashMap<>());
            liste.compute(uuid, (k, eski) -> {
                if (eski != null) { eski.zaman = simdi; return eski; }
                return new Oyuncu(isimSon, simdi);
            });

            // süresi geçenleri temizle
            for (Map.Entry<String, Oyuncu> e : liste.entrySet()) {
                if (simdi - e.getValue().zaman > TTL_MS) {
                    liste.remove(e.getKey());
                }
            }
            if (liste.size() > MAX_PLAYERS) {
                liste.clear();
                liste.put(uuid, new Oyuncu(isimSon, simdi));
            }

            // aynı sunucudaki diğerlerini yanıtla
            StringBuilder json = new StringBuilder("{\"p\":[");
            boolean ilk = true;
            for (Map.Entry<String, Oyuncu> e : liste.entrySet()) {
                if (e.getKey().equals(uuid)) continue;
                if (!ilk) json.append(',');
                ilk = false;
                json.append('"').append(e.getKey()).append('"');
            }
            json.append("],\"b\":").append(rozetlerYaz(uuid, liste))
                .append(",\"x\":").append(pixelYaz(uuid, liste))
                .append(",\"kc\":").append(kozmetikYaz(PELERINLER, uuid, liste))
                .append(",\"ke\":").append(kozmetikYaz(KANATLAR, uuid, liste))
                .append(",\"pn\":").append(isimlerYaz(uuid, liste))
                .append(",\"izinler\":").append(izinlerYaz()).append('}');
            cevap(degis, 200, json.toString());
        }
        catch (Throwable problem) {
            try { cevap(degis, 500, "{\"p\":[]}"); } catch (Throwable yoksay) { /* yok */ }
        }
        finally {
            degis.close();
        }
    }

    /// "ad":["a","b"] dizisini kütüphanesiz çıkar (izinler alanı dizidir).
    private static List<String> dizi(String govde, String ad) {
        int i = govde.indexOf("\"" + ad + "\"");
        if (i < 0) return null;
        int sol = govde.indexOf('[', i);
        int sag = govde.indexOf(']', sol);
        if (sol < 0 || sag < 0 || sag <= sol) return null;
        List<String> parcalar = new ArrayList<>();
        int j = sol;
        while (true) {
            int t1 = govde.indexOf('"', j + 1);
            if (t1 < 0 || t1 > sag) break;
            int t2 = govde.indexOf('"', t1 + 1);
            if (t2 < 0 || t2 > sag) break;
            parcalar.add(govde.substring(t1 + 1, t2));
            j = t2;
        }
        return parcalar;
    }

    /// Basit JSON alan çıkarımı: "alan":"değer" (kütüphanesiz, toleranslı).
    private static String alan(String govde, String ad) {
        return alan(govde, 0, ad);
    }

    private static String alan(String govde, int baslangic, String ad) {
        String igne = "\"" + ad + "\"";
        int i = govde.indexOf(igne, baslangic);
        if (i < 0) return null;
        int ikiNokta = govde.indexOf(':', i + igne.length());
        if (ikiNokta < 0) return null;
        int t1 = govde.indexOf('"', ikiNokta + 1);
        if (t1 < 0) return null;
        int t2 = govde.indexOf('"', t1 + 1);
        if (t2 < 0) return null;
        String deger = govde.substring(t1 + 1, t2).trim();
        return deger.isEmpty() ? null : deger;
    }

    /// "alan":"değer" — BOŞ dizge de döner ("kaldır" sinyali için).
    private static String hamAlan(String govde, String ad) {
        String igne = "\"" + ad + "\"";
        int i = govde.indexOf(igne);
        if (i < 0) return null;
        int ikiNokta = govde.indexOf(':', i + igne.length());
        if (ikiNokta < 0) return null;
        int t1 = govde.indexOf('"', ikiNokta + 1);
        if (t1 < 0) return null;
        int t2 = govde.indexOf('"', t1 + 1);
        if (t2 < 0) return null;
        return govde.substring(t1 + 1, t2).trim();
    }

    private static boolean uuidGuvenli(String uuid) {
        if (uuid.length() != 36 || uuid.indexOf('-') != 8) return false;
        for (char c : uuid.toCharArray()) {
            if (!(Character.isLetterOrDigit(c) || c == '-')) return false;
        }
        return true;
    }

    private static void cevap(HttpExchange degis, int kod, String govde) throws IOException {
        byte[] bayt = govde.getBytes(StandardCharsets.UTF_8);
        degis.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        degis.sendResponseHeaders(kod, bayt.length);
        try (OutputStream cikis = degis.getResponseBody()) {
            cikis.write(bayt);
        }
    }
}
