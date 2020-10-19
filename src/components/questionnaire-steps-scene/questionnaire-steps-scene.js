import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PersonalQuestionnaireStep from "../personal-questionnaire-step/personal-questionnaire-step";
import SocialsQuestionnaireStep from "../socials-quesitonnaire-step/socials-quesitonnaire-step";
import FavoriteAnimalQuesitonnaireStep from "../favorite-animal-questionnaire-step/favorite-animal-questionnaire-step";

import {
  getPersonalQuestionnaireStepLink,
  // getLocationQuestionnaireStepLink,
  getSocialsQuestionnaireStepLink,
  getFavoriteAnimalQuestionnaireStepLink,
  getQuestionnaireFirstStepLink,
} from "../../routes";
import { useDataFromRedux } from "../../hooks";

const QuestionnaireStepsScene = () => {
  const [{ isPersonalStepFilled, isSocialsStepFilled }] = useDataFromRedux();

  return (
    <Switch>
      <Route
        path={getPersonalQuestionnaireStepLink()}
        component={PersonalQuestionnaireStep}
        exact
      />

      {/* <Route
        path={getLocationQuestionnaireStepLink()}
        component={() => "LocationStep"}
        exact
      /> */}

      {isPersonalStepFilled && (
        <Route
          path={getSocialsQuestionnaireStepLink()}
          component={SocialsQuestionnaireStep}
          exact
        />
      )}

      {isSocialsStepFilled && (
        <Route
          path={getFavoriteAnimalQuestionnaireStepLink()}
          component={FavoriteAnimalQuesitonnaireStep}
          exact
        />
      )}

      <Redirect to={getQuestionnaireFirstStepLink()} />
    </Switch>
  );
};

export default QuestionnaireStepsScene;
