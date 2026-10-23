/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.fabric.api.client.keybinding.v1.KeyBindingHelper
 *  net.minecraft.class_304
 *  net.minecraft.class_310
 *  net.minecraft.class_437
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimPanel;
import com.yikimlient.client.YikimPresets;
import net.fabricmc.fabric.api.client.keybinding.v1.KeyBindingHelper;
import net.minecraft.class_304;
import net.minecraft.class_310;
import net.minecraft.class_437;

public final class YikimKeys {
    public static class_304 menu;
    public static class_304 hud;
    public static class_304 profile;
    public static class_304 zoom;
    public static class_304 atolye;
    private static int fovBeforeZoom;

    private YikimKeys() {
    }

    public static void register() {
        menu = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.menu", 344));
        hud = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.hud", 345));
        profile = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.profile", 346));
        zoom = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.zoom", 342));
        atolye = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.atolye", 79));
    }

    public static void poll(class_310 client) {
        while (menu.method_1436()) {
            if (client.field_1755 instanceof YikimAdapter.ScreenBase) {
                client.method_1507((class_437)(client.field_1687 == null ? YikimAdapter.vanillaTitleScreen() : null));
                continue;
            }
            YikimPanel.open(client);
        }
        while (hud.method_1436()) {
            YikimConfig config = YikimConfig.get();
            config.hudEnabled = !config.hudEnabled;
            config.save();
            YikimMetrics.notify("HUD " + (config.hudEnabled ? "a\u00e7\u0131k" : "kapal\u0131"));
        }
        while (profile.method_1436()) {
            YikimPresets.cycle(client);
        }
        while (atolye.method_1436()) {
            client.method_1507(new YikimAtolyeEkrani());
        }
        YikimKeys.tickZoom(client);
    }

    private static void tickZoom(class_310 client) {
        boolean down = zoom.method_1434();
        if (down && fovBeforeZoom < 0) {
            fovBeforeZoom = (Integer)client.field_1690.method_41808().method_41753();
            client.field_1690.method_41808().method_41748(Integer.valueOf(30));
        } else if (!down && fovBeforeZoom >= 0) {
            if ((Integer)client.field_1690.method_41808().method_41753() == 30) {
                client.field_1690.method_41808().method_41748(Integer.valueOf(fovBeforeZoom));
            }
            fovBeforeZoom = -1;
        }
    }

    static {
        fovBeforeZoom = -1;
    }
}

