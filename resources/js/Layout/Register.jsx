import React, {useState} from 'react';
import { Button, Form, Card, Container, Alert, Navbar, Nav, Image} from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Bar from '../Components/Nvar';

function Register() {
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
    <Bar/>

    <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Register</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="RegisterName">
                <Form.Label>Name(s)</Form.Label>
                <Form.Control type="email" placeholder="Enter Name(s)" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="RegisterLastName">
                <Form.Label>Last Names</Form.Label>
                <Form.Control type="email" placeholder="Enter Last Names" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="RegisterEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="RegisterPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="RegisterConfirmPass">
                <Form.Label>Confirm</Form.Label>
                <Form.Control type="password" placeholder="Confirm" />
              </Form.Group>

              <div className="d-flex justify-content-center">
                 <Button variant="primary" type="submit">Register</Button>
              </div>
            
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Register;