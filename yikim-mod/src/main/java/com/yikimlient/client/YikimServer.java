package com.yikimlient.client;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.networking.v1.ServerPlayNetworking;
import net.minecraft.class_3222;

/**
 * YIKIMLient sunucu tarafı (v1.10.0).
 *
 * Aynı jar sunucunun mods klasörüne atılırsa (yönetici isterse) YIKIMLient
 * kullanıcıları bu sunucuda birbirini rozetle — Lunar'ın Apollo'ya benzer
 * sunucu-relay deseni. Ayrıca integrated server (tek oyunculu LAN) tarafında
 * da çalışır. Vanilla sunucuda koşmaz; istemci canSend=false ile sessizce
 * pas geçer.
 */
public final class YikimServer implements ModInitializer {
    private static final Set<class_3222> UYELER = new LinkedHashSet<class_3222>();

    public void onInitialize() {
        try {
            YikimNet.registerTypes();
            ServerPlayNetworking.registerGlobalReceiver(YikimNet.HELLO, (payload, ctx) -> {
                try {
                    class_3222 oyuncu = ctx.player();
                    if (oyuncu == null) {
                        return;
                    }
                    synchronized (UYELER) {
                        UYELER.add(oyuncu);
                    }
                    YikimServer.yayinla();
                }
                catch (Throwable ignored) {
                    // tek selamda patlama → tüm topluluk etkilenmesin
                }
            });
            YikimClient.LOGGER.info("YIKIM sunucu rozesi hazir: YIKIM oyunculari birbirini rozetler.");
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM sunucu tarafi kurulamadi: {}", problem.toString());
        }
    }

    /** Roster'ı tüm YIKIM üyelerine yollar; koptuğu saptananları listeden düşürür. */
    private static void yayinla() {
        List<class_3222> kopya;
        synchronized (UYELER) {
            kopya = new ArrayList<class_3222>(UYELER);
        }
        if (kopya.isEmpty()) {
            return;
        }
        String json = YikimNet.rosterJson(kopya);
        for (class_3222 member : kopya) {
            try {
                ServerPlayNetworking.send(member, new YikimNet.RosterPayload(json));
            }
            catch (Throwable problem) {
                synchronized (UYELER) {
                    UYELER.remove(member);
                }
            }
        }
    }
}
