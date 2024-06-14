import { useState } from "react";
import classes from "./Quiz-Answer.module.css";
import { ANSWERS } from "../util/data";

type ButtonState = "" | "correct" | "error";

const answers_map: { [key: string]: number } = ANSWERS;

function isAnswerCorrect(questionId: string, index: number): boolean {
  return answers_map[questionId] === index;
}

function getButtonState(value: boolean) : ButtonState {
  return value ? "correct" : "error";
}

function AnswerItem({
  questionId,
  index,
  text,
  onAnswerSelect,
}: {
  questionId: string;
  index: number;
  text: string;
  onAnswerSelect: () => void;
}) {
  const [buttonState, setButtonState] = useState<ButtonState>("");

  function handleSelectAnswer() {
    setButtonState(getButtonState(isAnswerCorrect(questionId, index)));
    onAnswerSelect();
  }

  return (
    <div className={classes.answer}>
      <button className={classes[buttonState]} onClick={handleSelectAnswer}>
        {text}
      </button>
    </div>
  );
}

export default function QuizAnswerList({
  questionId,
  answers,
  onAnswerSelect,
}: {
  questionId: string;
  answers: string[];
  onAnswerSelect: (index: number) => void;
}) {
  function handleAnswer(index: number) {
    onAnswerSelect(index);
  }

  return (
    <div className={classes.answers}>
      {answers.map((text, index) => (
        <AnswerItem
          text={text}
          key={index}
          index={index}
          questionId={questionId}
          onAnswerSelect={() => onAnswerSelect(index)}
        />

        // <div className={classes.answer} key={index}>
        //   <button
        //     className={isCorrect ? classes.correct : ""}
        //     onClick={() => handleAnswer(index)}>
        //     {text}
        //   </button>
        // </div>
      ))}
    </div>
  );
}
