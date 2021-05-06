import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

import Project from "./../components/project";

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Durance',
      backgroundImage: background,
    },
    {
      title: 'Te Ra',
      backgroundImage: background,
    },
    {
      title: 'BlaBla',
      backgroundImage: background,
    },
    {
      title: 'J-B',
      backgroundImage: background,
    },
    {
      title: 'Meuble',
      backgroundImage: background,
    },
    {
      title: 'Couture',
      backgroundImage: background,
    },
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
            <Project title={projects[0].title} backgroundImage={projects[0].backgroundImage}></Project>
          </Col>
          <Col className="noPadding" lg={6}>
          <Project title={projects[1].title} backgroundImage={projects[1].backgroundImage}></Project>
          </Col>
        </Row>
        <Row>
          <Col className="noPadding" lg={6}>
          <Project title={projects[2].title} backgroundImage={projects[2].backgroundImage}></Project>
          </Col>
          <Col className="noPadding" lg={6}>
          <Project title={projects[3].title} backgroundImage={projects[3].backgroundImage}></Project>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectsPage;
