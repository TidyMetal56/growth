import { useState } from 'react';
import Search from '../Components/Search';
import { Card, Form, Container, Row, Col } from 'react-bootstrap';
import Bar from '../Components/Nvar';

function CardList() {
  const [cards, setCards] = useState([
    { title: 'Card 1', description: 'suavementeeee' },
    { title: 'Card 2', description: 'besameeeee' },
    { title: 'Card 3', description: 'que quiero sentir tus labios besandome otra vez' },
    { title: 'Card 4', description: 'suave' },
    { title: 'Card 5', description: 'poco a poquito' },
    { title: 'Card 6', description: 'cuando tu me besas me siento en las nubes' },
  ]); // Tarjetas de prueba, mover a un componentes
  const [filteredCards, setFilteredCards] = useState(cards); // Tarjetas filtradas

  // Función para filtrar las tarjetas según las palabras clave
  const handleSearch = (keywords) => {
    const filtered = cards.filter((card) =>
      card.description.toLowerCase().includes(keywords.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <>
      <Bar />

      <Container className="mt-5 mb-5">    
        
        <Search onSearch={handleSearch} />
        
        <Row className="justify-content-center">
          {/* Renderiza las tarjetas filtradas */}
          {filteredCards.map((card, index) => (
            <Col key={index} sm={6} md={4} lg={4}>
              <Card className="mb-3 shadow">
                <Card.Body>
                  <Card.Title className="text-center">{card.title}</Card.Title>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>{card.description}</Form.Label>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardList;
