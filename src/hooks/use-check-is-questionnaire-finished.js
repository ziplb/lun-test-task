import { stepSlugInOrderList } from "../data";
import { useFinishedStepSlugList } from "../store";

const useCheckIsQuestionnaireFinished = () => {
  const finishdedStepSlugList = useFinishedStepSlugList();
  return stepSlugInOrderList.length === finishdedStepSlugList.length;
};

export default useCheckIsQuestionnaireFinished;
