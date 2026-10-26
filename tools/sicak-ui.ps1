# YIKIM - SICAK UI YAYINLAMA (launcher aroyuzu derlemesiz gunceller)
#
# Kullanim:
#   powershell -ExecutionPolicy Bypass -File tools\sicak-ui.ps1 -Surum "0.3.40"
#   (isteg bagli: -Notlar "ne degisti")
#
# Ne yapar:
#   1. vite build + resources/ui hazirlar (ui-dist.ps1)
#   2. ui-<Surum>.zip paketler, sha256 hesaplar
#   3. CANLI sicak.json'u okur -> mods'a DOKUNMAZ, sadece kaynaklar[ui] yazar
#   4. zip + manifest'i GitHub "sicak" release'ine yukler (--clobber)
#   5. API uzerinden dogrular (mods korundi mi, ui girisi yerinde mi)
#
# Launcher tarafinda calisan yol (v0.3.39+):
#   acilista sicak.json -> kaynaklar["ui"] -> zip indir, sha dogrula,
#   %APPDATA%\.yikimlient\ui\<Surum>\ ac -> aktif.json -> sonraki acilista
#   http://yikim.localhost uzerinden yeni arayuz. EXE DERLEME GEREKMEZ.
#
# Onemli: mods girdileri ASLA ezilmez (yazim anindaki canli degerler korunur;
# yoksa eski script sureci mods'u geri kaydirir). exp alani da tazelenir -
# launcher'in "bayat manifest" korumasi tetiklenmesin.
#
# NOT: SADECE ASCII (PS 5.1 kurali).
param(
    [Parameter(Mandatory=$true)][string]$Surum,
    [string]$Notlar = ""
)
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
Set-Location $kok
$repo = "YKSAMI1/yikimlient"

Write-Host "[1/6] UI hazirlaniyor (vite build + resources/ui + surum.txt)"
powershell -ExecutionPolicy Bypass -File (Join-Path $kok "tools\ui-dist.ps1") | Select-Object -Last 2
$ui = Join-Path $kok "src-tauri\resources\ui"
if (-not (Test-Path (Join-Path $ui "index.html"))) { Write-Host "UI DIST YOK - durduruluyor"; exit 1 }
$kokSurum = [IO.File]::ReadAllText((Join-Path $ui "surum.txt")).Trim()
Write-Host "      kaynak surum.txt: $kokSurum (bilgi amacli; kanal surumu parametreden gelir)"

# paket icindeki surum.txt = kanal surumu (gomulu surumle karisik olmasin)
[System.IO.File]::WriteAllText((Join-Path $ui "surum.txt"), $Surum, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[2/6] zip + sha256"
$zip = Join-Path $env:TEMP "ui-$Surum.zip"
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $ui "*") -DestinationPath $zip -CompressionLevel Optimal
$sha = (Get-FileHash -Path $zip -Algorithm SHA256).Hash.ToLower()
Write-Host "      paket: ui-$Surum.zip ($([Math]::Round((Get-Item $zip).Length/1MB,2)) MB)"

Write-Host "[3/6] canli sicak.json okunuyor (mods koruma altinda)"
($relYaz = gh release view sicak --repo $repo 2>&1 | ForEach-Object { $_.ToString() }) | Out-Null
$relVar = ($LASTEXITCODE -eq 0)
if (-not $relVar) { Write-Host "sicak release yok - once tools\sicak.ps1 ile mod kanalini kur"; exit 1 }
$rel = gh api "repos/$repo/releases/tags/sicak" | ConvertFrom-Json
$id = ($rel.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
if (-not $id) { Write-Host "sicak.json asset yok"; exit 1 }
$canli = gh api "repos/$repo/releases/assets/$id" --header 'Accept: application/octet-stream' | ConvertFrom-Json
if (-not $canli.v -or -not $canli.mods) { Write-Host "canli manifest bozuk - durduruluyor"; exit 1 }
$modsBefore = $canli.mods.Count
$modVerBefore = $canli.mods[0].modVersion

# kaynaklar: eski 'ui' girisini sil (diger turleri koru), yenisini ekle
$klr = @()
foreach ($k in @($canli.kaynaklar)) { if ($k.tur -ne 'ui') { $klr += $k } }
$uurl = "https://github.com/$repo/releases/download/sicak/ui-$Surum.zip"
$klr += @{ tur = 'ui'; dosya = "ui-$Surum.zip"; surum = $Surum; url = $uurl; sha256 = $sha }
if ($Notlar -ne "") { $canli.not = $Notlar }
$exp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$yeni = @{ v = $canli.v; exp = $exp; not = $canli.not; mods = $canli.mods; kaynaklar = $klr }
$tempJson = Join-Path $env:TEMP "sicak.json"
[System.IO.File]::WriteAllText($tempJson, ($yeni | ConvertTo-Json -Depth 10), (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[4/6] 'sicak' release'e yukleme (--clobber: manifest + ui paketi)"
gh release upload sicak $tempJson $zip --clobber | Select-Object -First 2

Write-Host "[5/6] dogrulama (API uzerinden)"
$rel2 = gh api "repos/$repo/releases/tags/sicak" | ConvertFrom-Json
$id2 = ($rel2.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
$canli2 = gh api "repos/$repo/releases/assets/$id2" --header 'Accept: application/octet-stream' | ConvertFrom-Json
$uiE = @($canli2.kaynaklar) | Where-Object { $_.tur -eq 'ui' } | Select-Object -First 1
if (-not $uiE) { Write-Host "DOGRLAMA HATA: kaynaklar[ui] yok"; exit 1 }
if ($uiE.surum -ne $Surum) { Write-Host "DOGRLAMA HATA: ui surum eslesmiyor ($($uiE.surum))"; exit 1 }
if ($uiE.sha256 -ne $sha) { Write-Host "DOGRLAMA HATA: ui sha eslesmiyor"; exit 1 }
if ($canli2.mods.Count -ne $modsBefore) { Write-Host "DOGRLAMA HATA: mods sayisi degisti ($($canli2.mods.Count) <- $modsBefore)"; exit 1 }
if ($canli2.mods[0].modVersion -ne $modVerBefore) { Write-Host "DOGRLAMA HATA: modVersiyon ezildi ($($canli2.mods[0].modVersion) <- $modVerBefore)"; exit 1 }
$zipA = $rel2.assets | Where-Object { $_.name -eq "ui-$Surum.zip" }
if (-not $zipA) { Write-Host "DOGRLAMA HATA: ui zip asset yok"; exit 1 }

Write-Host "[6/6] TAMAM - sicak UI kanali yayinda: arayuz $Surum"
Write-Host "      mods korunmus: $modVerBefore ($modsBefore mcVersion girdisi)"
Write-Host "      Launcherlar (v0.3.39+) acilista/15 dk icinde yeni arayuzu indirip"
Write-Host "      sonraki acilista uygulayacak; exe derlemesi GEREKMEDI."
