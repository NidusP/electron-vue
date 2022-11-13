import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist-electron'
  },
  plugins: [
    vue(),
    electron({
      entry: "electron/index.ts",
    }),
  ],
});
