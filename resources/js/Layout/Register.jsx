import React, { useState } from 'react';
import { Button, Form, Card, Container, Alert, Navbar, Nav, Image } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Bar from '../Components/Nvar';
import { useNavigate } from 'react-router-dom';


function Register() {

  let navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [ formValue, setformValue ] = React.useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
  })

  let history = useNavigate();

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("lastname", formValue.lastname);
    formData.append("email", formValue.email);
    formData.append("password", formValue.password)
    //console.log(formData.get("lastname"))

    axios
      .post(
        "http://localhost:8080/growth/public/api/register",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
             Accept: 'application/json'
           
          },
        }
      )
      .then(response => {
        console.log('response:');
        console.log(response);
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
        setShow(true);
      })
  }

  return (
    <>
      <Bar />
      <Alert
        show={show}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <center>
          <Alert.Heading>
            No se pudo realizar el registro
          </Alert.Heading>
          <p>Verifica que tus datos sean correctos...</p>
        </center>
      </Alert>

      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Register</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="RegisterName">
                <Form.Label>Name(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name(s)"
                  name="name"
                  value={formValue.name}
                  onChange={onChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="RegisterLastName">
                <Form.Label>Last Names</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Names"
                  name="lastname"
                  value={formValue.lastname}
                  onChange={onChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="RegisterEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formValue.email}
                  onChange={onChange} />
              </Form.Group>
          
              <Form.Group className="mb-3" controlId="RegisterPass">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValue.password}
                  onChange={onChange} />
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