# eslint-config-utility

This is a utility config that provides a custom .eslintrc and .prettierrc config.

## Getting started

Installation:

```sh
npm i -D eslint-config-utility@latest
```

Run the following command and install packages provided as dev dependencies:

```sh
npm info "eslint-config-utility@latest" peerDependencies
```

## Usage

This package exports three utility tools for use.

### eslint-config-utility

The default export contains basic ESLint rules, which can be extended by adding additional rules.

Add `"extends": "utility"` to your `.eslintrc`.

```js
module.exports = {
  extends: ['utility'],
};
```

Then create a `.eslintignore` file and add the following files to ignore that applies to your project: `node_modules`, `.eslintrc.json` or `.eslintrc.js`, `build/`, `coverage/`, `dist/`, `.env` etc.

```js
.eslintrc.json
.eslintrc.js
.env
node_modules/
build/
coverage/
dist/
```

If you want, you can extend the rules, by adding additional rules, for example:

```js
module.exports = {
  extends: ['utility'],
  rules: {
    'no-console': 2,
  },
};
```

You can check that the package lints using:

```sh
npx eslint .
```

or with the fix flag:

```sh
npx eslint . --fix
```

### eslint-config-utility/import

The import, helps sort and order imports, into files.
To use the import sort order, add `"extends": ["utility", "utility/import"]` to your `.eslintrc`.

```js
module.exports = {
  extends: ['utility', 'utility/import'],
};
```

You can check that the imports are sorted and ordered using `npx eslint . --fix`.

```sh
npx eslint . --fix
```

### eslint-config-utility/prettier

The prettier helps with code formatting.
To use the prettier functionality, create a `.prettierrc.js` and import the prettier file. Add `module.exports = require('eslint-config-utility/prettier.config');` to your `.prettierrc`.

```js
module.exports = require('eslint-config-utility/prettier.config');
```

Check that prettier formats the code using `npx prettier . --write`.

```sh
npx prettier . --write
```

## More information

See [eslint-config-utility](https://www.npmjs.com/package/eslint-config-utility).

See [Github](https://github.com/stanley-agwu/utility-config).
