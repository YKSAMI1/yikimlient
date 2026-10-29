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
    /// toplam piksel (BOY*BOY)
    public static final int UZUNLUK = BOY * BOY;
    /// toplam piksel (BOY*BOY)
    private static final String VARSAYILAN_UCAK = "https://yikim-presence.onrender.com/presence";
    private static final int MAX_ART_BAYT = 2048;

    /// kendi çizimin — [y * BOY + x], ARGB; alfa 0 = boş
    private static final int[] IZGARA = new int[BOY * BOY];
    private static boolean yuklendi;

    /// v1.13.0: çizim sistemi LAUNCHER'a taşındı.
    ///
    /// Tek doğruluk kaynağı artık launcher: rozet 8×8 PNG olarak her kurulumun
    /// `.yikim/rozet.png` dosyasına yazılır (portal `cmd_rozet_ciz`). Mod yalnız
    /// OKUR; hiçbir isim kendiliğinden izinli olamaz. Uzak çizimler presence
    /// sunucusu üzerinden gelir ("b" alanı) ve yalnız izinli oyuncularda çizilir.
    private static final boolean CIZIM_KAPALI = false;

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
        if (CIZIM_KAPALI) {
            // eski çizim temizliği: artık herkeste aynı (standart Y) simge
            try {
                Files.deleteIfExists(YikimBridge.stateDir().resolve("rozet.png"));
            }
            catch (Throwable ignored) {
                // silinemezse bile uygulanmayacak (yukluysaUygula no-op)
            }
            return;
        }
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

    /// Çizim kayıtlıysa (rozet.png) kendi slotuna uygula — başlangıç + heartbeat.
    public static void yukluysaUygula() {
        if (CIZIM_KAPALI) {
            return; // v1.12.7: çizim kapalı — herkeste standart Y
        }
        if (dosyaVarMi()) {
            try {
                izarayiOku(YikimBridge.stateDir().resolve("rozet.png"));
                YikimSlotlar.ata(kendim(), izgaraKopya());
            }
            catch (Throwable ignored) {
                // çizim yoksa standart Y kalır
            }
        }
    }

    private static void izarayiOku(Path dosya) throws Exception {
        javax.imageio.ImageIO.setUseCache(false);
        java.awt.image.BufferedImage resim = javax.imageio.ImageIO.read(dosya.toFile());
        if (resim == null) {
            return;
        }
        // boyut farklıysa (ör. eski 16×16 denemesi) OKUMA — bozuk yarım görüntü olmasın
        if (resim.getWidth() != BOY || resim.getHeight() != BOY) {
            return;
        }
        for (int y = 0; y < BOY; y++) {
            for (int x = 0; x < BOY; x++) {
                IZGARA[y * BOY + x] = resim.getRGB(x, y);
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

    /// Izgaranın kopyası (doku güncellemesi için).
    public static synchronized int[] izgaraKopya() {
        return IZGARA.clone();
    }

    /// Kayıtlı çizim var mı (`.yikim/rozet.png`)?
    public static boolean dosyaVarMi() {
        try {
            return Files.exists(YikimBridge.stateDir().resolve("rozet.png"));
        }
        catch (Throwable ignored) {
            return false;
        }
    }

    /// Kaydet: disk + sunucu. "Bir kez kaydet, hep kalsın."
    public static synchronized void kaydet() {
        if (CIZIM_KAPALI) {
            return; // v1.12.7: çizim kapalı — hiçbir şey kaydetme veya yükleme
        }
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
        YikimSlotlar.ata(kendim(), izgaraKopya());
        arkaPlandaYukle(base64Png(), kendim());
        YikimClient.LOGGER.info("YIKIM atolye: ozel rozet kaydedildi ve sunucuya yukleniyor");
    }

    /**
     * Sunucuda çizimim yoksa yeniden yükle (v1.13.0).
     *
     * Eskiden yükleme yalnız "Kaydet"e basıldığında yapılıyordu; sunucu
     * yeniden başladığında / ilk yükleme ağ hatasına düştüğünde çizim bir
     * daha gitmiyor ve diğer oyuncular standart Y görüyordu. Artık dünyaya
     * her girişte yerel dosya varsa sunucuya tazelenir (idempotent).
     */
    public static void sunucuyaTazele() {
        UUID ben = kendim();
        if (ben == null || !dosyaVarMi()) {
            return;
        }
        yukluysaUygula();
        arkaPlandaYukle(base64Png(), ben);
    }

    /// Sıfırla: diski sil, ızgarayı boşalt, sunucudan da kaldır.
    public static synchronized void sifirla() {
        try {
            Files.deleteIfExists(YikimBridge.stateDir().resolve("rozet.png"));
        }
        catch (Throwable ignored) {
            // yok sayılır
        }
        // ızgarayı 16×16 standart Y logoyla doldur (v1.12.1: 2×2 büyütülmüş
        // tam kanvas — eski 64-int basımı yarım kalmış "iki Y" hatasıydı)
        int[] varsayilan = YikimRozetDoku.varsayilanBuyuk();
        System.arraycopy(varsayilan, 0, IZGARA, 0, Math.min(IZGARA.length, varsayilan.length));
        // standart Y slot 0'da; cizim arti kullanicin slotundan silinir
        UUID ben = kendim();
        if (ben != null) {
            UZAK.remove(ben);
            YikimSlotlar.temizAta(ben);
        }
        arkaPlandaYukle(null, ben);
    }

    /// Kendi hesap adım (TAB listesindeki GameProfile adı; yoksa görünen ad).
    public static String benimAdim() {
        try {
            class_310 mc = class_310.method_1551();
            if (mc == null || mc.field_1724 == null) {
                return null;
            }
            if (mc.method_1562() != null) {
                UUID ben = mc.field_1724.method_5667();
                for (net.minecraft.class_640 girdi : mc.method_1562().method_2880()) {
                    if (girdi.method_2966() != null && ben.equals(girdi.method_2966().id())) {
                        return girdi.method_2966().name();
                    }
                }
            }
            return mc.field_1724.method_5797() != null
                ? mc.field_1724.method_5797().getString() : null;
        }
        catch (Throwable ignored) {
            return null;
        }
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

    // ---------------------------------------------------------------- yetki

    /**
     * Atölye yetki düzeyi (launcher yazar, mod okur — `.yikim/yetki.json`):
     * 2 = admin (Microsoft hesaplı yönetici) · 1 = izinli oyuncu · 0 = yok.
     * Dosya yoksa/okunamazsa 0 — atölye açılmaz.
     */
    public static int yetkiDuzeyi() {
        try {
            Path dosya = YikimBridge.stateDir().resolve("yetki.json");
            if (!Files.exists(dosya)) {
                return 0;
            }
            String json = Files.readString(dosya, StandardCharsets.UTF_8);
            int i = json.indexOf("\"duzey\"");
            if (i < 0) {
                return 0;
            }
            int ikiNokta = json.indexOf(':', i);
            if (ikiNokta < 0) {
                return 0;
            }
            StringBuilder sayi = new StringBuilder();
            for (int k = ikiNokta + 1; k < json.length(); k++) {
                char c = json.charAt(k);
                if (c >= '0' && c <= '9') {
                    sayi.append(c);
                } else if (sayi.length() > 0) {
                    break;
                }
            }
            return sayi.length() == 0 ? 0 : Integer.parseInt(sayi.toString());
        }
        catch (Throwable ignored) {
            return 0;
        }
    }

    // ---------------------------------------------------------------- sunucu

    /// Arka plan: sunucuya kendi çizimini yükle (png=null → sunucudan sil).
    public static void arkaPlandaYukle(String base64Png, UUID uuid) {
        if (uuid == null) {
            return;
        }
        // v1.13.0: isim de gönderilir — sunucu çizimi hesap adıyla eşleştirir
        // (izin listesi karşılaştırması isim üzerinden yapılır).
        final String ad = benimAdim();
        final String adAlani = ad == null ? "" : "\"n\":\"" + ad.replace("\\", "").replace("\"", "") + "\",";
        Thread t = new Thread(() -> {
            try {
                String govde = base64Png == null
                    ? "{\"u\":\"" + uuid + "\"," + adAlani + "\"sil\":true}"
                    : "{\"u\":\"" + uuid + "\"," + adAlani + "\"png\":\"" + base64Png + "\"}";
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
        if (CIZIM_KAPALI) {
            return; // v1.12.7: uzak çizimler yok — standart Y herkeste
        }
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
            // HER uzak oyuncunun cizimi KENDI slotuna yazilir (v1.12 — tek
            // glif paylasimi kalkti: birinin cizimi baskasinin rozetinde cikmaz)
            for (java.util.Map.Entry<UUID, String> e : UZAK.entrySet()) {
                int[] piksel = pngdenOku(e.getValue());
                if (piksel != null) {
                    YikimSlotlar.ata(e.getKey(), piksel);
                }
            }
        }
        catch (Throwable ignored) {
            // asla patlamayalim
        }
    }

    /// base64 PNG → 8x8 ARGB dizisi (uzak rozet dokusu için); bozuksa null.
    private static int[] pngdenOku(String base64) {
        try {
            byte[] bayt = Base64.getDecoder().decode(base64);
            net.minecraft.class_1011 resim = net.minecraft.class_1011.method_49277(bayt);
            int genislik = Math.min(resim.method_4307(), BOY);
            int yukseklik = Math.min(resim.method_4323(), BOY);
            int[] cikti = new int[BOY * BOY];
            for (int y = 0; y < yukseklik; y++) {
                for (int x = 0; x < genislik; x++) {
                    int abgr = resim.method_61940(x, y);
                    int a = (abgr >>> 24) & 0xFF;
                    int m = (abgr >>> 16) & 0xFF;
                    int ye = (abgr >>> 8) & 0xFF;
                    int k = abgr & 0xFF;
                    cikti[y * BOY + x] = (a << 24) | (k << 16) | (ye << 8) | m;
                }
            }
            return cikti;
        }
        catch (Throwable problem) {
            return null;
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
