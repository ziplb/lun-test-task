import React from "react";

import QuesitonnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import SocialField from "../social-field/social-field";

import { socialsStep } from "../../data";
import { getFormikError } from "../../utils";
import useSocialsData from "./use-socials-data";

const SocialsQuestionnaireStep = () => {
  const [
    { values, touched, errors },
    { onChange, onSubmit, onFieldValueSet },
  ] = useSocialsData();

  return (
    <QuesitonnaireStep step={socialsStep} onSubmit={onSubmit}>
      <Form.Row>
        <SocialField
          label="Facebook"
          name="facebook"
          value={values.facebook}
          error={getFormikError("facebook", errors, touched)}
          onChange={onChange}
          onFieldValueSet={onFieldValueSet}
        />
      </Form.Row>

      <Form.Row>
        <SocialField
          label="Вконтакте"
          name="vk"
          value={values.vk}
          error={getFormikError("vk", errors, touched)}
          onChange={onChange}
          onFieldValueSet={onFieldValueSet}
        />
      </Form.Row>

      <Form.Row>
        <SocialField
          label="Twitter"
          name="twitter"
          value={values.twitter}
          error={getFormikError("twitter", errors, touched)}
          onChange={onChange}
          onFieldValueSet={onFieldValueSet}
        />
      </Form.Row>

      <Form.Row>
        <SocialField
          label="Одноклассники"
          name="ok"
          value={values.ok}
          error={getFormikError("ok", errors, touched)}
          onChange={onChange}
          onFieldValueSet={onFieldValueSet}
        />
      </Form.Row>
    </QuesitonnaireStep>
  );
};

export default SocialsQuestionnaireStep;
