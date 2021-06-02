import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
import { IoIosHome } from "react-icons/io";
import { ImUserTie } from "react-icons/im";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { GiSkills, GiAchievement } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import navImg from "../images/Nav-Icon.png";

function Navigation() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: "#0d7377",
        padding: "16px",
        minHeight: "10vh",
        boxShadow: "0px 5px 17px 0px rgba(0,0,0,0.5)",
      }}
    >
      <Container>
        <Link to="/" className="link">
          <Navbar.Brand>
            <img
              src={navImg}
              alt="nav-logo"
              fluid
              style={{
                height: "46px",
                marginLeft: "-16px",
                marginRight: "8px",
              }}
            />
            Deepak Mishra
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="toggle" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <hr />
            <Navbar.Text>
              <a href="/#home" className="link">
                <IoIosHome style={{ marginTop: "-4px" }} /> Home
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/#about" className="link">
                <ImUserTie style={{ marginTop: "-4px" }} /> About
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/#qualification" className="link">
                <FaUserGraduate style={{ marginTop: "-4px" }} /> Quallification
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/#skills" className="link">
                <GiSkills style={{ marginTop: "-4px" }} /> Skills
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/#projects" className="link">
                <FaLaptopCode style={{ marginTop: "-4px" }} /> Projects
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/#workexp" className="link">
                <GiAchievement style={{ marginTop: "-4px" }} /> experience
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <a href="/#contact" className="link">
                <MdContacts style={{ marginTop: "-4px" }} /> Contact
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
