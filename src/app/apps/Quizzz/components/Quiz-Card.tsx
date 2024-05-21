"use client";

import { Typography } from "@mui/material";
import { useCallback } from "react";
import { ANSWERS } from "../util/data";
import { Quiz } from "../util/type";
import QuizAnswerList from "./Quiz-Answer";
import classes from "./Quiz-Card.module.css";
import QuizProgressbar from "./Quiz-Progressbar";

const answers_map: { [key: string]: number } = ANSWERS;

export default function QuizCard({
  quiz,
  onAnswerSelect,
}: {
  quiz: Quiz;
  onAnswerSelect: (value: number) => void;
}) {
  const { text, answers } = quiz;

  const handleAnswerSelect = useCallback(
    () => onAnswerSelect(-1),
    [onAnswerSelect]
  );

  return (
    <div className={classes.quiz}>
      <div className={classes.question}>
        <QuizProgressbar duration={1000} onTimeout={ () => onAnswerSelect(-1)} />
        <Typography variant="h2">{text}</Typography>;
      </div>

      <QuizAnswerList
        questionId={quiz.id}
        answers={answers}
        onAnswerSelect={onAnswerSelect}
      />
    </div>
  );
}
