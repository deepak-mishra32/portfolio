import "./styles/Home.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Deepak from "../images/Deepak.JPG";
function Home() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <h3>Hii! I am Deepak Mishra a curious Web Developer</h3>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <img src={Deepak} alt="Deepak" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
