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
    private static final String VARSAYILAN_UCAK = "https://yikim-presence.onrender.com/presence";
    /// v1.13.2 GECİKME DÜZELTMESİ: 30 sn'lik kalp atışı, karşı tarafın rozeti
    /// en geç 30 sn sonra görmesi demekti ("gir çık yapınca bir süre sonra
    /// geliyor"). v1.13.3: 3 sn — TAB + nametag neredeyse anında güncellenir.
    private static final long PERIYOT = 3000L;
    /// HIZLI MOD: TAB'da rozeti bilinmeyen bir oyuncu varsa ~1 sn'de bir sor.
    /// (Sunucuya yeni giren oyuncular ilk saniyede yakalanır; kalıcı yük değil,
    /// eksik kalmadığında normal periyoda döner.)
    private static final long HIZLI_PERIYOT = 900L;
    private static final long HIZLI_PENCERE = 20000L;
    private static final long HATA_SESSIZLIGI = 30000L;

    /// Hızlı modun bitiş zamanı + "şimdi gönder" bayrağı (rozet değişince
    /// / oyuncu listesi değişince uyku bölünür — gecikme beklemeden sorulur).
    private static volatile long hizliBitis;
    private static volatile boolean simdiIste;

    private static Thread isParcacigi;
    private static volatile boolean calisiyor;
    /// v1.13.3: SORGU ANAHTARLARI. Servis, oyuncuları "hangi sunucu" havuzunda
    /// tutar ve havuz anahtarı istemcinin gönderdiği metindir. Eskiden bu metin
    /// YALNIZ oyuncunun yazdığı adresti: iki kişi aynı sunucuya farklı adla
    /// (domain ↔ IP, farklı port, büyük/küçük harf) girdiğinde ASLA
    /// eşleşmiyorlardı — "arkadaşımın rozeti hiç gözükmüyor" şikâyetinin
    /// kaynağı buydu. Artık hem girilen adres (eski istemcilerle uyum) hem de
    /// GERÇEK soket adresi (çözülmüş ip:port) sorulur; biri tutarsa yeter.
    private static volatile java.util.List<String> anahtarlar = java.util.List.of();
    /// Hangi anahtar akran döndürdüyse o önce denenir (tek istekle sonuç).
    private static volatile String iyiAnahtar = "";
    /// Aynı teşhis satırını her turda basmamak için son durum imzası.
    private static volatile String sonDurum = "";
    private static volatile long sonHata;
    private static volatile String aktifImza = "";
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
            java.util.List<String> simdiki = suAnkiAnahtarlar(mc);
            if (simdiki.isEmpty()) {
                durdur();
                return;
            }
            String imza = String.join("|", simdiki);
            if (!imza.equals(aktifImza) || !calisiyor) {
                durdur();
                aktifImza = imza;
                anahtarlar = simdiki;
                iyiAnahtar = "";
                // sunucu değişti: kimse bilinmiyor → ilk istek ANINDA + hızlı mod
                hizliBitis = System.currentTimeMillis() + HIZLI_PENCERE;
                simdiIste = true;
                ILK_GORULME.clear(); // yeni sunucu: "yeni oyuncu" sayacı sıfır
                baslat();
            }
        }
        catch (Throwable ignored) {
            // presence asla oyunu etkilemez
        }
    }

    /// Sorgu anahtarları: [girilen adres, çözülmüş ip:port]. Boş liste =
    /// tek oyunculu / LAN ana makinesi (servise gerek yok).
    private static java.util.List<String> suAnkiAnahtarlar(class_310 mc) {
        if (mc.field_1724 == null || mc.field_1687 == null || mc.method_1562() == null) {
            return java.util.List.of();
        }
        java.util.List<String> liste = new java.util.ArrayList<String>(2);
        String girilen = null;
        try {
            class_642 sd = mc.method_1562().method_45734();
            if (sd != null && sd.field_3761 != null && !sd.field_3761.isEmpty()) {
                girilen = sd.field_3761.trim();
            }
        }
        catch (Throwable ignored) {
            // sunucu bilgisi yok — aşağıdaki soket anahtarı yeter
        }
        if (girilen != null && !girilen.isEmpty()) {
            ekle(liste, girilen);            // eski istemcilerle BİREBİR uyum
            ekle(liste, girilen.toLowerCase(java.util.Locale.ROOT));
            ekle(liste, girilensizPort(girilen));
        }
        String ip = ipAnahtari(mc);
        if (ip != null) {
            ekle(liste, ip);
            if (ip.endsWith(":25565")) {
                ekle(liste, ip.substring(0, ip.length() - 6)); // port yazmayan eski istemci
            }
        }
        return liste;
    }

    private static void ekle(java.util.List<String> liste, String deger) {
        if (deger != null && !deger.isEmpty() && !liste.contains(deger) && liste.size() < 5) {
            liste.add(deger);
        }
    }

    /// "sunucu.com:25565" → "sunucu.com" (varsayılan port yazılmışsa).
    private static String girilensizPort(String adres) {
        if (adres != null && adres.endsWith(":25565")) {
            return adres.substring(0, adres.length() - 6);
        }
        return adres;
    }

    /// GERÇEK bağlantı adresi "ip:port" (küçük harf). Domain mi IP mi yazıldığı,
    /// port yazılıp yazılmadığı fark etmez — aynı sunucudaki iki oyuncuda AYNI.
    private static String ipAnahtari(class_310 mc) {
        try {
            java.net.SocketAddress adres = mc.method_1562().method_48296().method_10755();
            if (!(adres instanceof java.net.InetSocketAddress)) {
                return null;
            }
            java.net.InetSocketAddress inet = (java.net.InetSocketAddress) adres;
            java.net.InetAddress ip = inet.getAddress();
            if (ip == null) {
                return null;
            }
            return (ip.getHostAddress() + ":" + inet.getPort()).toLowerCase(java.util.Locale.ROOT);
        }
        catch (Throwable ignored) {
            return null;
        }
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
                if (!anahtarlar.isEmpty()) {
                    gonder();
                }
            }
            catch (Throwable ignored) {
                // tur başarısız — periyot sonrası tekrar
            }
            long bekle = System.currentTimeMillis() < hizliBitis ? HIZLI_PERIYOT : PERIYOT;
            try {
                for (long gecen = 0L; calisiyor && ben == isParcacigi && gecen < bekle; gecen += 250L) {
                    if (simdiIste) {
                        simdiIste = false; // rozet/oyuncu değişti — uykuyu böl
                        break;
                    }
                    Thread.sleep(250L);
                }
            }
            catch (InterruptedException kesildi) {
                return; // durdur() çağrıldı — sessizce çık (zombi yok)
            }
        }
    }

    /// Bir tur: anahtarları sırayla dener. Tercih edilen anahtar (geçen tur
    /// akran döndüren) önce sorulur; akran yoksa diğer anahtar da denenir.
    private static void gonder() {
        if (System.currentTimeMillis() - sonHata < HATA_SESSIZLIGI) {
            return; // uç nokta bilinen şekilde ölü — sessiz kal
        }
        java.util.List<String> denenecek = new java.util.ArrayList<String>(anahtarlar);
        String tercih = iyiAnahtar;
        if (!tercih.isEmpty() && denenecek.remove(tercih)) {
            denenecek.add(0, tercih);
        }
        int akran = -1;
        String tutan = "";
        int deneme = 0;
        for (String anahtar : denenecek) {
            if (++deneme > 3) {
                break; // tur başına en fazla 3 istek — ücretsiz uç noktayı yormayalım
            }
            int sayi = tekGonder(anahtar);
            if (sayi > 0) {
                akran = sayi;
                tutan = anahtar;
                break; // bu anahtar iş gördü — ikinci isteğe gerek yok
            }
            if (sayi == 0 && akran < 0) {
                akran = 0;
                tutan = anahtar;
            }
        }
        if (akran < 0) {
            return; // hiçbir istek tutmadı
        }
        iyiAnahtar = tutan;
        String durum = tutan + "|" + akran;
        if (!durum.equals(sonDurum)) {
            sonDurum = durum;
            YikimClient.LOGGER.info("YIKIM presence: anahtar '{}' → {} akran", tutan, akran);
        }
    }

    /// Tek anahtar için istek. Dönen: akran sayısı (>=0) veya -1 (istek düştü).
    private static int tekGonder(String anahtar) {
        try {
            class_310 mc = class_310.method_1551();
            if (mc == null || mc.field_1724 == null) {
                return -1;
            }
            String uuid = mc.field_1724.method_5667().toString();
            String isim = profilAdi(mc, uuid);
            if (isim == null) {
                isim = mc.field_1724.method_5797() != null
                    ? mc.field_1724.method_5797().getString() : "oyuncu";
            }
            String govde = "{\"v\":1,\"s\":\"" + kac(anahtar) + "\",\"u\":\"" + uuid
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
                return -1;
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
            // v1.13.0 KALICILIK DÜZELTMESİ: burada eskiden "izin listesinde
            // değilsem çizimi sil" vardı. Liste boş/gecikmiş olduğunda (ya da
            // yetki.json launcher tarafından yazılmadığında) HER kalp atışında
            // kullanıcının kendi logosu siliniyordu — "bir türlü kalmıyor"
            // şikâyetinin kaynağı buydu. Artık çizim SADECE kullanıcı silerse
            // veya admin panelden açıkça kaldırılırsa (sunucu art'ı düşürür)
            // kaybolur; istemci kendi kendine silmez.
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
            // TAB'da hâlâ rozetsiz oyuncu varsa hızlı moda geç (v1.13.2).
            // Sunucudaki herkes YIKIM değildir; bu yüzden aday sayısı sınırlı:
            // yalnız gerçekten oyunda olan, kendisi olmayan isimler sayılır.
            if (bilinmeyenVar(mc)) {
                hizliBitis = System.currentTimeMillis() + HIZLI_PENCERE;
            }
            return akranSayisi(metin);
        }
        catch (Throwable problem) {
            sonHata = System.currentTimeMillis();
            return -1;
        }
    }

    /// Yanıttaki "p" dizisinde kaç akran var (kendisi hariç).
    private static int akranSayisi(String metin) {
        int b = metin.indexOf("\"p\"");
        if (b < 0) {
            return 0;
        }
        int sol = metin.indexOf('[', b);
        int sag = sol < 0 ? -1 : metin.indexOf(']', sol);
        if (sol < 0 || sag < 0) {
            return 0;
        }
        int tirnak = 0;
        for (int i = sol; i < sag; i++) {
            if (metin.charAt(i) == '"') {
                tirnak++;
            }
        }
        return tirnak / 2;
    }

    /// Rozeti bilinmeyen oyuncuların İLK görülme zamanı (uuid → ms).
    ///
    /// Neden gerekli: sunucudaki oyuncuların çoğu YIKIM kullanmaz; "bilinmeyen
    /// var" demek sonsuz hızlı yoklama demek olurdu (1.2 sn'de bir istek =
    /// boşa trafik, ücretsiz sunucuda rate limit). Bu yüzden hızlı mod YALNIZ
    /// yeni görülen oyuncu için 15 sn açık kalır; sonra normal 5 sn periyot.
    private static final java.util.Map<UUID, Long> ILK_GORULME =
        new java.util.concurrent.ConcurrentHashMap<UUID, Long>();
    private static final long HIZLI_ADAY_SURESI = 15000L;

    /// TAB listesinde YENİ görülen ve rozeti hâlâ bilinmeyen (kendisi hariç)
    /// oyuncu var mı?
    private static boolean bilinmeyenVar(class_310 mc) {
        try {
            if (mc == null || mc.field_1724 == null || mc.method_1562() == null) {
                return false;
            }
            long simdi = System.currentTimeMillis();
            UUID ben = mc.field_1724.method_5667();
            boolean gerek = false;
            for (class_640 girdi : mc.method_1562().method_2880()) {
                if (girdi.method_2966() == null) {
                    continue;
                }
                UUID id = girdi.method_2966().id();
                if (id == null || id.equals(ben)) {
                    continue;
                }
                if (YikimBadge.isKnown(id)) {
                    ILK_GORULME.remove(id); // rozetlendi — adaylığı bitti
                    continue;
                }
                Long ilk = ILK_GORULME.get(id);
                if (ilk == null) {
                    if (ILK_GORULME.size() > 256) {
                        ILK_GORULME.clear(); // sınırsız büyümesin
                    }
                    ILK_GORULME.put(id, simdi);
                    gerek = true;
                }
                else if (simdi - ilk < HIZLI_ADAY_SURESI) {
                    gerek = true;
                }
            }
            return gerek;
        }
        catch (Throwable ignored) {
            // liste hazır değil — hızlı moda gerek yok
        }
        return false;
    }

    /// Dışarıdan "şimdi sor" (rozet değişti / oyuncu listesi değişti).
    /// Uykudaki döngü 250 ms içinde uyanır: 5 sn beklenmez.
    public static void hemenGonder() {
        simdiIste = true;
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
