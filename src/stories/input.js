import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Input from "../components/input/input";

export const main = () => (
  <Input
    placeholder="Some placeholder"
    isSmall={boolean("Small")}
    isError={boolean("Error")}
  />
);

export default { title: "Input" };
