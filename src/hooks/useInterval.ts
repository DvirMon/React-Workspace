import { useCallback, useEffect, useRef, useState } from "react";

export function useInterval(
  callback: () => void,
  delay: number | null,
  isTimerOn: boolean
): void {

  const savedCallback = useRef<() => void>();

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

