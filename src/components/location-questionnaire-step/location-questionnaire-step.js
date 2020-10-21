import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import Form from "../form/form";
import Field from "../field/field";
import Autocomplete from "../autocomplete/autocomplete";

import { getFormikError } from "../../utils";
import { locationStep, countryList, cityList } from "../../data";
import useLocationData from "./use-location-data";

const normalizeCountry = ({ slug, title }) => ({ value: slug, title });
const denormalizeCountry = ({ value, title }) => ({ slug: value, title });

const normalizeCity = ({ slug, title, ...rest }) => ({
  value: slug,
  title,
  ...rest,
});
const denormalizeCity = ({ value, title, ...rest }) => ({
  slug: value,
  title,
  ...rest,
});

const getCityListByCountry = (cityList, country) => {
  if (!country) {
    return cityList;
  }

  return cityList.filter(({ countrySlug }) => countrySlug === country.slug);
};

const countryOptionList = countryList.map(normalizeCountry);

const FavoriteAnimalQuesitonnaireStep = () => {
  const [
    { values, errors, touched },
    { onChange, onCoutrySelect, onCitySelect, onSubmit },
  ] = useLocationData();

  const countryError = getFormikError("country", errors, touched);
  const cityError = getFormikError("city", errors, touched);

  const cityListByCountry = getCityListByCountry(cityList, values.country);
  const cityOptionList = cityListByCountry.map(normalizeCity);

  // const

  const handleCountryChange = (e) => {
    onCoutrySelect(null);
    onChange(e);
  };

  return (
    <QuestionnaireStep step={locationStep} onSubmit={onSubmit}>
      <Form.Row>
        <Field hint={countryError} isError={countryError}>
          <Autocomplete
            name="countryQuery"
            placeholder="Страна"
            value={values.countryQuery}
            selectedOption={values.country && normalizeCountry(values.country)}
            optionList={countryOptionList}
            onChange={handleCountryChange}
            onOptionSelect={(country) =>
              onCoutrySelect(denormalizeCountry(country))
            }
          />
        </Field>
      </Form.Row>

      <Form.Row>
        <Field hint={cityError} isError={cityError}>
          <Autocomplete
            name="cityQuery"
            placeholder="Город"
            value={values.cityQuery}
            optionList={cityOptionList}
            onChange={handleCountryChange}
            onOptionSelect={(city) => onCitySelect(denormalizeCity(city))}
          />
        </Field>
      </Form.Row>
    </QuestionnaireStep>
  );
};

export default FavoriteAnimalQuesitonnaireStep;
