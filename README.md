# zpautzke.github.io

A pure client-side React app (React + Vite + React-Bootstrap + React Router in
declarative mode) built to deploy on **GitHub Pages** from the `/docs` folder.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & deploy

```bash
npm run build      # outputs static site to ./docs
```

Then commit `docs/` and push. In the GitHub repo, set **Settings → Pages →
Source: Deploy from a branch → `main` / `/docs`**.

> Before your first deploy, set `REPO_NAME` in `vite.config.js` to your actual
> GitHub repository name so the `base` path is correct.

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for the
full architecture, constraints, and conventions.
