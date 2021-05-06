import { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

// allows HTML binding to a title property
type props = {
  project: {
    id: string,
    title: string,
    backgroundImage: string
  }
};

const Project: FC<props> = ({ project }) => {
  const [hidden, setDisplay] = useState(false);
  function toggleVisibility() {
     hidden===true?setDisplay(false)
     :setDisplay(true);
  }

  return (
    <Card className="text-center" style={{border: 'none', padding: '3rem'}}>
      <Card.Img src={project.backgroundImage} alt="Card image" />
      <Card.ImgOverlay style={{display: 'flex', justifyContent: 'center', alignItems:'end'}}>
        <Card.Title><Button variant="primary" as={Link} to={'/projects/' + project.id}>{project.title}</Button></Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Project;
