module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
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
      },
    },
  },
  plugins: ['import', 'simple-import-sort'],
  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'sort-imports': 0,
    'import/order': 0,
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          2,
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
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: ['build/*', 'coverage/*', 'public/*'],
};
