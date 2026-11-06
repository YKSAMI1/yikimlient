package com.yikimlient.client;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

/**
 * KOZMETİK VERİ KATMANI (v1.31.0).
 *
 * Kaynak: launcher'ın oyun açılışında yazdığı `.yikim/kozmetik-katalog.txt`.
 * Sekmeli satırlar:
 *
 *   D <id> <ad> <slim> <dosya>          deri (kendi kitaplığın)
 *   P <id> <ad> <hd>   <dosya>          YIKIM pelerini (atölyede yaptığın)
 *   K <id> <ad> <hd>   <dosya>          elitra (kanat)
 *   M <id> <ad> <aktif><dosya>          Mojang pelerini (HESABININ pelerinleri)
 *   A  <deri> <pelerin> <kanat>         seçili olanlar
 *   MA <mojang-id>                      seçili Mojang pelerini
 *
 * Seçim `.yikim/kozmetik-istek.txt` dosyasına yazılır (`tur<TAB>id`); launcher
 * ~1 sn içinde uygular. Ağ yok, doku basma yok: bu sınıf yalnızca veri tutar,
 * çizimi {@link YikimKozmetikEkrani} yapar.
 */
public final class YikimKozmetikSecim {
    public static final int DERI = 0;
    public static final int PELERIN = 1;
    public static final int MOJANG = 2;
    public static final int ELITRA = 3;
    public static final int SEKME_SAYISI = 4;

    static final String[] TUR = new String[]{"deri", "pelerin", "mojang", "kanat"};
    public static final String[] BASLIK = new String[]{"SKIN", "PELERİN", "MOJANG", "ELİTRA"};
    public static final String[] ALT_BASLIK = new String[]{
        "kendi deri kitaplığın", "YIKIM'de yaptığın pelerinler", "hesabının Mojang pelerinleri", "kanat tasarımların"};

    public static final class Oge {
        final String id;
        final String ad;
        final String dosya;
        final boolean slim;
        final boolean hd;

        Oge(String id, String ad, String dosya, boolean slim, boolean hd) {
            this.id = id;
            this.ad = ad;
            this.dosya = dosya;
            this.slim = slim;
            this.hd = hd;
        }

        public String id() {
            return this.id;
        }

        public String ad() {
            return this.ad;
        }

        public String dosya() {
            return this.dosya;
        }

        public boolean slim() {
            return this.slim;
        }
    }

    private static final List<List<Oge>> OGE = List.of(
        new ArrayList<Oge>(), new ArrayList<Oge>(), new ArrayList<Oge>(), new ArrayList<Oge>());
    private static String[] aktif = new String[]{"", "", ""};
    private static String mojangAktif = "";
    private static long damga = Long.MIN_VALUE;
    private static long sonOkuma;
    private static int sekme;
    private static final int[] SAYFA = new int[]{0, 0, 0, 0};
    private static String bekleyenTur = "";
    private static String bekleyenId = "";
    private static long bekleyenZaman;

    private YikimKozmetikSecim() {
    }

    public static int sekme() {
        return YikimKozmetikSecim.sekme;
    }

    public static void sekmeAyarla(int deger) {
        if (deger >= 0 && deger < SEKME_SAYISI) {
            YikimKozmetikSecim.sekme = deger;
        }
    }

    public static String aktifId(int tur) {
        if (tur >= 0 && tur < 3) {
            return YikimKozmetikSecim.aktif[tur];
        }
        if (tur == MOJANG) {
            return YikimKozmetikSecim.mojangAktif;
        }
        return "";
    }

    public static int sayfa(int tur) {
        return tur >= 0 && tur < SEKME_SAYISI ? YikimKozmetikSecim.SAYFA[tur] : 0;
    }

    public static void sayfaAyarla(int tur, int deger) {
        if (tur >= 0 && tur < SEKME_SAYISI) {
            YikimKozmetikSecim.SAYFA[tur] = Math.max(0, deger);
        }
    }

    public static List<Oge> liste(int tur) {
        if (tur < 0 || tur >= SEKME_SAYISI) {
            return List.of();
        }
        return YikimKozmetikSecim.OGE.get(tur);
    }

    private static Path katalog() {
        return YikimBridge.stateDir().resolve("kozmetik-katalog.txt");
    }

