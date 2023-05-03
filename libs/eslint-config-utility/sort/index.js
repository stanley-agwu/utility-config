module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
    },
  },
  plugins: [
    'simple-import-sort',
    'import',
  ],
  rules: {
    'prettier/prettier': ['error', {
      'endOfLine': 'auto'
    }],
    'simple-import-sort': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/import': [
          'error',
          {
            groups: [
              // react and react scoped imports first, then next, and other packages
              ['^react', '^next', '^[a-zA-Z]'],
              // Packages starting with '@'
              ['^@'],
              // Packages starting with '~'
              ['^~'],
              // Side effects imports
              ['^\\u0000'],
              // Other local absolute imports
              [
                '^components',
                '^features',
                '^constants',
                '^types',
                '^hooks',
                '^pages',
                '^mocks',
                '^tests',
                '^services',
                '^store',
                '^assets',
                '^utils',
                '^app',
              ],
              // Relative imports
              ['^\\.'],
              // Parent relative imports '../'
              ['^\\.{2}/(?!.*\\.(css|s[ac]ss)$).+$'],
              // Siblings relative imports './'
              ['^\\./(?!.*\\.(css|s[ac]ss)$).+$'],
              // Styles imports
              ['\\.(css|s[ac]ss)$'],
            ]
          }
        ]
      }
    }
  ],
  ignorepatterns: ['build/*', 'coverage/*', 'public/*'],
}
