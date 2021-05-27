import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      style={{
        padding: "16px",
        minHeight: "10vh",
        boxShadow: "0px 5px 17px 0px rgba(0,0,0,0.5)",
      }}
    >
      <Container>
        <Link to="/" className="link">
          <Navbar.Brand>Deepak Mishra</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Navbar.Text>
              <Link to="/home" className="link">
                Home
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/about" className="link">
                About
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
