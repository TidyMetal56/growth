import React, {useState} from 'react'
import { Card, Container, Form, Button, Nav, Navbar, Alert} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  }

  const {formValue, setformValue} = useState({
    email: '',
    password: ''
  })
  
  const onChange = (e) => {
    e.persist();
    setformValue({...formValue, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post("", formData,
    {headers: {'Content-Type': 'multipart/form-data',
  'Accept': 'application/json'}}
  ).then(Response => {
    console.log('response');
    console.log(response);
  })
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
          <Card.Title className="text-center">Login</Card.Title>
            <Form>
              
              <Image 
                src='../image/LogoGrow.png' 
                alt='Logotipo'
                className="max-w-xs"
              />

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">Submit</Button>
              </div>
         
              
            </Form>
          </Card.Body>
      </Card>
    </Container>

  </>
  );
}

export default Login;