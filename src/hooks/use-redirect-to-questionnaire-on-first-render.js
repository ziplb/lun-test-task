import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { useStepNavigation } from "../hooks";
import { getQuestionnaireLink } from "../routes";

const useRedirectToQuestionnaireOnFirstRender = () => {
  const { replace } = useHistory();
  const [{ isCurrentStepFirst }] = useStepNavigation();

  useLayoutEffect(
    () => {
      if (!isCurrentStepFirst) {
        replace(getQuestionnaireLink());
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default useRedirectToQuestionnaireOnFirstRender;
