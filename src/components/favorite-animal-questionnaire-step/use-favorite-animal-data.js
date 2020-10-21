import { useFormik } from "formik";
import { object, addMethod as addYupMethod } from "yup";

import { submitFavoriteAnimalStep } from "../../store";
import { animalKinds } from "../../data";
import { useStepNavigation } from "../../hooks";
import { useFavoriteAnimal } from "../../store";

addYupMethod(object, "isCat", function (message) {
  return this.test(
    "defined",
    message,
    (favoriteAnimal) => favoriteAnimal?.kind === animalKinds.cat
  );
});

const validationSchema = object().shape({
  favoriteAnimal: object()
    .nullable(true)
    .required("Выберите своего любимого котика")
    .isCat("Вы выбрали собачку, а нужно котика"),
});

const useFavoriteAnimalData = () => {
  const favoriteAnimal = useFavoriteAnimal();
  // eslint-disable-next-line no-empty-pattern
  const [{}, { goToNextStep }] = useStepNavigation();

  const { values, touched, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      favoriteAnimal,
    },
    validationSchema,
    onSubmit: (values) => {
      submitFavoriteAnimalStep(values.favoriteAnimal);
      goToNextStep();
    },
  });

  return [
    { values, touched, errors },
    {
      onSubmit: handleSubmit,
      onFieldValueSet: setFieldValue,
    },
  ];
};

export default useFavoriteAnimalData;
