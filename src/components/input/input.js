import React from "react";
import cn from "classnames";

import "./input.css";

const Input = ({ isError, isSmall, ...rest }) => (
  <input
    className={cn("Input", {
      "Input--error": isError,
      "Input--small": isSmall,
    })}
    {...rest}
  />
);

export default Input;
