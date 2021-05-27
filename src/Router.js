import React from "react";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./components/pages/About";
import Acheivements from "./components/pages/Acheivements";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Qualification from "./components/pages/Qualification";
import Skills from "./components/pages/Skills";

function Router() {
  return (
    <Routing>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/qualification" exact component={Qualification} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/achievements" exact component={Acheivements} />
      </Switch>
    </Routing>
  );
}

export default Router;
