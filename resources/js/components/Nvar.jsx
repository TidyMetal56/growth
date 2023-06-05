import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Container, Image, Alert, Nav  } from "react-bootstrap";  
import { useState } from 'react';


function Bar() {

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    }

    return ( 
    <Navbar bg="primary" variant="dark">
      <Container>
        <Image alt='Image Logo' src={'https://i.ibb.co/zhwGwt2/LogoGrow.png'} width={100} height={50}/>
            <Nav className="me-auto">
                <Nav.Link onClick={handleClick}>Information</Nav.Link>
                <Nav.Link onClick={handleClick}>Calculators</Nav.Link>
            </Nav>
            <Alert show={showAlert} variant="info" onClose={() => setShowAlert(false)} dismissible>
                Please Loggin to enable this options!
            </Alert>
            </Container>
            <Navbar.Collapse classname="justify-content-end margin-right">
                <Image alt='Profile' className="" roundedCircle src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdGHZXixfzYRXYF_mYdK_M4bTZvG97wH7Ug&usqp=CAU'} width={50} height={50}/>
            </Navbar.Collapse>
    </Navbar>
    )
}

export default Bar;