import React from "react";

import Image from "../image/image";
import SquareImagePositioner from "../square-image-positioner/square-image-positioner";

import { useElementFocusOnMount } from "../../hooks";
import "./animal-radio.css";

const AnimalRadio = ({
  value,
  image,
  isDisabled,
  isFocusOnMount,
  onChange = () => {},
  ...rest
}) => {
  const ref = useElementFocusOnMount(isFocusOnMount);

  return (
    <div className="AnimalRadio">
      <label className="AnimalRadio-wrapper">
        <input
          className="AnimalRadio-el"
          type="radio"
          disabled={isDisabled}
          value={value}
          checked={value}
          ref={ref}
          onChange={onChange}
          {...rest}
        />

        <span className="AnimalRadio-image">
          <SquareImagePositioner>
            <Image image={image} isAdaptable />
          </SquareImagePositioner>
        </span>
      </label>
    </div>
  );
};
export default AnimalRadio;
