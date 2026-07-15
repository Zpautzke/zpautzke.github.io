import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="lead">This page took a wrong turn.</p>
      <Button as={Link} to="/" variant="primary">
        Back home
      </Button>
    </div>
  )
}
