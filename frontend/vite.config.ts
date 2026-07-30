import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import apiBackendProxyPlugin from "./vite-plugins/api-backend-proxy";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  plugins: [
    apiBackendProxyPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "SafeHer AI",
        short_name: "SafeHer",
        description: "AI-powered women safety application",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#0f172a",
        theme_color: "#2563eb",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  vite: {
    server: {
      host: "0.0.0.0",
    },
  },
});
