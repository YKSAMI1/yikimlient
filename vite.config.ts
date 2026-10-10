import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "ui",
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  build: {
    target: "es2022",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      // İki HTML girişi: ana launcher + restart perdesi.
      // Perde EXE içinde ayrı pencere olarak açılır (WebviewUrl::App("curtain.html"));
      // input listesinde yoksa dist'e hiç girmez → paketlenmiş uygulamada boş pencere.
      input: {
        main: resolve(__dirname, "ui/index.html"),
        curtain: resolve(__dirname, "ui/curtain.html"),
      },
    },
  },
});
