import React from "react";

import Autocomplete from "../components/autocomplete/autocomplete";
import { optionListSeeds } from "./seeds";

export const main = () => (
  <Autocomplete placeholder="Some placeholder" optionList={optionListSeeds} />
);

export default { title: "Autocomplete" };
