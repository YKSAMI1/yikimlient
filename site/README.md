# YIKIMLient tanıtım sitesi

Launcher'ın tanıtım sayfası. Build adımı yok, tamamen statik: HTML + CSS + bir JS dosyası.
Herhangi bir statik hosting'de (Vercel, Netlify, GitHub Pages, Cloudflare Pages) aynen çalışır.

## Dosyalar

| Dosya | İş |
|---|---|
| `index.html` | Sayfanın tamamı: hero, indirme kutusu, özellikler, güven, ekran görüntüleri, S.S.S., yasal metin |
| `style.css` | Koyu tema, animasyonlar, mobil düzen |
| `main.js` | Platform seçimi, GitHub'dan sürüm/dosya çözümü, kaydırma animasyonu, mobil menü |
| `logo.png` | 128 px logo |
| `shots/` | Launcher ekran görüntüleri |
| `vercel.json` | Statik dağıtım + güvenlik başlıkları + önbellek |
| `robots.txt` | Arama motoru izinleri |

## Yerelde önizleme

```bash
node tools/site-sunucu.mjs 8899
# http://127.0.0.1:8899
```

`index.html`'i doğrudan çift tıklamak çalışmaz: sayfa kök-göreli (`/style.css`) yollar kullanır.

## İndirme düğmesi nasıl çalışır?

1. `api.github.com/repos/YKSAMI1/yikimlient/releases?per_page=10` çağrılır.
2. Her platform için **dosyası olan en yeni sürüm** seçilir:
   - Windows → `.exe`
   - Linux → `.AppImage`
   - Debian → `.deb`
3. Düğme doğrudan `github.com/.../releases/download/...` adresine gider.
4. Sonuç 10 dakika `localStorage`'ta tutulur (GitHub'ın saatlik istek sınırı için).
5. API'ye ulaşılamazsa `releases/latest` sayfasına düşer; site yine çalışır.

Yeni sürüm yayınlandığında sitede değişiklik gerekmez; sürüm ve boyut kendiliğinden güncellenir.

## Vercel'e yayınlama (önerilen)

1. <https://vercel.com/new> → **Import Git Repository** → `YKSAMI1/yikimlient`.
2. Ayarlar:
   - **Framework Preset:** `Other`
   - **Root Directory:** `site`
   - **Build Command:** boş
   - **Output Directory:** boş (kök)
3. **Deploy**. Adres: `https://yikimlient.vercel.app`.
4. İsteğe bağlı: Project → Settings → Domains → kendi alan adını bağla.

`vercel.json` güvenlik başlıklarını (`nosniff`, `SAMEORIGIN`, `Referrer-Policy`,
`Permissions-Policy`) ve önbellek kurallarını otomatik uygular.

## Netlify (drag & drop, komut yok)

<https://app.netlify.com/drop> → `site` klasörünü sürükle bırak. Adres `*.netlify.app` olur.

## GitHub Pages (alternatif)

Depo → Settings → Pages → Source: **GitHub Actions** yerine **Deploy from a branch** →
Branch: `main`, Folder: `/site`. Adres: `https://yksami1.github.io/yikimlient/`.
Not: `vercel.json` GitHub Pages'te yok sayılır; güvenlik başlıkları uygulanmaz.

## Ücretsiz alan adı seçenekleri

| Seçenek | Adres örneği | Not |
|---|---|---|
| Vercel alt alan adı | `yikimlient.vercel.app` | Anında, ücretsiz, yeterli |
| Netlify alt alan adı | `yikimlient.netlify.app` | Anında, ücretsiz |
| is-a.dev | `yikimlient.is-a.dev` | GitHub PR ile ücretsiz; DNS Vercel'e yönlendirilir |
| js.org | `yikimlient.js.org` | npm paketi gerektirir; proje için uygun değil |
| eu.org | `yikimlient.eu.org` | Ücretsiz ama onay haftalar sürebilir |

Alan adı alındığında `index.html` içindeki `og:image` ve canonical adresleri güncellenmeli.

## Yayın öncesi kontrol listesi

- [ ] `node tools/site-sunucu.mjs` ile açılıyor, konsolda hata yok
- [ ] İndirme düğmesi üç platformda da gerçek dosyaya gidiyor
- [ ] Ekran görüntüleri yükleniyor (`/shots/*.png` 200)
- [ ] Mobil genişlikte yatay kaydırma yok
- [ ] S.S.S. ve yasal metin okunuyor
- [ ] GitHub deposu herkese açık (indirme bağlantıları için şart)
- [ ] Sahibin onayı alındı — **onaysız yayın yok**

## Notlar

- Site hiçbir dosya barındırmaz; tüm indirmeler GitHub Releases'e gider.
- Analitik, çerez, reklam yok. Hiçbir üçüncü taraf betiği yüklenmez (yalnızca Google Fonts).
- Yayın sonrası Discord profiline `https://…` adresi elle yazılır.
