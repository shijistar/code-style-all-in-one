# Stylelint Configuration

Unified style rules for CSS / Less / SCSS, built on `stylelint-config-standard` and `stylelint-config-css-modules`.

## Base config

Create `.stylelintrc.mjs`:

```js
export { default } from '@tiny-codes/code-style-all-in-one/stylelint';
```

## Less projects

```js
// .stylelintrc.mjs
export { default } from '@tiny-codes/code-style-all-in-one/stylelint/less';
```

## SCSS projects

```js
// .stylelintrc.mjs
export { default } from '@tiny-codes/code-style-all-in-one/stylelint/scss';
```

## Ruleset highlights

- **Class naming**: enforces `kebab-case` or `lowerCamelCase` (`selector-class-pattern`)
- **Unit validation**: unknown units are rejected by default, `rpx` is allowed (mini-program scenarios)
- **Ignored properties**: the `stylelint-declaration-block-no-ignored-properties` plugin flags declarations that are overridden by later ones
- **Quotes**: `function-url-quotes` and `selector-attribute-quotes` enforce consistent quoting
- **Web components**: unknown element selectors are allowed (`selector-type-no-unknown: null`)
- **Disallowed font-family**: single `PingFangSC` declarations (often copied from Sketch) are rejected to avoid unexpected font rendering on devices without that font

> The Less / SCSS variants enable syntax-specific rules on top of the base config (e.g. the `stylelint-scss` plugin for SCSS, shipped as an optionalDependency).
