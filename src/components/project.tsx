import { FC, useState } from "react";
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

// allows HTML binding to a title property
type props = {
  title: string,
  backgroundImage: string
};

const Project: FC<props> = ({ title, backgroundImage }) => {
  const [hidden, setDisplay] = useState(false);
  function toggleVisibility() {
     hidden===true?setDisplay(false)
     :setDisplay(true);
  }

  return (
    <Card className="text-center" style={{border: 'none', padding: '3rem'}}>
      <Card.Img src={backgroundImage} alt="Card image" />
      <Card.ImgOverlay style={{display: 'flex', justifyContent: 'center', alignItems:'end'}}>
        <Card.Title><Button variant="primary">{title}</Button></Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Project;
