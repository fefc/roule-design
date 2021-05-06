import { FC, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

// allows HTML binding to a title property
type props = {
  category: {
    id: string,
    title: string,
    backgroundImage: string
  }
};

const Category: FC<props> = ({ category }) => {
  const [hidden, setDisplay] = useState(false);
  function toggleVisibility() {
     hidden===true?setDisplay(false)
     :setDisplay(true);
  }

  return (
    <Card className="text-center" bg="primary" border="primary">
      <Card.Img src={category.backgroundImage} alt="Card image" />
      <Card.ImgOverlay style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <Card.Title><Button variant="outline-primary" as={Link} to={'/categories/' + category.id}>{category.title}</Button></Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Category;
