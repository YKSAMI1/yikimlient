# YIKIMLient v0.3.35 — TAM HAT (mod + WINDOWS KURULUM DOSYASI + linux + imzalar)
# Ders (v0.3.34): exe'yi yeniden derlemeyi unutma — release'e eski exe gitmesin.
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$nsis = Join-Path $kok "src-tauri\target\release\bundle\nsis"
$anahtar = [System.IO.File]::ReadAllText((Join-Path $kok "tools\updater-private.key")).Trim()
$env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = ""
$V = "0.3.35"
$MV = "1.12.5"
Set-Location $kok

Write-Host "[1/7] commit + push (tag dogru HEAD'den alinsin)"
git add -A
git commit -q -m "v0.3.35: tam derleme hatti - exe icinde mod 1.12.5 garantisini (Render varsayilan adres)اعاتندiran surum"
git push -q origin main 2>&1 | Select-Object -Last 1

Write-Host "[2/7] WINDOWS derleme + imza (resources: mod $MV)"
$env:TAURI_SIGNING_PRIVATE_KEY = (Join-Path $kok "tools\updater-private.key")
npm run dist 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2

if (-not (Test-Path "$nsis\YIKIMLient_${V}_x64-setup.exe")) { Write-Host "WINDOWS DERLEME HATASI"; exit 1 }

Write-Host "[3/7] release + tag"
gh release create "v$V" --title "YIKIMLient v$V" --notes "Mod 1.12.5: bulut presence varsayilan (YIKIM oyunculari birbirinde otomatik gorunur), cizim kaliciligi, izinliler menusu." 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -First 2
gh release upload "v$V" "$nsis\YIKIMLient_${V}_x64-setup.exe" "$nsis\YIKIMLient_${V}_x64-setup.exe.sig" --clobber 2>&1 | Select-Object -First 1

Write-Host "[4/7] tag CI bekle (linux derleme)"
$runId = $null
foreach ($i in 1..40) {
  Start-Sleep -Seconds 15
  $runId = gh run list --branch "v$V" --limit 1 --json databaseId --jq '.[0].databaseId'
  if ($runId) { break }
}
Write-Host "CI run: $runId"
gh run watch $runId --exit-status 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
if ($LASTEXITCODE -ne 0) { Write-Host "CI BASARISIZ"; exit 1 }

Write-Host "[5/7] Linux indir + bizim imza"
$tmp = Join-Path $env:TEMP "linux335"
New-Item $tmp -ItemType Directory -Force | Out-Null
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/v$V" | ConvertFrom-Json
foreach ($ad in @("YIKIMLient_${V}_amd64.AppImage", "YIKIMLient_${V}_amd64.deb")) {
  $varlik = $rel.assets | Where-Object { $_.name -eq $ad }
  if (-not $varlik) { Write-Host "ASSET YOK: $ad"; exit 1 }
  Invoke-WebRequest $varlik.browser_download_url -OutFile (Join-Path $tmp $ad) -UseBasicParsing
  npx tauri signer sign -k $anahtar (Join-Path $tmp $ad) 2>&1 | ForEach-Object { $_.ToString() } | Select-String "successfully|failed" | Select-Object -First 1
}
gh release upload "v$V" (Join-Path $tmp "YIKIMLient_${V}_amd64.AppImage.sig") (Join-Path $tmp "YIKIMLient_${V}_amd64.deb.sig") --clobber 2>&1 | Select-Object -First 1

Write-Host "[6/7] birlesik latest.json - EN SON"
$wsig = [System.IO.File]::ReadAllText("$nsis\YIKIMLient_${V}_x64-setup.exe.sig").Trim()
$lsig = [System.IO.File]::ReadAllText((Join-Path $tmp "YIKIMLient_${V}_amd64.AppImage.sig")).Trim()
$latest = @{
  version  = $V
  notes    = "Mod 1.12.5: YIKIM oyunculari birbirinde otomatik gorunur (bulut presence), cizim kaliciligi, izinliler menusu."
  pub_date = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')
  platforms = @{
    "windows-x86_64" = @{ signature = $wsig; url = "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/YIKIMLient_${V}_x64-setup.exe" }
    "linux-x86_64"   = @{ signature = $lsig; url = "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/YIKIMLient_${V}_amd64.AppImage" }
  }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
gh release upload "v$V" "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1

Write-Host "[7/7] dogrulama"
$u = Invoke-RestMethod "https://github.com/YKSAMI1/yikimlient/releases/latest/download/latest.json"
Write-Host "surum: $($u.version)"
foreach ($p in $u.platforms.PSObject.Properties.Name) { Write-Host "$p imza uzunluk: $($u.platforms.$p.signature.Length)" }
Write-Host "asset sayisi: $((gh api repos/YKSAMI1/yikimlient/releases/tags/v$V --jq '.assets | length'))"
