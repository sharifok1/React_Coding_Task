// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodeSass from 'node-sass'; // Import node-sass here

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: nodeSass, // Use the imported node-sass
      },
    },
  },
});