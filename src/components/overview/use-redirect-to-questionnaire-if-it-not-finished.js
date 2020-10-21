import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { stepSlugInOrderList } from "../../data";
import { getQuestionnaireLink } from "../../routes";
import { useFinishedStepSlugList } from "../../store";

const useRedirectToQuestionnaireIfItNotFinished = () => {
  const finishdedStepSlugList = useFinishedStepSlugList();
  const { replace } = useHistory();

  const isFinished =
    stepSlugInOrderList.length === finishdedStepSlugList.length;

  useLayoutEffect(() => {
    if (!isFinished) {
      replace(getQuestionnaireLink());
    }
  }, [isFinished, replace]);
};

export default useRedirectToQuestionnaireIfItNotFinished;
