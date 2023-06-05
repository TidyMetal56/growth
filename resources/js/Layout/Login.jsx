import React, {useState} from 'react'
import { Card, Container, Form, Button, Nav, Navbar, Alert} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Bar from '../Components/Nvar'
import Footer from '../Components/Footer'

function Login() {

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
          <Card.Title className="text-center">Login</Card.Title>
            <Form>
        

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

              <Link to="/Register" className="nav-link text-center">
                   You do not have an account? Sign up
                </Link>
              
            </Form>
          </Card.Body>
      </Card>
    </Container>

    <Footer/>

  </>
  );
}

export default Login;