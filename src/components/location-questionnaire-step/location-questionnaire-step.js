import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Field from "../field/field";
import Autocomplete from "../autocomplete/autocomplete";

import { getFormikError } from "../../utils";
import { locationStep, countryList } from "../../data";
import useLocationData from "./use-location-data";

const countryOptionList = countryList.map(({ slug, title }) => ({
  title,
  value: slug,
}));

const FavoriteAnimalQuesitonnaireStep = () => {
  const [
    { values, errors, touched },
    { onChange, onSubmit },
  ] = useLocationData();

  const countryError = getFormikError("country", errors, touched);

  console.log("values: ", values);

  return (
    <div className="FavoriteAnimalQuesitonnaireStep">
      <QuestionnaireStep onSubmit={onSubmit} step={locationStep}>
        <Form.Row>
          <Field hint={countryError} isError={countryError}>
            <Autocomplete
              name="countryQuery"
              placeholder="Страна"
              value={values.countryQuery}
              optionList={countryOptionList}
              onChange={onChange}
            />
          </Field>
        </Form.Row>
      </QuestionnaireStep>
    </div>
  );
};

export default FavoriteAnimalQuesitonnaireStep;
