import React from "react";

import QuestionnaireStepsScene from "../questionnaire-steps-scene/questionnaire-steps-scene";
import QuestionnaireProgress from "../questionnaire-progress/questionnaire-progress";

import "./questionnaire.css";

const Questionnaire = () => (
  <div className="Questionnaire">
    <div className="Questionnaire-progress">
      <QuestionnaireProgress />
    </div>

    <div className="Questionnaire-stepsScene">
      <QuestionnaireStepsScene />
    </div>
  </div>
);

export default Questionnaire;
