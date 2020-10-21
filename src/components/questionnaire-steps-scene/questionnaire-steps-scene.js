import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PersonalQuestionnaireStep from "../personal-questionnaire-step/personal-questionnaire-step";
import LocationQuestionnaireStep from "../location-questionnaire-step/location-questionnaire-step";
import SocialsQuestionnaireStep from "../socials-quesitonnaire-step/socials-quesitonnaire-step";
import FavoriteAnimalQuesitonnaireStep from "../favorite-animal-questionnaire-step/favorite-animal-questionnaire-step";

import {
  getPersonalQuestionnaireStepLink,
  getLocationQuestionnaireStepLink,
  getSocialsQuestionnaireStepLink,
  getFavoriteAnimalQuestionnaireStepLink,
  getQuestionnaireFirstStepLink,
} from "../../routes";
import { useStepNavigation } from "../../hooks";
import {
  stepSlugInOrderList,
  personalStep,
  locationStep,
  socialsStep,
  favoriteAnimalStep,
} from "../../data";

const RoutesByStepSlugs = {
  [personalStep.slug]: {
    path: getPersonalQuestionnaireStepLink(),
    component: PersonalQuestionnaireStep,
  },

  [locationStep.slug]: {
    path: getLocationQuestionnaireStepLink(),
    component: LocationQuestionnaireStep,
  },

  [socialsStep.slug]: {
    path: getSocialsQuestionnaireStepLink(),
    component: SocialsQuestionnaireStep,
  },

  [favoriteAnimalStep.slug]: {
    path: getFavoriteAnimalQuestionnaireStepLink(),
    component: FavoriteAnimalQuesitonnaireStep,
  },
};

const QuestionnaireStepsScene = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, { checkIsStepFilled }] = useStepNavigation();

  return (
    <Switch>
      {stepSlugInOrderList.map((slug, index) => {
        const { path, component } = RoutesByStepSlugs[slug];
        const isFirstStep = index === 0;
        const isPrevStepFilled = checkIsStepFilled(
          stepSlugInOrderList[index - 1]
        );

        if (!isFirstStep && !isPrevStepFilled) {
          return null;
        }

        return <Route key={slug} path={path} component={component} />;
      })}

      <Redirect to={getQuestionnaireFirstStepLink()} />
    </Switch>
  );
};

export default QuestionnaireStepsScene;
