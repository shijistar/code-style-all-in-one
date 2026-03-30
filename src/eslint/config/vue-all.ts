import others from './rulesets/others';
import { mergeConfig } from './utils';
import vueTS from './vue-typescript';

const config = mergeConfig(vueTS, others);

export default config;

module.exports = config;
