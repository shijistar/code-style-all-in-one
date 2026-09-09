# Prettier 配置

共享的 Prettier 格式化配置，内置多个插件，开箱即用。

## 使用

创建 `.prettierrc.mjs`：

```js
export { default } from '@tiny-codes/code-style-all-in-one/prettier';
```

## 内置插件

| 插件                                    | 作用                       |
| --------------------------------------- | -------------------------- |
| `@trivago/prettier-plugin-sort-imports` | import 语句自动排序分组    |
| `prettier-plugin-jsdoc`                 | JSDoc 注释自动对齐格式化   |
| `prettier-plugin-packagejson`           | `package.json` 字段排序    |
| `prettier-plugin-two-style-order`       | 样式声明排序（按属性分组） |

## 与 ESLint 配合

`prettier` 相关规则已经内置在各 ESLint 预设中（`eslint-config-prettier` 关闭冲突规则 + `eslint-plugin-prettier` 将格式问题作为 lint 错误报告），无需在 ESLint 中重复配置。

> 提示：本仓库自身的 `prettier.config.mjs` 即直接引用了该共享配置：
>
> ```js
> export { default } from './es/prettier/config/index.js';
> ```
