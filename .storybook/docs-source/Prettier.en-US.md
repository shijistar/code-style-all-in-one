# Prettier Configuration

A shared Prettier formatting config with several plugins, ready to use out of the box.

## Usage

Create `.prettierrc.mjs`:

```js
export { default } from '@tiny-codes/code-style-all-in-one/prettier';
```

## Built-in plugins

| Plugin                                  | Purpose                                       |
| --------------------------------------- | --------------------------------------------- |
| `@trivago/prettier-plugin-sort-imports` | Auto sort & group import statements           |
| `prettier-plugin-jsdoc`                 | Format & align JSDoc comments                 |
| `prettier-plugin-packagejson`           | Sort `package.json` fields                    |
| `prettier-plugin-two-style-order`       | Sort style declarations (grouped by property) |

## ESLint integration

Prettier rules are already built into every ESLint preset (`eslint-config-prettier` turns off conflicting rules + `eslint-plugin-prettier` reports formatting issues as lint errors), so no extra ESLint setup is needed.

> Tip: this repo's own `prettier.config.mjs` references the same shared config:
>
> ```js
> export { default } from './es/prettier/config/index.js';
> ```
