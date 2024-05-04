'use client'

import { useState } from "react";
import { DATA } from "../util/data";
import { Quiz } from "../util/type";
import QuizAnswerList from "./Quiz-Answer";
import QuizQuestion from "./Quiz-Question";
import classes from "./Quiz-Card.module.css";

export default function QuizCard() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const quiz: Quiz = DATA[questionIndex];

  const { text, answers } = quiz;

  return (
    <div className={classes.quiz}>
          <QuizQuestion text={text} />
          <QuizAnswerList answers={answers} />
    </div>
  );
}
