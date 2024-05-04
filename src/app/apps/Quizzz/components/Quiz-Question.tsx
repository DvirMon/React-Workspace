import { LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCount } from "../../Countdown/hooks/useCount";
import classes from "./Quiz-Question.module.css";

function calculateProgress(
  totalTime: number,
  interval: number,
  elapsedTime: number
) {
  const initialValue = (totalTime * 100) / interval;

  const currentValue = Math.max(
    initialValue - Math.floor(elapsedTime / interval),
    0
  );

  const progress = ((initialValue - currentValue) / initialValue) * 100;

  return progress;
}

const totalTime = 60;
const interval = 10;

export default function QuizQuestion({
  text,
  isStop,
}: {
  text: string;
  isStop: boolean;
}) {
  const [isTimeout, setIsTimeout] = useState(false);
  const { count } = useCount(interval, !isTimeout, totalTime * 100);

  useEffect(() => {
    if (count === 0 || isStop) {
      setIsTimeout(true);
    }
  }, [count, isStop]);

  const progress = calculateProgress(
    totalTime,
    interval,
    totalTime * 100 - count
  );

  return (
    <div className={classes.question}>
      <LinearProgress className="m-6 h-2" variant="determinate" value={progress} />
      <Typography variant="h2">{text}</Typography>;
    </div>
  );
}
