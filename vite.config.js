import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewares: [
      {
        apply: 'serve',
        use: (req, res, next) => {
          if (req.method === 'GET' && !req.url.includes('.')) {
            req.url = '/index.html'
          }
          next()
        },
      },
    ],
  },
})
