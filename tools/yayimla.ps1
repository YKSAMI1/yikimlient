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

# latest.json — updater bu dosyayi okur (releases/latest/download/latest.json)
$latest = @"
{
  "version": "$versiyon",
  "notes": "YIKIMLient v$versiyon - yenilikler icin Release notlarina bak.",
  "pub_date": "$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')",
  "platforms": {
    "windows-x86_64": {
      "signature": "$signatur",
      "url": "https://github.com/YKSAMI1/yikimlient/releases/download/v$versiyon/$(Split-Path $exe -Leaf)"
    }
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
Write-Host "Sonraki adimlar:"
Write-Host "  1) GitHub'da 'YKSAMI1/yikimlient' reposuna git"
Write-Host "  2) Releases > Draft a new release > etiket: v$versiyon"
Write-Host "  3) Uc dosyayi da yukle (setup.exe + .sig + latest.json)"
Write-Host "  4) Publish! - butun clientler otomatik gorecek ve guncelleyecek."
