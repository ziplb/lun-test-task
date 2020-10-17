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

export const getQuestionnairePersonalStepLink = () =>
  getQuestionnaireStepLink(personalStep.slug);
export const getQuestionnaireLocationStepLink = () =>
  getQuestionnaireStepLink(locationStep.slug);
export const getQuestionnaireSocialsStepLink = () =>
  getQuestionnaireStepLink(socialsStep.slug);
export const getQuestionnaireFavoriteAnimalStepLink = () =>
  getQuestionnaireStepLink(favoriteAnimalStep.slug);
