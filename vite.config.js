import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/',
    server: {
      proxy: {
        '/.netlify/functions/chat': {
          target: 'https://api.shopaikey.com',
          changeOrigin: true,
          rewrite: (path) => '/v1/chat/completions',
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              if (env.VITE_GEMINI_API_KEY || env.SHOPAIKEY_API_KEY) {
                proxyReq.setHeader('Authorization', `Bearer ${env.VITE_GEMINI_API_KEY || env.SHOPAIKEY_API_KEY}`);
              }
            });
          }
        }
      }
    }
  };
});

