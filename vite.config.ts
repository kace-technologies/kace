import netlifyReactRouter from '@netlify/vite-plugin-react-router'
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [
    netlify(),
    tailwindcss(),
    reactRouter(),
    netlifyReactRouter(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
