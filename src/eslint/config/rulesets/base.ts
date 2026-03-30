import type { ESLint } from 'eslint';
import { existsSync } from 'node:fs';

const config: ESLint.ConfigData = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
      caller: {
        supportsTopLevelAwait: true,
      },
    },
    project: existsSync('./tsconfig.eslint.json') ? './tsconfig.eslint.json' : undefined,
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
};

export default config;

module.exports = config;
