import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { getQuestionnaireLink, getOverviewLink } from "../../routes";

import "./app.css";

const AppScene = () => (
  <Switch>
    <Route path={getOverviewLink()} component={() => <>Overview</>} exact />
    <Route path={getQuestionnaireLink()} component={() => <>Questionnaire</>} />

    <Redirect to={getQuestionnaireLink()} />
  </Switch>
);

const App = () => (
  <div className="App">
    <AppScene />
  </div>
);

export default App;
