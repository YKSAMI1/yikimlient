# YIKIMLient v0.3.34 — TAM OTOMATIK YAYIN HATTI (kurt 2: tag guncel HEAD'den alinir)
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$nsis = Join-Path $kok "src-tauri\target\release\bundle\nsis"
$anahtar = [System.IO.File]::ReadAllText((Join-Path $kok "tools\updater-private.key")).Trim()
$env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = ""
$V = "0.3.34"
$MV = "1.12.5"
Set-Location $kok

Write-Host "[1/8] mod $MV derleme"
powershell -ExecutionPolicy Bypass -File (Join-Path $kok "yikim-mod\araclar\derle-1.21.11.ps1") -McVersion 1.21.11 -ModVersion $MV 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
if (-not (Test-Path "$kok\yikim-mod\derleme\yikimlient-$MV+1.21.11.jar")) { Write-Host "MOD DERLEME BASARISIZ"; exit 1 }

Write-Host "[2/8] mod jar + manifest guncel"
Copy-Item "$kok\yikim-mod\derleme\yikimlient-$MV+1.21.11.jar" "$kok\src-tauri\resources\mods\yikimlient-$MV+1.21.11.jar" -Force
Remove-Item "$kok\src-tauri\resources\mods\yikimlient-1.12.4+1.21.11.jar" -ErrorAction SilentlyContinue
(Get-Content "$kok\src-tauri\resources\mods\manifest.json" -Raw) -replace '1\.12\.4', $MV | Set-Content "$kok\src-tauri\resources\mods\manifest.json" -NoNewline

Write-Host "[3/8] commit + push"
git add -A
git commit -q -m "v0.3.34 yeni: presence varsayilan adresi Render bulutuna tasindi (arkadasta hicbir ayar gerekmeyor), oluk backoff 120sn"
git push -q origin main 2>&1 | Select-Object -Last 1

Write-Host "[4/8] eski v$V release+tag sil (CI dogru HEAD'den derlesin)"
gh release delete "v$V" --yes 2>&1 | Select-Object -First 1
git tag -d "v$V" 2>&1 | Out-Null
git push --delete origin "v$V" 2>&1 | Select-Object -First 1

Write-Host "[5/8] release + tag olustur (guncel HEAD)"
gh release create "v$V" --title "YIKIMLient v$V" --notes "Cizim kalici (oyun acilista otomatik). Izinliler menusu. Rozet renkleri her sunucuda ayni. YIKIM oyunculari birbirinde otomatik gorunur (bulut presence varsayilan)." 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -First 2

Write-Host "[6/8] Windows eksileri + tag CI bekle"
gh release upload "v$V" "$nsis\YIKIMLient_${V}_x64-setup.exe" "$nsis\YIKIMLient_${V}_x64-setup.exe.sig" "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1
$runId = $null
foreach ($i in 1..40) {
  Start-Sleep -Seconds 15
  $runId = gh run list --branch "v$V" --limit 1 --json databaseId --jq '.[0].databaseId'
  if ($runId) { break }
}
Write-Host "CI run: $runId"
gh run watch $runId --exit-status 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
if ($LASTEXITCODE -ne 0) { Write-Host "CI BASARISIZ"; exit 1 }

Write-Host "[7/8] Linux indir + bizim imza"
$tmp = Join-Path $env:TEMP "linux3334"
New-Item $tmp -ItemType Directory -Force | Out-Null
$rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/v$V" | ConvertFrom-Json
foreach ($ad in @("YIKIMLient_${V}_amd64.AppImage", "YIKIMLient_${V}_amd64.deb")) {
  $varlik = $rel.assets | Where-Object { $_.name -eq $ad }
  if (-not $varlik) { Write-Host "ASSET YOK: $ad"; exit 1 }
  Invoke-WebRequest $varlik.browser_download_url -OutFile (Join-Path $tmp $ad) -UseBasicParsing
  npx tauri signer sign -k $anahtar (Join-Path $tmp $ad) 2>&1 | ForEach-Object { $_.ToString() } | Select-String "successfully|failed" | Select-Object -First 1
}
gh release upload "v$V" (Join-Path $tmp "YIKIMLient_${V}_amd64.AppImage.sig") (Join-Path $tmp "YIKIMLient_${V}_amd64.deb.sig") --clobber 2>&1 | Select-Object -First 1

Write-Host "[8/8] birlesik latest.json (EN SON) + dogrulama"
$wsig = [System.IO.File]::ReadAllText("$nsis\YIKIMLient_${V}_x64-setup.exe.sig").Trim()
$lsig = [System.IO.File]::ReadAllText((Join-Path $tmp "YIKIMLient_${V}_amd64.AppImage.sig")).Trim()
$latest = @{
  version  = $V
  notes    = "Cizim kalici. Izinliler menusu. Rozet renkleri her sunucuda ayni. YIKIM oyunculari birbirinde otomatik gorunur."
  pub_date = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')
  platforms = @{
    "windows-x86_64" = @{ signature = $wsig; url = "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/YIKIMLient_${V}_x64-setup.exe" }
    "linux-x86_64"   = @{ signature = $lsig; url = "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/YIKIMLient_${V}_amd64.AppImage" }
  }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
gh release upload "v$V" "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1

$u = Invoke-RestMethod "https://github.com/YKSAMI1/yikimlient/releases/latest/download/latest.json"
Write-Host "surum: $($u.version)"
foreach ($p in $u.platforms.PSObject.Properties.Name) { Write-Host "$p imza uzunluk: $($u.platforms.$p.signature.Length)" }
Write-Host "asset sayisi: $((gh api repos/YKSAMI1/yikimlient/releases/tags/v$V --jq '.assets | length'))"
