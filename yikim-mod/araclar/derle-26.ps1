# YIKIM Client mod derleme betigi — MC 26.x (Vulkan nesli)
#
# Kullanim:
#   powershell -ExecutionPolicy Bypass -File yikim-mod\araclar\derle-26.ps1 -McVersion 26.1 -ModVersion 1.0.0-26.1
#
# ONCE:
#   node yikim-mod\araclar\surum-hazirla-26.mjs 26.1
#   node tools\named-src.mjs                 (official kaynak kopyasi)
#
# 1.21.x'ten farklari:
#   * obf->intermediary remap YOK: 26.x client jar zaten resmi adli
#   * kaynak araclar/named-1.21.11.json ile src/official altina cevrilir
#   * jar MANIFEST: Fabric-Mapping-Namespace: official
param(
    [Parameter(Mandatory = $true)][string]$McVersion,
    [Parameter(Mandatory = $true)][string]$ModVersion
)

$ErrorActionPreference = "Stop"
$koku = Split-Path -Parent $PSScriptRoot
$d = Join-Path $koku "araclar"
$src = Join-Path $koku "src\official"
$res = Join-Path $koku "src\official\resources"
$out = Join-Path $koku "derleme\classes-26"
$jarOut = Join-Path $koku "derleme\yikimlient-$ModVersion+$McVersion.jar"
$utf8 = New-Object System.Text.UTF8Encoding($false)

if (-not (Test-Path (Join-Path $d "hazir-$McVersion.json"))) {
    throw "once hazirlik: node yikim-mod\araclar\surum-hazirla-26.mjs $McVersion"
}
$hazir = Get-Content (Join-Path $d "hazir-$McVersion.json") -Raw -Encoding UTF8 | ConvertFrom-Json
$mcJar = Join-Path $d $hazir.mc
if (-not (Test-Path $mcJar)) { throw "mc jar yok: $mcJar" }

# ---- classpath ----
$cpItems = @(
    $mcJar,
    (Join-Path $d $hazir.loader),
    (Join-Path $d "mixin.jar"),
    (Join-Path $d "asm-9.7.jar"),
    (Join-Path $d "asm-tree-9.7.jar"),
    (Join-Path $d "asm-commons-9.7.jar"),
    (Join-Path $d "asm-util-9.7.jar"),
    (Join-Path $d "slf4j-api-2.0.16.jar")
)
# kutuphane (Mojang JSON'dan)
$kut = Join-Path $d "kutuphane\$McVersion"
if (Test-Path $kut) { $cpItems += (Get-ChildItem $kut -Filter "*.jar" | ForEach-Object { $_.FullName }) }
# fabric-api modulleri (jiarist icinden acilan META-INF/jars/*.jar)
$fa = Join-Path $d "fabric-api\$McVersion"
if (Test-Path $fa) {
    $cpItems += (Get-ChildItem $fa -Filter "*.jar" -File | ForEach-Object { $_.FullName })
    $moduller = Join-Path $fa "moduller"
    if (Test-Path $moduller) { $cpItems += (Get-ChildItem $moduller -Filter "*.jar" -File | ForEach-Object { $_.FullName }) }
}
# yerdeki ek kutuphaneler (1.21.x derlemesinden bilinenler)
$eskiLib = Join-Path $d "..\..\AppData\Roaming\.yikimlient\libraries"
if (Test-Path $eskiLib) {
    foreach ($l in @(
        "org\lwjgl\lwjgl\3.3.3\lwjgl-3.3.3.jar",
        "org\lwjgl\lwjgl-glfw\3.3.3\lwjgl-glfw-3.3.3.jar",
        "org\joml\joml\1.10.8\joml-1.10.8.jar",
        "com\mojang\brigadier\1.3.10\brigadier-1.3.10.jar",
        "io\netty\netty-buffer\4.2.7.Final\netty-buffer-4.2.7.Final.jar",
        "io\netty\netty-transport\4.2.7.Final\netty-transport-4.2.7.Final.jar",
        "io\netty\netty-resolver\4.2.7.Final\netty-resolver-4.2.7.Final.jar",
        "io\netty\netty-common\4.2.7.Final\netty-common-4.2.7.Final.jar",
        "com\mojang\authlib\7.0.61\authlib-7.0.61.jar",
        "it\unimi\dsi\fastutil\8.5.18\fastutil-8.5.18.jar",
        "com\google\code\gson\gson\2.11.0\gson-2.11.0.jar",
        "com\google\guava\guava\33.3.1-jre\guava-33.3.1-jre.jar"
    )) {
        $p = Join-Path $eskiLib $l
        if (Test-Path $p) { $cpItems += $p }
    }
}
# kutuphane-<V> icinden de gson/guava/geniş arama yap
if (Test-Path $kut) {
    foreach ($ad in @("gson", "guava", "fastutil", "joml", "authlib", "brigadier", "netty", "lwjgl", "slf4j", "log4j", "datafixerupper", "commons")) {
        $cpItems += (Get-ChildItem $kut -Filter "*$ad*.jar" -ErrorAction SilentlyContinue | ForEach-Object { $_.FullName })
    }
}
$cpItems = $cpItems | Where-Object { $_ -and (Test-Path $_) } | Select-Object -Unique
$cp = ($cpItems -join ";")
"classpath girdi sayisi: $($cpItems.Count)"

