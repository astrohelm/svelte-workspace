<h1 align="center">Astrohelm sveltekit workspace</h1>

<h2 align="center">Installation guide 🚀</h2>

### First step: workspace installation

Use next commands to install and update your workspace Or use this repository as a template repository, if so - you can
skip this step.

```bash
  # Download repository
  git clone https://github.com/astrohelm/node-workspace
  rm -rf ./path/to/workspace/.git ./path/to/workspace/package-lock.json
  cd ./path/to/workspace/
  # Update and install dependencies
  ncu -u
  npm i
  # Update node.js (optional()
  nvm install latest
  nvm use latest
```

### Second step: Package personalization

Update package json, all with prefix <code>your-</code><br/> If your nodejs version newer than package.json current add
<code>|| your-node-version</code>.

```js
// package.json
{
  "license": "MIT",
  "version": "0.0.1",
  "type": "module",
  "name": "your-package-name",
  "homepage": "https://astrohelm.ru",
  "description": "your-package-description",
  "author": "your-name <your-mail>",
  "keywords": ["your-keyword #1", "your-keyword #n"],
  "readmeFilename": "README.md",
  "repository": { "type": "git", "url": "git+https://github.com/astrohelm/your-package-name.git" },
  "bugs": { "url": "https://github.com/astrohelm/your-package-name/issues", "email": "your-mail" },

  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "start": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
    "test": "vitest",
    "lint": "prettier --plugin-search-dir . --check . && eslint .",
    "format": "prettier --plugin-search-dir . --write ."
  },

  "devDependencies": {
    "@sveltejs/kit": "^1.20.4",
    "@types/cookie": "^0.5.1",
    "@typescript-eslint/eslint-plugin": "^5.45.0",
    "@typescript-eslint/parser": "^5.45.0",
    "eslint": "^8.28.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-svelte": "^2.30.0",
    "postcss": "^8.4.29",
    "postcss-html": "^1.5.0",
    "postcss-safe-parser": "^6.0.0",
    "postcss-scss": "^4.0.8",
    "prettier": "^2.8.0",
    "prettier-plugin-svelte": "^2.10.1",
    "sass": "^1.66.1",
    "stylelint": "^15.10.3",
    "stylelint-config-html": "^1.1.0",
    "stylelint-config-rational-order": "^0.1.2",
    "stylelint-config-recommended-scss": "^13.0.0",
    "stylelint-config-standard": "^34.0.0",
    "stylelint-order": "^6.0.3",
    "stylelint-prettier": "^4.0.2",
    "stylelint-scss": "^5.1.0",
    "svelte": "^4.0.5",
    "svelte-adapter-bun": "^0.5.0",
    "svelte-check": "^3.4.3",
    "tslib": "^2.4.1",
    "typescript": "^5.0.0",
    "vite": "^4.4.2",
    "vitest": "^0.34.0"
  }
}
```

### Third step: About files

Go to CHANGELOG.md and update it for your package. _WARNING !_ Don't fotget about date (xxxx-xx-xx).

```md
<!-- CHANGELOG.md -->

# Changelog

## [Unreleased][unreleased]

## [0.0.1][] - xxxx-xx-xx

- Stable release version
- Repository created

[unreleased]: https://github.com/astrohelm/your-package-name/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/astrohelm/your-package-name/releases/tag/v0.0.1
```

Update AUTHORS

```md
 <!-- AUTHORS -->

your-name <your-mail>
```

### Almost last step: Update README.md

Replace your README.md with next information and change Your-package-name to actual.

```md
<!-- README.md -->
<h1 align="center">Your-package-name v0.0.1</h1>

<h2 align="center">Initial release 🚀</h2>

<h2 align="center">Copyright & contributors</h2>

<p align="center">
Copyright © 2023 <a href="https://github.com/astrohelm/Your-package-name/graphs/contributors">Astrohelm contributors</a>.
Your-package-name is <a href="./LICENSE">MIT licensed</a>.<br/>
Your-package-name is part of <a href="https://github.com/astrohelm">Astrohelm ecosystem</a>.
</p>
```

