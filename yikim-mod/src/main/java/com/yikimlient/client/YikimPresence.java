package com.yikimlient.client;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.UUID;
import net.minecraft.class_310;
import net.minecraft.class_640;
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
    private static volatile java.util.List<String> izinListesi = java.util.List.of();
    private static volatile long izinGonderimZamani;

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
        Thread eski = isParcacigi;
        isParcacigi = null;
        if (eski != null) {
            // ZOMBİ DÜZELTMESİ (v1.12.1): bayrak yeterli DEĞİL — baslat() bayrağı
            // anında geri true yapabildiğinden eski thread uyanınca bayrağı
            // "canlı" sanıp 30 sn'de bir POST atmaya devam ediyordu; her gir-çık
            // +1 sızıntı thread demekti (sürekli ağ trafiği / ping düşüşü).
            // Artık thread KENDİNE özel kimlikle çalışır: eski thread'in
            // isParcacigi referansı yeni thread'e geçtiği anda döngü koşulu
            // bozulur; interrupt da uykudaki bloğu anında koparır.
            eski.interrupt();
        }
    }

    private static void dongu() {
        Thread ben = Thread.currentThread();
        while (calisiyor && ben == isParcacigi) {
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
                for (long beklenecek = 0L; calisiyor && ben == isParcacigi && beklenecek < PERIYOT; beklenecek += 500L) {
                    Thread.sleep(500L);
                }
            }
            catch (InterruptedException kesildi) {
                return; // durdur() çağrıldı — sessizce çık (zombi yok)
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
            String isim = profilAdi(mc, uuid);
            if (isim == null) {
                isim = mc.field_1724.method_5797() != null
                    ? mc.field_1724.method_5797().getString() : "oyuncu";
            }
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
                bag.disconnect(); // soket sızıntısı = yarı açık bağlantı birikimi
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
            String metin = yanit.toString();
            // başkalarının özel rozetleri ("b" alanı) → atölye kataloğuna
            YikimAtolye.uzaklariIsle(metin);
            // çizim izin listesi (admin panel + atölye kapısı için)
            izinListesi = izinleriOku(metin);
            // İZİN GERİ ALındıysa çizim silinir (v1.12.3): admin seni listeden
            // çıkaardıysa kendi rozetin sunucudan düşer, normal Y'ye dönersin.
            try {
                if (YikimAtolye.dosyaVarMi() && YikimAtolye.yetkiDuzeyi() == 0
                    && !izinlimi(isim)) {
                    YikimClient.LOGGER.info("YIKIM izin: cizim izni geri alindi — normal Y'ye donuluyor");
                    YikimAtolye.sifirla();
                }
            }
            catch (Throwable ignored) {
                // izin temizliği oyunu asla etkilemez
            }
            // kendi çizimimi her heartbeat'te yeniden bas (resource reload'a dayanıklı)
            if (YikimAtolye.dosyaVarMi()) {
                YikimAtolye.yukluysaUygula();
            }
            int yeni = 0;
            int i = 0;
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

    /// Kendi GERÇEK hesap adımız (takım önekleri/renk kodları OLMADAN).
    /// v1.12.3: eskiden displayName gönderiliyordu — süslü isimli sunucularda
    /// izin eşleşmesi kırılıyordu. TAB listesindeki GameProfile adı kazanır.
    private static String profilAdi(class_310 mc, String uuid) {
        try {
            if (mc.method_1562() == null) {
                return null;
            }
            UUID bek = UUID.fromString(uuid);
            for (class_640 girdi : mc.method_1562().method_2880()) {
                if (girdi.method_2966() != null
                    && bek.equals(girdi.method_2966().id())) {
                    return girdi.method_2966().name();
                }
            }
        }
        catch (Throwable ignored) {
            // liste hazır değil — displayName düş
        }
        return null;
    }

    // ---------------------------------------------------------------- izinler

    /// Sunucudan gelen izinli isim listesi (atölye kapısı + admin panel başlangıcı).
    public static java.util.List<String> izinler() {
        return izinListesi;
    }

    /// Bu isim çizim izinli mi? (kıyassız karşılaştırma)
    public static boolean izinlimi(String isim) {
        if (isim == null) {
            return false;
        }
        for (String ad : izinListesi) {
            if (isim.equalsIgnoreCase(ad)) {
                return true;
            }
        }
        return false;
    }

    /// Admin paneli: izin listesini sunucuya yaz (arka plan POST, yanıt yeni liste).
    public static void izinKaydet(java.util.List<String> adlar) {
        if (adlar == null || System.currentTimeMillis() - izinGonderimZamani < 1000L) {
            return; // 1 sn throttle — çift tık koruması
        }
        izinGonderimZamani = System.currentTimeMillis();
        StringBuilder govde = new StringBuilder("{\"izinler\":[");
        for (int i = 0; i < adlar.size(); i++) {
            if (i > 0) {
                govde.append(',');
            }
            govde.append('"').append(kac(adlar.get(i))).append('"');
        }
        govde.append("]}");
        byte[] bayt = govde.toString().getBytes(StandardCharsets.UTF_8);
        String ucakAdres = ucak();
        Thread t = new Thread(() -> {
            try {
                HttpURLConnection bag = (HttpURLConnection) new URL(ucakAdres).openConnection();
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
                    bag.disconnect();
                    return;
                }
                StringBuilder yanit = new StringBuilder(256);
                try (InputStream giris = bag.getInputStream()) {
                    byte[] tampon = new byte[1024];
                    int okunan;
                    while ((okunan = giris.read(tampon)) > 0) {
                        yanit.append(new String(tampon, 0, okunan, StandardCharsets.UTF_8));
                    }
                }
                bag.disconnect();
                java.util.List<String> yeni = izinleriOku(yanit.toString());
                if (yeni != null) {
                    izinListesi = yeni;
                }
            }
            catch (Throwable ignored) {
                // sunucu yoksa liste yerelde kalır
            }
        }, "YIKIM-izin");
        t.setDaemon(true);
        t.start();
    }

    /// Yanıttaki "izinler":["ad", ...] dizisini kütüphanesiz çıkar.
    private static java.util.List<String> izinleriOku(String metin) {
        try {
            int i = metin.indexOf("\"izinler\"");
            if (i < 0) {
                return null;
            }
            int sol = metin.indexOf('[', i);
            int sag = sol >= 0 ? metin.indexOf(']', sol) : -1;
            if (sol < 0 || sag < 0) {
                return null;
            }
            java.util.List<String> adlar = new java.util.ArrayList<>();
            int j = sol;
            while (true) {
                int t1 = metin.indexOf('"', j + 1);
                if (t1 < 0 || t1 > sag) {
                    break;
                }
                int t2 = metin.indexOf('"', t1 + 1);
                if (t2 < 0 || t2 > sag) {
                    break;
                }
                adlar.add(metin.substring(t1 + 1, t2));
                j = t2;
            }
            return adlar;
        }
        catch (Throwable problem) {
            return null;
        }
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
