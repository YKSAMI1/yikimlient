# YIKIM Client mod derleme betigi — 1.21.11
# Kullanim: powershell -File derle-1.21.11.ps1
param(
    [string]$McVersion = "1.21.11",
    [string]$ModVersion = "1.4.0"
)

$ErrorActionPreference = "Stop"
$koku = Split-Path -Parent $PSScriptRoot        # yikim-mod/
$d = Join-Path $koku "araclar"
$lib = "$env:APPDATA\.yikimlient\libraries"
$fa = Join-Path $d "fabric-api-mods"
$src = Join-Path $koku "src\main\java\com\yikimlient\client"
$res = Join-Path $koku "src\main\resources"
$out = Join-Path $koku "derleme\classes"
$jarOut = Join-Path $koku "derleme\yikimlient-$ModVersion+$McVersion.jar"

if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory -Force -Path $out | Out-Null

$cpItems = @(
    "$d\mc-$McVersion-intermediary.jar",
    "$d\fabric-loader-0.19.5.jar",
    "$d\slf4j-api-2.0.16.jar",
    "$d\mixin.jar",
    "$d\asm-9.7.jar",
    "$d\asm-tree-9.7.jar",
    "$d\asm-commons-9.7.jar",
    "$d\asm-util-9.7.jar",
    "$lib\org\lwjgl\lwjgl-glfw\3.3.3\lwjgl-glfw-3.3.3.jar",
    "$lib\org\lwjgl\lwjgl\3.3.3\lwjgl-3.3.3.jar",
    "$lib\org\joml\joml\1.10.8\joml-1.10.8.jar",
    "$lib\com\mojang\brigadier\1.3.10\brigadier-1.3.10.jar",
    "$lib\io\netty\netty-buffer\4.2.7.Final\netty-buffer-4.2.7.Final.jar",
    "$lib\io\netty\netty-transport\4.2.7.Final\netty-transport-4.2.7.Final.jar",
    "$lib\io\netty\netty-resolver\4.2.7.Final\netty-resolver-4.2.7.Final.jar",
    "$lib\io\netty\netty-common\4.2.7.Final\netty-common-4.2.7.Final.jar",
    "$lib\com\mojang\authlib\7.0.61\authlib-7.0.61.jar",
    "$fa\fabric-lifecycle-events-v1-2.6.15+4ebb5c083e.jar",
    "$fa\fabric-key-binding-api-v1-1.1.7+4fc5413f3e.jar",
    "$fa\fabric-rendering-v1-16.2.10+0290ad933e.jar",
    "$fa\fabric-networking-api-v1-5.1.6+6b6d71a53e.jar",
    "$fa\fabric-message-api-v1-6.1.12+4ebb5c083e.jar",
    "$fa\fabric-api-base-1.0.5+4ebb5c083e.jar",
    "$fa\fabric-screen-api-v1-2.0.6+4fc5413f3e.jar",
    "$fa\fabric-resource-loader-v0-1.0.5+4ebb5c083e.jar"  # hata olursa kaldir
)
$cp = ($cpItems | Where-Object { Test-Path $_ }) -join ";"

Write-Host "[1/3] Java 21 derleniyor ($McVersion)..."

