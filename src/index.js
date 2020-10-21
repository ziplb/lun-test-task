import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./components/app/app";

import store from "./store";
import { shuffleArray } from "./utils";
import { animalList } from "./data";
import "./index.css";

shuffleArray(animalList);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/lun-test-task">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
