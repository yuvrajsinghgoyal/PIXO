import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  root: '.',   // folder where index.html is located
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    tailwindcss(),

  ],
})


  
