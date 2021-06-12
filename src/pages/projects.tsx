import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

import Project from "./../components/project";

const ProjectsPage = () => {
  const projects = [
    {
      id: 'durance',
      title: 'Durance',
      backgroundImage: background,
    },
    {
      id: 'te-ra',
      title: 'Te Ra',
      backgroundImage: background,
    },
    {
      id: 'blabla',
      title: 'BlaBla',
      backgroundImage: background,
    },
    {
      id: 'j-b',
      title: 'J-B',
      backgroundImage: background,
    },
    {
      id: 'meuble',
      title: 'Meuble',
      backgroundImage: background,
    },
    {
      id: 'couture',
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
      <Container className="pt-3">
        <Row>
          <Col className="pr-lg-2 pl-lg-0 pb-3" lg={6}>
            <Project project={projects[0]}></Project>
          </Col>
          <Col className="pr-lg-0 pl-lg-2 pb-3" lg={6}>
            <Project project={projects[1]}></Project>
          </Col>
        </Row>
        <Row>
          <Col className="pr-lg-2 pl-lg-0 pb-3" lg={6}>
            <Project project={projects[2]}></Project>
          </Col>
          <Col className="pr-lg-0 pl-lg-2 pb-3" lg={6}>
            <Project project={projects[3]}></Project>
          </Col>
        </Row>
        <Row>
          <Col className="pr-lg-2 pl-lg-0 pb-3" lg={6}>
            <Project project={projects[4]}></Project>
          </Col>
          <Col className="pr-lg-0 pl-lg-2 pb-3" lg={6}>
            <Project project={projects[5]}></Project>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectsPage;
