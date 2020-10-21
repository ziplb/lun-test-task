import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { useMedia } from "../../hooks";

const AutocompleteScrollbar = ({ children }) => {
  const isMobile = useMedia("(max-width: 840px)");

  if (!isMobile) {
    return (
      <Scrollbars autoHeightMax={240} autoHeight>
        {children}
      </Scrollbars>
    );
  }

  return <div className="Autocomplete-optionListScroll">{children}</div>;
};

export default AutocompleteScrollbar;
