Add-Type -AssemblyName System.Windows.Forms, System.Drawing
# Ekranı uyandır (mause hareket + Shift) ve periyodik yakala
[System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(700, 400)
Start-Sleep -Milliseconds 120
[System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(760, 440)
Start-Sleep -Milliseconds 120
$b = [System.Windows.Forms.SystemInformation]::VirtualScreen
$bmp = New-Object System.Drawing.Bitmap $b.Width, $b.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($b.Location, [System.Drawing.Point]::Empty, $b.Size)
$p = "C:\Users\USER\AppData\Local\Temp\ss-gv-2.png"
$bmp.Save($p)
$g.Dispose()
$bmp.Dispose()
# ortalama parlaklık: ekran gerçekten mi siyah?
$d = 0
$k = 8
for ($y = 0; $y -lt $b.Height; $y += $k) {
  for ($x = 0; $x -lt $b.Width; $x += $k) {
    $d += [int]::Parse("$([System.Drawing.Bitmap]::FromFile($p).GetPixel($x,$y).R)")
  }
}
"kaydedildi: $p"
