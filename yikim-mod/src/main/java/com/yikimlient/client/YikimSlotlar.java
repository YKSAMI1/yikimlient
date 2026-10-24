package com.yikimlient.client;

import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * SLOT YÖNETİMİ (v1.12.0) — oyuncu başına AYRI rozet glifi.
 *
 * Her oyuncunun çizimi KENDİ font slotuna yazılır:
 *   slot 0 = standart Y (kimsenin çizimi yok)
 *   slot 1 = KENDİ çizimim; slot 2..SLOT_SONU = uzak oyuncular (presence b map)
 * Her slot ayrı font dosyasıdır (yikimlient:badge_s<k>) → ayrı sheet →
 * ölçülmüş x≡6 (mod 8) ofseti her sheet için aynıdır. Böylece birinin
 * çizimi diğerinin rozetinde ÇIKMAZ (v1.11.x tek-glif hatası).
 */
public final class YikimSlotlar {
    public static final int SLOT_SONU = 15;
    private static final Map<UUID, Integer> SLOT = new LinkedHashMap<UUID, Integer>();
    private static int sonrakiSlot = 1;
    private static boolean yuklendi;

    private YikimSlotlar() {
    }

    public static int slotOf(UUID id) {
        synchronized (SLOT) {
            Integer s = SLOT.get(id);
            return s == null ? 0 : s;
        }
    }

    /** Çizim ata (yoksa yeni slot). Kanvas doku güncellemesi tetiklenir. */
    public static synchronized void ata(UUID id, int[] pikseller) {
        if (id == null || pikseller == null || pikseller.length < YikimAtolye.UZUNLUK) {
            return;
        }
        int slot = 0;
        Integer mevcut = SLOT.get(id);
        if (mevcut == null) {
            if (sonrakiSlot > SLOT_SONU) {
                return; // slotlar dolu — nadir değil (16 oyuncu çizimi)
            }
            slot = sonrakiSlot++;
            SLOT.put(id, slot);
            kaydet();
        } else {
            slot = mevcut;
        }
        YikimRozetDoku.uygula(slot, pikseller);
    }

    public static synchronized void temizAta(UUID id) {
        if (id != null && SLOT.remove(id) != null) {
            kaydet();
        }
    }

    /// Gir çık / reload dayanıklılığı: slot haritasını .yikim'e yaz.
    private static void kaydet() {
        try {
            Path dosya = YikimBridge.stateDir().resolve("rozet-slotlar.json");
            StringBuilder cdf = new StringBuilder("{");
            boolean ilk = true;
            for (Map.Entry<UUID, Integer> e : SLOT.entrySet()) {
                if (!ilk) {
                    cdf.append(',');
                }
                cdf.append('"').append(e.getKey()).append("\":").append(e.getValue());
                ilk = false;
            }
            cdf.append('}');
            Files.writeString(dosya, cdf.toString(), StandardCharsets.UTF_8);
        }
        catch (Throwable ignored) {
            // kayıt başarısızlıkla rozet bozulmaz
        }
    }

    public static synchronized void yukle() {
        if (yuklendi) {
            return;
        }
        yuklendi = true;
        try {
            Path dosya = YikimBridge.stateDir().resolve("rozet-slotlar.json");
            String json = new String(Files.readAllBytes(dosya), StandardCharsets.UTF_8);
            int i = 0;
            while ((i = json.indexOf('"', i)) >= 0) {
                int son = json.indexOf('"', i + 1);
                if (son < 0) {
                    break;
                }
                String uuid = json.substring(i + 1, son);
                int ikiNokta = json.indexOf(':', son);
                int sonNokta = Math.min(json.indexOf(',', ikiNokta), json.indexOf('}', ikiNokta));
                if (ikiNokta >= 0 && sonNokta > ikiNokta) {
                    try {
                        int slot = Integer.parseInt(json.substring(ikiNokta + 1, sonNokta).trim());
                        if (slot >= 1 && slot <= SLOT_SONU) {
                            SLOT.put(UUID.fromString(uuid), slot);
                            if (slot >= sonrakiSlot) {
                                sonrakiSlot = slot + 1;
                            }
                        }
                    }
                    catch (IllegalArgumentException ignored) {
                        // bozuk girdi
                    }
                }
                i = son + 1;
            }
        }
        catch (Throwable ignored) {
            // dosya yok — normal ilk çalıştırma
        }
    }

    /// Sunucu listesi (kaydet sırası) — izin ekranı olarak bütün slotları görselleştirmek için.
    public static synchronized List<Map.Entry<UUID, Integer>> liste() {
        return new ArrayList<Map.Entry<UUID, Integer>>(SLOT.entrySet());
    }
}
