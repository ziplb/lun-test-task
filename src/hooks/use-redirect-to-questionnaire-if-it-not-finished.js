import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { stepSlugInOrderList } from "../data";
import { getQuestionnaireLink } from "../routes";
import { useDataFromRedux } from "../hooks";

const useRedirectToQuestionnaireIfItNotFinished = () => {
  const [{ filledStepSlugList }] = useDataFromRedux();
  const { replace } = useHistory();

  const isFinished = stepSlugInOrderList.length === filledStepSlugList.length;

  useLayoutEffect(() => {
    if (!isFinished) {
      replace(getQuestionnaireLink());
    }
  }, [isFinished, replace]);
};

export default useRedirectToQuestionnaireIfItNotFinished;
