package com.yikimlient.client;

import com.mojang.authlib.GameProfile;
import java.util.ArrayDeque;
import java.util.UUID;
import net.fabricmc.fabric.api.client.message.v1.ClientReceiveMessageEvents;
import net.minecraft.class_2561;
import net.minecraft.class_310;

/**
 * İstemciden istemciye GÖRÜNMEZ el sıkışma (v1.10.4).
 *
 * VANİLLA sunucularda istemciler birbirine doğrudan veri yollayamaz — ama
 * sohbeti sunucu HERKESE yayar. YIKIMLient oyuncu dünyaya girince sohbete
 * yalnızca görünmez karakterlerden oluşan mini bir "ben YIKIM'im" paketi
 * yollar; diğer YIKIMLient istemcileri bunu yakalayıp göndereni rozetler.
 * Sunucuda mod olmasa bile çapraz rozet çalışır (LAN / WAN / vanilla).
 *
 * Protokol: [BASLA x3][sürüm 4 bit][UUID 128 bit][BASLA]
 *  - bitler: U+200C = 0, U+200D = 1; sınırlayıcı: U+200B
 *  - paket ~136 görünmez karakterdir; sohbette boş satır gibi görünür
 *  - ALLOW_CHAT ile bu satır KENDİ ekranında tamamen gizlenir (diğer
 *    vanilla oyuncular tek boş satır görür, başka bir şey olmaz)
 *
 * Yanıt kuralı: bilmediğimiz bir YIKIM oyuncusunun selamını alınca kendi
 * selamımızı KÜRESEL 5 sn soğumayla cevabız — cevap diğer yeni katılanlara
 * da ulaşır, böylece birkaç saniyede herkes herkesi öğrenir. Dünya
 * değişince sayfa sıfırlanır (YikimBadge.clear ile birlikte).
 *
 * GELECEK (özel rozet altyapısı): sürüm alanı (4 bit) artırılıp gövdeye
 * ek alanlar (kullanıcının seçtiği glif kodu vb.) eklenebilir — eski
 * istemciler bilinmeyen sürümü sessizce yutup yalnız UUID'yi işler.
 */
public final class YikimHandshake {
    private static final char BASLA = '\u200B';
    private static final char SIFIR = '\u200C';
    private static final char BIR = '\u200D';
    private static final int SURUM = 1;
    private static final long GONDERIM_GECIKMESI = 2000L;   // dünyaya girince bekle
    private static final long YANIT_SOGUMASI = 5000L;       // küresel cevap soğuması
    private static final long TAZELEME = 120000L;           // paket kaybına karşı

    private static final ArrayDeque<Long> GECIKMELI = new ArrayDeque<Long>();
    private static String dunyaAnahtari = "";
    private static long girdiZamani;
    private static long sonSelam;
    private static long sonYanit;

    private YikimHandshake() {
    }

    /// ALLOW_CHAT: el sıkışma paketi → ver, ekranda gösterme. Diğer her şey geçer.
    public static boolean allowVeYakala(class_2561 mesaj, GameProfile gonderen) {
        try {
            String duz = mesaj.getString();
            int baslangic = duz.indexOf(BASLA, 0);
            while (baslangic >= 0) {
                if (baslangic + 3 <= duz.length() - 1
                        && duz.charAt(baslangic + 1) == BASLA
                        && duz.charAt(baslangic + 2) == BASLA) {
                    UUID kim = cozumle(duz, baslangic + 3);
                    if (kim != null && gonderen != null && kim.equals(gonderen.id())
                            && !YikimBadge.markKnown(kim)) {
                        // YENİ bir YIKIM oyuncusu öğrendik → kendi selamımızı cevap kuyruğuna koy
                        synchronized (GECIKMELI) {
                            GECIKMELI.add(Long.valueOf(0L)); // hemen (soğuma tick'te denetlenir)
                        }
                    }
                    // paketi sohbetten gizle (birden fazla paket olabilir — ilk yeter)
                    return false;
                }
                baslangic = duz.indexOf(BASLA, baslangic + 1);
            }
        }
        catch (Throwable ignored) {
            // teşhisin oyunu bozma hakkı yok
        }
        return true;
    }

