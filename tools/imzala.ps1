# YIKIMLient — Windows Authenticode imzalama (SmartScreen için tek gerçek çözüm)
#
# Kullanım (yayimla.ps1 tarafından otomatik çağrılır):
#   powershell -ExecutionPolicy Bypass -File tools\imzala.ps1 -Dosya "C:\...\setup.exe"
#
# Sertifika kaynağı (ilk bulunan kullanılır):
#   1) $env:YIKIM_CERT_PFX  (+ $env:YIKIM_CERT_PASS)  → .pfx dosyası
#   2) $env:YIKIM_CERT_SHA1 → sertifika deposundaki (CurrentUser\My) SHA1 parmak izi
#   3) tools\codesign-thumbprint.txt → aynı parmak izi, dosyadan
#
# Sertifika yoksa betik HATA VERMEZ: uyarı basıp 0 döner, derleme devam eder.
# (İmzasız çıkarsa SmartScreen "bilinmeyen yayıncı" uyarısı verir — kodla
#  çözülemez, sertifika gerekir. Bkz. docs/IMZALAMA-SMARTSREEN.md)
param(
    [Parameter(Mandatory = $true)][string]$Dosya
)

$ErrorActionPreference = "Stop"
$koku = Split-Path -Parent $PSScriptRoot

function SigntoolBul {
    $adaylar = @()
    if ($env:SIGNTOOL_PATH -and (Test-Path $env:SIGNTOOL_PATH)) { $adaylar += $env:SIGNTOOL_PATH }
    $adaylar += @(
        "${env:ProgramFiles(x86)}\Windows Kits\10\bin\x64\signtool.exe",
        "${env:ProgramFiles(x86)}\Windows Kits\10\bin\10.0.22621.0\x64\signtool.exe",
        "${env:ProgramFiles(x86)}\Windows Kits\10\bin\10.0.19041.0\x64\signtool.exe"
    )
    $kit = "${env:ProgramFiles(x86)}\Windows Kits\10\bin"
    if (Test-Path $kit) {
        $enYeni = Get-ChildItem $kit -Recurse -Filter signtool.exe -ErrorAction SilentlyContinue |
            Where-Object { $_.FullName -match "\\x64\\" } | Sort-Object FullName -Descending | Select-Object -First 1
        if ($enYeni) { $adaylar += $enYeni.FullName }
    }
    foreach ($a in $adaylar) { if ($a -and (Test-Path $a)) { return $a } }
    $komut = Get-Command signtool.exe -ErrorAction SilentlyContinue
    if ($komut) { return $komut.Source }
    return $null
}

if (-not (Test-Path $Dosya)) { throw "imzalanacak dosya yok: $Dosya" }

$signtool = SigntoolBul
if (-not $signtool) {
    Write-Host "[imza] signtool bulunamadi (Windows SDK yok) — imzasiz devam." -ForegroundColor Yellow
    exit 0
}

$ortak = @(
    "sign", "/fd", "sha256", "/tr", "http://timestamp.digicert.com", "/td", "sha256"
)

$pfx = $env:YIKIM_CERT_PFX
$sha1 = $env:YIKIM_CERT_SHA1
if (-not $sha1 -and (Test-Path "$koku\tools\codesign-thumbprint.txt")) {
    $sha1 = (Get-Content "$koku\tools\codesign-thumbprint.txt" -Raw).Trim()
}

$basarili = $false
if ($pfx -and (Test-Path $pfx)) {
    Write-Host "[imza] PFX ile imzalaniyor: $pfx"
    if ($env:YIKIM_CERT_PASS) {
        & $signtool @ortak /f $pfx /p $env:YIKIM_CERT_PASS /d "YIKIMLient" $Dosya
    } else {
        & $signtool @ortak /f $pfx /d "YIKIMLient" $Dosya
    }
    $basarili = ($LASTEXITCODE -eq 0)
} elseif ($sha1) {
    Write-Host "[imza] Depodaki sertifika ile imzalaniyor: $sha1"
    & $signtool @ortak /sha1 $sha1 /d "YIKIMLient" $Dosya
    $basarili = ($LASTEXITCODE -eq 0)
} else {
    Write-Host "[imza] Kod imzalama sertifikasi tanimli degil — imzasiz devam." -ForegroundColor Yellow
    Write-Host "[imza] SmartScreen uyarisini kaldirmak icin: docs/IMZALAMA-SMARTSREEN.md"
    exit 0
}

if (-not $basarili) { throw "imzalama basarisiz (signtool $LASTEXITCODE)" }
& $signtool verify /pa /v $Dosya | Out-Null
if ($LASTEXITCODE -ne 0) { throw "imza dogrulanamadi" }
Write-Host "[imza] TAMAM — imza dogrulandi." -ForegroundColor Green
