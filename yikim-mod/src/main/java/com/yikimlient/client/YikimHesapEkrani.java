package com.yikimlient.client;

import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;
import net.minecraft.class_442;

import java.util.ArrayList;
import java.util.List;

/**
 * OYUN İÇİ HESAP EKRANI (v1.27.0).
 *
 * Ana menüdeki "Hesap" düğmesinden açılır; launcher'daki kayıtlı hesapları
 * listeler ve tıklanan hesabı oyunun oturumuna ANINDA uygular. Değişim
 * launcher'ın ürettiği taze jetonla yapıldığı için premium ↔ çevrimdışı
 * arasında gidip gelmek yeniden başlatma gerektirmez; isim, UUID, deri ve
 * oyuncuya bağlı kozmetikler yeni hesaba göre yüklenir.
 */
public final class YikimHesapEkrani extends class_437 {
    private final List<YikimHesaplar.Hesap> hesaplar;
    private String aktif;
    private String durum = "";
    private boolean mesgul;
    private long durumAt;
    private int listeX;
    private int listeY;
    private int yenileX;
    private int yenileY;
    private int kapatX;
    private static final int SATIR_H = 26;
    private static final int SATIR_ARASI = 5;
    private static final int LISTE_GENISLIK = 320;

    public YikimHesapEkrani() {
        super(class_2561.method_43470("YIKIM Hesaplar"));
        this.hesaplar = new ArrayList<>(YikimHesaplar.liste());
        this.aktif = YikimHesaplar.aktifId();
    }

    @Override
    public boolean method_25422() {
        return false;
    }

    @Override
    public void method_25394(class_332 graphics, int mouseX, int mouseY, float delta) {
        class_327 font = this.field_22793;
        this.listeX = Math.max(20, (this.field_22789 - LISTE_GENISLIK) / 2);
        this.listeY = 52;
        graphics.method_25294(0, 0, this.field_22789, this.field_22790, 0xC80A0A0E);

        YikimAdapter.text(graphics, font, "HESAP DEĞİŞTİR", this.listeX, 18, YikimTheme.TEXT, true);
        YikimAdapter.text(graphics, font,
            "Tıkla → oturum anında değişir (premium / çevrimdışı). Yeniden başlatma gerekmez.",
            this.listeX, 34, YikimTheme.TEXT_DIM, false);

        if (this.hesaplar.isEmpty()) {
            graphics.method_25294(this.listeX, this.listeY, this.listeX + LISTE_GENISLIK, this.listeY + 42, 0x30101418);
            YikimAdapter.text(graphics, font, "Kayıtlı hesap yok — launcher'dan hesap ekle.", this.listeX + 10, this.listeY + 14, YikimTheme.TEXT_DIM, false);
        }

        String oturumAdi = YikimHesaplar.aktifAd(class_310.method_1551());
        for (int i = 0; i < this.hesaplar.size(); i++) {
            YikimHesaplar.Hesap h = this.hesaplar.get(i);
            int y = this.listeY + i * (SATIR_H + SATIR_ARASI);
            boolean imlec = mouseX >= this.listeX && mouseX < this.listeX + LISTE_GENISLIK
                && mouseY >= y && mouseY < y + SATIR_H;
            boolean buAktif = h.ad.equalsIgnoreCase(oturumAdi) || h.id.equals(this.aktif);
            int dolgu = buAktif ? YikimTheme.alpha(YikimTheme.accent, 46) : (imlec ? 0x30FFFFFF : 0x20101418);
            YikimDraw.roundedFill(graphics, this.listeX, y, this.listeX + LISTE_GENISLIK, y + SATIR_H, dolgu);
            if (buAktif) {
                YikimDraw.outline(graphics, this.listeX, y, LISTE_GENISLIK, SATIR_H, YikimTheme.alpha(YikimTheme.accent, 150));
            }
            // hesap simgesi
            YikimMenuIcons.draw(graphics, YikimMenuIcons.KULLANICI, this.listeX + 9, y + 7, 12, buAktif ? YikimTheme.accent : YikimTheme.TEXT_DIM);
            YikimAdapter.text(graphics, font, kisalt(h.ad, 18), this.listeX + 28, y + 6, YikimTheme.TEXT, buAktif);
            // tür rozeti
            int rozetRenk = h.premium() ? YikimTheme.accent : YikimTheme.TEXT_MUTED;
            String rozet = h.turEtiketi();
            int rozetGenislik = font.method_1727(rozet) + 10;
            int rozetX = this.listeX + LISTE_GENISLIK - rozetGenislik - 8;
            YikimDraw.roundedFill(graphics, rozetX, y + 7, rozetX + rozetGenislik, y + 19, YikimTheme.alpha(rozetRenk, 40));
            YikimAdapter.text(graphics, font, rozet, rozetX + 5, y + 9, rozetRenk, false);
            if (buAktif) {
                YikimAdapter.text(graphics, font, "AKTIF", this.listeX + 28, y + 16, YikimTheme.alpha(YikimTheme.accent, 200), false);
            }
        }

        int alt = this.listeY + this.hesaplar.size() * (SATIR_H + SATIR_ARASI) + 12;
        this.yenileX = this.listeX;
        this.yenileY = alt;
        this.kapatX = this.listeX + 108;
        butonCiz(graphics, font, this.yenileX, this.yenileY, 100, "Yenile",
            icinde(mouseX, mouseY, this.yenileX, this.yenileY, 100, 20), YikimTheme.TEXT_DIM);
        butonCiz(graphics, font, this.kapatX, this.yenileY, 100, "Kapat",
            icinde(mouseX, mouseY, this.kapatX, this.yenileY, 100, 20), YikimTheme.TEXT_DIM);

        String mesaj = this.durum;
        if (!mesaj.isEmpty()) {
            YikimAdapter.text(graphics, font, mesaj, this.listeX, alt + 28,
                this.mesgul ? YikimTheme.WARN : YikimTheme.TEXT_DIM, true);
        }
        YikimAdapter.text(graphics, font, "Esc: ana menü", this.listeX, this.field_22790 - 20, YikimTheme.TEXT_MUTED, false);
    }

