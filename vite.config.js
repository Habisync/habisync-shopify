import { defineConfig } from 'vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import { oxygen } from '@shopify/mini-oxygen/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    hydrogen(),
    oxygen(),
    tsconfigPaths(),
  ],
  build: {
    assetsInlineLimit: 0, // Allow strict Content-Security-Policy
  },
  ssr: {
    optimizeDeps: {
      include: [], // Add CJS/ESM dependencies if errors occur
    },
  },
});
