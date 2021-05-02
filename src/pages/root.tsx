import React from 'react';
import { BrowserRouter,  Switch,  Route,  Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import HomePage from './home';
import CategoriesPage from './categories';
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
      <Navbar fixed="top" bg="light" expand="lg">
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
      <div className="main">
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route exact path="/categories" component={ CategoriesPage }/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

/*

*/

export default RootPage;
