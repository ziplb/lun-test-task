import React from "react";
import cn from "classnames";

import Form from "../form/form";
import QuestionnaireStepNavigationGroup from "./navigation-group";
import QuestionnairePrompt from "../questionnaire-prompt/questionnaire-prompt";

import { useStepNavigation } from "../../hooks";
import "./questionnaire-step.css";

const QuestionnaireStep = ({
  step,
  children,
  isWide,
  isNextDisabled,
  hasUnsavedData,
  onSubmit,
}) => {
  const [{ currentStepSlugIndex }] = useStepNavigation();

  return (
    <div
      className={cn("QuestionnaireStep", {
        "QuestionnaireStep--wide": isWide,
      })}
    >
      <QuestionnairePrompt hasUnsavedData={hasUnsavedData} />

      <h2 className="QuestionnaireStep-title">
        {currentStepSlugIndex + 1}. {step.title}
      </h2>

      <Form onSubmit={onSubmit}>
        <div className="QuestionnaireStep-form">
          <div className="QuestionnaireStep-content">{children}</div>

          <QuestionnaireStepNavigationGroup
            stepSlug={step.slug}
            isNextDisabled={isNextDisabled}
          />
        </div>
      </Form>
    </div>
  );
};

export default QuestionnaireStep;
