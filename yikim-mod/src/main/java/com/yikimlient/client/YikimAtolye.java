package com.yikimlient.client;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Base64;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import net.minecraft.class_310;

/**
 * PİKSEL ATÖLYESİ (v1.11.0) — kullanıcının kendi rozet çizimi.
 *
 * 8x8 ARGB ızgara; Sağ Shift menüsünden fırça + renk paleti + kaydet +
 * sıfırla. Kaydedince:
 *   1) `.yikim/rozet.png` (8x8) KALICI yazılır (restart sonrası durur)
 *   2) dinamik doku (`yikimlient:rozet/ozel`) anında güncellenir
 *   3) presence sunucusuna yüklenir → aynı sunucudaki herkes görür
 *
 * Başkalarının rozetleri: presence yanıtındaki "b" alanı (uuid → base64 PNG)
 * → her oyuncu için ayrı dinamik doku (`yikimlient:rozet/<uuid>`).
 * Çizim nametag'te YIĞIN metninin SOLUNA metin-altı doku olarak basılır
 * (bkz. YikimRozetCizim + PlayerBadgeMixin).
 */
public final class YikimAtolye {
    public static final int BOY = 8;
    private static final String VARSAYILAN_UCAK = "http://yikimdara.com.tr:8787/presence";
    private static final int MAX_ART_BAYT = 2048;

    /// kendi çizimin — [y * BOY + x], ARGB; alfa 0 = boş
    private static final int[] IZGARA = new int[BOY * BOY];
    private static boolean yuklendi;

    /// başkalarının rozetleri: uuid → base64 png
    private static final Map<UUID, String> UZAK = new ConcurrentHashMap<UUID, String>();

    private YikimAtolye() {
    }

    // ---------------------------------------------------------------- yerel

    /// Oyun açılışında bir kez: diskten yükle (yoksa boş).
    public static synchronized void yukle() {
        if (yuklendi) {
            return;
        }
        yuklendi = true;
        try {
            Path dosya = YikimBridge.stateDir().resolve("rozet.png");
            if (Files.exists(dosya)) {
                izarayiOku(dosya);
            }
        }
        catch (Throwable ignored) {
            // çizim yoksa standart Y glifi kalır
        }
    }

    private static void izarayiOku(Path dosya) throws Exception {
        javax.imageio.ImageIO.setUseCache(false);
        java.awt.image.BufferedImage resim = javax.imageio.ImageIO.read(dosya.toFile());
        if (resim == null) {
            return;
        }
        for (int y = 0; y < BOY; y++) {
            for (int x = 0; x < BOY; x++) {
                int px = x < resim.getWidth() && y < resim.getHeight() ? resim.getRGB(x, y) : 0;
                IZGARA[y * BOY + x] = px;
            }
        }
    }

    public static synchronized int hucre(int x, int y) {
        if (x < 0 || y < 0 || x >= BOY || y >= BOY) {
            return 0;
        }
        return IZGARA[y * BOY + x];
    }

    public static synchronized void boya(int x, int y, int argb) {
        if (x < 0 || y < 0 || x >= BOY || y >= BOY) {
            return;
        }
        IZGARA[y * BOY + x] = argb;
    }

    /// Kaydet: disk + sunucu. "Bir kez kaydet, hep kalsın."
    public static synchronized void kaydet() {
        try {
            Path dosya = YikimBridge.stateDir().resolve("rozet.png");
            java.awt.image.BufferedImage resim = new java.awt.image.BufferedImage(
                BOY, BOY, java.awt.image.BufferedImage.TYPE_INT_ARGB);
            for (int y = 0; y < BOY; y++) {
                for (int x = 0; x < BOY; x++) {
                    resim.setRGB(x, y, IZGARA[y * BOY + x]);
                }
            }
            javax.imageio.ImageIO.setUseCache(false);
            javax.imageio.ImageIO.write(resim, "png", dosya.toFile());
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM atolye: rozet.png yazilamadi: {}", problem.toString());
        }
        arkaPlandaYukle(base64Png(), kendim());
        YikimClient.LOGGER.info("YIKIM atolye: ozel rozet kaydedildi ve sunucuya yukleniyor");
    }

    /// Sıfırla: diski sil, ızgarayı boşalt, sunucudan da kaldır.
    public static synchronized void sifirla() {
        try {
            Files.deleteIfExists(YikimBridge.stateDir().resolve("rozet.png"));
        }
        catch (Throwable ignored) {
            // yok sayılır
        }
        for (int i = 0; i < IZGARA.length; i++) {
            IZGARA[i] = 0;
        }
        UUID ben = kendim();
        if (ben != null) {
            UZAK.remove(ben);
        }
        arkaPlandaYukle(null, ben);
    }

