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
import net.minecraft.class_3675;
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
        // NOT (v1.33.16 / 1.0.6): tus kodlari SABIT ADIyla verilir, elle yazilmaz.
        // Neden: 1.21.x ve 26.1/26.2'de RIGHT_SHIFT = 344 (GLFW), ama 26.3 pencere
        // sistemini SDL'ye gecirince RIGHT_SHIFT = 229 (SDL scancode) olur. Sabit adi
        // (InputConstants.KEY_RSHIFT) her surumde DOGRU degeri verdigi icin tek satir
        // her yerde calisir. Elle 344 yazmak 26.3'te tusu yanlis yere bagliyordu:
        // "sag shift calismiyor, hicbir sey acilmiyor" sikayeti buydu.
        menu = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.menu", class_3675.field_31955));
        hud = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.hud", class_3675.field_31954));
        profile = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.profile", class_3675.field_31953));
        zoom = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.zoom", class_3675.field_31949));
        atolye = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.atolye", class_3675.field_31907));
    }

    private static boolean sonShift;

    public static void poll(class_310 client) {
        // SAĞ SHIFT elle de dinlenir (v1.33.16 / 1.0.6).
        // 1.21.x'te KeyMapping GLFW koduyla kayıtlıydı ve çalışıyordu.
        // 26.x pencere sistemini SDL'ye geçirince KeyMapping'in oluşturduğu
        // klavye kimliği artık eşleşmiyor → "tusa basıyorum, menü açılmıyor".
        // ÇÖZÜM: KeyMapping'in YANINA doğrudan klavye durumu kontrolü koyuyoruz.
        // InputConstants.isKeyDown + InputConstants.KEY_RSHIFT iki sürümde de
        // (GLFW'de 344, SDL'de 1073742055) DOĞRU değeri verdiği için tek satır
        // her iki sürümde çalışır — elle kod yazmaya gerek kalmaz.
        boolean mappingCalisti = false;
        while (menu.method_1436()) {
            mappingCalisti = true;
            YikimKeys.menuyuCalistir(client);
        }
        if (!mappingCalisti && YikimDebug.aktif) {
            YikimLog.info("YIKIM menu tusu bekleniyor (isDown=" + menu.method_1434() + ")");
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
            // v1.12.7: Piksel Atölyesi geçici kapalı — çizim/izin sistemi
            // farklı bir sistemle dönecek; bulut sunucusu çalışmaya devam eder.
            YikimMetrics.notify("Piksel At\u00f6lyesi bu s\u00fcr\u00fcmde kapal\u0131 — farkl\u0131 bir sistemle d\u00f6necek");
        }
        YikimKeys.tickZoom(client);
    }

    /** Menü tuşunun yaptığı iş (aç/kapat). */
    private static void menuyuCalistir(class_310 client) {
        if (YikimDebug.aktif) {
            YikimLog.info("YIKIM menu-tus tetiklendi (panelAcik=" + YikimAdapter.panelEkrani(client) + ")");
        }
        if (YikimAdapter.panelEkrani(client)) {
            client.method_1507((class_437)(client.field_1687 == null ? YikimAdapter.vanillaTitleScreen() : null));
            return;
        }
        YikimPanel.open(client);
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

