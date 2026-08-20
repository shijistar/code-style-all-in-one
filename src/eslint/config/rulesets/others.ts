import * as unicornNS from 'eslint-plugin-unicorn';
import type { Linter } from 'eslint';
import { unwrap } from '../utils/interop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const unicorn = unwrap(unicornNS as any) as any;

const config: Linter.Config[] = [unicorn.configs['flat/recommended']];

export default config;

// module.exports = config;
