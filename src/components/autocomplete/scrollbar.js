import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { useMedia } from "../../hooks";

const AutocompleteScrollbar = ({ children }) => {
  const isMobile = useMedia("(max-width: 840px)");
  const Wrapper = isMobile ? "div" : Scrollbars;

  return (
    <Wrapper autoHeightMax={240} autoHeight>
      {children}
    </Wrapper>
  );
};

export default AutocompleteScrollbar;
