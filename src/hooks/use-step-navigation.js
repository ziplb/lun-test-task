import { useHistory, useLocation } from "react-router-dom";

import { stepSlugInOrderList } from "../data";
import { getQuestionnaireStepLink, getOverviewLink } from "../routes";

const useStepNavigation = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const currentStepSlug = pathname.slice(pathname.lastIndexOf("/") + 1);
  const currentStepSlugIndex = stepSlugInOrderList.indexOf(currentStepSlug);
  const prevStepSlug = stepSlugInOrderList[currentStepSlugIndex - 1];
  const isCurrentStepLast =
    currentStepSlugIndex === stepSlugInOrderList.length - 1;

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
    { prevStepSlug, isCurrentStepLast, currentStepSlugIndex },
    { goToNextStep },
  ];
};

export default useStepNavigation;