    public static UUID kendim() {
        try {
            class_310 mc = class_310.method_1551();
            if (mc != null && mc.field_1724 != null) {
                return mc.field_1724.method_5667();
            }
        }
        catch (Throwable ignored) {
            // menüdeyiz — uuid yok
        }
        return null;
    }

    // ---------------------------------------------------------------- sunucu

    /// Arka plan: sunucuya kendi çizimini yükle (png=null → sunucudan sil).
    public static void arkaPlandaYukle(String base64Png, UUID uuid) {
        if (uuid == null) {
            return;
        }
        Thread t = new Thread(() -> {
            try {
                String govde = base64Png == null
                    ? "{\"u\":\"" + uuid + "\",\"sil\":true}"
                    : "{\"u\":\"" + uuid + "\",\"png\":\"" + base64Png + "\"}";
                byte[] bayt = govde.getBytes(StandardCharsets.UTF_8);
                HttpURLConnection bag = (HttpURLConnection) new URL(ucak()).openConnection();
                bag.setConnectTimeout(5000);
                bag.setReadTimeout(5000);
                bag.setRequestMethod("POST");
                bag.setDoOutput(true);
                bag.setRequestProperty("Content-Type", "application/json; charset=utf-8");
                bag.setFixedLengthStreamingMode(bayt.length);
                try (OutputStream cikis = bag.getOutputStream()) {
                    cikis.write(bayt);
                }
                bag.getResponseCode();
                bag.disconnect();
            }
            catch (Throwable ignored) {
                // sunucu yoksa yerel çizim yine de geçerli
            }
        }, "YIKIM-atolye");
        t.setDaemon(true);
        t.start();
    }

    /// Presence yanıtından başkalarının rozetlerini al ({"b":{uuid:"<b64>"}}).
    public static void uzaklariIsle(String json) {
        try {
            if (json == null) {
                return;
            }
            int b = json.indexOf("\"b\"");
            if (b < 0) {
                return;
            }
            int i = json.indexOf('{', b);
            while (i >= 0 && i < json.length() - 2) {
                int t1 = json.indexOf('"', i + 1);
                if (t1 < 0) return;
                int t2 = json.indexOf('"', t1 + 1);
                if (t2 < 0) return;
                String anahtar = json.substring(t1 + 1, t2);
                if (anahtar.length() != 36) {
                    i = json.indexOf('{', t2 + 1);
                    continue;
                }
                int d1 = json.indexOf('"', t2 + 1);
                int d2 = d1 < 0 ? -1 : json.indexOf('"', d1 + 1);
                if (d2 < 0) return;
                String png = json.substring(d1 + 1, d2);
                if (png.length() <= MAX_ART_BAYT) {
                    try {
                        UZAK.put(UUID.fromString(anahtar), png);
                    }
                    catch (IllegalArgumentException bozuk) {
                        // atla
                    }
                }
                i = json.indexOf('{', d2 + 1);
            }
        }
        catch (Throwable ignored) {
            // asla patlamayalım
        }
    }

    /// Bir oyuncunun uzak rozeti (base64 png) — yoksa null.
    public static String uzak(UUID kim) {
        return kim == null ? null : UZAK.get(kim);
    }

    private static String ucak() {
        try {
            Path dosya = YikimBridge.stateDir().resolve("presence-url.txt");
            if (Files.exists(dosya)) {
                String url = Files.readString(dosya, StandardCharsets.UTF_8).trim();
                if (url.startsWith("http://") || url.startsWith("https://")) {
                    return url;
                }
            }
        }
        catch (Throwable ignored) {
            // varsayılana düş
        }
        return VARSAYILAN_UCAK;
    }

    /// Kendi çizimini base64 PNG'ye çevir (sunucuya yükleme için).
    public static synchronized String base64Png() {
        try {
            java.awt.image.BufferedImage resim = new java.awt.image.BufferedImage(
                BOY, BOY, java.awt.image.BufferedImage.TYPE_INT_ARGB);
            for (int y = 0; y < BOY; y++) {
                for (int x = 0; x < BOY; x++) {
                    resim.setRGB(x, y, IZGARA[y * BOY + x]);
                }
            }
            java.io.ByteArrayOutputStream tampon = new java.io.ByteArrayOutputStream();
            javax.imageio.ImageIO.setUseCache(false);
            javax.imageio.ImageIO.write(resim, "png", tampon);
            return Base64.getEncoder().encodeToString(tampon.toByteArray());
        }
        catch (Throwable problem) {
            return null;
        }
    }
}
