import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Habilita o React Compiler via Babel
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
      },
    }),
  ],
  // Usaremos 'publico' em vez de 'public'
  publicDir: 'publico',
  server: {
    port: 5173,
    open: true,
  },
})
