import React from "react";
import cn from "classnames";

import IconContainer from "../icon-container/icon-container";

import "./button.css";

const Icon = ({ icon }) => (
  <span className="Button-icon">
    <IconContainer>{icon}</IconContainer>
  </span>
);

const Button = ({
  title,
  component: Component = "button",
  prependIcon,
  appendIcon,
  isPrimary,
  isDisabled,
  ...rest
}) => (
  <Component
    className={cn("Button", {
      "Button--primary": isPrimary,
      "Button--disabled": isDisabled,
    })}
    disabled={isDisabled}
    {...rest}
  >
    {prependIcon && <Icon icon={prependIcon} />}

    <span className="Button-title">{title}</span>

    {appendIcon && <Icon icon={appendIcon} />}
  </Component>
);

export default Button;
