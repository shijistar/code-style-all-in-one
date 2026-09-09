# @tiny-codes/code-style-all-in-one

**code-style-all-in-one** is an all-in-one code style solution. It provides unified `ESLint`, `Prettier` and `Stylelint` configurations for your project, together with a standard way to wire up `Husky`, `Commitlint` and `Lint-staged`. It is recommended for all projects to keep a consistent code style.

## What's included

| Tool            | Presets                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ESLint**      | `recommended`, `base`, `typescript`, `prettier`, `react-recommended`, `react-all`, `vue-recommended`, `vue-typescript`, `vue-all`, `next-recommended`, `next-all` |
| **Prettier**    | Shared formatting config (with import sorting, JSDoc, package.json sorting plugins)                                                                               |
| **Stylelint**   | Base config + `less` / `scss` variants                                                                                                                            |
| **Commitlint**  | Conventional Commits spec                                                                                                                                         |
| **Lint-staged** | Combined eslint + stylelint + prettier tasks                                                                                                                      |
| **Husky**       | Ready-to-use `pre-commit` and `commit-msg` hook scripts                                                                                                           |

## Design principles

- **TypeScript first**: assumes your project has TypeScript enabled by default; if not, build your own config by combining the basic presets.
- **Composable**: basic presets (`base` / `recommended` / `typescript` / `prettier`) can be combined freely — `prettier` must come last.
- **Framework presets**: React / Vue / Next.js projects can directly use the matching high-level preset.

## Quick look

```bash
npm install -D @tiny-codes/code-style-all-in-one
```

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};
```

```js
// .prettierrc.mjs
export { default } from '@tiny-codes/code-style-all-in-one/prettier';
```

```js
// .stylelintrc.mjs
export { default } from '@tiny-codes/code-style-all-in-one/stylelint';
```

With the Husky hooks wired up, every commit is linted and formatted automatically.
