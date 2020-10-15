import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Input from "../components/input/input";
import { IconFilledAngleArrowDown } from "../components/icons";

export const main = () => (
  <Input
    placeholder="Some placeholder"
    icon={boolean("Icon") ? <IconFilledAngleArrowDown /> : null}
    isSmall={boolean("Small")}
    isError={boolean("Error")}
  />
);

export default { title: "Input" };
