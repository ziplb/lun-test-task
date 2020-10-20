import React from "react";

import Input from "../input/input";

import "./autocomplete.css";

const Autocomplete = ({
  value,
  optionList,
  renderOption = ({ title }) => title,
  ...rest
}) => {
  const filteredValues = optionList.filter(({ title }) =>
    title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="Autocomplete">
      <div className="Autocomplete-input">
        <Input value={value} {...rest} />
      </div>

      <div className="Autocomplete-optionList">
        {filteredValues.map((option) => (
          <div key={option.value} className="Autocomplete-optionItem">
            <div className="Autocomplete-option">{renderOption(option)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
