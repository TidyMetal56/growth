import {Container, Nav, Navbar, Col, Image} from 'react-bootstrap';

function Home() {
  return (
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
    
  );
}

export default Home;