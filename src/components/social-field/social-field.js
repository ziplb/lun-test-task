import React from "react";

import Checkbox from "../checkbox/checkbox";
import Input from "../input/input";
import Field from "../field/field";

import "./social-field.css";

const checkIsShowed = (value) => value !== null;

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
              <Input
                name={name}
                placeholder="Ваша страница в Facebook"
                isError={error}
                onChange={onChange}
                isSmall
              />
            </div>
          )}
        </div>
      </Field>
    </div>
  );
};

export default SocialField;
