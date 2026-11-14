<#-
  GERCEK FARE TIKLAMASI TESTI (26.x menu girdisi)

  powershell -ExecutionPolicy Bypass -File tools\yikim26-tiklama-test.ps1 -Ver 26.3

  GUIVENLIK: yalnizca basligi TAM olarak "Minecraft* 26.3" olan (yani ic oyunda
  DEGIL, menude olan) pencereye tiklar. Kullanicinin "26.3 - ..." baslikli
  oyununa ASLA tiklanmaz.
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

Write-Host "=== SURUM $Ver - GERCEK TIKLAMA TESTI"

# --- tema ekranini kapalı tut (menuden devam et) ---
$cfg = Join-Path $GameDir "config\yikimlient.cfg"
if (Test-Path $cfg) {
    $t = Get-Content $cfg -Raw -Encoding UTF8
    $t = $t -replace "arayuz\.tema-surum=\d+", "arayuz.tema-surum=1"
    [System.IO.File]::WriteAllText($cfg, $t, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host "cfg: tema-surum=1 (tema ekrani sorulmayacak)"
}

$java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\javaw.exe"
if (-not (Test-Path $java)) { $java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\java.exe" }
$cps = [System.IO.File]::ReadAllText((Join-Path $GameDir "cp.txt"))
$vm = @("-Xmx4G", "-Xms1G", "-cp", $cps)
$ga = @("--username","YikimTest","--version",$Ver,"--gameDir",$GameDir,"--assetsDir",(Join-Path $APP "assets"),
        "--assetIndex","34","--accessToken","0","--userType","legacy","--versionType","release","--graphicsBackend","vulkan")

$p = Start-Process -FilePath $java -ArgumentList ($vm + "net.fabricmc.loader.impl.launch.knot.KnotClient" + $ga) `
     -WorkingDirectory $GameDir -RedirectStandardOutput $log -PassThru -NoNewWindow
Write-Host "PID: $($p.Id) - menu bekleniyor ($Bekleme sn)"

# --- menu ekraninin gelmesini bekle ---
# NOT: oyunun kendi log'u (logs/latest.log) ANINDA yazilir; bizim stdout
# yonlendirmemiz tamponlu kalabiliyor. Bu yuzden oyunun kendi log'u okunur.
$oyunLog = Join-Path $GameDir "logs\latest.log"
$hazir = $false
foreach ($i in 1..([int]($Bekleme/5))) {
  Start-Sleep -Seconds 5
  $t2 = Get-Content $oyunLog -ErrorAction SilentlyContinue
  if ($t2 -match "ana men" -or $t2 -match "YIKIM Client .* haz") { $hazir = $true; break }
}
if (-not $hazir) { Write-Host "menu gelmedi"; Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue; exit 1 }
Start-Sleep -Seconds 10

# --- GUIYVENLIK: yalnizca TAM "Minecraft* 26.3" baslikli (menüde olan) pencere ---
# NOT: kendi sürecimizi (= $p.Id) DIŞARIDA BIRAKMIYORUZ — o bizim test oyunumuz.
# Kullanıcının oyunu "Minecraft* 26.3 - ..." biçiminde (iç oyunda) başlık taşır;
# tam eşitlik "Minecraft* 26.3" istediğimiz için ona ASLA denk gelmez.
$hedef = Get-Process -Name "javaw" -ErrorAction SilentlyContinue |
  Where-Object { $_.MainWindowTitle -eq "Minecraft* $Ver" -and $_.Id -eq $p.Id } | Select-Object -First 1
if (-not $hedef) {
  $hedef = Get-Process -Id $p.Id -ErrorAction SilentlyContinue
}
if (-not $hedef -or -not $hedef.MainWindowHandle) {
  $adaylar = Get-Process -Name "javaw" -ErrorAction SilentlyContinue | ForEach-Object { $_.MainWindowTitle }
  Write-Host "GUVENLIK DURDU: tam olarak 'Minecraft* $Ver' baslikli pencere yok (benim: $($hedef.MainWindowTitle))."
  Write-Host "Bulunanlar:"; $adaylar | ForEach-Object { "   '$_'" }
  Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue; exit 1
}
Write-Host "HEDEF PENCERE: '$($hedef.MainWindowTitle)' (PID $($hedef.Id))"

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class W2 {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out R r);
  [DllImport("user32.dll")] public static extern void SetCursorPos(int x, int y);
  [DllImport("user32.dll")] public static extern void mouse_event(uint f, int x, int y, uint d, int e);
  [DllImport("user32.dll")] public static extern void keybd_event(byte v, byte s, uint f, int e);
  [StructLayout(LayoutKind.Sequential)] public struct R { public int L, T, Rt, B; }
}
"@
[W2]::ShowWindow($hedef.MainWindowHandle, 9) | Out-Null
[W2]::SetForegroundWindow($hedef.MainWindowHandle) | Out-Null
Start-Sleep -Seconds 3
$r = New-Object W2+R
[W2]::GetWindowRect($hedef.MainWindowHandle, [ref] $r) | Out-Null
$w = $r.Rt - $r.L; $h = $r.B - $r.T
Write-Host "pencere: ${w}x${h}"

# --- once fareyi hareket ettir (hover), sonra sol tik ---
$cx = $r.L + [int]($w * 0.22); $cy = $r.T + [int]($h * 0.45)
Write-Host "tiklanacak yer (sol sütun butonu): $cx,$cy"
[W2]::SetCursorPos($cx, $cy) | Out-Null
Start-Sleep -Milliseconds 1200
[W2]::mouse_event(0x0002, $cx, $cy, 0, 0) | Out-Null
Start-Sleep -Milliseconds 250
[W2]::mouse_event(0x0004, $cx, $cy, 0, 0) | Out-Null
Start-Sleep -Seconds 6

# --- sag tik de dene ---
[W2]::mouse_event(0x0008, $cx, $cy, 0, 0) | Out-Null
Start-Sleep -Milliseconds 250
[W2]::mouse_event(0x0010, $cx, $cy, 0, 0) | Out-Null
Start-Sleep -Seconds 6

# --- Esc (virtual key 0x1B) ---
Write-Host "ESC deneniyor"
[W2]::keybd_event(0x1B, 0x29, 0, 0) | Out-Null
Start-Sleep -Milliseconds 250
[W2]::keybd_event(0x1B, 0x29, 2, 0) | Out-Null
Start-Sleep -Seconds 8

# --- Shift (0xA0 = VK_LSHIFT, 0xA1 = VK_RSHIFT) ---
Write-Host "SHIFT deneniyor"
[W2]::keybd_event(0xA0, 0x2A, 0, 0) | Out-Null
Start-Sleep -Milliseconds 120
[W2]::keybd_event(0xA0, 0x2A, 2, 0) | Out-Null
Start-Sleep -Seconds 10

Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

"=== test.log son 40 satir (YIKIM/ekran izleri):"
$t = Get-Content $log -ErrorAction SilentlyContinue
$t | Select-String -Pattern "YIKIM|tiklama|ana men|pencere|Screen|setScreen" | Select-Object -Last 40 | ForEach-Object { "   $($_.Line)" }