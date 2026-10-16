/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_310
 *  net.minecraft.class_327
 *  net.minecraft.class_332
 *  net.minecraft.class_9779
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAbTest;
import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimLayout;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimPanel;
import com.yikimlient.client.YikimTheme;
import java.util.List;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_9779;

public final class YikimHud {
    private YikimHud() {
    }

    // PERFORMANS (v1.9.0): YikimLayout.arrange() her karede yeniden hesaplanıyordu
    // (pencere boyutu değişmeden sonuç aynı) — ekran boyutu değişmedikçe önbellekten döner.
    private static int cacheW = -1;
    private static int cacheH = -1;
    private static List<YikimLayout.Slot> cacheSlots = List.of();

    private static List<YikimLayout.Slot> arrangeCached(class_327 font, int w, int h) {
        if (w != YikimHud.cacheW || h != YikimHud.cacheH) {
            YikimHud.cacheW = w;
            YikimHud.cacheH = h;
            YikimHud.cacheSlots = YikimLayout.arrange(font, w, h);
        }
        return YikimHud.cacheSlots;
    }

    public static void render(class_332 graphics, class_9779 delta) {
        class_310 client = class_310.method_1551();
        YikimConfig config = YikimConfig.get();
        if (config.showDiagnostics || YikimAbTest.running()) {
            YikimMetrics.frame(client.field_1687 == null ? 3 : (client.field_1755 != null ? 2 : (config.hudEnabled ? 0 : 1)));
        }
        if (config.paused || YikimAbTest.hudOff()) {
            return;
        }
        if (client.field_1724 == null || client.field_1687 == null || client.field_1690.field_1842) {
            return;
        }
        if (YikimPanel.hudEditing()) {
            return;
        }
        long started = System.nanoTime();
        if (config.hudEnabled) {
            class_327 font = client.field_1772;
            List<YikimLayout.Slot> slots = YikimHud.arrangeCached(font, client.method_22683().method_4486(), client.method_22683().method_4502());
            for (YikimLayout.Slot slot : slots) {
                YikimAdapter.push(graphics, slot.x, slot.y, slot.scale);
                slot.widget.draw(graphics, font, false);
                YikimAdapter.pop(graphics);
            }
        }
        // (TAB rozeti KALDIRILDI — kullanıcı talebi)
        YikimMetrics.recordHudCost(System.nanoTime() - started);
        String notification = YikimMetrics.notification();
        if (!notification.isEmpty() && config.hudEnabled) {
            int width = client.method_22683().method_4486();
            YikimAdapter.textCentered(graphics, client.field_1772, notification, width / 2, 3, YikimTheme.accent, true);
        }
    }
}

