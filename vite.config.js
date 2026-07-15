import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//
// GitHub Pages notes:
// - `base` MUST match how the site is served.
//   * Project site (https://<user>.github.io/<repo>/)  -> base: '/<repo>/'
//   * User/org site (https://<user>.github.io/)         -> base: '/'
//   * Custom domain (CNAME)                             -> base: '/'
//   Change REPO_NAME below to your GitHub repository name.
// - `build.outDir` is set to 'docs' because GitHub Pages is configured to
//   serve the site from the `/docs` folder on the main branch.
const REPO_NAME = 'p0'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
