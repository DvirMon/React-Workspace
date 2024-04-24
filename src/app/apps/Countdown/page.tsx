"use client";

import { Typography } from "@mui/material";
import { useState } from "react";
import classes from "./page.module.css";
import { useCount } from "./useInterval";

const CountdownForm = () => {
  return (
    <section className={classes.player}>
      <h4>Welcome unknown entity</h4>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
};

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
