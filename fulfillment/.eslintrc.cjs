module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  // 기존 설정 유지
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    project: './tsconfig.json', // TypeScript 프로젝트 경로
    tsconfigRootDir: __dirname, // `tsconfig.json` 파일이 위치한 디렉토리
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

  ],
};