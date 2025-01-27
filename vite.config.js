import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Убедитесь, что указана правильная папка для сборки
    assetsDir: 'assets',  // Убедитесь, что ассеты правильно направляются
  },
  server: {
    fs: {
      strict: true,  // Эта настройка может помочь в определенных случаях
    },
  },
})