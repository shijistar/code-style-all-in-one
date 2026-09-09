# @tiny-codes/code-style-all-in-one

**code-style-all-in-one** 是一个「一站式代码风格解决方案」，为项目提供统一的 `ESLint`、`Prettier`、`Stylelint` 配置，并附上 `Husky`、`Commitlint`、`Lint-staged` 的标准接入方式。推荐所有项目统一使用，以保持一致的代码风格。

## 包含的内容

| 工具            | 提供的预设                                                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ESLint**      | `recommended`、`base`、`typescript`、`prettier`、`react-recommended`、`react-all`、`vue-recommended`、`vue-typescript`、`vue-all`、`next-recommended`、`next-all` |
| **Prettier**    | 共享格式化配置（含 import 排序、JSDoc、package.json 排序等插件）                                                                                                  |
| **Stylelint**   | 基础配置 + `less` / `scss` 变体                                                                                                                                   |
| **Commitlint**  | conventional commits 规范                                                                                                                                         |
| **Lint-staged** | eslint + stylelint + prettier 的组合校验任务                                                                                                                      |
| **Husky**       | 开箱即用的 `pre-commit` 与 `commit-msg` 钩子脚本                                                                                                                  |

## 设计原则

- **TypeScript 优先**：默认假设项目已启用 TypeScript；未使用的项目可通过组合基础预设自行构建配置。
- **可组合**：基础预设（`base` / `recommended` / `typescript` / `prettier`）可以自由组合，`prettier` 必须放在最后。
- **按框架选型**：React / Vue / Next.js 项目直接选用对应的高阶预设即可。

## 快速一览

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

配合 Husky 钩子后，每次提交都会自动完成代码检查与格式化。
