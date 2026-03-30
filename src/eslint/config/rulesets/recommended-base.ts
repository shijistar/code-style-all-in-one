import baseTypescript from '../typescript';
import { mergeConfig } from '../utils';
import eslintComments from './eslint-comments';

const config = mergeConfig(baseTypescript, eslintComments);

export default config;

module.exports = config;
