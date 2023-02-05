import { useEffect, useRef, useState } from "react";

type Callback = () => void;

const useObserver = (callback: Callback) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio === 1 &&
            !loading
          ) {
            setLoading(true);
            callback();
            setLoading(false);
          }
        });
      },
      {
        root: targetRef.current?.parentElement,
        threshold: [1],
      }
    );

    io.observe(targetRef.current);

    return () => {
      io.disconnect();
    };
  }, [callback, loading]);
  return [targetRef];
};

export default useObserver;
