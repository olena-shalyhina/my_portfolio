import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), svgr()],
    base: command === 'serve' ? '/' : '/my_portfolio/',

    css: {
      preprocessorOptions: {
        scss: { includePaths: [resolve(__dirname, 'node_modules')] },
      },
    },
  };
});
