import { useState } from "react";
import { useCount } from "../useInterval";
import classes from "./Challenge.module.css";

export default function Challenge() {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const { count, setCount } = useCount(1000, isTimerOn);

  function handleStart() {
    setCount((value) => ++value);
    setIsTimerOn(true);
  }

  function handleStop() {
    setIsTimerOn(false);
  }

  return (
    <div className={classes.challenge}>
      {/* <span>{startTime || ""}</span> */}
      <button onClick={isTimerOn ? handleStop : handleStart}>
        {isTimerOn ? "Stop" : !count ? "Start" : "Resume"}
      </button>

      <span>{count || ""}</span>
    </div>
  );
}
