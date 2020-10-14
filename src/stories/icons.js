import React from "react";

import IconContainer from "../components/icon-container/icon-container";
import * as icons from "../components/icons";

import { prepareIcons } from ".storybook/helpers";

const IconOverview = ({ children, isDarkTheme }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      margin: "-12px",
      color: isDarkTheme ? "#fff" : "#000",
    }}
  >
    {children}
  </div>
);

const IconPreview = ({ title, component }) => {
  const containerStyle = {
    flex: "0 0 auto",
    padding: "12px",
    textAlign: "center",
  };

  const titleStyle = {
    margin: "0",
    marginTop: "8px",
    fontWeight: "400",
    color: "#a6a6a6",
  };

  return (
    <div style={containerStyle}>
      <div>
        <IconContainer>{component}</IconContainer>
      </div>

      <h4 style={titleStyle}>{title}</h4>
    </div>
  );
};

const main = () => (
  <IconOverview>
    {prepareIcons(icons).map(({ title, component: Component }) => (
      <IconPreview key={title} title={title} component={<Component />} />
    ))}
  </IconOverview>
);

export { main };

export default {
  title: "Icons",
};
