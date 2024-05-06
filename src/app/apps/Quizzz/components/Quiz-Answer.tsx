import classes from "./Quiz-Answer.module.css";

export default function QuizAnswerList({
  answers,
  onAnswerSelect,
}: {
  answers: string[];
  onAnswerSelect : (index : number) => void;
}) {
  function handleAnswer(index : number) {
    onAnswerSelect(index);
  }

  return (
    <div className={classes.answers}>
      {answers.map((text, index) => (
        <div className={classes.answer} key={index}>
          <button onClick={() => handleAnswer(index)}>{text}</button>
        </div>
      ))}
    </div>
  );
}
