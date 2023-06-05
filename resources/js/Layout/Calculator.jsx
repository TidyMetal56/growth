import React, { useState } from 'react';
import { Form, Card, Button, Container } from 'react-bootstrap';
import Bar from '../Components/Nvar';
import Footer from '../Components/Footer';

function Cal() {
  const calculateISAN = (price) => {
    let taxPercentage;
  
    if (price <= 250000) {
      taxPercentage = 2;
    } else if (price > 250000 && price <= 300000) {
      taxPercentage = 2.5;
    } else if (price > 300000 && price <= 350000) {
      taxPercentage = 3;
    } else if (price > 350000) {
      taxPercentage = 3.3;
    } else {
      taxPercentage = 0;
    }
  
    const taxAmount = price * (taxPercentage / 100);
    return taxAmount; 
  };

  const calculateISR = (amount) => {
      let isrPercentage;
      let isrFixedAmount;
  
      if (amount >= 0.01 && amount <= 746.04) {
        isrPercentage = 1.92;
        isrFixedAmount = 0.00;
      } else if (amount >= 746.05 && amount <= 6332.05) {
        isrPercentage = 6.4;
        isrFixedAmount = 14.32;
      } else if (amount >= 6332.06 && amount <= 11128.01) {
        isrPercentage = 10.88;
        isrFixedAmount = 371.83;
      } else if (amount >= 11128.02 && amount <= 12935.82) {
        isrPercentage = 16;
        isrFixedAmount = 893.63;
      } else if (amount >= 12935.83 && amount <= 15487.71) {
        isrPercentage = 17.92;
        isrFixedAmount = 1182.88;
      } else if (amount >= 15487.72 && amount <= 31236.49) {
        isrPercentage = 21.36;
        isrFixedAmount = 1640.18;
      } else if (amount >= 31236.50 && amount <= 49233.00) {
        isrPercentage = 23.52;
        isrFixedAmount = 5004.12;
      } else if (amount >= 49233.01 && amount <= 93993.90) {
        isrPercentage = 30;
        isrFixedAmount = 9236.89;
      } else if (amount >= 93993.01 && amount <= 125325.20) {
        isrPercentage = 32;
        isrFixedAmount = 22665.17;
      } else if (amount >= 125325.21 && amount <= 375975.61) {
        isrPercentage = 34;
        isrFixedAmount = 32691.18;
      } else if (amount >= 375975.62) {
        isrPercentage = 35;
        isrFixedAmount = 117912.32;
      } else {
        isrPercentage = 0;
      }
  
      const isrAmount = (amount - isrFixedAmount) * (isrPercentage / 100);
      return isrAmount;
    };
  

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
  let taxPercentage; // Declarar la variable taxPercentage aquí

  switch (selectedOption) {
    case '1':
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Result and Proccess for IVA</Card.Title>
            <Card.Text>
              The amount ({amount}) is multiplied by 0.16, which corresponds to 16% and gives us the result of IVA which
              is equal to = {amount * 0.16}
            </Card.Text>
            <Card.Text>This would be the result of the amount without IVA = {amount - amount * 0.16}</Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    case '2':
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Result and Proccess for IEPS</Card.Title>
            <Card.Text>
              The amount ({amount}) is multiplied by 0.779, which corresponds to 7.79% and gives us the result of IEPS
              which is equal to = {amount * 0.779}
            </Card.Text>
            <Card.Text>This would be the result of the amount without IEPS = {amount - amount * 0.779}</Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    case '3':
      const priceWithISAN = calculateISAN(amount);

      if (amount <= 250000) {
        taxPercentage = 2;
      } else if (amount > 250000 && amount <= 300000) {
        taxPercentage = 2.5;
      } else if (amount > 250000 && amount <= 300000) {
        taxPercentage = 3;
      } else if (amount > 350000) {
        taxPercentage = 3.3;
      } else {
        taxPercentage = 0;
      }
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Result for ISAN</Card.Title>
            <Card.Text>
              In this case, the amount ({amount}) has a percentage which corresponds to {taxPercentage}% and gives us the result
              of ISAN which is equal to = {priceWithISAN}
            </Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    case '4':
      const priceWithISR = calculateISR(amount);
      let isrPercentage;
      let isrFixedAmount;

      if (amount >= 0.01 && amount <= 746.04) {
        isrPercentage = 1.92;
        isrFixedAmount = 0.00;
      } else if (amount > 746.04 && amount <= 6332.05) {
        isrPercentage = 6.4;
        isrFixedAmount = 14.32;
      } else if (amount > 6332.05 && amount <= 11128.01) {
        isrPercentage = 10.88;
        isrFixedAmount = 371.83;
      } else if (amount > 11128.01 && amount <= 12935.82) {
        isrPercentage = 16;
        isrFixedAmount = 893.63;
      } else if (amount > 12935.82 && amount <= 15487.71) {
        isrPercentage = 17.92;
        isrFixedAmount = 1182.88;
      } else if (amount > 15487.71 && amount <= 31236.49) {
        isrPercentage = 21.36;
        isrFixedAmount = 1640.18;
      } else if (amount > 31236.49 && amount <= 49233.00) {
        isrPercentage = 23.52;
        isrFixedAmount = 5004.12;
      } else if (amount > 49233.00 && amount <= 93993.90) {
        isrPercentage = 30;
        isrFixedAmount = 9236.89;
      } else if (amount > 93993.90 && amount <= 125325.20) {
        isrPercentage = 32;
        isrFixedAmount = 22665.17;
      } else if (amount > 125325.20 && amount <= 375975.61) {
        isrPercentage = 34;
        isrFixedAmount = 32691.18;
      } else if (amount > 375975.61) {
        isrPercentage = 35;
        isrFixedAmount = 117912.32;
      }
    
      resultCard = (
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Result for ISR</Card.Title>
            <Card.Text>
              In this case, the amount ({amount}) has a percentage which corresponds to {isrPercentage}% and gives us the result
              of ISR which is equal to = {priceWithISR}
            </Card.Text>
          </Card.Body>
        </Card>
      );
      break;
    default:
      resultCard = null;
  }

  return (
    <>
      <Bar />

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
              <Form.Control type="number" placeholder="Submit" value={amount} onChange={handleAmountChange} required />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <br />
          </Form>
        </Card>
        <br />
        {showResult && resultCard}
      </Container>

      <Footer />
    </>
  );
}

export default Cal;
