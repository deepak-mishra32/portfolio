import React from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Deepak from "./images/navImg.jpg";
import "./pages/styles/FixedMenu.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function FixedMenu() {
  const listItem = {
    backgroundColor: "#0d7377",
    padding: "10px",
    borderBottom: "1px solid #14ffec",
  };
  const socialIcon = {
    height: "36px",
    width: "36px",
    margin: "8px 0",
    borderRadius: "50%",
    boxShadow: "0px 5px 17px 0px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      height: "42px",
      width: "42px",
    },
  };

  return (
    <Container className="justify-content-center">
      <Card
        style={{
          backgroundColor: "#0d7377",
          border: "none",
          height: "100vh",
          justifyContent: "space-evenly",
          position: "fixed",
          padding: "16px",
          textAlign: "center",
          width: "22% ",
        }}
      >
        <img
          src={Deepak}
          alt="Deepak Mishra"
          className="img-fluid"
          id="imgStyle"
        />
        <Card.Title className="mt-2">Deepak Mishra</Card.Title>
        <Card.Subtitle>Web Developer</Card.Subtitle>
        <Card.Body>
          <ListGroup variant="flush">
            <Link to="/home" className="link">
              <ListGroup.Item style={listItem}> Home </ListGroup.Item>
            </Link>
            <Link to="/about" className="link">
              <ListGroup.Item style={listItem}>About</ListGroup.Item>
            </Link>
            <Link to="/contact" className="link">
              <ListGroup.Item style={listItem}>Contact</ListGroup.Item>
            </Link>
            <Link to="/qualification" className="link">
              <ListGroup.Item style={listItem}>Quallification</ListGroup.Item>
            </Link>
            <Link to="/skills" className="link">
              <ListGroup.Item style={listItem}>Skills</ListGroup.Item>
            </Link>
            <Link to="/projects" className="link">
              <ListGroup.Item style={listItem}>Projects</ListGroup.Item>
            </Link>
            <Link to="/achievements" className="link">
              <ListGroup.Item style={listItem}>Acheivements</ListGroup.Item>
            </Link>
          </ListGroup>
        </Card.Body>
        <Card.Header>Connect Socially</Card.Header>
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
