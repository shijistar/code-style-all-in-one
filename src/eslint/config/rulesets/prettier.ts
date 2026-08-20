import * as prettierRecNS from 'eslint-plugin-prettier/recommended';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const prettierRecommended = unwrap(prettierRecNS as any) as any;

const config: Linter.Config[] = [prettierRecommended];

export default config;

// module.exports = config;
