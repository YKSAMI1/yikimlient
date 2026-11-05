package com.yikimlient.client;

import com.yikimlient.client.mixin.YikimOturum;
import net.minecraft.class_310;
import net.minecraft.class_320;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * OYUN İÇİ HESAP DEĞİŞTİRME (v1.27.0).
 *
 * Launcher'ın kayıtlı hesaplarını `.yikim/hesaplar.json` üzerinden okur, seçimi
 * `.yikim/hesap-istek.json` ile launcher'a bildirir ve launcher'ın ürettiği
 * taze oturumu (`hesap-oturum.json`) oyunun `MinecraftClient.session` alanına
 * yazar. Böylece ana menüden çıkmadan premium ↔ çevrimdışı hesap değişir;
 * oturumdan türeyen her şey (isim, UUID, sunucuya giriş jetonu, deri ve
 * kozmetik yüklemesi) yeni hesabı kullanır.
 *
 * Jeton asla `hesaplar.json`'a yazılmaz: yalnız gerçek bir değiştirme
 * isteğinde, tek seferlik cevap dosyasıyla gelir.
 */
public final class YikimHesaplar {
    /** Tek bir hesap özeti (jeton içermez). */
    public static final class Hesap {
        public String id = "";
        public String ad = "";
        public String tip = "";
        public String uuid = "";

        public boolean premium() {
            return "microsoft".equalsIgnoreCase(tip);
        }

        public String turEtiketi() {
            return premium() ? "PREMIUM" : "ÇEVRİMDIŞI";
        }
    }

    /** Mod ↔ launcher cevap gecikmesi üst sınırı (ms). */
    private static final long BEKLEME_MS = 12_000L;

    private YikimHesaplar() {
    }

    /** `.yikim/hesaplar.json` → hesap listesi (yoksa boş liste). */
    public static List<Hesap> liste() {
        ArrayList<Hesap> sonuc = new ArrayList<>();
        String metin = oku(YikimBridge.hesaplarFile());
        if (metin.isEmpty()) {
            return sonuc;
        }
        int alan = metin.indexOf("\"hesaplar\"");
        if (alan < 0) {
            return sonuc;
        }
        int acilis = metin.indexOf('[', alan);
        if (acilis < 0) {
            return sonuc;
        }
        int kapanis = eslesen(metin, acilis, '[', ']');
        if (kapanis < 0) {
            return sonuc;
        }
        String govde = metin.substring(acilis + 1, kapanis);
        int imlec = 0;
        while (true) {
            int bas = govde.indexOf('{', imlec);
            if (bas < 0) {
                break;
            }
            int son = eslesen(govde, bas, '{', '}');
            if (son < 0) {
                break;
            }
            String nesne = govde.substring(bas, son + 1);
            Hesap h = new Hesap();
            h.id = YikimJson.string(nesne, "id");
            h.ad = YikimJson.string(nesne, "ad");
            h.tip = YikimJson.string(nesne, "tip");
            h.uuid = YikimJson.string(nesne, "uuid");
            if (!h.id.isEmpty() && !h.ad.isEmpty()) {
                sonuc.add(h);
            }
            imlec = son + 1;
        }
        return sonuc;
    }

    /** Launcher'da işaretli hesabın kimliği. */
    public static String aktifId() {
        String metin = oku(YikimBridge.hesaplarFile());
        return metin.isEmpty() ? "" : YikimJson.string(metin, "aktif");
    }

    /** Oyunun ŞU ANKİ oturumundaki isim (ana menü düğmesi için). */
    public static String aktifAd(class_310 mc) {
        try {
            if (mc != null && mc.method_1548() != null) {
                String ad = mc.method_1548().method_1676();
                if (ad != null && !ad.isEmpty()) {
                    return ad;
                }
            }
        }
        catch (Throwable ignored) {
            // oturum yok — aşağıdaki yedek kullanılır
        }
        List<Hesap> heps = liste();
        String aktif = aktifId();
        for (Hesap h : heps) {
            if (h.id.equals(aktif)) {
                return h.ad;
            }
        }
        return heps.isEmpty() ? "" : heps.get(0).ad;
    }

