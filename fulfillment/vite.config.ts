import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify"
import AutoImport from 'unplugin-auto-import/vite'
import * as path from "node:path";

export default defineConfig({
  // 진입점 설정
  /*  build: {
    rollupOptions: {
      input: '/src/main.ts', // 진입 파일 경로 설정
    },
  },*/
  plugins: [
    vue(),
    vuetify({autoImport: true}), // Enabled by default
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',  // 자동 생성된 타입 정의 파일
      eslintrc: {
        enabled: true,  // ESLint 설정 파일 생성
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true, // 자동 임포트되는 변수를 ESLint에 글로벌 변수로 추가
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // '@'를 'src' 디렉토리로 매핑
    },
  },
})