    private void butonCiz(class_332 graphics, class_327 font, int x, int y, int w, String etiket, boolean uzerinde, int renk) {
        YikimDraw.roundedFill(graphics, x, y, x + w, y + 20, uzerinde ? 0x30FFFFFF : 0x20101418);
        YikimDraw.outline(graphics, x, y, w, 20, YikimTheme.alpha(renk, 120));
        YikimAdapter.textCentered(graphics, font, etiket, x + w / 2, y + 6, YikimTheme.TEXT, false);
    }

    private static boolean icinde(double mx, double my, int x, int y, int w, int h) {
        return mx >= x && mx < x + w && my >= y && my < y + h;
    }

    private static String kisalt(String metin, int sinir) {
        if (metin == null) {
            return "";
        }
        return metin.length() <= sinir ? metin : metin.substring(0, sinir - 1) + "…";
    }

    @Override
    public boolean method_25402(net.minecraft.class_11909 tik, boolean cift) {
        if (this.mesgul) {
            return true;
        }
        double mx = tik.comp_4798();
        double my = tik.comp_4799();
        if (tik.comp_4800().comp_4797() != 0) {
            return super.method_25402(tik, cift);
        }
        if (icinde(mx, my, this.yenileX, this.yenileY, 100, 20)) {
            this.hesaplar.clear();
            this.hesaplar.addAll(YikimHesaplar.liste());
            this.aktif = YikimHesaplar.aktifId();
            this.durum = "Liste tazelendi (" + this.hesaplar.size() + " hesap)";
            this.durumAt = System.currentTimeMillis();
            return true;
        }
        if (icinde(mx, my, this.kapatX, this.yenileY, 100, 20)) {
            class_310.method_1551().method_1507(new class_442());
            return true;
        }
        for (int i = 0; i < this.hesaplar.size(); i++) {
            int y = this.listeY + i * (SATIR_H + SATIR_ARASI);
            if (mx >= this.listeX && mx < this.listeX + LISTE_GENISLIK && my >= y && my < y + SATIR_H) {
                this.hesabiUygula(this.hesaplar.get(i));
                return true;
            }
        }
        return super.method_25402(tik, cift);
    }

    /**
     * Oturum değiştirme: launcher cevabı beklenirken oyun thread'i bloklanmasın
     * diye ayrı iş parçacığı; oturum alanı yazımı ve liste tazeleme tekrar oyun
     * thread'ine (`mc.execute`) döner.
     */
    private void hesabiUygula(YikimHesaplar.Hesap hesap) {
        final class_310 mc = class_310.method_1551();
        final String hedefId = hesap.id;
        if (hesap.ad.equalsIgnoreCase(YikimHesaplar.aktifAd(mc))) {
            this.durum = "Zaten bu hesaptasın: " + hesap.ad;
            this.durumAt = System.currentTimeMillis();
            return;
        }
        this.mesgul = true;
        this.durum = "Hesap değiştiriliyor: " + hesap.ad + " …";
        this.durumAt = System.currentTimeMillis();
        Thread isci = new Thread(() -> {
            boolean tamam = YikimHesaplar.degistir(mc, hedefId);
            String hata = YikimHesaplar.sonHata;
            String ad = YikimHesaplar.sonAd;
            mc.execute(() -> {
                this.mesgul = false;
                this.hesaplar.clear();
                this.hesaplar.addAll(YikimHesaplar.liste());
                this.aktif = YikimHesaplar.aktifId();
                if (tamam) {
                    this.aktif = hedefId;
                    this.durum = "Aktif hesap: " + ad + " — kozmetikler yeni hesaba göre yüklendi";
                } else {
                    this.durum = "Değiştirilemedi: " + (hata.isEmpty() ? "bilinmeyen hata" : hata);
                }
                this.durumAt = System.currentTimeMillis();
            });
        }, "YIKIM-HesapDegistir");
        isci.setDaemon(true);
        isci.start();
    }

    @Override
    public boolean method_25404(net.minecraft.class_11908 tus) {
        if (tus.comp_4795() == 256) {
            class_310.method_1551().method_1507(new class_442());
            return true;
        }
        return super.method_25404(tus);
    }
}
