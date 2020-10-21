import React from "react";

import { ControlSize } from ".storybook/decorators";
import AnimalRadio from "../components/animal-radio/animal-radio";

import { animalList } from "../data";

export const main = () => <AnimalRadio image={animalList[0].image} />;

export default {
  title: "AnimalRadio",
  decorators: [(story) => <ControlSize story={story} width={160} />],
};
