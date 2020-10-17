import React from "react";

import AnimalRadio from "../components/animal-radio/animal-radio";

import { animalList } from "../data";

export const main = () => <AnimalRadio image={animalList[0].image} />;

export default { title: "AnimalRadio" };
