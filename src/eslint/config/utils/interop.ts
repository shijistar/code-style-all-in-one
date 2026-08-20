/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Normalize a module namespace to its actual runtime export.
 *
 * `father` (esbuild) compiles `import * as ns from 'pkg'` into a CJS interop wrapper (`__toESM`).
 * For packages that are authored as ESM (`__esModule: true`) but published without a top-level
 * `default` (e.g. `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`,
 * `@babel/eslint-parser`, ESLint plugins), the wrapper leaves `ns.default === undefined` and
 * exposes the real export as the top-level properties of the namespace.
 *
 * This helper returns the module's concrete export in both the CJS and the ESM build output, so
 * ESLint flat config consumers can reliably use plugin / parser objects regardless of the
 * transpiled module format.
 *
 * @template T - The module's exported type.
 *
 * @param {T} mod - The imported module namespace.
 *
 * @returns {T} - The concrete module export.
 */
function unwrap<T>(mod: T): T {
  if (mod && typeof mod === 'object' && 'default' in mod && (mod as any).default !== undefined) {
    return (mod as any).default as T;
  }
  return mod;
}

export { unwrap };
