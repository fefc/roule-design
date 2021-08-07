import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button, Spinner } from 'react-bootstrap'

import Category from "./../components/category";

const CategoriesPage = () => {
  const [init, setInit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
  }, [init]); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchCategories() {
    try {
      const response = await fetch(process.env.PUBLIC_URL + '/categories.json');
      const content = await response.json();

      console.log(content.categories);

      setCategories(content.categories);
      setLoading(false);

    } catch (e) {
      console.log(e);
      //openErrorPage(1000, '/docs/' + docId + '/' + language + '.md');
    }
  }

  return (
    <Container fluid className="d-flex flex-column" style={{position: 'absolute', top: '0', bottom: '0'}}>
    { loading ?
      <Row>
        <Col style={{
          justifyContent: 'center',
          display: 'flex'}}>
          <Spinner animation="border" variant="primary"></Spinner>
        </Col>
      </Row> :
      <Row className="flex-fill">
        {
          categories.map((c) =>
            <Col className="noPadding" lg={6} key={c.id}>
              <Category category={c}></Category>
            </Col>
          )
        }
      </Row>
    }
    </Container>
  );
}

export default CategoriesPage;
