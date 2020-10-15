import React from "react";
import cn from "classnames";

import "./image.css";

const Image = ({ image, isAdaptable }) => (
  <img
    className={cn("Image", { "Image--adaptable": isAdaptable })}
    src={image.normal}
    srcSet={`${image.double || image.normal} 2x`}
    alt={image.title}
  />
);

export default Image;
