import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/api',
      application: '/src/application',
      components: '/src/components',
      pages: '/src/pages',
      utils: '/src/utils',
    },
  },
});
