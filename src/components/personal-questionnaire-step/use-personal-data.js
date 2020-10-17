import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { object, string } from "yup";

import { submitPersonalStep } from "../../store";

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
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { fullName, email },
    validationSchema,
    onSubmit: submitPersonalStep,
  });

  return [
    { values, touched, errors },
    { onChange: handleChange, onSubmit: handleSubmit },
  ];
};

export default usePersonalData;
