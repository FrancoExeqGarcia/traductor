import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/traductor/',
  server: {
    proxy: {
      '/api': {
        target: 'https://translate-backend-274548491076.us-central1.run.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
