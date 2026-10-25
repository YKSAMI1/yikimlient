# YIKIMLient v0.3.34 tam yayin hatti (ogrenilen derslerle):
#  - Linux indirme: gh --jq yerine ConvertFrom-Json (split bozuklugu yok)
#  - CI imzalari BASKA anahtarla geliyor -> yerel anahtarla YENIDEN imzala
#  - latest.json EN SON upload edilir (iki platformun imzasi birlesik)
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$nsis = Join-Path $kok "src-tauri\target\release\bundle\nsis"
$anahtar = [System.IO.File]::ReadAllText((Join-Path $kok "tools\updater-private.key")).Trim()
$env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = ""

Write-Host "[0/6] release + tag olustur"
gh release create v0.3.34 --title "YIKIMLient v0.3.34" --notes "Cizim artik her oyun acilista kendi isminde otomatik gorunur. Atolyeye Izinliler menusu eklendi." 2>&1 | Select-Object -First 1

Write-Host "[1/6] Windows derleme + imza"
$env:TAURI_SIGNING_PRIVATE_KEY = (Join-Path $kok "tools\updater-private.key")
Push-Location $kok
npm run dist 2>&1 | Select-Object -Last 2
Pop-Location

Write-Host "[2/6] latest.json (windows) uret + ilk upload"
powershell -ExecutionPolicy Bypass -File (Join-Path $kok "tools\release-v0334.ps1")
gh release upload v0.3.34 "$nsis\YIKIMLient_0.3.34_x64-setup.exe" "$nsis\YIKIMLient_0.3.34_x64-setup.exe.sig" "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1

Write-Host "[3/6] CI bekle"
Start-Sleep -Seconds 10
$runId = gh run list --branch v0.3.34 --limit 1 --json databaseId --jq '.[0].databaseId'
gh run watch $runId --exit-status 2>&1 | Select-Object -Last 1
if ($LASTEXITCODE -ne 0) { Write-Host "CI BASARISIZ - devam edilmiyor"; exit 1 }

Write-Host "[4/6] Linux varliklari indir + BIZIM anahtarla imzala"
$tmp = Join-Path $env:TEMP "linux334"
New-Item $tmp -ItemType Directory -Force | Out-Null
$rel = gh api repos/YKSAMI1/yikimlient/releases/tags/v0.3.34 | ConvertFrom-Json
foreach ($ad in @("YIKIMLient_0.3.34_amd64.AppImage", "YIKIMLient_0.3.34_amd64.deb")) {
  $varlik = $rel.assets | Where-Object { $_.name -eq $ad }
  $hedef = Join-Path $tmp $ad
  Invoke-WebRequest $varlik.browser_download_url -OutFile $hedef -UseBasicParsing
  npx tauri signer sign -k $anahtar $hedef 2>&1 | Select-String "successfully|failed" | Select-Object -First 1
}
gh release upload v0.3.34 (Join-Path $tmp "YIKIMLient_0.3.34_amd64.AppImage.sig") (Join-Path $tmp "YIKIMLient_0.3.34_amd64.deb.sig") --clobber 2>&1 | Select-Object -First 1

Write-Host "[5/6] birlesik latest.json (iki imza) - EN SON"
$wsig = [System.IO.File]::ReadAllText("$nsis\YIKIMLient_0.3.34_x64-setup.exe.sig").Trim()
$lsig = [System.IO.File]::ReadAllText((Join-Path $tmp "YIKIMLient_0.3.34_amd64.AppImage.sig")).Trim()
$latest = @{
  version  = "0.3.34"
  notes    = "Rozet renkleri artik HER sunucuda birebir ayni. Izin paneli canli yenilenir; izin alinan kisinin cizimi silinir, normal Y doner."
  pub_date = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')
  platforms = @{
    "windows-x86_64" = @{ signature = $wsig; url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.34/YIKIMLient_0.3.34_x64-setup.exe" }
    "linux-x86_64"   = @{ signature = $lsig; url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.34/YIKIMLient_0.3.34_amd64.AppImage" }
  }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
gh release upload v0.3.34 "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1

Write-Host "[6/6] dogrulama"
$u = Invoke-RestMethod "https://github.com/YKSAMI1/yikimlient/releases/latest/download/latest.json"
Write-Host "surum: $($u.version)"
foreach ($p in $u.platforms.PSObject.Properties.Name) {
  Write-Host "$p imza uzunluk: $($u.platforms.$p.signature.Length)"
}
Write-Host "asset sayisi: $((gh api repos/YKSAMI1/yikimlient/releases/tags/v0.3.34 --jq '.assets | length'))"
