import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function navbar () {
    <Navbar expand="lg" className="bg-body-primary">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Us</Nav.Link>
          <Nav.Link href="#">Contacts</Nav.Link>  
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Navbar;