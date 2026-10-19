$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.14_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = 'Ambiens parcacik motoru: her temanin kendi efekti (zimtirak, kar, fosfor yagmuru, kabarcik, altin toz...). Ozel fare imleci: YIKIM Oku, Hedef veya Nokta - vurgu rengiyle boyanir. Karanlik Oda, Kumas, Perde ve Buzul dunyalarina doku/vinyet yuzey katmanlari eklendi, temalar artik birbirinden daha cok ayrisiyor. Kontrol: Ayarlar > Gorsel Dunya > Ambiens & Imlec (Kapali/Sessiz/Normal/Yogun).'
$latest = @{
    version  = "0.3.14"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.14/YIKIMLient_0.3.14_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json hazir"
