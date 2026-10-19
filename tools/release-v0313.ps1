$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.13_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = '5 yeni ozgun tema (Karanlik Oda, Kumas, Perde, Buzul, Skala - toplam 12), ozel vurgu rengi artik butun dunyalarda calisiyor, doku paketi ve shader kapaklari (pack.png otomatik gosterilir).'
$latest = @{
    version  = "0.3.13"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.13/YIKIMLient_0.3.13_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json hazir"
