# 常见问题

## 1. 项目没有启用 TypeScript，还能用吗？

可以。默认推荐配置面向启用了 TypeScript 的项目，但你可以组合基础预设自行构建：

```js
// .eslintrc.cjs
module.exports = {
  extends: [
    '@tiny-codes/code-style-all-in-one/eslint/config/base',
    '@tiny-codes/code-style-all-in-one/eslint/config/prettier',
  ],
};
```

## 2. 为什么 prettier 预设必须放在最后？

因为它的职责是「关闭所有与 Prettier 冲突的 ESLint 规则」。只有放在最后，才能覆盖前面预设开启的冲突规则。如果顺序反了，格式化结果可能与 lint 规则不一致。

## 3. 安装失败或提示 stylelint-scss 找不到？

`stylelint-scss` 等以 optionalDependencies 形式分发。如果安装环境禁用了 optional 依赖（如 `--no-optional`），使用 SCSS 配置时需要手动补装：

```bash
npm install -D stylelint-scss
```

## 4. 提交时 pre-commit 校验很慢？

lint-staged 只对**暂存文件**做增量校验，提交的文件越多越慢属正常现象。如项目较大，可以按文件类型拆分提交，或考虑在 CI 中并行执行全量校验。

## 5. 如何禁用某条规则？

项目内可按需覆盖。例如在 `.eslintrc.cjs` 中：

```js
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
  rules: {
    'no-console': 'off',
  },
};
```

Stylelint 同理，在 `.stylelintrc.mjs` 的 `rules` 中覆盖即可。

## 6. commitlint 报错，提示信息不符合规范？

请确保提交信息遵循 Conventional Commits：

```
<type>(<scope>): <subject>
```

例如 `feat(eslint): add typescript preset`。`type` 支持 `feat` / `fix` / `docs` / `chore` / `refactor` / `style` / `test` / `build` / `ci` / `perf` / `revert` 等。
