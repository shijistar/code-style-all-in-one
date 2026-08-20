import base from './rulesets/base';
import typescript from './rulesets/typescript';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(base, typescript);

export default config;

module.exports = config;
