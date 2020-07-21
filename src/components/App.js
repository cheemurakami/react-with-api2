import React from "react";
import Animals from "./Animals";
import "../App.css";
import Header from "./Header";
import AnimalDetail from "./AnimalDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Animals} />
          <Route exact path="/animal/:id" component={AnimalDetail} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
