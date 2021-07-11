import React from 'react';
import { BrowserRouter,  Switch,  Route,  Link, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navbar, Nav, Container } from 'react-bootstrap'

import HomePage from './home';
import CategoriesPage from './categories';
import ProjectsPage from './projects';
import ProjectPage from './project';

/*import ErrorPage from './error';*/

//import logo from './../assets/svg/logo.svg';

/*<img
  alt=""
  src={logo}
  width="30"
  height="30"
  className="d-inline-block align-top"
/>
*/

const RootPage = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="*">
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Test = () => {
  let location = useLocation();

  return (
    <div>
      <Navbar fixed="top" bg="primary" expand="lg">
        <Navbar.Brand as={Link} to="/" style={{fontWeight: 700}}>
          Roule Design
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={'/categories'}>Menu 1</Nav.Link>
            <Nav.Link as={Link} to={'/docs/myApostroph'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="noPadding" style={{marginTop: '56px', height: 'calc(100vh - 56px)'}}>
        <TransitionGroup style={{position: 'relative', height: '100%', width: '100%'}}>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Switch location={location}>
              <Route exact path="/home" component={ HomePage }/>
              <Route exact path="/categories" component={ CategoriesPage }/>
              <Route exact path="/categories/:category" component={ ProjectsPage }/>
              <Route exact path="/projects/:project" component={ ProjectPage }/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </div>
  );
}

/*

*/

export default RootPage;
