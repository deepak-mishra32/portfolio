import React from "react";
import "./styles/Skills.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

function Skills() {
  return (
    <Container>
      <h4>I am proficient In,</h4>
      <Row className="mt-5">
        <Col sm={12} md={2} lg={2}>
          <h5>Python</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={20}
            label="8/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>Angular</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={10}
            label="9/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>Django</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={30}
            label="7/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>React</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={30}
            label="7/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>HTML5/CSS3</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={10}
            label="9/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>JavaScript</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={10}
            label="9/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>SQL</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={40}
            label="6/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>WordPress</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={10}
            label="9/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>C and C++</h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={30}
            label="7/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <br />
      <hr />
    </Container>
  );
}

export default Skills;
