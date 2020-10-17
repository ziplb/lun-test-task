import { createStore } from "redux";
import { bindActionCreators } from "redux";

import { createAction } from "./helpers";

// Types
const SUBMIT_PERSONAL_STEP = "SUBMIT_PERSONAL_STEP";
const SUBMIT_SOCIALS_STEP = "SUBMIT_SOCIALS_STEP";

// Actions
const actions = {
  submitPersonalStep: (personal) =>
    createAction(SUBMIT_PERSONAL_STEP, personal),

  submitSocialsStep: (socials) =>
    createAction(SUBMIT_SOCIALS_STEP, { socials }),
};

// Reducer
const initialState = {
  fullName: "",
  email: "",
  socials: { facebook: "", vk: "", twitter: "", odnoklassniki: "" },
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

    default:
      return state;
  }
};

const store = createStore(reducer);

const { submitPersonalStep, submitSocialsStep } = bindActionCreators(
  actions,
  store.dispatch
);

export { submitPersonalStep, submitSocialsStep };
export default store;
