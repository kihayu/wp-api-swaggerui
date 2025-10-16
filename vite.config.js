import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'js/app': resolve(__dirname, 'resources/js/app.js'),
        'css/app': resolve(__dirname, 'resources/sass/app.scss'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0]?.endsWith('.css')) {
            return '[name].css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
