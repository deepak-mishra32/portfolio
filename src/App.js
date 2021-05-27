import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Container className="mt-4">
      <Home />
      <About />
      <Contact />
    </Container>
  );
}

export default App;
