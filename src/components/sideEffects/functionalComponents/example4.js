//hooks call every second

import { useEffect, useRef } from "react";

export const useCheckExpirationTime = () => {
  let interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => checkExpirationTime(), 60000);
    return () => clearInterval(interval.current);
    // eslint-disable-next-line
  }, []);

  const checkExpirationTime = () => {
    console.log("I am called");
  };
};
