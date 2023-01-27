import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ping-coming-soon-page/",
  plugins: [react()],
});

//  1. add `base` with homepage url
//  2. add to package.json
//            "predeploy": "npm run build",
//            "deploy": "gh-pages -d dist",

// 3. npm install gh-pages --save-dev
