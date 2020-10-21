import { useFormik } from "formik";
import { object, string } from "yup";

import { submitPersonalStep, useFullName, useEmail } from "../../store";
import { useStepNavigation } from "../../hooks";

const validationSchema = object().shape({
  fullName: string()
    .min(3, "Имя слишком короткое")
    .max(30, "Имя слишком длинное")
    .required("Имя является обязательным полем"),

  email: string()
    .email("Вы ввели некорректный e-mail")
    .required("E-mail является обязательным полем"),
});

const usePersonalData = () => {
  const fullName = useFullName();
  const email = useEmail();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { goToNextStep }] = useStepNavigation();

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { fullName, email },
    validationSchema,
    onSubmit: (values) => {
      submitPersonalStep(values);
      goToNextStep();
    },
  });

  return [
    { values, touched, errors },
    { onChange: handleChange, onSubmit: handleSubmit },
  ];
};

export default usePersonalData;
