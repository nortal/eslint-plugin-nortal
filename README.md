# eslint-plugin-tetris

Eslint rules for angular project of TETRIS

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tetris`:

```
$ npm install eslint-plugin-tetris --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-tetris` globally.

## Usage

Add `tetris` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tetris"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tetris/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





