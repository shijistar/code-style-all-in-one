const base = require('.');

/** @type {import('stylelint').Config} */
module.exports = {
  ...base,
  rules: {
    ...base.rules,
    // to avoid conflicts with less option { math: always }
    // ref: https://github.com/less/less-docs/blob/c8b9d33b0b4ec5fe59a4bbda11db202545741228/content/usage/less-options.md#math
    'color-function-notation': null,
  },
  customSyntax: 'postcss-less',
};
