import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Field from "../field/field";
import Autocomplete from "../autocomplete/autocomplete";

import { locationStep } from "../../data";
import useLocationData from "./use-location-data";

const LocationQuesitonnaireStep = () => {
  const [
    {
      values,
      countryOptionList,
      cityOptionList,
      selectedCountryOption,
      selectedCityOption,
      countryError,
      cityError,
    },
    { onCoutrySelect, onCitySelect, onCountryChage, onCityChange, onSubmit },
  ] = useLocationData();

  return (
    <QuestionnaireStep step={locationStep} onSubmit={onSubmit}>
      <Form.Row>
        <Field hint={countryError} isError={countryError}>
          <Autocomplete
            name="countryQuery"
            placeholder="Страна"
            emptyMessage="Стран по запросу не найдено"
            value={values.countryQuery}
            selectedOption={selectedCountryOption}
            optionList={countryOptionList}
            onChange={onCountryChage}
            onOptionSelect={onCoutrySelect}
            isFocusOnMount
          />
        </Field>
      </Form.Row>

      <Form.Row>
        <Field hint={cityError} isError={cityError}>
          <Autocomplete
            name="cityQuery"
            placeholder="Город"
            emptyMessage="Городов по запросу не найдено"
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
