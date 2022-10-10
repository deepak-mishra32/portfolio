import React from "react";
import "./styles/WorkExp.css";
import { Container, Row, Col } from "react-bootstrap";

function WorkExp() {
  return (
    <Container className="mt-3 mb-3">
      <h4>Work Experience</h4>
      <div className="exp-mobile">
        <Row className="mt-4">
          <Col sm={12} md={3} lg={3}>
            Aug-2021 to Present
          </Col>
          <Col sm={12} md={9} lg={9}>
            Tata Consultancy Services
            <ul>
              <li>
                <Row>
                  <Col sm={10} md={8} lg={9}>
                    <h6 className="job-des">
                      Programmer{" "}
                      <span className="newPostionDuration">
                        (Aug-22 to Present)
                      </span>
                    </h6>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col sm={10} md={8} lg={9}>
                    <h6 className="job-des">
                      Graduate Trainee{" "}
                      <span className="newPostionDuration">
                        (Aug-21 to Aug-22)
                      </span>
                    </h6>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="mt-4">
          <Col sm={3} md={3} lg={3}>
            may-2021 to may-2021
          </Col>
          <Col sm={3} md={9} lg={9}>
            {" "}
            Intern Graphic Desinger at Dwish Nidhi Limited
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} md={3} lg={3}>
            Feb-2021 to May-2021
          </Col>
          <Col sm={3} md={9} lg={9}>
            {" "}
            Intern Web developer at Abhinav creations
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} md={3} lg={3}>
            Aug-2020 to jan-2021
          </Col>
          <Col sm={3} md={9} lg={9}>
            {" "}
            Freelance Web developer
          </Col>
        </Row>
        <hr />
      </div>
      <div className="exp-desktop">
        <Row className="p-4">
          <Col sm={2} md={2} lg={2}>
            <h6 className="duration">
              Aug-2021 to <br /> Present
            </h6>
          </Col>
          <Col sm={1} md={2} lg={1}>
            <Row>
              <div className="div-round">4</div>
            </Row>
          </Col>
          <Col sm={10} md={8} lg={9}>
            <h5 className="job-des">Tata Consultacy Services</h5>
            <ul>
              <li>
                <Row>
                  <Col sm={10} md={8} lg={9}>
                    <h6 className="job-des">Programmer (Aug-22 to Present)</h6>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col sm={10} md={8} lg={9}>
                    <h6 className="job-des">
                      Graduate Trainee (Aug-21 to Aug-22)
                    </h6>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="p-4">
          <Col sm={2} md={2} lg={2}>
            <h6 className="duration">
              May-2021 to <br /> May-2021
            </h6>
            <p>(1 Month)</p>
          </Col>
          <Col sm={1} md={2} lg={1}>
            <Row>
              <div className="div-round">3</div>
            </Row>
          </Col>
          <Col sm={10} md={8} lg={9}>
            <h5 className="job-des">
              Intern Graphic Designer At Dwisha nidhi limited
            </h5>
          </Col>
        </Row>
        <Row className="p-4">
          <Col sm={2} md={2} lg={2}>
            <h6 className="duration">
              Feb-2021 to <br /> May-2021{" "}
            </h6>
            <p>(2 Months)</p>
          </Col>
          <Col sm={1} md={2} lg={1}>
            <Row>
              <div className="div-round">2</div>
            </Row>
          </Col>
          <Col sm={10} md={8} lg={9}>
            <h5 className="job-des">
              Intern Web Developer at abhinav creations
            </h5>
          </Col>
        </Row>
        <Row className="p-4">
          <Col sm={2} md={2} lg={2}>
            <h6 className="duration">
              Aug-2020 to <br />
              Jan-2021
            </h6>
            <p>(6 Months)</p>
          </Col>
          <Col sm={1} md={2} lg={1}>
            <Row>
              <div className="div-round">1</div>
            </Row>
          </Col>
          <Col sm={10} md={8} lg={9}>
            <h5 className="job-des">FreeLance Web Developer</h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default WorkExp;
