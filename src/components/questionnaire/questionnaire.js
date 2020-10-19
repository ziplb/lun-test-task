import React from "react";
import { Helmet } from "react-helmet";

import QuestionnaireStepsScene from "../questionnaire-steps-scene/questionnaire-steps-scene";
import QuestionnaireProgress from "../questionnaire-progress/questionnaire-progress";

import "./questionnaire.css";

const Questionnaire = () => (
  <div className="Questionnaire">
    <Helmet>
      <title>ЛУН - Анкета</title>
    </Helmet>

    <div className="Questionnaire-progress">
      <QuestionnaireProgress />
    </div>

    <div className="Questionnaire-stepsScene">
      <QuestionnaireStepsScene />
    </div>
  </div>
);

export default Questionnaire;
