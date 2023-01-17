import preact from '@preact/preset-vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { URL, fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      env.NODE_ENV == 'development' ? react() : preact(),
      visualizer({ template: 'sunburst' }),
    ],
    assetsInclude: ['**/*.mp4'],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            ajv: ['ajv'],
          },
        },
      },
    },
    css: {
      modules: {
        generateScopedName: '[local]-[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
    resolve: {
      alias: {
        '@/': `${fileURLToPath(new URL('./src', import.meta.url))}/`,
      },
    },
  };
});
