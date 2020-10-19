import { useFormik } from "formik";
import { object, string, addMethod as addYupMethod } from "yup";

import { submitSocialsStep } from "../../store";
import { useStepNavigation, useDataFromRedux } from "../../hooks";

addYupMethod(string, "requiredIfNotNull", function (message) {
  return this.test("defined", message, (value) => value || value === null);
});

const formValidationSchema = (socialList) =>
  object().shape(
    Object.fromEntries(
      socialList.map(({ slug }) => [
        slug,
        string()
          .nullable(true)
          .requiredIfNotNull("Это поле является обязательным")
          .url("Вы ввели некорректный адрес"),
      ])
    )
  );

const useSocialsData = () => {
  const [{ socialList }] = useDataFromRedux();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { goToNextStep }] = useStepNavigation();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: Object.fromEntries(
      socialList.map(({ slug, value }) => [slug, value])
    ),
    validationSchema: formValidationSchema(socialList),
    onSubmit: (values) => {
      goToNextStep();
      submitSocialsStep(values);
    },
  });

  return [
    { values, touched, errors },
    {
      onChange: handleChange,
      onSubmit: handleSubmit,
      onFieldValueSet: setFieldValue,
    },
  ];
};

export default useSocialsData;
