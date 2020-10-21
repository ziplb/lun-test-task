import React, { useState, useLayoutEffect } from "react";
import computeScrollIntoView from "compute-scroll-into-view";

import Input from "../input/input";
import AutocompleteOption from "../autocomplete-option/autocomplete-option";

import "./autocomplete.css";

const KEY_CODES = {
  UP: 38,
  DOWN: 40,
  ESCAPE: 27,
  ENTER: 13,
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
  const [optionListEl, setOptionListEl] = useState(null);
  const [selectedOptionEl, setSelectedOptionEl] = useState(null);
  const [highlightedOptionEl, setHighlightedOptionEl] = useState(null);
  const [highlightedOptionIndex, setHighlightedOptionIndex] = useState(-1);

  useLayoutEffect(() => {
    setHighlightedOptionEl(selectedOptionEl);
  }, [selectedOptionEl]);

  useLayoutEffect(() => {
    if (!highlightedOptionEl || !highlightedOptionEl) {
      return;
    }

    const actions = computeScrollIntoView(highlightedOptionEl, {
      boundary: optionListEl,
      block: "nearest",
    });

    actions.forEach(({ el, top, left }) => {
      el.scrollTop = top;
      el.scrollLeft = left;
    });
  }, [optionListEl, highlightedOptionEl]);

  const getRef = (isSelected, isHighlighted) => {
    if (!isSelected && !isHighlighted) {
      return null;
    }

    return isSelected ? setSelectedOptionEl : setHighlightedOptionEl;
  };

  //

  const [isFiltered, setIsFiltered] = useState(false);

  const filteredOptionList = filterOptionList(optionList, value);
  const resultOptionList = isFiltered ? filteredOptionList : optionList;

  useLayoutEffect(() => {
    const optionIndex = resultOptionList.findIndex(
      ({ value }) => value === selectedOption?.value
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

  const goToPrevOption = () => {
    const nextOptionIndex =
      highlightedOptionIndex === 0
        ? resultOptionList.length - 1
        : highlightedOptionIndex - 1;

    setHighlightedOptionIndex(nextOptionIndex);
  };

  const handleKeyDown = () => {
    if (!isOptionsShowed) {
      setIsOptionsShowed(true);
      return;
    }

    goToNextOption();
  };

  const handleKeyUp = () => {
    if (!isOptionsShowed) {
      setIsOptionsShowed(true);
      return;
    }

    goToPrevOption();
  };

  const handleEnter = () => {
    if (highlightedOptionIndex >= 0) {
      onOptionSelect(resultOptionList[highlightedOptionIndex]);
    }

    setIsOptionsShowed(!isOptionsShowed);
  };

  const handleInputKeyDown = (e) => {
    const { keyCode } = e;
    const { UP, DOWN, ESCAPE, ENTER } = KEY_CODES;

    if (keyCode === DOWN) {
      e.preventDefault();
      handleKeyDown();
      return;
    }

    if (keyCode === UP) {
      e.preventDefault();
      handleKeyUp();
      return;
    }

    if (keyCode === ENTER) {
      handleEnter();
      return;
    }

    if (keyCode === ESCAPE) {
      setIsOptionsShowed(false);
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
        <div className="Autocomplete-optionList" ref={setOptionListEl}>
          {resultOptionList.map((option, index) => {
            const isSelected = selectedOption?.value === option.value;
            const isHighlighted = highlightedOptionIndex === index;
            const ref = getRef(isSelected, isHighlighted);

            return (
              <div
                key={option.value}
                className="Autocomplete-optionItem"
                ref={ref}
              >
                <AutocompleteOption
                  option={option}
                  isSelected={isSelected}
                  isHighlighted={isHighlighted}
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
