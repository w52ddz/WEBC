import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WEBC/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // "@": path.resolve(__dirname, "src"),
      // "~": path.resolve(__dirname, "public"),
      // "/icon": "./src/assets/"
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
  server: {
    // 是否自动打开浏览器
    open: true,
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    // 服务器端口号
    port: 3000,
    // middlewareMode: 'html',
    // 代理
    proxy: {
      '/v1/apigateway': {
        target: `http://12.12.12.12/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1_redirect\/apigateway/, ''),
      },
    },
  },
  build: {
    outDir: 'docs',
  },
})
