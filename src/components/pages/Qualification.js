import React from "react";
import "./styles/Qualification.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import School from "../images/SCHL-logo.png";
import College from "../images/HSC-logo.png";
import Degree from "../images/Degree-logo.png";
import Python from "../images/Certificates/Coursera.png";
import Django from "../images/Certificates/Django2.png";
import WordPress from "../images/Certificates/WordPress.png";
import { SiPython } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { Alert } from "react-bootstrap";

function Qualification() {
  return (
    <Container fluid>
      <Row className="justify-content-center mb-5">
        <h4 className="qualification-heading">Qualification</h4>
        <Col sm={12} md={4} lg={4}>
          <div className="qualification-col">
            <a
              href="http://www.stanthonysedu.co.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={School} alt="School-Img" className="img-fluid" /> <br />
              <h5>SSC</h5>
            </a>
            <h6>
              Completed 10th in 2016 with A grade. <br /> it was great! an
              important but unknown journey was ahead of me stepping into
              college
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
                alt="Clg-Img"
                className="img-fluid"
                style={{ padding: "10px" }}
              />{" "}
              <br />
              <h5>HSC</h5>
            </a>
            <h6>
              Completed 12th in 2018 with a grade. <br />
              got to live college life met many people, most of them temporary
              but learned a great many lessons
            </h6>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="qualification-col">
            <a
              href="https://www.rjcollege.edu.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={Degree}
                alt="Degree-Img"
                className="img-fluid"
                style={{ padding: "10px", marginBottom: "4px" }}
              />{" "}
              <br />
              <h5>Degree (BSc.IT)</h5>
            </a>
            <h6>
              Got my degree in 2021 with a grade. unfortunately we were in the
              midst of a pandemic so didn't enjoy my collge days to the fullest{" "}
              <br />
            </h6>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h5>Certifications</h5>
        <Col sm={12} md={4} lg={4}>
          <Alert variant="dark" className="certificate-alert">
            <SiPython
              style={{
                fontSize: "56px",
                marginLeft: "100px",
                padding: "10px",
              }}
            />
            <h6>Python for everybody</h6>
            <hr />
            <a href={Python} rel="noopener noreferrer" target="_blank">
              <Button variant="outline-dark" className="certificate-btn">
                View
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Alert variant="dark" className="certificate-alert">
            <DiDjango
              style={{
                fontSize: "56px",
                marginLeft: "100px",
                padding: "0px",
              }}
            />
            <h6>Django for everybody</h6>
            <hr />
            <a href={Django} rel="noopener noreferrer" target="_blank">
              <Button variant="outline-dark" className="certificate-btn">
                View
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Alert variant="dark" className="certificate-alert">
            <DiWordpress
              style={{
                fontSize: "56px",
                marginLeft: "100px",
                padding: "10px",
              }}
            />
            <h6>WordPress Beginner to Advance</h6>
            <hr />
            <a href={WordPress} rel="noopener noreferrer" target="_blank">
              <Button variant="outline-dark" className="certificate-btn">
                View
              </Button>
            </a>
          </Alert>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Qualification;
