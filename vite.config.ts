import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env': {
        ...process.env,
        GEMINI_API_KEY: process.env.GEMINI_API_KEY || env.GEMINI_API_KEY,
        NODE_ENV: JSON.stringify(mode),
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});
