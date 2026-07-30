import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  // Remplacez 'monSite' par le nom exact de votre dépôt GitHub en minuscules si besoin
  base: '/Mathicraft09.github.io/', 
  plugins: [react()],
})
