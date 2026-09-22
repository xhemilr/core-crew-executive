import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps the build working from any path — GitHub Pages project sites
// live under /<repo>/, a custom domain lives at /.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
