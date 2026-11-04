# YIKIMLient v0.7.4 - Discord RPC her OS'te garanti + aninda arayuz tazeleme
# + kozmetik (HD kaydetme silme hatasi, elitra maskesi, WYSIWYG onizleme).
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$nsis = Join-Path $kok "src-tauri\target\release\bundle\nsis"
$anahtar = [System.IO.File]::ReadAllText((Join-Path $kok "tools\updater-private.key")).Trim()
$env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = ""
$V = "0.7.4"
Set-Location $kok

$not = "Discord Rich Presence artik her isletim sisteminde launcher acikken gorunur (Linux flatpak/snap soketleri, Discord sonradan acilirsa otomatik yeniden baglanma). Hesap ekleyince arayuz aninda guncellenir. Kozmetik: HD fotograf kayitliyken Kaydet pelerini/elitrayi silmiyor, elitra vanilla kanat siluetine maskeleniyor, kirpma onizlemesi kaydedilenle birebir ayni."

Write-Host "[0/7] guvenlik: tag/release zaten var mi?"
$var = gh release view "v$V" 2>&1
if ($LASTEXITCODE -eq 0) { Write-Host "HATA: v$V release zaten var - surum numarasini artir"; exit 1 }

Write-Host "[1/7] commit + push (tag dogru HEAD'den alinsin)"
git add -A
git commit -q -m "v0.7.4: Discord RPC tum OS'lerde garanti (flatpak/snap + yeniden baglanma), aninda arayuz tazeleme, kozmetik silinme/onizleme duzeltmeleri"
git push origin refs/heads/main:refs/heads/main 2>&1 | Select-Object -Last 1

Write-Host "[2/7] Windows derleme dosyasi kontrolu"
if (-not (Test-Path "$nsis\YIKIMLient_${V}_x64-setup.exe")) { Write-Host "WINDOWS DERLEME YOK - once npm run dist"; exit 1 }

Write-Host "[3/7] release + tag"
gh release create "v$V" --title "YIKIMLient v$V" --notes $not 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -First 2
gh release upload "v$V" "$nsis\YIKIMLient_${V}_x64-setup.exe" "$nsis\YIKIMLient_${V}_x64-setup.exe.sig" --clobber 2>&1 | Select-Object -First 1

Write-Host "[4/7] tag CI bekle (linux derleme)"
$runId = $null
foreach ($i in 1..60) {
  Start-Sleep -Seconds 15
  $runId = gh run list --branch "v$V" --limit 1 --json databaseId --jq '.[0].databaseId' 2>$null
  if ($runId) { break }
}
Write-Host "CI run: $runId"
if (-not $runId) { Write-Host "CI RUN BULUNAMADI - linux derleme yok"; exit 1 }
gh run watch $runId --exit-status 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 3
if ($LASTEXITCODE -ne 0) { Write-Host "CI BASARISIZ (linux derleme) - Windows surumu yine de yayinda"; exit 1 }

Write-Host "[5/7] Linux indir + bizim imza"
$tmp = Join-Path $env:TEMP "linux074"
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
  notes    = $not
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
