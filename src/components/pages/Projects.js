import React from "react";
import "./styles/Projects.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import AbhinavCreations from "../images/Projects/AbhinavCreations.png";
import stoxforwealth from "../images/Projects/stoxforwealth.png";
import DigitalUplifts from "../images/Projects/DigitalUplifts.png";
import FourConnect from "../images/Projects/FourConnect.png";
import Eustache from "../images/Projects/eustache-institute.png";
import Fabulife from "../images/Projects/fabulifeLogo.webp";
import RegalMerchant from "../images/Projects/regalMerchant.png";
import PerfectStockSolution from "../images/Projects/PerfectStockSolution.png";
import { Button } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <h4 style={{ textAlign: "center" }}>Some of my work</h4>
      <Row className="mt-4">
        <Col sm={12} md={4} lg={4} className="Proj-last-col">
          <Alert variant="dark">
            <img
              src={stoxforwealth}
              alt="StoxforWealth-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>Stox For Wealth</h5>
            <hr />
            <h5>
              Stock Market Advisory <br /> Trading Advice <br /> customer growth
            </h5>
            <h6>Tech stack: CMS-Wordpress/SQL</h6>
            <a
              href="http://www.stoxforwealth.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Alert
            variant="dark"
            style={{
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <img
              src={Fabulife}
              alt="FabuLife-Img"
              className="img-fluid"
              id="Project-img"
              style={{ width: "250px", height: "150px" }}
            />
            <h5>FabuLife</h5>
            <hr />
            <h5>
              Herbalife Associate And Weight Management Center In Vadodara
            </h5>
            <h6>Tech Stack- ReactJs, HTML, CSS(SCSS)</h6>
            <a
              href="https://www.fabulife.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4} className="Proj-last-col">
          <Alert variant="dark">
            <img
              src={Eustache}
              alt="Eustache-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>Eustache Institute</h5>
            <hr />
            <h5>
              A Cosmetic Surgery Institute <br /> Online Consultancy <br />{" "}
              Dr.Elena Eustache
            </h5>
            <h6>Tech Stack- ReactJs, HTML, CSS(SCSS)</h6>
            <a
              href="https://eustache-institute.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <Alert
            variant="dark"
            style={{
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <img
              src={PerfectStockSolution}
              alt="perffectStockSolution-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>Perfect Stock Soltuion</h5>
            <hr />
            <h5>
              Providing Stock Solution to Users <br /> Maximizing their Profits
            </h5>
            <h6>Tech stack: CMS-Wordpress/SQL</h6>
            <a
              href="https://perfectstocksolution.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4} className="Proj-last-col">
          <Alert variant="dark">
            <img
              src={FourConnect}
              alt="Four Connect-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>FourConnect</h5>
            <hr />
            <h5>
              A simple game <br /> First player to connect 4 dots in a
              row/column wins{" "}
            </h5>
            <h6>Tech Stack: javascript,HTML,CSS</h6>
            <a
              href="https://deepak-mishra32.github.io/deep332.github.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Alert variant="dark">
            <img
              src={RegalMerchant}
              alt="RegalMerchant-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>Regal Merchant</h5>
            <hr />
            <h5>
              Real Estate Agency
              <br /> Buy Sell Rent <br /> Financial Advice{" "}
            </h5>
            <h6>Tech stack: CMS-Wordpress/SQL</h6>
            <a
              href="http://www.regalmerchant.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <Alert
            variant="dark"
            style={{
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <img
              src={DigitalUplifts}
              alt="DigitalUplifts-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>Digital Uplifts</h5>
            <hr />
            <h5>
              A Digital Marketing Agency <br /> Social Media manager <br />{" "}
              graphic desgining{" "}
            </h5>
            <h6>Tech stack: CMS-Wordpress/SQL</h6>
            <a
              href="https://digitaluplifts.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Alert variant="dark">
            <img
              src={AbhinavCreations}
              alt="AbbhinavCreation-Img"
              className="img-fluid"
              id="Project-img"
            />
            <h5>Abhinav Creations</h5>
            <hr />
            <h5>
              A digital marketing agency <br /> Card-Brochure printing <br />{" "}
              social media management{" "}
            </h5>
            <h6>Tech stack: CMS-Wordpress/SQL</h6>
            <a
              href="http://www.abhinavcreations.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="dark" size="sm" className="project-btn">
                View Project
              </Button>
            </a>
          </Alert>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Projects;
