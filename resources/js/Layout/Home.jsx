import {Container, Form, Card, Row, Col} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bar from '../Components/Nvar';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
    <Bar/>

    <Container className="mt-5">
      <Row className="justify-content-between">
        <Col sm={6} md={6} lg={5}>
          <Card className="mb-3 shadow">
            <Card.Body>
            <Card.Title className="text-center">What can you find here?</Card.Title>
            <Card.Text>On this page you will find important information about taxes, labor laws and other tools that will help you in adulthood.</Card.Text>
            <Card.Text>what do you need to start?</Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                </Form.Group>
                <div className="d-flex flex-column justify-content-center">
                  
                  <Link to="/Login" className="nav-link text-center">
                    Login
                  </Link>
                  <br />
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={8} lg={5}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title className="text-center">How can this information be useful to you?</Card.Title>
              <Card.Text>When we grow up, many of the topics that we did not know become too important as we get older, the problem is that no one gives you much of the information and you have to search for it on your own. Here you will find the vital information that will help you so that life does not catch you off guard</Card.Text>
              <Card.Text>what do you need to start?</Card.Text>
              <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                </Form.Group>
                <div className="d-flex flex-column justify-content-center">
                  
                  <Link to="/Login" className="nav-link text-center">
                    Login
                  </Link>

                  <Link to="/Index" className="nav-link text-center">
                    Index
                  </Link>
                  <br />
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Footer/>
  
  </>
    
  );
}

export default Home;