import { useHistory, useLocation } from "react-router-dom";

import { stepSlugInOrderList } from "../data";
import { getQuestionnaireStepLink, getOverviewLink } from "../routes";
import useDataFromRedux from "./use-data-from-redux";

const useStepNavigation = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { filledStepSlugList } = useDataFromRedux();

  const currentStepSlug = pathname.slice(pathname.lastIndexOf("/") + 1);
  const currentStepSlugIndex = stepSlugInOrderList.indexOf(currentStepSlug);
  const prevStepSlug = stepSlugInOrderList[currentStepSlugIndex - 1];
  const isCurrentStepLast =
    currentStepSlugIndex === stepSlugInOrderList.length - 1;
  const isCurrentStepFirst = currentStepSlugIndex === 0;

  const checkIsStepFilled = (slug) => filledStepSlugList.includes(slug);

  const checkIsFirstStep = (slug) => stepSlugInOrderList.indexOf(slug) === 0;

  const goToNextStep = () => {
    if (isCurrentStepLast) {
      push(getOverviewLink());
      return;
    }

    const nextStepLink = getQuestionnaireStepLink(
      stepSlugInOrderList[currentStepSlugIndex + 1]
    );
    push(nextStepLink);
  };

  return [
    {
      prevStepSlug,
      isCurrentStepLast,
      isCurrentStepFirst,
      currentStepSlugIndex,
    },
    { goToNextStep, checkIsFirstStep, checkIsStepFilled },
  ];
};

export default useStepNavigation;
