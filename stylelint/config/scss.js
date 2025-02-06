const base = require('.');

/** @type {import('stylelint').Config} */
module.exports = {
  ...base,
  extends: [...base.extends, 'stylelint-config-standard-scss'],
};
