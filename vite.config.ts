import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import vue from "@vitejs/plugin-vue";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sentryVitePlugin({
      org: "cygnus-p3",
      project: "deezer-clone",
    }),
  ],

  build: {
    sourcemap: true,
  },
  test: vitestConfig.test,
  // base: "deezer-clone",
});
