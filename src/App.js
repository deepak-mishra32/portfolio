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
            <div id="home" className="home-height">
              <Home />
            </div>
            <div id="about" className="home-height">
              <About />
            </div>
            <div id="qualification" className="home-height">
              <Qualification />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects" className="home-height">
              <Projects />
            </div>
            <div id="achievements" className="home-height">
              <Acheivements />
            </div>
            <div id="contact" className="home-height">
              <Contact />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
