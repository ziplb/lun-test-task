import React from "react";
import { NavLink } from "react-router-dom";

import cn from "classnames";

import { stepSlugInOrderList } from "../../data";
import { getQuestionnaireStepLink } from "../../routes";
import { useStepNavigation, useDataFromRedux } from "../../hooks";

import "./questionnaire-progress.css";

const QuestionnaireProgress = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, { checkIsFirstStep }] = useStepNavigation();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { checkIsStepFilled }] = useDataFromRedux();

  const checkIsDisabled = (slug) => {
    if (checkIsFirstStep(slug)) {
      return;
    }

    const prevSlugIndex = stepSlugInOrderList.indexOf(slug) - 1;
    return !checkIsStepFilled(stepSlugInOrderList[prevSlugIndex]);
  };

  return (
    <div className="QuestionnaireProgress">
      {stepSlugInOrderList.map((slug, index) => (
        <div key={slug} className="QuestionnaireProgress-item">
          <NavLink
            to={getQuestionnaireStepLink(slug)}
            className={cn("QuestionnaireProgress-link", {
              "QuestionnaireProgress-link--disabled": checkIsDisabled(slug),
            })}
            activeClassName="QuestionnaireProgress-link--active"
            tabIndex={checkIsDisabled(slug) ? -1 : 0}
          >
            {index + 1}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default QuestionnaireProgress;
