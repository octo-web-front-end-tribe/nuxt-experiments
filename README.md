# nuxt-experiments

This project aims to showcase unit tests on a Nuxt application with Jest and vue-test-utils.

## Project structure

Each element is used to display specific test cases.

### Root page

This page uses Nuxt's `Head` method to customize title.

This page contains an internal component (Logo), a dynamic message from `data`.

### /counter page

This page uses Nuxt's `asyncData` to initialize `data` and a specific `layout`.

It also contains `internal components` (ButtonCounter) and reacts according to `events` (@increment).

### /_name page

This page uses a `computed` property from route params (`name`).

It contains an `external component` (MultiSelect) tested only through its props.

### Logo component

This component is purely static, so a `snapshot` test is enough.

### ButtonCounter component

This component displays counter from its `data`, and `emit` an event on click.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
