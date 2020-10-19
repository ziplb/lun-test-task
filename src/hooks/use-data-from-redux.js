import { useSelector } from "react-redux";

import { personalStep, socialsStep, favoriteAnimalStep } from "../data";

const useDataFromRedux = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const socialList = useSelector((state) => state.socialList);
  const favoriteAnimal = useSelector((state) => state.favoriteAnimal);
  const filledStepSlugList = useSelector((state) => state.filledStepSlugList);

  const checkIsStepFilled = (stepSlug) => filledStepSlugList.includes(stepSlug);

  const isPersonalStepFilled = checkIsStepFilled(personalStep.slug);
  const isSocialsStepFilled = checkIsStepFilled(personalStep.slug);
  const isFavoriteAnimalFilled = checkIsStepFilled(favoriteAnimalStep.slug);
  const isQuestionnaireFilled =
    isPersonalStepFilled && isSocialsStepFilled && isFavoriteAnimalFilled;

  return [
    {
      fullName,
      email,
      socialList,
      favoriteAnimal,
      filledStepSlugList,
      isPersonalStepFilled,
      isSocialsStepFilled,
    },
    { checkIsStepFilled },
  ];
};

export default useDataFromRedux;
