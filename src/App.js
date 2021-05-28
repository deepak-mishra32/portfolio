import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./components/pages/Home";
import Navigation from "./components/navbar/Navigation";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Qualification from "./components/pages/Qualification";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Acheivements from "./components/pages/Acheivements";
import FixedMenu from "./components/FixedMenu";

function App() {
  return (
    <div className="App">
      <div id="nav">
        <Navigation />
      </div>
      <Container fluid id="home">
        <Row>
          <Col lg={3} id="side-nav">
            <FixedMenu />
          </Col>
          <Col lg={9} className="pt-4">
            <div id="home" style={{ height: "100vh" }}>
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <div id="qualification">
              <Qualification />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="achievements">
              <Acheivements />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
