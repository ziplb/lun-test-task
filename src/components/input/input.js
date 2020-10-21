import React from "react";
import cn from "classnames";

import IconContainer from "../icon-container/icon-container";

import { useElementFocusOnMount } from "../../hooks";
import "./input.css";

const Input = ({
  icon,
  isError,
  isSmall,
  isFocusOnMount,
  getValue = (e) => e,
  onChange = () => {},
  ...rest
}) => {
  const ref = useElementFocusOnMount(isFocusOnMount);

  return (
    <div className="Input">
      <input
        className={cn("Input-el", {
          "Input-el--error": isError,
          "Input-el--small": isSmall,
          "Input-el--withRightGap": icon,
        })}
        ref={ref}
        onChange={(e) => onChange(getValue(e))}
        {...rest}
      />

      {icon && (
        <div className="Input-icon">
          <IconContainer>{icon}</IconContainer>
        </div>
      )}
    </div>
  );
};

export default Input;
