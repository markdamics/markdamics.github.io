import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project is hosted at https://<user>.github.io/personal_page/ — base must match the repo name.
export default defineConfig({
  base: '/personal_page/',
  plugins: [react()],
});
