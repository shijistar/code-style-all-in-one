import prettier from './rulesets/prettier';
import recommendedBase from './rulesets/recommended-base';
import vueTS from './rulesets/vue-ts';
import { mergeConfig } from './utils';

const config = mergeConfig(recommendedBase, vueTS, prettier);

export default config;

module.exports = config;