if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory -Force -Path $out | Out-Null

# ---- 0) JDK secimi: 26.x client jar Java 25 ile derlenmis (class major 69) ----
$javac = "javac"
$jarArac = "jar"
foreach ($aday in @("$env:ProgramFiles\Java\jdk-25\bin\javac.exe", "$env:ProgramFiles\Java\jdk-25.0.3\bin\javac.exe")) {
    if (Test-Path $aday) { $javac = $aday; break }
}
$jarAday = if ($javac -ne "javac") { Join-Path (Split-Path $javac) "jar.exe" } else { "jar" }
if (Test-Path $jarAday) { $jarArac = $jarAday }
"javac: $javac"

# ---- 1) official kaynak: her derlemede YENIDEN uret (tek kaynak agaci) ----
Push-Location (Split-Path -Parent $koku)
try {
    Write-Host "[0/3] official kaynak uretiliyor (adapter: 26)..."
    & node "tools\named-src.mjs" --adapter 26 | Out-Host
    if ($LASTEXITCODE -ne 0) { throw "named-src basarisiz" }
    & node "tools\named-yamalar.mjs" --surum $McVersion | Out-Host
    if ($LASTEXITCODE -ne 0) { throw "named-yamalar basarisiz" }
}
finally { Pop-Location }

# ---- 2) MOD_VERSION senkronizasyonu ----
$clientSrc = Join-Path $src "com\yikimlient\client\YikimClient.java"
$clientText = [System.IO.File]::ReadAllText($clientSrc)
$clientText = $clientText -replace 'MOD_VERSION = "[^"]*"', "MOD_VERSION = `"$ModVersion`""
[System.IO.File]::WriteAllText($clientSrc, $clientText, $utf8)

# ---- 3) derle ----
Write-Host "[1/2] Java 21 derleniyor ($McVersion, official mappings)..."
$eapSave = $ErrorActionPreference
$ErrorActionPreference = "Continue"
& $javac --release 25 -encoding UTF-8 -nowarn -Xmaxerrs 2000 -proc:none -cp $cp -d $out (Get-ChildItem $src -Recurse -Filter "*.java" | ForEach-Object { $_.FullName }) 2>&1 |
    ForEach-Object { $_.ToString() } | Out-File "$env:TEMP\yikim-javac-26.txt" -Encoding UTF8
$ErrorActionPreference = $eapSave
if ($LASTEXITCODE -ne 0) {
    Write-Host "DERLEME HATASI ($McVersion):"
    Get-Content "$env:TEMP\yikim-javac-26.txt" -ErrorAction SilentlyContinue |
        Select-Object -Last 30 | ForEach-Object { Write-Host "  $_" }
    throw "26.x derleme basarisiz"
}

$mixinDizin = Join-Path $out "com\yikimlient\client\mixin"
$beklenen = @("KozmetikMixin", "KozmetikPlayerMixin", "PlayerBadgeMixin", "TabBadgeMixin", "YikimFontStokMixin", "YikimFontCtxSahasi")
foreach ($m in $beklenen) {
    if (-not (Test-Path (Join-Path $mixinDizin "$m.class"))) { throw "mixin sinifi uretilmedi: $m" }
}

# ---- 4) fabric.mod.json + jar ----
Write-Host "[2/2] jar paketleniyor: $jarOut"
$fmj = Join-Path $res "fabric.mod.json"
$metin = [System.IO.File]::ReadAllText($fmj, $utf8)
$metin = $metin -replace '"version":\s*"[^"]*"', "`"version`": `"$ModVersion+$McVersion`""
$metin = $metin -replace '"minecraft":\s*"[^"]*"', "`"minecraft`": `"$McVersion`""
# 26.x: Java 25 + Fabric loader 0.20.x gerekir (Vulkan nesli jar'lari class major 69)
$metin = $metin -replace '"java":\s*"[^"]*"', '"java": ">=25"'
$metin = $metin -replace '"fabricloader":\s*"[^"]*"', '"fabricloader": ">=0.20.1"'
[System.IO.File]::WriteAllText($fmj, $metin, $utf8)

$manifest = @"
Manifest-Version: 1.0
Fabric-Jar-Type: classes
Fabric-Mapping-Namespace: official
Built-By: YIKIMLient
"@
$tmpMan = Join-Path $koku "derleme\MANIFEST-26.MF"
[System.IO.File]::WriteAllText($tmpMan, $manifest, $utf8)

if (Test-Path $jarOut) { Remove-Item -Force $jarOut }
& $jarArac cfm $jarOut $tmpMan -C $out . -C $res .
if ($LASTEXITCODE -ne 0) { throw "jar paketleme basarisiz" }
"TAMAM: $jarOut"