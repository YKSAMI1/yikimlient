// YIKIMLient giriş noktası.
// Release'de konsol penceresi açılmaz (windows_subsystem).
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    yikimlient::run()
}
