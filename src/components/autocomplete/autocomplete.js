import React, { useState } from "react";

import Input from "../input/input";
import AutocompleteOption from "../autocomplete-option/autocomplete-option";

import useScrollingIntoView from "./use-scrolling-into-view";
import "./autocomplete.css";

const filterOptionList = (list, value) =>
  list.filter(
    ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) === 0
  );

const Autocomplete = ({
  value,
  optionList,
  selectedOption,
  onChange,
  onOptionSelect,
  ...rest
}) => {
  const [isOptionsShowed, setIsOptionsShowed] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const { optionListRef, selectedOptionRef } = useScrollingIntoView();

  const filteredOptionList = filterOptionList(optionList, value);
  const resultOptionList = isFiltered ? filteredOptionList : optionList;

  const handleInpuClick = () => {
    setIsOptionsShowed(true);
    setIsFiltered(false);
  };

  const handleInputFocus = () => {
    setIsOptionsShowed(true);
    setIsFiltered(false);
  };

  const handleInputChange = (e) => {
    onChange(e);
    setIsFiltered(true);
  };

  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    setIsOptionsShowed(false);
  };

  return (
    <div className="Autocomplete">
      <div className="Autocomplete-input">
        <Input
          value={value}
          onClick={handleInpuClick}
          onFocus={handleInputFocus}
          onBlur={() => setIsOptionsShowed(false)}
          onChange={handleInputChange}
          {...rest}
        />
      </div>

      {isOptionsShowed && (
        <div className="Autocomplete-optionList" ref={optionListRef}>
          {resultOptionList.map((option) => {
            const isSelected = selectedOption?.value === option.value;

            return (
              <div
                key={option.value}
                className="Autocomplete-optionItem"
                ref={isSelected ? selectedOptionRef : null}
              >
                <AutocompleteOption
                  option={option}
                  isSelected={isSelected}
                  onClick={handleOptionSelect}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
