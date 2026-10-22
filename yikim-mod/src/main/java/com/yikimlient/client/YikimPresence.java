package com.yikimlient.client;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.UUID;
import net.minecraft.class_310;
import net.minecraft.class_642;

/**
 * Lunar (Apollo) tarzı PRESENCE servisi (v1.10.5).
 *
 * Sohbet kanalı el sıkışması ÇÖP çıktı (kutu karakterler, spam, kick) —
 * tamamen kaldırıldı. Doğrusu launcher'ların yaptığı gibi: oyuncu oyunda
 * iken 30 sn'de bir HTTPS ile bizim servisimize "şu sunucudayım" der;
 * servis AYNI sunucudaki diğer YIKIMLient oyuncularının UUID'lerini döner.
 * Oyuncular otomatik rozetlenir — sohbete HİÇ dokunulmaz, kick imkânsız,
 * vanilla/LAN/WAN her sunucuda çalışır.
 *
 * Uç nokta: https://yikimdara.com.tr/yikim-api/presence.php
 *   istek : {"v":1,"s":"<sunucu adresi>","u":"<uuid>","n":"<isim>"}
 *   yanıt : {"p":["<uuid>", ...]}   (kendisi hariç, son 90 sn)
 *
 * Başarısızlıkta sessizdir: uç nokta yoksa/sağlansızsa 10 dk denenmez ve
 * oyunun hiçbir akışı etkilenmez. YikimConfig.caprazRozet ile kapatılabilir.
 */
public final class YikimPresence {
    private static final String VARSAYILAN_UCAK = "http://yikimdara.com.tr:8787/presence";
    private static final long PERIYOT = 30000L;
    private static final long HATA_SESSIZLIGI = 600000L;

    private static Thread isParcacigi;
    private static volatile boolean calisiyor;
    private static volatile String aktifAdres = "";
    private static volatile long sonHata;

    private YikimPresence() {
    }

    /// Ana thread'den çağrılır: dünyayı izler, arka plan iş parçacığını yönetir.
    public static void tick(class_310 mc) {
        try {
            if (!YikimConfig.get().caprazRozet) {
                durdur();
                return;
            }
            String adres = suAnkiAdres(mc);
            if (adres == null) {
                durdur();
                return;
            }
            if (!adres.equals(aktifAdres) || !calisiyor) {
                durdur();
                aktifAdres = adres;
                baslat();
            }
        }
        catch (Throwable ignored) {
            // presence asla oyunu etkilemez
        }
    }

    private static String suAnkiAdres(class_310 mc) {
        if (mc.field_1724 == null || mc.field_1687 == null || mc.method_1562() == null) {
            return null;
        }
        class_642 sd = mc.method_1562().method_45734();
        if (sd == null || sd.field_3761 == null || sd.field_3761.isEmpty()) {
            return null; // tek oyunculu / LAN ana makinesi — servis gerekmez
        }
        return sd.field_3761;
    }

    private static synchronized void baslat() {
        if (calisiyor) {
            return;
        }
        calisiyor = true;
        Thread t = new Thread(YikimPresence::dongu, "YIKIM-presence");
        t.setDaemon(true);
        isParcacigi = t;
        t.start();
    }

    private static synchronized void durdur() {
        calisiyor = false;
        isParcacigi = null;
    }

    private static void dongu() {
        while (calisiyor) {
            try {
                String adres = aktifAdres;
                if (!adres.isEmpty()) {
                    gonder(adres);
                }
            }
            catch (Throwable ignored) {
                // tur başarısız — periyot sonrası tekrar
            }
            try {
                for (long beklenecek = 0L; calisiyor && beklenecek < PERIYOT; beklenecek += 500L) {
                    Thread.sleep(500L);
                }
            }
            catch (InterruptedException kesildi) {
                return;
            }
        }
    }

    private static void gonder(String adres) {
        try {
            if (System.currentTimeMillis() - sonHata < HATA_SESSIZLIGI) {
                return; // uç nokta bilinen şekilde ölü — sessiz kal
            }            class_310 mc = class_310.method_1551();
            if (mc == null || mc.field_1724 == null) {
                return;
            }
            String uuid = mc.field_1724.method_5667().toString();
            String isim = mc.field_1724.method_5797() != null
                ? mc.field_1724.method_5797().getString() : "oyuncu";
            String govde = "{\"v\":1,\"s\":\"" + kac(adres) + "\",\"u\":\"" + uuid
                + "\",\"n\":\"" + kac(isim) + "\"}";
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
            int kod = bag.getResponseCode();
            if (kod != 200) {
                sonHata = System.currentTimeMillis();
                return;
            }
            StringBuilder yanit = new StringBuilder(512);
            try (InputStream giris = bag.getInputStream()) {
                byte[] tampon = new byte[1024];
                int okunan;
                while ((okunan = giris.read(tampon)) > 0) {
                    yanit.append(new String(tampon, 0, okunan, StandardCharsets.UTF_8));
                }
            }
            bag.disconnect();
            int yeni = 0;
            int i = 0;
            String metin = yanit.toString();
            while ((i = metin.indexOf('"', i)) >= 0) {
                int son = metin.indexOf('"', i + 1);
                if (son < 0) {
                    break;
                }
                String aday = metin.substring(i + 1, son);
                if (aday.length() == 36 && aday.indexOf('-') == 8) {
                    try {
                        if (YikimBadge.markKnown(UUID.fromString(aday))) {
                            yeni++;
                        }
                    }
                    catch (IllegalArgumentException bozuk) {
                        // geçersiz uuid — atla
                    }
                }
                i = son + 1;
            }
            if (yeni > 0) {
                YikimClient.LOGGER.info("YIKIM presence: {} YIKIM oyuncusu bu sunucuda rozetlendi", yeni);
            }
        }
        catch (Throwable problem) {
            sonHata = System.currentTimeMillis();
        }
    }

    private static String kac(String ham) {
        return ham.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", " ").replace("\r", " ");
    }

    /// Uç nokta: launcher yazarsa `.yikim/presence-url.txt` kazanır; yoksa varsayılan.
    /// (VDS sahipleri kendi sunucusunu böyle işaret eder — kod değişikliği gerekmez.)
    private static String ucak() {
        try {
            java.nio.file.Path dosya = YikimBridge.stateDir().resolve("presence-url.txt");
            if (java.nio.file.Files.exists(dosya)) {
                String url = java.nio.file.Files.readString(dosya, StandardCharsets.UTF_8).trim();
                if (url.startsWith("http://") || url.startsWith("https://")) {
                    return url;
                }
            }
        }
        catch (Throwable ignored) {
            // okunamazsa varsayılana düş
        }
        return VARSAYILAN_UCAK;
    }
}
