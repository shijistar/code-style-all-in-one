import react from './react-recommended';
import others from './rulesets/others';
import { mergeConfig } from './utils';
import type { Linter } from 'eslint';

const config: Linter.Config[] = mergeConfig(react, others);

export default config;

module.exports = config;
