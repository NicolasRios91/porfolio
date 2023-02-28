import { useCallback } from "react";
import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowDimensions;
};

export default useWindowSize;
