import type { Linter } from 'eslint';
import prettier from './rulesets/prettier';
import { mergeConfig } from './utils/index';

const config: Linter.Config[] = mergeConfig(prettier);

export default config;

// module.exports = config;
