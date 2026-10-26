# YIKIM - UI DIST HAZIRLAMA (tauri beforeBuildCommand'dan cagirilir)
#
# Ne yapar:
#   1. npm run build (vite) -> ui/dist
#   2. ui/dist icerigini src-tauri/resources/ui'ye kopyalar (sil-yeni kur)
#   3. surum.txt yazar (src-tauri/Cargo.toml version) - sicak kanal karsilastirmasi icin
#
# NOT: SADECE ASCII (PS 5.1 UTF-8 BOM'suz dosyada Turkce karakterleri bozar).
param()
$ErrorActionPreference = 'Continue'
$kok = Split-Path -Parent $PSScriptRoot
Set-Location $kok

Write-Host "[ui-dist] npm run build"
npm run build
if (-not (Test-Path "ui\dist\index.html")) { Write-Host "UI DIST YOK: ui\dist\index.html"; exit 1 }

$hedef = "src-tauri\resources\ui"
if (Test-Path $hedef) { Remove-Item $hedef -Recurse -Force }
New-Item $hedef -ItemType Directory -Force | Out-Null
Copy-Item "ui\dist\*" $hedef -Recurse -Force

# surum: Cargo.toml [package] version
$ver = ""
$lines = Get-Content "src-tauri\Cargo.toml"
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i].Trim() -eq '[package]') {
        for ($j = $i + 1; $j -lt $lines.Count; $j++) {
            if ($lines[$j] -match '^version\s*=\s*"([^"]+)"') { $ver = $matches[1]; break }
            if ($lines[$j].Trim().StartsWith('[') -and $lines[$j].Trim().EndsWith(']')) { break }
        }
        break
    }
}
[System.IO.File]::WriteAllText("$hedef\surum.txt", $ver, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "[ui-dist] TAMAM - resources/ui hazir (surum $ver, $((Get-ChildItem $hedef -Recurse -File | Measure-Object).Count) dosya)"
exit 0
