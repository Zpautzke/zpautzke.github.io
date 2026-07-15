# Copilot / AI Agent Instructions

These instructions describe how this project is built and the rules any AI
assistant (GitHub Copilot, Claude, etc.) MUST follow when working in this repo.

## What this project is

A **100% client-side React single-page application** hosted on **GitHub Pages**.
It compiles to static files (HTML/CSS/JS) that run entirely in the browser.

### Hard constraints (do not violate)

- ❌ **No server-side rendering, no server components, no backend.** The site is
  static files served by GitHub Pages. There is no Node server at runtime.
- ❌ **No Next.js** (or Remix/Gatsby/any meta-framework). This is intentional.
- ✅ **Pure React + JavaScript (JSX).** No TypeScript is required (plain `.jsx`).
- ✅ **UI via React-Bootstrap** (which wraps Bootstrap 5). Prefer its components
  and Bootstrap utility classes over hand-written CSS.
- ✅ **Routing via React Router in _declarative mode_** — i.e. `<BrowserRouter>`
  + `<Routes>` / `<Route>` JSX. Do **not** migrate to data mode
  (`createBrowserRouter`) or framework mode.

## Tech stack

| Concern      | Choice                                          |
| ------------ | ----------------------------------------------- |
| Framework    | React 19 (JSX, no TypeScript)                   |
| Build tool   | Vite                                            |
| UI library   | React-Bootstrap + Bootstrap 5                   |
| Routing      | React Router (`react-router-dom`), declarative  |
| Hosting      | GitHub Pages, served from the `/docs` folder    |

## Project structure

```
├─ index.html              # App shell + SPA redirect-decoder script
├─ vite.config.js          # base path (repo name) + build.outDir = 'docs'
├─ public/
│  ├─ 404.html             # SPA redirect encoder for GitHub Pages deep links
│  └─ .nojekyll            # tells GitHub Pages not to run Jekyll
├─ src/
│  ├─ main.jsx             # entry: Bootstrap CSS import + <BrowserRouter>
│  ├─ App.jsx              # declarative <Routes> / <Route> tree
│  ├─ index.css            # minimal global overrides
│  ├─ components/
│  │  └─ Layout.jsx        # navbar + footer + <Outlet />
│  └─ pages/               # one component per route
│     ├─ Home.jsx
│     ├─ About.jsx
│     ├─ Counter.jsx
│     └─ NotFound.jsx      # catch-all "*" route
└─ docs/                   # BUILD OUTPUT — committed and served by Pages
```

## Commands

```bash
npm install       # install dependencies
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # build static site into ./docs
npm run preview   # locally preview the production build
```

> This machine's default npm registry is the corporate Artifactory
> (`artifactory.epic.com`), which requires VPN. If `npm install` fails with
> `ENOTFOUND`, either connect to VPN or install from the public registry:
> `npm install --registry https://registry.npmjs.org/`.

## How to add a new page (the common task)

1. Create `src/pages/MyPage.jsx` exporting a default React component. Use
   React-Bootstrap components (`Container`, `Row`, `Col`, `Card`, `Button`, …).
2. Register it in `src/App.jsx` as a child `<Route>`:
   ```jsx
   <Route path="my-page" element={<MyPage />} />
   ```
3. Add a nav item in `src/components/Layout.jsx`:
   ```jsx
   <Nav.Link as={NavLink} to="/my-page">My Page</Nav.Link>
   ```

- Use `<Link>` / `<NavLink>` (from `react-router-dom`) for internal navigation —
  never a plain `<a href>` (that triggers a full page reload).
- Give React-Bootstrap components React Router behavior with the `as` prop,
  e.g. `<Button as={Link} to="/x">` or `<Nav.Link as={NavLink} to="/x">`.

## Bootstrap usage rules

- Bootstrap CSS is imported once in `src/main.jsx`
  (`import 'bootstrap/dist/css/bootstrap.min.css'`). Do not import it elsewhere.
- **React-Bootstrap ships no CSS itself** — the import above is mandatory.
- Prefer React-Bootstrap components and Bootstrap utility classes
  (`className="mt-3 text-center"`) over custom CSS. Keep `src/index.css` small.

## Deployment (GitHub Pages from /docs)

This project deploys by **committing the built `docs/` folder** — there is no
CI/CD workflow and no `gh-pages` npm package.

1. `npm run build` → outputs the static site to `./docs`.
2. Commit `docs/` and push to GitHub (the `main` branch).
3. One-time setup in the repo: **Settings → Pages → Build and deployment →
   Source: "Deploy from a branch" → Branch: `main` / folder: `/docs`**.
4. GitHub serves the site at `https://<user>.github.io/<repo>/`.

### The `base` path MUST match the repo (critical)

`vite.config.js` sets `base: '/<REPO_NAME>/'`. This must equal your GitHub
repository name, or assets 404 in production.

- **Project site** `https://<user>.github.io/<repo>/` → `base: '/<repo>/'`
- **User/org site** `https://<user>.github.io/` or a **custom domain** →
  `base: '/'` **and** set `pathSegmentsToKeep = 0` in `public/404.html`.

### Why 404.html + the index.html script exist

GitHub Pages has no server-side routing. A hard refresh or deep link to a
client route (e.g. `/repo/about`) would otherwise 404. The
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick fixes it:
`public/404.html` encodes the requested path and redirects to `index.html`,
whose inline script decodes it back before React Router mounts. Keep both in
sync; if you change `base`, update `pathSegmentsToKeep` in `404.html`.

## Do / Don't quick reference

- ✅ Add features as client-side React components.
- ✅ Fetch data at runtime from public APIs / static JSON if needed.
- ✅ Keep everything buildable to static files.
- ❌ Don't add a server, API routes, SSR, or Next.js.
- ❌ Don't switch React Router out of declarative mode.
- ❌ Don't hand-roll CSS frameworks — use Bootstrap.
- ❌ Don't change `build.outDir` away from `docs` without updating the Pages
  source setting and this document.
