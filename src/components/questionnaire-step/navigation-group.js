import React from "react";

import { Link } from "react-router-dom";

import Button from "../button/button";
import { IconAngleArrowLeft, IconAngleArrowRight } from "../icons";

import { getQuestionnaireStepLink } from "../../routes";
import { useStepNavigation } from "../../hooks";

const QuestionnaireStepNavigationGroup = ({ isNextDisabled }) => {
  const [{ prevStepSlug, isCurrentStepLast }] = useStepNavigation();

  return (
    <div className="QuestionnaireStep-navigationGroup">
      <div className="QuestionnaireStep-navigationItem">
        {prevStepSlug && (
          <Button
            title="Назад"
            prependIcon={<IconAngleArrowLeft />}
            component={Link}
            to={getQuestionnaireStepLink(prevStepSlug)}
          />
        )}
      </div>

      <div className="QuestionnaireStep-navigationItem">
        <Button
          title={isCurrentStepLast ? "Завершить" : "Вперед"}
          appendIcon={<IconAngleArrowRight />}
          isPrimary={isCurrentStepLast}
          isDisabled={isNextDisabled}
        />
      </div>
    </div>
  );
};

export default QuestionnaireStepNavigationGroup;
