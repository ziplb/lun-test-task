import { useRef, useLayoutEffect } from "react";

const useIsFocusOnMount = (isFocusOnMount) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (!isFocusOnMount || !elementRef.current) {
      return;
    }

    elementRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elementRef;
};

export default useIsFocusOnMount;
