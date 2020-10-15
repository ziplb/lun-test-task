import React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import Button from "../components/button/button";
import { IconAngleArrowRight, IconAngleArrowLeft } from "../components/icons";

export const main = () => (
  <Button
    title={text("Title", "Some text")}
    prependIcon={boolean("Prepend icon") ? <IconAngleArrowLeft /> : null}
    appendIcon={boolean("Append icon") ? <IconAngleArrowRight /> : null}
    isPrimary={boolean("Primary")}
    isDisabled={boolean("Disabled")}
  />
);

export default { title: "Button" };
