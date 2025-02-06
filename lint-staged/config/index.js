/** @type {Exclude<import('lint-staged').Config, import('lint-staged').ConfigFn>} */
module.exports = {
  '*.{md,json}': ['prettier --cache --write'],
  '*.{js,jsx}': ['max lint --fix --eslint-only', 'prettier --cache --write'],
  '*.{css,less}': ['max lint --fix --stylelint-only', 'prettier --cache --write'],
  '*.ts?(x)': ['max lint --fix --eslint-only', 'prettier --cache --parser=typescript --write'],
};
