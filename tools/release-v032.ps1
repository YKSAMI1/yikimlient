$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.2_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = "Internet doygunluk fix'i: katalog aramalari 10 dk onbellek + ikon indirme 40->5 paralel, Discord RPC bug fix'i (baglanti hatasinda bir daha denenmiyordu), mod v1.9.1 (tekrar eden katalog istekleri engellendi)"
$latest = @{
    version  = "0.3.2"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.2/YIKIMLient_0.3.2_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json hazir"
