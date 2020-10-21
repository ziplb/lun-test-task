import { useFormik } from "formik";
import { object } from "yup";

import { submitLocationStep } from "../../store";
import { useStepNavigation, useDataFromRedux } from "../../hooks";

const validationSchema = object().shape({
  favoriteAnimal: object()
    .nullable(true)
    .required("Выберите своего любимого котика"),
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

  return [
    { values, touched, errors },
    {
      onSubmit: handleSubmit,
      onFieldValueSet: setFieldValue,
      onChange: handleChange,
    },
  ];
};

export default useLocationData;
