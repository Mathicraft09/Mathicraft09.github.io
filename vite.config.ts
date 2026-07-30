import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/monSite/', // <-- Remplacez "monSite" par le nom exact de votre dépôt GitHub
  plugins: [react()],
})
