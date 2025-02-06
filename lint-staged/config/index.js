/** @type {Exclude<import('lint-staged').Config, import('lint-staged').ConfigFn>} */
module.exports = {
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{css,less,scss}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue,md,json,css,less,scss}': 'prettier --write',
};
