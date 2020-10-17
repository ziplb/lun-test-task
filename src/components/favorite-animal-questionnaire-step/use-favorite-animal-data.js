import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { object, string, addMethod as addYupMethod } from "yup";

import { submitSocialsStep } from "../../store";
import { animalList, animalKinds } from "../../data";

addYupMethod(string, "isCat", function (message) {
  return this.test(
    "defined",
    message,
    (animalSlug) =>
      animalSlug &&
      animalList.find(({ slug }) => slug === animalSlug).kind ===
        animalKinds.cat
  );
});

const validationSchema = object().shape({
  favoriteAnimalSlug: string()
    .required("Выберите своего любимого котика")
    .isCat("Нужно выбрать котика"),
});

const useSocialsData = () => {
  const favoriteAnimalSlug = useSelector((state) => state.favoriteAnimalSlug);

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      favoriteAnimalSlug,
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
