# YIKIMLient yayimlama betigi
# Kullanim:
#   1) src-tauri/tauri.conf.json icerisinde "version" degerini yukselt (orn. 0.2.1)
#   2) powershell -ExecutionPolicy Bypass -File tools\yayimla.ps1
#   3) Cikan dosyalari GitHub Release'ine yukle:
#      - YIKIMLient_x64-setup.exe
#      - YIKIMLient_x64-setup.exe.sig
#      - latest.json
#      Release etiketi: v<surum>  (orn. v0.2.1)
#
# ONEMli: updater ozel anahtari (tools/updater-private.key) HICBIR ZAMAN repoya/Release'e yuklenmez.
$ErrorActionPreference = "Stop"
$koku = Split-Path -Parent $PSScriptRoot

# surumu oku
$conf = Get-Content "$koku\src-tauri\tauri.conf.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$versiyon = $conf.version
Write-Host "Surum: $versiyon"
if ($versiyon -eq "0.1.0") { throw "Once tauri.conf.json icinde surumu yukselt!" }

# imzali derleme (updater .sig uretmesi icin ortam degiskeni sart)
$env:TAURI_SIGNING_PRIVATE_KEY = "$koku\tools\updater-private.key"
$env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = ""
Push-Location $koku
& npm run dist
if ($LASTEXITCODE -ne 0) { Pop-Location; throw "derleme basarisiz" }
Pop-Location

$bundle = "$koku\src-tauri\target\release\bundle"
$cikti = "$koku\yayin\v$versiyon"
New-Item -ItemType Directory -Force -Path $cikti | Out-Null

# NSIS kurulum dosyasi + imzasi
$exe = Get-ChildItem "$bundle\nsis" -Filter "*-setup.exe" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $exe) { throw "kurulum exe bulunamadi" }

# Authenticode imzası — SmartScreen uyarısının tek kalıcı çözümü.
# Sertifika tanımlı değilse betik uyarı basıp devam eder (imzasız çıkar).
& powershell -ExecutionPolicy Bypass -File "$koku\tools\imzala.ps1" -Dosya $exe.FullName
Copy-Item $exe.FullName $cikti -Force

# Sağlama toplamı: kullanıcı dosyayı doğrulayabilir, AV incelemelerinde işe yarar.
$ozet = (Get-FileHash $exe.FullName -Algorithm SHA256).Hash.ToLower()
[System.IO.File]::WriteAllText("$cikti\SHA256SUMS.txt", "$ozet  $(Split-Path $exe -Leaf)`n", (New-Object System.Text.UTF8Encoding($false)))
$sig = "$($exe.FullName).sig"
if (-not (Test-Path $sig)) { throw "imza dosyasi yok - TAURI_SIGNING_PRIVATE_KEY set edilmedi mi?" }
$signatur = (Get-Content $sig -Raw).Trim()
Copy-Item $sig "$cikti\$(Split-Path $sig -Leaf)" -Force

# Linux paketleri de imzalanir (updater AppImage/deb'i de güncelleyebilsin).
$linuxPk = @()
foreach ($uz in @("amd64.AppImage", "amd64.deb")) {
  $dosya = Get-ChildItem "$bundle" -Recurse -Filter "*_$uz" -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if ($dosya) {
    Copy-Item $dosya.FullName $cikti -Force
    $lsig = "$($dosya.FullName).sig"
    if (Test-Path $lsig) {
      Copy-Item $lsig "$cikti\$(Split-Path $lsig -Leaf)" -Force
      if ($dosya.Name -like "*AppImage*") { $anahtar = "linux-x86_64" } else { $anahtar = "linux-x86_64-deb" }
      $linuxPk += [pscustomobject]@{
        Dosya = Split-Path $dosya -Leaf
        Sig = (Get-Content $lsig -Raw).Trim()
        Anahtar = $anahtar
      }
    }
    $oz = (Get-FileHash $dosya.FullName -Algorithm SHA256).Hash.ToLower()
    Add-Content -Path "$cikti\SHA256SUMS.txt" -Value "$oz  $(Split-Path $dosya -Leaf)"
  }
}

# ZORUNLU GUNCELLEME ESIGI: launcher kurulumunu yapan JSON'a bu satiri ekleriz.
# "1.0.0" yerine gercekte zorunlu yapmak istedigin en dusuk surumu yaz.
$MINIMUM = "0.8.0"

# latest.json — updater bu dosyayi okur (releases/latest/download/latest.json)
$platformlar = @"
    "windows-x86_64": {
      "signature": "$signatur",
      "url": "https://github.com/YKSAMI1/yikimlient/releases/download/v$versiyon/$(Split-Path $exe -Leaf)"
    }
"@
foreach ($p in $linuxPk) {
  $platformlar += ",`n" + @"
    "$($p.Anahtar)": {
      "signature": "$($p.Sig)",
      "url": "https://github.com/YKSAMI1/yikimlient/releases/download/v$versiyon/$($p.Dosya)"
    }
"@
}
$latest = @"
{
  "version": "$versiyon",
  "notes": "YIKIMLient v$versiyon - yenilikler icin Release notlarina bak.",
  "pub_date": "$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')",
  "minimum": "$MINIMUM",
  "platforms": {
$platformlar
  }
}
"@
# tek satir imza JSON'da sorun cikarmasin: yeni satirlari temizle
$latest = $latest -replace "`r`n", "`n"
[System.IO.File]::WriteAllText("$cikti\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ""
Write-Host "TAMAM. Yayin klasoru: $cikti"
Get-ChildItem $cikti | Select-Object Name, @{N="MB";E={[math]::Round($_.Length/1MB,2)}}
Write-Host ""
Write-Host "ZORUNLU guncelleme esigi: v$MINIMUM (kurulumu bundan eski olan client guncellemeden kullanamaz)"
Write-Host "Windows'ta 'AppImage/deb' yalniz Linux surumleri icindir."
Write-Host ""
Write-Host "Sonraki adimlar:"
Write-Host "  1) GitHub'da 'YKSAMI1/yikimlient' reposuna git"
Write-Host "  2) Releases > Draft a new release > etiket: v$versiyon"
Write-Host "  3) Klasordeki TUM dosyalari yukle (setup.exe + .sig + AppImage + .deb + imzalari + latest.json + SHA256SUMS.txt)"
Write-Host "  4) Publish! - butun clientler otomatik gorecek ve guncelleyecek."
