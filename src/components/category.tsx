import { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

// allows HTML binding to a title property
type props = {
  category: {
    id: string,
    title: string,
    backgroundImage: string,
    projects: []
  }
};

const Category: FC<props> = ({ category }) => {
  const [hidden, setDisplay] = useState(false);
  function toggleVisibility() {
     hidden===true?setDisplay(false)
     :setDisplay(true);
  }

  return (
    <Card className="text-center" style={{height: '100%', border: 'none', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
      <Card.Img style={{height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '0'}} src={category.backgroundImage} alt="Card image" />
      <Card.ImgOverlay style={{height: '100%'}} className="d-flex justify-content-center align-items-center">
        <Card.Title><Button variant="primary" as={Link} to={{pathname: '/categories/' + category.id, state: category}}>{category.title}</Button></Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Category;
