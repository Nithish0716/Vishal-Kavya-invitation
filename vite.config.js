import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Vishal-Kavya-invitation/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
});