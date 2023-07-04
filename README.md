# Astro Reason

This is a basic project that shows you how you can mix [Astro](https://docs.astro.build) with [Reason](https://reasonml.github.io/en), [Reason React](https://reasonml.github.io/reason-react/en), and [Netlify](https://www.netlify.com/) serverless functions. The project uses [Melange](https://melange.re/v1.0.0/) to transform the Reason code to JS.

This project is deployed at: https://astro-reason-react.netlify.app/

## Project Structure

```sh
/
├── _build/
├── public/
│   ├── favicon.svg
│   └── ...
├── reason_netlify_functions/
│   ├── dune
│   └── joke.re
├── reason_node_output/
│   ├── node_modules/
│   └── reason_netlify_functions/
│       └── joke.js
├── src/
│   ├── dune
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Dog.re
│   │   ├── Dog.rei
│   │   ├── Joke.re
│   │   ├── Joke.rei
│   │   └── dune
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── dogs.astro
│   │   ├── functions.astro
│   │   └── index.astro
│   └── reason_react_output/
│       ├── node_modules/
│       └── src/
│           └── components/
│               ├── Dog.js
│               └── Joke.js
├── package.json
├── netlify.toml
├── astro-reason.cfg.mjs
├── <project_name>.opam
├── dune
├── dune-project
└── Makefile
```

### Components

> Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
>
> There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
>
> Any static assets, like images, can be placed in the `public/` directory.

Reason React components are also placed in the components folder (along with their interface files).

It is worth noting that the JS is first built into the `_build` directory (specifically the `_build/default/src/reason_react_output` folder) and then "promoted" back out to the `src/reason_react_output` directory. This makes it easier to import components from Astro files and to use the JS build system.

### Serverless Functions

The source code for the Netlify lambda function is in `reason_netlify_functions`, and the output JS is in `reason_node_output/reason_netlify_functions`. `reason_node_output/reason_netlify_functions` is used in `netlify.toml` as the functions directory.

The node modules created by Melange are also added to `netlify.toml` because they are required to successfully build the lambda function.

### Other Files

`dune` files tell Dune how to load BuckleScript libraries installed from npm, where to emit JS code, and to define libraries. View the files for the details.

The `<project_name>.opam` file contains the Reason/OCaml packages required and `package.json` contains the JS packages required.

The `dune-project` file describes the project.

The `Makefile` contains the commands for the project.

## Commands

Commands for developing and building the project are found in the Makefile. The setup is very similar to running commands found in a package.json file.

You can see all available commands by running `make help` or just `make`. Here
are a few of the most useful ones:

- `make init`: set up opam local switch and download OCaml, Melange and
  JavaScript dependencies
- `make install`: install OCaml, Melange and JavaScript dependencies
- `make watch`: watch for Reason/OCaml filesystem changes and have Melange rebuild on every change
- `make dev`: serve the JS application with a local HTTP server
- `make bundle`: bundles the JS into the `dist` folder
- `make netlify`: use the Netlify dev server to serve the app and lambda functions

### Setup

After [getting up and running with OCaml](https://ocaml.org/docs/up-and-running), run:

```sh
make init
```

This will setup the project and install the packages.

### Development

```sh
# in one terminal run:
make watch

# in another terminal run:
make dev
# or
make netlify # requires the Netlify CLI
```

## Dev Issues

See open and closed [issues](https://github.com/psb/astro-reason/issues) for some notes.

Using bs-json in the lambda function worked fine locally but did not work in production. This was fixed by swapping out bs-json for bs-decoders; however, see the issue about bs-decoders shims in order to get them working properly.

## Deployment

The easiest way to deploy an app like this is using the Netlify CLI. I could not get the app to deploy using GitHub actions, and it can't be deployed by linking the repository on Netlify because the output node modules are not checked in to the repo.

```sh
make bundle
# then
netlify deploy #requires linking the local app to Netlify.
```

## Links

- [Astro](https://docs.astro.build)
- [Reason](https://reasonml.github.io/en) and [Reason React](https://reasonml.github.io/reason-react/en)
- [Melange](https://melange.re/v1.0.0/)
- [OCaml](https://ocaml.org)
- [Netlify](https://www.netlify.com/)
