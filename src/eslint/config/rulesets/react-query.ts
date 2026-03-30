import type { ESLint } from 'eslint';

const config: ESLint.ConfigData = {
  extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
};

export default config;

module.exports = config;
