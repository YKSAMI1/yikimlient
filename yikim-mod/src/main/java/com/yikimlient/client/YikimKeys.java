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
    // SURUMDEN BAGIMSIZ TUS KODLARI (v1.33.18 / 1.0.8).
    // Neden: 1.21.x ve 26.1/26.2'de RIGHT_SHIFT = 344 (GLFW), ama 26.3 pencere
    // sistemini SDL'ye gecirince RIGHT_SHIFT = 229 (SDL scancode) olur. Ayni sekilde
    // Esc/Tab/Enter/yon tuslari da 26.3'te tamamen farkli degerler alir.
    // Bu yuzden HICBIR yerde elle 344/256/258... yazilmaz: deger, o surumun
    // InputConstants sabitinden okunur ve tek yerde tutulur.
    public static final int MENU_TUS = class_3675.field_31955;
    public static final int HUD_TUS = class_3675.field_31954;
    public static final int PROFIL_TUS = class_3675.field_31953;
    public static final int ZOOM_TUS = class_3675.field_31949;
    public static final int ATOLYE_TUS = class_3675.field_31907;
    public static final int ESC_TUS = class_3675.field_31958;
    public static final int TAB_TUS = class_3675.field_31948;
    public static final int ENTER_TUS = class_3675.field_31957;
    public static final int NUMPAD_ENTER_TUS = class_3675.field_31980;
    public static final int BACKSPACE_TUS = class_3675.field_31986;
    public static final int SOL_OK_TUS = class_3675.field_31983;
    public static final int SAG_OK_TUS = class_3675.field_31984;

    public static class_304 menu;
    public static class_304 hud;
    public static class_304 profile;
    public static class_304 zoom;
    public static class_304 atolye;
    private static int fovBeforeZoom;

    private YikimKeys() {
    }

    public static void register() {
        menu = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.menu", MENU_TUS));
        hud = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.hud", HUD_TUS));
        profile = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.profile", PROFIL_TUS));
        zoom = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.zoom", ZOOM_TUS));
        atolye = KeyBindingHelper.registerKeyBinding((class_304)YikimAdapter.key("key.yikimlient.atolye", ATOLYE_TUS));
    }

    public static void poll(class_310 client) {
        // Menu tusu KeyMapping uzerinden dinlenir. Ekran acikken (ornegin ozel
        // ana menu) KeyMapping tiklamasi uretilmez; o durumda tus, ekranin
        // keyPressed yolundan MENU_TUS ile yakalanir (bkz. YikimMainMenu.key).
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

    /** Menü tuşunun yaptığı iş (aç/kapat). Ana menü de bu yolu kullanır. */
    static void menuyuCalistir(class_310 client) {
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

