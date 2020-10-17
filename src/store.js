import { createStore } from "redux";

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
