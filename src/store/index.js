import { createStore, bindActionCreators } from "redux";
import { useSelector } from "react-redux";

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
  finishedStepSlugList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PERSONAL_STEP: {
      const { fullName, email } = payload;

      return {
        ...state,
        fullName,
        email,
        finishedStepSlugList: filterDuplicate([
          ...state.finishedStepSlugList,
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
        finishedStepSlugList: filterDuplicate([
          ...state.finishedStepSlugList,
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
        finishedStepSlugList: filterDuplicate([
          ...state.finishedStepSlugList,
          socialsStep.slug,
        ]),
      };
    }

    case SUBMIT_FAVORITE_ANIMAL_STEP: {
      const { favoriteAnimal } = payload;

      return {
        ...state,
        favoriteAnimal,
        finishedStepSlugList: filterDuplicate([
          ...state.finishedStepSlugList,
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

// Selectors
export const useFullName = () => useSelector((state) => state.fullName);
export const useEmail = () => useSelector((state) => state.email);
export const useCountry = () => useSelector((state) => state.country);
export const useCity = () => useSelector((state) => state.city);
export const useSocialList = () => useSelector((state) => state.socialList);
export const useFavoriteAnimal = () =>
  useSelector((state) => state.favoriteAnimal);
export const useFinishedStepSlugList = () =>
  useSelector((state) => state.finishedStepSlugList);

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
