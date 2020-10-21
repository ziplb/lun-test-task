import { useCallback } from "react";
import { useSelector } from "react-redux";

const useDataFromRedux = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const country = useSelector((state) => state.country);
  const city = useSelector((state) => state.city);
  const socialList = useSelector((state) => state.socialList);
  const favoriteAnimal = useSelector((state) => state.favoriteAnimal);
  const filledStepSlugList = useSelector((state) => state.filledStepSlugList);

  const checkIsStepFilled = useCallback(
    (stepSlug) => filledStepSlugList.includes(stepSlug),
    [filledStepSlugList]
  );

  return [
    {
      fullName,
      email,
      country,
      city,
      socialList,
      favoriteAnimal,
      filledStepSlugList,
    },
    { checkIsStepFilled },
  ];
};

export default useDataFromRedux;
