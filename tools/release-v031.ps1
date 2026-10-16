$nsis = "C:\Users\USER\Desktop\samiclient\src-tauri\target\release\bundle\nsis"
$exe = "$nsis\YIKIMLient_0.3.1_x64-setup.exe"
$sig = (Get-Content "$exe.sig" -Raw).Trim()
$pub = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ'
$notes = "HUD FPS sifir fix'i, Guard ayar zorlamasi kaldirildi (mod artik hicbir ayara dokunmaz), ana menu 7 butona dondu, dil tek seferlik, Discord Rich Presence (YIKIMLient ile oynuyor), Kesfet'te Doku/Shader/Dunya/Datapack arama + indirme, arama kutusu kalinligi, kurulum dialogunda dosya yolu gizlendi, mod v1.9.0 (1.21.2+ tumunde)"
$latest = @{
    version  = "0.3.1"
    notes    = $notes
    pub_date = $pub
    platforms = @{
        "windows-x86_64" = @{
            signature = $sig
            url = "https://github.com/YKSAMI1/yikimlient/releases/download/v0.3.1/YIKIMLient_0.3.1_x64-setup.exe"
        }
    }
} | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("$nsis\latest.json", $latest, (New-Object System.Text.UTF8Encoding($false)))
"latest.json hazir:"
Get-Content "$nsis\latest.json" | Select-Object -First 4
