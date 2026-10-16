$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.3_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = "Discord RPC tamir edildi: config'deki eski discord_rpc:false gecişi otomatik duzeltildi, tek kalici baglanti mimarisi (XMCL tarzi), launcher acilista 'YIKIMLient acik' gosterir, oyunda 'ile oynuyor'a gecer"
$latest = @{
    version  = "0.3.3"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.3/YIKIMLient_0.3.3_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json hazir"
