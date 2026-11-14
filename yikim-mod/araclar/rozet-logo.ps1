# YIKIM rozet logosu uretici — 16x16 piksel Y (beyaz cizgi) + minik turuncu simsek.
# Cikti: yikim-mod/src/main/resources/assets/yikimlient/textures/font/badge.png
$ErrorActionPreference = "Stop"
$koku = Split-Path -Parent $PSScriptRoot
$hedef = Join-Path $koku "src\main\resources\assets\yikimlient\textures\font"
New-Item -ItemType Directory -Force -Path $hedef | Out-Null

Add-Type -AssemblyName System.Drawing

# '.' bos, 'W' beyaz, 'O' turuncu simsek
$harita = @(
"................",
"................",
"..W.....W.......",
"..W.....W.......",
"...W...W........",
"...W...W....OO..",
"....W.W....OO...",
"....WWW....OO...",
".....W.....OO...",
".....W....OO....",
".....W....OO....",
".....W...OOO....",
".....W..........",
".....W..........",
".....W..........",
"................"
)

foreach ($satir in $harita) {
    if ($satir.Length -ne 16) { throw "harita satiri 16 karakter degil: [$satir] ($($satir.Length))" }
}

$bmp = New-Object System.Drawing.Bitmap(16, 16)
$beyaz = [System.Drawing.Color]::FromArgb(255, 255, 255, 255)
$turuncu = [System.Drawing.Color]::FromArgb(255, 255, 170, 0)

for ($y = 0; $y -lt 16; $y++) {
    for ($x = 0; $x -lt 16; $x++) {
        $c = $harita[$y][$x]
        if ($c -eq 'W') { $bmp.SetPixel($x, $y, $beyaz) }
        elseif ($c -eq 'O') { $bmp.SetPixel($x, $y, $turuncu) }
    }
}

$cikti = Join-Path $hedef "badge.png"
$bmp.Save($cikti, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "TAMAM: $cikti"
