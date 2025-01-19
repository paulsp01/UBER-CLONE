import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, 
  },
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Use Render's PORT or default to 5173
  },
})
