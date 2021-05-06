import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

import Category from "./../components/category";

const CategoriesPage = () => {
  const cateogories = [
    {
      id: 'design-produit',
      title: 'Design Produit',
      backgroundImage: background
    },
    {
      id: 'graphisme',
      title: 'Graphisme',
      backgroundImage: background
    },
    {
      id: 'packaging',
      title: 'Packaging',
      backgroundImage: background
    },
    {
      id: 'photographie',
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
            <Category category={cateogories[0]}></Category>
          </Col>
          <Col className="noPadding" lg={6}>
          <Category category={cateogories[1]}></Category>
          </Col>
        </Row>
        <Row>
          <Col className="noPadding" lg={6}>
          <Category category={cateogories[2]}></Category>
          </Col>
          <Col className="noPadding" lg={6}>
          <Category category={cateogories[3]}></Category>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoriesPage;
