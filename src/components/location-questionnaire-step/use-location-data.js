import { useFormik } from "formik";
import { object } from "yup";

import { submitLocationStep } from "../../store";
import { useStepNavigation } from "../../hooks";
import { countryList, cityList } from "../../data";
import { useCity, useCountry } from "../../store";
import {
  normalizeCountry,
  denormalizeCountry,
  normalizeCity,
  denormalizeCity,
  getCityListByCountry,
  getCountryByCity,
} from "./helpers";
import { getFormikError } from "../../utils";

const validationSchema = object().shape({
  country: object().nullable(true).required("Выберите страну"),
  city: object().nullable(true).required("Выберите город"),
});

const useLocationData = () => {
  const city = useCity();
  const country = useCountry();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { goToNextStep }] = useStepNavigation();

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    setFieldValue,
    setValues,
    setTouched,
  } = useFormik({
    initialValues: {
      countryQuery: country?.title,
      country,

      cityQuery: city?.title,
      city,
    },
    validationSchema,
    onSubmit: (values) => {
      submitLocationStep(values);
      goToNextStep();
    },
  });

  const cityListByCountry = getCityListByCountry(cityList, values.country);
  const selectedCountryOption =
    values.country && normalizeCountry(values.country);
  const selectedCityOption = values.city && normalizeCity(values.city);

  const setCountry = (country) => setFieldValue("country", country);
  const setCountryQuery = (countryQuery) =>
    setFieldValue("countryQuery", countryQuery);

  const setCity = (city) => setFieldValue("city", city);
  const setCityQuery = (cityQuery) => setFieldValue("cityQuery", cityQuery);
  const resetCity = () => {
    setCity(null);
    setCityQuery("");
  };

  const handleCountrySelect = (normalizedCountry) => {
    const country = denormalizeCountry(normalizedCountry);
    setCountry(country);
    setCountryQuery(country.title);

    if (values.country?.slug !== country.slug) {
      resetCity();
    }
  };

  const handleCitySelect = (normalizedCity) => {
    const city = denormalizeCity(normalizedCity);
    const values = { city, cityQuery: city.title };

    if (!values.country) {
      values.country = getCountryByCity(countryList, city);
      values.countryQuery = getCountryByCity(countryList, city)?.title;
    }

    setValues(values);
  };

  const handleCountryChange = (e) => {
    setCountry(null);
    setCity(null);
    setCityQuery("");
    handleChange(e);
    setTouched({ ...touched, country: false });
  };

  const handleCityChange = (e) => {
    setCity(null);
    handleChange(e);
    setTouched({ ...touched, city: false });
  };

  return [
    {
      values,
      touched,
      errors,
      countryOptionList: countryList.map(normalizeCountry),
      cityOptionList: cityListByCountry.map(normalizeCity),
      selectedCountryOption,
      selectedCityOption,
      countryError: getFormikError("country", errors, touched),
      cityError: getFormikError("city", errors, touched),
    },
    {
      onSubmit: handleSubmit,
      onCountryChage: handleCountryChange,
      onCityChange: handleCityChange,
      onCoutrySelect: handleCountrySelect,
      onCitySelect: handleCitySelect,
    },
  ];
};

export default useLocationData;
