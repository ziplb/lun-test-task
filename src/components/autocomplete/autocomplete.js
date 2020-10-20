import React, { useState } from "react";
import cn from "classnames";

import Input from "../input/input";

import "./autocomplete.css";

const LEFT_MOUSE_BUTTON_CODE = 0;

const Autocomplete = ({
  value,
  optionList,
  selectedOption,
  onOptionSelect,
  ...rest
}) => {
  const [isOptionsShowed, setIsOptionsShowed] = useState(false);

  const filteredValues = optionList.filter(
    ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) === 0
  );

  const handleClick = (option) => (e) => {
    const isLeftMouseButton = e.button === LEFT_MOUSE_BUTTON_CODE;

    if (isLeftMouseButton) {
      onOptionSelect(option);
    }
  };

  return (
    <div className="Autocomplete">
      <div className="Autocomplete-input">
        <Input
          value={value}
          onFocus={() => setIsOptionsShowed(true)}
          onBlur={() => setIsOptionsShowed(false)}
          {...rest}
        />
      </div>

      {isOptionsShowed && (
        <div className="Autocomplete-optionList">
          {filteredValues.map((option) => (
            <div key={option.value} className="Autocomplete-optionItem">
              <button
                className={cn("Autocomplete-option", {
                  "Autocomplete-option--selected":
                    selectedOption?.value === option.value,
                })}
                onMouseDown={handleClick(option)}
              >
                {option.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
