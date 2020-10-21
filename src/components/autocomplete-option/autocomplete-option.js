import React from "react";
import cn from "classnames";

import "./autocomplete-option.css";

const AutocompleteOption = ({ option, isSelected, isHighlighted, onClick }) => (
  <button
    className={cn("AutocompleteOption", {
      "AutocompleteOption--selected": isSelected,
      "AutocompleteOption--highlighted": isHighlighted,
    })}
    onMouseDown={(e) => e.preventDefault()}
    onClick={() => onClick(option)}
  >
    {option.title}
  </button>
);

export default AutocompleteOption;
