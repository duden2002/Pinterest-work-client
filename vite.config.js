import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Убедитесь, что Vite компилирует файлы в современный JavaScript
  },
})