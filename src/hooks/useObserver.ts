import { useEffect, useRef } from "react";

type Callback = () => void;

const useInfinity = (callback: Callback) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);
  return [targetRef];
};

export default useInfinity;
