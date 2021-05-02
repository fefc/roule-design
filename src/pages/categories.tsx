import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

import Category from "./../components/category";

const CategoriesPage = () => {
  const cateogories = [
    {
      title: 'Design Produit',
      backgroundImage: background
    },
    {
      title: 'Graphisme',
      backgroundImage: background
    },
    {
      title: 'Packaging',
      backgroundImage: background
    },
    {
      title: 'Photographie',
      backgroundImage: background
    }
  ]


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
      <Container fluid>
        <Row>
          <Col className="noPadding" lg={6}>
            <Category title={cateogories[0].title} backgroundImage={cateogories[0].backgroundImage}></Category>
          </Col>
          <Col className="noPadding" lg={6}>
          <Category title={cateogories[1].title} backgroundImage={cateogories[1].backgroundImage}></Category>
          </Col>
        </Row>
        <Row>
          <Col className="noPadding" lg={6}>
          <Category title={cateogories[2].title} backgroundImage={cateogories[2].backgroundImage}></Category>
          </Col>
          <Col className="noPadding" lg={6}>
          <Category title={cateogories[3].title} backgroundImage={cateogories[3].backgroundImage}></Category>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoriesPage;
