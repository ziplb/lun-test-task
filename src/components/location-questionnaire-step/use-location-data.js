import { useFormik } from "formik";
import { object } from "yup";

import { submitLocationStep } from "../../store";
import { useStepNavigation, useDataFromRedux } from "../../hooks";

const validationSchema = object().shape({
  country: object().nullable(true).required("Выберите страну"),
});

const useLocationData = () => {
  const [{ country }] = useDataFromRedux();
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

  return [
    { values, touched, errors },
    {
      onSubmit: handleSubmit,
      onCoutrySelect: handleCountrySelect,
      onChange: handleChange,
    },
  ];
};

export default useLocationData;
