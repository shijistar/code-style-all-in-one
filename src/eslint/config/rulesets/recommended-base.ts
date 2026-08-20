import type { Linter } from 'eslint';
import baseTypescript from '../typescript';
import { mergeConfig } from '../utils/index';
import eslintComments from './eslint-comments';

const config: Linter.Config[] = mergeConfig(baseTypescript, eslintComments);

export default config;

// module.exports = config;
