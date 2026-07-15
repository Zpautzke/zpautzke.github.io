import { Outlet, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

// Shared chrome (navbar + footer) rendered around every page.
// <Outlet /> is where the matched child route renders.
//
// We use React Router's <NavLink> for navigation so links stay client-side
// (no full page reload) and get an "active" class automatically. We hand
// React-Bootstrap's <Nav.Link> the `as={NavLink}` prop so we get Bootstrap
// styling AND React Router behavior in one element.
export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            React GH Pages
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/counter">
                Counter
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1 py-4">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="bg-dark text-light py-3 mt-auto">
        <Container className="text-center small">
          Built with React + Vite + React-Bootstrap + React Router — hosted on
          GitHub Pages.
        </Container>
      </footer>
    </div>
  )
}
