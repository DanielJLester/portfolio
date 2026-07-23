# Portfolio

Daniel J Lester's portfolio site — product management, R&D platform engineering,
independent apps, and construction engineering projects.

Built with React, TypeScript, Vite, and Tailwind CSS. Deployed to GitHub Pages
via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/` (includes a `404.html` copy of `index.html` so client-side
routing works on GitHub Pages).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. To enable Pages for this repo (one-time
setup): **Settings → Pages → Source → GitHub Actions**.

The site is served at `/portfolio/`, matching the `base` in `vite.config.ts`
and the router `basename` in `src/App.tsx`. If you rename the repo or move to
a custom domain, update both.

## Content

Site copy and project data live in `src/data/`:

- `site.ts` — name, headline, bio, contact links
- `categories.ts` — the four project categories
- `projects.ts` — individual projects
- `roles.ts` — career timeline

## Images

Project images aren't included yet. Drop files into
`public/images/projects/` and set the matching project's `image` field in
`src/data/projects.ts` to `/images/projects/<filename>`. See
`public/images/projects/README.md` for the intended filenames.
