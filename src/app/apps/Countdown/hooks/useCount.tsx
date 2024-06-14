import { useInterval } from "@/hooks/useInterval";
import { useState } from "react";

function addUp(value: number) {
  return ++value;
}

function addDown(value: number) {
  return --value;
}

export function useCount(delay: number | null, isTimerOn: boolean, value = 0) {
  const [count, setCount] = useState(value);
  const action = value === 0 ? addUp : addDown;
  useInterval(() => setCount((value) => action(value)), delay, isTimerOn);
  return { count, setCount };
}
