import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { stepSlugInOrderList } from "../data";
import { getQuestionnaireLink } from "../routes";
import { useFilledStepSlugList } from "../store";

const useRedirectToQuestionnaireIfItNotFinished = () => {
  const filledStepSlugList = useFilledStepSlugList();
  const { replace } = useHistory();

  const isFinished = stepSlugInOrderList.length === filledStepSlugList.length;

  useLayoutEffect(() => {
    if (!isFinished) {
      replace(getQuestionnaireLink());
    }
  }, [isFinished, replace]);
};

export default useRedirectToQuestionnaireIfItNotFinished;
