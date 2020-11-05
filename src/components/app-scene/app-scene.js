import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Questionnaire from "../questionnaire/questionnaire";
import Overview from "../overview/overview";

import { getQuestionnaireLink, getOverviewLink } from "../../routes";
import { useCheckIsQuestionnaireFinished } from "../../hooks";

const AppScene = () => {
  const isQuestionnaireFinished = useCheckIsQuestionnaireFinished();

  return (
    <Switch>
      <Route path={getOverviewLink()} component={Overview} exact />
      {!isQuestionnaireFinished && (
        <Route path={getQuestionnaireLink()} component={Questionnaire} />
      )}

      <Redirect
        to={
          isQuestionnaireFinished ? getOverviewLink() : getQuestionnaireLink()
        }
      />
    </Switch>
  );
};

export default AppScene;
