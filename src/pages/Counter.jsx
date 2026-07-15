import { useState } from 'react'
import { Badge, Button, ButtonGroup, Card } from 'react-bootstrap'

// A tiny stateful demo proving the app is interactive purely on the client.
export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Card className="mx-auto" style={{ maxWidth: '24rem' }}>
      <Card.Body className="text-center">
        <Card.Title>Counter</Card.Title>
        <p className="display-3">
          <Badge bg={count === 0 ? 'secondary' : count > 0 ? 'success' : 'danger'}>
            {count}
          </Badge>
        </p>
        <ButtonGroup>
          <Button variant="outline-danger" onClick={() => setCount((c) => c - 1)}>
            −1
          </Button>
          <Button variant="outline-secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button variant="outline-success" onClick={() => setCount((c) => c + 1)}>
            +1
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}
