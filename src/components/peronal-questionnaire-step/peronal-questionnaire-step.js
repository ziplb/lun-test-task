import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Input from "../input/input";

import { personalStep } from "../../data";

const PersonalQuestionnaireStep = () => {
  return (
    <QuestionnaireStep step={personalStep}>
      <Form>
        <Form.Row>
          <Input placeholder="Имя" />
        </Form.Row>

        <Form.Row>
          <Input placeholder="E-mail" />
        </Form.Row>
      </Form>
    </QuestionnaireStep>
  );
};

export default PersonalQuestionnaireStep;
