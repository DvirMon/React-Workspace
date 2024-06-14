import { LinearProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

function calculateProgress(
  totalTime: number,
  interval: number,
  elapsedTime: number
) {
  const initialValue = totalTime / interval;

  const currentValue = Math.max(
    initialValue - Math.floor(elapsedTime / interval),
    0
  );

  const progress = ((initialValue - currentValue) / initialValue) * 100;

  return progress;
}

const interval = 10;

export default function QuizProgressbar({
  duration,
  onTimeout,
}: {
  duration: number;
  onTimeout: () => void;
}) {
  const [remainTime, setRemainTime] = useState(duration);

  // notify parent that time is over

  const callback = useCallback(() => {
    console.log('callback called')
    onTimeout(), setRemainTime(duration);
  }, [onTimeout, duration]);

  useEffect(() => {
    console.log("set timeout");
    const id = setTimeout(callback, duration);

    return () => {
      clearTimeout(id);
    };
  }, [duration, callback]);

  // update progress bar

  // useEffect(() => {
  //   console.log("set interval");
  //   if (remainTime > 0) {
  //     const id = setInterval(
  //       () => setRemainTime((value) => value - interval),
  //       interval
  //     );

  //     return () => {
  //       clearInterval(id);
  //     };
  //   }
  // }, [remainTime]);

  const progress = calculateProgress(duration, interval, duration - remainTime);

  // console.log(progress);

  return (
    <LinearProgress
      className="m-6 h-2"
      variant="determinate"
      value={progress}
    />
  );
}
