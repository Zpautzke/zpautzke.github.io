import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Bootstrap's CSS. React-Bootstrap ships NO CSS of its own, so this import
// is required for any component to look right.
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import './index.css'

// import.meta.env.BASE_URL comes from `base` in vite.config.js
// (e.g. "/react-gh-pages-app/"). React Router wants a basename WITHOUT a
// trailing slash, so we normalize it here. This keeps client-side routing
// working whether the app is served from a subpath (project site) or root.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
