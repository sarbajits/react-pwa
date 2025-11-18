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
        description: 'My awesome Progressive Web App built with Vite and React ! for testing',
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
        "screenshots": [
          {
            "src": "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
            "sizes": "1280x720",
            "type": "image/webp",
            "form_factor": "wide",
            "label": "Home screen showing main navigation and featured content"
          },
          {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
            "sizes": "1280x720",
            "type": "image/webp",
            "platform": "ios",
            "label": "Dashboard view displaying key metrics"
          }
        ]
      },
    }),
  ],
  base: "/react-pwa/",
})
