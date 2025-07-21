import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Ajustar según tu instalación de WordPress
  // Si WordPress está en la raíz: base: '/'
  // Si WordPress está en subcarpeta: base: '/wordpress/'
  // Para ReactPress siempre usar ruta relativa
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    // Importante para ReactPress
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Asegurar que los CSS se incluyan correctamente
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      }
    }
  },
  // Para desarrollo local
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/wp-json': {
        target: 'http://localhost:8888', // Cambiar al puerto de tu WordPress
        changeOrigin: true,
        secure: false
      }
    }
  }
})