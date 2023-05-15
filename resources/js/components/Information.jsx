import React, { useState } from 'react';
import { Card, Form, Navbar, Col, Container, Image, Nav} from 'react-bootstrap';

function Info() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  }
//Hay que cambiar la informacion del card body para mostrar la info de la base de datos
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Growth</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Information</Nav.Link>
        <Nav.Link href="#features">calculators</Nav.Link>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
      </Nav>
    </Container>
    </Navbar>

    <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="text-center">Information</Card.Title>
      <Form>
        <Form.Group className="mb-3" controlId="SelectTaxe">
          <Form.Label>Select</Form.Label>
          <Form.Select placeholder="Select a Taxe" onChange={handleSelectOption}>
            <option>Select an Option</option>
            <option value="IVA">IVA</option>
            <option value="IEPS">IEPS</option>
            <option value="ISAN">ISAN</option>
            <option value="ISR">ISR</option>
          </Form.Select>
        </Form.Group>
      </Form>
      </Card.Body>
      </Card>
      {selectedOption && (
      <Card style={{ marginTop: '20px' }}>
        <Card.Body>
          {selectedOption === "IVA" && (
            <Card.Text>Este es el texto para IVA</Card.Text>
          )}
          {selectedOption === "IEPS" && (
            <Card.Text>Este es el texto para IEPS</Card.Text>
          )}
          {selectedOption === "ISAN" && (
            <Card.Text>Este es el texto para ISAN</Card.Text>
          )}
          {selectedOption === "ISR" && (
            <Card.Text>Este es el texto para ISR</Card.Text>
          )}
        </Card.Body>
      </Card>
      )}
      </Container>
    </div>
  );
}

export default Info;
