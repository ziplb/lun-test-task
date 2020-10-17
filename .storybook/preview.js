import React from "react";
import { addDecorator } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import "../src/index.css";

addDecorator((story) => <Router>{story()}</Router>);
