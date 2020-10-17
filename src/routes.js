import {
  personalStep,
  locationStep,
  socialsStep,
  favoriteAnimalStep,
} from "./data";

export const getIndexLink = () => "/";
export const getOverviewLink = () => "/overview";

export const getQuestionnaireLink = () => "/questionnaire";
export const getQuestionnaireStepLink = (step) =>
  `${getQuestionnaireLink()}/${step}`;

export const getPersonalQuestionnaireStepLink = () =>
  getQuestionnaireStepLink(personalStep.slug);
export const getLocationQuestionnaireStepLink = () =>
  getQuestionnaireStepLink(locationStep.slug);
export const getSocialsQuestionnaireStepLink = () =>
  getQuestionnaireStepLink(socialsStep.slug);
export const getFavoriteAnimalQuestionnaireStepLink = () =>
  getQuestionnaireStepLink(favoriteAnimalStep.slug);
