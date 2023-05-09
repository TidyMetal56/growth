import {Navbar, Nav, Container, Form} from 'react-bootstrap';


function Cal() {
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

    <Container className="d-flex justify-content-center align-items-center mt-5">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="text-center">Calculate</Card.Title>
        <Form>
        <Form.Group className="mb-3" controlId="CalculateTaxe">
        <Form.Label>Select a Taxe</Form.Label>
        <Form.Select placeholder="Select a Taxe">
          <option>Select a Taxe</option>
          <option value="1">IVA</option>
          <option value="2">IEPS</option>
          <option value="3">ISAN</option>
          <option value="3">ISR</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Amount">
        <Form.Label>Submit the amount</Form.Label>
        <Form.Control type="number" placeholder="Submit" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
      </Card.Body>
    </Card>
  </Container>
    </>
    );
};

export default Cal();
