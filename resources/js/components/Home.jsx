import {Container, Nav, Navbar, Alert, Image, Button, Form, Card} from 'react-bootstrap';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Growth</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={handleClick}>Information</Nav.Link>
        <Nav.Link onClick={handleClick}>Calculators</Nav.Link>
      </Nav>
          <Alert show={showAlert} variant="info" onClose={() => setShowAlert(false)} dismissible>
            Please Loggin to enable this options!
          </Alert>
        </Container>
    </Navbar>

      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Welcome</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>welcome to Growth a page where you can get important information for adult life because remember knowledge is power</Form.Label>
              </Form.Group>
              <div className="d-flex flex-column justify-content-center">
                 <Link to="/Login" className="nav-link text-center">Login</Link>
                 <br/>
                 <Link to="/Register" className="nav-link text-center">Register</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">What are you found here?</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
              </Form.Group>
            </Form>
            <Card.Title className="text-center">How this information could be useful to me?</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="d-flex flex-column justify-content-center">
                  <Link to="/Calculator" className="nav-link text-center">Calcu</Link>
                    <br/>
                  <Link to="/Information" className="nav-link text-center">Info</Link>
                </div>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <br/>
  
  </>
    
  );
}

export default Home;