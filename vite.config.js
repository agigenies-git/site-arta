import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// As imagens continuam na pasta do site estático (sem duplicação).
// No dev e no build elas são servidas em /img/...
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
})
