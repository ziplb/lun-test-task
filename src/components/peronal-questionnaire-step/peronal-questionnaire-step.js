import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Input from "../input/input";

import { personalStep } from "../../data";
import usePersonalData from "./use-personal-data";

const PersonalQuestionnaireStep = () => {
  const [
    { values, errors, touched },
    { onChange, onSubmit },
  ] = usePersonalData();

  return (
    <QuestionnaireStep step={personalStep} onSubmit={onSubmit}>
      <Form.Row>
        <Input
          placeholder="Имя"
          name="fullName"
          value={values.fullName}
          isError={touched.fullName && errors.fullName}
          onChange={onChange}
        />
      </Form.Row>

      <Form.Row>
        <Input
          placeholder="E-mail"
          name="email"
          value={values.email}
          isError={touched.email && errors.email}
          onChange={onChange}
        />
      </Form.Row>
    </QuestionnaireStep>
  );
};

export default PersonalQuestionnaireStep;
