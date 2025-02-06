<!-- markdownlint-disable MD036 -->

# @tiny-codes/code-style-all-in-one

Provides popular `ESLint`, `Prettier`, `Stylelint` configurations, and a guide to set up `Husky` and `Commitlint` for a project. It is recommended to use this configuration for all projects to maintain a consistent code style.

It's assumed that your project is enabled with typescript by default, if not, you can build your own configuration by combining some presets. For example, `['@tiny-codes/code-style-all-in-one/eslint/config/recommended', '@tiny-codes/code-style-all-in-one/eslint/config/typescript', @tiny-codes/code-style-all-in-one/eslint/config/prettier]`, please node that `@tiny-codes/code-style-all-in-one/eslint/config/prettier` should be the last one.

## Installation

```bash
npm install -D @tiny-codes/code-style-all-in-one
```

## Usage

### Eslint configuration

Create a `.eslintrc.js` file in the project root directory with the following configuration:

_.eslintrc.js_

```js
module.exports = {
  extends: ['@tiny-codes/code-style-all-in-one/eslint/config/recommended'],
};
```

#### Presets

- For `React` projects, it is recommended to use the `@tiny-codes/code-style-all-in-one/eslint/config/react-recommended` or `@tiny-codes/code-style-all-in-one/eslint/config/react-all` preset
- For `Vue` projects, it is recommended to use the `@tiny-codes/code-style-all-in-one/eslint/config/vue-recommended`, `@tiny-codes/code-style-all-in-one/eslint/config/vue-typescript` or `@tiny-codes/code-style-all-in-one/eslint/config/vue-all` preset
- For `Next.js` projects, it is recommended to use the `@tiny-codes/code-style-all-in-one/eslint/config/next-recommended` or `@tiny-codes/code-style-all-in-one/eslint/config/next-all` preset
- Here are some basic presets that you can also combine the presets to create your own configuration, please note again that `@tiny-codes/code-style-all-in-one/eslint/config/prettier` should be the last one
  - `@tiny-codes/code-style-all-in-one/eslint/config/base`: base configuration
  - `@tiny-codes/code-style-all-in-one/eslint/config/recommended`: recommended configuration
  - `@tiny-codes/code-style-all-in-one/eslint/config/typescript`: typescript configuration
  - `@tiny-codes/code-style-all-in-one/eslint/config/prettier`: prettier configuration

### Stylelint configuration

Create a `.stylelintrc.js` file in the project root directory.

_.stylelintrc.js_

```js
module.exports = require('@tiny-codes/code-style-all-in-one/stylelint/config');
```

If you are using `SCSS`, you should use another configuration.

_.stylelintrc.js_

```js
module.exports = require('@tiny-codes/code-style-all-in-one/stylelint/config/scss');
```

Note that `stylelint-scss` is shipped as optionalDependencies, so if you are NOT using `SCSS`, and want to strip it from your node_modules, please go back to [Installation](#installation) and add `--no-optional` to the command.

```bash
npm install -D @tiny-codes/code-style-all-in-one --no-optional
```

### Prettier configuration

Create a `.prettierrc.js` file in the project root directory.

_.prettierrc.js_

```js
module.exports = require('@tiny-codes/code-style-all-in-one/prettier/config');
```

### Husky configuration

Initialize the `husky`:

```bash
npx husky init
```

Add `husky` related configuration in `package.json`:

```json
"scripts": {
  "prepare": "husky"
},
"lint-staged": {
  "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
  "*.{css,less,scss}": "stylelint --fix",
  "*.{js,jsx,ts,tsx,vue,md,json,css,less,scss}": "prettier --write"
},
```

Add the following two files to the `.husky` directory:

_.husky/pre-commit_

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/pre-commit.sh"
```

_.husky/commit-msg_

```bash
#!/usr/bin/env sh
. "node_modules/@tiny-codes/code-style-all-in-one/husky/hooks/commit-msg.sh"
```

### Commitlint configuration

Create a `.commitlintrc.js` file in the project root directory with the following configuration:

_.commitlintrc.js_

```js
const config = require('@tiny-codes/code-style-all-in-one/commitlint/config');
module.exports = config;
```

#### Auto generate changelog

Add the following configuration to the `package.json`:

```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
},
```

You can change the file name and other parameters as you want.

Note that when committing code, you need to follow the `Conventional Commits` [specification](https://www.conventionalcommits.org/en/v1.0.0/) so that your commits can be included in the changelog. Additionally, before executing this command, you need to tag a new version in the git repository to generate the changelog for the new version.

If you want to handle automated version bumping, tagging and CHANGELOG generation, just like `npm version`, you can add the following configuration to the `package.json`:

```json
"scripts": {
  "release": "commit-and-tag-version"
},
```

Now you can run `npm run release` to do them all.

You can also add the following configuration to the `package.json` to generate changelog automatically before each commit:

```json
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && npm run changelog"
  }
},
```
