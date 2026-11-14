# YIKIM Client mod derleme betigi — SURUM BAGIMSIZ (tum 1.21.x)
#
#   powershell -ExecutionPolicy Bypass -File yikim-mod\araclar\derle.ps1 -McVersion 1.21.10 -ModVersion 1.29.4
#
# ONCE: node yikim-mod\araclar\surum-hazirla.mjs <McVersion>   (mc remap kutuphane fabric-api)
#
# NEDEN: mod tek kaynak agacindan derlenir ama HER 1.21.x surumu farkli intermediary
# imzalarina sahiptir (class_2960 vb.). Eskiden yalnizca 1.21.11 icin sabit yol vardi;
# bu betik araclar/mc-<V>-intermediary.jar + araclar/mc-kutuphane-<V> + fabric-api-<V>
# dosyalarindan classpath kurar.
param(
    [Parameter(Mandatory=$true)][string]$McVersion,
    [Parameter(Mandatory=$true)][string]$ModVersion
)

$ErrorActionPreference = "Stop"
$koku = Split-Path -Parent $PSScriptRoot        # yikim-mod/
$d = Join-Path $koku "araclar"
$src = Join-Path $koku "src\main\java\com\yikimlient\client"
$res = Join-Path $koku "src\main\resources"
$out = Join-Path $koku "derleme\classes"
$jarOut = Join-Path $koku "derleme\yikimlient-$ModVersion+$McVersion.jar"
$utf8 = New-Object System.Text.UTF8Encoding($false)

# ---- 0) derleme girdileri hazir mi? ----
$mcJar = Join-Path $d "mc-$McVersion-intermediary.jar"
if (-not (Test-Path $mcJar)) {
    throw "mc-$McVersion-intermediary.jar yok — once: node yikim-mod\araclar\surum-hazirla.mjs $McVersion"
}

if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory -Force -Path $out | Out-Null

# ---- 1) classpath: sabit araclar + surume ozel kutuphaneler ----
$cpItems = @(
    $mcJar,
    "$d\fabric-loader-0.19.5.jar",
    "$d\slf4j-api-2.0.16.jar",
    "$d\mixin.jar",
    "$d\asm-9.7.jar",
    "$d\asm-tree-9.7.jar",
    "$d\asm-commons-9.7.jar",
    "$d\asm-util-9.7.jar"
)

# surume ozel Mojang kutuphaneleri: TUMU (natives/sources HARIC).
# NOT: ilk denemde dar bir filtre kullanildi ve netty (ByteBuf) classpath'ta
# eksik kalip javac "cannot access ByteBuf" hatasi verdi.
$libKok = Join-Path $d "mc-kutuphane-$McVersion"
if (Test-Path $libKok) {
    $cpItems += Get-ChildItem $libKok -Recurse -Filter "*.jar" |
        Where-Object { $_.FullName -notmatch 'natives|sources|javadoc' } |
        ForEach-Object { $_.FullName }
}

# surume ozel fabric-api (tam jar: tum modulleri icerir)
$faDizin = Join-Path $d "fabric-api-$McVersion"
if (Test-Path $faDizin) {
    $cpItems += (Get-ChildItem $faDizin -Filter "*.jar" | Sort-Object Length -Descending | Select-Object -First 1).FullName
}

# daha once 1.21.11 icin kullanilan fabric-api modulleri (yedek)
$faEski = Join-Path $d "fabric-api-mods"
if (Test-Path $faEski) {
    $cpItems += (Get-ChildItem $faEski -Filter "*.jar" | ForEach-Object { $_.FullName })
}

$cp = (($cpItems | Where-Object { $_ -and (Test-Path $_) }) | Select-Object -Unique) -join ";"
Write-Host ("classpath girdi sayisi: " + (($cp -split ';' | Measure-Object).Count))

