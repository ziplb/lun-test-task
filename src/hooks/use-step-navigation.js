import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { stepSlugInOrderList } from "../data";
import { getQuestionnaireStepLink, getOverviewLink } from "../routes";
import { useFinishedStepSlugList } from "../store";

const useStepNavigation = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const finishedStepSlugList = useFinishedStepSlugList();

  const currentStepSlug = pathname.slice(pathname.lastIndexOf("/") + 1);
  const currentStepSlugIndex = stepSlugInOrderList.indexOf(currentStepSlug);
  const prevStepSlug = stepSlugInOrderList[currentStepSlugIndex - 1];
  const isCurrentStepLast =
    currentStepSlugIndex === stepSlugInOrderList.length - 1;
  const isCurrentStepFirst = currentStepSlugIndex === 0;

  const checkIsFirstStep = (slug) => stepSlugInOrderList.indexOf(slug) === 0;

  const goToNextStep = () => {
    if (isCurrentStepLast) {
      push(getOverviewLink());
      return;
    }

    const nextStepLink = getQuestionnaireStepLink(
      stepSlugInOrderList[currentStepSlugIndex + 1]
    );
    push(nextStepLink, { isDirect: true });
  };

  const checkIsStepFinished = useCallback(
    (stepSlug) => finishedStepSlugList.includes(stepSlug),
    [finishedStepSlugList]
  );

  return [
    {
      prevStepSlug,
      isCurrentStepLast,
      isCurrentStepFirst,
      currentStepSlug,
      currentStepSlugIndex,
    },
    { goToNextStep, checkIsFirstStep, checkIsStepFinished },
  ];
};

export default useStepNavigation;
