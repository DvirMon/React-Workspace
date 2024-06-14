"use client";

import { Stack } from "@mui/material";
import { useCallback, useState } from "react";
import QuizCard from "./components/Quiz-Card";
import { DATA } from "./util/data";
import { Quiz } from "./util/type";
import QuizSummary from "./components/Quiz-Summary";

export default function Page() {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const questionIndex = userAnswers.length;
  const quiz: Quiz = DATA[questionIndex];

  const onAnswerSelect = useCallback(function onAnswerSelect(value: number) {
    setUserAnswers((answers) => [...answers, value]);
  }, []);

  if (quiz !== undefined) {
    return (
      <Stack className="w-full items-center">
        <QuizCard quiz={quiz} onAnswerSelect={onAnswerSelect} />
      </Stack>
    );
  }

  return <QuizSummary />;
}
