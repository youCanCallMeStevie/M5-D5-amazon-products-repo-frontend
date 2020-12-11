import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {props.title} Projects & Reviews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Our Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
