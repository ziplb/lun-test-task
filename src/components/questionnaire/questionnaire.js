import React from "react";

import QuestionnaireStepsScene from "../questionnaire-steps-scene/questionnaire-steps-scene";

import "./questionnaire.css";

const Questionnaire = () => (
  <div className="Questionnaire">
    <div className="Questionnaire-stepsScene">
      <QuestionnaireStepsScene />
    </div>
  </div>
);

export default Questionnaire;
