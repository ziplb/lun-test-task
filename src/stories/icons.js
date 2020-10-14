import React from "react";

import IconContainer from "../components/icon-container/icon-container";
import * as icons from "../components/icons";

import { prepareIcons } from ".storybook/helpers";

const IconOverview = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      margin: "-12px",
    }}
  >
    {children}
  </div>
);

const IconPreview = ({ title, component }) => (
  <div style={{ flex: "0 0 auto", padding: "12px", textAlign: "center" }}>
    <div>
      <IconContainer>{component}</IconContainer>
    </div>

    <div style={{ margin: "0", marginTop: "8px", color: "#a6a6a6" }}>
      {title}
    </div>
  </div>
);

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
