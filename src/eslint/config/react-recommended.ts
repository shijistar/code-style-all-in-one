import prettier from './rulesets/prettier';
import react from './rulesets/react';
import reactQuery from './rulesets/react-query';
import recommendedBase from './rulesets/recommended-base';
import { mergeConfig } from './utils';

const config = mergeConfig(recommendedBase, react, reactQuery, prettier);

export default config;

module.exports = config;
