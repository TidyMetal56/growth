import {Container, Form, Card, Row, Col} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bar from '../Components/Nvar';

function Home() {
  return (
    <>
    <Bar/>

    <Container className="mt-5">
      <Row className="justify-content-between">
        <Col sm={6} md={6} lg={5}>
          <Card className="mb-3">
            <Card.Body>
            <Card.Title className="text-center">What can you find here?</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                </Form.Group>
                <div className="d-flex flex-column justify-content-center">
                  <Link to="/Login" className="nav-link text-center">
                    Login
                  </Link>
                  <br />
                  <Link to="/Register" className="nav-link text-center">
                    Register
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={8} lg={5}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="text-center">How can this information be useful to you?</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <div className="d-flex flex-column justify-content-center">
                    <Link to="/Calculator" className="nav-link text-center">
                      Calculator
                    </Link>
                    <br />
                    <Link to="/Information" className="nav-link text-center">
                      Information
                    </Link>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
  </>
    
  );
}

export default Home;