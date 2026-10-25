# YIKIMLient — TAM YAYIN HATTI (mod derleme DAHİL, kalıcı)
# Öğrenilen dersler zinciri:
#  - exe yeniden derlemesin diye unutulan mod derleme asla silinmez (v0.3.36 vakası)
#  - tag HER ZAMAN commit sonrası alınır (v0.3.34 vakası)
#  - release create + upload + CI(D)den sonra linux asset imzaları + latest.json EN SON
param(
    [string]$V = "0.3.37",
    [string]$MV = "1.12.6"
)
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
$nsis = Join-Path $kok "src-tauri\target\release\bundle\nsis"
$anahtar = [System.IO.File]::ReadAllText((Join-Path $kok "tools\updater-private.key")).Trim()
$env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = ""
Set-Location $kok

Write-Host "[1/7] MOD $MV derleme (asla atlanmaZ)"
powershell -ExecutionPolicy Bypass -File (Join-Path $kok "yikim-mod\araclar\derle-1.21.11.ps1") -McVersion 1.21.11 -ModVersion $MV 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
$jarKaynak = "$kok\yikim-mod\derleme\yikimlient-$MV+1.21.11.jar"
if (-not (Test-Path $jarKaynak)) { Write-Host "MOD DERLEME BASARISIZ"; exit 1 }
Copy-Item $jarKaynak "$kok\src-tauri\resources\mods\yikimlient-$MV+1.21.11.jar" -Force
# eski mod jarlarini resources'tan temizle (1.12.* olanlar haric degil — HEPSI)
Get-ChildItem "$kok\src-tauri\resources\mods" -Filter "yikimlient-*.jar" | Where-Object { $_.Name -ne "yikimlient-$MV+1.21.11.jar" -and $_.Name -match "1\.12\." } | Remove-Item -Force
$manifest = Get-Content "$kok\src-tauri\resources\mods\manifest.json" -Raw
$manifest = $manifest -replace '"modVersion":\s*"[^"]+"', ('"modVersion": "' + $MV + '"')
$manifest = $manifest -replace 'yikimlient-1\.12\.\d+\+1\.21\.11\.jar', "yikimlient-$MV+1.21.11.jar"
# manifest'te dosya yerine modVersion'a bakan kismi garantiye al
Set-Content "$kok\src-tauri\resources\mods\manifest.json" $manifest -NoNewline

Write-Host "[2/7] commit + push (tag bunun sonrasinda)"
git add -A
git commit -q -m "v$V yayin: mod $MV (keskin rozet UV) installer icine yerlesir; hatta mod derleme kalici adim"
git push -q origin main 2>&1 | Select-Object -Last 1

Write-Host "[3/7] WINDOWS derleme + imza (resources: mod $MV)"
$env:TAURI_SIGNING_PRIVATE_KEY = (Join-Path $kok "tools\updater-private.key")
npm run dist 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
if (-not (Test-Path "$nsis\YIKIMLient_${V}_x64-setup.exe")) { Write-Host "WINDOWS DERLEME HATASI"; exit 1 }

Write-Host "[4/7] release + tag (guncel HEAD)"
gh release create "v$V" --title "YIKIMLient v$V" --notes "Mod ${MV}: rozet cizimleri birebir keskin. Izin paneli + izinliler menusu sunucu tarafindan calisiyor." 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -First 2
gh release upload "v$V" "$nsis\YIKIMLient_${V}_x64-setup.exe" "$nsis\YIKIMLient_${V}_x64-setup.exe.sig" --clobber 2>&1 | Select-Object -First 1

Write-Host "[5/7] tag CI bekle (linux)"
$runId = $null
foreach ($i in 1..40) {
  Start-Sleep -Seconds 15
  $runId = gh run list --branch "v$V" --limit 1 --json databaseId --jq '.[0].databaseId'
  if ($runId) { break }
}
Write-Host "CI run: $runId"
gh run watch $runId --exit-status 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
if ($LASTEXITCODE -ne 0) { Write-Host "CI BASARISIZ"; exit 1 }

$tmp = Join-Path $env:TEMP ("linux" + $V.Replace('.','') )
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
  notes    = "Mod $MV keskin cizim. Izin sistemi sunucuda canli."
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
Write-Host "asset: $((gh api repos/YKSAMI1/yikimlient/releases/tags/v$V --jq '.assets | length'))"
