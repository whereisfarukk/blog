## An introduction to ESLint

`ESLint` is a linter which helps to improve the code quality and fix bugs beforehand itself to avoid it from coming at runtime. It also helps to avoid hard to debug issues in future.

There are also other linters available like `jslint`, `jshint` but `ESLint` is the most widely used and popular.

ESLint displays warning or error message when-

<ol>
        <li>We use a variable without declaring it</li>
        <li>We re-declare the variable</li>
        <li>We try to change a constant value</li>
        <li>We add unnecessary parenthesis</li>
        <li>We use the wrong syntax</li>
</ol>

ESLint also provides suggestions based of preferred code style and wrong syntaxes.

::: tip
Note that, ESLint just displays warning or error so you can fix it but it does not stop program from running. It just makes your coding better.
:::

## Installation

<h2 style="display: flex; align-items: center;">
  Setup ESLint 
  <img src="/resource/ES_lint/ESLint_logo.png" alt="ESLint Logo" style="height: 24px; margin-left: 5px;" />
</h2>

### Installing eslint

Create a new folder with name any and from inside that folder execute following command in terminal

::: code-group

```console [npm]
$ npm init -y

```

```console [yarn]
$ yarn init -y

```

:::

This will create a `package.json` file.

Now, Install the eslint package as dev dependency as it’s only used for development and not in production.

::: code-group

```console [npm]
$ npm install eslint --save-dev

```

```console [yarn]
$ yarn add eslint --dev


```

:::

<br>

Now, install the eslint in project by the command

<div style="background-color: #1e1e1e; color: #d4d4d4; font-family: 'Courier New', Courier, monospace; border: 1px solid #333; border-radius: 4px; padding: 10px; margin: 20px 0; width: 90%; max-width: 800px;">
  <!-- Terminal header -->
  <div style="background-color: #2d2d2d; padding: 5px 10px; border-bottom: 1px solid #333; display: flex; align-items: center;">
    <div style="width: 10px; height: 10px; background-color: #ff5f56; border-radius: 50%; margin-right: 5px;"></div>
    <div style="width: 10px; height: 10px; background-color: #ffbd2e; border-radius: 50%; margin-right: 5px;"></div>
    <div style="width: 10px; height: 10px; background-color: #27c93f; border-radius: 50%;"></div>
    <span style="margin-left: auto; font-size: 0.8em; color: #d4d4d4;">Terminal</span>
  </div>
  <!-- Terminal content -->
  <div style="padding: 10px; white-space: pre-wrap;">
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm init @eslint/config@latest</span>
  </div>
</div>

It will ask some questions and create a file named `eslint.config.mjs`
inside the `eslint.config.mjs` ,we can add our rules for checking code-

::: details Click me to toggle the code {open}

```js
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    // [!code focus]
    rules: {
      // [!code focus]
      "no-unused-vars": "warn", // [!code focus]
      semi: ["warn", "always"], // [!code focus]
    }, // [!code focus]
  }, // [!code focus]
];
```

:::
For adding more rules ,visit the page [Link](https://eslint.org/docs/latest/rules)

To run the eslint via terminal add the scripts in `pakage.json` file

```json
 "scripts": { // [!code focus]
    "prepare": "husky",
    "lint":"eslint .", // [!code focus]
    "lint:fix":"eslint --fix" // [!code focus]
  }, // [!code focus]
```

ESLint setup is now complete.To run the script execute the command npm run lint for showing the errors that was in the rules and npm run lint:fix for fixable errors.

<div style="background-color: #1e1e1e; color: #d4d4d4; font-family: 'Courier New', Courier, monospace; border: 1px solid #333; border-radius: 4px; padding: 10px; margin: 20px 0; width: 90%; max-width: 800px;">
  <!-- Terminal header -->
  <div style="background-color: #2d2d2d; padding: 5px 10px; border-bottom: 1px solid #333; display: flex; align-items: center;">
    <div style="width: 10px; height: 10px; background-color: #ff5f56; border-radius: 50%; margin-right: 5px;"></div>
    <div style="width: 10px; height: 10px; background-color: #ffbd2e; border-radius: 50%; margin-right: 5px;"></div>
    <div style="width: 10px; height: 10px; background-color: #27c93f; border-radius: 50%;"></div>
    <span style="margin-left: auto; font-size: 0.8em; color: #d4d4d4;">Terminal</span>
  </div>
  <!-- Terminal content -->
  <div style="padding: 10px; white-space: pre-wrap;">
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm run lint</span>
  </div>
  <div style="padding: 10px; white-space: pre-wrap;">
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm run lint:fix</span>
  </div>
</div>
