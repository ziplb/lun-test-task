import React from "react";
import { Prompt } from "react-router-dom";

const message =
  "При переходе все несохраненные данные будут утеряны. Всё равно перейти?";

const checkIsAllowed = (state, hasUnsavedData) =>
  state?.isDirect || !hasUnsavedData;

const QuestionnairePrompt = ({ hasUnsavedData }) => {
  return (
    <Prompt
      message={({ state }) => checkIsAllowed(state, hasUnsavedData) || message}
    />
  );
};

export default QuestionnairePrompt;
