import { useSelector } from "react-redux";

const useDataFromRedux = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const socialList = useSelector((state) => state.socialList);
  const favoriteAnimal = useSelector((state) => state.favoriteAnimal);
  const filledStepSlugList = useSelector((state) => state.filledStepSlugList);

  return { fullName, email, socialList, favoriteAnimal, filledStepSlugList };
};

export default useDataFromRedux;
