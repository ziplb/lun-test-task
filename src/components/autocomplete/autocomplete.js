import React from "react";

import Input from "../input/input";

import "./autocomplete.css";

const Autocomplete = ({
  optionList,
  renderOption = ({ title }) => title,
  ...rest
}) => {
  return (
    <div className="Autocomplete">
      <div className="Autocomplete-input">
        <Input {...rest} />
      </div>

      <div className="Autocomplete-optionList">
        {optionList.map((option) => (
          <div key={option.value} className="Autocomplete-optionItem">
            <div className="Autocomplete-option">{renderOption(option)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
