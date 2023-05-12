import React from "react"
import { Container, Card, Form } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Error() {
    return(
        <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="text-center">¡Whoops!</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> it seems that this page does not exist....  yet</Form.Label>
                    </Form.Group>
                    <div className="d-flex flex-column justify-content-center">
                        <Link to="/growth/public/" className="nav-link text-center">Go to home page</Link>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default Error 