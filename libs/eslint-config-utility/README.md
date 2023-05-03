# eslint-config-utility

This is a custom package that provides a .eslintrc as an extensible shared config.

## Usage

This package exports three utility tools for your usage.

### eslint-config-utility

The default export contains basic ESLint rules, which you can extend by adding additional rules.

1. Installation:

```sh
npm i -D eslint-config-utility@latest
```

2. Add `"extends": "utility"` to your `.eslintrc` and you are good to go.

If you want, you can extend the rules, by adding additional rules to the rules object:
Add `"rules": {}` to your `.

You can check that the package lints using `npx eslint .` or with the fix flag `npx eslint . --fix`.

### eslint-config-utility/import

The import helps sort and order imports to files.
To use the import sort order, add `"extends": ["utility", "utility/import"]` to your `.eslintrc`.

You can check that the imports sort and order using `npx eslint . --fix`.

### eslint-config-utility/prettier

The prettier helps with code formatting.
To use the prettier functionality, create a `.prettierrc.js` and import the prettier file. Add `module.exports = require('eslint-config-utility/prettier.config');` to your `.prettierrc`.

You can check that prettier formats your code using `npx prettier . --write`.

## More information

See [eslint-config-utility](https://www.npmjs.com/package/eslint-config-utility).
See [Github](https://github.com/stanley-agwu/utility-config).
