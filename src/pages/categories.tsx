import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

import designProduit from './../assets/imgs/design_produit.jpg';
import graphisme from './../assets/imgs/graphisme.jpg';
import photograophie from './../assets/imgs/photographie.jpg';

import Category from "./../components/category";

const CategoriesPage = () => {
  const cateogories = [
    {
      id: 'design-produit',
      title: 'Design Produit',
      backgroundImage: designProduit
    },
    {
      id: 'graphisme',
      title: 'Graphisme',
      backgroundImage: graphisme
    },
    {
      id: 'packaging',
      title: 'Packaging',
      backgroundImage: background
    },
    {
      id: 'photographie',
      title: 'Photographie',
      backgroundImage: photograophie
    }
  ]


  return (
    <>
      <Container fluid className="d-flex flex-column" style={{position: 'absolute', top: '56px', bottom: 0}}>
        <Row className="flex-fill">
          <Col className="noPadding" lg={6}>
            <Category category={cateogories[0]}></Category>
          </Col>
          <Col className="noPadding" lg={6}>
          <Category category={cateogories[1]}></Category>
          </Col>
        </Row>
        <Row className="flex-fill">
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
