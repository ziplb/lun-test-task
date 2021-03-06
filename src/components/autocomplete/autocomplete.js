import React, { useState, useLayoutEffect } from "react";

import Input from "../input/input";
import AutocompleteOption from "../autocomplete-option/autocomplete-option";
import { IconFilledAngleArrowDown, IconFilledAngleArrowUp } from "../icons";
import AutocompleteScrollbar from "./scrollbar";

import { scrollIntoView, filterOptionList } from "./helpers";
import "./autocomplete.css";

const KEY_CODES = {
  UP: 38,
  DOWN: 40,
  ESCAPE: 27,
  ENTER: 13,
};

const Autocomplete = ({
  value = "",
  optionList = [],
  selectedOption,
  emptyMessage = "Доступных опций нет",
  isFocusOnMount,
  onChange,
  onOptionSelect,
  ...rest
}) => {
  const [isOptionsShowed, setIsOptionsShowed] = useState(false);
  const [optionListEl, setOptionListEl] = useState(null);
  const [selectedOptionEl, setSelectedOptionEl] = useState(null);
  const [highlightedOptionEl, setHighlightedOptionEl] = useState(null);
  const [highlightedOptionIndex, setHighlightedOptionIndex] = useState(-1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isFirstFocusing, setIsFirstFocusing] = useState(isFocusOnMount);

  const filteredOptionList = filterOptionList(optionList, value);
  const resultOptionList = isFiltered ? filteredOptionList : optionList;
  const selectedOptionIndex = resultOptionList.findIndex(
    ({ value }) => value === selectedOption?.value
  );
  const noOptions = resultOptionList.length === 0;

  useLayoutEffect(() => {
    setHighlightedOptionEl(selectedOptionEl);
  }, [selectedOptionEl]);

  useLayoutEffect(() => {
    if (!optionListEl || !highlightedOptionEl || noOptions) {
      return;
    }

    const el =
      selectedOptionIndex === highlightedOptionIndex && selectedOptionEl
        ? selectedOptionEl
        : highlightedOptionEl;

    scrollIntoView(optionListEl, el);
  }, [
    optionListEl,
    highlightedOptionEl,
    selectedOptionEl,
    selectedOptionIndex,
    highlightedOptionIndex,
    noOptions,
  ]);

  const getRef = (isSelected, isHighlighted) => {
    if (!isSelected && !isHighlighted) {
      return null;
    }

    return isSelected ? setSelectedOptionEl : setHighlightedOptionEl;
  };

  useLayoutEffect(() => {
    if (!selectedOption) {
      return;
    }

    const optionIndex = resultOptionList.findIndex(
      ({ value }) => value === selectedOption?.value
    );

    setHighlightedOptionIndex(optionIndex);
  }, [resultOptionList, selectedOption]);

  const handleInpuClick = () => {
    setIsOptionsShowed(true);

    if (selectedOption) {
      setIsFiltered(false);
    }
  };

  const handleInputFocus = () => {
    setIsFirstFocusing(false);

    if (!isFirstFocusing) {
      setIsOptionsShowed(true);
    }

    if (selectedOption) {
      setIsFiltered(false);
    }
  };

  const handleInputChange = (e) => {
    onChange(e);
    setIsFiltered(true);
    setHighlightedOptionIndex(-1);
  };

  const goToNextOption = () => {
    const nextOptionIndex =
      highlightedOptionIndex === resultOptionList.length - 1
        ? 0
        : highlightedOptionIndex + 1;

    setHighlightedOptionIndex(nextOptionIndex);
  };

  const goToPrevOption = () => {
    const prevOptionIndex =
      highlightedOptionIndex === 0
        ? resultOptionList.length - 1
        : highlightedOptionIndex - 1;

    setHighlightedOptionIndex(prevOptionIndex);
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

    setIsOptionsShowed(false);
    setIsFiltered(false);
  };

  const handleInputKeyDown = (e) => {
    const { keyCode } = e;
    const { UP, DOWN, ESCAPE, ENTER } = KEY_CODES;
    setIsOptionsShowed(true);

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
      if (isOptionsShowed) {
        e.preventDefault();
      }

      handleEnter();
      return;
    }

    if (keyCode === ESCAPE) {
      e.preventDefault();
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
          autoComplete="off"
          icon={
            isOptionsShowed ? (
              <IconFilledAngleArrowUp />
            ) : (
              <IconFilledAngleArrowDown />
            )
          }
          onClick={handleInpuClick}
          onFocus={handleInputFocus}
          onBlur={() => setIsOptionsShowed(false)}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          isFocusOnMount={isFocusOnMount}
          {...rest}
        />
      </div>

      {isOptionsShowed && (
        <div className="Autocomplete-optionList" ref={setOptionListEl}>
          {noOptions ? (
            <div className="Autocomplete-emptyMessage">{emptyMessage}</div>
          ) : (
            <AutocompleteScrollbar>
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
            </AutocompleteScrollbar>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
