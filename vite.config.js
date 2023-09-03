import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        success: resolve(__dirname, 'pages', 'success', 'index.html'),
      },
    },
  },
})
