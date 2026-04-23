import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public/pages',
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  }
})