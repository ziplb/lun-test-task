import React from "react";

import { Link } from "react-router-dom";

import Button from "../button/button";
import { IconAngleArrowLeft, IconAngleArrowRight } from "../icons";

import { getQuestionnaireStepLink } from "../../routes";
import { stepSlugInOrderList } from "../../data";

const checkIsFirst = (slug) => slug === stepSlugInOrderList[0];
const checkIsLast = (slug) => slug === stepSlugInOrderList.reverse()[0];

const QuestionnaireStepNavigationGroup = ({ stepSlug }) => (
  <div className="QuestionnaireStep-navigationGroup">
    <div className="QuestionnaireStep-navigationItem">
      <Button
        title="Предыдущий"
        prependIcon={<IconAngleArrowLeft />}
        component={Link}
        to={getQuestionnaireStepLink(stepSlug)}
        isDisabled={checkIsFirst(stepSlug)}
      />
    </div>

    <div className="QuestionnaireStep-navigationItem">
      <Button
        title={checkIsLast(stepSlug) ? "Завершить" : "Следующий"}
        appendIcon={<IconAngleArrowRight />}
        isPrimary={checkIsLast(stepSlug)}
      />
    </div>
  </div>
);

export default QuestionnaireStepNavigationGroup;
