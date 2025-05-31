import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        "src/resources/Yahya_Eyad.pdf",
        "src/resources/PubliFluorNormale.otf",
      ],
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (
            assetInfo.name === "Yahya_Eyad.pdf" ||
            assetInfo.name === "PubliFluorNormale.otf"
          ) {
            return `assets/[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
