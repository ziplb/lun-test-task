import React from "react";
import cn from "classnames";

import Form from "../form/form";
import QuestionnaireStepNavigationGroup from "./navigation-group";

import { useStepNavigation } from "../../hooks";
import "./questionnaire-step.css";

const QuestionnaireStep = ({ step, children, isAutoWidth, onSubmit }) => {
  const [{ currentStepSlugIndex }] = useStepNavigation();

  return (
    <div
      className={cn("QuestionnaireStep", {
        "QuestionnaireStep--autoWidth": isAutoWidth,
      })}
    >
      <h2 className="QuestionnaireStep-title">
        {currentStepSlugIndex + 1}. {step.title}
      </h2>

      <Form onSubmit={onSubmit}>
        <div className="QuestionnaireStep-form">
          <div className="QuestionnaireStep-content">{children}</div>

          <QuestionnaireStepNavigationGroup stepSlug={step.slug} />
        </div>
      </Form>
    </div>
  );
};

export default QuestionnaireStep;
