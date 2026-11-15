<#
  BELLEK UYARISI TESTI (ram-uyari.ts)
  powershell -ExecutionPolicy Bypass -File tools\ram-uyari-test.ps1

  Amaç: "mod paketi kurulurken RAM açıklaması / önerisi"nın doğruluğunu
  sertleştirmek. Öneri ASLA otomatik uygulanmıyor; bu test yalnızca
  metnini/ hesaplamasını denetler.

  Neden komut satırı: projede UI test çatısı (vitest) kurulu değil — bu
  modül `main.ts` (Tauri invoke) üzerinden çalıştığı için tarayıcıya ihtiyaç
  duymayan kısmu sadece `onerilenRamMb` / `ramUyarisiHtml`. Tsc ile commonjs
  çıktısı alınıp node ile beklenen değerlerle karşılaştırılır.
#>
$ErrorActionPreference = 'Stop'
$kok = Split-Path -Parent $PSScriptRoot
$cikti = Join-Path $env:TEMP "yikim-ram-derle"

Write-Host "[1/3] modul derleniyor (commonjs)"
if (Test-Path $cikti) { Remove-Item $cikti -Recurse -Force }
& npx tsc "$kok\ui\src\ram-uyari.ts" --skipLibCheck --module commonjs --target es2022 --lib es2022,dom,dom.iterable --outDir $cikti 2>&1 |
    ForEach-Object { if ($_ -match "error TS") { Write-Host "  $_" } }
$js = Join-Path $cikti "ram-uyari.js"
if (-not (Test-Path $js)) { Write-Host "DURDURULDU: derleme cikti uretmedi - hata metinlerine bak"; exit 1 }

Write-Host "[2/3] durumlar kosuluyor"
$test = @'
const m = require(process.argv[2]);
const [ad, modSayisi, mevcut, toplam, beklenen] = process.argv.slice(3);
const gelen = m.onerilenRamMb(Number(modSayisi), Number(mevcut), Number(toplam));
const html = m.ramUyarisiHtml(Number(modSayisi), Number(mevcut), Number(toplam), "ayar");
const ok = gelen === Number(beklenen) && (Number(gelen) === 0 ? html === "" : /ram-uyari/.test(html));
console.log((ok ? "  OK   " : "  HATA ") + ad.padEnd(30)
  + " mod=" + String(modSayisi).padStart(4)
  + " mevcut=" + String(mevcut).padStart(5)
  + " makine=" + String(toplam).padStart(5)
  + " -> " + String(gelen).padStart(5) + " MB (beklenen " + beklenen + ")");
process.exit(ok ? 0 : 1);
'@
$testDosya = Join-Path $cikti "adim.js"
[System.IO.File]::WriteAllText($testDosya, $test, (New-Object System.Text.UTF8Encoding($false)))

$durumlar = @(
    @("esik altinda (20 mod)", 20, 4096, 16384, 0),
    @("esik siniri (59 mod)", 59, 4096, 16384, 0),
    @("esik aninda (60 mod)", 60, 4096, 16384, 5120),
    @("orta dolu (119 mod)", 119, 4096, 16384, 5120),
    @("agir (120 mod)", 120, 4096, 16384, 7168),
    @("en agir (358 mod)", 358, 4096, 16384, 8192),
    @("zaten yeterli (8 GB)", 358, 8192, 16384, 0),
    @("aramada (6 GB)", 358, 5120, 16384, 8192),
    @("6 GB makine tavani", 358, 1024, 6144, 3072),
    @("2 GB makine tabani", 358, 1024, 2048, 0),
    @("8 GB makinede tam yarim", 358, 4096, 8192, 0),
    @("bos/bozuk veri", 0, 0, 0, 0)
)
$hatali = 0
foreach ($d in $durumlar) {
    & node $testDosya $js $d[0] $d[1] $d[2] $d[3] $d[4]
    if ($LASTEXITCODE -ne 0) { $hatali++ }
}

Write-Host "[3/3] özet: $($durumlar.Count - $hatali)/$($durumlar.Count) durum tamam"
if ($hatali -gt 0) { exit 1 }
Write-Host "  TAMAM - bellek uyarisi beklenen gibi davranıyor"