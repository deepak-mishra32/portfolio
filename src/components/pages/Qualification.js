import React from "react";
import "./styles/Qualification.css";
import { Col, Container, Row } from "react-bootstrap";
import School from "../images/SCHL-logo.png";
import College from "../images/HSC-logo.png";
import Degree from "../images/Degree-logo.png";

function Qualification() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h4 className="qualification-heading">Qualification</h4>
        <Col sm={12} md={4} lg={4}>
          <div className="qualification-col">
            <a
              href="http://www.stanthonysedu.co.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={School} alt="School-Img" className="img-fluid" /> <br />
            </a>
            <h5>SSC</h5>
            <h6>
              Passed out 10th in 2016 with A grade. <br /> it was great! an
              important but unknow journey was ahead of me stepping into college
            </h6>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="qualification-col">
            <a
              href="https://www.chmcollege.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={College}
                alt="School-Img"
                className="img-fluid"
                style={{ padding: "10px" }}
              />{" "}
              <br />
            </a>
            <h5>HSC</h5>
            <h6>
              Passed out 12th in 2018 with a grade <br />
              got to live college live met many people most of them temporary
              learned a great many lessons
            </h6>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="qualification-col">
            <img src={Degree} alt="School-Img" /> <br />
            <h5>Degree</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Qualification;
