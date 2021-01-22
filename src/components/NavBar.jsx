import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {props.title} Products & Reviews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">
              <div
                className={
                  props.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </div>
            </Link>
            <Link to="/carts">
              <div
                className={
                  props.location.pathname === "/carts"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                carts
              </div>
            </Link>
            <Nav.Link>Our Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
