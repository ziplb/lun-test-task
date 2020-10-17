import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Questionnaire from "../questionnaire/questionnaire";

import { getQuestionnaireLink, getOverviewLink } from "../../routes";

import "./app.css";

const AppScene = () => (
  <Switch>
    <Route path={getQuestionnaireLink()} component={Questionnaire} />
    <Route path={getOverviewLink()} component={() => <>Overview</>} exact />

    <Redirect to={getQuestionnaireLink()} />
  </Switch>
);

const App = () => (
  <div className="App">
    <AppScene />
  </div>
);

export default App;
