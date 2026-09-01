import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User-page repo (markdamics.github.io) — served at the domain root.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
