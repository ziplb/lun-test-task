import { useFormik } from "formik";
import { object } from "yup";

import { submitLocationStep } from "../../store";
import { useStepNavigation, useDataFromRedux } from "../../hooks";

const validationSchema = object().shape({
  country: object().nullable(true).required("Выберите страну"),
  city: object().nullable(true).required("Выберите город"),
});

const useLocationData = () => {
  const [{ country, city }] = useDataFromRedux();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { goToNextStep }] = useStepNavigation();

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    setFieldValue,
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

  const handleCountrySelect = (country) => {
    setFieldValue("country", country);

    if (country?.title) {
      setFieldValue("countryQuery", country.title);
    }
  };

  const handleCitySelect = (city) => {
    setFieldValue("city", city);

    if (city?.title) {
      setFieldValue("cityQuery", city.title);
    }
  };

  return [
    { values, touched, errors },
    {
      onSubmit: handleSubmit,
      onCoutrySelect: handleCountrySelect,
      onCitySelect: handleCitySelect,
      onChange: handleChange,
    },
  ];
};

export default useLocationData;
