import React, { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    e.persist();
    setFormValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        
        "http://localhost:8080/growth/public/api/login",
        {
          email: formValue.email,
          password: formValue.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        }
      );

      // Verificar la estructura de la respuesta antes de almacenar el token
      if (response.data && response.data.data && response.data.data.token) {
        const { token } = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('correo', formValue.email);
        navigate("/growth/public/");
      } else {
        console.log('Error: Respuesta de API inválida');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Login</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formValue.email}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValue.password}
                  onChange={onChange}
                />
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
