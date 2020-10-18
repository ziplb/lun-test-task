import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { stepSlugInOrderList } from "../data";
import { getQuestionnaireLink } from "../routes";

const useRedirectToQuestionnaireIfItNotFinished = () => {
  const filledStepSlugList = useSelector((state) => state.filledStepSlugList);
  const { replace } = useHistory();

  const isFinished = stepSlugInOrderList.length === filledStepSlugList.length;

  useLayoutEffect(() => {
    if (!isFinished) {
      replace(getQuestionnaireLink());
    }
  }, [isFinished, replace]);
};

export default useRedirectToQuestionnaireIfItNotFinished;
