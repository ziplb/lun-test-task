import React from "react";
import cn from "classnames";

import "./image.css";

const Image = ({ media, isAdaptable }) => (
  <img
    className={cn("Image", { "Image--adaptable": isAdaptable })}
    src={media.normal}
    srcSet={`${media.double || media.normal} 2x`}
    alt={media.title}
  />
);

export default Image;
