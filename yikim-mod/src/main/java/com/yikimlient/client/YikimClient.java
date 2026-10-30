/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.api.ClientModInitializer
 *  net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientLifecycleEvents
 *  net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientTickEvents
 *  net.fabricmc.fabric.api.client.rendering.v1.HudRenderCallback
 *  net.minecraft.class_310
 *  net.minecraft.class_442
 *  org.slf4j.Logger
 *  org.slf4j.LoggerFactory
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAbTest;
import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimBridge;
import com.yikimlient.client.YikimCatalog;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimHud;
import com.yikimlient.client.YikimKeys;
import com.yikimlient.client.YikimLog;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimTheme;
import com.yikimlient.client.YikimUiMetrics;
import com.yikimlient.client.YikimWidgets;
import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientLifecycleEvents;
import net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientTickEvents;
import net.fabricmc.fabric.api.client.rendering.v1.HudRenderCallback;
import net.minecraft.class_310;
import net.minecraft.class_442;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class YikimClient
implements ClientModInitializer {
    public static final String MOD_ID = "yikimlient";
    public static final String MOD_VERSION = "1.15.0";
    public static final Logger LOGGER = LoggerFactory.getLogger((String)"YIKIM");
    private static boolean readyMarked;
    private static boolean firstJoinSeen;
    private static boolean menuLogged;

    public void onInitializeClient() {
        YikimConfig.get();
        YikimTheme.loadFromConfig();
        YikimTheme.sync();
        YikimKeys.register();
        // Kayıtlı özel rozet varsa glif dokusunu oyun açılışında devral
        YikimAtolye.yukle();
        if (YikimAtolye.dosyaVarMi()) {
            YikimAtolye.yukluysaUygula();
        }
        // Çapraz rozet (v1.10.5): Lunar tarzı PRESENCE servisi.
        // Sohbet kanalı el sıkışması KALDIRILDI (kutu karakterler + spam + kick).
        // Presence HTTPS ile çalışır; sohbete hiç dokunmaz, kick imkânsız.
        // Çifte emniyet: kurulum başarısız olsa da oyun MUTLAKA açılacak.
        try {
            YikimNet.clientInit();
        }
        catch (Throwable harmless) {
            LOGGER.warn("YIKIM rozet agi kurulamadi (oyun devam eder): {}", harmless.toString());
        }
        HudRenderCallback.EVENT.register(YikimHud::render);
        ClientTickEvents.END_CLIENT_TICK.register(YikimClient::tick);
        ClientLifecycleEvents.CLIENT_STOPPING.register(client -> {
            YikimLog.info("YIKIM kapan\u0131\u015f: g\u00fcnl\u00fck kuyru\u011fu bo\u015falt\u0131ld\u0131 (v1.3.1).");
            YikimLog.flushNow();
        });
        LOGGER.info("YIKIM Client {} haz\u0131r: {} HUD \u00f6\u011fesi, rozet motoru etkin, oyun ayarlar\u0131na kendili\u011finden dokunulmaz.", (Object)MOD_VERSION, (Object)YikimWidgets.all().size());
    }

    private static void tick(class_310 client) {
        boolean paused;
        if (client == null) {
            return;
        }
        long started = System.nanoTime();
        boolean bl = paused = YikimConfig.get().paused || YikimAbTest.modPaused();
        long now = System.currentTimeMillis();
        // PERFORMANS: disk/IO işlemleri yalnızca 1 sn'de bir — her tick'te ASLA
        if (!paused && now - lastHeavyTick >= 1000L) {
            lastHeavyTick = now;
            YikimTheme.sync();       // dosya mtime kontrolü (1/sn)
            YikimGuard.tick(client);  // ayar kontrolü (1/sn, içte 20 sn throttle)
            // v1.13.2: launcher rozeti oyun açıkken değiştirirse ~1 sn içinde yansısın
            YikimAtolye.degisiklikleriIzle();
        }
        // HAFİF işlemler her tick'te (yer bellek, disk YOK):
        YikimMetrics.tick(client);   // FPS sayacı + CPS + bildirimler (1 sn'de bir gerçek iş — v1.8.2'de yanlışlıkla çıkarılmıştı, HUD 0 gösteriyordu)
        YikimAbTest.tick(client);    // A/B faz ilerlemesi (çalışmıyorken anında döner)
        try {
            YikimNet.tick(client);   // rozet: dünya giriş/çıkış + selam (v1.10.1)
            YikimPresence.tick(client); // çapraz rozet: presence servisi (v1.10.5)
            // v1.12.4 KALICILIK: açılışta oyuncu henüz durmuyordu (kendim() null)
            // → kaydedilen çizim oyuna her girişte KENDİ slotuna yeniden basılır.
            // "Bir kez kaydet, değiştirene kadar hep görünsün" tam bu.
            boolean oyunda = client.field_1724 != null;
            if (oyunda && !oyundaydi) {
                // v1.13.0: yerel çizim varsa hem kendi glifine bas hem sunucuya
                // tazele — sunucu yeniden başlamış / ilk yükleme kaçmış olsa da
                // diğer oyuncular logoyu görür.
                YikimAtolye.sunucuyaTazele();
                // v1.13.2: giriş anında "şimdi sor" + hızlı pencere — TAB'daki
                // diğer YIKIM oyuncuları 5 sn beklenmeden rozetlenir.
                YikimPresence.hemenGonder();
            }
            oyundaydi = oyunda;
        }
        catch (Throwable ignored) {
            // tick'te asla patlamayalım
        }
        YikimKeys.poll(client);       // tuş algılama — her tick şart
        YikimClient.markReadyWhenPossible(client);
        // KATALOG TİCK KALDIRILDI — disk yoklaması Rust tarafında zaten var (spawn_catalog_watcher)
        // Bu satır oyunda her tick dosya kontrolü yapıyordu = FPS DÜŞÜŞÜ
        if (!paused) {
            YikimClient.installMainMenu(client);
        }
        YikimMetrics.recordTickCost(System.nanoTime() - started);
    }
    private static long lastHeavyTick;
    private static boolean oyundaydi;

    private static void installMainMenu(class_310 client) {
        if (!(client.field_1755 instanceof class_442) || !YikimConfig.get().customMainMenu) {
            return;
        }
        try {
            client.method_1507(YikimAdapter.titleScreen());
            if (!menuLogged) {
                menuLogged = true;
                LOGGER.info("YIKIM ana men\u00fcs\u00fc etkin: kod \u00e7izimli arka plan, doku ve mixin yok.");
            }
        }
        catch (Throwable problem) {
            LOGGER.warn("YIKIM ana men\u00fcs\u00fc a\u00e7\u0131lamad\u0131, vanilla men\u00fc korunuyor: {}", (Object)problem.toString());
        }
    }

    private static void markReadyWhenPossible(class_310 client) {
        boolean mainMenu;
        if (readyMarked) {
            YikimClient.markFirstJoin(client);
            return;
        }
        boolean bl = mainMenu = client.field_1755 != null || client.field_1724 == null;
        if (mainMenu || client.field_1687 != null) {
            readyMarked = true;
            YikimBridge.markReady(client.field_1687 != null ? "dunya" : "ana-menu");
            // Discord presence'i OYUN SÜRECİNDEN gönder (launcher'dan değil):
            // RPC, javaw algılamasının önüne geçer → başlık "YIKIMLient" olur;
            // klip yine Minecraft'ı kaydeder. Yerel pipe — internet YOK.
            if (client.field_1687 == null) {
                YikimDiscord.setMenu();
            } else {
                YikimDiscord.setPlaying();
            }
        }
        YikimClient.markFirstJoin(client);
    }

    private static void markFirstJoin(class_310 client) {
        if (firstJoinSeen || client.field_1687 == null || client.field_1755 != null) {
            return;
        }
        firstJoinSeen = true;
        // Discord presence: dünyaya/sunucuya girildi → "YIKIMLient ile oynuyor"
        YikimDiscord.setPlaying();
        YikimConfig config = YikimConfig.get();
        if (config.openOnFirstJoin) {
            YikimMetrics.notify("YIKIM paneli: Sa\u011f Shift");
        }
    }
}

