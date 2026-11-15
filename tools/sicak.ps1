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
    [string]$McVersion = "1.21.11",
    # mod-yayinla.ps1 gibi ust akislar jar'i ZATEN derlediyse tekrar derleme
    [switch]$AtlaDerle
)
# PS 5.1 hunesi: yerli stderr akisi Stop modunda hataya doner - Continue'dayiz;
# kritik noktalar zaten acik denetimli (Test-Path, ASSET YOK, versiyon eslesme).
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
Set-Location $kok

if ($AtlaDerle) {
    Write-Host "[1/6] MOD derlemesi atlandi (-AtlaDerle): yikimlient-$MV+$McVersion.jar kullanilacak"
} else {
    Write-Host "[1/6] MOD derleniyor"
    powershell -ExecutionPolicy Bypass -File (Join-Path $kok "yikim-mod\araclar\derle-1.21.11.ps1") -McVersion $McVersion -ModVersion $MV | Select-Object -Last 1
}
$jarRel = "yikim-mod\derleme\yikimlient-$MV+$McVersion.jar"
if (-not (Test-Path $jarRel)) { Write-Host "MOD JARI YOK: $jarRel - durduruluyor"; exit 1 }
$jar = Join-Path $kok $jarRel
Write-Host "      jar hazir: $jarRel ($([Math]::Round((Get-Item $jar).Length/1MB,2)) MB)"

Write-Host "[2/6] sha256 hesaplaniyor"
$sha = (Get-FileHash -Path $jar -Algorithm SHA256).Hash.ToLower()

Write-Host "[3/6] sicak.json yaziliyor (gomulu manifest'teki tum mc surumleri kapsanir)"
# Gomulu resources/manifest.json'daki TUM mcVersion'lar icin ayni kayit - jar
# TEK JAR HER MC'YE GIDERMI� HATASI (v0.9.4): eski kod, derlenen jar'i manifest'teki
# TUM mcVersion'lara yaziyordu. 26.x eklendikten sonra bu, 26.x kurulumlarina
# BIR 1.21.11 JAR'I kurmaya calisiyordu -> Fabric "duplicate mod id" veya sinif
# bulunamadi ile oyun acilmiyordu. Artik ayni jar sadece AYNI AILEYE yazilir;
# diger aileler (26.x) gomulu jar'larina guvenir (launcher zaten 26.x jar'larini
# kendi manifestinden kuruyor).
$mcp = Get-Content "$kok\src-tauri\resources\mods\manifest.json" -Raw | ConvertFrom-Json
$mods = @()
$ojar = "yikimlient-$MV+$McVersion.jar"
$url = "https://github.com/YKSAMI1/yikimlient/releases/download/sicak/$ojar"
# Bu derlemenin ait oldugu aile.
# ONEMLI: "1.21" TEK AILE DEGIL. 1.21.1-1.21.8 legacy jar (1.3.1) kullanir,
# 1.21.9-1.21.11 ise 1.33.x jar kullanir. Ikisini ayni aileye koymak 1.21.5
# kullanicisina 1.21.11 jar'i kuruyordu -> oyun acilmiyordu.
function Aile([string]$mc) {
    if ($mc -eq "1.21.9" -or $mc -eq "1.21.10" -or $mc -eq "1.21.11") { return "1.21yeni" }
    if ($mc -like "1.21.*") { return "1.21eski" }
    # 26.x: her surum kendi jar'ini ister - tek aileye toplanamaz
    return $mc
}
$benimAilem = Aile $McVersion
if ($McVersion -like "26*") {
    Write-Host "DURDURULDU: 26.x jar'lari bu script ile yayinlanmaz - tools\sicak-26.ps1 kullan."
    exit 1
}
foreach ($m in $mcp.mods) {
    $mc = $m.mcVersion
    if ((Aile $mc) -ne $benimAilem) { continue }   # baska aileye dokunma
    $mods += @{ mcVersion = $mc; file = $ojar; modVersion = $MV; url = $url; sha256 = $sha }
}
$exp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()

