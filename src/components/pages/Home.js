import "./styles/Home.css";
import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Deepak from "../images/Deepak.JPG";
import homeBg1 from "../images/home-bg1.png";
import homeBg2 from "../images/bg2.png";
function Home() {
  return (
    <Container className="mb-6">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Alert variant="dark">
            <h4 className="home-heading">
              Hello! I am Deepak Mishra an Aspiring Web Developer. <br />
              Joey Tribiani says- Custard: Good, Jam: Gooood! <br /> I say-
              Designing: Good, Development: Gooood!
            </h4>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={2} lg={2} id="hide-col">
          <img src={homeBg2} className="col1-img" alt="bg2" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <div className="img-div">
            <div className="inner-img-div">
              <img
                src={Deepak}
                style={{
                  padding: "28px",
                }}
                alt="Deepak"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </Col>
        <Col sm={0} md={2} lg={2} id="hide-col">
          <img src={homeBg2} className="col2-img" alt="bg2" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={0} md={2} lg={2}></Col>
        <Col sm={0} md={8} lg={8}>
          <Alert
            variant="dark"
            style={{ textAlign: "center", marginTop: "-10px" }}
            className="quote"
          >
            <h5>Somewhere Something Incredible Is Wating To Be Known</h5>
            {/* <hr /> */}
            <h6>- Carl Sagan</h6>
          </Alert>
        </Col>
        <Col sm={0} md={2} lg={2}></Col>
      </Row>
    </Container>
  );
}

export default Home;
