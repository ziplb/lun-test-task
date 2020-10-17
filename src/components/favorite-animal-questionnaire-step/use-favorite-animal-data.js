import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { object, string, addMethod as addYupMethod } from "yup";

import { submitFavoriteAnimalStep } from "../../store";
import { animalList, animalKinds } from "../../data";
import { useStepNavigation } from "../../hooks";

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
  const [{}, { goToNextStep }] = useStepNavigation();

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
    onSubmit: (values) => {
      submitFavoriteAnimalStep(values);
      goToNextStep();
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
