import { Alert, ListGroup } from 'react-bootstrap'

export default function About() {
  return (
    <>
      <h1 className="mb-3">About this project</h1>
      <p>
        This is a dummy project demonstrating a 100% client-side React app that
        deploys to GitHub Pages as static files.
      </p>

      <Alert variant="info">
        There is no backend. Anything dynamic happens in the browser at runtime.
      </Alert>

      <h2 className="h5 mt-4">Stack</h2>
      <ListGroup>
        <ListGroup.Item>React 19 + JavaScript (JSX)</ListGroup.Item>
        <ListGroup.Item>Vite (build tool + dev server)</ListGroup.Item>
        <ListGroup.Item>React Router (declarative mode)</ListGroup.Item>
        <ListGroup.Item>React-Bootstrap + Bootstrap 5</ListGroup.Item>
      </ListGroup>
    </>
  )
}
