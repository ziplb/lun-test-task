import React from "react";

import "./svg.css";

const Svg = ({ children, viewBox = "0 0 32 32", className, style }) => (
  <svg
    className={`Svg ${className}`}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    {children}
  </svg>
);

export default Svg;
