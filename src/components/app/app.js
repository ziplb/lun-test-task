import React from "react";
import { Switch, Route } from "react-router-dom";

import Questionnaire from "../questionnaire/questionnaire";
import Overview from "../overview/overview";

import { getQuestionnaireLink, getOverviewLink } from "../../routes";

import "./app.css";

const AppScene = () => (
  <Switch>
    <Route path={getQuestionnaireLink()} component={Questionnaire} />
    <Route path={getOverviewLink()} component={Overview} exact />
  </Switch>
);

const App = () => (
  <div className="App">
    <div className="App-content">
      <AppScene />
    </div>
  </div>
);

export default App;
