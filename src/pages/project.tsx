import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button, Image } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

const ProjectPage = () => {
  const project = {
      title: 'Jardin secret',
      subtitle: 'sous titre',
      content: 'Elégant et chaleureux ce diffuseur de parfum d\'ambiance en bois de hêtre s\'inscrira parfaitement dans votre intérieur.Grave à ses particularités, vous pourrez, à votre guise, changer le parfum et les fleurs en céramique composant votre bouqiet suivant vos envies. Votre jardin secret sera votre idéal dans toutes vos pièces à vitre et sera à votre image',
      image: background
    }

  return (
    <Container fluid style={{position: 'absolute', top: '0', bottom: '0', overflowY: 'auto', backgroundColor: 'white'}}>
      <Row>
        <Col className="noPadding" lg={6}>
          <Image src={project.image} rounded style={{width: '100%'}} />
        </Col>
        <Col lg={6} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Card>
            <Card.Body>
              <Card.Title style={{textAlign: 'center', marginBottom: '2rem'}}>{project.title}</Card.Title>
              <Card.Subtitle style={{textAlign: 'center', marginBottom: '1rem'}}>{project.subtitle}</Card.Subtitle>
              <Card.Text style={{textAlign: 'justify'}}>{project.content}</Card.Text>
              <Card.Link href="#">Google drive Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectPage;
