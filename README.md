# Personal Website

React + TypeScript + Vite implementation of the "Maho" design, built as a static site for GitHub Pages.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs to `dist/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` via GitHub Pages.

In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (one-time setup). The site will be served at `https://markdamics.github.io/personal_page/`.

`vite.config.ts` sets `base: '/personal_page/'` to match the repo name — update it if the repo is renamed.
