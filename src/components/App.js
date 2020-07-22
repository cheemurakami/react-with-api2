import React from "react";
import Animals from "./Animals";
import "../App.css";
import Header from "./Header";
import AnimalDetail from "./AnimalDetail";
import AnimalCreateForm from "./AnimalCreateForm";
import AnimalEditForm from "./AnimalEditForm";
import MissionStatement from "./MissionStatement";
// import MissionStatement2 from "./MissionStatement2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Animals} />
          <Route exact path="/animal/:id" component={AnimalDetail} />
          <Route exact path="/newanimals" component={AnimalCreateForm} />
          <Route exact path="/editanimals" component={AnimalEditForm} />
          <Route exact path="/missionstatement" component={MissionStatement}/>
          {/* <Route exact path="/missionstatement" component={MissionStatement2}/> */}
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
