Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Drawing.Drawing2D

# YIKIM logosu: 32x32 PNG, beyaz Y harfi, seffaf zemin
$size = 32
$bmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::None
$g.Clear([System.Drawing.Color]::Transparent)

# Beyaz Y harfi — dolgun, okunakli
$font = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$fmt = New-Object System.Drawing.StringFormat
$fmt.Alignment = [System.Drawing.StringAlignment]::Center
$fmt.LineAlignment = [System.Drawing.StringAlignment]::Center
$rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
$g.DrawString("Y", $font, $brush, $rect, $fmt)
$g.Dispose()

$outDir = "C:\Users\USER\Desktop\samiclient\yikim-mod\src\main\resources\assets\yikimlient\textures\font"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$bmp.Save("$outDir\yikim_badge.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
"PNG olusturuldu: $outDir\yikim_badge.png"

# Font JSON — \uE001 karakterini logoya esler
$jsonDir = "C:\Users\USER\Desktop\samiclient\yikim-mod\src\main\resources\assets\yikimlient\font"
New-Item -ItemType Directory -Force -Path $jsonDir | Out-Null
@"
{
  "providers": [
    {
      "type": "bitmap",
      "file": "yikimlient:textures/font/yikim_badge.png",
      "ascent": 7,
      "height": 8,
      "chars": [
        "\uE001"
      ]
    }
  ]
}
"@ | Set-Content "$jsonDir\default.json" -Encoding UTF8
"Font JSON olusturuldu: $jsonDir\default.json"
