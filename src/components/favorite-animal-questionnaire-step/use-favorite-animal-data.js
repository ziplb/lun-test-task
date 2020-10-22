import { useFormik } from "formik";
import { object, addMethod as addYupMethod } from "yup";

import { submitFavoriteAnimalStep, useFavoriteAnimal } from "../../store";
import { animalKinds } from "../../data";
import { useStepNavigation } from "../../hooks";
import { getFormikError } from "../../utils";

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

  const checkIsFocusOnMount = (animal, index) => {
    if (!values.favoriteAnimal && index === 0) {
      return true;
    }

    return values.favoriteAnimal?.slug === animal.slug;
  };

  return [
    { values, error: getFormikError("favoriteAnimal", errors, touched) },
    {
      onSubmit: handleSubmit,
      onChange: (animal) => setFieldValue("favoriteAnimal", animal),
      checkIsFocusOnMount,
    },
  ];
};

export default useFavoriteAnimalData;