import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // brand_assets holds static images; skip watching to avoid EBUSY on locked files
      ignored: ['**/brand_assets/**'],
    },
  },
})
