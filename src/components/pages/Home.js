import "./styles/Home.css";
import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Deepak from "../images/Deepak.JPG";
function Home() {
  return (
    <Container className="mb-4">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Alert variant="dark">
            <h4 className="home-heading">
              Hello! I am Deepak Mishra and I am fond of Web Development. <br />
              Joey Tribiani says- Custard: Good, Jam: Gooood! <br /> I say-
              Designing: Good, Development: Gooood!
            </h4>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={2} lg={2}>
          2
        </Col>
        <Col sm={12} md={8} lg={8}>
          <div className="img-div">
            <div className="inner-img-div">
              <img
                src={Deepak}
                style={{
                  // height: "460px",
                  padding: "28px",
                  // alignItems: "flex-end",
                }}
                alt="Deepak"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </Col>
        <Col sm={0} md={2} lg={2}>
          2
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
