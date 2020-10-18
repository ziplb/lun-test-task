import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PersonalQuestionnaireStep from "../personal-questionnaire-step/personal-questionnaire-step";
import SocialsQuestionnaireStep from "../socials-quesitonnaire-step/socials-quesitonnaire-step";
import FavoriteAnimalQuesitonnaireStep from "../favorite-animal-questionnaire-step/favorite-animal-questionnaire-step";

import {
  getPersonalQuestionnaireStepLink,
  getLocationQuestionnaireStepLink,
  getSocialsQuestionnaireStepLink,
  getFavoriteAnimalQuestionnaireStepLink,
  getQuestionnaireFirstStepLink,
} from "../../routes";

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
      component={FavoriteAnimalQuesitonnaireStep}
      exact
    />

    <Redirect to={getQuestionnaireFirstStepLink()} />
  </Switch>
);

export default QuestionnaireStepsScene;
