module.exports = {
  ignoreFiles: ['node_modules/*', 'public/*'],
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-html',
  ],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      customSyntax: require('postcss-html')({
        css: 'postcss-safe-parser',
        scss: 'postcss-scss',
      }),
    },
  ],
  rules: {
    'media-feature-range-notation': 'prefix',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^foo',
    'scss/selector-no-redundant-nesting-selector': true,
    'color-named': 'never',
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'named-where-possible',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'value-keyword-case': 'lower',
    'unit-disallowed-list': [],
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['/^:global([-a-zA-Z1-9_]*)/', 'global'] }],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^lost-/'],
      },
    ],
  },
};
