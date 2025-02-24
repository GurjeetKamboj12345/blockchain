import React from "react";

export const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const interval = setInterval(tick, delay);

      return () => clearInterval(interval);
    }
  }, [delay]);
};