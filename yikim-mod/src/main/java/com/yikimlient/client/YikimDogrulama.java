package com.yikimlient.client;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * HESAP DOĞRULAMA DURUMU (v0.7.25) — oyuncunun adının başındaki ✕ işareti.
 *
 * Launcher, aktif hesabı her kurulumun `.yikim/` altına yazar:
 *   aktif-hesap  → hesap anahtarı (offline:… / ms:…)
 *   dogrulandi   → "1" (Discord ile bağlı + şifre kurulu) / "0"
 *
 * Bu durumu okuyup rozet glifinin ÖNÜNE kırmızı ✕ ekliyoruz. Böylece
 * launcher'da görünen işaret oyun içi isim etiketinde ve TAB listesinde
 * de görünür — doğrulanmamış hesap oynayabilir ama kozmetik/skin
 * değiştirememiş olduğu her yerde anlaşılır olur.
 *
 * Erişilebilirlik: dosya okunamazsa (ilk açılış, elle kurulmuş sunucu)
 * ✕ GÖSTERİLMEZ — sessizce geçer; oyunu veya rozeti asla engellemez.
 */
public final class YikimDogrulama {
    /** Doğrulama bayrağı değişene kadar dosya OKUNMAZ (sıcak yol). */
    private static volatile boolean hazir = false;
    private static volatile boolean dogrulandi = false;
    private static volatile long sonOkuma = 0L;
    /** Aynı dosyayı en sık 2 saniyede bir yeniden oku (maliyet sınırı). */
    private static final long YENILE_MS = 2000L;

    private YikimDogrulama() {
    }

    /** Aktif hesabın doğrulanmış sayılıp sayılmadığı (yoksa false = ✕ yok). */
    public static boolean dogrulandiMi() {
        if (!hazir) {
            return false;
        }
        return dogrulandi;
    }

    /**
     * Launcher gerçekten bir doğrulama kaydı yazmış mı?
     * false ise (dosya hiç yok / elle kurulmuş sunucu) ✕ GÖSTERİLMEZ —
     * "bilmiyorum" ile "doğrulanmadı" aynı şey değildir.
     */
    public static boolean kayitliMi() {
        tazele(false);
        return hazir;
    }

    /** Bayrağı oku (kısa süreli önbellek). Launcher yazdıysa anında görünür. */
    public static void tazele(boolean zorla) {
        long simdi = System.currentTimeMillis();
        if (!zorla && simdi - sonOkuma < YENILE_MS) {
            return;
        }
        sonOkuma = simdi;
        try {
            Path dosya = YikimBridge.stateDir().resolve("dogrulandi");
            if (!Files.isRegularFile(dosya)) {
                // dosya yoksa ilk durum: henüz bilgi yok → ✕ yok
                hazir = true;
                dogrulandi = false;
                return;
            }
            String ic = new String(Files.readAllBytes(dosya), StandardCharsets.UTF_8).trim();
            dogrulandi = ic.equals("1") || ic.equalsIgnoreCase("true");
            hazir = true;
        }
        catch (Throwable ignored) {
            // okunamazsa mevcut değer korunur — rozet/oyun etkilenmez
        }
    }

    /** Hesap değişti (launcher yazdı) → hemen yeniden oku. */
    public static void sifirla() {
        hazir = false;
        dogrulandi = false;
        sonOkuma = 0L;
    }
}
