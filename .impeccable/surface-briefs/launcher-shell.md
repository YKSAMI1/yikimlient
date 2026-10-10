# Surface brief — launcher kabuğu (tüm sayfalar)

## Scope & mode
YIKIMLient'in tamamı: kabuk (titlebar, rail, içerik zemini) + home, instances, explore, news, settings. Mod: **Operate** — kullanıcı görevini hızla tamamlar (kur, oyna, çık).

## Audience & job
Türkiye'deki MC oyuncuları; günde 1-3 kez, oyun açılana kadar. Job: hesap gir → paket seç/kur → OYNA. Kanıt: canlı indirme durumu, kurulum listesi, log.

## Chosen direction & memorable moment
**Devre Panosu** (zarın atadığı yön, seed key fe9380ff): launcher bir devre panosu gibi davranır — her kurulum bir hat, RAM yükü amper gibi okunur, çöken oyun panoda flag atar. Kullanıcı kararı (brief-pinned, zarın üstünde): **dört dünya Ayarlar'dan tema olarak seçilebilir** — Devre Panosu varsayılan, Söküm Sahası / Anons Panosu / Kategori Standardı tam alternatif dünya temaları. Her tema kendi paleti, radius, hairline ve tipografi karakterini taşır; düzen ve bileşenler ortak kalır.

## Signature moves (dünyadan gelen tek hareket)
1. **Pilot lambası durumu**: her kurulumun solunda durum lambası (hazır=yeşil, indirme=amber pulse, hata=kırmızı) — durumu renk değil, konum+renk ikisiyle taşır.
2. **Kaskad sayaç**: canlı değerler (%/MB/s/RAM) sabit hücrelerde, tabular rakamlarla değişir; satır asla zıplamaz.
3. **Hairline cetvel**: tek device-pixel ayraçlar; kart yerine cetvelle bölünmüş hatlar.

## First viewport (home)
Standart rail + içerik. Üstte **hero hat**: seçili kurulum tek satırda — durum lambası, kurulum adı (büyük), sürüm+loader etiketi, RAM yükü çubuğu, mod sayısı; sağda **OYNA şalteri** (dolgu turuncu, keskin). Altında **hat defteri**: diğer kurulumlar cetvelle ayrılmış satırlar (kart grid'i YOK). En altta haber şeridi. Kurulum yoksa boş pano durumu + tek birincil eylem.

## Unresolved
Tek pencere korunuyor; promo bölümü home'dan çıkarıldı (haber şeridi yeterli).

## Direction contract
THESIS: Launcher bir devre panosudur — her kurulum bir hat, her ölçüm canlı bir gösterge, OYNA ana şalter; kategorinin varsayılan kart-grid dashboard'u reddedilir, cetvelle bölünmüş hat defteri gelir. OWN-WORLD: neredeyse-siyah mat zemin (#0e0e10 merdiveni), turuncu yalnız elektrik işaretlerinde (aktif lamba, OYNA şalteri, aktif cetvel), kırık beyaz tabular rakamlar, tek device-pixel hairline'lar, yuvarlak uçlu 1.5px ikonlar, sıfır süs gölgesi. STORY: Kullanıcı panoya bakar, hangi kurulumun hazır olduğunu lambadan okur, şalteri kaldırır; indirme varsa pano canlı sayılarla anlatır. FIRST VIEWPORT: rail (84px) + hero hat (~140px: lamba, ad, sürüm etiketi, RAM çubuğu, sağda OYNA şalteri) + hat defteri satırları (küçük lamba, ad, sürüm, son oynanış, satır sonu play) + haber şeridi; birincil eylem sağ üstte OYNA. FORM: atanan yön (Devre Panosu), 6 adaylık sıralamada 6. sırada, seed fe9380ff; brief-pinned ek: 3 challenger tam tema olarak Ayarlar'a girer. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
