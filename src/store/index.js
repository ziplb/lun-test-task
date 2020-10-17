import { createStore } from "redux";
import { bindActionCreators } from "redux";

import { socialList } from "../data";
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

  submitFavoriteAnimalStep: (favoriteAnimal) =>
    createAction(SUBMIT_FAVORITE_ANIMAL_STEP, { favoriteAnimal }),
};

// Reducer
const initialState = {
  fullName: "",
  email: "",
  socialList: socialList.map((social) => ({ ...social, value: null })),
  favoriteAnimal: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PERSONAL_STEP: {
      const { fullName, email } = payload;
      return { ...state, fullName, email };
    }

    case SUBMIT_SOCIALS_STEP: {
      const { socials } = payload;

      return {
        ...state,
        socialList: socialList.map((social) => ({
          ...social,
          value: socials[social.slug],
        })),
      };
    }

    case SUBMIT_FAVORITE_ANIMAL_STEP: {
      const { favoriteAnimal } = payload;
      return { ...state, favoriteAnimal };
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
