# ESLint Configuration

code-style-all-in-one provides 12 ESLint presets. Every preset already includes the `prettier` ruleset (which turns off rules that conflict with Prettier), so no extra `eslint-config-prettier` setup is needed.

## Pick by project type

### Recommended (default)

For plain TypeScript / JavaScript projects:

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};
```

### React projects

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/react-recommended'],
  // or the stricter react-all
};
```

### Vue projects

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/vue-recommended'],
  // or vue-typescript / vue-all
};
```

### Next.js projects

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/next-recommended'],
  // or the stricter next-all
};
```

## Basic presets & composition

The basic presets below can be combined freely — **note that `prettier` must come last**:

| Preset                          | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `.../eslint/config/base`        | Base config (ESLint core rules only)               |
| `.../eslint/config/recommended` | recommended = base + typescript + prettier         |
| `.../eslint/config/typescript`  | TypeScript ruleset                                 |
| `.../eslint/config/prettier`    | Turns off Prettier-conflicting rules (put it last) |

```js
// .eslintrc.cjs
module.exports = {
  extends: [
    '@tiny-codes/code-style-all-in-one/eslint/config/recommended',
    '@tiny-codes/code-style-all-in-one/eslint/config/typescript',
    '@tiny-codes/code-style-all-in-one/eslint/config/prettier',
  ],
};
```

## Ruleset highlights

- **TypeScript**: `@typescript-eslint` recommended rules plus some advanced rules (e.g. `explicit-function-return-type`, enabled on demand)
- **React**: react-hooks rules + `@tanstack/eslint-plugin-query` (React Query best practices)
- **Vue**: all `eslint-plugin-vue` recommended rules (tighter from vue-recommended to vue-all)
- **Next.js**: eslint-config-next core rules + React Query rules
- **ESLint comments**: `@eslint-community/eslint-plugin-eslint-comments` (no invalid disable directives)
