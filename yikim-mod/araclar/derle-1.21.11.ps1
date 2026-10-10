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
    "$lib\org\lwjgl\lwjgl-glfw\3.3.3\lwjgl-glfw-3.3.3.jar",
    "$lib\org\lwjgl\lwjgl\3.3.3\lwjgl-3.3.3.jar",
    "$lib\org\joml\joml\1.10.8\joml-1.10.8.jar",
    "$lib\com\mojang\brigadier\1.3.10\brigadier-1.3.10.jar",
    "$fa\fabric-lifecycle-events-v1-2.6.15+4ebb5c083e.jar",
    "$fa\fabric-key-binding-api-v1-1.1.7+4fc5413f3e.jar",
    "$fa\fabric-rendering-v1-16.2.10+0290ad933e.jar",
    "$fa\fabric-api-base-1.0.5+4ebb5c083e.jar",
    "$fa\fabric-screen-api-v1-2.0.6+4fc5413f3e.jar",
    "$fa\fabric-resource-loader-v0-1.0.5+4ebb5c083e.jar"  # hata olursa kaldir
)
$cp = ($cpItems | Where-Object { Test-Path $_ }) -join ";"

Write-Host "[1/3] Java 21 derleniyor ($McVersion)..."
& javac --release 21 -encoding UTF-8 -nowarn -cp $cp -d $out "$src\*.java"
if ($LASTEXITCODE -ne 0) { throw "derleme basarisiz" }

Write-Host "[2/3] fabric.mod.json surumu ayarlaniyor..."
$fmj = Join-Path $res "fabric.mod.json"
$json = Get-Content $fmj -Raw -Encoding UTF8 | ConvertFrom-Json
$json.version = "$ModVersion+$McVersion"
$json.depends.minecraft = $McVersion
($json | ConvertTo-Json -Depth 10) | Set-Content $fmj -Encoding UTF8

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
