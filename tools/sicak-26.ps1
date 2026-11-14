# 26.x jar'larini DA SICAK kanala koyar (1.21.x ailesine dokunmadan).
#
# NEDEN: launcher'in gomulu manifest'i yalnizca yeni bir exe ile degisir.
# Kucuk bir duzeltmeyi (ornegin menu tiklamasi) tum kullanicilara dakikalar
# icinde ulastirmak icin 26.x jar'lari da "sicak" release'ine yuklenir ve
# manifest'e kendi mcVersion'lariyla eklenir. Launcher acilista okur,
# sha256 dogrular, oyun baslatildiginda otomatik kurar.
param(
  [Parameter(Mandatory=$true)][string]$MV,      # 26.x mod surumu: 1.0.3
  [string]$Notlar = ""
)
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$cev = "https://github.com/YKSAMI1/yikimlient/releases/download/sicak"
$surumler = @("26.1","26.1.1","26.1.2","26.2","26.3")

Write-Host "[1/4] 26.x jar'lari yukleniyor"
$girdiler = @()
foreach ($v in $surumler) {
  $jar = Join-Path $kok "yikim-mod\derleme\yikimlient-$MV-$v+$v.jar"
  if (-not (Test-Path $jar)) { Write-Host "  JAR YOK: $jar"; exit 1 }
  $sha = (Get-FileHash -Path $jar -Algorithm SHA256).Hash.ToLower()
  $girdiler += @{ mcVersion = $v; file = "yikimlient-$MV-$v+$v.jar"; modVersion = $MV; url = "$cev/yikimlient-$MV-$v+$v.jar"; sha256 = $sha }
  gh release upload sicak $jar --clobber 2>&1 | Out-Null
  Write-Host "  $v -> $($girdiler[-1].file) ($sha.Substring(0,12)...)"
}

Write-Host "[2/4] canli manifest okunuyor (1.21.x girdileri KORUNACAK)"
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" | ConvertFrom-Json
$mid = ($rel.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
if (-not $mid) { Write-Host "sicak.json yok"; exit 1 }
$canli = gh api "repos/YKSAMI1/yikimlient/releases/assets/$mid" --header 'Accept: application/octet-stream' 2>$null | ConvertFrom-Json

# 1.21.x (ve diger) girdileri oldugu gibi tasi
$eski = @($canli.mods | Where-Object { $_.mcVersion -notlike '26*' })
$kaynaklar = @($canli.kaynaklar)

Write-Host ("[3/4] manifest yaziliyor: {0} mevcut + {1} 26.x" -f @($eski).Count, $girdiler.Count)
$sj = @{ v = 1; exp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds(); not = $Notlar; mods = (@($eski) + $girdiler); kaynaklar = $kaynaklar } | ConvertTo-Json -Depth 8
$tempJson = Join-Path $env:TEMP "sicak.json"
[System.IO.File]::WriteAllText($tempJson, $sj, (New-Object System.Text.UTF8Encoding($false)))
gh release upload sicak $tempJson --clobber 2>&1 | Select-Object -First 1

Write-Host "[4/4] dogrulama (API uzerinden)"
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" | ConvertFrom-Json
$mid = ($rel.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
$yeni = gh api "repos/YKSAMI1/yikimlient/releases/assets/$mid" --header 'Accept: application/octet-stream' 2>$null | ConvertFrom-Json
"  toplam mcVersion girdisi: $(@($yeni.mods).Count)"
"  26.x girdisi: $(@($yeni.mods | Where-Object { $_.mcVersion -like '26*' }).Count)"
"  kaynak girisi: $(@($yeni.kaynaklar).Count)"
foreach ($v in $surumler) {
  $e = @($yeni.mods | Where-Object { $_.mcVersion -eq $v } | Select-Object -First 1)
  if ($e) { "  $v -> $($e[0].modVersion) ($($e[0].file))" } else { "  $v -> YOK (HATA)" }
}