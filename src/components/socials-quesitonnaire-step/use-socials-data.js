import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { object, string, addMethod as addYupMethod } from "yup";

import { submitSocialsStep } from "../../store";

addYupMethod(string, "requiredIfNotNull", function (message) {
  return this.test("defined", message, (value) => value || value === null);
});

const getSocialValue = (value) => value || null;

const validationSchema = object().shape({
  facebook: string()
    .nullable(true)
    .requiredIfNotNull("Это поле является обязательным")
    .url("Вы ввели некорректный адрес"),

  twitter: string()
    .nullable(true)
    .requiredIfNotNull("Это поле является обязательным")
    .url("Вы ввели некорректный адрес"),

  ok: string()
    .nullable(true)
    .requiredIfNotNull("Это поле является обязательным")
    .url("Вы ввели некорректный адрес"),

  vk: string()
    .nullable(true)
    .requiredIfNotNull("Это поле является обязательным")
    .url("Вы ввели некорректный адрес"),
});

const useSocialsData = () => {
  const socials = useSelector((state) => state.socials);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      facebook: getSocialValue(socials.facebook),
      twitter: getSocialValue(socials.twitter),
      vk: getSocialValue(socials.vk),
      ok: getSocialValue(socials.ok),
    },
    validationSchema,
    onSubmit: submitSocialsStep,
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
