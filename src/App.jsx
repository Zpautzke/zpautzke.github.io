import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Counter from './pages/Counter.jsx'
import NotFound from './pages/NotFound.jsx'

// Declarative routing: routes are described as JSX <Route> elements nested
// inside <Routes>. This is React Router's "declarative mode" (as opposed to
// the data/framework modes that use createBrowserRouter). The parent <Route>
// renders <Layout>, and child routes render into Layout's <Outlet />.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="counter" element={<Counter />} />
        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
