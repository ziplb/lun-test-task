import { createStore } from "redux";
import { bindActionCreators } from "redux";

import {
  personalStep,
  locationStep,
  socialsStep,
  favoriteAnimalStep,
  socialList,
} from "../data";
import { filterDuplicate } from "../utils";
import { createAction } from "./helpers";

// Types
const SUBMIT_PERSONAL_STEP = "SUBMIT_PERSONAL_STEP";
const SUBMIT_SOCIALS_STEP = "SUBMIT_SOCIALS_STEP";
const SUBMIT_LOCATION_STEP = "SUBMIT_LOCATION_STEP";
const SUBMIT_FAVORITE_ANIMAL_STEP = "SUBMIT_FAVORITE_ANIMAL_STEP";
const RESTART = "RESTART";

// Actions
const actions = {
  submitPersonalStep: (personal) =>
    createAction(SUBMIT_PERSONAL_STEP, personal),

  submitLocationStep: (location) =>
    createAction(SUBMIT_LOCATION_STEP, location),

  submitSocialsStep: (socials) =>
    createAction(SUBMIT_SOCIALS_STEP, { socials }),

  submitFavoriteAnimalStep: (favoriteAnimal) =>
    createAction(SUBMIT_FAVORITE_ANIMAL_STEP, { favoriteAnimal }),

  restart: () => createAction(RESTART),
};

// Reducer
const initialState = {
  fullName: "",
  email: "",
  country: null,
  city: null,
  socialList: socialList.map((social) => ({ ...social, value: null })),
  favoriteAnimal: null,
  filledStepSlugList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PERSONAL_STEP: {
      const { fullName, email } = payload;

      return {
        ...state,
        fullName,
        email,
        filledStepSlugList: filterDuplicate([
          ...state.filledStepSlugList,
          personalStep.slug,
        ]),
      };
    }

    case SUBMIT_LOCATION_STEP: {
      const { city, country } = payload;

      return {
        ...state,
        city,
        country,
        filledStepSlugList: filterDuplicate([
          ...state.filledStepSlugList,
          locationStep.slug,
        ]),
      };
    }

    case SUBMIT_SOCIALS_STEP: {
      const { socials } = payload;

      return {
        ...state,
        socialList: socialList.map((social) => ({
          ...social,
          value: socials[social.slug],
        })),
        filledStepSlugList: filterDuplicate([
          ...state.filledStepSlugList,
          socialsStep.slug,
        ]),
      };
    }

    case SUBMIT_FAVORITE_ANIMAL_STEP: {
      const { favoriteAnimal } = payload;

      return {
        ...state,
        favoriteAnimal,
        filledStepSlugList: filterDuplicate([
          ...state.filledStepSlugList,
          favoriteAnimalStep.slug,
        ]),
      };
    }

    case RESTART: {
      return initialState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

const {
  submitPersonalStep,
  submitLocationStep,
  submitSocialsStep,
  submitFavoriteAnimalStep,
  restart,
} = bindActionCreators(actions, store.dispatch);

export {
  submitPersonalStep,
  submitLocationStep,
  submitSocialsStep,
  submitFavoriteAnimalStep,
  restart,
};
export default store;
