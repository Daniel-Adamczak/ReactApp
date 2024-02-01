import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true, // enable production source maps
  },
  css: {
    devSourcemap: true // enable CSS source maps during development
  },
  base: '/ReactApp/',
  plugins: [react()],
})
