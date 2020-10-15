import React from "react";
import cn from "classnames";

import IconContainer from "../icon-container/icon-container";
import { IconCheck } from "../icons";

import "./checkbox.css";

const Checkbox = ({
  label,
  isDisabled,
  value,
  checked,
  onChange = () => {},
  ...rest
}) => (
  <div
    className={cn("Checkbox", {
      "Checkbox--disabled": isDisabled,
    })}
  >
    <label className="Checkbox-wrapper">
      <input
        className="Checkbox-el"
        type="checkbox"
        disabled={isDisabled}
        value={value}
        checked={value}
        {...rest}
      />

      <span className="Checkbox-mark">
        <span className="Checkbox-markIcon">
          <IconContainer size="inline">
            <IconCheck />
          </IconContainer>
        </span>
      </span>

      <span
        className="Checkbox-label"
        onMouseDown={(e) => e.preventDefault()} // disable text selection on dblclick;
      >
        {label}
      </span>
    </label>
  </div>
);

export default Checkbox;