# MOD_VERSION sabitini SENKRONIZE ET — javac'tan ÖNCE (yoksa eski surum derlenir!)
$clientSrc = "$src\YikimClient.java"
$clientText = [System.IO.File]::ReadAllText($clientSrc)
$clientText = $clientText -replace 'MOD_VERSION = "[^"]*"', "MOD_VERSION = `"$ModVersion`""
[System.IO.File]::WriteAllText($clientSrc, $clientText, (New-Object System.Text.UTF8Encoding($false)))

# javac — -proc:none: mixin annotation processor'u kapat (refmap yok, intermediary direkt)
# PS 5.1 tuzağı: EAP=Stop iken native stderr (javac notları) 2>$null'la bile patlar →
# javac sırasında EAP gevşetilir, çıkış kodu $LASTEXITCODE ile yargılanır.
$eapSave = $ErrorActionPreference
$ErrorActionPreference = "Continue"
$cp | Out-File "$env:TEMP\yikim-cp.txt" -Encoding UTF8
$cp = "$cp;$lib\it\unimi\dsi\fastutil\8.5.18\fastutil-8.5.18.jar"
& javac --release 21 -encoding UTF-8 -nowarn -proc:none -cp $cp -d $out "$src\*.java" "$src\mixin\*.java" 2>&1 | ForEach-Object { $_.ToString() } | Out-File "$env:TEMP\yikim-javac.txt" -Encoding UTF8
$ErrorActionPreference = $eapSave
if ($LASTEXITCODE -ne 0) {
    # KRITIK: eskiden burada "mixin'siz derle" yedegi vardi. Mixin'lerden biri
    # derlenemediginde jar SESSIZCE mixin'siz uretiliyordu; oyunda rozet/pelerin/
    # elitra kodu hic yuklenmiyordu ("hicbiri gorunmuyor" sikayetinin koku).
    # Artik hata acikca raporlanir ve bozuk jar YAYINLANMAZ.
    Write-Host "DERLEME HATASI (mixin dahil):"
    Get-Content "$env:TEMP\yikim-javac.txt" -ErrorAction SilentlyContinue |
        Select-Object -Last 25 | ForEach-Object { Write-Host "  $_" }
    throw "derleme basarisiz - mixin'siz jar uretilmez"
}

# Guvenlik kemeri: mixin siniflarinin HEPSI sinif dizininde olmali.
$mixinDizin = Join-Path $out "com\yikimlient\client\mixin"
$beklenen = @("KozmetikMixin", "KozmetikPlayerMixin", "PlayerBadgeMixin",
    "TabBadgeMixin", "YikimFontStokMixin", "YikimFontCtxSahasi")
foreach ($m in $beklenen) {
    if (-not (Test-Path (Join-Path $mixinDizin "$m.class"))) {
        throw "mixin sinifi uretilmedi: $m"
    }
}

Write-Host "[2/3] fabric.mod.json surumu ayarlaniyor..."
# PowerShell 5.1 TUZAGI: ConvertFrom-Json/ConvertTo-Json turu Turkce karakterleri
# '?' yapiyordu (meta aciklamasi her derlemede bozuluyordu). Artik .NET ile
# UTF-8 (BOM'suz) okunur ve yalniz "version" / "minecraft" alanlarina dokunulur.
$fmj = Join-Path $res "fabric.mod.json"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$metin = [System.IO.File]::ReadAllText($fmj, $utf8)
$metin = $metin -replace '"version":\s*"[^"]*"', "`"version`": `"$ModVersion+$McVersion`""
$metin = $metin -replace '"minecraft":\s*"[^"]*"', "`"minecraft`": `"$McVersion`""
[System.IO.File]::WriteAllText($fmj, $metin, $utf8)

Write-Host "[3/3] JAR paketleniyor: $jarOut"
$manifest = @"
Manifest-Version: 1.0
Fabric-Jar-Type: classes
Fabric-Mapping-Namespace: intermediary
Built-By: YIKIMLient
"@
$tmpMan = Join-Path $koku "derleme\MANIFEST.MF"
New-Item -ItemType Directory -Force -Path (Split-Path $tmpMan) | Out-Null
[System.IO.File]::WriteAllText($tmpMan, $manifest, (New-Object System.Text.UTF8Encoding($false)))

if (Test-Path $jarOut) { Remove-Item -Force $jarOut }
& jar cfm $jarOut $tmpMan -C $out . -C $res .
if ($LASTEXITCODE -ne 0) { throw "jar paketleme basarisiz" }
Write-Host "TAMAM: $jarOut"