    /**
     * Hesabı değiştir — ÇAĞIRAN THREAD'DE bloklar (en fazla ~12 sn).
     * Oturum alanı yazımı oyun thread'inde yapılır; launcher cevabı beklenirken
     * arayüz donmasın diye ekrandan ayrı iş parçacığında çağrılır.
     *
     * @return başarılıysa true (hata mesajı çağırana `sonHata()` ile bildirilir)
     */
    public static boolean degistir(class_310 mc, String hesapId) {
        sonHata = "";
        if (mc == null || hesapId == null || hesapId.isEmpty()) {
            sonHata = "geçersiz hesap";
            return false;
        }
        long istek = YikimBridge.writeHesapIstek(hesapId);
        if (istek <= 0L) {
            sonHata = "launcher köprüsü yazılamadı";
            return false;
        }
        long bitis = System.currentTimeMillis() + BEKLEME_MS;
        String cevap = null;
        while (System.currentTimeMillis() < bitis) {
            cevap = YikimBridge.readHesapOturum(istek);
            if (cevap != null) {
                break;
            }
            try {
                Thread.sleep(150L);
            }
            catch (InterruptedException kesildi) {
                Thread.currentThread().interrupt();
                sonHata = "iptal edildi";
                return false;
            }
        }
        if (cevap == null) {
            sonHata = "launcher yanıt vermedi (açık mı?)";
            return false;
        }
        String hata = YikimJson.string(cevap, "hata");
        if (!hata.isEmpty()) {
            sonHata = hata;
            return false;
        }
        String ad = YikimJson.string(cevap, "ad");
        String uuid = YikimJson.string(cevap, "uuid");
        String token = YikimJson.string(cevap, "token");
        String tip = YikimJson.string(cevap, "tip");
        UUID kimlik;
        try {
            kimlik = UUID.fromString(uuid);
        }
        catch (Throwable bozuk) {
            sonHata = "geçersiz UUID";
            return false;
        }
        if (ad.isEmpty()) {
            sonHata = "launcher boş isim döndürdü";
            return false;
        }
        class_320 yeni = new class_320(ad, kimlik, token, Optional.empty(), Optional.empty());
        boolean tamam = false;
        try {
            ((YikimOturum) mc).yikimOturum(yeni);
            tamam = true;
        }
        catch (Throwable hata2) {
            sonHata = "oturum yazılamadı: " + hata2.getClass().getSimpleName();
        }
        if (!tamam) {
            return false;
        }
        deriOnbelleginiBosalt(mc);
        sonTip = tip;
        sonAd = ad;
        YikimMetrics.notify("Hesap: " + ad + ("microsoft".equalsIgnoreCase(tip) ? "  •  premium" : "  •  çevrimdışı"));
        // Kozmetik/rozet yüklemesi oturum UUID'sine bağlı: yeni hesapla hemen
        // yeniden gönder (dünyadaysa karşı taraf 1 kalp atışında görür).
        try {
            YikimPresence.hemenGonder();
        }
        catch (Throwable ignored) {
            // dünya yok / ağ yok — oyun akışı bozulmasın
        }
        return true;
    }

    public static String sonHata = "";
    public static String sonAd = "";
    public static String sonTip = "";

    /**
     * Deri önbelleğini boşalt: aynı hesap yeniden seçildiğinde (launcher'da
     * deri değişmişse) menüde eski deri kalmasın. Sürüme göre alan adı
     * değişebildiği için tamamı sessizce yutulur.
     */
    private static void deriOnbelleginiBosalt(class_310 mc) {
        try {
            Object saglayici = mc.method_1582();
            if (saglayici == null) {
                return;
            }
            java.lang.reflect.Field alan = saglayici.getClass().getDeclaredField("field_45634");
            alan.setAccessible(true);
            Object onbellek = alan.get(saglayici);
            if (onbellek != null) {
                onbellek.getClass().getMethod("invalidateAll").invoke(onbellek);
            }
        }
        catch (Throwable ignored) {
            // önbellek alanı yok — yeni UUID zaten taze getirir
        }
    }

    private static String oku(Path yol) {
        try {
            if (!Files.exists(yol)) {
                return "";
            }
            return Files.readString(yol, StandardCharsets.UTF_8);
        }
        catch (Throwable okunamadi) {
            return "";
        }
    }

    /** `metin[bas]` açılış karakteriyle eşleşen kapanış karakterinin indeksi. */
    private static int eslesen(String metin, int bas, char acilis, char kapanis) {
        int derinlik = 0;
        boolean metinIcinde = false;
        for (int i = bas; i < metin.length(); i++) {
            char c = metin.charAt(i);
            if (metinIcinde) {
                if (c == '\\') {
                    i++;
                }
                else if (c == '"') {
                    metinIcinde = false;
                }
                continue;
            }
            if (c == '"') {
                metinIcinde = true;
            }
            else if (c == acilis) {
                derinlik++;
            }
            else if (c == kapanis) {
                derinlik--;
                if (derinlik == 0) {
                    return i;
                }
            }
        }
        return -1;
    }
}
