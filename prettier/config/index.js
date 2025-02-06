/** @type {import('prettier').Config} */
const config = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-two-style-order',
    'prettier-plugin-jsdoc',
  ],
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',

  // Same as the default value
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  proseWrap: 'preserve',
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',

  importOrder: [
    '^react$',
    '^react/',
    '^react-dom',
    '^react-router',
    '^react-router-dom',
    '^vue$',
    '^vue/',
    '^next$',
    '^next/',
    '^umi$',
    '^umi/',
    '^@umijs/',
    '<THIRD_PARTY_MODULES>',
    '^@ant-design',
    '^element-plus',
    '^element-ui',
    '^@/',
    '^@@/',
    '^src/',
    '^\\.\\./',
    '^\\./.*(?<!\\.(css|less|scss|styl))$',
    '\\.(less|scss|css|.styl)$',
    '\\.\\w+$',
  ],
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,

  jsdocParser: true,
  jsdocSingleLineComment: false,
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: true,
  jsdocCapitalizeDescription: false,
  jsdocPrintWidth: 100,

  overrides: [
    {
      files: ['.prettierrc', '.eslintrc'],
      options: {
        parser: 'json',
      },
    },
  ],
};

module.exports = config;
