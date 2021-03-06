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
    <>
    <style type="text/css">
    {`
      .card-img {
        opacity: 1;
        transition: .5s ease;
      }

      a.card:hover .card-img {
        opacity: 0.8;
      }
    `}
    </style>
    <Card className="text-center" style={{opacity: 1, border: 'none', height: '100%'}} as={Link} to={'/projects/' + project.id}>
      <Card.Img style={{height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '0'}} src={process.env.PUBLIC_URL + project.backgroundImage} alt="Card image" />
      <Card.ImgOverlay style={{display: 'flex', justifyContent: 'center', alignItems:'end'}}>
        <Card.Title><Button variant="primary" as={Link} to={'/projects/' + project.id}>{project.title}</Button></Card.Title>
      </Card.ImgOverlay>
    </Card>
    </>
  );
};

export default Project;
