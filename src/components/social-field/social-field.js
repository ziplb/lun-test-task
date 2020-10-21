import React from "react";
import Media from "react-media";

import Checkbox from "../checkbox/checkbox";
import Input from "../input/input";
import Field from "../field/field";

import { socialFacebook, socialVk, socialTwitter, socialOk } from "../../data";

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
  onChange,
  onFieldValueSet,
}) => {
  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    onFieldValueSet(name, checked ? "" : null);
  };

  return (
    <div className="SocialField">
      <Field hint={error} isError={error}>
        <div className="SocialField-row">
          <div className="SocialField-condition">
            <Checkbox
              label={label}
              name={name}
              value={checkIsShowed(value)}
              onChange={handleCheckboxChange}
            />
          </div>

          {checkIsShowed(value) && (
            <div className="SocialField-field">
              <Media query="(max-width: 640px)">
                {(isMobile) => (
                  <Input
                    name={name}
                    placeholder={getPlaceholder(name)}
                    value={value}
                    isError={error}
                    onChange={onChange}
                    isSmall={!isMobile}
                  />
                )}
              </Media>
            </div>
          )}
        </div>
      </Field>
    </div>
  );
};

export default SocialField;
