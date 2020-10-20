import { useState, useLayoutEffect } from "react";
import computeScrollIntoView from "compute-scroll-into-view";

const useScrollingIntoView = () => {
  const [optionListEl, setOptionListEl] = useState(null);
  const [selectedOptionEl, setSelectedOptionEl] = useState(null);

  useLayoutEffect(() => {
    if (!optionListEl || !selectedOptionEl) {
      return;
    }

    const actions = computeScrollIntoView(selectedOptionEl, {
      boundary: optionListEl,
      block: "nearest",
    });

    actions.forEach(({ el, top, left }) => {
      el.scrollTop = top;
      el.scrollLeft = left;
    });
  }, [optionListEl, selectedOptionEl]);

  return {
    optionListRef: setOptionListEl,
    selectedOptionRef: setSelectedOptionEl,
  };
};

export default useScrollingIntoView;
