import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      // --- Caching Strategy ---
      // This configures the service worker to automatically update
      // when a new version is available.
      registerType: 'autoUpdate',

      // --- Offline Support (Workbox) ---
      // This is the key for offline support.
      // 'globPatterns' tells the service worker which files to cache.
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      },

      // --- Web App Manifest ---
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'My awesome Progressive Web App!',
        // You can find your theme_color in your tailwind.config.js
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/react-pwa/',
        start_url: '/react-pwa/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            // This is the "maskable" icon
            src: 'pwa-512x512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  base: "/react-pwa/",
})
