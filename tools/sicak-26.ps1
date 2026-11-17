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
  Write-Host "  $v -> $($girdiler[-1].file) ($($sha.Substring(0,12))...)"
}

Write-Host "[2/4] canli manifest okunuyor (1.21.x girdileri KORUNACAK)"
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" | ConvertFrom-Json
$mid = ($rel.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
if (-not $mid) { Write-Host "sicak.json yok"; exit 1 }
$canli = gh api "repos/YKSAMI1/yikimlient/releases/assets/$mid" --header 'Accept: application/octet-stream' 2>$null | ConvertFrom-Json

if (-not $canli -or -not $canli.mods) {
    Write-Host "DURDURULDU: canli manifest okunamadi - diger aileler silinmesin diye yazilmiyor."
    exit 1
}

# AILE KURALI (sicak.ps1 ile AYNI olmali):
#   1.21.9 / 1.21.10 / 1.21.11 -> TEK jar (1.33.x) paylasir  = "1.21yeni"
#   1.21.1 ... 1.21.8           -> legacy jar (1.3.1)         = "1.21eski"
#   26.x                        -> her surum KENDI jar'ini ister (26.1 jar'i 26.3'e olmaz)
# Bu kural olmadan 1.21.9/1.21.10 girdileri "+1.21.11.jar" gosterdigi icin
# "kendi surumuyle bitmiyor" diye ATILIYORDU (canli manifest 8 -> 6 dustu).
function Aile([string]$mc) {
    if ($mc -like "26*") { return $mc }
    if ($mc -eq "1.21.9" -or $mc -eq "1.21.10" -or $mc -eq "1.21.11") { return "1.21yeni" }
    if ($mc -like "1.21.*") { return "1.21eski" }
    return $mc
}
function Gecerli($e) {
    if (-not $e.file) { return $false }
    $p = $e.file -split '\+'
    if (@($p).Count -lt 2) { return $false }
    $dosyaMc = $p[1] -replace '\.jar$', ''
    return (Aile $dosyaMc) -eq (Aile $e.mcVersion)
}

# 26.x disindaki girdiler korunur (gecerli olanlar)
$eski = @($canli.mods | Where-Object { $_.mcVersion -notlike '26*' -and (Gecerli $_) })
$atilan = @($canli.mods).Count - @($eski).Count - @($canli.mods | Where-Object { $_.mcVersion -like '26*' }).Count
if ($atilan -gt 0) { Write-Host "   atilan bozuk girdi: $atilan" }
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