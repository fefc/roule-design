import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

const HomePage = () => {

  return (
    <>
      <style type="text/css">
      {`
        .my-row {
          height: 100%;
        }

        .my-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
      <Container fluid style={{height: '100%', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Row className="my-row">
          <Col className="my-col">
            <Button variant="primary" as={Link} to={'/categories'}>Explorez</Button>
          </Col>
          <Col className="my-col">
            <Card>
              <Card.Body>
                <Card.Title>A propos de Roule Design</Card.Title>
                <Card.Text>
                Se quid nulla ea senserit est excepteur malis quid probant illum e eu aute enim
                aut mandaremus, ut minim culpa elit arbitror o summis aut ullamco non noster ab
                consequat amet ubi mentitum reprehenderit de laboris export expetendis ullamco,
                aliqua te ingeniis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
