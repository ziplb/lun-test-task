import React from "react";

import Checkbox from "../checkbox/checkbox";
import Input from "../input/input";
import Field from "../field/field";

import { socialFacebook, socialVk, socialTwitter, socialOk } from "../../data";
import { useMedia } from "../../hooks";

import "./social-field.css";

const checkIsShowed = (value) => value !== null;

const getPlaceholder = (name) => {
  switch (name) {
    case socialFacebook.slug:
      return `Вы в Facebook`;
    case socialVk.slug:
      return `Вы во Вконтакте`;
    case socialTwitter.slug:
      return `Вы в Twitter`;
    case socialOk.slug:
      return `Вы в Одноклассниках`;
    default:
      return "";
  }
};

const SocialField = ({
  label,
  name,
  value,
  error,
  isFocusOnMount,
  onChange,
  onFieldValueSet,
}) => {
  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    onFieldValueSet(name, checked ? "" : null);
  };

  const isMobile = useMedia("(max-width: 640px)");

  return (
    <div className="SocialField">
      <Field hint={error} isError={error}>
        <div className="SocialField-row">
          <div className="SocialField-condition">
            <Checkbox
              label={label}
              name={name}
              value={checkIsShowed(value)}
              isFocusOnMount={isFocusOnMount}
              onChange={handleCheckboxChange}
            />
          </div>

          {checkIsShowed(value) && (
            <div className="SocialField-field">
              <Input
                name={name}
                placeholder={getPlaceholder(name)}
                value={value}
                isError={error}
                onChange={onChange}
                isSmall={!isMobile}
                isFocusOnMount
              />
            </div>
          )}
        </div>
      </Field>
    </div>
  );
};

export default SocialField;
