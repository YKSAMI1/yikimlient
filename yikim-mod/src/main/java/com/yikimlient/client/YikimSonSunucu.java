package com.yikimlient.client;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import net.minecraft.class_310;
import net.minecraft.class_642;

/**
 * SON SUNUCU KAYDI (launcher "hızlı giriş" desteği).
 *
 * Oyuncu çok oyunculu bir sunucuya girdiğinde adresini
 * `.yikim/son-sunucu.txt` dosyasına yazar; sunucudan çıkınca dosyayı siler.
 * Launcher bu dosyayı okuyup ana menüdeki "Hızlı giriş" satırını doldurur:
 * "en son hangi paketle hangi sunucuya girdiysem" → tek tıkla oraya açar.
 *
 * Yazma yalnızca DEĞİŞİMDE olur (tick başına dosya erişimi yok).
 */
public final class YikimSonSunucu {
    /** Son bilinen adres; null = sunucuya bağlı değil. */
    private static String son;

    private YikimSonSunucu() {
    }

    /** Her tick çağrılır; yazma/silme sadece değişimde olur. */
    public static void tick(class_310 client) {
        if (client == null) {
            return;
        }
        String adres = null;
        try {
            if (client.field_1687 != null && client.method_1558() != null) {
                class_642 veri = client.method_1558();
                if (veri != null) {
                    adres = veri.field_3761;
                }
            }
        }
        catch (Throwable sorun) {
            // eşleme farkı: hiçbir zaman oyunu etkilemesin
            return;
        }
        if (adres != null && adres.trim().isEmpty()) {
            adres = null;
        }
        boolean degisti = adres == null ? YikimSonSunucu.son != null : !adres.equals(YikimSonSunucu.son);
        if (!degisti) {
            return;
        }
        YikimSonSunucu.son = adres;
        try {
            Path dosya = YikimBridge.stateDir().resolve("son-sunucu.txt");
            if (adres == null) {
                Files.deleteIfExists(dosya);
                return;
            }
            Files.createDirectories(YikimBridge.stateDir());
            Files.writeString(dosya, adres.trim() + "\n", StandardCharsets.UTF_8);
        }
        catch (Throwable ignored) {
            // disk yazılamıyor (salt okunur kurulum): sessizce geç
        }
    }
}