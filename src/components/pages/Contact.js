import React from "react";
import "./styles/Contact.css";
import { Col, Container, Row, Form } from "react-bootstrap";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";

function Contact() {
  return (
    <Container>
      <h4>Contact Me</h4>
      <Row className="mt-5">
        <Col sm={12} md={6} lg={6}>
          <div
            style={{
              border: "2px solid #14ffec",
              height: "30vh",
              textAlign: "center",
            }}
          >
            Form
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Row>
            <Col sm={12} md={2} lg={2}>
              <MdCall className="contact-icon" />
            </Col>
            <Col sm={12} md={10} lg={10}>
              <a href="tel:775821962">
                <h5 className="contact-h5">7775821962</h5>
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={2} lg={2}>
              <FaEnvelope className="contact-icon" />
            </Col>
            <Col sm={12} md={10} lg={10}>
              <a href="mailto:dbm3323@gmail.com">
                <h5
                  style={{ textTransform: "lowercase" }}
                  className="contact-h5"
                >
                  dbm3323@gmail.com
                </h5>
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={2} lg={2}>
              <RiUserLocationFill className="contact-icon" />
            </Col>
            <Col sm={12} md={10} lg={10}>
              <h5 className="contact-h5">Badlapur, Maharashtra</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
