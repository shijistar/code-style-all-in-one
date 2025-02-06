/* ----------------------------------------------------------
 * Rules that are significantly affected by @umijs/lint
 * ---------------------------------------------------------*/

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-prettier'],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null,
    // iconfont
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // webcomponent
    'selector-type-no-unknown': null,
    'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-zA-Z0-9]+)$',
      {
        message: 'Expected class selector to be kebab-case or lowerCamelCase',
      },
    ],
    // disallowed set single font-family as PingFangSC
    // in most cases, this font-family rule is copied unconsciously from Sketch
    // and it will cause an unexpected font rendering on the devices that have no PingFangSC font
    'declaration-property-value-disallowed-list': [
      {
        'font-family': `/^('|")?PingFangSC(-(Regular|Medium|Semibold|Bold))?\\1$/`,
      },
      {
        message:
          'Unexpected value for property "font-family", which will cause some devices to render the wrong font, please delete this "font-family" css rule, see also: https://github.com/umijs/umi/pull/11001',
      },
    ],
    'selector-disallowed-list': [/^#/], // id selector is not allowed
    'declaration-no-important': true, // disallow !important within declarations
    'keyframe-declaration-no-important': true, // disallow !important within keyframe declarations
    'no-irregular-whitespace': true, // disallow irregular whitespace
    'color-function-notation': 'modern', // prefer modern color function notation
    'function-no-unknown': null, // disallow unknown functions
  },
  ignoreFiles: ['node_modules'],
};
