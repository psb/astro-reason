# Astro with a sprinkle of Reason

This is a basic project that shows you how you can mix [Astro](https://docs.astro.build) with [Reason](https://reasonml.github.io/en) and [Reason React](https://reasonml.github.io/reason-react/en). The project uses [Melange](https://melange.re/v1.0.0/) to transform the Reason code to JS.

This project is deployed at: **TODO**

## 🚀 Project Structure

```
/
├── _build/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── dune
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Dog.re
│   │   ├── Dog.rei
│   │   └── dune
│   ├── layouts/
│   │   └── Layout.astro
│   ├── output/
│   │   └── src/
│   │       └── components/
│   │           └── Dog.js
│   └── pages/
│       ├── dogs.astro
│       └── index.astro
├── package.json
├── <project_name>.opam
├── dune
├── dune-project
└── Makefile
```

> Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
>
> There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
>
> Any static assets, like images, can be placed in the `public/` directory.

Reason React components are also placed in the components folder (along with their interface files). The `dune` file in the components folder tells Dune how to process the components to JS.

The `dune` file at the root of the project is used to tell Dune how to use any Reason/OCaml packages installed from npm. The `src/dune` file is used to tell Dune how and where to emit JS. It is worth noting that the JS is first built into the `_build` directory (specifically the `_build/default/src/output` folder) and then "promoted" back out to the `src/output` directory. This makes it easier to import components from astro files and to use the JS build system (although copying the Reason lambda function output to the Netlify functions folder seems like a bit of a hack).

**TODO**: functions

The `<project_name>.opam` file contains the Reason/OCaml packages required and `package.json` contains the JS packages required.

The `dune-project` file describes the project.

The `Makefile` contains the commands for the project.

## 🧞 Commands

Commands for developing and building the project are found in the Makefile. The setup is very similar to running commands found in a package.json file.

You can see all available commands by running `make help` or just `make`. Here
are a few of the most useful ones:

- `make init`: set up opam local switch and download OCaml, Melange and
  JavaScript dependencies
- `make install`: install OCaml, Melange and JavaScript dependencies
- `make watch`: watch for the filesystem and have Melange rebuild on every
  change
- `make dev`: serve the JS application with a local HTTP server
- `make bundle`: bundles the JS into the `dist` folder
- `make preview`: serve the bundled JS application with a local HTTP server

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
```

## Dev Issues

**TODO**

## 👀 Want to learn more?

- [Astro](https://docs.astro.build)
- [Reason](https://reasonml.github.io/en) and [Reason React](https://reasonml.github.io/reason-react/en)
- [Melange](https://melange.re/v1.0.0/)
- [OCaml](https://ocaml.org)
