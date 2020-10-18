import { useLayoutEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { getQuestionnaireStepLink } from "../routes";
import { stepSlugInOrderList } from "../data";

const useRedirectToQuestionnaireOnFirstRender = () => {
  const { pathname } = useLocation();
  const { replace } = useHistory();

  useLayoutEffect(() => {
    const firstStepLink = getQuestionnaireStepLink(stepSlugInOrderList[0]);
    if (pathname === firstStepLink) {
      return;
    }

    replace(firstStepLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useRedirectToQuestionnaireOnFirstRender;
