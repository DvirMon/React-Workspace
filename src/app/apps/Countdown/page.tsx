"use client";

import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import classes from "./page.module.css";

const CountdownForm = () => {
  return (
    <section className={classes.player}>
      <Typography variant="h4">Welcome unknown entity</Typography>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
};

export default function CountdownPage() {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  const timer = useRef<NodeJS.Timeout>();

  // function handleStart() {
  //   setCount((value) => ++value);
  //   timer.current = setInterval(() => {
  //     setCount((value) => ++value);
  //   }, 1000);

  //   setIsTimerOn(() => true);
  // }

  // function handleStop() {
  //   clearInterval(timer.current);
  //   setIsTimerOn(() => false);
  // }

  function handleStart() {
    setStartTime(new Date().getTime());
    setIsTimerOn(true);
  }

  function handleStop() {
    setIsTimerOn(false);
  }

  function updateCount() {
    if (startTime !== null) {
      const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      setCount(elapsedTime);
    }
  }

  if (isTimerOn) {
    updateCount();
  }

  useEffect(() => {
    updateCount();
  }, [count])



  return (
    <div>
      <CountdownForm />

      <div className={classes.challenge}>
        <span>{count || ""}</span>
        <button onClick={isTimerOn ? handleStop : handleStart}>
          {isTimerOn ? "Stop" : !count ? "Start" : "Resume"}
        </button>
      </div>
    </div>
  );
}
