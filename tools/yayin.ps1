# YIKIMLient - TAM YAYIN HATTI (mod derleme DAHIL, kalici)
# Ogrenilen dersler zinciri:
#  - exe yeniden derlemesin diye unutulan mod derleme asla silinmez (v0.3.36 vakasi)
#  - tag HER ZAMAN commit sonrasi alinir (v0.3.34 vakasi)
#  - release create + upload + CI(D)den sonra linux asset imzalari + latest.json EN SON
param(
    [string]$V = "0.3.38",
    [string]$MV = "1.12.6",
    [string]$Notlar = ""
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
# eski mod jarlarini resources'tan temizle (1.12.* olanlar haric degil - HEPSI)
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
if ($Notlar -eq "") { $Notlar = "Mod ${MV}: sicak guncelleme kanali gomulu - bundan sonra mod guncellemeleri exe derlemesi olmadan dakikalar icinde dagitilir." }
gh release create "v$V" --title "YIKIMLient v$V" --notes $Notlar 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -First 2
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
$wurl = "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/YIKIMLient_${V}_x64-setup.exe"
$lurl = "https://github.com/YKSAMI1/yikimlient/releases/download/v$V/YIKIMLient_${V}_amd64.AppImage"
$latest = @{
  version  = $V
  notes    = $Notlar
  pub_date = (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')
  platforms = @{
    "windows-x86_64"        = @{ signature = $wsig; url = $wurl }
    "windows-x86_64-nsis"   = @{ signature = $wsig; url = $wurl }
    "linux-x86_64"          = @{ signature = $lsig; url = $lurl }
    "linux-x86_64-appimage" = @{ signature = $lsig; url = $lurl }
  }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
gh release upload "v$V" "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1

Write-Host "[7/7] dogrulama (API tabanli - CDN cache tuzaigi atlanir)"
$dogru = $false
foreach ($deneme in 1..3) {
  Start-Sleep -Seconds 5
  $rel = gh api "repos/YKSAMI1/yikimlient/releases/tags/v$V" | ConvertFrom-Json
  $a = $rel.assets | Where-Object { $_.name -eq 'latest.json' }
  $icerik = gh api "repos/YKSAMI1/yikimlient/releases/assets/$($a.id)" --header 'Accept: application/octet-stream'
  $u = $icerik | ConvertFrom-Json
  $plat = $u.platforms.PSObject.Properties.Name
  Write-Host "surum: $($u.version)  platforms: $($plat -join ', ')"
  if ($plat -contains 'windows-x86_64' -and $plat -contains 'windows-x86_64-nsis' -and $plat -contains 'linux-x86_64') { $dogru = $true; break }
  Write-Host "windows eksik - CI dosyasi ustune yazmis, birlesigi yeniden yukluyorum"
  gh release upload "v$V" "$nsis\latest.json" --clobber 2>&1 | Select-Object -First 1
}
foreach ($p in $u.platforms.PSObject.Properties.Name) { Write-Host "$p imza uzunluk: $($u.platforms.$p.signature.Length)" }
Write-Host "asset: $($rel.assets.Count)"
if (-not $dogru) { Write-Host "DUZELTILEMEDIM - elle bak"; exit 1 }

# [8/8] SICAK UI KANALI TAZELEME (kritik degil, hata release'i bozmaz)
# Neden: launcher, sicak UI'yi YALNIZCA gomulu surumden yeni/esitse tercih eder
# (yikim_ui::etkin_dir). Onceki dongulerden kalan sicak UI numarasi (or. 0.3.49)
# yeni release'in gomulu yuzunden buyuk kalirsa kullanici ESKI arayuzu gorur -
# yeni ozellikler ekranda gorunmez (v0.3.43 vakasi). Cozum: her release sonunda
# AYNI yuzu daha yuksek numarayla sicak kanala yaz; numara hem release'ten hem
# onceki sicak surumden buyuk olur.
Write-Host "[8/8] sicak UI kanali tazeleniyor (gomulu yuzun aynisi, daha yuksek numara)"
try {
    $sicakRel = gh api "repos/YKSAMI1/yikimlient/releases/tags/sicak" | ConvertFrom-Json
    $sj = $sicakRel.assets | Where-Object { $_.name -eq 'sicak.json' } | Select-Object -First 1
    $canli = gh api "repos/YKSAMI1/yikimlient/releases/assets/$($sj.id)" --header 'Accept: application/octet-stream' | ConvertFrom-Json
    $uiE = @($canli.kaynaklar) | Where-Object { $_.tur -eq 'ui' } | Select-Object -First 1
    $p = $V.Split('.')
    $maj = [int]$p[0]; $min = [int]$p[1]; $pat = [int]$p[2]
    if ($uiE -and $uiE.surum) {
        $hp = $uiE.surum.Split('.')
        $hotPat = [int]$hp[$hp.Count - 1]
        if ($hotPat -gt $pat) { $pat = $hotPat }
    }
    $yeniUi = "$maj.$min.$($pat + 1)"
    Write-Host "      sicak UI: $yeniUi (onceki: $($uiE.surum))"
    powershell -ExecutionPolicy Bypass -File (Join-Path $kok "tools\sicak-ui.ps1") -Surum $yeniUi -Notlar $Notlar 2>&1 | ForEach-Object { $_.ToString() } | Select-Object -Last 2
    # resources/ui/surum.txt paket icin kanal numarasina cevrilir - gomulu deger geri yazilir
    [System.IO.File]::WriteAllText((Join-Path $kok "src-tauri\resources\ui\surum.txt"), $V, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host "      sicak UI hazir: $yeniUi (gomulu surum.txt: $V)"
} catch {
    Write-Host "      sicak UI tazeleme atlandi (kritik degil): $_"
    [System.IO.File]::WriteAllText((Join-Path $kok "src-tauri\resources\ui\surum.txt"), $V, (New-Object System.Text.UTF8Encoding($false)))
}
