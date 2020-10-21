import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Input from "../input/input";
import Field from "../field/field";

import { personalStep } from "../../data";
import usePersonalData from "./use-personal-data";

const PersonalQuestionnaireStep = () => {
  const [
    { values, fullNameError, emailError },
    { onChange, onSubmit },
  ] = usePersonalData();

  return (
    <QuestionnaireStep step={personalStep} onSubmit={onSubmit}>
      <Form.Row>
        <Field hint={fullNameError} isError={fullNameError}>
          <Input
            placeholder="Имя"
            name="fullName"
            value={values.fullName}
            isError={fullNameError}
            onChange={onChange}
            isFocusOnMount
          />
        </Field>
      </Form.Row>

      <Form.Row>
        <Field hint={emailError} isError={emailError}>
          <Input
            placeholder="E-mail"
            name="email"
            type="email"
            value={values.email}
            isError={emailError}
            onChange={onChange}
          />
        </Field>
      </Form.Row>
    </QuestionnaireStep>
  );
};

export default PersonalQuestionnaireStep;
