import React from "react";
import "./styles/Skills.css";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { DiPython, DiReact, DiWordpress } from "react-icons/di";
import { SiDjango, SiJavascript } from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";

function Skills() {
  return (
    <Container>
      <h4>I am proficient In,</h4>
      <Row className="mt-5">
        <Col sm={12} md={2} lg={2}>
          <h5>
            Python <DiPython className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={80}
            label="8/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            Django <SiDjango className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={70}
            label="7/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            ReactJs <DiReact className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={70}
            label="7/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            HTML <FaHtml5 className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={90}
            label="9/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            CSS <FaCss3 className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={80}
            label="8/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            JavaScript <SiJavascript className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={80}
            label="8/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            SQL <AiOutlineConsoleSql className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={70}
            label="7/10"
            className="progress-bar"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={2} lg={2}>
          <h5>
            WordPress <DiWordpress className="skill-icon" />
          </h5>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <ProgressBar
            variant="dark"
            animated
            now={80}
            label="8/10"
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
            now={70}
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
