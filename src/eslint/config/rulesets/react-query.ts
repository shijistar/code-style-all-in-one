import * as queryNS from '@tanstack/eslint-plugin-query';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const query = unwrap(queryNS as any) as any;

const config: Linter.Config[] = query.configs['flat/recommended'];

export default config;

module.exports = config;
