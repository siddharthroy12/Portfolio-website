---
title: How to build a Express and Node.js app with Typescript
description: In this tutorial you will learn how to setup a Node.js and Express
  project with Typescript and live auto reloading. This method also works for
  any Node.js app.
date: September 19, 2021
featured: true
---
In this tutorial, you will learn how to set up a Node.js and Express project with Typescript and live auto-reloading. Note that this method also works for any kind of Node.js apps not just Node.js with Express.

Before getting started, note that this article assumes that you have basic knowledge of Javascript, Node.js, Typescript, Express.js

## Setting Up

Create a new directory for our project and name is `typescript-express` and `cd` into the folder.

```shell
mkdir typescript-express
cd typescript-express
```

Now initialize our Node project using this command

```shell
npm init -y
```

The `-y` flag generates `package.json` with default values. Instead of asking for information for every field for `package.json`

Now we can add the dependencies.

## Adding Dependencies

We need to add two frameworks Express and Typescript to our project. To do so run the following command.

```bash
npm install express
npm install typescript --save-dev
```

Because we are using Typescript we also need to install the types provided by Express.

```bash
npm install @types/express --save-dev
```

The Typescript-related dependencies are installed as `devDependencies` because we only need them when we build our app not when we run the app.

## Configuring Typescript

Before we use Typescript we need to configure it. You will need to create a `tsconfig.json` file at the root directory to indicate that the directory is a Typescript project.

To create a `tsconfig.json` file simply run this command:

```bash
tsc --init
```

This command will create the `tsconfig.json` file with the default configuration. This file will contain a lot of settings, most of which is commented out. However, there are some settings that are important to know:

* `target` This specifies which ECMAScript version your code will compile to. By default, this is set to `ES5` which is supported by most browsers. This allows you to use modern Javascript features without compromising browser support.
* `module` This specifies what module code generator to use. By default it uses `common.js`.
* `outDir` This specifies where the compiled js files should be.
* `rootDir` This specifies where your ts files are stored.

Now create a new folder `src` and create a file `server.ts` with this content:

```javascript
import Express from 'express'

const app = Express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello From Express and Typescirpt")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

And change the values of these two fields in `tsconfig.json` to the ones below:

```json
...
"outDir": "./build", /* Redirect output structure to the directory. */
"rootDir": "./src",  /* Specify the root directory of input files. Use tocontrol the output directory structure with--outDir. */
...
```

Now if you run `tsc` command in the root directory a new directory `build` will popup containing the compiled js files.

Run `node build/server.js` to run your app.

If you run `tsc --watch` it will automatically compile your ts files to js whenever you make changes to your ts files.

## Setting up auto-reload

Add two new dependency `nodemon` and `concurrently` to your project.

```bash
npm install nodemon concurrently --save-dev
```

`nodemon` will re-run your node app whenever the source files change.
`concurrently` will run both `nodemon` and `tsc --watch` at the same time.

Change the `ourDir` in your `tsconfig.json` to `./tmp`.

```json
...
"outDir": "./tmp",
...
```

Add these scripts in your `package.json` file.

```json
...
"scripts": {
  "build": "tsc --outDir build",
  "serve": "concurrently --kill-others \"tsc --watch\" \"nodemon ./tmp/server.js \"",
  "start": "node build/server.js"
},
...
```

And remove the `"main": "index.js"` line from `package.json`.

Your `package.json` now should look like this:

```json
{
  "name": "typescript-express",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "tsc --outDir build",
    "dev": "concurrently --kill-others \"tsc --watch\" \"nodemon ./tmp/server.js \"",
    "start": "node build/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "concurrently": "^6.2.1",
    "nodemon": "^2.0.12",
    "typescript": "^4.4.3"
  }
}
```

`npm run build` will build your app for production use.

`npm run start` will run your app for production use.

`npm run dev` will run your app for development with auto-reloading enabled.