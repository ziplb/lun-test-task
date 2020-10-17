import { createStore } from "redux";
import { bindActionCreators } from "redux";

import { createAction } from "./helpers";

// Types
const SUBMIT_PERSONAL_STEP = "SUBMIT_PERSONAL_STEP";
const SUBMIT_SOCIALS_STEP = "SUBMIT_SOCIALS_STEP";
const SUBMIT_FAVORITE_ANIMAL_STEP = "SUBMIT_FAVORITE_ANIMAL_STEP";

// Actions
const actions = {
  submitPersonalStep: (personal) =>
    createAction(SUBMIT_PERSONAL_STEP, personal),

  submitSocialsStep: (socials) =>
    createAction(SUBMIT_SOCIALS_STEP, { socials }),

  submitFavoriteAnimalStep: (favoriteAnimalSlug) =>
    createAction(SUBMIT_FAVORITE_ANIMAL_STEP, { favoriteAnimalSlug }),
};

// Reducer
const initialState = {
  fullName: "",
  email: "",
  socials: { facebook: "", vk: "", twitter: "", odnoklassniki: "" },
  favoriteAnimalSlug: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PERSONAL_STEP: {
      const { fullName, email } = payload;
      return { ...state, fullName, email };
    }

    case SUBMIT_SOCIALS_STEP: {
      const { socials } = payload;
      return { ...state, socials };
    }

    case SUBMIT_FAVORITE_ANIMAL_STEP: {
      const { favoriteAnimalSlug } = payload;
      return { ...state, favoriteAnimalSlug };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

const {
  submitPersonalStep,
  submitSocialsStep,
  submitFavoriteAnimalStep,
} = bindActionCreators(actions, store.dispatch);

export { submitPersonalStep, submitSocialsStep, submitFavoriteAnimalStep };
export default store;
