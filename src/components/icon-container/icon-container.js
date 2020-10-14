import React from "react";
import cn from "classnames";

import "./icon-container.css";

const IconContainer = ({ children, size = "normal" }) => (
  <span
    className={cn("IconContainer", `IconContainer--size-${size}`)}
    size={size}
  >
    {children}
  </span>
);

export default IconContainer;
