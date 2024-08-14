import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  viteStaticCopy({
    targets: [
      {
        src: 'src/assets/**/*',
        dest: 'assets'
      },
    ]
  }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Зберігає основний JavaScript файл в кореневій папці dist
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'index.css'; // Зберігає CSS файл в кореневій папці dist
          }
          return 'assets/[name].[ext]'; // Інші статичні файли в папці assets
        },
      },
    },
  },
})
