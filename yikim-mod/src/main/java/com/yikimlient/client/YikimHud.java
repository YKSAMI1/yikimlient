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

    // ÖNBELLEK (v1.14.0 DÜZELTMESİ): burada AYRICA bir önbellek tutuluyordu ve
    // yalnız ekran boyutuna bakıyordu. Panelden bir HUD öğesi kapatılınca
    // YikimLayout.invalidate() çağrılıyor ama bu ikinci önbellek yenilenmediği
    // için öğe ekranda kalmaya devam ediyordu ("kapattım, gitmiyor").
    // YikimLayout.arrange() zaten kendi önbelleğini (boyut + font + sürüm)
    // tutuyor; doğrudan onu çağırmak hem doğru hem yeterince hızlı.
    private static List<YikimLayout.Slot> arrangeCached(class_327 font, int w, int h) {
        return YikimLayout.arrange(font, w, h);
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
                // ÇİFT KONTROL: düzen önbelleği bir şekilde bayatlasa bile
                // kapatılan öğe ÇİZİLMEZ ("kapattım, ekrandan gitmiyor").
                YikimConfig.WidgetState durum = config.widget(slot.widget.id());
                if (durum == null || !durum.enabled) {
                    continue;
                }
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

