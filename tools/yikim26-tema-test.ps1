<#-
  TEMA SEÇİM EKRANI GİRİŞ TESTİ (gerçek fare + klavye olaylarıyla)

  KULLANIM: powershell -ExecutionPolicy Bypass -File tools\yikim26-tema-test.ps1 -Ver 26.3 -Mod fare
            ... -Mod tus    (Esc)

  Ne yapar:
    1) Test kurulumunu "tema sorusu açık" duruma getirir (arayuz.tema-surum=0)
    2) Oyunu başlatır, tema ekranının gelmesini bekler
    3) Gerçek fare tıklaması / Esc gönderir (Windows API)
    4) Logdan ekranın girdiyi alıp almadığını okur
-#>
param(
  [ValidateSet("26.1", "26.1.1", "26.1.2", "26.2", "26.3")]
  [string]$Ver = "26.3",
  [ValidateSet("fare", "tus")]
  [string]$Mod = "fare",
  [int]$Bekleme = 55
)

$ErrorActionPreference = 'Continue'
$APP = "$env:APPDATA\.yikimlient"
$KOK = Split-Path -Parent $PSScriptRoot
$GameDir = Join-Path $env:TEMP "yikim26-$Ver"
$log = Join-Path $GameDir "test.log"

Write-Host "=== SURUM $Ver / MOD $Mod"

# --- 1) tema sorusunu zorla (config'i sifirla) ---
$cfg = Join-Path $GameDir "config\yikimlient.cfg"
if (Test-Path $cfg) {
    $t = Get-Content $cfg -Raw -Encoding UTF8
    $t = $t -replace "arayuz\.tema-surum=\d+", "arayuz.tema-surum=0"
    $t = $t -replace "arayuz\.tema=\w+", "arayuz.tema=klasik"
    [System.IO.File]::WriteAllText($cfg, $t, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host "cfg: tema-surum=0 (tema ekrani acilacak)"
} else { Write-Host "cfg yok (ilk acilis zaten sorar)" }

# --- 2) baslat ---
$vm = @("-Xmx4G", "-Xms1G", "-cp", (Get-Content (Join-Path $GameDir "cp.txt") -Raw -ErrorAction SilentlyContinue))
if ($vm.Count -lt 3) { Write-Host "cp.txt yok - once tools\yikim26-test.ps1 -Ver $Ver calistir"; exit 1 }
$java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\javaw.exe"
$ga = @("--username","YikimTest","--version",$Ver,"--gameDir",$GameDir,"--assetsDir",(Join-Path $APP "assets"),
        "--assetIndex","34","--accessToken","0","--userType","legacy","--versionType","release","--graphicsBackend","vulkan")
$p = Start-Process -FilePath $java -ArgumentList ($vm + "net.fabricmc.loader.impl.launch.knot.KnotClient" + $ga) `
     -WorkingDirectory $GameDir -RedirectStandardOutput $log -PassThru -NoNewWindow
Write-Host "PID: $($p.Id) - tema ekrani bekleniyor ($Bekleme sn)"

# tema ekraninin gelmesini bekle: MODUN HAZIR oldugunu logdan dogrula.
# KRITIK GÜVENLİK: pencereyi ASLA "bulunan ilk Minecraft" ile seçme — bilgisayarda
# başka oyun açıksa (kullanıcı oynuyor olabilir) gerçek tıklama oraya gider!
$win = $null
foreach ($i in 1..24) {
  Start-Sleep -Seconds 5
  $t2 = Get-Content $log -ErrorAction SilentlyContinue
  if ($t2 -match "YIKIM Client .* haz") { break }
}
$adaylar = Get-Process -Name "javaw" -ErrorAction SilentlyContinue |
  Where-Object { $_.MainWindowTitle -like "*Minecraft*" -and $_.Id -ne $p.Id }
if (-not $adaylar) { Write-Host "oyun penceresi bulunamadi"; Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue; exit 1 }
# sürüm numarasını başlıkta ara: "Minecraft* 26.3" — kullanıcının oyunu bu eşleşmez
$win = $adaylar | Where-Object { $_.MainWindowTitle -match [regex]::Escape($Ver) } | Select-Object -First 1
if (-not $win) {
  Write-Host "GÜVENLİK DURDU: '$Ver' başlıklı pencere yok (bulunanlar: $(($adaylar | ForEach-Object { $_.MainWindowTitle }) -join ' | '))"
  Write-Host "Kullanıcının açık oyununa tıklanmak istenmedi - test iptal."
  Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
  exit 1
}
Write-Host "pencere: '$($win.MainWindowTitle)' (PID $($win.Id))"
Start-Sleep -Seconds 3

# --- 3) pencereyi one getir + gercek olay ---
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class W {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out R r);
  [DllImport("user32.dll")] public static extern void SetCursorPos(int x, int y);
  [DllImport("user32.dll")] public static extern void mouse_event(uint f, int x, int y, uint d, int e);
  [DllImport("user32.dll")] public static extern void keybd_event(byte v, byte s, uint f, int e);
  [StructLayout(LayoutKind.Sequential)] public struct R { public int L, T, Rt, B; }
}
"@
[W]::ShowWindow($win.MainWindowHandle, 9) | Out-Null
[W]::SetForegroundWindow($win.MainWindowHandle) | Out-Null
Start-Sleep -Seconds 2
$r = New-Object W+R
[W]::GetWindowRect($win.MainWindowHandle, [ref]$r) | Out-Null
$w = $r.Rt - $r.L; $h = $r.B - $r.T
Write-Host "pencere boyutu: ${w}x${h}"

if ($Mod -eq "fare") {
    # sol kartin ortasi (tema ekrani iki kart yan yana ciziyor) ~ %30 x %50
    $cx = $r.L + [int]($w * 0.30); $cy = $r.T + [int]($h * 0.50)
    Write-Host "tiklanacak yer: $cx,$cy"
    [W]::SetCursorPos($cx, $cy) | Out-Null
    Start-Sleep -Milliseconds 400
    [W]::mouse_event(0x0002, $cx, $cy, 0, 0) | Out-Null   # sol asagi
    Start-Sleep -Milliseconds 120
    [W]::mouse_event(0x0004, $cx, $cy, 0, 0) | Out-Null   # sol yukari
} else {
    # ESC: virtual key 0x1B
    Write-Host "ESC gonderen"
    [W]::keybd_event(0x1B, 0x29, 0, 0) | Out-Null
    Start-Sleep -Milliseconds 120
    [W]::keybd_event(0x1B, 0x29, 2, 0) | Out-Null
}
Start-Sleep -Seconds 8

# --- 4) sonuc ---
$t = Get-Content $log -ErrorAction SilentlyContinue
"--- TEMA/YIKIM satirlari (son 25):"
$t | Select-String -Pattern "tema|Tema|TEMA|YikimTema|sec\(" | Select-Object -Last 25 | ForEach-Object { "   $($_.Line)" }
"--- cfg son hali:"
if (Test-Path $cfg) {
    Get-Content $cfg | Select-String -Pattern "tema" | ForEach-Object { "   $($_.Line)" }
} else { "   (yok)" }
Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue