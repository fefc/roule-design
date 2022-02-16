import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

import background from './../assets/imgs/background.jpg';

import Project from "./../components/project";

type props = {
  category: {
    id: string,
    title: string,
    backgroundImage: string,
    projects: []
  }
};

const ProjectsPage: FC<props> = ({ category }) => {
  let projects = []
  console.log("test");
  console.log(category);
  let data = useLocation();
  console.log((data.state as any).projects); //state would be in data.state//
  projects = (data.state as any).projects;
  // const projects = [
  //   {
  //     id: 'durance',
  //     title: 'Durance',
  //     backgroundImage: background,
  //   },
  //   {
  //     id: 'te-ra',
  //     title: 'Te Ra',
  //     backgroundImage: background,
  //   },
  //   {
  //     id: 'blabla',
  //     title: 'BlaBla',
  //     backgroundImage: background,
  //   },
  //   {
  //     id: 'j-b',
  //     title: 'J-B',
  //     backgroundImage: background,
  //   },
  //   {
  //     id: 'meuble',
  //     title: 'Meuble',
  //     backgroundImage: background,
  //   },
  //   {
  //     id: 'couture',
  //     title: 'Couture',
  //     backgroundImage: background,
  //   },
  // ]


  return (
      <Container fluid style={{position: 'absolute', top: '0', bottom: '0', overflowY: 'auto', backgroundColor: 'white'}}>
        <Container className="pt-3">
          <Row className="flex-fill">        
          {
            projects.map((p: any, index: number) =>

              <Col className={(index % 2 == 0 ? "pr-lg-2 pl-lg-0 pb-3" : "pr-lg-0 pl-lg-2 pb-3")} lg={6} style={{height: '40vh'}} key={p.id}>
                <Project project={p}></Project>
              </Col>

            )
          }
          </Row>
        </Container>
      </Container>
  );
}

export default ProjectsPage;
