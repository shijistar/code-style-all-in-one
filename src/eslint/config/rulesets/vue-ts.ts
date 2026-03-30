import type { ESLint } from 'eslint';
import typescript from './typescript';

const config: ESLint.ConfigData = {
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    ...typescript.overrides?.[0].parserOptions,
    parser: '@typescript-eslint/parser',
  },
};

export default config;

module.exports = config;
