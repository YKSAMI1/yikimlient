<#
  YIKIM - TEK KOMUT: DERLE + YAYINLA + BU MAKINEYE KUR

  Kullanim (surumleri kendisi +1 arttirir):
      powershell -ExecutionPolicy Bypass -File tools\mod-yayinla.ps1 -Notlar "ne degisti"

  Elle surum vermek istersen:
      powershell -ExecutionPolicy Bypass -File tools\mod-yayinla.ps1 -Surum26 1.0.7 -Surum121 1.33.17

  Ne yapar:
      1. 26.x (26.1 / 26.1.1 / 26.1.2 / 26.2 / 26.3) ve 1.21.9-1.21.11 jar'larini derler
      2. Jar'lari gomulu havuza kopyalar (src-tauri/resources/mods + kurulu launcher)
      3. GOMULU MANIFESTI jar'lardan yeniden uretir (elle surum yazma yok)
      4. SICAK kanala yukler (1.21.x + 26.x) -> herkes launcher'i acinca alir
      5. BU MAKINEDEKI TUM kurulumlara / mod paketlerine yeni jar'i kurar
      6. Ne yaptigini tek tek yazar

  Bayraklar:
      -YalnizKur   : derleme ve yayin atlanir, sadece yerel kurulumlar guncellenir
      -AtlaYayin   : derle + yerel kur, GitHub'a yukleme yok (deneme icin)
      -AtlaDerle   : derleme atlanir (jar'lar zaten derlenmis)

  NOT: PS 5.1 UTF-8 BOM'suz dosyada Turkce karakterleri bozar - bu script
  bilerek SADECE ASCII yazar. Cikti metinlerinde de Turkce karakter kullanma.
#>
param(
    [string]$Surum26 = "",
    [string]$Surum121 = "",
    [string]$Notlar = "",
    [switch]$YalnizKur,
    [switch]$AtlaYayin,
    [switch]$AtlaDerle
)

$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
Set-Location $kok

$SURUMLER_26 = @("26.1", "26.1.1", "26.1.2", "26.2", "26.3")
$SURUMLER_121 = @("1.21.9", "1.21.10", "1.21.11")
$Havuz = Join-Path $kok "src-tauri\resources\mods"
$Kurulu = Join-Path $env:LOCALAPPDATA "YIKIMLient\resources\mods"
$Derleme = Join-Path $kok "yikim-mod\derleme"

function Puan([string]$v) {
    $p = @($v.Split('.') | ForEach-Object { [int]$_ })
    while ($p.Count -lt 3) { $p += 0 }
    return $p
}
function DahaYeni([string]$a, [string]$b) {
    $pa = Puan $a; $pb = Puan $b
    for ($i = 0; $i -lt 3; $i++) { if ($pa[$i] -ne $pb[$i]) { return ($pa[$i] -gt $pb[$i]) } }
    return $false
}
function SurumArttir([string]$v) {
    $p = Puan $v
    return "$($p[0]).$($p[1]).$($p[2] + 1)"
}

# --- mevcut surumleri gomulu manifestten oku -------------------------------
$manifestYolu = Join-Path $Havuz "manifest.json"
$eski26 = "1.0.0"
$eski121 = "1.33.0"
if (Test-Path $manifestYolu) {
    $mj = Get-Content $manifestYolu -Raw | ConvertFrom-Json
    foreach ($e in $mj.mods) {
        # "yikimlient-1.0.6-26.3+26.3.jar" -> "1.0.6" ; "yikimlient-1.33.16+1.21.11.jar" -> "1.33.16"
        if ($e.file -match '^yikimlient-(\d+(?:\.\d+){1,2})') {
            $s = $Matches[1]
            if ($e.mcVersion -like "26.*") { if (DahaYeni $s $eski26) { $eski26 = $s } }
            elseif ($e.mcVersion -like "1.21.*") { if (DahaYeni $s $eski121) { $eski121 = $s } }
        }
    }
}
$SurumSabit = $YalnizKur -or $AtlaDerle
if (-not $Surum26) { if ($SurumSabit) { $Surum26 = $eski26 } else { $Surum26 = SurumArttir $eski26 } }
if (-not $Surum121) { if ($SurumSabit) { $Surum121 = $eski121 } else { $Surum121 = SurumArttir $eski121 } }

Write-Host ""
Write-Host "==== YIKIM MOD YAYINI ===="
Write-Host "  26.x surumu   : $Surum26   (onceki: $eski26)"
Write-Host "  1.21.x surumu : $Surum121  (onceki: $eski121)"
Write-Host "  not           : $Notlar"
Write-Host ""

# --- 1) DERLE --------------------------------------------------------------
if ($YalnizKur -or $AtlaDerle) {
    Write-Host "[1/6] derleme atlandi"
} else {
    Write-Host "[1/6] derleniyor"
    $hatali = @()
    foreach ($v in $SURUMLER_26) {
        $mv = "$Surum26-$v"
        $jar = Join-Path $Derleme "yikimlient-$mv+$v.jar"
        $cikti = & powershell -ExecutionPolicy Bypass -File (Join-Path $kok "yikim-mod\araclar\derle-26.ps1") -McVersion $v -ModVersion $mv 2>&1
        if (Test-Path $jar) {
            Write-Host "        26.x  $v -> $(Split-Path $jar -Leaf)"
        } else {
            Write-Host "        HATA  26.x $v derlenemedi"
            $cikti | Select-Object -Last 6 | ForEach-Object { Write-Host "             $_" }
            $hatali += $v
        }
    }
    foreach ($v in $SURUMLER_121) {
        $jar = Join-Path $Derleme "yikimlient-$Surum121+$v.jar"
        $cikti = & powershell -ExecutionPolicy Bypass -File (Join-Path $kok "yikim-mod\araclar\derle-1.21.11.ps1") -McVersion $v -ModVersion $Surum121 2>&1
        if (Test-Path $jar) {
            Write-Host "        1.21.x $v -> $(Split-Path $jar -Leaf)"
        } else {
            Write-Host "        HATA  1.21.x $v derlenemedi"
            $cikti | Select-Object -Last 6 | ForEach-Object { Write-Host "             $_" }
            $hatali += $v
        }
    }
    if ($hatali.Count -gt 0) {
        Write-Host ""
        Write-Host "DURDURULDU: derlenemeyen surumler: $($hatali -join ', ')"
        exit 1
    }
}

# --- 2) GOMULU HAVUZA KOPYALA ---------------------------------------------
Write-Host "[2/6] gomulu havuza kopyalaniyor"
$yeniJarlar = @()
foreach ($v in $SURUMLER_26) {
    $j = Join-Path $Derleme "yikimlient-$Surum26-$v+$v.jar"
    if (Test-Path $j) { Copy-Item $j $Havuz -Force; $yeniJarlar += (Split-Path $j -Leaf) }
}
foreach ($v in $SURUMLER_121) {
    $j = Join-Path $Derleme "yikimlient-$Surum121+$v.jar"
    if (Test-Path $j) { Copy-Item $j $Havuz -Force; $yeniJarlar += (Split-Path $j -Leaf) }
}
Write-Host "        $($yeniJarlar.Count) jar kopyalandi"

# --- 3) MANIFESTI YENILE + ESKI JAR'LARI TEMIZLE --------------------------
Write-Host "[3/6] gomulu manifest yenilendi"
node (Join-Path $kok "tools\manifest-yenile.mjs") $Havuz 2>&1 | ForEach-Object { Write-Host "        $_" }

$mj = Get-Content $manifestYolu -Raw | ConvertFrom-Json
$gerekli = @($mj.mods | ForEach-Object { $_.file } | Sort-Object -Unique)
$silinen = 0
Get-ChildItem $Havuz -Filter "yikimlient-*.jar" | ForEach-Object {
    if ($gerekli -notcontains $_.Name) { Remove-Item $_.FullName -Force; $silinen++ }
}
Write-Host "        havuzda $($gerekli.Count) jar kaldi, $silinen eski jar silindi"

# Kurulu launcher'in gomulu havuzunu da ayni hale getir (eski exe'ler de
# dogru surumu kursun; yeni exe'de zaten bu klasor paketlenir).
if (Test-Path $Kurulu) {
    Copy-Item $manifestYolu $Kurulu -Force
    foreach ($ad in $gerekli) {
        $k = Join-Path $Havuz $ad
        if (Test-Path $k) { Copy-Item $k $Kurulu -Force }
    }
    Get-ChildItem $Kurulu -Filter "yikimlient-*.jar" | ForEach-Object {
        if ($gerekli -notcontains $_.Name) { Remove-Item $_.FullName -Force }
    }
    Write-Host "        kurulu launcher havuzu da guncellendi"
}

# --- 4) SICAK KANAL ------------------------------------------------------
$yayinHatasi = $false
if ($YalnizKur -or $AtlaYayin) {
    Write-Host "[4/6] sicak kanal yayini atlandi"
} else {
    Write-Host "[4/6] sicak kanala yukleniyor (1.21.x)"
    & powershell -ExecutionPolicy Bypass -File (Join-Path $kok "tools\sicak.ps1") -MV $Surum121 -McVersion "1.21.11" -Notlar $Notlar -AtlaDerle 2>&1 |
        Where-Object { $_ -match "TAMAM|HATA|YOK|yayinda|mcVersion|DURDURULDU|girdi" } | ForEach-Object { Write-Host "        $_" }
    if ($LASTEXITCODE -ne 0) { $yayinHatasi = $true }

    Write-Host "[5/6] sicak kanala yukleniyor (26.x)"
    & powershell -ExecutionPolicy Bypass -File (Join-Path $kok "tools\sicak-26.ps1") -MV $Surum26 -Notlar $Notlar 2>&1 |
        Where-Object { $_ -match "26\.|toplam|kaynak|TAMAM|HATA|YOK" } | ForEach-Object { Write-Host "        $_" }
    if ($LASTEXITCODE -ne 0) { $yayinHatasi = $true }

    # DOGRULAMA: canli manifest gercekten istenen surumleri tasiyor mu?
    $dogrula = $true
    try {
        $r = Invoke-WebRequest "https://github.com/YKSAMI1/yikimlient/releases/download/sicak/sicak.json" -UseBasicParsing
        $canli = [System.Text.Encoding]::UTF8.GetString($r.Content) | ConvertFrom-Json
        $g26 = @($canli.mods | Where-Object { $_.mcVersion -eq "26.3" })[0]
        $g121 = @($canli.mods | Where-Object { $_.mcVersion -eq "1.21.11" })[0]
        if (-not $g26 -or $g26.modVersion -ne $Surum26) { Write-Host "        DOGRULAMA: 26.3 girdisi $Surum26 degil!"; $dogrula = $false }
        if (-not $g121 -or $g121.modVersion -ne $Surum121) { Write-Host "        DOGRULAMA: 1.21.11 girdisi $Surum121 degil!"; $dogrula = $false }
        foreach ($mc in @("1.21.1", "1.21.5", "1.21.8")) {
            $g = @($canli.mods | Where-Object { $_.mcVersion -eq $mc })[0]
            if ($g -and -not $g.file.EndsWith("+$mc.jar")) { Write-Host "        DOGRULAMA: $mc girdisi yanlis jar gosteriyor: $($g.file)"; $dogrula = $false }
        }
        if ($dogrula) { Write-Host "        DOGRULAMA: canli manifest dogru ($($canli.mods.Count) girdi)" }
    } catch { Write-Host "        DOGRULAMA: canli manifest okunamadi"; $dogrula = $false }
    if (-not $dogrula) { $yayinHatasi = $true }
}

# --- 6) BU MAKINEDEKI TUM KURULUM/MOD PAKETLERINE KUR --------------------
Write-Host "[6/6] bu makinedeki kurulumlara kuruluyor"
$instKok = Join-Path $env:APPDATA ".yikimlient\instances"
if (-not (Test-Path $instKok)) {
    Write-Host "        kurulum klasoru yok: $instKok"
} else {
    $kurulan = 0
    Get-ChildItem $instKok -Directory | ForEach-Object {
        $json = Join-Path $_.FullName "yikimlient.json"
        if (-not (Test-Path $json)) { return }
        $inst = Get-Content $json -Raw | ConvertFrom-Json
        if ($inst.mod_loader -ne "fabric") { return }
        $mc = $inst.mc_version
        $girdi = $mj.mods | Where-Object { $_.mcVersion -eq $mc } | Select-Object -First 1
        if (-not $girdi) { Write-Host "        ATLA  $($inst.name) (mc=$mc icin jar yok)"; return }

        $mods = Join-Path $_.FullName "mods"
        New-Item -ItemType Directory -Force -Path $mods | Out-Null
        # eski YIKIM jar'larini kaldir (Fabric duplicate mod id hatasi olmasin)
        Get-ChildItem $mods -Filter "yikimlient-*.jar" -ErrorAction SilentlyContinue |
            ForEach-Object { Remove-Item $_.FullName -Force -ErrorAction SilentlyContinue }
        $kaynak = Join-Path $Havuz $girdi.file
        if (-not (Test-Path $kaynak)) { Write-Host "        ATLA  $($inst.name) (kaynak jar yok: $($girdi.file))"; return }
        Copy-Item $kaynak (Join-Path $mods $girdi.file) -Force
        Write-Host "        TAMAM $($inst.name)  mc=$mc  ->  $($girdi.file)"
        $kurulan++
    }
    Write-Host "        $kurulan kurulum guncellendi"
}

Write-Host ""
if ($yayinHatasi) {
    Write-Host "BITTI - AMA YAYINDA HATA VAR (yukaridaki DOGRULAMA satirlarina bak)."
    Write-Host "  Yerel kurulumlar yine de guncellendi."
    exit 1
}
Write-Host "BITTI."
if (-not $YalnizKur -and -not $AtlaYayin) {
    Write-Host "  - Sicak kanal yayinda: herkes launcher'i acinca yeni modu alir (exe gerekmez)."
}
Write-Host "  - Bu makinedeki tum kurulumlar yeni surumde."
Write-Host ""
