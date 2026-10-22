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

    private static final class Oyuncu {
        final String isim;
        volatile long zaman;
        Oyuncu(String isim, long zaman) { this.isim = isim; this.zaman = zaman; }
    }

    public static void main(String[] args) throws IOException {
        int port = 8787;
        if (args.length > 0) {
            try { port = Integer.parseInt(args[0].trim()); } catch (NumberFormatException yok) { /* varsayılan */ }
        }
        HttpServer sunucu = HttpServer.create(new InetSocketAddress("0.0.0.0", port), 0);
        sunucu.createContext("/presence", PresenceServer::isle);
        sunucu.setExecutor(Executors.newFixedThreadPool(2));
        sunucu.start();
        System.out.println("[YIKIM presence] calisiyor: http://0.0.0.0:" + port + "/presence");
        System.out.println("[YIKIM presence] launcher config'ine su adresi yaz: http://VDS_IP:" + port + "/presence");
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
            if (sunucu == null || uuid == null || !uuidGuvenli(uuid)) {
                cevap(degis, 400, "{\"p\":[]}");
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
            json.append("]}");
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
