###
<h2 style="display: flex; align-items: center;">
  Setup husky 
  <span style="font-size: 1em; margin-left: 5px;">🐕</span> 
  with Prettier 
  <img src="https://prettier.io/icon.png" alt="Prettier Logo" style="height: 24px; margin-left: 5px;" />
</h2>

Before installing husky,we have to initiate git in the project by the command
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>git init</span>
  </div>
</div>


Install the pakage husky as dev dependency by the command
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm install -D husky
</span>
  </div>
</div>

After installing the pakage , add script to the ```pakage.json``` file by performing the command 
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm pkg set scripts.prepare="husky install"</span>
  </div>
</div>

Now install the prettier pakage by the command -
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm i -D prettier</span>
  </div>
</div>

After installing prettier ,create a file named ```.prettierrc.json``` in the project folder and added the script for prettier rules

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```
prettier will format the code based on these rules.



Now, to run prettier automatically during commit ,we need ```lint-staged``` npm pakage.To install the pakage run the command
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npm i -D lint-staged</span>
  </div>
</div>


Now added the ```"lint-staged":{}``` with the script ```"*.{js,jsx,ts,tsx,md,html,css}": "prettier --write"``` anywhere in the ```pakage.json``` file

::: details Click me to toggle the code {open}

```json{10-12}
{
  "devDependencies": {
    "husky": "^9.1.7",
    "lint-staged": "^15.2.11",
    "prettier": "^3.4.2"
  },
  "scripts": {
    "prepare": "husky" 
  },
  "lint-staged": { // [!code focus]
    "*.{js,jsx,ts,tsx,md,html,css}": "prettier --write" // [!code focus]
  } // [!code focus]
}

```
:::

Now run the command 
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>npx husky init</span>
    
  </div>
</div>

It will create a file named ```.husky``` .Inside the folder there will be a file named ```pre-commit```.Inside the pre-commit write 
```js
npx lint-staged
```
and saved the file.


Now everything is set up.Execute the commands -
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
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>git add .husky/pre-commit</span>
  </div>
  <div style="padding: 10px; white-space: pre-wrap;">
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>git add .</span>
  </div>
  <div style="padding: 10px; white-space: pre-wrap;">
    <span style="color: #569cd6;">user@machine</span>:<span style="color: #9cdcfe;">~/project</span>$ <span>git commit -m "Your commit"</span>
  </div>
</div>