    /// Her tick: dünya değişimini izle, gecikmeli selamları yolla (ana thread).
    public static void tick(class_310 mc) {
        try {
            if (mc.field_1724 == null || mc.field_1687 == null || mc.method_1562() == null) {
                return;
            }
            // dünya/bağlantı anahtarı: ağ işleyicisi her bağlantıda yeniden kurulur
            String anahtar = System.identityHashCode(mc.method_1562())
                + "|" + System.identityHashCode(mc.field_1687);
            long simdi = System.currentTimeMillis();
            if (!anahtar.equals(dunyaAnahtari)) {
                dunyaAnahtari = anahtar;
                girdiZamani = simdi;
                synchronized (GECIKMELI) {
                    GECIKMELI.clear();
                }
                sonSelam = 0L;
                sonYanit = 0L;
            }
            synchronized (GECIKMELI) {
                while (!GECIKMELI.isEmpty()) {
                    Long when = GECIKMELI.peek();
                    long hedef = when == null ? 0L : when.longValue();
                    if (hedef > simdi) {
                        break;
                    }
                    GECIKMELI.poll();
                    selamGonder(mc, simdi);
                    return; // soğumalar tick başına bir gönderime izin verir
                }
            }
            // dünyaya girişte otomatik selam
            if (girdiZamani > 0L && simdi - girdiZamani >= GONDERIM_GECIKMESI
                    && simdi - sonSelam >= TAZELEME) {
                selamGonder(mc, simdi);
            }
        }
        catch (Throwable ignored) {
            // asla patlamayalım
        }
    }

    private static void selamGonder(class_310 mc, long simdi) {
        try {
            UUID ben = mc.field_1724.method_5667();
            String paket = paketle(ben);
            if (paket.isEmpty()) {
                return;
            }
            mc.field_1724.field_3944.method_45729(paket);
            sonSelam = simdi;
        }
        catch (Throwable ignored) {
            // sohbette olmayabilir (sunucu kısıtı) — sessiz geç
        }
    }

    /// UUID → görünmez paket: [BASLA x3][sürüm4bit][uuid128bit][BASLA]
    static String paketle(UUID kim) {
        try {
            StringBuilder sb = new StringBuilder(160);
            sb.append(BASLA).append(BASLA).append(BASLA);
            int surum = SURUM;
            for (int b = 3; b >= 0; b--) {
                sb.append(((surum >> b) & 1) == 1 ? BIR : SIFIR);
            }
            for (long parca : new long[]{kim.getMostSignificantBits(), kim.getLeastSignificantBits()}) {
                for (int b = 63; b >= 0; b--) {
                    sb.append(((parca >> b) & 1L) == 1L ? BIR : SIFIR);
                }
            }
            sb.append(BASLA);
            return sb.toString();
        }
        catch (Throwable problem) {
            return "";
        }
    }

    /// Metinden paket çözümle → UUID; değilse null.
    static UUID cozumle(String duz, int bas) {
        try {
            int i = bas;
            int surum = 0;
            for (int b = 0; b < 4; b++) {
                if (i >= duz.length()) {
                    return null;
                }
                char c = duz.charAt(i++);
                if (c == BASLA) {
                    return null; // sürüm bitiği içinde sınırlayıcı olamaz
                }
                surum = (surum << 1) | (c == BIR ? 1 : 0);
            }
            if (surum < 1) {
                return null;
            }
            long ust = 0L;
            long alt = 0L;
            for (int b = 0; b < 64; b++) {
                if (i >= duz.length()) {
                    return null;
                }
                char c = duz.charAt(i++);
                if (c != SIFIR && c != BIR) {
                    return null;
                }
                ust = (ust << 1) | (c == BIR ? 1L : 0L);
            }
            for (int b = 0; b < 64; b++) {
                if (i >= duz.length()) {
                    return null;
                }
                char c = duz.charAt(i++);
                if (c != SIFIR && c != BIR) {
                    return null;
                }
                alt = (alt << 1) | (c == BIR ? 1L : 0L);
            }
            if (i >= duz.length() || duz.charAt(i) != BASLA) {
                return null;
            }
            if (surum != 1) {
                // ileride sürüm 2'ye özel rozet alanları eklenir; UUID şimdiden geçerli
                return new UUID(ust, alt);
            }
            return new UUID(ust, alt);
        }
        catch (Throwable problem) {
            return null;
        }
    }
}