### Last step: Save results

_WARNING !_ Update this file before moving throw this step.

Create a new package in [organization][https://github.com/astrohelm/] repository. Use next commands to save you package.

```bash
git init
git remote add origin your-package-location
# Start from here, if you used template
git branch -M main # if your default branch is not main
git commit -am "Repository init"
git tag v0.0.1
git push origin main
git push origin v0.0.1
git checkout -b dev
git push origin dev
```

Return to your organization repository and do:

- Add keywords
- Update description
- Draft release with `v0.0.1` tag and `v0.0.1` as a title and updated README file as description.

> If you creating library you may publish it now to npm with `npm publish` command.

Congratulations, package initialized 🚀

<h2 align="center">Usage guide</h2>

## Preparing `yarn install && yarn build`

Make sure that you haven't `node_modules` folder, it can make conflicts with docker volume, else then remove it.

1. Go to `config/env` folder and create env files.

- Create `.env` file if you would use one file for production and development environments.

- Create `.env.[mode]` where mode is production or development, to use this file only for specific environment.

2. Install dependencies with `yarn install`
3. Run `yarn build` to compile svelte

Now you prepared to lunch your strapi instance 🚀

## Development mode `yarn dev`

To run development with docker & makefile run:

```bash
  make docker-build mode=dev container=website-dev
  make docker-up mode=dev container=website-dev
  make docker-stop container=website-dev
```

or Docker only variant:

```bash
  docker build . -f ./Dockerfile.dev -t website-dev
  docker run -d \
    -p 3000:3000 \
    -v `pwd`:/opt/app \
    --name website-dev \
    website-dev
  # docker stop website-dev
```

## Production mode `bun start`

To run production with docker & makefile run:

```bash
  make docker-build mode=prod container=website-prod
  make docker-up mode=prod container=website-prod
  make docker-stop container=website-prod
```

or Docker only variant:

```bash
  docker build . -f ./Dockerfile.prod -t website-prod
  docker run -d \
    -p 3000:3000 \
    -v `pwd`:/opt/app \
    --env-file=./config/env/.env.production
    --name website-prod \
    website-prod
  # docker stop website-prod
```

## Deployment

To deploy website, use next compose command:

```bash
make compose-up mode=deploy
# or
docker compose -f docker-compose.deploy.yml up --build --force-recreate
```

## Project structure

### About exports / imports / re-exports

In `tsconfig.json` you can find folder shortcuts. All folders created with pattern Information expert so no need to
write long imports, just import all you need with one row, for example:

All what you need should be imported like example below:

```js
import { Slider, createFetcher, Pagination, store } from '$client';
/*
  As you can see it exports:
    Slider form interface folder;
    createFetcher from $shared folder;
    Pagination from widgets folder;
    Store from client folder;
*/
```

Beside the fact that it exports all of that, it also exports types from `.d.ts` files around index.js, so you will have
types too without any need to create `.ts` files;

```js
import { cms, createFetcher, crm } from '$server';
/*
  As you can see it exports:
    cms from $server/cms;
    crm from $server/crm.js;
    createFetcher from $shared;
*/
```

Other shortcuts

```js
import { TEntity, TComponent, TSeo } from '$types';
import { createFetcher, netPath } from '$shared';
import '$styles';
```

### More about folders

- `config` - contains all configuration: csp, environment files, certificates
- `tests`
  - `integration` - integration tests
  - `unity` - unit tests
- `static` - static files, do not store them here, only for favicon
- `src`
  - `routes` - stands for routing, here you can find all project pages;
  - `server` - server side library
  - `client` - client side library
    - `widgets` - components with business logic, for example children elements of slider or form, pagination or seo
    - `interface` - no business logic components, for example links, buttons or parents of other components;
    - `store` - client side state storage, here we store shared between pages data;
  - `shared` - shared library between client and server sides.
  - `styles` - global styles
  - `types` - all types.
  - `params` - this folder is `routes` folder dependency.
