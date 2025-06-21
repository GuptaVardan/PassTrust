import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@tailwindcss/oxide', 'lightningcss']
  },
  build: {
    rollupOptions: {
      external: [
        path.resolve(
          __dirname,
          'node_modules/@tailwindcss/oxide-win32-x64-msvc/tailwindcss-oxide.win32-x64-msvc.node'
        )
      ]
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ]
})
