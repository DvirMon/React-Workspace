import { useCallback, useEffect, useRef, useState } from "react";

export function useInterval(
  callback: () => void,
  delay: number | null,
  isTimerOn: boolean
): void {
  const func = useCallback(callback, [callback]);

  const savedCallback = useRef<() => void>(func);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (isTimerOn && delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay, isTimerOn]);
}

export function useCount(delay: number | null, isTimerOn: boolean) {
  const [count, setCount] = useState(0);
  useInterval(() => setCount((value) => ++value), delay, isTimerOn);
  return { count, setCount };
}
