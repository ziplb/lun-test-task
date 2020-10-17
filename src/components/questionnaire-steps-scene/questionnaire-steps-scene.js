import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { stepSlugInOrderList } from "../../data";
import {
  getQuestionnaireStepLink,
  getQuestionnairePersonalStepLink,
  getQuestionnaireLocationStepLink,
  getQuestionnaireSocialsStepLink,
  getQuestionnaireFavoriteAnimalStepLink,
} from "../../routes";

const firstStepSlug = stepSlugInOrderList[0];

const QuestionnaireStepsScene = () => (
  <Switch>
    <Route
      path={getQuestionnairePersonalStepLink()}
      component={() => "PersonalStep"}
      exact
    />

    <Route
      path={getQuestionnaireLocationStepLink()}
      component={() => "LocationStep"}
      exact
    />

    <Route
      path={getQuestionnaireSocialsStepLink()}
      component={() => "SocialsStep"}
      exact
    />

    <Route
      path={getQuestionnaireFavoriteAnimalStepLink()}
      component={() => "FavoriteAnimalStep"}
      exact
    />

    <Redirect to={getQuestionnaireStepLink(firstStepSlug)} />
  </Switch>
);

export default QuestionnaireStepsScene;
