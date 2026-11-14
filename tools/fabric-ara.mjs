// fabric-api 26.1 modulleri icinde sinif arar (keybinding vb.).
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const JAR = "C:\\Program Files\\Java\\jdk-25.0.3\\bin\\jar.exe";
const dizin = join(process.cwd(), "yikim-mod", "araclar", "fabric-api", "26.1", "moduller");
const desen = new RegExp(process.argv[2] ?? "key", "i");
for (const dosya of readdirSync(dizin).filter((d) => d.endsWith(".jar"))) {
  const liste = execFileSync(JAR, ["tf", join(dizin, dosya)], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const eslesen = liste.split(/\r?\n/).filter((s) => desen.test(s));
  if (eslesen.length) console.log(`${dosya}\n  ${eslesen.slice(0, 8).join("\n  ")}`);
}
