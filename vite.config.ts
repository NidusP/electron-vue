import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
// 支持renderer
import electronRender from "vite-plugin-electron-renderer";

export default defineConfig({
  build: {
    outDir: 'dist-electron',
    emptyOutDir: false
  },
  plugins: [
    vue(),
    electron([{
      entry: "electron/index.ts",
    },{
      entry: "electron/preload.ts",
      onstart(options) {
        // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
        // instead of restarting the entire Electron App.
        options.reload()
      },
    }]),
    electronRender({
    })
  ],
});
