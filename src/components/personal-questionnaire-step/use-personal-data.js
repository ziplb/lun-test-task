import { useFormik } from "formik";
import { object, string } from "yup";

import { submitPersonalStep, useFullName, useEmail } from "../../store";
import { useStepNavigation } from "../../hooks";
import { getFormikError } from "../../utils";

const validationSchema = object().shape({
  fullName: string()
    .min(3, "Имя слишком короткое")
    .max(30, "Имя слишком длинное")
    .required("Введите ваше имя"),

  email: string()
    .email("Вы ввели некорректный e-mail")
    .required("Введите ваш e-mail"),
});

const usePersonalData = () => {
  const fullName = useFullName();
  const email = useEmail();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { goToNextStep }] = useStepNavigation();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setTouched,
  } = useFormik({
    initialValues: { fullName, email },
    validationSchema,
    onSubmit: (values) => {
      submitPersonalStep(values);
      goToNextStep();
    },
  });

  const _handleChange = (e) => {
    handleChange(e);
    setTouched({ ...touched, [e.target.name]: false });
  };

  return [
    {
      values,
      fullNameError: getFormikError("fullName", errors, touched),
      emailError: getFormikError("email", errors, touched),
      hasUnsavedData: values.fullName !== fullName || values.email !== email,
    },
    { onChange: _handleChange, onSubmit: handleSubmit },
  ];
};

export default usePersonalData;
