import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Field from "../field/field";
import Autocomplete from "../autocomplete/autocomplete";

import { getFormikError } from "../../utils";
import { locationStep, countryList } from "../../data";
import useLocationData from "./use-location-data";

const normalizeCountry = ({ slug, title }) => ({ value: slug, title });
const denormalizeCountry = ({ value, title }) => ({ slug: value, title });

const countryOptionList = countryList.map(normalizeCountry);

const FavoriteAnimalQuesitonnaireStep = () => {
  const [
    { values, errors, touched },
    { onChange, onCoutrySelect, onSubmit },
  ] = useLocationData();

  const countryError = getFormikError("country", errors, touched);

  const handleCountryChange = (e) => {
    onCoutrySelect(null);
    onChange(e);
  };

  return (
    <QuestionnaireStep onSubmit={onSubmit} step={locationStep}>
      <Form.Row>
        <Field hint={countryError} isError={countryError}>
          <Autocomplete
            name="countryQuery"
            placeholder="Страна"
            value={values.countryQuery}
            optionList={countryOptionList}
            onChange={handleCountryChange}
            onOptionSelect={(country) =>
              onCoutrySelect(denormalizeCountry(country))
            }
          />
        </Field>
      </Form.Row>
    </QuestionnaireStep>
  );
};

export default FavoriteAnimalQuesitonnaireStep;
