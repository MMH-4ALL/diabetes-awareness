import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the built site works from any GitHub Pages subpath
  // (e.g. https://<user>.github.io/<repo>/) without path rewriting.
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
