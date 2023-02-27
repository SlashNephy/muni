import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT ?? '7070', 10),
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
})
