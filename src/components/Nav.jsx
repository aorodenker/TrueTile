import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="logo-name" href="/">True Tile</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/reviews">Reviews</Link>
          <Link className="nav-link" to="/estimate">Get an Estimate!</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
