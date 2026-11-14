<#-
  26.x menu ekran goruntusu alir (buton konumlarini gorebilmek icin).

  powershell -ExecutionPolicy Bypass -File tools\yikim26-goruntu.ps1 -Ver 26.3 -Cikti shot.png
##>
param(
  [ValidateSet("26.1","26.1.1","26.1.2","26.2","26.3")]
  [string]$Ver = "26.3",
  [int]$Bekleme = 150,
  [string]$Cikti = "menu.png"
)
$ErrorActionPreference = 'Continue'
$APP = "$env:APPDATA\.yikimlient"
$KOK = Split-Path -Parent $PSScriptRoot
$GameDir = Join-Path $env:TEMP "yikim26-$Ver"
$log = Join-Path $GameDir "test.log"
$oyunLog = Join-Path $GameDir "logs\latest.log"

$cfg = Join-Path $GameDir "config\yikimlient.cfg"
if (Test-Path $cfg) {
    $t = Get-Content $cfg -Raw -Encoding UTF8
    $t = $t -replace "arayuz\.tema-surum=\d+", "arayuz.tema-surum=1"
    [System.IO.File]::WriteAllText($cfg, $t, (New-Object System.Text.UTF8Encoding($false)))
}

$java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\javaw.exe"
$cps = [System.IO.File]::ReadAllText((Join-Path $GameDir "cp.txt"))
$vm = @("-Xmx4G", "-Xms1G", "-cp", $cps)
$ga = @("--username","YikimTest","--version",$Ver,"--gameDir",$GameDir,"--assetsDir",(Join-Path $APP "assets"),
        "--assetIndex","34","--accessToken","0","--userType","legacy","--versionType","release","--graphicsBackend","vulkan")

$p = Start-Process -FilePath $java -ArgumentList ($vm + "net.fabricmc.loader.impl.launch.knot.KnotClient" + $ga) `
     -WorkingDirectory $GameDir -RedirectStandardOutput $log -PassThru -NoNewWindow
Write-Host "PID: $($p.Id) - menu bekleniyor"

$hazir = $false
foreach ($i in 1..([int]($Bekleme/5))) {
  Start-Sleep -Seconds 5
  $t2 = Get-Content $oyunLog -ErrorAction SilentlyContinue
  if ($t2 -match "ana men" -or $t2 -match "YIKIM Client .* haz") { $hazir = $true; break }
}
if (-not $hazir) { Write-Host "menu gelmedi"; Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue; exit 1 }
Start-Sleep -Seconds 15

$hedef = Get-Process -Id $p.Id -ErrorAction SilentlyContinue
Write-Host "HEDEF: '$($hedef.MainWindowTitle)'"

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class W4 {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern void keybd_event(byte v, byte s, uint f, int e);
}
"@
[W4]::ShowWindow($hedef.MainWindowHandle, 9) | Out-Null
[W4]::SetForegroundWindow($hedef.MainWindowHandle) | Out-Null
Start-Sleep -Seconds 3

# GDI BitBlt Vulkan icerigini YAKALAMAZ (siyah ekran). Oyunun KENDI ekran
# goruntusu (F2) kullanilir: oyunun render yolundan gectigi icin icerigi goruruz.
Write-Host "F2 (ekran goruntusu) gonderiliyor"
$shotsDir = Join-Path $GameDir "screenshots"
New-Item -ItemType Directory -Force -Path $shotsDir | Out-Null
$onceki = @()
if (Test-Path $shotsDir) { $onceki = Get-ChildItem $shotsDir -Filter "*.png" | ForEach-Object { $_.Name } }
[W4]::keybd_event(0x71, 0x3B, 0, 0) | Out-Null   # VK_F2 down
Start-Sleep -Milliseconds 250
[W4]::keybd_event(0x71, 0x3B, 2, 0) | Out-Null   # VK_F2 up
Start-Sleep -Seconds 5

$yeni = Get-ChildItem $shotsDir -Filter "*.png" -ErrorAction SilentlyContinue |
        Where-Object { $onceki -notcontains $_.Name } | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $yeni) { $yeni = Get-ChildItem $shotsDir -Filter "*.png" -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 1 }
if ($yeni) {
    $out = Join-Path $KOK $Cikti
    Copy-Item $yeni.FullName $out -Force
    Write-Host "GORUNTU: $out  ($([math]::Round($yeni.Length/1KB)) KB)  $($yeni.Name)"
} else {
    Write-Host "ekran goruntusu uretilmedi"
}

Start-Sleep -Seconds 20
Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue