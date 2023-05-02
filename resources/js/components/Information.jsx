import {Navbar, Nav, Container, Form} from 'react-bootstrap';


function Info() {
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

    <Form>
      <Form.Group className="mb-3" controlId="SelectTaxe">
        <Form.Label>Select</Form.Label>
        <Form.Select placeholder="Select a Taxe">
          <option>Select an Option</option>
          <option value="1">IVA</option>
          <option value="2">IEPS</option>
          <option value="3">ISAN</option>
          <option value="3">ISR</option>
        </Form.Select>
      </Form.Group>
    </Form>
    </>
    );
};

export default Info();
