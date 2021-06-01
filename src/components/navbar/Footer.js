import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid>
      <div>
        <div className="footer-div">
          <h5 className="footer-text-desktop">
            <hr style={{ marginLeft: "56px", width: "95%" }} />
            Copyright &#169; {new Date().getFullYear()} | all rights reserved{" "}
            <br />
            Designed and developed by Deepak Mishra
          </h5>
          <h5 className="footer-text-mobile">
            Copyright &#169; {new Date().getFullYear()} | all rights reserved
          </h5>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
