'use strict';

/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./eslint/config/base');
const typescript = require('./eslint/config/typescript');
const recommended = require('./eslint/config/recommended');
const reactRecommended = require('./eslint/config/react-recommended');
const reactAll = require('./eslint/config/react-all');
const vueRecommended = require('./eslint/config/vue-recommended');
const vueTypescript = require('./eslint/config/vue-typescript');
const vueAll = require('./eslint/config/vue-all');
const nextRecommended = require('./eslint/config/next-recommended');
const nextAll = require('./eslint/config/next-all');
const prettier = require('./eslint/config/prettier');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  configs: {
    base,
    typescript,
    recommended,
    'react-recommended': reactRecommended,
    'react-all': reactAll,
    'vue-recommended': vueRecommended,
    'vue-typescript': vueTypescript,
    'vue-all': vueAll,
    'next-recommended': nextRecommended,
    'next-all': nextAll,
    prettier,
  },
};
