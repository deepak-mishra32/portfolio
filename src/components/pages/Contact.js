import React from "react";
import "./styles/Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import ContactForm from "../ContactForm";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={12} md={6} lg={6}>
          <h4 style={{ textAlign: "center" }}>Contact Me</h4>
          <ContactForm />
        </Col>
        <Col sm={12} md={6} lg={6} className="mobile-contact">
          <Row className="pt-4">
            <a href="tel:775821962">
              <h5 className="contact-h5">
                <MdCall className="contact-icon" /> 7775821962
              </h5>
            </a>
          </Row>
          <Row className="">
            <a href="mailto:dbm3323@gmail.com">
              <h5 style={{ textTransform: "lowercase" }} className="contact-h5">
                <FaEnvelope className="contact-icon" /> dbm3323@gmail.com
              </h5>
            </a>
          </Row>
          <Row className="pb-2">
            <h5 className="contact-h5">
              <RiUserLocationFill className="contact-icon" /> Badlapur,
              Maharashtra
            </h5>
          </Row>
        </Col>
        <Col sm={12} md={6} lg={6} className="desktop-contact">
          <Row className="pt-lg-4">
            <Col sm={2} md={2} lg={2}>
              <MdCall className="contact-icon" />
            </Col>
            <Col sm={6} md={10} lg={10}>
              <a href="tel:775821962">
                <h5 className="contact-h5">7775821962</h5>
              </a>
            </Col>
          </Row>
          <Row className="pt-lg-4">
            <Col sm={2} md={2} lg={2}>
              <FaEnvelope className="contact-icon" />
            </Col>
            <Col sm={6} md={10} lg={10}>
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
          <Row className="pt-lg-4">
            <Col sm={2} md={2} lg={2}>
              <RiUserLocationFill className="contact-icon" />
            </Col>
            <Col sm={10} md={10} lg={10}>
              <h5 className="contact-h5">Badlapur, Maharashtra</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
        }}
        className="p-4"
      >
        <Col>
          <a
            href="https://www.instagram.com/deepakkk_mishra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="socialIcons" />
          </a>
          <a
            href="https://www.facebook.com/deepm3323/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="socialIcons" />
          </a>
          <a
            href="https://github.com/deepak-mishra32/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="socialIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-mishra-8b2b921b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="socialIcons" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
