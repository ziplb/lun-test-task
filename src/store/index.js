import { createStore } from "redux";
import { bindActionCreators } from "redux";

import { createAction } from "./helpers";

// Types
const SUBMIT_PERSONAL_STEP = "SUBMIT_PERSONAL_STEP";

// Actions
const actions = {
  submitPersonalStep: (personal) =>
    createAction(SUBMIT_PERSONAL_STEP, personal),
};

// Reducer
const initialState = { fullName: "", email: "" };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_PERSONAL_STEP: {
      const { fullName, email } = payload;
      return { ...state, fullName, email };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

const { submitPersonalStep } = bindActionCreators(actions, store.dispatch);

export { submitPersonalStep };
export default store;
