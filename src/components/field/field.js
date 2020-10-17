import React from "react";
import cn from "classnames";

import "./field.css";

const Field = ({ children, hint, isError }) => (
  <div className={cn("Field", { "Field--error": isError })}>
    <div className="Field-el">{children}</div>

    {hint && (
      <div className="Field-hint">
        <div className="Field-hintSeparator" />
        <div className="Field-hintText">{hint}</div>
      </div>
    )}
  </div>
);

export default Field;
