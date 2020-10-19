import { useCallback } from "react";
import { useSelector } from "react-redux";

import { personalStep, socialsStep } from "../data";

const useDataFromRedux = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const socialList = useSelector((state) => state.socialList);
  const favoriteAnimal = useSelector((state) => state.favoriteAnimal);
  const filledStepSlugList = useSelector((state) => state.filledStepSlugList);

  const checkIsStepFilled = useCallback(
    (stepSlug) => filledStepSlugList.includes(stepSlug),
    [filledStepSlugList]
  );

  const isPersonalStepFilled = checkIsStepFilled(personalStep.slug);
  const isSocialsStepFilled = checkIsStepFilled(socialsStep.slug);

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
