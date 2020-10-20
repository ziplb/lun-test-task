import React from "react";
import cn from "classnames";

import Input from "../input/input";

import "./autocomplete.css";

const Autocomplete = ({
  value,
  optionList,
  selectedOption,
  onOptionSelect,
  ...rest
}) => {
  const filteredValues = optionList.filter(
    ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) === 0
  );

  return (
    <div className="Autocomplete">
      <div className="Autocomplete-input">
        <Input value={value} {...rest} />
      </div>

      <div className="Autocomplete-optionList">
        {filteredValues.map((option) => (
          <div key={option.value} className="Autocomplete-optionItem">
            <button
              className={cn("Autocomplete-option", {
                "Autocomplete-option--selected":
                  selectedOption?.value === option.value,
              })}
              onClick={() => onOptionSelect(option)}
            >
              {option.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
