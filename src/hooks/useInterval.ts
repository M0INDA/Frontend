import { useEffect, useRef } from "react";

const useInterval = (isRun: boolean, callback: () => void) => {
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (isRun) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          callback();
        }, 1000);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRun, callback]);
};

export default useInterval;
