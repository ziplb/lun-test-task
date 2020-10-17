import React from "react";
import cn from "classnames";

import Form from "../form/form";
import QuestionnaireStepNavigationGroup from "./navigation-group";

import { stepSlugInOrderList } from "../../data";
import "./questionnaire-step.css";

const getNumber = (slug) => stepSlugInOrderList.indexOf(slug) + 1;

const QuestionnaireStep = ({ step, children, isAutoWidth, onSubmit }) => (
  <div
    className={cn("QuestionnaireStep", {
      "QuestionnaireStep--autoWidth": isAutoWidth,
    })}
  >
    <h2 className="QuestionnaireStep-title">
      {getNumber(step.slug)}. {step.title}
    </h2>

    <Form onSubmit={onSubmit}>
      <div className="QuestionnaireStep-form">
        <div className="QuestionnaireStep-content">{children}</div>

        <QuestionnaireStepNavigationGroup stepSlug={step.slug} />
      </div>
    </Form>
  </div>
);

export default QuestionnaireStep;
