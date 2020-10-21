import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Field from "../field/field";
import Autocomplete from "../autocomplete/autocomplete";

import { getFormikError } from "../../utils";
import { locationStep } from "../../data";
import useLocationData from "./use-location-data";

const LocationQuesitonnaireStep = () => {
  const [
    {
      values,
      errors,
      touched,
      countryOptionList,
      cityOptionList,
      selectedCountryOption,
      selectedCityOption,
    },
    { onCoutrySelect, onCitySelect, onCountryChage, onCityChange, onSubmit },
  ] = useLocationData();

  const countryError = getFormikError("country", errors, touched);
  const cityError = getFormikError("city", errors, touched);

  return (
    <QuestionnaireStep step={locationStep} onSubmit={onSubmit}>
      <Form.Row>
        <Field hint={countryError} isError={countryError}>
          <Autocomplete
            name="countryQuery"
            placeholder="Страна"
            value={values.countryQuery}
            selectedOption={selectedCountryOption}
            optionList={countryOptionList}
            onChange={onCountryChage}
            onOptionSelect={onCoutrySelect}
          />
        </Field>
      </Form.Row>

      <Form.Row>
        <Field hint={cityError} isError={cityError}>
          <Autocomplete
            name="cityQuery"
            placeholder="Город"
            value={values.cityQuery}
            selectedOption={selectedCityOption}
            optionList={cityOptionList}
            onChange={onCityChange}
            onOptionSelect={onCitySelect}
          />
        </Field>
      </Form.Row>
    </QuestionnaireStep>
  );
};

export default LocationQuesitonnaireStep;
