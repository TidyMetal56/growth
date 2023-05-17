import React, { useState } from 'react';
import { Card, Form, Navbar, Col, Container, Image, Nav} from 'react-bootstrap';
import Bar from '../components/Nvar';

function Info() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  }
//Hay que cambiar la informacion del card body para mostrar la info de la base de datos
  return (
    <div>
    
    <Bar/>

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