    /** Kataloğu (değiştiyse) oku. */
    public static void tazele() {
        try {
            Path yol = YikimKozmetikSecim.katalog();
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return;
            }
            long simdi = System.currentTimeMillis();
            if (simdi - YikimKozmetikSecim.sonOkuma < 800L) {
                return;
            }
            YikimKozmetikSecim.sonOkuma = simdi;
            long zaman = Files.getLastModifiedTime(yol, new LinkOption[0]).toMillis();
            if (zaman == YikimKozmetikSecim.damga) {
                return;
            }
            List<String> satirlar = Files.readAllLines(yol, StandardCharsets.UTF_8);
            for (List<Oge> liste : YikimKozmetikSecim.OGE) {
                liste.clear();
            }
            String[] secili = new String[]{"", "", ""};
            String mojang = "";
            for (String satir : satirlar) {
                String[] p = satir.split("\t", -1);
                if (p.length < 2) {
                    continue;
                }
                String tur = p[0].trim();
                if (tur.equals("A")) {
                    for (int i = 0; i < 3; ++i) {
                        secili[i] = i + 1 < p.length ? p[i + 1].trim() : "";
                    }
                    continue;
                }
                if (tur.equals("MA")) {
                    mojang = p[1].trim();
                    continue;
                }
                int indeks = switch (tur) {
                    case "D" -> DERI;
                    case "P" -> PELERIN;
                    case "M" -> MOJANG;
                    case "K" -> ELITRA;
                    default -> -1;
                };
                if (indeks < 0 || p.length < 5) {
                    continue;
                }
                String id = p[1].trim();
                if (id.isEmpty()) {
                    continue;
                }
                boolean bayrak = "1".equals(p[3].trim());
                // D: slim, P/K/M: hd
                YikimKozmetikSecim.OGE.get(indeks).add(
                    new Oge(id, p[2].trim(), p[4].trim(), indeks == DERI && bayrak, indeks != DERI && bayrak));
            }
            YikimKozmetikSecim.aktif = secili;
            YikimKozmetikSecim.mojangAktif = mojang;
            YikimKozmetikSecim.damga = zaman;
            if (!YikimKozmetikSecim.bekleyenTur.isEmpty()
                && YikimKozmetikSecim.aktifId(YikimKozmetikSecim.bekleyenTurIndeks()).equals(YikimKozmetikSecim.bekleyenId)) {
                YikimKozmetikSecim.bekleyenTur = "";
            }
            boolean slim = false;
            for (Oge oge : YikimKozmetikSecim.OGE.get(DERI)) {
                if (oge.id.equals(secili[0])) {
                    slim = oge.slim;
                    break;
                }
            }
            YikimKarakter.slimAyarla(slim);
        }
        catch (Throwable ignored) {
            // katalog okunamazsa mevcut hâl korunur
        }
    }

    private static int bekleyenTurIndeks() {
        for (int i = 0; i < TUR.length; ++i) {
            if (TUR[i].equals(YikimKozmetikSecim.bekleyenTur)) {
                return i;
            }
        }
        return -1;
    }

    /** Seçili (iyimser gösterim dahil) öğe kimliği. */
    public static String gorunen(int tur) {
        if (tur < 0 || tur >= SEKME_SAYISI) {
            return "";
        }
        if (YikimKozmetikSecim.bekleyenTur.equals(TUR[tur])
            && System.currentTimeMillis() - YikimKozmetikSecim.bekleyenZaman < 4000L) {
            return YikimKozmetikSecim.bekleyenId;
        }
        return YikimKozmetikSecim.aktifId(tur);
    }

    /** Seçimi yaz (id boş = kapat). */
    public static void sec(int tur, String id) {
        try {
            if (tur < 0 || tur >= SEKME_SAYISI) {
                return;
            }
            Path yol = YikimBridge.stateDir().resolve("kozmetik-istek.txt");
            Files.writeString(yol, TUR[tur] + "\t" + id + "\n", StandardCharsets.UTF_8);
            YikimKozmetikSecim.bekleyenTur = TUR[tur];
            YikimKozmetikSecim.bekleyenId = id;
            YikimKozmetikSecim.bekleyenZaman = System.currentTimeMillis();
            YikimMetrics.notify(id.isEmpty() ? "Kozmetik kapatıldı" : "Seçildi: " + id);
        }
        catch (Throwable e) {
            YikimLog.info("kozmetik istegi yazilamadi: " + e);
        }
    }
}
