# YIKIMLient yayin hatti (genel) - Windows yerel imza + Linux CI + latest.json birlesimi
#
#   powershell -ExecutionPolicy Bypass -File tools\yayin-genel.ps1 0.9.4
#
#   [1/7] commit + push (tag dogru HEAD'den alinsin)
#   [2/7] release olustur + Windows setup.exe + .sig + SHA256SUMS yukle
#   [3/7] ilk latest.json (yalnizca Windows) yukle
#   [4/7] CI (Linux derleme) bitene kadar bekle
#   [5/7] AppImage/deb + .sig indir
#   [6/7] birlesik latest.json (windows + linux) yeniden yukle
#   [7/7] ozet
param(
  [Parameter(Mandatory = $true)][string]$V,
  [string]$Mesaj = "yayin"
)

$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$nsis = Join-Path $kok "src-tauri\target\release\bundle\nsis"
$cikti = Join-Path $kok "yayin\v$V"
$MINIMUM = "0.8.1"
New-Item -ItemType Directory -Force -Path $cikti | Out-Null

$exe = Join-Path $nsis "YIKIMLient_${V}_x64-setup.exe"
if (-not (Test-Path $exe)) { Write-Host "WINDOWS SETUP YOK: $exe"; exit 1 }
$sig = "$exe.sig"
if (-not (Test-Path $sig)) { Write-Host "IMZA DOSYASI YOK: $sig"; exit 1 }

Write-Host "[1/7] commit + push"
git add -A 2>&1 | Out-Null
git commit -q -m $Mesaj 2>&1 | Out-Null
git push -q origin main 2>&1 | Select-Object -Last 1
git push -q origin "refs/heads/main:refs/heads/main" 2>&1 | Out-Null

Write-Host "[2/7] release olustur + Windows yukle"
$notes = Join-Path $cikti "RELEASE-NOTES.md"
if (-not (Test-Path $notes)) { Write-Host "NOT DOSYASI YOK: $notes"; exit 1 }
# SHA256SUMS: once Windows satirini yaz (yoksa) - sonra yukleme sirasinda var olsun
if (-not (Test-Path "$cikti\SHA256SUMS.txt")) {
  $ozet = (Get-FileHash $exe -Algorithm SHA256).Hash.ToLower()
  [System.IO.File]::WriteAllText("$cikti\SHA256SUMS.txt", "$ozet  $(Split-Path $exe -Leaf)`n", (New-Object System.Text.UTF8Encoding($false)))
}
gh release create "v$V" --title "YIKIMLient v$V" --notes-file $notes 2>&1 | Select-Object -First 2
gh release upload "v$V" $exe $sig "$cikti\SHA256SUMS.txt" --clobber 2>&1 | Select-Object -First 1
if ($LASTEXITCODE -ne 0) { Write-Host "WINDOWS YUKLEME HATASI"; exit 1 }
Copy-Item $exe $cikti -Force
Copy-Item $sig $cikti -Force

Write-Host "[3/7] ilk latest.json (yalnizca Windows)"
$signatur = (Get-Content $sig -Raw).Trim()
$platformlar = @"
    "windows-x86_64": {
      "signature": "$signatur",
      "url": "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/$(Split-Path $exe -Leaf)"
    }
"@
$latest = @"
{
  "version": "$V",
  "notes": "YIKIMLient v$V - 26.x destegi + Vulkan otomatik secim. Yenilikler icin Release notlarina bak.",
  "pub_date": "$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')",
  "minimum": "$MINIMUM",
  "platforms": {
$platformlar
  }
}
"@
$latest = $latest -replace "`r`n", "`n"
[System.IO.File]::WriteAllText("$cikti\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
gh release upload "v$V" "$cikti\latest.json" --clobber 2>&1 | Select-Object -First 1

Write-Host "[4/7] CI (Linux derleme) bekleniyor"
$runId = $null
foreach ($i in 1..40) {
  Start-Sleep -Seconds 15
  $runId = gh run list --branch "v$V" --limit 1 --json databaseId --jq '.[0].databaseId'
  if ($runId) { break }
}
if (-not $runId) { Write-Host "CI run bulunamadi - elle devam et"; exit 1 }
Write-Host "  CI run: $runId"
gh run watch $runId --exit-status 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
if ($LASTEXITCODE -ne 0) { Write-Host "CI BASARISIZ"; exit 1 }

Write-Host "[5/7] Linux paketleri indir"
$tmp = Join-Path $env:TEMP "linux$($V -replace '\.','')"
New-Item $tmp -ItemType Directory -Force | Out-Null
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/v$V" | ConvertFrom-Json
foreach ($ad in @("YIKIMLient_${V}_amd64.AppImage", "YIKIMLient_${V}_amd64.deb")) {
  $varlik = $rel.assets | Where-Object { $_.name -eq $ad }
  if (-not $varlik) { Write-Host "ASSET YOK: $ad"; exit 1 }
  Invoke-WebRequest $varlik.browser_download_url -OutFile (Join-Path $tmp $ad) -UseBasicParsing
  $vs = $rel.assets | Where-Object { $_.name -eq "$ad.sig" }
  if (-not $vs) { Write-Host "SIG ASSET YOK: $ad.sig"; exit 1 }
  Invoke-WebRequest $vs.browser_download_url -OutFile (Join-Path $tmp "$ad.sig") -UseBasicParsing
}
# NOT: Linux .sig'lar CI'da AYNI ozel anahtarla (secrets.TAURI_SIGNING_PRIVATE_KEY)
# uretilir -> launcher'in bildigi acik anahtarlarla dogrulanir. Biz sadece indiririz.

Write-Host "[6/7] birlesik latest.json (windows + linux) yukle"
$linuxEk = ""
foreach ($ad in @("YIKIMLient_${V}_amd64.AppImage", "YIKIMLient_${V}_amd64.deb")) {
  $s = (Get-Content (Join-Path $tmp "$ad.sig") -Raw).Trim()
  if ($ad -like "*AppImage*") { $anahtar = "linux-x86_64" } else { $anahtar = "linux-x86_64-deb" }
  $linuxEk += ",`n" + @"
    "$anahtar": {
      "signature": "$s",
      "url": "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/$ad"
    }
"@
  $oz = (Get-FileHash (Join-Path $tmp $ad) -Algorithm SHA256).Hash.ToLower()
  Add-Content -Path "$cikti\SHA256SUMS.txt" -Value "$oz  $ad"
  Copy-Item (Join-Path $tmp $ad) $cikti -Force
  Copy-Item (Join-Path $tmp "$ad.sig") $cikti -Force
}
$latest = @"
{
  "version": "$V",
  "notes": "YIKIMLient v$V - 26.x destegi + Vulkan otomatik secim. Yenilikler icin Release notlarina bak.",
  "pub_date": "$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')",
  "minimum": "$MINIMUM",
  "platforms": {
$platformlar$linuxEk
  }
}
"@
$latest = $latest -replace "`r`n", "`n"
[System.IO.File]::WriteAllText("$cikti\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
gh release upload "v$V" "$cikti\latest.json" "$cikti\SHA256SUMS.txt" --clobber 2>&1 | Select-Object -First 1

Write-Host "[7/7] ozet"
Get-ChildItem $cikti | Select-Object Name, @{N="MB";E={[math]::Round($_.Length/1MB,2)}}
Write-Host "  minimum (zorunlu guncelleme esigi): v$MINIMUM"