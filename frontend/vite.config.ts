import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7070,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
})
