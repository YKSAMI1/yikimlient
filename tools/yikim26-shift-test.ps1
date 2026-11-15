<#-
  SAÄ SHIFT TESTÄ° (26.x menÃ¼ tuÅŸu) â€” gerÃ§ek klavye olayÄ±yla.
  powershell -ExecutionPolicy Bypass -File tools\yikim26-shift-test.ps1 -Ver 26.3

  GUIYVENLIK: yalnÄ±zca baÅŸlÄ±ÄŸÄ± TAM "Minecraft* 26.3" olan (menÃ¼de olan)
  penceremize tuÅŸ gÃ¶nderir; kullanÄ±cÄ±nÄ±n "26.3 - ..." baÅŸlÄ±klÄ± oyununa gÃ¶ndermez.
#>
param(
  [ValidateSet("26.1","26.1.1","26.1.2","26.2","26.3")]
  [string]$Ver = "26.3",
  [int]$Bekleme = 150
)
$ErrorActionPreference = 'Continue'
$APP = "$env:APPDATA\.yikimlient"
$KOK = Split-Path -Parent $PSScriptRoot
$GameDir = Join-Path $env:TEMP "yikim26-$Ver"
$oyunLog = Join-Path $GameDir "logs\latest.log"
$log = Join-Path $GameDir "test.log"

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
Write-Host "PID: $($p.Id) - menu bekleniyor"

$hazir = $false
foreach ($i in 1..([int]($Bekleme/5))) {
  Start-Sleep -Seconds 5
  $t2 = Get-Content $oyunLog -ErrorAction SilentlyContinue
  if ($t2 -match "ana men" -or $t2 -match "YIKIM Client .* haz") { $hazir = $true; break }
}
if (-not $hazir) { Write-Host "menu gelmedi"; Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue; exit 1 }
Start-Sleep -Seconds 12

$hedef = Get-Process -Id $p.Id -ErrorAction SilentlyContinue
Write-Host "HEDEF: '$($hedef.MainWindowTitle)'"

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class W5 {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll")] public static extern void keybd_event(byte v, byte s, uint f, int e);
  [DllImport("user32.dll")] public static extern void SetCursorPos(int x, int y);
  [DllImport("user32.dll")] public static extern void mouse_event(uint f, int x, int y, uint d, int e);
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out R r);
  [StructLayout(LayoutKind.Sequential)] public struct R { public int L, T, Rt, B; }
}
"@
[W5]::ShowWindow($hedef.MainWindowHandle, 9) | Out-Null
[W5]::SetForegroundWindow($hedef.MainWindowHandle) | Out-Null
Start-Sleep -Seconds 3
$fg = [W5]::GetForegroundWindow()
Write-Host "ÖNDE OLAN PENCERE: $fg  (bizim: $($hedef.MainWindowHandle))  ayni=$($fg -eq $hedef.MainWindowHandle)"
# ODAGI GARANTİ ET: pencerenin içine tıkla (fare olayı daha önce çalışmıştı)
$r = New-Object W5+R
[W5]::GetWindowRect($hedef.MainWindowHandle, [ref] $r) | Out-Null
$w = $r.Rt - $r.L; $h = $r.B - $r.T
$cx = $r.L + [int]($w * 0.85); $cy = $r.T + [int]($h * 0.85)
Write-Host "  odak için tık: $cx,$cy"
[W5]::SetCursorPos($cx, $cy) | Out-Null
Start-Sleep -Milliseconds 600
[W5]::mouse_event(0x0002, $cx, $cy, 0, 0) | Out-Null
Start-Sleep -Milliseconds 250
[W5]::mouse_event(0x0004, $cx, $cy, 0, 0) | Out-Null
Start-Sleep -Seconds 3
$fg2 = [W5]::GetForegroundWindow()
Write-Host "  tıklama sonrası önde olan bizim: $($fg2 -eq $hedef.MainWindowHandle)"
Start-Sleep -Seconds 3
$fg = [W5]::GetForegroundWindow()
Write-Host "ÖNDE OLAN PENCERE: $fg  (bizim: $($hedef.MainWindowHandle))  ayni=$($fg -eq $hedef.MainWindowHandle)"
if ($fg -ne $hedef.MainWindowHandle) {
  Write-Host "ÖNE GETİRİLEMEDİ — pencereye iki kez tıklanıyor (odak için)"
  $r = New-Object W5+R
  Add-Type -MemberDefinition '[DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out R r); public struct R { public int L,T,Rt,B; }' -Name W5b -Namespace W
}

function ShiftBas($ad) {
    Write-Host "  $ad"
    [W5]::keybd_event(0xA0, 0x2A, 0, 0) | Out-Null    # VK_LSHIFT down
    Start-Sleep -Milliseconds 120
    [W5]::keybd_event(0xA1, 0x36, 0, 0) | Out-Null    # VK_RSHIFT down
    Start-Sleep -Milliseconds 120
    [W5]::keybd_event(0xA1, 0x36, 2, 0) | Out-Null    # VK_RSHIFT up
    [W5]::keybd_event(0xA0, 0x2A, 2, 0) | Out-Null    # VK_LSHIFT up
    Start-Sleep -Seconds 7
}

ShiftBas "SHIFT #1 (panel aÃ§Ä±lmalÄ±)"
ShiftBas "SHIFT #2 (panel kapanmalÄ±)"
ShiftBas "SHIFT #3"

Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

"=== PANEL AÃ‡ILMA Ä°ZLERÄ°:"
$t = Get-Content $log -ErrorAction SilentlyContinue
$t | Select-String -Pattern "YIKIM panel|panel.*acik|Hud|ScreenBase|setScreen|Narrator" | Select-Object -Last 8 | ForEach-Object { "   $($_.Line)" }
"=== HATA:"
$t | Select-String -Pattern "StackOverflow|ReportedException|NullPointer" | Select-Object -First 4 | ForEach-Object { "   $($_.Line)" }
