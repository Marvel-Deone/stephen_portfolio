# Stephen Adeloye Portfolio

A responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
pnpm preview
```

The production output is generated in `dist/`. Deploy the contents of that directory to a static host. Configure the host to serve `index.html` for the root route.

Run `pnpm typecheck` to check the TypeScript source without building.

## Content

- The page composition is in `src/App.tsx`.
- Each landing page section and the project cards are separate components in `src/components/`.
- Global typography and Tailwind theme are in `src/index.css`.
- The portrait and favicon are in `public/`.
- Add the two data science and machine learning projects when their details are available.
