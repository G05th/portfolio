import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/react/react-restaurant',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 443
    },
    cors: true,
    allowedHosts: ['3000-imhydqorvk3q4qmenxh2f-f117dbde.manusvm.computer']
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true
  }
})
