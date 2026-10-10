package com.yikimlient.client;

import net.minecraft.class_310;
import net.minecraft.class_315;
import net.minecraft.class_429;
import net.minecraft.class_446;

/**
 * Performans Bekçisi (şartname §3.2.5: "Ayarlar sürüklenir; bekçi şart").
 *
 * Oyun açıkken aktif profilin kritik değerlerini korur: başka bir mod, komut
 * veya kod değerleri pahalı yöne çekmişse sessizce geri alır. KULLANICI
 * İRADESİ KUTSALDIR: vanilla Ayarlar / Video Ayarları ekranı açıkken ve
 * kapatıldıktan sonra 60 saniye boyunca hiçbir şeye dokunmaz — elle yapılan
 * değişiklik bu pencerede serbesttir. Her şey try/catch içinde: bekçi asla
 * oyunu düşürmez, asla kare yolunda çalışmaz (20 saniyede bir hızlı kontrol).
 *
 * Ek görev — Düşük FPS Danışmanı: oyun içinde FPS < 60 sürekli 10 saniye
 * kalırsa oturum boyunca BİR KEZ "Performans profilini dene" önerir. Ölçüm
 * YikimMetrics.fps() üzerinden gelir (oyunun kendi sayacı — geri çağrı saymak yasak, §3.1).
 */
public final class YikimGuard {
    private static final long ASSERT_INTERVAL_MS = 20000L;
    private static final long USER_GRACE_MS = 60000L;
    private static final int LOW_FPS_THRESHOLD = 60;
    private static final int LOW_FPS_TICKS = 200;

    private static long lastAssertAt;
    private static long yieldUntil;
    private static int lowFpsStreak;
    private static boolean lowFpsAdvised;

    private YikimGuard() {
    }

    public static void tick(class_310 client) {
        try {
            long now = System.currentTimeMillis();
            Object screen = client.field_1755;
            if (screen instanceof class_429 || screen instanceof class_446) {
                // kullanıcı ayar ekranında — iradesine saygı: 60 sn boyunca karışma
                yieldUntil = now + YikimGuard.USER_GRACE_MS;
                return;
            }
            YikimGuard.adviseLowFps(client);
            if (now < YikimGuard.yieldUntil || now - YikimGuard.lastAssertAt < YikimGuard.ASSERT_INTERVAL_MS) {
                return;
            }
            YikimGuard.lastAssertAt = now;
            YikimGuard.assertProfile(client);
        }
        catch (Throwable ignored) {
            // bekçi asla oyunu etkilemez
        }
    }

    /** Aktif profilin kritik değerleri sürüklenmişse geri al (ve kaydet). */
    private static void assertProfile(class_310 client) {
        if (client.field_1687 == null) {
            return; // yalnızca oyun içinde — menüde ayar üstüne yazma
        }
        YikimPresets.Preset preset = YikimPresets.byId(YikimPresets.currentId());
        class_315 options = client.field_1690;
        int fixed = 0;
        // en kritik çift: kare sınırlayıcılar
        if (((Integer)options.method_42524().method_41753()).intValue() != preset.maxFps) {
            options.method_42524().method_41748(Integer.valueOf(Math.max(2, preset.maxFps)));
            ++fixed;
        }
        if (((Boolean)options.method_42433().method_41753()).booleanValue() != preset.vsync) {
            options.method_42433().method_41748(Boolean.valueOf(preset.vsync));
            ++fixed;
        }
        if (((Integer)options.method_42503().method_41753()).intValue() != preset.renderDistance) {
            options.method_42503().method_41748(Integer.valueOf(Math.max(2, preset.renderDistance)));
            ++fixed;
        }
        if (((Integer)options.method_42510().method_41753()).intValue() != preset.simulationDistance) {
            options.method_42510().method_41748(Integer.valueOf(Math.max(5, preset.simulationDistance)));
            ++fixed;
        }
        if (((Boolean)options.method_42435().method_41753()).booleanValue() != preset.entityShadows) {
            options.method_42435().method_41748(Boolean.valueOf(preset.entityShadows));
            ++fixed;
        }
        if (fixed == 0) {
            return;
        }
        options.method_1640();
        YikimMetrics.notify("Performans bekçisi: " + fixed + " s\u00fcr\u00fcklenen ayar geri al\u0131nd\u0131");
    }

    /** Düşük FPS önerisi: 60 altında 10 sn → oturumda bir kez "Performans profilini dene". */
    private static void adviseLowFps(class_310 client) {
        if (client.field_1687 == null || client.field_1755 != null) {
            YikimGuard.lowFpsStreak = 0;
            return;
        }
        int fps = YikimMetrics.fps();
        if (fps > 0 && fps < YikimGuard.LOW_FPS_THRESHOLD) {
            if (++YikimGuard.lowFpsStreak >= YikimGuard.LOW_FPS_TICKS) {
                YikimGuard.lowFpsStreak = 0;
                if (!YikimGuard.lowFpsAdvised) {
                    YikimGuard.lowFpsAdvised = true;
                    YikimMetrics.notify("FPS d\u00fc\u015f\u00fck (" + fps + ") — Performans profilini dene: Sa\u011f Shift");
                }
            }
        }
        else {
            YikimGuard.lowFpsStreak = 0;
        }
    }
}
