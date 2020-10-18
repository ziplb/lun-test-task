import React from "react";
import { NavLink } from "react-router-dom";

import cn from "classnames";

import { stepSlugInOrderList } from "../../data";
import { getQuestionnaireStepLink } from "../../routes";
import { useStepNavigation } from "../../hooks";

import "./questionnaire-progress.css";

const QuestionnaireProgress = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, { checkIsFirstStep, checkIsStepFilled }] = useStepNavigation();

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
          >
            {index}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default QuestionnaireProgress;
