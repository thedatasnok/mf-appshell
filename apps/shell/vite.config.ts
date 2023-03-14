import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'shell',
      filename: 'remoteEntry.js',
      exposes: {},
      remotes: {
        projects: '/projects/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
  },
  server: {
    proxy: {
      '/projects': {
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/projects/, ''),
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
