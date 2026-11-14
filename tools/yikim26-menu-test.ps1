<#-
  26.x MENU GIRDI TESTI v2 - menudeki butonlara tek tek gercek tiklama

  powershell -ExecutionPolicy Bypass -File tools\yikim26-menu-test.ps1 -Ver 26.3

  GUIYVENLIK: yalnizca basligi TAM "Minecraft* 26.3" olan (menu'de olan) penceremize
  tiklar; kullanicinin "Minecraft* 26.3 - ..." baslikli oyununa tiklanmaz.
##>
param(
  [ValidateSet("26.1","26.1.1","26.1.2","26.2","26.3")]
  [string]$Ver = "26.3",
  [int]$Bekleme = 150
)
$ErrorActionPreference = 'Continue'
$APP = "$env:APPDATA\.yikimlient"
$KOK = Split-Path -Parent $PSScriptRoot
$GameDir = Join-Path $env:TEMP "yikim26-$Ver"
$log = Join-Path $GameDir "test.log"
$oyunLog = Join-Path $GameDir "logs\latest.log"

Write-Host "=== SURUM $Ver - MENU GIRDI TESTI v2"

# tema sorusu kapali (menuden devam)
$cfg = Join-Path $GameDir "config\yikimlient.cfg"
if (Test-Path $cfg) {
    $t = Get-Content $cfg -Raw -Encoding UTF8
    $t = $t -replace "arayuz\.tema-surum=\d+", "arayuz.tema-surum=1"
    [System.IO.File]::WriteAllText($cfg, $t, (New-Object System.Text.UTF8Encoding($false)))
}

$java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\javaw.exe"
$cps = [System.IO.File]::ReadAllText((Join-Path $GameDir "cp.txt"))
$vm = @("-Xmx4G", "-Xms1G", "-Dyikimlient.debug=1", "-cp", $cps)
$ga = @("--username","YikimTest","--version",$Ver,"--gameDir",$GameDir,"--assetsDir",(Join-Path $APP "assets"),
        "--assetIndex","34","--accessToken","0","--userType","legacy","--versionType","release","--graphicsBackend","vulkan")

$p = Start-Process -FilePath $java -ArgumentList ($vm + "net.fabricmc.loader.impl.launch.knot.KnotClient" + $ga) `
     -WorkingDirectory $GameDir -RedirectStandardOutput $log -PassThru -NoNewWindow
Write-Host "PID: $($p.Id) - menu bekleniyor ($Bekleme sn)"

$hazir = $false
foreach ($i in 1..([int]($Bekleme/5))) {
  Start-Sleep -Seconds 5
  $t2 = Get-Content $oyunLog -ErrorAction SilentlyContinue
  if ($t2 -match "ana men" -or $t2 -match "YIKIM Client .* haz") { $hazir = $true; break }
}
if (-not $hazir) { Write-Host "menu gelmedi"; Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue; exit 1 }
Start-Sleep -Seconds 12

$hedef = Get-Process -Id $p.Id -ErrorAction SilentlyContinue
if (-not $hedef -or -not $hedef.MainWindowHandle) { Write-Host "pencere yok"; exit 1 }
Write-Host "HEDEF: '$($hedef.MainWindowTitle)' (PID $($hedef.Id))"

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class W3 {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out R r);
  [DllImport("user32.dll")] public static extern void SetCursorPos(int x, int y);
  [DllImport("user32.dll")] public static extern void mouse_event(uint f, int x, int y, uint d, int e);
  [StructLayout(LayoutKind.Sequential)] public struct R { public int L, T, Rt, B; }
}
"@
[W3]::ShowWindow($hedef.MainWindowHandle, 9) | Out-Null
[W3]::SetForegroundWindow($hedef.MainWindowHandle) | Out-Null
Start-Sleep -Seconds 3
$r = New-Object W3+R
[W3]::GetWindowRect($hedef.MainWindowHandle, [ref] $r) | Out-Null
$w = $r.Rt - $r.L; $h = $r.B - $r.T
Write-Host "pencere: ${w}x${h}"

function Tikla($oranX, $oranY, $ad) {
    $cx = $r.L + [int]($w * $oranX); $cy = $r.T + [int]($h * $oranY)
    Write-Host "  TIK: $ad  ($cx,$cy)"
    [W3]::SetCursorPos($cx, $cy) | Out-Null
    Start-Sleep -Milliseconds 900
    [W3]::mouse_event(0x0002, $cx, $cy, 0, 0) | Out-Null
    Start-Sleep -Milliseconds 250
    [W3]::mouse_event(0x0004, $cx, $cy, 0, 0) | Out-Null
    Start-Sleep -Seconds 7
}

# YIKIM menǌsǌ: sol sǌtun butonlarǌ (hera biri aralr)
$butonlar = @(
  @{x=0.13; y=0.42; ad="Tek Oyunculu"},
  @{x=0.13; y=0.52; ad="Cok Oyunculu"},
  @{x=0.13; y=0.62; ad="YIKIM Menu"},
  @{x=0.13; y=0.72; ad="Modlar"},
  @{x=0.13; y=0.82; ad="Ayarlar"},
  @{x=0.13; y=0.92; ad="Cikis"}
)
foreach ($b in $butonlar) { Tikla $b.x $b.y $b.ad }

Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

"=== TIKLAMA KAYDI:"
$t = Get-Content $log -ErrorAction SilentlyContinue
$t | Select-String -Pattern "YIKIM tiklama" | ForEach-Object { "   $($_.Line)" }
"=== HATA (gercek):"
$t | Select-String -Pattern "StackOverflow|ReportedException|NullPointerException" | Select-Object -First 5 | ForEach-Object { "   $($_.Line)" }
"=== EKRAN ACILMA IZLERI:"
$t | Select-String -Pattern "Stopping|Started \d+ worker|Loaded \d+ adv|Starting integrated|Narrator|YikimPanel|panel.*acik" | Select-Object -Last 8 | ForEach-Object { "   $($_.Line)" }