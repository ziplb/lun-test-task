import React, { useState, useLayoutEffect } from "react";

import Input from "../input/input";
import AutocompleteOption from "../autocomplete-option/autocomplete-option";

import useScrollingIntoView from "./use-scrolling-into-view";
import "./autocomplete.css";

const KEY_CODES = {
  UP: 38,
  DOWN: 40,
};

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
  const [highlightedOptionIndex, setHighlightedOptionIndex] = useState(-1);

  const filteredOptionList = filterOptionList(optionList, value);
  const resultOptionList = isFiltered ? filteredOptionList : optionList;

  useLayoutEffect(() => {
    if (!selectedOption) {
      return;
    }

    const optionIndex = resultOptionList.findIndex(
      ({ value }) => value === selectedOption.value
    );
    setHighlightedOptionIndex(optionIndex);
  }, [resultOptionList, selectedOption]);

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

  const goToNextOption = () => {
    const nextOptionIndex =
      highlightedOptionIndex === resultOptionList.length - 1
        ? 0
        : highlightedOptionIndex + 1;

    setHighlightedOptionIndex(nextOptionIndex);
  };

  const handleInputKeyDown = (e) => {
    const { keyCode } = e;
    const { UP, DOWN } = KEY_CODES;

    if (keyCode === DOWN) {
      e.preventDefault();
      setIsOptionsShowed(true);
      goToNextOption();
    }
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
          onKeyDown={handleInputKeyDown}
          {...rest}
        />
      </div>

      {isOptionsShowed && (
        <div className="Autocomplete-optionList" ref={optionListRef}>
          {resultOptionList.map((option, index) => {
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
                  isHighlighted={highlightedOptionIndex === index}
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
