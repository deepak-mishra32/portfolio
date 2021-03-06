import "./styles/Home.css";
import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Deepak from "../images/Deepak.jpg";
function Home() {
  return (
    <Container className="mb-6">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Alert variant="dark">
            <h4 className="home-heading">
              Hello! I am Deepak Mishra an Aspiring Programmer. <br />
              <a
                href="https://en.wikipedia.org/wiki/Friends"
                target="_black"
                rel="noopener noreferrer"
                id="joey-a"
              >
                Joey Tribiani
              </a>{" "}
              says- Custard: Good, Jam: Gooood! <br /> I say- Designing: Good,
              Development: Gooood!
            </h4>
          </Alert>
        </Col>
      </Row>
      <Row className="justify-content-center">
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
      </Row>
      <br />
      <hr />
    </Container>
  );
}

export default Home;
