import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'https://laurajeg.github.io/Exhibition-Curation-Platform/',
  plugins: [react()],
})
