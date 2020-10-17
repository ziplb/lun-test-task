import React from "react";

import QuestionnaireStep from "../components/questionnaire-step/questionnaire-step";

import { personalStep } from "../data";

export const main = () => (
  <QuestionnaireStep step={personalStep}>Some content</QuestionnaireStep>
);

export default { title: "QuestionnaireStep" };
