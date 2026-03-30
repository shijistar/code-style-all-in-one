import base from './rulesets/base';
import { mergeConfig } from './utils';

const config = mergeConfig(base);

export default config;

module.exports = config;
