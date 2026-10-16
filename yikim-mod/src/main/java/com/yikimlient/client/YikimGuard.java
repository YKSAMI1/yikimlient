package com.yikimlient.client;

import net.minecraft.class_310;

/**
 * Düşük FPS Danışmanı (v1.9.0 — eski "Performans Bekçisi" sadeleştirildi).
 *
 * ESKİ DAVRANIŞ KALDIRILDI: Guard her 20 sn'de kullanıcının maxFps/vsync/
 * renderDistance ayarlarını aktif profile geri zorluyordu. Bu, "mod yalnızca
 * FPS artırmalı; kullanıcının başka hiçbir ayarına dokunmamalı" ilkesine
 * aykırıydı ve oyuncunun tercihlerini eziyordu.
 *
 * YENİ GÖREV — sadece öneri: oyun içinde FPS < 60 sürekli 10 saniye kalırsa
 * oturum boyunca BİR KEZ "Performans profilini dene" önerir. Hiçbir ayara
 * dokunmaz, hiçbir dosya yazmaz, asla istisna fırlatmaz.
 */
public final class YikimGuard {
    private static final int LOW_FPS_THRESHOLD = 60;
    private static final int LOW_FPS_TICKS = 200;

    private static int lowFpsStreak;
    private static boolean lowFpsAdvised;

    private YikimGuard() {
    }

    public static void tick(class_310 client) {
        try {
            YikimGuard.adviseLowFps(client);
        }
        catch (Throwable ignored) {
            // bekçi asla oyunu etkilemez
        }
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
