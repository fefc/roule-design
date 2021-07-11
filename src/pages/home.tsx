import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

const HomePage = () => {

  return (
    <>
      <Container fluid style={{height: '100%', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Row style={{height: '100%'}}>
          <Col className="d-flex justify-content-center align-items-center" lg={6} md={{ order: 2 }}>
            <Card style={{ opacity: 0.9 }}>
              <Card.Header>A propos</Card.Header>
              <Card.Body>
                  <p>
                    Se quid nulla ea senserit est excepteur malis quid probant illum e eu aute enim
                    aut mandaremus, ut minim culpa elit arbitror o summis aut ullamco non noster ab
                    consequat amet ubi mentitum reprehenderit de laboris export expetendis ullamco,
                    aliqua te ingeniis.
                  </p>
                  <footer className="blockquote-footer">
                    Ce
                  </footer>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" lg={6} md={{ order: 1 }}>
            <Button variant="primary" size="lg" as={Link} to={'/categories'}>Explorez</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
