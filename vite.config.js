import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/adedoyin-portfolio/',  // 👈 important
  plugins: [react()],
});
