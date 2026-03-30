import type { ESLint } from 'eslint';

const config: ESLint.ConfigData = {
  extends: ['plugin:unicorn/recommended'],
};

export default config;

module.exports = config;