# KAYNAKLAR KORUNUR (KRITIK): ui ve emote paketleri tools\sicak-ui.ps1 ile
# ayrica yayinlanir. Burada sabit @() yazmak, o girdileri manifestten SILER;
# launcherlar bir daha arayuz paketi indirmez ve exe'si eski kullanicilar
# eski menude takilir (v0.5.x vakasi: canli kaynaklar bos kaldi).
# Canli manifestteki girdiler aynen tasinir; hic yoksa bos dizi kalir.
$klr = @()
$relOnce = $null
try {
    $relOnce = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" 2>$null | ConvertFrom-Json
} catch { $relOnce = $null }
if ($relOnce) {
    $mid = ($relOnce.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
    if ($mid) {
        try {
            $canli = gh api "repos/YKSAMI1/yikimlient/releases/assets/$mid" --header 'Accept: application/octet-stream' 2>$null | ConvertFrom-Json
            if ($canli -and $canli.kaynaklar) {
                $klr = @($canli.kaynaklar)
                Write-Host ("      korunan kaynak girdisi: {0}" -f $klr.Count)
            }
        } catch {
            Write-Host "      UYARI: canli kaynaklar okunamadi (kaynaklar bos yazilacak)"
        }
    }
}
if ($klr.Count -eq 0) {
    Write-Host "      UYARI: canli manifestte kaynak yok - arayuz sicak kanali bos kalacak"
    Write-Host "      (arayuz yayinlamak icin: tools\sicak-ui.ps1 -Surum <surum>)"
}
# DIGER AILELER KORUNUR (KRITIK): bu script yalnizca kendi ailesini yazar.
# Canli manifestteki oteki aile girdileri (ornegin 26.x) aynen tasinmazsa
# 1.21.x yayini 26.x sicak kanalini SILER.
# Ayrica BOZUK girdiler atilir: `file` adi kendi mcVersion'u ile bitmiyorsa
# (1.21.5 kaydinda 1.21.11 jar'i gibi) o girdi kurulmaz - oyun acilmaz.
$digerMods = @()
$canliOk = $false
$ilkYayin = $false
try {
    $relCanli = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" 2>$null | ConvertFrom-Json
    if (-not $relCanli) { $ilkYayin = $true }
    $midCanli = ($relCanli.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1).id
    if ($midCanli) {
        $canliMods = gh api "repos/YKSAMI1/yikimlient/releases/assets/$midCanli" --header 'Accept: application/octet-stream' 2>$null | ConvertFrom-Json
        if ($canliMods -and $canliMods.mods) {
            $digerMods = @($canliMods.mods | Where-Object {
                $_.file -and $_.file.EndsWith("+$($_.mcVersion).jar") -and (Aile $_.mcVersion) -ne $benimAilem
            })
            $bozuk = @($canliMods.mods).Count - $digerMods.Count - @($mods).Count
            if ($bozuk -gt 0) { Write-Host "      atilan bozuk/eski girdi: $bozuk" }
            $canliOk = $true
        }
    }
} catch { $digerMods = @() }

# GUVENLIK: canli manifest okunamadiysa YAZMA. Aksi halde bu aile disindaki
# tum girdiler (ornegin 26.x) silinir ve o kullanicilar guncelleme almaz.
if (-not $canliOk -and -not $ilkYayin) {
    Write-Host "DURDURULDU: canli sicak.json okunamadi - diger aileler silinmesin diye yazilmiyor."
    Write-Host "            (gh oturumunu kontrol et: gh auth status)"
    exit 1
}

$tumMods = @($mods) + @($digerMods)
Write-Host ("      manifest: {0} bu aile + {1} diger aile = {2} girdi" -f @($mods).Count, @($digerMods).Count, @($tumMods).Count)

$sj = @{ v = 1; exp = $exp; not = $Notlar; mods = $tumMods; kaynaklar = $klr } | ConvertTo-Json -Depth 8
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
# Kaynaklar (ui/emote) yayin sirasinda silinmemis mi? En sik sessiz kirilma buydu.
$klrSon = 0
if ($canli.kaynaklar) { $klrSon = @($canli.kaynaklar).Count }
if ($klrSon -lt $klr.Count) { Write-Host "DOGRLAMA HATA: kaynaklar silindi ($klrSon <- $($klr.Count))"; exit 1 }
$say = $canli.mods.Count
Write-Host "[6/6] TAMAM - sicak kanal yayinda: mod $MV (manifest'te $say mcVersion girdisi, $klrSon kaynak girdisi)"
Write-Host "      Launcherlar acilista/15 dk icinde otomatik indirip-kuracak; exe derlemesi GEREKMEDI."
