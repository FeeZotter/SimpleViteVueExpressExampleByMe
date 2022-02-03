import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");

module.exports = defineConfig({
  //use vue
  plugins: [vue()],
  //compile content
  build: {
    //content from folder | default creates a new folder "dist"
    root: "src",
    //where it gets pasted
    outDir: "../root",
    //makes a treeshake and makes a build
    rollupOptions: {
      input: {
        //[put here new sites]
        index: resolve(__dirname, "index.html"),
        example: resolve(__dirname, "example/index.html"),
        example2: resolve(__dirname, "example2/index.html"),
        copyMe: resolve(__dirname, "copyMe/index.html"),
      },
    },
  },
});
