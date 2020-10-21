import { useState, useEffect } from "react";

const checkIsMach = (mediaQuery) => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(mediaQuery).matches;
};

const useMedia = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(checkIsMach(mediaQuery));

  const handleWindowResize = () => {
    setIsMatch(window.matchMedia(mediaQuery).matches);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaQuery]);

  return isMatch;
};

export default useMedia;
