import React from "react";

import "./square-image-positioner.css";

const SquareImagePositioner = ({ children }) => (
  <span className="SquareImagePositioner">
    <span className="SquareImagePositioner-el">{children}</span>
  </span>
);

export default SquareImagePositioner;
