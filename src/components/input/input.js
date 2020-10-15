import React from "react";
import cn from "classnames";

import IconContainer from "../icon-container/icon-container";

import "./input.css";

const Input = ({ icon, isError, isSmall, ...rest }) => (
  <div className="Input">
    <input
      className={cn("Input-el", {
        "Input-el--error": isError,
        "Input-el--small": isSmall,
        "Input-el--withRightGap": icon,
      })}
      {...rest}
    />

    {icon && (
      <div className="Input-icon">
        <IconContainer>{icon}</IconContainer>
      </div>
    )}
  </div>
);

export default Input;
