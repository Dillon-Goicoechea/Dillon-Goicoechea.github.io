import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/Dillon-Goicoechea.github.io/",
  build: {
  }
})