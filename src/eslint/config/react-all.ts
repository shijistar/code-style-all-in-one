import type { Linter } from 'eslint';
import react from './react-recommended';
import others from './rulesets/others';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(react, others);

export default config;

// module.exports = config;
