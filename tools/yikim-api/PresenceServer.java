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
    // v5: HD kozmetik dokuları parça parça yüklenir (her istek ~48 KB metin);
    // tek istekte gelen doku da kabul edilir (192 KB gövde sınırı içinde).
    private static final int MAX_BODY = 196608;
    private static final int MAX_PLAYERS = 200;
    private static final int MAX_ROZET_B64 = 4096;
    /** protokol sürümü — GET yanıtında görünür, dağıtım doğrulaması için */
    private static final int SURUM = 7;

    /// KOZMETİKLER (v4): uuid → base64 PNG doku (64×32).
    ///   PELERINLER: "kc" — özel pelerin dokusu
    ///   KANATLAR  : "ke" — elitra kanat dokusu
    ///   DERİLER   : "ks" — kendi skinin (64×64), "ksm" = slim(1)/classic(0)
    /// Herkes kullanabilir (ücretsiz); izin listesine bağlı DEĞİL.
    private static final Map<String, String> PELERINLER = new ConcurrentHashMap<>();
    private static final Map<String, String> KANATLAR = new ConcurrentHashMap<>();
    /// v7 DERİLER (skin paylaşımı): YIKIMLient kullanan herkes birinin skinini
    /// görür — pelerin/elıtra ile TAMAMEN aynı protokol, ayrı alanlar.
    /// Mojang hesabı olmayan (cracked) oyuncunun skini bu yolla görünür.
    private static final Map<String, String> DERILER = new ConcurrentHashMap<>();
    /// Derinin gövde varyantı: true = slim (Alex modeli).
    private static final Map<String, Boolean> DERI_SLIM = new ConcurrentHashMap<>();
    private static final Map<String, String> DERI_SURUM = new ConcurrentHashMap<>();
    /// Deri dokusu üst sınırı (base64): 64×64 normal deri ~10 KB; HD deri
    /// 1024×512'e kadar (~700 KB) parçalı yüklenir.
    private static final int MAX_DERI_B64 = 700_000;
    /// Artık kozmetik TAM 64×32 atlas olarak gönderilir (2048 piksel); detaylı
  /// bir doku PNG'si küçük olsa da güvenli sınır yüksek tutulur.
  // v5: HD doku (1024x512'e kadar PNG) base64 olarak ~700 KB olabilir.
  private static final int MAX_KOZMETIK_B64 = 700_000;
  /// Bir aktarımda en fazla kaç parça (kötüye kullanım koruması).
  private static final int PARCA_SAYISI_MAX = 64;
  /// v6: tek parçanın base64 üst sınırı (gövde sınırı 196.608; istemci 90.000 yollar).
  private static final int PARCA_BOY_MAX = 160_000;
  /// v6: yarım kalan parça aktarımları bu süreden sonra bellekten atılır.
  private static final long PARCA_TTL_MS = 120_000L;

    /// v5: sürmekte olan parçalı yüklemeler.
    /// anahtar: "uuid|kc|kid" → parça dizisi (eksik parça null).
    private static final Map<String, String[]> PARCALAR = new ConcurrentHashMap<>();
    /// v6: parça aktarımının son dokunulma zamanı (bellek sızıntısını önler).
    private static final Map<String, Long> PARCA_ZAMAN = new ConcurrentHashMap<>();
    /// v6: parça dizisi işlemleri TEK kilit altında (paralel istek yarışı).
    private static final Object PARCA_KILIT = new Object();
    /// v5: dokunun sürümü ("<hash>:<uzunluk>") — istemci önbelleği bununla eşleşir.
    private static final Map<String, String> PELERIN_SURUM = new ConcurrentHashMap<>();
    private static final Map<String, String> KANAT_SURUM = new ConcurrentHashMap<>();

    /// Doku sürümü: istemci de aynı formülü hesaplar (Java String.hashCode).
    private static String dokuSurumu(String b64) {
        return Integer.toHexString(b64.hashCode()) + ":" + b64.length();
    }

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
        // v5: parça yükleme paralel gelir — 2 iş parçacığı tıkanıyordu.
        sunucu.setExecutor(Executors.newFixedThreadPool(8));
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

    /// Kozmetikleri diske yaz: {"<uuid>":{"kc":"<b64>","ke":"<b64>","ks":"<b64>","ksm":1}, ...}
    private static void kozmetikleriKaydet() {
        // HD dokularla dosya çok şişebilir; 8 MB üstünde diske yazma atlanır
        // (ücretsiz katmanda zaten kalıcı disk yok, bellek yeterli).
        int boyut = 0;
        for (String v : PELERINLER.values()) boyut += v.length();
        for (String v : KANATLAR.values()) boyut += v.length();
        for (String v : DERILER.values()) boyut += v.length();
        if (boyut > 8_000_000) {
            return;
        }
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        Set<String> hepsi = new HashSet<>(PELERINLER.keySet());
        hepsi.addAll(KANATLAR.keySet());
        hepsi.addAll(DERILER.keySet());
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
                alan = true;
            }
            String d = DERILER.get(uuid);
            if (d != null) {
                if (alan) json.append(',');
                json.append("\"ks\":\"").append(d).append('"');
                Boolean slim = DERI_SLIM.get(uuid);
                json.append(",\"ksm\":").append(slim == null ? 0 : slim ? 1 : 0);
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
                String d = alan(json, son, "ks");
                Integer slim = sayi(json.substring(son), "ksm");
                if (p != null && p.length() <= MAX_KOZMETIK_B64) {
                    PELERINLER.put(uuid, p);
                    PELERIN_SURUM.put(uuid, dokuSurumu(p));
                }
                if (k != null && k.length() <= MAX_KOZMETIK_B64) {
                    KANATLAR.put(uuid, k);
                    KANAT_SURUM.put(uuid, dokuSurumu(k));
                }
                if (d != null && d.length() <= MAX_DERI_B64) {
                    DERILER.put(uuid, d);
                    DERI_SURUM.put(uuid, dokuSurumu(d));
                    DERI_SLIM.put(uuid, slim != null && slim == 1);
                }
                int kapanis = json.indexOf('}', son);
                i = kapanis < 0 ? son + 1 : kapanis + 1;
            }
            if (!PELERINLER.isEmpty() || !KANATLAR.isEmpty() || !DERILER.isEmpty()) {
                System.out.println("[YIKIM presence] kozmetik diskten yuklendi: "
                    + PELERINLER.size() + " pelerin, " + KANATLAR.size() + " kanat, "
                    + DERILER.size() + " deri");
            }
        } catch (Throwable yoksay) { /* yok say */ }
    }

    /// v6: bir oyuncunun sunucuda kayıtlı doku sürümü ("" = kayıt yok).
    private static String surumYaz(Map<String, String> surumler, String uuid) {
        String s = surumler.get(uuid);
        return s == null ? "" : s;
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
    ///
    /// v5 — BANT GENİŞLİĞİ: istemci "ob" alanında elindeki doku sürümlerini
    /// bildirir (`uuid:sürüm;uuid:sürüm`). Sürüm aynıysa doku GÖNDERİLMEZ
    /// (istemcideki kopya geçerli). İstemcinin bildiği ama artık olmayan
    /// dokular boş dizgeyle gönderilir → istemci siler.
    private static String kozmetikYaz(Map<String, String> kaynak, Map<String, String> surumler,
                                      Map<String, String> bilinen, String istekSahibi,
                                      Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        Set<String> yazilan = new HashSet<>();
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) continue;
            String doku = kaynak.get(akran);
            if (doku == null) continue;
            String surum = surumler.get(akran);
            if (surum != null && surum.equals(bilinen.get(akran))) continue; // istemcide var
            if (!ilk) json.append(',');
            ilk = false;
            yazilan.add(akran);
            json.append('"').append(akran).append("\":\"").append(doku).append('"');
        }
        for (String bilinenUuid : bilinen.keySet()) {
            if (bilinenUuid.equals(istekSahibi) || yazilan.contains(bilinenUuid)) continue;
            if (kaynak.containsKey(bilinenUuid)) continue; // sürüm değişmedi
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(bilinenUuid).append("\":\"\"");
        }
        return json.append('}').toString();
    }

    /// v7: aynı sunucudaki oyuncuların gövde varyantı: {"<uuid>":1|0}.
    /// Yalnız deri paylaşmış oyuncular yazılır; istemci bilinmeyen varyantı
    /// klasik (wide) kabul eder.
    private static String deriSlimYaz(String istekSahibi, Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) continue;
            Boolean slim = DERI_SLIM.get(akran);
            if (slim == null) continue;
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(akran).append("\":").append(slim ? 1 : 0);
        }
        return json.append('}').toString();
    }

    /// İstemcinin elindeki doku sürümleri ("ob":"uuid:sürüm;uuid:sürüm").
    private static Map<String, String> bildiklerim(String govde) {
        Map<String, String> sonuc = new java.util.HashMap<>();
        String ham = hamAlan(govde, "ob");
        if (ham == null || ham.isEmpty()) return sonuc;
        for (String parca : ham.split(";")) {
            int i = parca.indexOf(':');
            if (i <= 0) continue;
            String id = parca.substring(0, i).trim();
            if (!uuidGuvenli(id)) continue;
            sonuc.put(id, parca.substring(i + 1).trim());
        }
        return sonuc;
    }

    /// v5/v6: parça alımı. Son parça gelince doku birleştirilip yayına girer
    /// (yarım doku asla görünmez).
    ///
    /// v6 KÖK NEDEN DÜZELTMESİ: eskiden `ki == 0` her geldiğinde diziyi
    /// SIFIRLIYORDU. İstemci parçaları PARALEL gönderdiği için 0. parça
    /// diğerlerinden SONRA işlendiğinde onları siliyor, doku hiç
    /// tamamlanmıyordu → "HD pelerin arkadaşımda hiç görünmüyor".
    /// Artık aynı kid + aynı parça sayısı için dizi KORUNUR; yeni dizi yalnız
    /// gerçekten yeni bir aktarımda (kayıt yok / parça sayısı değişti) kurulur.
    private static void parcaAl(HttpExchange degis, String uuid, String govde, String hedef)
            throws IOException {
        if (!"kc".equals(hedef) && !"ke".equals(hedef) && !"ks".equals(hedef)) {
            cevap(degis, 400, "{\"p\":[]}");
            return;
        }
        String kid = alan(govde, "kid");
        String kv = hamAlan(govde, "kv");
        Integer ki = sayi(govde, "ki");
        Integer kn = sayi(govde, "kn");
        if (kid == null || kid.length() > 96 || kv == null || ki == null || kn == null
            || kv.length() > PARCA_BOY_MAX
            || kn < 1 || kn > PARCA_SAYISI_MAX || ki < 0 || ki >= kn) {
            cevap(degis, 400, "{\"p\":[]}");
            return;
        }
        String anahtar = uuid + "|" + hedef + "|" + kid;
        synchronized (PARCA_KILIT) {
            parcaZamanlariniTemizle();
            String[] parcalar = PARCALAR.get(anahtar);
            if (parcalar == null || parcalar.length != kn) {
                parcalar = new String[kn];
                PARCALAR.put(anahtar, parcalar);
            }
            PARCA_ZAMAN.put(anahtar, System.currentTimeMillis());
            parcalar[ki] = kv;
            int dolu = 0;
            long toplamBoy = 0L;
            for (String p : parcalar) {
                if (p != null) {
                    dolu++;
                    toplamBoy += p.length();
                }
            }
            if (dolu < kn) {
                cevap(degis, 200, "{\"p\":[],\"parca\":" + dolu + ",\"toplam\":" + kn + "}");
                return;
            }
            PARCALAR.remove(anahtar);
            PARCA_ZAMAN.remove(anahtar);
            if (toplamBoy > MAX_KOZMETIK_B64) {
                cevap(degis, 413, "{\"p\":[],\"hata\":\"doku-cok-buyuk\"}");
                return;
            }
            StringBuilder tam = new StringBuilder((int) toplamBoy);
            for (String p : parcalar) {
                tam.append(p);
            }
            String b64 = tam.toString();
            if (b64.isEmpty()) {
                if ("kc".equals(hedef)) {
                    PELERINLER.remove(uuid);
                    PELERIN_SURUM.remove(uuid);
                }
                else if ("ks".equals(hedef)) {
                    DERILER.remove(uuid);
                    DERI_SLIM.remove(uuid);
                    DERI_SURUM.remove(uuid);
                }
                else {
                    KANATLAR.remove(uuid);
                    KANAT_SURUM.remove(uuid);
                }
            }
            else if ("kc".equals(hedef)) {
                PELERINLER.put(uuid, b64);
                PELERIN_SURUM.put(uuid, dokuSurumu(b64));
            }
            else if ("ks".equals(hedef)) {
                Integer slimGeldi = sayi(govde, "ksm");
                DERILER.put(uuid, b64);
                DERI_SURUM.put(uuid, dokuSurumu(b64));
                DERI_SLIM.put(uuid, slimGeldi != null && slimGeldi == 1);
            }
            else {
                KANATLAR.put(uuid, b64);
                KANAT_SURUM.put(uuid, dokuSurumu(b64));
            }
            kozmetikleriKaydet();
            String surum = b64.isEmpty() ? "" : dokuSurumu(b64);
            cevap(degis, 200, "{\"p\":[],\"tamam\":1,\"surum\":\"" + surum + "\"}");
        }
    }

    /// v6: yarım kalan (istemci vazgeçmiş) parça dizilerini bellekten at.
    private static void parcaZamanlariniTemizle() {
        long simdi = System.currentTimeMillis();
        for (Map.Entry<String, Long> e : PARCA_ZAMAN.entrySet()) {
            if (simdi - e.getValue() > PARCA_TTL_MS) {
                PARCALAR.remove(e.getKey());
                PARCA_ZAMAN.remove(e.getKey());
            }
        }
    }

    /// "ad":12 biçimindeki tam sayı alanı.
    private static Integer sayi(String govde, String ad) {
        String igne = "\"" + ad + "\"";
        int i = govde.indexOf(igne);
        if (i < 0) return null;
        int ikiNokta = govde.indexOf(':', i + igne.length());
        if (ikiNokta < 0) return null;
        int j = ikiNokta + 1;
        while (j < govde.length() && (govde.charAt(j) == ' ' || govde.charAt(j) == '"')) j++;
        int bas = j;
        while (j < govde.length() && Character.isDigit(govde.charAt(j))) j++;
        if (j == bas) return null;
        try {
            return Integer.valueOf(govde.substring(bas, j));
        }
        catch (NumberFormatException yok) {
            return null;
        }
    }

    /// Aynı sunucudaki oyuncuların çizimleri {"uuid":"<b64>"} — başka sunucular SIZMAZ.
    private static String rozetlerYaz(String istekSahibi, Map<String, Oyuncu> ayniSunucu) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (String akran : ayniSunucu.keySet()) {
            if (akran.equals(istekSahibi)) {
                continue;
            }
            String art = cizimBul(ROZETLER, akran);
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
            String ham = cizimBul(PIXEL, akran);
            if (ham == null) continue;
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(akran).append("\":\"").append(ham).append('"');
        }
        return json.append('}').toString();
    }

    /**
     * Oyuncunun çizimi: önce UUID ile, yoksa HESAP ADI ile.
     *
     * Neden: launcher çizimi Microsoft UUID'siyle yükler; offline/proxy
     * sunucularda oyuncunun oyun içi UUID'si farklı olur → "benim çizimim
     * bende var, arkadaşımda standart Y" durumu. İsim eşleşince çizim
     * ARKADAŞIN gördüğü UUID anahtarıyla gönderilir; istemcide ek iş kalmaz.
     */
    private static String cizimBul(Map<String, String> kaynak, String akran) {
        String dogrudan = kaynak.get(akran);
        if (dogrudan != null) {
            return dogrudan;
        }
        String ad = ISIMLER.get(akran);
        if (ad == null || ad.isEmpty()) {
            return null;
        }
        for (Map.Entry<String, String> e : kaynak.entrySet()) {
            String kayitAd = ISIMLER.get(e.getKey());
            if (kayitAd != null && kayitAd.equalsIgnoreCase(ad)) {
                return e.getValue();
            }
        }
        return null;
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

            // --- v5: HD doku parçası (gövde sınırına takılmasın diye) ---
            String parcaHedef = alan(govde, "kp");
            if (parcaHedef != null) {
                parcaAl(degis, uuid, govde, parcaHedef);
                return;
            }

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
            // v7 DERİ (skin paylaşımı) — aynı kural: boş = kaldır.
            String deri = hamAlan(govde, "ks");
            Integer deriSlimGeldi = sayi(govde, "ksm");
            boolean kozmetikDegisti = false;
            if (pelerin != null && pelerin.length() <= MAX_KOZMETIK_B64) {
                if (pelerin.isEmpty()) {
                    PELERINLER.remove(uuid);
                    PELERIN_SURUM.remove(uuid);
                }
                else {
                    PELERINLER.put(uuid, pelerin);
                    PELERIN_SURUM.put(uuid, dokuSurumu(pelerin));
                }
                kozmetikDegisti = true;
            }
            if (kanat != null && kanat.length() <= MAX_KOZMETIK_B64) {
                if (kanat.isEmpty()) {
                    KANATLAR.remove(uuid);
                    KANAT_SURUM.remove(uuid);
                }
                else {
                    KANATLAR.put(uuid, kanat);
                    KANAT_SURUM.put(uuid, dokuSurumu(kanat));
                }
                kozmetikDegisti = true;
            }
            if (deri != null && deri.length() <= MAX_DERI_B64) {
                if (deri.isEmpty()) {
                    DERILER.remove(uuid);
                    DERI_SLIM.remove(uuid);
                    DERI_SURUM.remove(uuid);
                }
                else {
                    DERILER.put(uuid, deri);
                    DERI_SURUM.put(uuid, dokuSurumu(deri));
                    DERI_SLIM.put(uuid, deriSlimGeldi != null && deriSlimGeldi == 1);
                }
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
            if (pelerin != null || kanat != null || deri != null) {
                if (sunucu == null) {
                    cevap(degis, 200, "{\"p\":[],\"b\":{},\"kc\":{},\"ke\":{},\"ks\":{},\"ksm\":{}}");
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
            Map<String, String> bilinen = bildiklerim(govde);
            json.append("],\"b\":").append(rozetlerYaz(uuid, liste))
                .append(",\"x\":").append(pixelYaz(uuid, liste))
                .append(",\"kc\":").append(kozmetikYaz(PELERINLER, PELERIN_SURUM, bilinen, uuid, liste))
                .append(",\"ke\":").append(kozmetikYaz(KANATLAR, KANAT_SURUM, bilinen, uuid, liste))
                .append(",\"ks\":").append(kozmetikYaz(DERILER, DERI_SURUM, bilinen, uuid, liste))
                // v7: aynı sunucudaki oyuncuların gövde varyantı (slim/wide).
                // Deri dokusu yoksa da yazılır: oyuncu klasik/wide olabilir.
                .append(",\"ksm\":").append(deriSlimYaz(uuid, liste))
                .append(",\"pn\":").append(isimlerYaz(uuid, liste))
                // v6: İSTEK SAHİBİNİN sunucuda kayıtlı doku sürümleri. İstemci
                // bunu kendi dosyasıyla karşılaştırır; sunucu yeniden başlayıp
                // dokuyu unuttuysa kendiliğinden yeniden yükler.
                .append(",\"sv\":{\"kc\":\"").append(surumYaz(PELERIN_SURUM, uuid))
                .append("\",\"ke\":\"").append(surumYaz(KANAT_SURUM, uuid))
                .append("\",\"ks\":\"").append(surumYaz(DERI_SURUM, uuid)).append("\"}")
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
