import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PersonalQuestionnaireStep from "../personal-questionnaire-step/personal-questionnaire-step";
import SocialsQuestionnaireStep from "../socials-quesitonnaire-step/socials-quesitonnaire-step";

import { stepSlugInOrderList } from "../../data";
import {
  getQuestionnaireStepLink,
  getPersonalQuestionnaireStepLink,
  getLocationQuestionnaireStepLink,
  getSocialsQuestionnaireStepLink,
  getFavoriteAnimalQuestionnaireStepLink,
} from "../../routes";

const firstStepSlug = stepSlugInOrderList[0];

const QuestionnaireStepsScene = () => (
  <Switch>
    <Route
      path={getPersonalQuestionnaireStepLink()}
      component={PersonalQuestionnaireStep}
      exact
    />

    <Route
      path={getLocationQuestionnaireStepLink()}
      component={() => "LocationStep"}
      exact
    />

    <Route
      path={getSocialsQuestionnaireStepLink()}
      component={SocialsQuestionnaireStep}
      exact
    />

    <Route
      path={getFavoriteAnimalQuestionnaireStepLink()}
      component={() => "FavoriteAnimalStep"}
      exact
    />

    <Redirect to={getQuestionnaireStepLink(firstStepSlug)} />
  </Switch>
);

export default QuestionnaireStepsScene;
