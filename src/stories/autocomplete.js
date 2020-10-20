import React, { useState, cloneElement } from "react";

import Autocomplete from "../components/autocomplete/autocomplete";
import { optionListSeeds } from "./seeds";

const Store = ({ children }) => {
  const [value, setValue] = useState("");

  return cloneElement(children, {
    value,
    getValue: (e) => e.target.value,
    onChange: setValue,
  });
};

export const main = () => (
  <Store>
    <Autocomplete placeholder="Some placeholder" optionList={optionListSeeds} />
  </Store>
);

export default { title: "Autocomplete" };
