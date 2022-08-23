import React from "react";
import "./styles/About.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import WebDev from "../images/SVG/WebDevlopment.svg";
import WebDeg from "../images/SVG/WebDesign.svg";
import Programmer from "../images/SVG/Programmer.svg";
import Trek from "../images/SVG/Trek.svg";

function About() {
  return (
    <Container>
      <Row>
        <Col sm={0} md={2} lg={2}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="blob"
          >
            <path
              fill="#0d7377"
              d="M38.2,-40.1C53.9,-32.3,74.2,-24.5,78.8,-11.9C83.3,0.6,72.1,17.9,60,30.5C47.8,43.1,34.6,51.1,19.2,59.7C3.8,68.2,-13.8,77.4,-31.2,75.5C-48.6,73.7,-65.7,60.7,-76.1,43.6C-86.5,26.4,-90.1,4.9,-86.5,-15.2C-83,-35.4,-72.2,-54.3,-56.6,-62.2C-40.9,-70.1,-20.5,-67,-4.6,-61.5C11.2,-56,22.4,-48,38.2,-40.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </Col>
        <Col sm={10} md={8} lg={8}>
          <Alert
            variant="dark"
            style={{ textAlign: "center" }}
            className="quote"
          >
            <h5>Somewhere Something Incredible Is Waiting To Be Known</h5>
            <hr />
            <h6>- Carl Sagan</h6>
          </Alert>
        </Col>
        <Col sm={0} md={2} lg={2}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "Scale(-1)" }}
            className="blob"
          >
            <path
              fill="#0d7377"
              d="M38.2,-40.1C53.9,-32.3,74.2,-24.5,78.8,-11.9C83.3,0.6,72.1,17.9,60,30.5C47.8,43.1,34.6,51.1,19.2,59.7C3.8,68.2,-13.8,77.4,-31.2,75.5C-48.6,73.7,-65.7,60.7,-76.1,43.6C-86.5,26.4,-90.1,4.9,-86.5,-15.2C-83,-35.4,-72.2,-54.3,-56.6,-62.2C-40.9,-70.1,-20.5,-67,-4.6,-61.5C11.2,-56,22.4,-48,38.2,-40.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="Quote-info">
            That Above Quote by the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Carl_Sagan"
              target="_black"
              rel="noopener noreferrer"
            >
              American Astronomer
            </a>{" "}
            is by which I live my life, always ready to explore, learn and
            discover new things and that is the reason i got into programming
            and started building websites, later which was just a curosity
            turned into a hobby. so, here i am today.
          </h5>
        </Col>
      </Row>
      <h4 className="interest">My Interests</h4>
      <hr className="hr-line" />
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col sm={12} md={3} lg={3} className="p-4">
            <Row>
              <img
                src={WebDev}
                id="intrest-img"
                alt="Web-Development"
                className="img-fluid"
              />
            </Row>
            <Row>
              <h6 id="intrest-heading">Web Development</h6>
              <hr id="about-col" />
              <h6>Design and develop responsive websites and web apps</h6>
            </Row>
          </Col>
          <Col sm={12} md={3} lg={3} className="p-4">
            <Row>
              <img
                src={WebDeg}
                id="intrest-img"
                alt="Web-Design"
                className="img-fluid"
              />
            </Row>
            <Row>
              <h6 id="intrest-heading">Graphic Design</h6>
              <hr id="about-col" />
              <h6>Designing logo, banner, brochure and social media posts</h6>
            </Row>
          </Col>
          <Col sm={12} md={3} lg={3} className="p-4">
            <Row>
              <img
                src={Programmer}
                id="intrest-img"
                alt="Programmer"
                className="img-fluid"
              />
            </Row>
            <Row>
              <h6 id="intrest-heading">Software Development</h6>
              <hr id="about-col" />
              <h6>
                Still working on this, but i believe soon will be able to do so
              </h6>
            </Row>
          </Col>
          <Col sm={12} md={3} lg={3} className="p-4">
            <Row>
              <img
                src={Trek}
                id="intrest-img"
                alt="Trekking"
                className="img-fluid"
              />
            </Row>
            <Row>
              <h6 id="intrest-heading">Trekking</h6>
              <hr id="about-col" />
              <h6>
                to enjoy the greatness of mother nature, and my free therapy
              </h6>
            </Row>
          </Col>
        </Row>
      </div>
      <br />
      <hr />
    </Container>
  );
}

export default About;
