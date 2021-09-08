import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./components/pages/Home";
import Navigation from "./components/navbar/Navigation";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Qualification from "./components/pages/Qualification";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import WorkExp from "./components/pages/WorkExp";
import FixedMenu from "./components/FixedMenu";
import Footer from "./components/navbar/Footer";

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
            <div id="projects">
              <Projects />
            </div>
            <div id="skills" className="home-height">
              <Skills />
            </div>
            <div id="workexp" className="home-height">
              <WorkExp />
            </div>
            <div id="contact" className="home-height">
              <Contact />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
