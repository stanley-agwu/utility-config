# stylelint-config-utility

This is a utility config that provides a custom .stylelintrc config.

## Getting started

Installation:

```sh
npm i -D stylelint-config-utility@latest
```

Run the following command and install packages provided as dev dependencies:

```sh
npm info "stylelint-config-utility@latest" peerDependencies
```

## Usage

### stylelint-config-utility

The exported config contains stylelint rules, which can be extended by adding additional rules.

Add `"extends": "stylelint-config-utility"` to your `.stylelintrc.json`.

```js
{
  "extends": ["stylelint-config-utility"],
};
```

If you want, you can extend the rules, by adding additional rules, for example:

```js
{
  "extends": ["stylelint-config-utility"],
  "rules": {
    "selector-no-vendor-prefix": true,
  },
};
```

You can check that the package lints using:

```sh
npx stylelint **/*.scss
```

or with the fix flag:

```sh
npx stylelint **/*.scss --fix
```

## More information

See [stylelint-config-utility](https://www.npmjs.com/package/stylelint-config-utility).

See [Github](https://github.com/stanley-agwu/utility-config).
