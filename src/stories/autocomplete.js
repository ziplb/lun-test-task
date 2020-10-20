import React, { useState, cloneElement } from "react";

import Autocomplete from "../components/autocomplete/autocomplete";
import { optionListSeeds } from "./seeds";

const Store = ({ children }) => {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (value) => {
    setValue(value);
    setSelectedOption(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setValue(option.title);
  };

  return cloneElement(children, {
    value,
    selectedOption,
    getValue: (e) => e.target.value,
    onChange: handleChange,
    onOptionSelect: handleOptionSelect,
  });
};

export const main = () => (
  <Store>
    <Autocomplete placeholder="Some placeholder" optionList={optionListSeeds} />
  </Store>
);

export default { title: "Autocomplete" };
