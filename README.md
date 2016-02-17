# eslint-plugin-nortal

A collection of eslint rules by Nortal

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nortal`:

```
$ npm install eslint-plugin-nortal --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nortal` globally.

## Usage

Add `nortal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nortal"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nortal/rule-name": 2
    }
}
```

## Supported Rules

* on-destroy - Check for `$on('destroy', ...)` misspelling.
