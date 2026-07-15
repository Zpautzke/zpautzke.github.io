import { Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Row className="mb-4">
        <Col>
          <h1 className="display-5">Client-side React on GitHub Pages</h1>
          <p className="lead text-muted">
            A pure React + JavaScript single-page app. No server, no Next.js —
            everything runs in the browser and ships as static files.
          </p>
          <Button as={Link} to="/counter" variant="primary">
            Try the counter demo
          </Button>
        </Col>
      </Row>

      <Row className="g-3">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Vite</Card.Title>
              <Card.Text>
                Fast dev server and an optimized static build written to{' '}
                <code>docs/</code>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>React Router</Card.Title>
              <Card.Text>
                Declarative <code>&lt;Routes&gt;</code> /{' '}
                <code>&lt;Route&gt;</code> client-side navigation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>React-Bootstrap</Card.Title>
              <Card.Text>
                Prebuilt, accessible components styled with Bootstrap 5.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
