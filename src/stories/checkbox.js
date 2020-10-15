import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Checkbox from "../components/checkbox/checkbox";

export const main = () => (
  <Checkbox label="Some label" isDisabled={boolean("Disabled")} />
);

export default { title: "Checkbox" };
