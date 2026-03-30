import base from './rulesets/base';
import typescript from './rulesets/typescript';
import { mergeConfig } from './utils';

const config = mergeConfig(base, typescript);

export default config;

module.exports = config;
