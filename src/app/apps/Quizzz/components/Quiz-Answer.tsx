import classes from "./Quiz-Answer.module.css";

export default function QuizAnswerList({
  answers,
  setProgress,
}: {
  answers: string[];
  setProgress : (value : boolean) => void;
}) {
  function handleAnswer() {
    setProgress(true);
  }

  return (
    <div className={classes.answers}>
      {answers.map((text, index) => (
        <div className={classes.answer} key={index}>
          <button onClick={handleAnswer}>{text}</button>
        </div>
      ))}
    </div>
  );
}
