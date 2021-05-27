import React from "react";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import App from "./App";
import Navigation from "./components/navbar/Navigation";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function Router() {
  return (
    <Routing>
      <Navigation />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Routing>
  );
}

export default Router;
