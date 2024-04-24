"use client";

import { useState } from "react";
import classes from "./page.module.css";
import { useCount } from "./useInterval";
import { CountdownForm } from "./components/Form";


export default function CountdownPage() {
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
    <div>
      <CountdownForm />

      <div className={classes.challenge}>
        {/* <span>{startTime || ""}</span> */}
        <button onClick={isTimerOn ? handleStop : handleStart}>
          {isTimerOn ? "Stop" : !count ? "Start" : "Resume"}
        </button>

        <span>{count || ""}</span>
      </div>
    </div>
  );
}
