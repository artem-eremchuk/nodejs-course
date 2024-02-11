import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/nodejs-course/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: "@import 'src/styles/global.scss';",
      },
    },
  },
});
