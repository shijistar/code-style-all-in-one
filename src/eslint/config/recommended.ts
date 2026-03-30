import prettier from './rulesets/prettier';
import recommendedBase from './rulesets/recommended-base';
import typescript from './rulesets/typescript';
import { mergeConfig } from './utils';

const config = mergeConfig(recommendedBase, typescript, prettier);

export default config;

module.exports = config;