# ---- 2) MOD_VERSION + fabric.mod.json sabitlerini SENKRONIZE et ----
$clientSrc = "$src\YikimClient.java"
$clientText = [System.IO.File]::ReadAllText($clientSrc, [System.Text.Encoding]::UTF8)
$clientText = $clientText -replace 'MOD_VERSION = "[^"]*"', "MOD_VERSION = `"$ModVersion`""
[System.IO.File]::WriteAllText($clientSrc, $clientText, $utf8)

$fmj = Join-Path $res "fabric.mod.json"
$fmjText = [System.IO.File]::ReadAllText($fmj, $utf8)
$fmjText = $fmjText -replace '"version":\s*"[^"]*"', "`"version`": `"$ModVersion+$McVersion`""
$fmjText = $fmjText -replace '"minecraft":\s*"[^"]*"', "`"minecraft`": `"$McVersion`""
[System.IO.File]::WriteAllText($fmj, $fmjText, $utf8)

# ---- 3) javac (mixin annotation processor kapali: intermediary dogrudan) ----
# Sürüme özel kaynaklar (src/version/<mc-surumu>/java) ANA kaynaga eklenir:
# tek ağaç, sürüme göre küçük farklar (BeyazGlif imzasi gibi).
$versionSrc = Join-Path $koku "src\version\$McVersion\java\com\yikimlient\client"
$kaynaklar = @("$src\*.java", "$src\mixin\*.java")
if (Test-Path $versionSrc) {
    $kaynaklar += "$versionSrc\*.java"
    Write-Host "   surume ozel kaynak: src/version/$McVersion ($((Get-ChildItem $versionSrc -Filter '*.java').Count) dosya)"
}
else {
    Write-Host "   surume ozel kaynak yok (tum kaynak ana agactan)"
}

Write-Host "[1/3] Java 21 derleniyor ($McVersion)..."
$eapSave = $ErrorActionPreference
$ErrorActionPreference = "Continue"
$cp | Out-File "$env:TEMP\yikim-cp.txt" -Encoding UTF8
$cpTam = "$cp;$libKok\it\unimi\dsi\fastutil\8.5.18\fastutil-8.5.18.jar"
$cpTam = (($cpTam -split ';' | Where-Object { $_ -and (Test-Path $_) }) -join ';')
& javac --release 21 -encoding UTF-8 -nowarn -proc:none -cp $cpTam -d $out @kaynaklar 2>&1 |
    ForEach-Object { $_.ToString() } | Out-File "$env:TEMP\yikim-javac.txt" -Encoding UTF8
$ErrorActionPreference = $eapSave
if ($LASTEXITCODE -ne 0) {
    Write-Host "DERLEME HATASI ($McVersion):"
    Get-Content "$env:TEMP\yikim-javac.txt" -ErrorAction SilentlyContinue |
        Select-Object -Last 30 | ForEach-Object { Write-Host "  $_" }
    throw "derleme basarisiz - bu Minecraft surumu icin kaynak uyumsuz olabilir"
}

# ---- 4) mixin guvenlik kemeri ----
$mixinDizin = Join-Path $out "com\yikimlient\client\mixin"
$beklenen = @("KozmetikMixin", "KozmetikPlayerMixin", "PlayerBadgeMixin",
    "TabBadgeMixin", "YikimFontStokMixin", "YikimFontCtxSahasi")
foreach ($m in $beklenen) {
    if (-not (Test-Path (Join-Path $mixinDizin "$m.class"))) {
        throw "mixin sinifi uretilmedi: $m ($McVersion)"
    }
}
Write-Host "   mixin siniflari tamam ($($beklenen.Count))"

# ---- 5) jar ----
$manifest = @"
Manifest-Version: 1.0
Fabric-Jar-Type: classes
Fabric-Mapping-Namespace: intermediary
Built-By: YIKIMLient
"@
$tmpMan = Join-Path $koku "derleme\MANIFEST.MF"
New-Item -ItemType Directory -Force -Path (Split-Path $tmpMan) | Out-Null
[System.IO.File]::WriteAllText($tmpMan, $manifest, $utf8)

if (Test-Path $jarOut) { Remove-Item -Force $jarOut }
& jar cfm $jarOut $tmpMan -C $out . -C $res .
if ($LASTEXITCODE -ne 0) { throw "jar paketleme basarisiz" }

# ---- 6) dogrulama ----
$boyut = [math]::Round((Get-Item $jarOut).Length / 1KB)
Write-Host "TAMAM: $jarOut ($boyut KB)"
$fmjSon = (Get-Content $fmj -Raw | ConvertFrom-Json)
"   fabric.mod.json: version=$($fmjSon.version) minecraft=$($fmjSon.depends.minecraft)"
