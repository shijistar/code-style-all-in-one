import type { Linter } from 'eslint';

type FlattenableConfig = Linter.Config | Linter.Config[];

/**
 * Flatten multiple ESLint flat configuration parts into a single flat config array.
 *
 * In flat config, later objects override earlier ones for the same scope, so simple array
 * concatenation naturally preserves the "later overrides earlier" rule semantics. Each part may be
 * a single config object or an array of config objects.
 *
 * @param {...FlattenableConfig[]} parts - ESLint flat config parts to concatenate.
 *
 * @returns {Linter.Config[]} - The combined ESLint flat configuration array.
 */
function mergeConfig(...parts: FlattenableConfig[]): Linter.Config[] {
  return parts.flat() as Linter.Config[];
}

export { mergeConfig };
