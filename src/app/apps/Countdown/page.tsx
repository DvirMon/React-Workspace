"use client";

import { useRef, useState } from "react";
import classes from "./page.module.css";
import { useCount } from "./useInterval";
import { CountdownForm } from "./components/Form";
import ResultDialog from "./components/Dialog";

export default function CountdownPage() {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const { count, setCount } = useCount(1000, isTimerOn);

  const dialog = useRef<HTMLDialogElement>(null);

  function handleStart() {
    setCount((value) => ++value);
    setIsTimerOn(true);
  }

  function handleStop() {
    setIsTimerOn(false);
    // dialog.current?.opened();
  }

  return (
    <>
      <ResultDialog ref={dialog} />
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
    </>
  );
}
