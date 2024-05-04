import { LinearProgress, Typography } from "@mui/material";
import classes from "./Quiz-Question.module.css";
import { useState } from "react";

export default function QuizQuestion({ text }: { text: string }) {
  const [progress, setProgress] = useState(10);

  return (
    <div className={classes.question}>
      <LinearProgress className="m-6" variant="determinate" value={progress} />
      <Typography variant="h2">{text}</Typography>;
    </div>
  );
}
