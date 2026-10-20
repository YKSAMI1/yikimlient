package com.yikimlient.client;

import java.util.UUID;
import net.fabricmc.fabric.api.client.networking.v1.ClientPlayNetworking;
import net.fabricmc.fabric.api.networking.v1.PayloadTypeRegistry;
import net.minecraft.class_310;
import net.minecraft.class_3222;
import net.minecraft.class_8710;
import net.minecraft.class_9129;
import net.minecraft.class_9139;
/**
 * YIKIM rozet ağı (v1.10.0) — selam/roster protokolü.
 *
 * KANAL: "yikimlient:hello" (C2S, boş) + "yikimlient:roster" (S2C, JSON liste).
 *
 * - İstemci dünyaya girince bir kere selam yollar (yalnız sunucunun kanalı
 *   tanıdığı durumda — canSend; vanilla sunucuda sessizce pas, log bile yok).
 * - Sunucu tarafı (YikimServer, aynı jar) selamı alınca o sunucudaki tüm
 *   YIKIM oyuncularına roster yollar → her istemci o uuid'leri rozetler.
 * - Payload tür kaydı hem istemci hem sunucuda çağrılır; integrated server'da
 *   çift kayıt olmaması için istisnalar yutulur.
 */
public final class YikimNet {
    public static final class_8710.class_9154<HelloPayload> HELLO = class_8710.method_56483("yikimlient:hello");
    public static final class_8710.class_9154<RosterPayload> ROSTER = class_8710.method_56483("yikimlient:roster");

    static final class_9139<class_9129, HelloPayload> HELLO_CODEC = class_9139.method_56431(new HelloPayload());
    static final class_9139<class_9129, RosterPayload> ROSTER_CODEC = new class_9139<class_9129, RosterPayload>() {
        public RosterPayload decode(class_9129 buf) {
            return new RosterPayload(buf.method_10800(200000));
        }

        public void encode(class_9129 buf, RosterPayload payload) {
            buf.method_10788(payload.json(), 200000);
        }
    };

    private static boolean wasInWorld;
    private static int helloCountdown;

    private YikimNet() {
    }

    /** İstemci tarafı: payload türleri + roster alıcı. YikimClient.onInitializeClient'tan çağrılır. */
    public static void clientInit() {
        registerTypes();
        try {
            ClientPlayNetworking.registerGlobalReceiver(ROSTER, (payload, ctx) -> {
                try {
                    YikimBadge.setKnown(payload.json());
                }
                catch (Throwable ignored) {
                    // bozuk roster → rozet yok
                }
            });
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM rozet alicisi kurulamadi: {}", problem.toString());
        }
    }

    /** Payload türlerini kaydet — hem istemci hem sunucu çağırır, çift kayıt yutulur. */
    public static void registerTypes() {
        try {
            PayloadTypeRegistry.playC2S().register(HELLO, HELLO_CODEC);
        }
        catch (Throwable ignored) {
            // zaten kayıtlı (integrated server) — sorun değil
        }
        try {
            PayloadTypeRegistry.playS2C().register(ROSTER, ROSTER_CODEC);
        }
        catch (Throwable ignored) {
            // zaten kayıtlı
        }
    }

    /** Dünya giriş/çıkış takibi + selam gönderimi. YikimClient.tick'ten çağrılır (her tick, ucuz). */
    public static void tick(class_310 client) {
        try {
            boolean inWorld = client.field_1687 != null;
            if (inWorld && !wasInWorld) {
                helloCountdown = 60; // 3 sn — sunucu kanal listesi otursun
            }
            if (!inWorld && wasInWorld) {
                YikimBadge.clear();
            }
            wasInWorld = inWorld;
            if (helloCountdown > 0 && --helloCountdown == 0 && inWorld) {
                if (ClientPlayNetworking.canSend(HELLO)) {
                    // sunucu bu kanalı tanıyor (bizim jar/relay kurulu) → selam
                    ClientPlayNetworking.send(new HelloPayload());
                }
                // tanımıyorsa sessizce pas — vanilla sunucuda hiçbir gürültü yok
            }
        }
        catch (Throwable ignored) {
            helloCountdown = 0;
        }
    }

    /** Sunucu tarafı: üye listesinden roster JSON (en fazla 64 kişi). */
    public static String rosterJson(Iterable<class_3222> members) {
        StringBuilder b = new StringBuilder(160);
        b.append("{\"p\":[");
        boolean first = true;
        int count = 0;
        for (class_3222 member : members) {
            if (count >= 64) {
                break;
            }
            try {
                UUID id = member.method_5667();
                String name = member.method_5476().getString();
                if (id == null || name == null || name.isEmpty()) {
                    continue;
                }
                if (!first) {
                    b.append(',');
                }
                first = false;
                ++count;
                b.append("[\"").append(id).append("\",\"").append(name).append("\"]");
            }
            catch (Throwable ignored) {
                // tuhaf üye — atla
            }
        }
        b.append("]}");
        return b.toString();
    }

    /** C2S: boş selam (sunucu ctx.player()'ı zaten biliyor). */
    public record HelloPayload() implements net.minecraft.class_8710 {
        public net.minecraft.class_8710.class_9154<? extends net.minecraft.class_8710> method_56479() {
            return HELLO;
        }
    }

    /** S2C: roster — {"p":[["uuid","name"],...]} */
    public record RosterPayload(String json) implements net.minecraft.class_8710 {
        public net.minecraft.class_8710.class_9154<? extends net.minecraft.class_8710> method_56479() {
            return ROSTER;
        }
    }
}
