import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mathicraft09.github.io/', // <-- Remplacez "monSite" par le nom exact de votre dépôt GitHub
  plugins: [react()],
})
