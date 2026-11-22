<#
  imza.ps1 - Windows Authenticode signing helper for YIKIMLient releases.

  Usage:
    powershell -NoProfile -ExecutionPolicy Bypass -File tools\imza.ps1 <file.exe> [more.exe ...]
      -> signs every given file (Tauri signCommand style: %1)

    powershell -NoProfile -ExecutionPolicy Bypass -File tools\imza.ps1 `
      -Dosyalar "path\to\setup.exe","path\to\app.exe" -PfxYol "cert.pfx" -Parola "secret"

  Certificate sources (first match wins):
    1. -PfxYol <path>           or env YIKIM_IMZA_PFX
    2. -PfxBase64 <base64>      or env YIKIM_IMZA_PFX_B64  (written to %TEMP% then used)
  Password: -Parola / env YIKIM_IMZA_PFX_PAROLA
  Timestamp: -Zaman <url> / env YIKIM_IMZA_ZAMAN (default http://timestamp.digicert.com)

  If NO certificate is configured the script prints a note and exits 0, so
  normal (unsigned) local releases keep working unchanged.

  signtool is needed: it ships with the Windows SDK (tauri already requires it).
#>
[CmdletBinding(DefaultParameterSetName = "Positional")]
param(
    [Parameter(ParameterSetName = "Positional", Position = 0, ValueFromRemainingArguments = $true)]
    [string[]]$Dosya,

    [Parameter(ParameterSetName = "Named")]
    [string[]]$Dosyalar,

    [string]$PfxYol = $env:YIKIM_IMZA_PFX,
    [string]$PfxBase64 = $env:YIKIM_IMZA_PFX_B64,
    [string]$Parola = $env:YIKIM_IMZA_PFX_PAROLA,
    [string]$Zaman = $env:YIKIM_IMZA_ZAMAN
)

$ErrorActionPreference = "Stop"
if (-not $Zaman) { $Zaman = "http://timestamp.digicert.com" }

$hedefler = @()
if ($PSCmdlet.ParameterSetName -eq "Named" -and $Dosyalar) { $hedefler = $Dosyalar }
elseif ($Dosya) { $hedefler = $Dosya }
$hedefler = $hedefler | Where-Object { $_ -and $_.Trim() -ne "" } | ForEach-Object { $_.Trim('"') }

if ($hedefler.Count -eq 0) {
    Write-Host "[imza] nothing to sign"
    exit 0
}

foreach ($f in $hedefler) {
    if (-not (Test-Path -LiteralPath $f)) {
        Write-Host "[imza] MISSING: $f"
        exit 1
    }
}

# --- certificate ---
if (-not $PfxYol -and $PfxBase64) {
    $gecici = Join-Path $env:TEMP ("yikim-imza-" + [Guid]::NewGuid().ToString("N") + ".pfx")
    [System.IO.File]::WriteAllBytes($gecici, [Convert]::FromBase64String($PfxBase64))
    $PfxYol = $gecici
}
if (-not $PfxYol -or -not (Test-Path -LiteralPath $PfxYol)) {
    Write-Host "[imza] no certificate configured (env YIKIM_IMZA_PFX or YIKIM_IMZA_PFX_B64) - staying unsigned"
    exit 0
}

# --- signtool ---
$signtool = $null
$kollar = @(
    "${env:ProgramFiles(x86)}\Windows Kits\10\bin\10.0.26100.0\x64\signtool.exe",
    "${env:ProgramFiles(x86)}\Windows Kits\10\bin\10.0.22621.0\x64\signtool.exe",
    "${env:ProgramFiles(x86)}\Windows Kits\10\bin\10.0.19041.0\x64\signtool.exe"
)
foreach ($k in $kollar) { if (Test-Path $k) { $signtool = $k; break } }
if (-not $signtool) {
    $bul = Get-Command signtool.exe -ErrorAction SilentlyContinue
    if ($bul) { $signtool = $bul.Source }
}
if (-not $signtool) {
    Write-Host "[imza] signtool.exe not found - install the Windows SDK"
    exit 1
}

$soz = @()
if ($Parola) { $soz += "/p"; $soz += $Parola }

foreach ($f in $hedefler) {
    Write-Host "[imza] signing: $f"
    & $signtool sign /fd sha256 /td sha256 /tr $Zaman /f $PfxYol @soz $f 2>&1 | ForEach-Object { Write-Host "        $_" }
    if ($LASTEXITCODE -ne 0) {
        # timestamp servers are sometimes unreachable: sign without /tr and
        # keep the offline signature instead of failing the release.
        Write-Host "        [imza] timestamp failed - signing without timestamp"
        & $signtool sign /fd sha256 /f $PfxYol @soz $f 2>&1 | ForEach-Object { Write-Host "        $_" }
        if ($LASTEXITCODE -ne 0) {
            Write-Host "[imza] SIGN FAILED: $f"
            exit 1
        }
    }
    $dogrulama = Get-AuthenticodeSignature -LiteralPath $f
    Write-Host ("[imza] status: {0} / signer: {1}" -f $dogrulama.Status, $dogrulama.SignerCertificate.Subject)
    # Imza YOKSA kesin hata. "UnknownError" (ör. kendinden imzalı/ara zinciri
    # eksik sertifika) dosyanın imzali oldugunu gosterir; yayini bozmasin diye
    # sadece uyari verip devam ediyoruz.
    if ($dogrulama.Status -eq "NotSigned") {
        Write-Host "[imza] FILE NOT SIGNED: $f"
        exit 1
    }
    if ($dogrulama.Status -ne "Valid") {
        Write-Host "        [imza] note: signature present but not fully trusted on this machine"
    }
}

exit 0