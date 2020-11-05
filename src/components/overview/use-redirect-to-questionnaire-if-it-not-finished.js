import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { getQuestionnaireLink } from "../../routes";
import { useCheckIsQuestionnaireFinished } from "../../hooks";

const useRedirectToQuestionnaireIfItNotFinished = () => {
  const isFinished = useCheckIsQuestionnaireFinished();
  const { replace } = useHistory();

  useLayoutEffect(() => {
    if (!isFinished) {
      replace(getQuestionnaireLink());
    }
  }, [isFinished, replace]);
};

export default useRedirectToQuestionnaireIfItNotFinished;
