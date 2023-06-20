# Astro with a sprinkle of Reason

This is a basic project that shows you how you can mix [Astro](https://docs.astro.build) with [Reason](https://reasonml.github.io/en) and [Reason React](https://reasonml.github.io/reason-react/en). The project uses [Melange](https://melange.re/v1.0.0/) to transform the Reason code to JS.

It is based upon the Astro basic template, and the Tailwind and React integrations have been added. Because the project has come from the JS side via Astro rather than the Reason side, it tries to stick to the JS toolchain and development flow as much as possible.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

A Reason project can be managed using either a Makefile or npm. This project uses [opam](https://opam.ocaml.org/) and npm to install packages and npm to run commands. A Makefile is included here so that you can see what a typical Makefile looks like.

[esy](https://esy.sh/) is a package management system centered around `package.json` and can be used to manage a Reason project with using a Makefile and without executing opam commands. See [this NextJS and esy](https://github.com/psb/nextjs-reason-esy) port of this project as an example.

### Setup

After [getting up and running with OCaml](https://ocaml.org/docs/up-and-running), run:

```sh
npm install                                # install the JS dependancies
opam switch create . 4.14.1 -y --deps-only # create an opam switch
opam update                                # update opam
opam install -y . --deps-only              # install packages from the .opam file
opam pin -y add <project_name>.dev .       # install pinned dependancies
```

**All of the above can done by running the command `make init`.**

### Development

In one terminal run: `npm run dev`
In another terminal run: `npm run dune`

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run dune`            | Runs Dune `build --watch` for the Reason files   |
| `npm run dune:build`      | Compiles the Reason files to JS                  |
| `npm run dune:clean`      | Removes files added by dune, e.g., `_build/`     |

## 👀 Want to learn more?

- [Astro](https://docs.astro.build)
- [Reason](https://reasonml.github.io/en) and [Reason React](https://reasonml.github.io/reason-react/en)
- [Melange](https://melange.re/v1.0.0/)
- [esy](https://esy.sh/)
- [OCaml](https://ocaml.org)
