import { useState } from 'react';
import { Form, Card, Button, Navbar, Col, Container, Image, Nav} from 'react-bootstrap';

function Cal() {
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResult(true);
  };

  let resultCard;
  switch (selectedOption) {
    case '1':
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title>Result for IVA</Card.Title>
            <Card.Text>{amount * 0.16}</Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    case '2':
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title>Result for IEPS</Card.Title>
            <Card.Text>{amount * 0.08}</Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    case '3':
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title>Result for ISAN</Card.Title>
            <Card.Text>{amount * 0.05}</Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    case '4':
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title>Result for ISR</Card.Title>
            <Card.Text>{amount * 0.35}</Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    default:
      resultCard = null;
  }

  return (
    <>
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
      <Card style={{ width: '50rem' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="CalculateTaxe" className="form-control-lg">
          <Form.Label>Select a Taxe</Form.Label>
          <Form.Select value={selectedOption} onChange={handleSelectOption}>
            <option value="">Select a Taxe</option>
            <option value="1">IVA</option>
            <option value="2">IEPS</option>
            <option value="3">ISAN</option>
            <option value="4">ISR</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="Amount" className="form-control-lg">
          <Form.Label>Submit the amount</Form.Label>
          <Form.Control type="number" placeholder="Submit" value={amount} onChange={handleAmountChange} required/>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      </Card>
      <br/>
      {showResult && resultCard}
    </Container>
    </>
  );
}

export default Cal;
