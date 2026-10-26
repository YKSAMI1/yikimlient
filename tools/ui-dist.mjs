// YIKIM - UI DIST HAZIRLAMA (tauri beforeBuildCommand'dan cagirilir)
// Node tabani: Linux CI'da powershell yok (v0.3.39 CI vakasi) - her iki OS'de calisir.
//  1. npm run build (vite) -> ui/dist
//  2. ui/dist icerigini src-tauri/resources/ui'ye kopyalar (sil-yeni kur)
//  3. surum.txt yazar (src-tauri/Cargo.toml [package] version)
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(kok);

console.log("[ui-dist] npm run build");
execSync("npm run build", { stdio: "inherit" });
const dist = join(kok, "ui", "dist");
if (!existsSync(join(dist, "index.html"))) {
    console.error("UI DIST YOK: ui/dist/index.html");
    process.exit(1);
}

const hedef = join(kok, "src-tauri", "resources", "ui");
rmSync(hedef, { recursive: true, force: true });
mkdirSync(hedef, { recursive: true });
cpSync(dist, hedef, { recursive: true });

// surum: Cargo.toml [package] version (sicak kanal karsilastirmasi icin)
let ver = "";
const cargo = readFileSync(join(kok, "src-tauri", "Cargo.toml"), "utf-8");
const m = cargo.match(/^\[package\][\s\S]*?^\s*version\s*=\s*"([^"]+)"\s*$/m);
if (m) ver = m[1];
writeFileSync(join(hedef, "surum.txt"), ver);

function say(d) {
    let c = 0;
    for (const g of readdirSync(d, { withFileTypes: true })) {
        c += g.isDirectory() ? say(join(d, g.name)) : 1;
    }
    return c;
}
console.log(`[ui-dist] TAMAM - resources/ui hazir (surum ${ver}, ${say(hedef)} dosya)`);
