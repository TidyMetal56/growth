import { useState } from 'react';
import { Form, Card, Button, Navbar, Col, Container, Image, Nav} from 'react-bootstrap';
import Bar from '../Components/Nvar'

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
            <Card.Title className='text-center'>Result and Proccess for IVA</Card.Title>
            <Card.Text>The amount ({amount}) is multiplied by .16 wich is corresponding to 16% and gives us the result of IVA wich is equal to = {amount * 0.16}</Card.Text>
            <Card.Text>This would be the result of the amount without IVA = {amount - (amount * 0.16)}</Card.Text>
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
    <Bar/>

    <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Card style={{ width: '50rem' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="CalculateTax" className="form-control-lg">
          <Form.Label>Select a Tax</Form.Label>
          <Form.Select value={selectedOption} onChange={handleSelectOption} required>
            <option value="">Select a Tax</option>
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
        <br/>
      </Form>
      </Card>
      <br/>
      {showResult && resultCard}
    </Container>
    </>
  );
}

export default Cal;
