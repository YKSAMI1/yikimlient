$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.31_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = 'Oyun ici YIKIM rozeti: launcher logon ismin yaninda tasir - F5 kendi etiketinde, TAB listesinde ve YIKIMLient kullanan diger oyuncularda gorunur (ayni mod sunucuda ise her sunucuda calisir). Yeni Goruntu Motoru preseti Sag Shift menusune eklendi. Ozeli JVM preseti: RAM, chunk mesafesi ve JVM argumanlarini kendin ayarla, launcher karismaz. Kesfette sayfalama: arama sonuclari Daha fazla goster ile sayfa sayfa alinir, surum listesi tam gorunur. GPU tuketimi azaltildi: ambiyans parcaciklari pencere odak kaybedince tamamen durur, daha yavas fps ust siniri ve daha hafif cozunurluk cizer.'
$latest = @{
    version  = "0.3.31"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.31/YIKIMLient_0.3.31_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json hazir"
