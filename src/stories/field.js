import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { ControlSize } from ".storybook/decorators";
import Field from "../components/field/field";
import Input from "../components/input/input";

const getHint = (isLongHint) =>
  isLongHint
    ? "Some very very very very very very very very very very very long hint"
    : "Some hint";

export const main = () => {
  const hasHint = boolean("Hint");
  const hint = hasHint && getHint(boolean("Long hint"));
  const isError = hasHint && boolean("Error");

  return (
    <Field hint={hint} isError={isError}>
      <Input placeholder="Email" />
    </Field>
  );
};

export default {
  title: "Field",
  decorators: [(story) => <ControlSize width={320} story={story} />],
};
