import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;

/**
 * YIKIMLient PRESENCE SUNUCUSU (VDS sürümü — tek dosya, bağımlılık YOK)
 * =====================================================================
 * PHP'siz çözüm: JDK'nın içindeki gömülü HTTP sunucusunu kullanır,
 * HARİCİ KÜTÜPHANE YOK. Minecraft sunucun Java çalıştırdığı için
 * VDS'inde zaten kurulu.
 *
 * ÇALIŞTIRMA:
 *   java PresenceServer.java            (port 8787)
 *   java PresenceServer.java 9000       (özel port)
 *
 * TEST:
 *   tarayıcı:  http://VDS_IP:8787/presence   → {"ok":true,...}
 *
 * PROTOCOL:
 *   POST /presence  {"v":1,"s":"<sunucu adresi>","u":"<uuid>","n":"<isim>"}
 *   yanıt           {"p":["<uuid>", ...]}   (istek sahibi hariç, son 90 sn)
 *
 * Bellekte tutar (90 sn TTL, kendiliğinden temizlenir) — disk/veritabanı yok.
 * VDS yeniden başlarsa kayıp 90 saniyelik bilgi, oyun 30 sn'de kendini tazeler.
 */
public class PresenceServer {

    private static final long TTL_MS = 90_000L;
    private static final int MAX_BODY = 4096;
    private static final int MAX_PLAYERS = 200;

    /// sunucu adresi → (uuid → oyuncu bilgisi)
    private static final Map<String, Map<String, Oyuncu>> KAYIT = new ConcurrentHashMap<>();

    /// özel rozetler: uuid → base64 png (8x8); TTL yok — çizim kalıcıdır
    private static final Map<String, String> ROZETLER = new ConcurrentHashMap<>();

    /// uuid → hesap adı (çizimler izinle eşleşsin diye; izin geri alınan
    /// oyuncunun çizimi ilk kalp atışında sunucudan da silinir)
    private static final Map<String, String> ISIMLER = new ConcurrentHashMap<>();

    /// çizim izinli oyuncu isimleri (admin panelden yönetilir); izinler.json'a yazılır
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
            // bulut (HF Spaces/Render/Docker) PORT ortam değişkenini dayatır
            String ortam = System.getenv("PORT");
            if (ortam != null) {
                try { port = Integer.parseInt(ortam.trim()); } catch (NumberFormatException yok) { /* varsayılan */ }
            }
        }
        izinleriYukle();
        HttpServer sunucu = HttpServer.create(new InetSocketAddress("0.0.0.0", port), 0);
        sunucu.createContext("/presence", PresenceServer::isle);
        sunucu.setExecutor(Executors.newFixedThreadPool(2));
        sunucu.start();
        System.out.println("[YIKIM presence] calisiyor: http://0.0.0.0:" + port + "/presence");
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
        IZINLER.clear();
        for (String ad : adlar) {
            String temiz = ad.trim();
            if (temiz.length() > 1 && temiz.length() <= 32) {
                IZINLER.put(temiz, Boolean.TRUE);
            }
        }
        izinleriKaydet();
        // İZİN GERİ ALMA TEMİZLİĞİ: yeni listede olmayan isimlerin çizimleri
        // silinir → izni düşen oyuncu HERKESİN ekranında normal Y'ye döner.
        int temizlenen = 0;
        for (String rozetUuid : ROZETLER.keySet()) {
            String ad = ISIMLER.get(rozetUuid);
            if (ad == null) {
                ad = rozetUuid; // uuid doğrudan isim olarak yazılmış olabilir
            }
            if (!IZINLER.containsKey(ad.toLowerCase()) && ROZETLER.remove(rozetUuid) != null) {
                temizlenen++;
            }
        }
        if (temizlenen > 0) {
            System.out.println("[YIKIM presence] izin geri alindi: " + temizlenen + " cizim silindi");
        }
        System.out.println("[YIKIM presence] izin listesi guncellendi: " + IZINLER.keySet());
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
            java.nio.file.Files.write(java.nio.file.Path.of("izinler.json"),
                izinlerYaz().getBytes(StandardCharsets.UTF_8));
        } catch (Throwable yoksay) { /* salt-okunur dosya sisteminde sessiz kal */ }
    }

    private static void izinleriYukle() {
        try {
            java.nio.file.Path yol = java.nio.file.Path.of("izinler.json");
            if (java.nio.file.Files.exists(yol)) {
                String json = new String(java.nio.file.Files.readAllBytes(yol), StandardCharsets.UTF_8);
                List<String> adlar = dizi(json, "izinler");
                if (adlar != null) {
                    for (String ad : adlar) {
                        if (ad.trim().length() > 1) {
                            IZINLER.put(ad.trim(), Boolean.TRUE);
                        }
                    }
                }
            }
        } catch (Throwable yoksay) { /* yok say */ }
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

    private static void isle(HttpExchange degis) throws IOException {
        try {
            String metot = degis.getRequestMethod();
            if ("GET".equalsIgnoreCase(metot)) {
                cevap(degis, 200, "{\"ok\":true,\"service\":\"yikim-presence\",\"p\":[]}");
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

            // --- rozet işlemi: png/sil alanı varsa güncelle (sunucu bilgisi şart değil) ---
            if (png != null) {
                if (png.length() <= 4096) {
                    ROZETLER.put(uuid, png);
                }
            } else if (govde.contains("\"sil\"")) {
                ROZETLER.remove(uuid);
            }
            if (isim != null && !isim.isEmpty()) {
                ISIMLER.put(uuid, isim.length() > 32 ? isim.substring(0, 32) : isim);
            }

            // --- izin listesi değişimi (admin paneli) ---
            izinleriIsle(govde);

            // --- sadece rozet isteği (presence yoksa) burada biter ---
            if (sunucu == null) {
                cevap(degis, 200, "{\"p\":[],\"b\":" + rozetlerYaz(uuid)
                    + ",\"izinler\":" + izinlerYaz() + "}");
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
                liste.put(uuid, new Oyuncu(isim, simdi));
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
            json.append("],\"b\":").append(rozetlerYaz(uuid))
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

    /// Basit JSON alan çıkarımı: "alan":"değer" (kütüphanesiz, toleranslı).
    private static String alan(String govde, String ad) {
        String iğne = "\"" + ad + "\"";
        int i = govde.indexOf(iğne);
        if (i < 0) return null;
        int ikiNokta = govde.indexOf(':', i + iğne.length());
        if (ikiNokta < 0) return null;
        int t1 = govde.indexOf('"', ikiNokta + 1);
        if (t1 < 0) return null;
        int t2 = govde.indexOf('"', t1 + 1);
        if (t2 < 0) return null;
        String deger = govde.substring(t1 + 1, t2).trim();
        return deger.isEmpty() ? null : deger;
    }

    /// İstek sahibi hariç, aynı sunucudaki oyuncuların özel rozetleri ({"uuid":"png"}).
    private static String rozetlerYaz(String istekSahibi) {
        StringBuilder json = new StringBuilder("{");
        boolean ilk = true;
        for (Map.Entry<String, String> e : ROZETLER.entrySet()) {
            if (e.getKey().equals(istekSahibi)) continue;
            if (!ilk) json.append(',');
            ilk = false;
            json.append('"').append(e.getKey()).append("\":\"").append(e.getValue()).append('"');
        }
        return json.append('}').toString();
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
