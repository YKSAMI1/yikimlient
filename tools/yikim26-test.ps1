<#-
  YIKIM modunun 26.x sürümlerinde gerçekten yüklenip yüklenmediğini doğrular.
  Launcher'ın gerçek kurulumunu (%APPDATA%/.yikimlient → versions/libraries/assets)
  kullanarak oyunu başlatır; mods/ klasörüne sadece Fabric API + YIKIM jar'ı konur.

  KULLANIM:  powershell -File tools\yikim26-test.ps1 -Ver 26.3
             powershell -File tools\yikim26-test.ps1 -Ver 26.2 -Temizle

  ÖNKOŞUL:  node tools\test-26-hazirla.mjs <Ver>   (version json'lari + eksik
            kütüphane/asset'leri indirir)
-#>
param(
  [ValidateSet("26.1", "26.1.1", "26.1.2", "26.2", "26.3")]
  [string]$Ver = "26.3",
  [switch]$Temizle,
  [int]$WaitSeconds = 100
)

$ErrorActionPreference = "Continue"
$APP = "$env:APPDATA\.yikimlient"
$KOK = Split-Path -Parent $PSScriptRoot
$root = Join-Path $APP "versions\$Ver"
$fabId = "fabric-loader-0.20.1-$Ver"
if (-not (Test-Path (Join-Path $APP "versions\$fabId\$fabId.json"))) {
  throw "fabric profili yok: once 'node tools/test-26-hazirla.mjs $Ver' calistir"
}
$vanilla = Get-Content (Join-Path $root "$Ver.json") -Raw | ConvertFrom-Json
$fab = Get-Content (Join-Path $APP "versions\$fabId\$fabId.json") -Raw | ConvertFrom-Json

# kutuphane kokleri: launcher + mod derleme araclarindaki indirme koku
$libDirs = @("$APP\libraries", (Join-Path $KOK "yikim-mod\araclar\kutuphane\$Ver"))

$natives = Join-Path $root "natives"
if (Test-Path $natives) { Remove-Item $natives -Recurse -Force }
New-Item -ItemType Directory -Force -Path $natives | Out-Null

$cp = @()
$libs = @()
$libs += $vanilla.libraries
$libs += $fab.libraries
foreach ($l in $libs) {
  $ok = $true
  if ($l.rules) {
    $ok = $false
    foreach ($r in $l.rules) {
      if ($r.action -eq "allow" -and (-not $r.os -or $r.os.name -eq "windows")) { $ok = $true }
      if ($r.action -eq "disallow") { $ok = $false }
    }
  }
  if (-not $ok) { continue }

  $p = $l.downloads.artifact.path
  if (-not $p) {
    $parts = $l.name -split ":"
    $p = ($parts[0] -replace "\.", "/") + "/" + $parts[1] + "/" + $parts[2] + "/" + ($parts[1] + "-" + $parts[2] + ".jar")
  }
  foreach ($ld in $libDirs) {
    $full = Join-Path $ld $p
    if (Test-Path $full) { $cp += $full; break }
  }

  if ($l.natives -and $l.natives.windows -and $l.downloads.classifiers) {
    $c = $l.downloads.classifiers.PSObject.Properties | Where-Object { $_.Name -like "*windows*" } | Select-Object -First 1
    if ($c) {
      foreach ($ld in $libDirs) {
        $nfull = Join-Path $ld $c.Value.path
        if (Test-Path $nfull) {
          Add-Type -AssemblyName System.IO.Compression.FileSystem
          [System.IO.Compression.ZipFile]::ExtractToDirectory($nfull, $natives)
          break
        }
      }
    }
  }
}
$clientJar = Join-Path $root "$Ver.jar"
if (-not (Test-Path $clientJar)) {
  $ara = Get-ChildItem (Join-Path $KOK "yikim-mod\araclar") -Filter "mc-$Ver-official.jar" | Select-Object -First 1
  if ($ara) { Copy-Item $ara.FullName (Join-Path $root "$Ver.jar") -Force; $clientJar = Join-Path $root "$Ver.jar" }
}
$cp += $clientJar
$cps = ($cp -join ";") -replace "\\", "/"

$java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\javaw.exe"
if (-not (Test-Path $java)) { $java = Join-Path $APP "runtimes\microsoft-jdk-25\bin\java.exe" }

$GameDir = Join-Path $env:TEMP "yikim26-$Ver"
if ($Temizle) { Remove-Item $GameDir -Recurse -Force -ErrorAction SilentlyContinue }
$mdir = Join-Path $GameDir "mods"
New-Item -ItemType Directory -Force -Path $mdir | Out-Null

$api = Get-ChildItem (Join-Path $KOK "yikim-mod\araclar\fabric-api\$Ver") -Filter "fabric-api-*.jar" -File -ErrorAction SilentlyContinue | Select-Object -First 1
$modJar = Join-Path $KOK "src-tauri\resources\mods\yikimlient-1.0.1-$Ver+$Ver.jar"
foreach ($m in @($api.FullName, $modJar)) { if ($m) { Copy-Item $m -Destination $mdir -Force } }
Set-Content -Path (Join-Path $GameDir "options.txt") -Value "version:131004`nmaxFps:260`nenableVsync:false`nlang:tr_tr`nguiScale:2`npreferredGraphicsBackend:`"vulkan`"" -Encoding UTF8

$vm = @("-Xmx4G", "-Xms1G", "-Djava.library.path=$natives", "-cp", $cps)
$ga = @(
  "--username", "YikimTest",
  "--version", $Ver,
  "--gameDir", $GameDir,
  "--assetsDir", (Join-Path $APP "assets"),
  "--assetIndex", $vanilla.assetIndex.id,
  "--accessToken", "0",
  "--userType", "legacy",
  "--versionType", "release",
  "--graphicsBackend", "vulkan"
)

$log = Join-Path $GameDir "test.log"
"=== SURUM $Ver"
"MODS : $(Get-ChildItem $mdir | ForEach-Object { $_.Name })"
"LIB  : $($cp.Count) jar"

$proc = Start-Process -FilePath $java -ArgumentList ($vm + $fab.mainClass + $ga) -WorkingDirectory $GameDir -RedirectStandardOutput $log -RedirectStandardError (Join-Path $GameDir "test-err.log") -PassThru -NoNewWindow
"PID  : $($proc.Id)"
$timer = 0
while (-not $proc.HasExited -and $timer -lt $WaitSeconds) { Start-Sleep -Seconds 5; $timer += 5 }
if ($proc.HasExited) { "SONUC: kapandi (exit $($proc.ExitCode))" } else {
  "SONUC: $timer sn sonra calisiyor - kapatiliyor"
  Stop-Process -Id $proc.Id -Force
}

$t = Get-Content $log -ErrorAction SilentlyContinue
"--- BACKEND:"
$t | Select-String -Pattern "Using graphics backend|Failed to create backend|backend forced" | Select-Object -First 6 | ForEach-Object { "   $($_.Line)" }
"--- MOD YUKLENMESI:"
$t | Select-String -Pattern "yikimlient|YIKIM" | Select-Object -First 12 | ForEach-Object { "   $($_.Line)" }
"--- HATALAR:"
$t | Select-String -Pattern "ERROR|Exception" | Select-Object -First 12 | ForEach-Object { "   $($_.Line)" }