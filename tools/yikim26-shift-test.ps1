<#-
    SAĞ SHIFT TESTİ (26.x menü tuşu) — gerçek klavye olayıyla.
    powershell -ExecutionPolicy Bypass -File tools\yikim26-shift-test.ps1 -Ver 26.3

    GÜVENLİK: yalnızca BAŞLIĞI "Minecraft* 26.3" olan (menüde olan) KENDİ test
    penceremize tuş gönderir; kullanıcının kendi oyununa göndermez.

    KANIT İZNİ: mod `-Dyikimlient.debug=1` ile her Right Shift basışında
    "YIKIM menu-tus tetiklendi (panelAcik=...)" satırını yazar. Bu test
    o satırın SAYISINI ölçer: "tus moda gecti: True / panel ACIK algilandi".
    (Eski sürüm Yalnızca "HUD" kelimesini arıyordu ve menü butonu loguna
    takılıp başarıymış gibi görünüyordu.)

    DİKKAT (v0.9.7'de yaşanan): fare tıklamasıyla odak vermek menü butonuna
    denk geliyordu ("HUD'u düzenle" ekranı açılıyor, Shift ekrana gidiyordu;
    ya da "Çıkış" butonu oyunu kapatıyordu). Bu yüzden bu sürümde odak için
    fare KULLANILMAZ — pencere öne getirilip GetForegroundWindow ile DOĞRULANIR.
#>
param(
    [ValidateSet("26.1","26.1.1","26.1.2","26.2","26.3")]
    [string]$Ver = "26.3",
    [int]$Bekleme = 180
)
$ErrorActionPreference = 'Continue'
$APP = "$env:APPDATA\.yikimlient"
$KOK = Split-Path -Parent $PSScriptRoot
$GameDir = Join-Path $env:TEMP "yikim26-$Ver"
$oyunLog = Join-Path $GameDir "logs\latest.log"
$log = Join-Path $GameDir "test.log"

if (-not (Test-Path (Join-Path $GameDir "cp.txt"))) {
    Write-Host "HAZIRLIK YOK: once 'node tools\test-26-hazirla.mjs $Ver' (cp.txt uretimi gerekli)"
    exit 1
}
# mod jar'ı test dizinine taze kopyala — eski jar sessizce kullanılıyordu
$jarKaynak = Join-Path $KOK "yikim-mod\derleme\yikimlient-1.0.7-$Ver+$Ver.jar"
if (Test-Path $jarKaynak) {
    Copy-Item $jarKaynak (Join-Path $GameDir "mods") -Force
    Get-ChildItem (Join-Path $GameDir "mods") -Filter "yikimlient-*.jar" |
        Where-Object { $_.Name -ne (Split-Path $jarKaynak -Leaf) } |
        Remove-Item -Force
    Write-Host "mod jar tazelendi: $(Split-Path $jarKaynak -Leaf)"
} else {
    Write-Host "mod jar bulunamadi (mevcut kopya kullanilacak): $jarKaynak"
}

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
Write-Host "HEDEF PID: $($p.Id) - pencere: '$($hedef.MainWindowTitle)'"

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class W5 {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int c);
  [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
  [DllImport("user32.dll")] public static extern void keybd_event(byte v, byte s, uint f, int e);
  [StructLayout(LayoutKind.Sequential)] public struct R { public int L, T, Rt, B; }
}
"@

# ---- ODAGI GARANTİ ET (fare YOK) -------------------------------------------
# Fare tıklaması menü butonuna denk gelebilir: "HUD'u düzenle" ekranı açıp
# Shift'i yutar ya da "Çıkış" butonu oyunu kapatır. Klavye olayı için tek
# gereken: pencere ÖN PLANDA olmalı. Bunu GetForegroundWindow ile kanıtlarız.
$odakTamam = $false
foreach ($deneme in 1..5) {
    [W5]::ShowWindow($hedef.MainWindowHandle, 9) | Out-Null
    [W5]::SetForegroundWindow($hedef.MainWindowHandle) | Out-Null
    Start-Sleep -Seconds 2
    $fg = [W5]::GetForegroundWindow()
    if ($fg -eq $hedef.MainWindowHandle) {
        $odakTamam = $true
        Write-Host "  odak TAMAM (deneme $deneme) - klavye olayi bu pencereye gider"
        break
    }
    Write-Host "  odak YOK (deneme $deneme): onde=$fg bizim=$($hedef.MainWindowHandle)"
}
if (-not $odakTamam) {
    Write-Host "DURDURULDU: test penceresi one getirilemedi (baska bir tam ekran oyun one geciriyor)."
    Write-Host "  Bu bir MOD HATASI DEGIL: ortam kisiti. Diger oyunu kapatip tekrar kos."
    Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
    exit 2
}

function TetikSayisi() {
    $t = Get-Content $oyunLog -ErrorAction SilentlyContinue
    return @($t | Select-String -Pattern "menu-tus tetiklendi").Count
}
function PanelAcikSayisi() {
    $t = Get-Content $oyunLog -ErrorAction SilentlyContinue
    return @($t | Select-String -Pattern "tetiklendi \(panelAcik=true\)").Count
}

function ShiftBas($ad) {
    Write-Host "  $ad"
    $once = TetikSayisi
    $onceAcik = PanelAcikSayisi
    [W5]::keybd_event(0xA0, 0x2A, 0, 0) | Out-Null    # VK_LSHIFT down
    Start-Sleep -Milliseconds 120
    [W5]::keybd_event(0xA1, 0x36, 0, 0) | Out-Null    # VK_RSHIFT down
    Start-Sleep -Milliseconds 250
    [W5]::keybd_event(0xA1, 0x36, 2, 0) | Out-Null    # VK_RSHIFT up
    [W5]::keybd_event(0xA0, 0x2A, 2, 0) | Out-Null    # VK_LSHIFT up
    Start-Sleep -Seconds 7
    $sonra = TetikSayisi
    $sonraAcik = PanelAcikSayisi
    $tusAlgindi = $sonra -gt $once
    $durum = if ($sonraAcik -gt $onceAcik) { "panel ACIK algilandi" }
             elseif ($tusAlgindi) { "tus alindi (panel kapatma yolu kullanildi)" }
             else { "TUS MODA ULASMADI" }
    Write-Host ("    tus moda gecti: {0}  {1}  (toplam basma: {2})" -f $tusAlgindi, $durum, $sonra)
    # odak kaybolduysa sonraki basma da bosuna gider - hemen uyar
    $fg = [W5]::GetForegroundWindow()
    if ($fg -ne $hedef.MainWindowHandle) { Write-Host "    UYARI: odak kayboldu (pencere one gecmedi)" }
}

ShiftBas "SHIFT #1 (panel acilmali)"
ShiftBas "SHIFT #2 (panel kapanmali)"
ShiftBas "SHIFT #3 (tekrar acilmali)"

Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

$t = Get-Content $log -ErrorAction SilentlyContinue
"=== KANIT SATIRLARI (menu-tus tetiklendi):"
@($t | Select-String -Pattern "menu-tus tetiklendi") | Select-Object -Last 8 | ForEach-Object { "   $($_.Line)" }
"=== HATA:"
@($t | Select-String -Pattern "StackOverflow|ReportedException|NullPointer") | Select-Object -First 4 | ForEach-Object { "   $($_.Line)" }
"=== 26.x GIRIS NOTU: 26.3 SDL scancode (RSHIFT=229), 26.1/26.2 GLFW (344). Mod her surumde InputConstants.KEY_RSHIFT kullanir."