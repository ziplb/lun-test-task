import React from "react";

import "./control-size.css";

const ControlSize = ({ story, width, height }) => (
  <div
    className="ControlSize"
    style={{
      maxWidth: width ? `${width}px` : "none",
      height: height ? `${height}px` : "auto",
    }}
  >
    {story()}
  </div>
);

export default ControlSize;
