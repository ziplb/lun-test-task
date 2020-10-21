import React from "react";

import QuesitonnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import SocialField from "../social-field/social-field";

import { socialsStep, socialList } from "../../data";
import useSocialsData from "./use-socials-data";

const SocialsQuestionnaireStep = () => {
  const [
    { values },
    { onChange, onSubmit, onFieldValueSet, getError },
  ] = useSocialsData();

  return (
    <QuesitonnaireStep step={socialsStep} onSubmit={onSubmit}>
      {socialList.map(({ slug, title }, index) => (
        <Form.Row key={slug}>
          <SocialField
            label={title}
            name={slug}
            value={values[slug]}
            error={getError(slug)}
            isFocusOnMount={index === 0}
            onChange={onChange}
            onFieldValueSet={onFieldValueSet}
          />
        </Form.Row>
      ))}
    </QuesitonnaireStep>
  );
};

export default SocialsQuestionnaireStep;
