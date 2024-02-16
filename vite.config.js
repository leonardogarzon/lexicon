import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000
  },
  resolve: {
    alias: {
      '@assets': path.resolve(process.cwd(), './src/assets'),
      '@components': path.resolve(process.cwd(), './src/components'),
      '@hooks': path.resolve(process.cwd(), './src/hooks'),
      '@pages': path.resolve(process.cwd(), './src/pages'),
      '@providers': path.resolve(process.cwd(), './src/providers'),
      '@routers': path.resolve(process.cwd(), './src/routers'),
      '@common': path.resolve(process.cwd(), './src/common'),
    },
  },
})
