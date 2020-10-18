import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { useStepNavigation } from "../hooks";
import { getQuestionnaireStepLink } from "../routes";

const useRedirectToQuestionnaireOnFirstRender = () => {
  const { replace } = useHistory();
  const [{ firstStepSlug, isCurrentStepFirst }] = useStepNavigation();

  useLayoutEffect(
    () =>
      !isCurrentStepFirst && replace(getQuestionnaireStepLink(firstStepSlug)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default useRedirectToQuestionnaireOnFirstRender;
