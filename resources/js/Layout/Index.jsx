import {Container, Form, Card, Row, Col} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bar from '../Components/Nvar';
import Footer from '../Components/Footer';

function Index() {
  return (
    <>
    <Bar/>

    <Container className="mt-5">
      <Row className="justify-content-between">
        <Col sm={6} md={6} lg={5}>
          <Card className="mb-3 shadow">
            <Card.Body>
            <Card.Title className="text-center">Learn About taxes</Card.Title>
            <Card.Text>Being knowledgeable about taxes gives you a solid foundation to make informed financial decisions, comply with legal obligations and optimize your resources. Whether on a personal or business level,
Understanding tax laws gives you a significant advantage in managing your finances and helps you avoid unnecessary tax problems.</Card.Text>
              <Form>
                <div className="d-flex flex-column justify-content-center">
                    <Link to="/Information" className="nav-link text-center">
                       Learn More
                    </Link>
                  </div>
              </Form>
            </Card.Body>
          </Card>


          <Card className="mb-3 shadow">
            <Card.Body>
            <Card.Title className="text-center">Learn how calculate taxes</Card.Title>
            <Card.Text>
              Knowing how to calculate taxes is essential for legal compliance, effective financial management, informed decision making, strategic tax planning, and evaluating results. 
            </Card.Text>
              <Form>
                <div className="d-flex flex-column justify-content-center">
                  <Link to="/Calculator" className="nav-link text-center">
                    Learn More
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={8} lg={5}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title className="text-center">Learn of Labor laws</Card.Title>
              <Card.Text>Knowing how to create and maintain a positive credit history is essential to access loans and credit, take advantage of financing opportunities, build financial confidence,
establish a strong financial reputation and have a positive impact on other areas of financial life.</Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <div className="d-flex flex-column justify-content-center">
                    <Link to="/Law" className="nav-link text-center">
                       Learn More
                    </Link>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>


          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title className="text-center">Learn how to start your credit history</Card.Title>
              <Card.Text>knowing labor laws is essential to protect labor rights, guarantee a fair and equitable work environment, comply with legal regulations, establish healthy labor relations,
drafting appropriate contracts and agreements, and making informed decisions.</Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <div className="d-flex flex-column justify-content-center">
                    <Link to="/" className="nav-link text-center">
                      Learn More
                    </Link>
                    <br />
                  </div>
                </Form.Group>
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

export default Index;