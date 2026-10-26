# YIKIM - SICAK (derlemesiz) GUNCELLEME YAYINLAMA ALETI
#
# Kullanim:
#   powershell -ExecutionPolicy Bypass -File tools\sicak.ps1 -MV "1.12.7"
#   (isteg bagli: -Notlar "ne degisti")
#
# Ne yapar:
#   1. Modu derler (yikim-mod\araclar\derle-1.21.11.ps1)
#   2. jar + sicak.json'u GitHub "sicak" release'ine yukler (--clobber)
#   3. Dogrular
#
# Launcher acilista (ve 15 dk'da bir) sicak.json'u okur; gomulu surumden yeni
# bir modVersion gorurse jar'i URL'den indirir, sha256 dogrular, sicak
# onbellekte tutar; oyun baslatildiginda gomulu olandan yeni surum otomatik
# kurulur. EXE DERLEME GEREKMEZ. Dakikalar surer.
#
# sicak.json semasi (launcher v1 okudugu):
# { "v": 1, "exp": <epoch>, "mods": [ {mcVersion, file, modVersion, url, sha256} ],
#   "kaynaklar": [] }   <- gelecekte tema/yeni sistemler buraya eklenir
#
# NOT: Bu script SADECE ASCII icerir (PS 5.1 UTF-8 BOM'suz dosyada Turkce
# karakterleri bozar). Yeni eklemeler ayni kurala uymali.
param(
    [Parameter(Mandatory=$true)][string]$MV,
    [string]$Notlar = "",
    [string]$McVersion = "1.21.11"
)
# PS 5.1 hunesi: yerli stderr akisi Stop modunda hataya doner - Continue'dayiz;
# kritik noktalar zaten acik denetimli (Test-Path, ASSET YOK, versiyon eslesme).
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
Set-Location $kok

Write-Host "[1/6] MOD derleniyor"
powershell -ExecutionPolicy Bypass -File (Join-Path $kok "yikim-mod\araclar\derle-1.21.11.ps1") -McVersion $McVersion -ModVersion $MV | Select-Object -Last 1
$jarRel = "yikim-mod\derleme\yikimlient-$MV+$McVersion.jar"
if (-not (Test-Path $jarRel)) { Write-Host "MOD JARI YOK: $jarRel - durduruluyor"; exit 1 }
$jar = Join-Path $kok $jarRel
Write-Host "      jar hazir: $jarRel ($([Math]::Round((Get-Item $jar).Length/1MB,2)) MB)"

Write-Host "[2/6] sha256 hesaplaniyor"
$sha = (Get-FileHash -Path $jar -Algorithm SHA256).Hash.ToLower()

Write-Host "[3/6] sicak.json yaziliyor (gomulu manifest'teki tum mc surumleri kapsanir)"
# Gomulu resources/manifest.json'daki TUM mcVersion'lar icin ayni kayit - jar
# surumler arasi geri uyumlu (adaptasyon); tek jar her MC'ye gider:
$mcp = Get-Content "$kok\src-tauri\resources\mods\manifest.json" -Raw | ConvertFrom-Json
$mods = @()
$ojar = "yikimlient-$MV+$McVersion.jar"
$url = "https://github.com/YKSAMI1/yikimlient/releases/download/sicak/$ojar"
foreach ($m in $mcp.mods) {
    $mods += @{ mcVersion = $m.mcVersion; file = $ojar; modVersion = $MV; url = $url; sha256 = $sha }
}
$exp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$sj = @{ v = 1; exp = $exp; not = $Notlar; mods = $mods; kaynaklar = @() } | ConvertTo-Json -Depth 5
$tempJson = Join-Path $env:TEMP "sicak.json"
[System.IO.File]::WriteAllText($tempJson, $sj, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "[4/6] 'sicak' release'e yukleme (--clobber: guncel manifest + guncel jar)"
# PS 5.1 hunesi: yerli stderr akisi Stop modunda hataya doner - ToString ile yakalanir
# yakalanir, karari $LASTEXITCODE verir.
($olaliYaz = gh release view sicak --repo YKSAMI1/yikimlient 2>&1 | ForEach-Object { $_.ToString() }) | Out-Null
$olali = ($LASTEXITCODE -eq 0)
if (-not $olali) {
    # --latest=false KRITIK: Tauri updater "releases/latest/download/latest.json"
    # kullanir; sicak release'i "Latest" isaretlenirse guncelleyici kirilir.
    gh release create sicak --title "sicak kanal" --notes "Derlemesiz guncelleme kanali (her zaman guncel)" --latest=false | Select-Object -First 1
}
gh release upload sicak (Join-Path $env:TEMP "sicak.json") $jar --clobber | Select-Object -First 2

Write-Host "[5/6] dogrulama (API uzerinden - CDN onbellekten kacin)"
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" | ConvertFrom-Json
foreach ($ad in @("sicak.json", $ojar)) {
    $a = $rel.assets | Where-Object { $_.name -eq $ad }
    if (-not $a) { Write-Host "ASSET YOK: $ad"; exit 1 }
    Write-Host ("      {0} var ({1} MB, {2})" -f $ad, [Math]::Round($a.size/1MB,2), $a.updated_at)
}
$id = ($rel.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
$canli = gh api "repos/YKSAMI1/yikimlient/releases/assets/$id" --header 'Accept: application/octet-stream' | ConvertFrom-Json
if ($canli.v -ne 1) { Write-Host "manifest dogrulamasi bozuk"; exit 1 }
if ($canli.mods[0].modVersion -ne $MV) { Write-Host "manifest modVersion eslesmiyor"; exit 1 }
$say = $canli.mods.Count
Write-Host "[6/6] TAMAM - sicak kanal yayinda: mod $MV (manifest'te $say mcVersion girdisi)"
Write-Host "      Launcherlar acilista/15 dk icinde otomatik indirip-kuracak; exe derlemesi GEREKMEDI."
