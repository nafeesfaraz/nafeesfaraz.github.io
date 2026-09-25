# nafeesfaraz.github.io

Personal website of Nafees Faraz, built with [Astro](https://astro.build) and Claude Code.

## Develop

```sh
npm install
npm run dev
```

The dev server runs at `localhost:4321`. `npm run build` writes the static site to `./dist/`.

## Structure

- `src/pages/`: Home, About, the case study route, `llms.txt` and the 404 page
- `src/content/work/`: case studies in MDX
- `src/components/`: header, footer and the OnboardR flow diagrams
- `src/styles/global.css`: design tokens (light and dark) and shared styles

## Deploy

Pushes to `main` build and deploy to GitHub Pages through `.github/workflows/deploy.yml`. Pull requests run the same build as a check.
