# ESLint 配置

code-style-all-in-one 为 ESLint 提供了 12 个预设。所有预设都内置了 `prettier` 规则集（关闭与 Prettier 冲突的规则），因此**无需再额外配置** eslint-config-prettier。

## 按项目类型选择

### 推荐配置（默认）

适用于普通 TypeScript / JavaScript 项目：

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};
```

### React 项目

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/react-recommended'],
  // 或使用更严格的 react-all
};
```

### Vue 项目

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/vue-recommended'],
  // 或 vue-typescript / vue-all
};
```

### Next.js 项目

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/next-recommended'],
  // 或使用更严格的 next-all
};
```

## 基础预设与组合

以下基础预设可自由组合成自定义配置，**注意 `prettier` 必须放在最后**：

| 预设                            | 说明                                    |
| ------------------------------- | --------------------------------------- |
| `.../eslint/config/base`        | 基础配置（仅 ESLint 核心规则）          |
| `.../eslint/config/recommended` | 推荐配置 = base + typescript + prettier |
| `.../eslint/config/typescript`  | TypeScript 规则集                       |
| `.../eslint/config/prettier`    | 关闭与 Prettier 冲突的规则（放最后）    |

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

## 内置规则集亮点

- **TypeScript**：基于 `@typescript-eslint` 推荐规则 + 部分进阶规则（`explicit-function-return-type` 等按需开启）
- **React**：react-hooks 规则 + `@tanstack/eslint-plugin-query`（React Query 最佳实践）
- **Vue**：`eslint-plugin-vue` 全部推荐规则（vue-recommended 到 vue-all 逐步收紧）
- **Next.js**：eslint-config-next 核心规则 + React Query 规则
- **ESLint 注释规范**：`@eslint-community/eslint-plugin-eslint-comments`（禁止无效的 disable 指令）
