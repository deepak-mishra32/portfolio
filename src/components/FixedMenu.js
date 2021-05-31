import React from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Deepak from "./images/navImg.png";
import "./pages/styles/FixedMenu.css";
import { Card } from "react-bootstrap";
import { IoIosHome } from "react-icons/io";
import { ImUserTie } from "react-icons/im";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { GiSkills, GiAchievement } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
function FixedMenu() {
  const socialIcon = {
    height: "36px",
    width: "36px",
    marginTop: "16px",
    borderRadius: "50%",
    boxShadow: "0px 5px 17px 0px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      height: "42px",
      width: "42px",
    },
  };

  return (
    <Container className="justify-content-center">
      <Card className="card">
        <img
          src={Deepak}
          alt="Deepak Mishra"
          className="img-fluid"
          id="imgStyle"
        />
        {/* <Card.Title className="mt-2">Deepak Mishra</Card.Title> */}
        {/* <Card.Subtitle>Web Developer</Card.Subtitle> */}
        <Card.Body>
          <ListGroup>
            <ListGroup.Item action href="/#home" className="list-items">
              <IoIosHome style={{ marginTop: "-4px" }} /> Home
            </ListGroup.Item>
            <ListGroup.Item action href="/#about" className="list-items">
              <ImUserTie style={{ marginTop: "-4px" }} /> About
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="/#qualification"
              className="list-items"
            >
              <FaUserGraduate style={{ marginTop: "-4px" }} /> Quallification
            </ListGroup.Item>
            <ListGroup.Item action href="/#skills" className="list-items">
              <GiSkills style={{ marginTop: "-4px" }} /> Skills
            </ListGroup.Item>
            <ListGroup.Item action href="/#projects" className="list-items">
              <FaLaptopCode style={{ marginTop: "-4px" }} /> Projects
            </ListGroup.Item>
            <ListGroup.Item action href="/#workexp" className="list-items">
              <GiAchievement style={{ marginTop: "-4px" }} /> Experience
            </ListGroup.Item>
            <ListGroup.Item action href="/#contact" className="list-items">
              <MdContacts style={{ marginTop: "-4px" }} /> Contact
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Header
          style={{
            boxShadow: "0px 0.5px 2px 0px rgba(0, 0, 0, 0.5)",
            marginTop: "-10px",
          }}
        >
          Connect Socially
        </Card.Header>
        <Row>
          <Col>
            <SocialIcon
              url="https://www.facebook.com/deepm3323/"
              target="_blank"
              style={socialIcon}
              bgColor="blue"
              fgColor="white"
            />
          </Col>
          <Col>
            <SocialIcon
              url="https://www.instagram.com/deepakkk_mishra/"
              target="_blank"
              style={socialIcon}
              fgColor="white"
            />
          </Col>
          <Col>
            <SocialIcon
              url="https://github.com/deep332"
              target="_blank"
              style={socialIcon}
              fgColor="white"
            />
          </Col>
          <Col>
            <SocialIcon
              url="https://www.linkedin.com/in/deepak-mishra-8b2b921b3/"
              target="_blank"
              style={socialIcon}
              bgColor="blue"
              fgColor="white"
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default FixedMenu;
