$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.7_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = 'Klip fix (gercek neden): oyun artik javaw.exe ile baslatiliyor. Discord oyun algilama veritabani javaw.exe yi Minecraft olarak tanir, java.exe yi tanimiyordu. Klip ve Go Live artik Minecraft i kaydeder.'
$latest = @{
    version  = "0.3.7"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.7/YIKIMLient_0.3.7_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json yeniden yazildi"
