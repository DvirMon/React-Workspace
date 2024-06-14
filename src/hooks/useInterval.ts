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
      
      return () => {
        const env = process.env.NODE_ENV;
        console.log(env);
        if (env === "development") {
          console.log("clear interval");
        }
        clearInterval(id);
      };
    }
  }, [delay, isTimerOn]);
}
